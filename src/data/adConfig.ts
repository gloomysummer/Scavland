/**
 * Unified Ad Monetization Configuration for Scavland Wiki
 * Standardized after game-wiki-builder SOP & Graveyard Keeper 2 architecture.
 * Supports dual-track monetization: Adsterra Day-1 + AdSense review switch.
 */

export type AdProvider = 'adsterra' | 'adsense' | 'none';

export interface AdsterraBannerConfig {
  key: string;
  scriptUrl: string;
  width: number;
  height: number;
}

export interface AdsterraNativeConfig {
  scriptUrl: string;
  containerId: string;
}

export interface AdSenseSlotConfig {
  slotId: string;
  format: 'auto' | 'fluid' | 'rectangle';
  responsive: boolean;
}

export interface SiteAdConfig {
  enabled: boolean;
  provider: AdProvider;
  adsense: {
    clientId: string;
    autoAds: boolean;
    slots?: Record<string, AdSenseSlotConfig>;
  };
  growMe?: {
    enabled: boolean;
    siteId: string;
  };
  adsterra: {
    popunderUrl: string;
    socialBarUrl: string;
    banner300x250: AdsterraBannerConfig;
    nativeBanner: AdsterraNativeConfig;
    // Legacy slots map for backward compatibility
    slots?: Record<string, any>;
  };
}

export const adConfig: SiteAdConfig = {
  // Global master switch: set to true to activate ads across the site
  enabled: true,

  // Active monetization provider: 'adsterra' | 'adsense' | 'none'
  provider: 'adsterra',

  // Google AdSense Configuration (Future-proof Auto Ads architecture & one-click audit switch)
  adsense: {
    clientId: 'ca-pub-9054706633269604',
    autoAds: true,
    slots: {
      'article-banner': {
        slotId: '1234567890',
        format: 'rectangle',
        responsive: true,
      },
      'feed-native': {
        slotId: '0987654321',
        format: 'fluid',
        responsive: true,
      },
    },
  },

  growMe: {
    enabled: false,
    siteId: '',
  },

  // Active Adsterra configuration for Scavland Wiki
  adsterra: {
    // Popunder script (Disabled for UX & AdSense compliance)
    popunderUrl: '',

    // Social Bar script (Disabled for UX & AdSense compliance)
    socialBarUrl: '',

    // Banner 300x250 iframe (High CPM $1.035 performer)
    banner300x250: {
      key: '65cf9132f65fb8c9dd0738fd4a974034',
      scriptUrl: 'https://www.highrevenueformat.com/65cf9132f65fb8c9dd0738fd4a974034/invoke.js',
      width: 300,
      height: 250,
    },

    // Native Banner 4-widget container (Disabled due to low ROI, replaced by 300x250)
    nativeBanner: {
      scriptUrl: '',
      containerId: '',
    },

    // Backwards compatibility with previous slot names
    slots: {
      'article-banner': {
        key: '65cf9132f65fb8c9dd0738fd4a974034',
        format: 'iframe',
        width: 300,
        height: 250,
        scriptUrl: 'https://www.highrevenueformat.com/65cf9132f65fb8c9dd0738fd4a974034/invoke.js',
      },
      'sidebar-banner': {
        key: '65cf9132f65fb8c9dd0738fd4a974034',
        format: 'iframe',
        width: 300,
        height: 250,
        scriptUrl: 'https://www.highrevenueformat.com/65cf9132f65fb8c9dd0738fd4a974034/invoke.js',
      },
      'feed-native': {
        key: 'b11b1dea8c0f54bab487a9131b28ee45',
        format: 'native',
        width: 100,
        height: 100,
        scriptUrl: 'https://pl31242129.profitableratecpmnetwork.com/b11b1dea8c0f54bab487a9131b28ee45/invoke.js',
        containerId: 'container-b11b1dea8c0f54bab487a9131b28ee45',
      },
    },
  },
};
