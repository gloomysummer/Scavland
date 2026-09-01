/**
 * Global Site Configuration for Scavland Wiki
 */
export const siteConfig = {
  name: 'Scavland Wiki',
  url: 'https://scavland.wiki',
  
  /**
   * Adsterra Monetization Controls
   * 
   * 当 9.4 发售日流量起量时：
   * 将 enabled 设为 true 即可一键点亮全站广告！
   */
  ads: {
    // 全局广告总控开关 (默认 false 保持静默不展示)
    enabled: false,
    
    // 1. Adsterra Social Bar (高 CPM 非侵入式底部推送条)
    socialBar: {
      enabled: true,
      scriptUrl: 'https://pl31067793.profitableratecpmnetwork.com/ce/2d/39/ce2d39f20244d4325b8fdf728f1cd06d.js',
    },
    
    // 2. Adsterra 300x250 文章内/侧边栏矩形 Banner
    articleBanner: {
      enabled: true,
      key: '3a70dc4036609f3d3b61b9711872a734',
      scriptUrl: 'https://www.highrevenueformat.com/3a70dc4036609f3d3b61b9711872a734/invoke.js',
    }
  }
};
