/**
 * Adsterra 广告位配置与全局开关
 * 
 * 状态：已接入全站架构，默认关闭 (SHOW_ADS = false)
 * 激活方式：9.4 游戏发售流量爆发时，只需将 SHOW_ADS 改为 true 即可一键全站上线广告！
 */

export const ADSTERRA_CONFIG = {
  // 全局广告总开关：目前为 false，发售后一键设为 true
  SHOW_ADS: false,

  // 1. Social Bar 浮动推荐条 (高 CPM, $4~$8，不遮挡正文)
  socialBar: {
    enabled: true,
    scriptUrl: "https://pl31067793.profitableratecpmnetwork.com/ce/2d/39/ce2d39f20244d4325b8fdf728f1cd06d.js",
  },

  // 2. 文章/攻略详情页 300x250 矩形横幅
  articleBanner: {
    enabled: true,
    key: "3a70dc4036609f3d3b61b9711872a734",
    scriptUrl: "https://www.highrevenueformat.com/3a70dc4036609f3d3b61b9711872a734/invoke.js",
  },

  // 3. 原生推荐横幅 Native Banner
  nativeBanner: {
    enabled: true,
    containerId: "container-4ad68b4b48bdf741c0d0256e6aea8665",
    scriptUrl: "https://pl30949155.effectivecpmnetwork.com/4ad68b4b48bdf741c0d0256e6aea8665/invoke.js",
  },
};
