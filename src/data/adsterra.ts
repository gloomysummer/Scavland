/**
 * Adsterra 广告位配置与全局开关
 * 对应 src/data/adConfig.ts，作为兼容模块保留
 */
import { adConfig } from "./adConfig";

export const ADSTERRA_CONFIG = {
  // 全局广告总开关
  SHOW_ADS: adConfig.enabled && adConfig.provider === 'adsterra',

  // 1. Popunder
  popunder: {
    enabled: adConfig.enabled && adConfig.provider === 'adsterra',
    scriptUrl: adConfig.adsterra.popunderUrl,
  },

  // 2. Social Bar
  socialBar: {
    enabled: adConfig.enabled && adConfig.provider === 'adsterra',
    scriptUrl: adConfig.adsterra.socialBarUrl,
  },

  // 3. 300x250 矩形横幅
  articleBanner: {
    enabled: adConfig.enabled && adConfig.provider === 'adsterra',
    key: adConfig.adsterra.banner300x250.key,
    scriptUrl: adConfig.adsterra.banner300x250.scriptUrl,
  },

  // 4. 原生推荐横幅 Native Banner
  nativeBanner: {
    enabled: adConfig.enabled && adConfig.provider === 'adsterra',
    containerId: adConfig.adsterra.nativeBanner.containerId,
    scriptUrl: adConfig.adsterra.nativeBanner.scriptUrl,
  },
};
