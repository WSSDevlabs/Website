import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { canAutoplay, pauseVideo, playVideo } from './videoMedia';

gsap.registerPlugin(ScrollTrigger);

// Scroll-driven scenes, layered on top of siteMotion.ts:
//   [data-scramble-word]    hero headline word that scrambles to each sector in the reel
//   [data-scramble]         label that decodes itself when scrolled into view
//   [data-zoom-reveal]      pinned: a small card between two big words grows to fill the screen
//   [data-sector-scroller]  pinned: scrolling steps through sectors (tabs on mobile)
//   [data-hpan]             pinned: vertical scroll pans a track of cards sideways
//   [data-draw-line]        a rule that draws itself as the section scrolls
//   [data-clip-reveal]      media that unmasks and settles as it enters
// Every pinned scene only runs on md+ screens without reduced motion; the
// markup's default state is the static layout, so nothing breaks without JS.

let mm: gsap.MatchMedia | null = null;
let abort: AbortController | null = null;

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function setupScrollScenes() {
  document.addEventListener('astro:page-load', init);
  document.addEventListener('astro:before-swap', () => {
    mm?.revert();
    mm = null;
    abort?.abort();
    abort = null;
  });
}

const MD_MOTION = '(min-width: 768px) and (prefers-reduced-motion: no-preference)';
const LG_MOTION = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';
const MOTION = '(prefers-reduced-motion: no-preference)';

function init() {
  abort = new AbortController();
  mm = gsap.matchMedia();

  initScrambleWord(abort.signal);
  initScrambleIn();
  initSectorScroller(abort.signal);

  // Pinned scenes must be created in the order they appear on the page,
  // otherwise later pins measure their start before earlier spacers exist.
  mm.add(MD_MOTION, () => initZoomReveal());
  mm.add(LG_MOTION, () => pinSectorScrollers());
  mm.add(MD_MOTION, () => initHorizontalPan());
  mm.add(MOTION, () => {
    initDrawLines();
    initClipReveal();
    initStackCards();
    initKinetic();
    initScrollProgress();
  });

  ScrollTrigger.sort();
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true, signal: abort.signal });
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

/* ── Text scramble ──────────────────────────────────────────── */
const GLYPHS = 'abcdefghijklmnopqrstuvwxyz0123456789#%&*';
const scrambleRuns = new WeakMap<HTMLElement, number>();

export function scrambleTo(el: HTMLElement, target: string, duration = 750) {
  if (reducedMotion()) {
    el.textContent = target;
    return;
  }
  const from = el.textContent ?? '';
  const run = (scrambleRuns.get(el) ?? 0) + 1;
  scrambleRuns.set(el, run);
  const start = performance.now();

  const tick = (now: number) => {
    if (scrambleRuns.get(el) !== run) return;
    const t = Math.min((now - start) / duration, 1);
    const length = Math.round(from.length + (target.length - from.length) * t);
    const settled = Math.floor(t * target.length);
    let out = '';
    for (let i = 0; i < length; i++) {
      if (i < settled) out += target[i];
      else if (target[i] === ' ') out += ' ';
      else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    el.textContent = out;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
}

function initScrambleWord(signal: AbortSignal) {
  const el = document.querySelector<HTMLElement>('[data-scramble-word]');
  const reel = document.querySelector<HTMLElement>('[data-hero-reel]');
  if (!el || !reel) return;

  let ready = false;
  const timer = window.setTimeout(() => {
    ready = true;
    scrambleTo(el, reel.dataset.currentWord ?? el.textContent ?? '');
  }, 2200);
  signal.addEventListener('abort', () => window.clearTimeout(timer));

  document.addEventListener(
    'wss:reel-change',
    (event) => {
      if (!ready) return;
      const detail = (event as CustomEvent<{ word: string }>).detail;
      scrambleTo(el, detail.word);
    },
    { signal }
  );
}

function initScrambleIn() {
  const targets = document.querySelectorAll<HTMLElement>('[data-scramble]:not([data-scramble-done])');
  if (!targets.length || reducedMotion()) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);
        const text = el.dataset.scrambleText ?? el.textContent ?? '';
        el.textContent = '';
        scrambleTo(el, text, 900);
      });
    },
    { threshold: 0.6 }
  );
  targets.forEach((el) => {
    el.dataset.scrambleDone = '1';
    el.dataset.scrambleText = el.textContent ?? '';
    observer.observe(el);
  });
}

