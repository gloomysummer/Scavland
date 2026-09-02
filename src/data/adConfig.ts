/**
 * Unified Ad Monetization Configuration for Scavland Wiki
 * Centralized control for Adsterra, future Google AdSense hot-swap, and CLS safety.
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
  enabled: boolean; // Set to true on 9.4 launch day to light up ads
  adsense: {
    clientId: string; // e.g., 'ca-pub-xxxxxxxxxxxxxxxx'
    slots: Record<string, AdSenseSlotConfig>;
  };
  adsterra: {
    slots: Record<string, AdsterraSlotConfig>;
  };
}

export const adConfig: AdMonetizationConfig = {
  // Provider can be 'adsterra' (initial) -> 'adsense' (future) -> 'none' (paused)
  provider: 'adsterra',
  
  // Set enabled = true on Sept 4 release to activate all compliant ad slots
  enabled: false,

  // Reserved for future Google AdSense hot-swap
  adsense: {
    clientId: 'ca-pub-0000000000000000',
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
