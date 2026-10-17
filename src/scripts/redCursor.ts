// Red pointer that follows the mouse (a sharp dot plus a ring that trails it).
// Added to the page that includes this script; desktop mouse only, off for reduced motion.

let teardown: (() => void) | null = null;

function initRedCursor() {
  teardown?.();
  teardown = null;

  if (!document.querySelector('[data-red-cursor-page]')) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.setAttribute('aria-hidden', 'true');
  ring.setAttribute('aria-hidden', 'true');
  dot.style.cssText =
    'position:fixed;left:0;top:0;z-index:9999;pointer-events:none;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:9999px;background:#d92d20;opacity:0;transition:opacity .25s,width .2s,height .2s,margin .2s;will-change:transform;';
  ring.style.cssText =
    'position:fixed;left:0;top:0;z-index:9998;pointer-events:none;width:38px;height:38px;margin:-19px 0 0 -19px;border-radius:9999px;border:1.5px solid rgba(217,45,32,.75);opacity:0;transition:opacity .25s,width .25s,height .25s,margin .25s,background-color .25s;will-change:transform;';
  document.body.append(ring, dot);

  const pos = { x: -100, y: -100 };
  const trail = { x: -100, y: -100 };
  let shown = false;
  let raf = 0;

  const onMove = (event: PointerEvent) => {
    pos.x = event.clientX;
    pos.y = event.clientY;
    if (!shown) {
      shown = true;
      trail.x = pos.x;
      trail.y = pos.y;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }
    const hot = (event.target as HTMLElement | null)?.closest('a, button, [role="button"], summary, input, textarea, select');
    if (hot) {
      ring.style.width = ring.style.height = '58px';
      ring.style.margin = '-29px 0 0 -29px';
      ring.style.backgroundColor = 'rgba(217,45,32,.12)';
      dot.style.width = dot.style.height = '6px';
      dot.style.margin = '-3px 0 0 -3px';
    } else {
      ring.style.width = ring.style.height = '38px';
      ring.style.margin = '-19px 0 0 -19px';
      ring.style.backgroundColor = 'transparent';
      dot.style.width = dot.style.height = '10px';
      dot.style.margin = '-5px 0 0 -5px';
    }
  };
  const onLeave = () => {
    shown = false;
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  };

  const tick = () => {
    raf = requestAnimationFrame(tick);
    trail.x += (pos.x - trail.x) * 0.16;
    trail.y += (pos.y - trail.y) * 0.16;
    dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    ring.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0)`;
  };

  window.addEventListener('pointermove', onMove, { passive: true });
  document.documentElement.addEventListener('mouseleave', onLeave);
  tick();

  teardown = () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('pointermove', onMove);
    document.documentElement.removeEventListener('mouseleave', onLeave);
    dot.remove();
    ring.remove();
  };
}

document.addEventListener('astro:page-load', initRedCursor);
document.addEventListener('astro:before-swap', () => {
  teardown?.();
  teardown = null;
});