/* ── Zoom reveal: card between two words grows to full screen ─ */
function initZoomReveal() {
  const cleanups: Array<() => void> = [];
  document.querySelectorAll<HTMLElement>('[data-zoom-reveal]').forEach((section) => {
    const card = section.querySelector<HTMLElement>('[data-zoom-card]');
    const left = section.querySelector<HTMLElement>('[data-zoom-left]');
    const right = section.querySelector<HTMLElement>('[data-zoom-right]');
    const label = section.querySelector<HTMLElement>('[data-zoom-label]');
    const copy = section.querySelector<HTMLElement>('[data-zoom-copy]');
    const media = section.querySelector<HTMLElement>('[data-zoom-media]');
    if (!card || !left || !right) return;

    section.classList.add('is-enhanced');
    gsap.set([left, right, label], { autoAlpha: 1 });
    gsap.set(card, { clipPath: 'inset(35% 39% 35% 39% round 28px)' });
    gsap.set(copy, { autoAlpha: 0, y: 40 });
    gsap.set(media, { scale: 1.35 });

    gsap
      .timeline({
        scrollTrigger: { trigger: section, start: 'top top', end: '+=170%', pin: true, scrub: 0.8 }
      })
      .to(left, { xPercent: -60, autoAlpha: 0, ease: 'power2.in', duration: 0.55 }, 0)
      .to(right, { xPercent: 60, autoAlpha: 0, ease: 'power2.in', duration: 0.55 }, 0)
      .to(label, { autoAlpha: 0, duration: 0.2 }, 0)
      .to(card, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'power2.inOut', duration: 1 }, 0)
      .to(media, { scale: 1, ease: 'power2.out', duration: 1 }, 0)
      .to(copy, { autoAlpha: 1, y: 0, ease: 'power2.out', duration: 0.35 }, 0.8)
      .to({}, { duration: 0.25 });

    cleanups.push(() => section.classList.remove('is-enhanced'));
  });
  return () => cleanups.forEach((fn) => fn());
}

/* ── Sector scroller: pinned on desktop, tabs everywhere ─────── */
type ScrollerState = {
  setActive: (i: number) => void;
  trigger?: ScrollTrigger;
  pin?: () => () => void;
};
const scrollers = new WeakMap<HTMLElement, ScrollerState>();

function initSectorScroller(signal: AbortSignal) {
  document.querySelectorAll<HTMLElement>('[data-sector-scroller]').forEach((root) => {
    const items = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-ss-item]'));
    const media = Array.from(root.querySelectorAll<HTMLElement>('[data-ss-media]'));
    const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-ss-panel]'));
    const fill = root.querySelector<HTMLElement>('[data-ss-progress]');
    const count = items.length;
    if (!count) return;

    let current = 0;
    let visible = false;
    const auto = canAutoplay();

    const syncVideos = () => {
      media.forEach((layer, k) => {
        const video = layer.querySelector('video');
        if (!video) return;
        if (k === current && visible && auto) playVideo(video);
        else pauseVideo(video);
      });
    };

    const setActive = (i: number) => {
      if (i === current && root.dataset.ssReady) return;
      root.dataset.ssReady = '1';
      current = i;
      items.forEach((item, k) => {
        item.classList.toggle('is-active', k === i);
        item.setAttribute('aria-selected', String(k === i));
      });
      media.forEach((layer, k) => layer.classList.toggle('is-active', k === i));
      panels.forEach((panel, k) => {
        const on = k === i;
        panel.classList.toggle('is-active', on);
        panel.toggleAttribute('hidden', !on);
        if (on && !reducedMotion()) {
          gsap.fromTo(
            panel.querySelectorAll('[data-ss-line]'),
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out' }
          );
        }
      });
      syncVideos();
    };

    const state: ScrollerState = { setActive };
    scrollers.set(root, state);
    setActive(0);

    items.forEach((item, k) =>
      item.addEventListener(
        'click',
        () => {
          const trigger = state.trigger;
          if (trigger) {
            const target = trigger.start + ((k + 0.5) / count) * (trigger.end - trigger.start);
            window.scrollTo({ top: target, behavior: 'smooth' });
          } else setActive(k);
        },
        { signal }
      )
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        syncVideos();
      },
      { threshold: 0.25 }
    );
    observer.observe(root);
    signal.addEventListener('abort', () => observer.disconnect());

    state.pin = () => {
      const pin = root.querySelector<HTMLElement>('[data-ss-pin]') ?? root;
      state.trigger = ScrollTrigger.create({
        trigger: pin,
        start: 'top top',
        end: () => `+=${window.innerHeight * count * 0.55}`,
        pin: true,
        onUpdate(self) {
          const i = Math.min(count - 1, Math.floor(self.progress * count));
          setActive(i);
          if (fill) gsap.set(fill, { scaleY: self.progress });
        }
      });
      return () => {
        state.trigger = undefined;
      };
    };
  });
}

