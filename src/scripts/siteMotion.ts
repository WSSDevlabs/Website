import { animate, inView } from 'motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

let lenis: Lenis | null = null;
let lenisRaf: ((time: number) => void) | null = null;
const splits: SplitText[] = [];

/** Register once from the layout; handles initial load + every View Transition. */
export function setupMotion() {
  document.addEventListener('astro:page-load', initMotion);
  document.addEventListener('astro:before-swap', teardownMotion);
}

function teardownMotion() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  splits.forEach((s) => s.revert());
  splits.length = 0;
  if (lenisRaf) {
    gsap.ticker.remove(lenisRaf);
    lenisRaf = null;
  }
  lenis?.destroy();
  lenis = null;
}

function initMotion() {
  if (reducedMotion()) return;

  initLenis();
  initHeroStagger();
  initSplitHeadlines();
  initColorReveal();
  initParallax();
  initStaggerGrids();
  initScrollReveal();
  initCounters();
  initSpotlight();
  initTilt();
  initMagnetic();
  initPress();
}

/* ── Smooth inertia scroll ──────────────────────────────────── */
function initLenis() {
  lenis = new Lenis({ autoRaf: false, duration: 1.05 });
  lenis.on('scroll', ScrollTrigger.update);
  lenisRaf = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(lenisRaf);
  gsap.ticker.lagSmoothing(0);

  // Same-page anchor links glide instead of jumping
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis?.scrollTo(target as HTMLElement, { offset: -96 });
    });
  });
}

/* ── Hero entrance ──────────────────────────────────────────── */
function initHeroStagger() {
  document.querySelectorAll<HTMLElement>('[data-hero-item]').forEach((el) => {
    const delay = parseFloat(el.dataset.heroDelay ?? '0');
    animate(
      el,
      { opacity: [0, 1], y: [18, 0] },
      { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }
    );
  });
}

/* ── Masked line reveal for display headlines ───────────────── */
function initSplitHeadlines() {
  const targets = document.querySelectorAll<HTMLElement>('[data-split]:not([data-split-done])');
  if (!targets.length) return;

  document.fonts.ready.then(() => {
    targets.forEach((el) => {
      if (el.dataset.splitDone) return;
      el.dataset.splitDone = '1';
      const split = SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        linesClass: 'split-line',
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 112,
            duration: 0.85,
            stagger: 0.08,
            ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true }
          });
        }
      });
      splits.push(split);
    });
  });
}

/* ── Word-by-word colour reveal, scrubbed to scroll position ───
   <p data-color-reveal>Plain words dim to ink; <span data-accent>this
   phrase</span> dims to the accent colour instead.</p>                */
function initColorReveal() {
  const targets = document.querySelectorAll<HTMLElement>(
    '[data-color-reveal]:not([data-color-reveal-done])'
  );
  if (!targets.length) return;

  document.fonts.ready.then(() => {
    targets.forEach((el) => {
      if (el.dataset.colorRevealDone) return;
      el.dataset.colorRevealDone = '1';

      const split = SplitText.create(el, { type: 'words', wordsClass: 'cr-word' });
      splits.push(split);

      const accentWords = split.words.filter((w) => w.closest('[data-accent]'));
      const plainWords = split.words.filter((w) => !w.closest('[data-accent]'));

      gsap.set(split.words, { color: 'var(--color-muted)' });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 45%', scrub: true }
      });
      if (plainWords.length) tl.to(plainWords, { color: 'var(--color-ink)', stagger: 0.045, ease: 'none' }, 0);
      if (accentWords.length) tl.to(accentWords, { color: 'var(--color-accent)', stagger: 0.045, ease: 'none' }, 0);
    });
  });
}

/* ── Scroll-scrubbed parallax for media ─────────────────────── */
function initParallax() {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '10');
    gsap.fromTo(
      el,
      { yPercent: -speed },
      {
        yPercent: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6
        }
      }
    );
  });
}

/* ── Stagger grids (data-stagger → data-stagger-child) ──────── */
function initStaggerGrids() {
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((wrap) => {
    const kids = Array.from(wrap.querySelectorAll<HTMLElement>('[data-stagger-child]'));
    kids.forEach((k) => animate(k, { opacity: 0 }, { duration: 0 }));
    inView(
      wrap,
      () => {
        kids.forEach((k, i) => {
          animate(
            k,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }
          );
        });
      },
      { amount: 0.1 }
    );
  });
}

/* ── Site-wide scroll reveal ────────────────────────────────── */
type RevealKeyframes = Record<string, Array<number | string>>;

const REVEAL_VARIANTS: Record<string, RevealKeyframes> = {
  up: { opacity: [0, 1], y: [18, 0] },
  left: { opacity: [0, 1], x: [-24, 0] },
  right: { opacity: [0, 1], x: [24, 0] },
  zoom: { opacity: [0, 1], scale: [0.965, 1] },
  blur: { opacity: [0, 1], y: [14, 0], filter: ['blur(6px)', 'blur(0px)'] },
  // Depth entrance: card rotates up out of the page on a real 3-D axis
  tilt3d: { opacity: [0, 1], rotateX: [-52, 0], y: [46, 0], z: [-140, 0] }
};

const SECTION_CYCLE = ['up', 'tilt3d', 'blur', 'zoom', 'tilt3d'];

