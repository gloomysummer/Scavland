import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { guides } from './src/data/guides.ts';

const guideDateMap = new Map(guides.map((g) => [g.slug, g.updated]));

// Automatically compute the most recent update date across all guides for hub freshness
const latestGuideDate = guides.reduce(
  (max, g) => (g.updated && g.updated > max ? g.updated : max),
  '2026-09-10'
);

const sectionDateMap = {
  maps: '2026-09-30',        // Subterranean Bunker B-4 and outposts
  weapons: '2026-09-28',     // Update 0.7.0 weapon durability pass
  updates: '2026-09-28',     // Update 0.7.0/0.7.1/0.7.2 changelog
  factions: '2026-09-16',    // Faction vendor tiers & reputation
  faq: '2026-09-26',         // General launch and troubleshooting FAQ
  resources: '2026-09-16',   // Loot & salvage materials
  comparisons: '2026-09-10', // Scavland vs Zero Sievert
  'system-requirements': '2026-09-06',
  'release-date': '2026-09-06',
};

export default defineConfig({
  site: 'https://scavland.wiki',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url;
        const guideMatch = url.match(/\/guide\/([a-zA-Z0-9\-]+)\/?$/);

        // 1. Individual Guide Articles: dynamic from guides.ts
        if (guideMatch && guideDateMap.has(guideMatch[1])) {
          item.lastmod = new Date(guideDateMap.get(guideMatch[1]));
          item.changefreq = 'daily';
          item.priority = 0.9;
          return item;
        }

        // 2. Homepages (Root & Localized): dynamic from latest guide publication
        if (url === 'https://scavland.wiki/' || url === 'https://scavland.wiki/de/' || url === 'https://scavland.wiki/ru/' || url === 'https://scavland.wiki/ja/') {
          item.lastmod = new Date(latestGuideDate);
          item.changefreq = 'daily';
          item.priority = 1.0;
          return item;
        }

        // 3. Guide Hub Index (Root & Localized): dynamic from latest guide publication
        if (/\/guide\/?$/.test(url)) {
          item.lastmod = new Date(latestGuideDate);
          item.changefreq = 'daily';
          item.priority = 0.8;
          return item;
        }

        // 4. Section Pages (Maps, Weapons, Updates, Factions, etc.)
        for (const [sec, date] of Object.entries(sectionDateMap)) {
          if (url.includes(`/${sec}/`)) {
            item.lastmod = new Date(date);
            item.changefreq = ['maps', 'weapons', 'updates'].includes(sec) ? 'daily' : 'weekly';
            item.priority = ['maps', 'weapons'].includes(sec) ? 0.8 : 0.7;
            return item;
          }
        }

        // 5. Wiki Overview Hub
        if (url.includes('/wiki/')) {
          item.lastmod = new Date(latestGuideDate);
          item.changefreq = 'daily';
          item.priority = 0.8;
          return item;
        }

        // 6. Static / Legal Pages (About, Terms, Privacy Policy, Contact)
        item.lastmod = new Date('2026-08-25');
        item.changefreq = 'monthly';
        item.priority = 0.3;
        return item;
      }
    })
  ],
  vite: { build: { assetsInlineLimit: 0 } }
});
