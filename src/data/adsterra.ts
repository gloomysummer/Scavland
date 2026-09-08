/**
 * Adsterra 广告位配置与全局开关
 * 
 * 状态：已接入全站架构，默认关闭 (SHOW_ADS = false)
 * 激活方式：9.4 游戏发售流量爆发时，只需将 SHOW_ADS 改为 true 即可一键全站上线广告！
 */

export const ADSTERRA_CONFIG = {
  // 全局广告总开关：设为 true 激活
  SHOW_ADS: true,

  // 1. Social Bar (为保护 AdSense 审核，默认保持 false)
  socialBar: {
    enabled: false,
    scriptUrl: "https://pl31067793.profitableratecpmnetwork.com/ce/2d/39/ce2d39f20244d4325b8fdf728f1cd06d.js",
  },

  // 2. 文章/攻略详情页 300x250 矩形横幅
  articleBanner: {
    enabled: true,
    key: "65cf9132f65fb8c9dd0738fd4a974034",
    scriptUrl: "https://www.highrevenueformat.com/65cf9132f65fb8c9dd0738fd4a974034/invoke.js",
  },

  // 3. 原生推荐横幅 Native Banner
  nativeBanner: {
    enabled: true,
    containerId: "container-b11b1dea8c0f54bab487a9131b28ee45",
    scriptUrl: "https://pl31242129.profitableratecpmnetwork.com/b11b1dea8c0f54bab487a9131b28ee45/invoke.js",
  },
};