function revealOnScroll(el: HTMLElement, variant: string, delay = 0) {
  if (el.dataset.revealBound) return;
  el.dataset.revealBound = '1';

  const keyframes = REVEAL_VARIANTS[variant] ?? REVEAL_VARIANTS.up;
  el.style.opacity = '0';
  el.style.willChange = 'transform, opacity';

  if (variant === 'tilt3d') {
    const parent = el.parentElement;
    if (parent) parent.style.perspective = '1400px';
    el.style.transformStyle = 'preserve-3d';
  }

  inView(
    el,
    () => {
      animate(el, keyframes, {
        duration: variant === 'tilt3d' ? 0.85 : 0.6,
        delay,
        ease: variant === 'tilt3d' ? [0.22, 1, 0.36, 1] : [0.16, 1, 0.3, 1]
      });
      el.style.willChange = 'auto';
    },
    { amount: 0.15 }
  );
}

function initScrollReveal() {
  // Explicit opt-in: <div data-reveal="left" data-reveal-delay="0.2">
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    revealOnScroll(el, el.dataset.reveal || 'up', parseFloat(el.dataset.revealDelay ?? '0'));
  });

  // Auto mode: animate section content on every page
  document.querySelectorAll<HTMLElement>('main section').forEach((section, si) => {
    if (section.dataset.noreveal !== undefined) return;
    const container =
      section.querySelector<HTMLElement>(':scope > div:not(.dot-pattern):not(.hairline)') ??
      section;

    Array.from(container.children).forEach((node, bi) => {
      if (!(node instanceof HTMLElement)) return;
      if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;
      if (
        node.dataset.revealBound ||
        node.dataset.stagger !== undefined ||
        node.dataset.heroItem !== undefined
      )
        return;
      if (node.closest('[data-stagger]') || node.querySelector('[data-stagger], [data-hero-item]'))
        return;
      if (node.classList.contains('dot-pattern') || node.classList.contains('hairline')) return;

      // Blocks containing a split headline: reveal siblings, let GSAP own the headline
      if (node.dataset.split !== undefined) return;
      if (node.querySelector('[data-split]')) {
        Array.from(node.children).forEach((child, ci) => {
          if (!(child instanceof HTMLElement)) return;
          if (child.dataset.split !== undefined) return;
          revealOnScroll(child, 'up', Math.min(ci * 0.05, 0.2));
        });
        return;
      }

      const isGrid = node.classList.contains('grid');
      const isList = /space-y/.test(node.className);
      const kids = Array.from(node.children).filter(
        (k): k is HTMLElement => k instanceof HTMLElement && !k.classList.contains('hidden')
      );

      if (isGrid && kids.length === 2) {
        revealOnScroll(kids[0], 'left');
        revealOnScroll(kids[1], 'right');
      } else if ((isGrid || isList) && kids.length >= 3) {
        const variant = SECTION_CYCLE[si % SECTION_CYCLE.length];
        kids.forEach((k, i) => revealOnScroll(k, variant, Math.min(i * 0.06, 0.36)));
      } else {
        revealOnScroll(node, 'up', Math.min(bi * 0.04, 0.16));
      }
    });
  });
}

/* ── Count-up numbers: <span data-count="50" data-count-suffix="+"> ─ */
function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>('[data-count]:not([data-count-bound])');
  counters.forEach((el) => {
    el.dataset.countBound = '1';
    const target = parseFloat(el.dataset.count ?? '0');
    const suffix = el.dataset.countSuffix ?? '';
    el.textContent = `0${suffix}`;

    inView(
      el,
      () => {
        const duration = 1500;
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          el.textContent = `${Math.round(eased * target)}${suffix}`;
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { amount: 0.5 }
    );
  });
}

/* ── Cursor-tracked spotlight on cards ──────────────────────── */
function initSpotlight() {
  if (!finePointer()) return;
  document.querySelectorAll<HTMLElement>('.spotlight-card').forEach((card) => {
    let raf = 0;
    card.addEventListener('pointermove', (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  });
}

/* ── 3-D card tilt ──────────────────────────────────────────── */
function initTilt() {
  if (!finePointer()) return;
  document.querySelectorAll<HTMLElement>('.tilt-card').forEach((card) => {
    const parent = card.parentElement;
    if (parent) parent.style.perspective = '1000px';
    card.style.transformStyle = 'preserve-3d';

    card.addEventListener('mousemove', (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      animate(
        card,
        { rotateX: -y * 5, rotateY: x * 5, scale: 1.012 },
        { duration: 0.12, ease: 'easeOut' }
      );
    });

    card.addEventListener('mouseleave', () => {
      animate(
        card,
        { rotateX: 0, rotateY: 0, scale: 1 },
        { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
      );
    });
  });
}

/* ── Magnetic CTAs ──────────────────────────────────────────── */
function initMagnetic() {
  if (!finePointer()) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((btn) => {
    const pull = 0.3;
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * pull;
      const y = (e.clientY - r.top - r.height / 2) * pull;
      animate(btn, { x, y }, { duration: 0.18, ease: 'easeOut' });
    });
    btn.addEventListener('mouseleave', () => {
      animate(btn, { x: 0, y: 0 }, { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] });
    });
  });
}

/* ── Tactile press on every interactive element ─────────────── */
function initPress() {
  document.querySelectorAll<HTMLElement>('a[href], button').forEach((el) => {
    el.addEventListener('pointerdown', () => {
      animate(el, { scale: 0.97 }, { duration: 0.08 });
    });
    el.addEventListener('pointerup', () => {
      animate(el, { scale: 1 }, { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] });
    });
    el.addEventListener('pointerleave', () => {
      animate(el, { scale: 1 }, { duration: 0.2 });
    });
  });
}
