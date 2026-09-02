/**
 * Unified Ad Monetization Configuration for Scavland Wiki
 * Centralized control for Adsterra, Google AdSense Auto Ads, Grow.me, and CLS safety.
 * Modeled after top-performing gaming publisher moonlightpeaks.wiki (55k+ monthly visits).
 */

export type AdProvider = 'adsterra' | 'adsense' | 'none';

export interface AdsterraSlotConfig {
  key: string;
  format: 'iframe' | 'native';
  width: number;
  height: number;
  scriptUrl: string;
  containerId?: string;
}

export interface AdSenseSlotConfig {
  slotId: string;
  format: 'auto' | 'fluid' | 'rectangle';
  responsive: boolean;
}

export interface AdMonetizationConfig {
  provider: AdProvider;
  enabled: boolean; // Global master switch: set to true on 9.4 launch to activate
  adsense: {
    clientId: string; // e.g., 'ca-pub-xxxxxxxxxxxxxxxx'
    autoAds: boolean; // Enable Google AdSense Auto Ads (AI-driven native insertions like moonlightpeaks.wiki)
    slots: Record<string, AdSenseSlotConfig>;
  };
  growMe: {
    enabled: boolean; // Mediavine Grow.me 1st-party audience network for 50%+ CPM lift
    siteId: string;
  };
  adsterra: {
    slots: Record<string, AdsterraSlotConfig>;
  };
}

export const adConfig: AdMonetizationConfig = {
  // Switched to 'adsense' for Google AdSense site review and monetization
  provider: 'adsense',
  
  // Master switch
  enabled: true,

  // Google AdSense Configuration (Future-proof Auto Ads architecture)
  adsense: {
    clientId: 'ca-pub-9054706633269604',
    autoAds: true, // Google AI manages automated high-value in-article insertions
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

  // Mediavine Grow.me 1st-party audience network interface
  growMe: {
    enabled: false,
    siteId: '',
  },

  // Active Adsterra configuration
  adsterra: {
    slots: {
      'article-banner': {
        key: '3a70dc4036609f3d3b61b9711872a734',
        format: 'iframe',
        width: 300,
        height: 250,
        scriptUrl: 'https://www.highrevenueformat.com/3a70dc4036609f3d3b61b9711872a734/invoke.js',
      },
      'feed-native': {
        key: '4ad68b4b48bdf741c0d0256e6aea8665',
        format: 'native',
        width: 100,
        height: 100,
        scriptUrl: 'https://pl30949155.effectivecpmnetwork.com/4ad68b4b48bdf741c0d0256e6aea8665/invoke.js',
        containerId: 'container-4ad68b4b48bdf741c0d0256e6aea8665',
      },
    },
  },
};
