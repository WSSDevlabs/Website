export async function mountHeroScene(mount: HTMLElement) {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isDesktop || reducedMotion) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      observer.disconnect();
      hydrate(mount);
    },
    { rootMargin: '200px' }
  );

  observer.observe(mount);
}

async function hydrate(mount: HTMLElement) {
  const [{ createElement }, { createRoot }, { default: HeroScene }] = await Promise.all([
    import('react'),
    import('react-dom/client'),
    import('./HeroScene')
  ]);

  const poster = document.getElementById('hero-scene-poster');
  poster?.remove();

  const root = createRoot(mount);
  root.render(createElement(HeroScene));
}
