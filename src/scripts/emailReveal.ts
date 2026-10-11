/**
 * Renders emails from split data-attributes at runtime instead of literal SSR text,
 * so Cloudflare's Email Address Obfuscation (which rewrites plain "user@domain" text
 * in the server-rendered HTML into "[email protected]") never sees a real address to mangle.
 */
export function setupEmailReveal() {
  revealEmails();
  document.addEventListener('astro:page-load', revealEmails);
}

function revealEmails() {
  document.querySelectorAll<HTMLElement>('[data-email-user]:not([data-email-bound])').forEach((el) => {
    const user = el.dataset.emailUser;
    const domain = el.dataset.emailDomain;
    if (!user || !domain) return;
    el.dataset.emailBound = '1';

    const email = `${user}@${domain}`;
    const isAnchor = el instanceof HTMLAnchorElement;

    // Anchors wrapping other markup (icons, labels) only get their href set;
    // setting textContent would wipe out that nested content.
    if (isAnchor) {
      el.href = `mailto:${email}`;
    }
    if (!isAnchor || el.dataset.emailText === '1') {
      el.textContent = email;
    }
  });
}
