// Home hero: turns the flat photo into a pseudo-3D "hologram".
// A soft depth map (public/images/hero/hero-depth.png) lets the figure shift against the wall as the mouse
// moves, with a red rim light, faint scanlines and a slow scan sweep on top.
// Falls back silently to the plain <img> when WebGL, motion or the images are unavailable.

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAG = `
precision highp float;
varying vec2 v_uv;
uniform sampler2D u_tex;
uniform sampler2D u_depth;
uniform vec2 u_mouse;
uniform vec2 u_res;
uniform vec2 u_img;
uniform float u_posx;
uniform float u_time;

vec2 coverUV(vec2 uv) {
  float rs = u_res.x / u_res.y;
  float is = u_img.x / u_img.y;
  vec2 s = rs > is ? vec2(1.0, is / rs) : vec2(rs / is, 1.0);
  vec2 o = vec2((1.0 - s.x) * u_posx, (1.0 - s.y) * 0.5);
  return uv * s + o;
}

void main() {
  vec2 uv = coverUV(vec2(v_uv.x, 1.0 - v_uv.y));
  float d = texture2D(u_depth, uv).r;

  // parallax: near parts travel further than the wall
  vec2 shift = u_mouse * vec2(0.026, 0.016);
  vec2 p = uv - shift * (d - 0.15);

  // slight colour split along the movement, strongest on the figure
  vec2 ca = u_mouse * 0.0016 * d;
  float r = texture2D(u_tex, p + ca).r;
  float g = texture2D(u_tex, p).g;
  float b = texture2D(u_tex, p - ca).b;
  vec3 col = vec3(r, g, b);

  // red rim light where the depth map changes quickly (the silhouette)
  float e = 0.012;
  float gx = texture2D(u_depth, p + vec2(e, 0.0)).r - texture2D(u_depth, p - vec2(e, 0.0)).r;
  float gy = texture2D(u_depth, p + vec2(0.0, e)).r - texture2D(u_depth, p - vec2(0.0, e)).r;
  float rim = pow(clamp(length(vec2(gx, gy)) * 1.5, 0.0, 1.0), 2.2);
  float flicker = 0.85 + 0.15 * sin(u_time * 7.0 + p.y * 40.0);
  col += vec3(1.0, 0.16, 0.08) * rim * 0.4 * flicker;

  // scan sweep, only over the figure
  float sweepPos = fract(u_time * 0.11);
  float sweep = smoothstep(0.05, 0.0, abs(p.y - (1.0 - sweepPos))) * smoothstep(0.2, 0.7, d);
  col += vec3(1.0, 0.25, 0.15) * sweep * 0.32;

  // fine scanlines
  float line = 0.5 + 0.5 * sin(gl_FragCoord.y * 1.6);
  col *= 1.0 - 0.07 * line * (0.4 + d);

  gl_FragColor = vec4(col, 1.0);
}`;

type Cleanup = () => void;
let cleanup: Cleanup | null = null;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) ?? 'shader');
  return shader;
}

function texture(gl: WebGLRenderingContext, img: HTMLImageElement, unit: number) {
  const tex = gl.createTexture()!;
  gl.activeTexture(gl.TEXTURE0 + unit);
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return tex;
}

async function initHeroHolo() {
  cleanup?.();
  cleanup = null;

  const root = document.querySelector<HTMLElement>('[data-hero-holo]');
  const canvas = root?.querySelector<HTMLCanvasElement>('canvas[data-hero-canvas]');
  if (!root || !canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return;

  let bg: HTMLImageElement;
  let depth: HTMLImageElement;
  try {
    [bg, depth] = await Promise.all([loadImage(root.dataset.bg!), loadImage(root.dataset.depth!)]);
  } catch {
    return;
  }
  if (!document.body.contains(root)) return;

  let program: WebGLProgram;
  try {
    program = gl.createProgram()!;
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  } catch {
    return;
  }
  gl.useProgram(program);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(program, 'a_pos');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const bgTex = texture(gl, bg, 0);
  const depthTex = texture(gl, depth, 1);
  void bgTex;
  void depthTex;
  gl.uniform1i(gl.getUniformLocation(program, 'u_tex'), 0);
  gl.uniform1i(gl.getUniformLocation(program, 'u_depth'), 1);
  gl.uniform2f(gl.getUniformLocation(program, 'u_img'), bg.naturalWidth, bg.naturalHeight);

  const uMouse = gl.getUniformLocation(program, 'u_mouse');
  const uRes = gl.getUniformLocation(program, 'u_res');
  const uTime = gl.getUniformLocation(program, 'u_time');
  const uPosX = gl.getUniformLocation(program, 'u_posx');

  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  let visible = true;
  let raf = 0;
  const start = performance.now();

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const w = Math.max(1, Math.round(root.clientWidth * dpr));
    const h = Math.max(1, Math.round(root.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    gl.viewport(0, 0, w, h);
    gl.uniform2f(uRes, w, h);
    gl.uniform1f(uPosX, window.innerWidth < 768 ? 0.47 : 0.5);
  };

  const onMove = (event: PointerEvent) => {
    const rect = root.getBoundingClientRect();
    target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  };
  const onLeave = () => {
    target.x = 0;
    target.y = 0;
  };

  const frame = () => {
    raf = requestAnimationFrame(frame);
    if (!visible || document.hidden) return;
    const t = (performance.now() - start) / 1000;
    if (!finePointer) {
      // touch screens: a slow, gentle sway instead of the mouse
      target.x = Math.sin(t * 0.6) * 0.7;
      target.y = Math.cos(t * 0.45) * 0.35;
    }
    current.x += (target.x - current.x) * 0.06;
    current.y += (target.y - current.y) * 0.06;
    gl.uniform2f(uMouse, current.x, current.y);
    gl.uniform1f(uTime, t);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0 });
  io.observe(root);
  window.addEventListener('resize', resize);
  if (finePointer) {
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerleave', onLeave);
  }
  resize();
  frame();
  canvas.classList.remove('opacity-0');

  cleanup = () => {
    cancelAnimationFrame(raf);
    io.disconnect();
    window.removeEventListener('resize', resize);
    root.removeEventListener('pointermove', onMove);
    root.removeEventListener('pointerleave', onLeave);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  };
}

document.addEventListener('astro:page-load', initHeroHolo);
document.addEventListener('astro:before-swap', () => {
  cleanup?.();
  cleanup = null;
});
