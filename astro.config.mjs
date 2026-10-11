// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://wssdevlabs.com',
  // Every URL ends in "/" so internal links never cause a redirect hop (audit T1).
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404')
    }),
    mdx()
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keep every script as a same-origin file so the Content-Security-Policy
      // in public/_headers can stay strict (no inline scripts).
      assetsInlineLimit: 0
    }
  }
});