function pinSectorScrollers() {
  const cleanups: Array<() => void> = [];
  document.querySelectorAll<HTMLElement>('[data-sector-scroller]').forEach((root) => {
    const cleanup = scrollers.get(root)?.pin?.();
    if (cleanup) cleanups.push(cleanup);
  });
  return () => cleanups.forEach((fn) => fn());
}

/* ── Horizontal pan ─────────────────────────────────────────── */
function initHorizontalPan() {
  const cleanups: Array<() => void> = [];
  document.querySelectorAll<HTMLElement>('[data-hpan]').forEach((section) => {
    const viewport = section.querySelector<HTMLElement>('[data-hpan-viewport]');
    const track = section.querySelector<HTMLElement>('[data-hpan-track]');
    const bar = section.querySelector<HTMLElement>('[data-hpan-progress]');
    if (!viewport || !track) return;

    viewport.classList.add('is-panning');
    const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

    gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate(self) {
          if (bar) gsap.set(bar, { scaleX: self.progress });
        }
      }
    });

    cleanups.push(() => viewport.classList.remove('is-panning'));
  });
  return () => cleanups.forEach((fn) => fn());
}

/* ── Self-drawing rules ─────────────────────────────────────── */
function initDrawLines() {
  document.querySelectorAll<HTMLElement>('[data-draw-line]').forEach((line) => {
    const vertical = line.dataset.drawLine === 'y';
    gsap.fromTo(
      line,
      vertical ? { scaleY: 0 } : { scaleX: 0 },
      {
        ...(vertical ? { scaleY: 1 } : { scaleX: 1 }),
        transformOrigin: vertical ? 'top center' : 'left center',
        ease: 'none',
        scrollTrigger: {
          trigger: line.closest('section') ?? line,
          start: 'top 75%',
          end: 'bottom 70%',
          scrub: 0.6
        }
      }
    );
  });
}

/* ── Media unmask on entry ──────────────────────────────────── */
function initClipReveal() {
  document.querySelectorAll<HTMLElement>('[data-clip-reveal]').forEach((el) => {
    const inner = el.querySelectorAll<HTMLElement>('img, video');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 40%', scrub: 0.7 }
    });
    tl.fromTo(
      el,
      { clipPath: 'inset(14% 9% 14% 9% round 2rem)' },
      { clipPath: 'inset(0% 0% 0% 0% round 2rem)', ease: 'power2.out' },
      0
    );
    if (inner.length) tl.fromTo(inner, { scale: 1.25 }, { scale: 1, ease: 'power2.out' }, 0);
  });
}

/* ── Stacking cards: earlier cards sink back as the next one lands ── */
function initStackCards() {
  document.querySelectorAll<HTMLElement>('[data-stack-cards]').forEach((stack) => {
    const cards = Array.from(stack.querySelectorAll<HTMLElement>('[data-stack-card]'));
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;
      gsap.to(card, {
        scale: 0.94 - (cards.length - i) * 0.005,
        filter: 'brightness(0.97)',
        transformOrigin: 'center top',
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top 85%', end: 'top 35%', scrub: 0.5 }
      });
    });
  });
}

/* ── Kinetic type rows that slide with scroll, alternating direction ── */
function initKinetic() {
  document.querySelectorAll<HTMLElement>('[data-kinetic]').forEach((band) => {
    band.querySelectorAll<HTMLElement>('[data-kinetic-row]').forEach((row, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      gsap.fromTo(
        row,
        { xPercent: dir > 0 ? -18 : 0 },
        {
          xPercent: dir > 0 ? 0 : -18,
          ease: 'none',
          scrollTrigger: { trigger: band, start: 'top bottom', end: 'bottom top', scrub: 0.4 }
        }
      );
    });
  });
}

/* ── Reading progress bar along the top of the window ── */
function initScrollProgress() {
  const bar = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!bar) return;
  gsap.set(bar, { scaleX: 0 });
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => gsap.set(bar, { scaleX: self.progress })
  });
}
