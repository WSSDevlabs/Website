uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying vec2 vUv;

void main() {
  float wave = sin((vUv.x + vUv.y) * 3.14159 + uTime * 0.4) * 0.5 + 0.5;
  vec3 color = mix(uColorA, uColorB, wave);
  float accentMask = smoothstep(0.65, 1.0, sin(vUv.x * 6.0 + uTime * 0.6) * 0.5 + 0.5);
  color = mix(color, uColorC, accentMask * 0.25);
  gl_FragColor = vec4(color, 1.0);
}
