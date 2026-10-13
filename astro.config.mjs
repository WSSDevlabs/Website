// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://wssdevlabs.com',
  prefetch: true,
  integrations: [
    react(),
    sitemap({ filter: (page) => !page.includes('/404') }),
    mdx(),
    partytown({
      config: { forward: ['dataLayer.push'] }
    })
  ],

  image: {
    domains: [],
    remotePatterns: []
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
