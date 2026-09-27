/**
 * Global Site Configuration for Scavland Wiki
 * Harmonized with game-wiki-builder standard & GK2 multi-system integration.
 */
import { adConfig } from './adConfig';

export const siteConfig = {
  siteName: 'Scavland Wiki',
  shortName: 'Scavland',
  gameName: 'Scavland',
  siteUrl: 'https://scavland.wiki',
  url: 'https://scavland.wiki',
  name: 'Scavland Wiki',
  contactEmail: 'xrwhello@gmail.com',
  developerName: 'NoShadow',

  // Master ad configuration
  adConfig,

  // Legacy ads backward compatibility
  ads: {
    enabled: adConfig.enabled,
    socialBar: {
      enabled: adConfig.enabled && adConfig.provider === 'adsterra',
      scriptUrl: adConfig.adsterra.socialBarUrl,
    },
    articleBanner: {
      enabled: adConfig.enabled && adConfig.provider === 'adsterra',
      key: adConfig.adsterra.banner300x250.key,
      scriptUrl: adConfig.adsterra.banner300x250.scriptUrl,
    },
  },
};
