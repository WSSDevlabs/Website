// Drives every <VideoMedia> on the page.
// - Background clips load lazily and play only while on screen.
// - Hover clips play on pointer hover (desktop only).
// - Players swap the poster for a <video> or a youtube-nocookie iframe on click,
//   so nothing from YouTube loads until the visitor asks for it.
// Reduced-motion and Save-Data visitors get the poster image only.

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const saveData = () =>
  Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);

export const canAutoplay = () => !reducedMotion() && !saveData();

let observer: IntersectionObserver | null = null;

export function setupVideoMedia() {
  document.addEventListener('astro:page-load', initVideoMedia);
  document.addEventListener('astro:before-swap', () => {
    observer?.disconnect();
    observer = null;
  });
}

function loadVideo(video: HTMLVideoElement) {
  if (video.dataset.loaded) return;
  const mobile = window.innerWidth < 768 && video.dataset.srcMobile;
  video.src = (mobile ? video.dataset.srcMobile : video.dataset.src) ?? '';
  video.dataset.loaded = '1';
}

export function playVideo(video: HTMLVideoElement) {
  loadVideo(video);
  video.muted = true;
  video.addEventListener('playing', () => video.classList.add('is-playing'), { once: true });
  video.play().catch(() => {
    /* Autoplay blocked: the poster stays visible. */
  });
}

export function pauseVideo(video: HTMLVideoElement, hide = false) {
  video.pause();
  if (hide) video.classList.remove('is-playing');
}

function initVideoMedia() {
  const autoplay = canAutoplay();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) playVideo(video);
        else pauseVideo(video);
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll<HTMLElement>('[data-video="background"]').forEach((wrap) => {
    if (wrap.dataset.bound) return;
    wrap.dataset.bound = '1';
    const video = wrap.querySelector('video');
    if (!video || !autoplay || wrap.hasAttribute('data-manual')) return;

    if (wrap.hasAttribute('data-hover')) {
      if (!finePointer()) return;
      const host = wrap.closest<HTMLElement>('[data-hover-host]') ?? wrap;
      host.addEventListener('mouseenter', () => playVideo(video));
      host.addEventListener('mouseleave', () => pauseVideo(video, true));
      return;
    }

    observer?.observe(video);
  });

  document.querySelectorAll<HTMLElement>('[data-video="player"]').forEach((wrap) => {
    if (wrap.dataset.bound) return;
    wrap.dataset.bound = '1';
    const button = wrap.querySelector<HTMLButtonElement>('[data-video-play]');
    button?.addEventListener('click', () => startPlayer(wrap));
  });
}

function startPlayer(wrap: HTMLElement) {
  const youtubeId = wrap.dataset.youtube;
  const title = wrap.dataset.title ?? 'Video';
  wrap.querySelector('[data-video-play]')?.remove();

  if (youtubeId) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    iframe.title = title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.className = 'absolute inset-0 h-full w-full border-0';
    wrap.appendChild(iframe);
    return;
  }

  const video = document.createElement('video');
  video.src = wrap.dataset.src ?? '';
  video.controls = true;
  video.playsInline = true;
  video.autoplay = true;
  video.muted = true;
  video.className = 'absolute inset-0 h-full w-full object-cover is-playing';
  video.setAttribute('aria-label', title);
  wrap.appendChild(video);
  video.play().catch(() => {});
}
