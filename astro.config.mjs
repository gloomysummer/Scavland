import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scavland.wiki',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de'],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  integrations: [sitemap()],
  vite: { build: { assetsInlineLimit: 0 } }
});
