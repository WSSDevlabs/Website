/**
 * Astro's ClientRouter replaces the whole <body> on client-side navigation,
 * which wipes out Botpress's dynamically-injected widget (it's not part of
 * any page's server-rendered HTML, so nothing tells Astro to persist it).
 * Re-inject the loader scripts on every page-load if the widget is missing.
 */
const INJECT_SRC = 'https://cdn.botpress.cloud/webchat/v5.0/inject.js';
const CONFIG_SRC = 'https://files.bpcontent.cloud/2026/08/25/17/20260825170240-MPLEXMR6.js';

export function setupBotpress() {
  ensureBotpressWidget();
  document.addEventListener('astro:page-load', ensureBotpressWidget);
}

function ensureBotpressWidget() {
  if (document.querySelector('.bpChatContainer, .bpWebchat')) return;

  document.querySelectorAll(`script[src="${INJECT_SRC}"], script[src="${CONFIG_SRC}"]`).forEach((s) => s.remove());

  const inject = document.createElement('script');
  inject.src = INJECT_SRC;
  inject.onload = () => {
    const config = document.createElement('script');
    config.src = CONFIG_SRC;
    document.body.appendChild(config);
  };
  document.body.appendChild(inject);
}
