import type { Root } from 'react-dom/client';

// Lazily mounts a React Three Fiber scene into `mount` once it nears the viewport.
// Desktop only, never for reduced-motion visitors; unmounts on page swap.
// Usage: <div data-scene="network" data-scene-props='{"linkOpacity":0.3}'></div>

const SCENES = {
  network: () => import('./NetworkScene')
};

export function setupScenes() {
  document.addEventListener('astro:page-load', mountAll);
}

function mountAll() {
  const desktop = window.matchMedia('(min-width: 768px)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!desktop || reduced) return;

  document.querySelectorAll<HTMLElement>('[data-scene]').forEach((mount) => {
    if (mount.dataset.sceneBound) return;
    mount.dataset.sceneBound = '1';
    const loader = SCENES[mount.dataset.scene as keyof typeof SCENES];
    if (!loader) return;

    let root: Root | null = null;
    let cancelled = false;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const [{ createElement }, { createRoot }, scene] = await Promise.all([
          import('react'),
          import('react-dom/client'),
          loader()
        ]);
        if (cancelled) return;
        const props = mount.dataset.sceneProps ? JSON.parse(mount.dataset.sceneProps) : {};
        root = createRoot(mount);
        root.render(createElement(scene.default, props));
        requestAnimationFrame(() => mount.classList.add('is-ready'));
      },
      { rootMargin: '200px' }
    );
    observer.observe(mount);

    document.addEventListener(
      'astro:before-swap',
      () => {
        cancelled = true;
        observer.disconnect();
        root?.unmount();
        root = null;
      },
      { once: true }
    );
  });
}
