export interface CategoryTheme {
  slug: string;
  name: string;
  color: string;
  bg: string;
  border: string;
}

export const CATEGORY_PALETTE: Record<string, CategoryTheme> = {
  lime: {
    slug: 'lime',
    name: 'Lime',
    color: '#b9e86c',
    bg: 'rgba(185, 232, 108, 0.12)',
    border: 'rgba(185, 232, 108, 0.3)',
  },
  orange: {
    slug: 'orange',
    name: 'Orange',
    color: '#fb923c',
    bg: 'rgba(251, 146, 60, 0.12)',
    border: 'rgba(251, 146, 60, 0.3)',
  },
  cyan: {
    slug: 'cyan',
    name: 'Cyan',
    color: '#22d3ee',
    bg: 'rgba(34, 211, 238, 0.12)',
    border: 'rgba(34, 211, 238, 0.3)',
  },
  blue: {
    slug: 'blue',
    name: 'Blue',
    color: '#38bdf8',
    bg: 'rgba(56, 189, 248, 0.12)',
    border: 'rgba(56, 189, 248, 0.3)',
  },
  purple: {
    slug: 'purple',
    name: 'Purple',
    color: '#c084fc',
    bg: 'rgba(192, 132, 252, 0.12)',
    border: 'rgba(192, 132, 252, 0.3)',
  },
  emerald: {
    slug: 'emerald',
    name: 'Emerald',
    color: '#34d399',
    bg: 'rgba(52, 211, 153, 0.12)',
    border: 'rgba(52, 211, 153, 0.3)',
  },
  amber: {
    slug: 'amber',
    name: 'Amber',
    color: '#fbbf24',
    bg: 'rgba(251, 191, 36, 0.12)',
    border: 'rgba(251, 191, 36, 0.3)',
  },
  pink: {
    slug: 'pink',
    name: 'Pink',
    color: '#f472b6',
    bg: 'rgba(244, 114, 182, 0.12)',
    border: 'rgba(244, 114, 182, 0.3)',
  },
};

export const CATEGORY_COLOR_MAP: Record<string, string> = {
  // English
  'Survival': 'lime',
  'Gear': 'orange',
  'Tactical Guide': 'orange',
  'Systems': 'cyan',
  'Updates': 'cyan',
  'Platforms': 'blue',
  'Exploration': 'purple',
  'Progression': 'emerald',
  'Resources': 'emerald',
  'Economy': 'amber',
  'Comparisons': 'pink',

  // German
  'Überleben': 'lime',
  'Arsenal': 'orange',
  'Hardware-Tuning': 'blue',
  'Mechanik': 'cyan',
  'Anomalien': 'purple',
  'Fraktionen': 'emerald',
  'Release & Preise': 'amber',
  'Vergleich': 'pink',

  // Japanese
  'サバイバル': 'lime',
  '装備': 'orange',
  'プラットフォーム': 'blue',
  'システム': 'cyan',
  '探索': 'purple',
  '進行・派閥': 'emerald',
  '資源・アイテム': 'emerald',
  'リリース＆価格': 'amber',
  '比較・考察': 'pink',

  // Russian
  'Выживание': 'lime',
  'Арсенал': 'orange',
  'Оптимизация': 'blue',
  'Механика': 'cyan',
  'Аномалии': 'purple',
  'Фракции': 'emerald',
  'Ресурсы и лут': 'emerald',
  'Релиз и Цены': 'amber',
  'Сравнение': 'pink',
};

export function getCategoryTheme(category: string): CategoryTheme {
  const key = CATEGORY_COLOR_MAP[category] || 'lime';
  return CATEGORY_PALETTE[key] || CATEGORY_PALETTE.lime;
}
