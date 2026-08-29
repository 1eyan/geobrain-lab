import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://re-Gwen.github.io',
  base: process.env.BASE_PATH ?? '/geobrain-lab',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
