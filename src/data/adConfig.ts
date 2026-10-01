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
  enabled?: boolean;
}

export interface AdsterraNativeConfig {
  key: string;
  scriptUrl: string;
  containerId: string;
  enabled?: boolean;
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
    banners: {
      'banner-728x90': AdsterraBannerConfig;
      'banner-160x600': AdsterraBannerConfig;
      'banner-160x300': AdsterraBannerConfig;
      'banner-320x50': AdsterraBannerConfig;
      'banner-300x250': AdsterraBannerConfig;
    };
    banner300x250: AdsterraBannerConfig;
    nativeBanner: AdsterraNativeConfig;
    slots?: Record<string, any>;
  };
}

export const adConfig: SiteAdConfig = {
  // Global master switch: set to true to activate ads across the site, false to shut down all ads
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

    banners: {
      'banner-728x90': {
        key: '034d80362f29f16c82bed64abde03c90',
        scriptUrl: 'https://www.highperformanceformat.com/034d80362f29f16c82bed64abde03c90/invoke.js',
        width: 728,
        height: 90,
        enabled: true,
      },
      'banner-160x600': {
        key: '7a9a1aa19491dace26d002fed60168d3',
        scriptUrl: 'https://www.highperformanceformat.com/7a9a1aa19491dace26d002fed60168d3/invoke.js',
        width: 160,
        height: 600,
        enabled: true,
      },
      // 160x300: 最高单价尺寸。待在 Adsterra 后台创建 160x300 banner 后，把 key 填进来并改 enabled: true。
      'banner-160x300': {
        key: '',
        scriptUrl: '',
        width: 160,
        height: 300,
        enabled: false,
      },
      'banner-320x50': {
        key: 'a136a53ee2ba898cd6c66c8f8b077bd9',
        scriptUrl: 'https://www.highperformanceformat.com/a136a53ee2ba898cd6c66c8f8b077bd9/invoke.js',
        width: 320,
        height: 50,
        enabled: true,
      },
      'banner-300x250': {
        key: '65cf9132f65fb8c9dd0738fd4a974034',
        scriptUrl: 'https://www.highperformanceformat.com/65cf9132f65fb8c9dd0738fd4a974034/invoke.js',
        width: 300,
        height: 250,
        enabled: true,
      },
    },

    // Backward compatibility alias for banner300x250
    banner300x250: {
      key: '65cf9132f65fb8c9dd0738fd4a974034',
      scriptUrl: 'https://www.highperformanceformat.com/65cf9132f65fb8c9dd0738fd4a974034/invoke.js',
      width: 300,
      height: 250,
      enabled: true,
    },

    // Native Banner 4-widget container (pl31242129)
    nativeBanner: {
      key: 'b11b1dea8c0f54bab487a9131b28ee45',
      scriptUrl: 'https://pl31242129.profitableratecpmnetwork.com/b11b1dea8c0f54bab487a9131b28ee45/invoke.js',
      containerId: 'container-b11b1dea8c0f54bab487a9131b28ee45',
      enabled: true,
    },

    // Backwards compatibility with previous slot names
    slots: {
      'article-banner': {
        key: '65cf9132f65fb8c9dd0738fd4a974034',
        format: 'iframe',
        width: 300,
        height: 250,
        scriptUrl: 'https://www.highperformanceformat.com/65cf9132f65fb8c9dd0738fd4a974034/invoke.js',
      },
      'sidebar-banner': {
        key: '65cf9132f65fb8c9dd0738fd4a974034',
        format: 'iframe',
        width: 300,
        height: 250,
        scriptUrl: 'https://www.highperformanceformat.com/65cf9132f65fb8c9dd0738fd4a974034/invoke.js',
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
