import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { guides } from './src/data/guides.ts';

const guideDateMap = new Map(guides.map((g) => [g.slug, g.updated]));
const defaultDate = '2026-09-08';

export default defineConfig({
  site: 'https://scavland.wiki',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de'],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        const guideMatch = url.match(/\/guide\/([a-zA-Z0-9\-]+)\/?$/);

        if (guideMatch && guideDateMap.has(guideMatch[1])) {
          item.lastmod = new Date(guideDateMap.get(guideMatch[1]));
          item.changefreq = 'daily';
          item.priority = 0.9;
          return item;
        }

        if (url === 'https://scavland.wiki/' || url === 'https://scavland.wiki/de/' || url === 'https://scavland.wiki/ru/') {
          item.lastmod = new Date(defaultDate);
          item.changefreq = 'daily';
          item.priority = 1.0;
          return item;
        }

        if (url.includes('/faq/') || url.includes('/updates/') || url.includes('/weapons/') || url.includes('/factions/') || url.includes('/resources/') || url.includes('/guide/')) {
          item.lastmod = new Date(defaultDate);
          item.changefreq = 'daily';
          item.priority = 0.8;
          return item;
        }

        if (url.includes('/comparisons/')) {
          item.lastmod = new Date('2026-09-07');
          item.changefreq = 'weekly';
          item.priority = 0.7;
          return item;
        }

        if (url.includes('/system-requirements/') || url.includes('/release-date/') || url.includes('/maps/') || url.includes('/wiki/')) {
          item.lastmod = new Date('2026-09-06');
          item.changefreq = 'weekly';
          item.priority = 0.6;
          return item;
        }

        item.lastmod = new Date('2026-08-25');
        item.changefreq = 'monthly';
        item.priority = 0.3;
        return item;
      }
    })
  ],
  vite: { build: { assetsInlineLimit: 0 } }
});
