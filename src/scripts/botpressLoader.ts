/**
 * Loads the Botpress webchat scripts exactly once per real page load.
 * Deliberately does NOT re-inject on astro:page-load (client-side nav) —
 * that caused live-site navigation to break, likely from re-running the
 * loader against an already-initialized window.botpress global.
 */
const INJECT_SRC = 'https://cdn.botpress.cloud/webchat/v5.0/inject.js';
const CONFIG_SRC = 'https://files.bpcontent.cloud/2026/08/25/17/20260825170240-MPLEXMR6.js';

export function setupBotpress() {
  if ((window as unknown as { __bpLoaderInit?: boolean }).__bpLoaderInit) return;
  (window as unknown as { __bpLoaderInit?: boolean }).__bpLoaderInit = true;

  const inject = document.createElement('script');
  inject.src = INJECT_SRC;
  inject.onload = () => {
    const config = document.createElement('script');
    config.src = CONFIG_SRC;
    document.body.appendChild(config);
  };
  document.body.appendChild(inject);
}
