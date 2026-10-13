/**
 * Conversion tracking (audit T12): WhatsApp clicks, quote clicks, order and form
 * submits. Events go to Cloudflare Zaraz when it's switched on for the domain
 * (Cloudflare dashboard > Zaraz). Without Zaraz this does nothing, and no cookies
 * are ever set by this script.
 */
type Zaraz = { track: (event: string, properties?: Record<string, string>) => void };

declare global {
  interface Window {
    zaraz?: Zaraz;
  }
}

export function track(event: string, properties: Record<string, string> = {}) {
  // Analytics must never break the page, so a failed call is deliberately ignored.
  try {
    window.zaraz?.track(event, { page: window.location.pathname, ...properties });
  } catch {
    /* tracking is best-effort */
  }
}

export function setupClickTracking() {
  document.addEventListener('click', (event) => {
    const target = (event.target as Element | null)?.closest('a, button');
    if (!target) return;

    const named = target.getAttribute('data-track');
    const href = target.getAttribute('href') ?? '';

    if (named) {
      track(named, { label: target.textContent?.trim().slice(0, 60) ?? '' });
    } else if (href.includes('wa.me/')) {
      track('whatsapp_click');
    }
  });
}
