export type Language = 'en' | 'ru' | 'de';

export interface LanguageMeta {
  code: Language;
  label: string;
  fullName: string;
  locale: string;
}

export const supportedLanguages: Record<Language, LanguageMeta> = {
  en: {
    code: 'en',
    label: 'EN',
    fullName: 'English',
    locale: 'en_US',
  },
  ru: {
    code: 'ru',
    label: 'RU',
    fullName: 'Русский',
    locale: 'ru_RU',
  },
  de: {
    code: 'de',
    label: 'DE',
    fullName: 'Deutsch',
    locale: 'de_DE',
  },
};

export const uiTranslations = {
  en: {
    brandSub: 'WIKI & DATABASE',
    nav: {
      guides: 'Guides',
      weapons: 'Weapons',
      factions: 'Factions',
      release: 'Release',
      specs: 'Specs',
      systems: 'Systems',
      world: 'World',
      updates: 'Updates',
      search: 'Search',
    },
    common: {
      quickAnswer: 'Quick answer',
      fieldNotes: 'Field notes',
      evidenceBoundary: 'Evidence boundary',
      questionsTitle: 'Questions players ask',
      relatedGuides: 'Related guides',
      onThisPage: 'On this page',
      readFieldNotes: 'Read field notes',
      exploreGuides: 'Explore Free Guides',
      playOnSteam: 'Play on Steam',
      tacticalArsenal: 'Tactical Arsenal',
      officialSteam: 'Official Steam',
      tableOfContents: 'Table of contents (Jump to section ▾)',
      mediaCaption: 'Media: user-provided authorized asset pack · Evidence-verified baseline.',
      footerDisclaimer: 'Independent community wiki with verified game data and tactical field notes. Not affiliated with NoShadow.',
      footerUpdated: 'Scavland Wiki Database updated September 2026 · Official Verified Baseline.',
    },
  },
  ru: {
    brandSub: 'ВИКИ И БАЗА ЗНАНИЙ',
    nav: {
      guides: 'Гайды',
      weapons: 'Оружие',
      factions: 'Фракции',
      release: 'Релиз',
      specs: 'Требования',
      systems: 'Системы',
      world: 'Карта',
      updates: 'Патчи',
      search: 'Поиск',
    },
    common: {
      quickAnswer: 'Краткий ответ',
      fieldNotes: 'Тактические заметки',
      evidenceBoundary: 'База фактов и данных',
      questionsTitle: 'Часто задаваемые вопросы',
      relatedGuides: 'Связанные гайды',
      onThisPage: 'На этой странице',
      readFieldNotes: 'Читать гайд',
      exploreGuides: 'Все гайды',
      playOnSteam: 'Купить в Steam',
      tacticalArsenal: 'Арсенал оружия',
      officialSteam: 'Официальный Steam',
      tableOfContents: 'Содержание статьи (Перейти к разделу ▾)',
      mediaCaption: 'Материалы: верифицированные игровые данные и официальные ассеты Scavland.',
      footerDisclaimer: 'Независимая вики сообщества с проверенными тактическими данными. Не аффилирована с NoShadow.',
      footerUpdated: 'База знаний Scavland обновлена в сентябре 2026 года · Официальные данные.',
    },
  },
  de: {
    brandSub: 'WIKI & DATENBANK',
    nav: {
      guides: 'Guides',
      weapons: 'Waffen',
      factions: 'Fraktionen',
      release: 'Release',
      specs: 'Systemanforderungen',
      systems: 'Systeme',
      world: 'Welt',
      updates: 'Updates',
      search: 'Suche',
    },
    common: {
      quickAnswer: 'Kurzantwort',
      fieldNotes: 'Feldnotizen',
      evidenceBoundary: 'Verifizierte Faktenlage',
      questionsTitle: 'Häufig gestellte Fragen',
      relatedGuides: 'Verwandte Guides',
      onThisPage: 'Auf dieser Seite',
      readFieldNotes: 'Feldnotizen lesen',
      exploreGuides: 'Alle Guides ansehen',
      playOnSteam: 'Auf Steam spielen',
      tacticalArsenal: 'Waffenarsenal',
      officialSteam: 'Offizielle Steam-Seite',
      tableOfContents: 'Inhaltsverzeichnis (Zum Abschnitt springen ▾)',
      mediaCaption: 'Medien: Verifiziertes autorisiertes Asset-Paket · Offizielle Datenbasis.',
      footerDisclaimer: 'Unabhängiges Community-Wiki mit verifizierten Spieldaten und taktischen Hinweisen. Nicht mit NoShadow verbunden.',
      footerUpdated: 'Scavland Wiki-Datenbank aktualisiert im September 2026 · Verifizierte Basis.',
    },
  },
};

/**
 * Extracts language from a given pathname.
 * E.g., '/ru/guide/' -> 'ru', '/de/' -> 'de', '/guide/' -> 'en'
 */
export function getLanguageFromPath(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'ru') return 'ru';
  if (segments[0] === 'de') return 'de';
  return 'en';
}

/**
 * Strips the language prefix from a pathname.
 * E.g., '/ru/guide/foo/' -> '/guide/foo/'
 *       '/de/' -> '/'
 *       '/weapons/' -> '/weapons/'
 */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'ru' || segments[0] === 'de') {
    segments.shift();
  }
  const clean = '/' + segments.join('/');
  return clean.endsWith('/') ? clean : clean + '/';
}

/**
 * Converts any pathname into the target language's equivalent URL.
 * E.g., ('/guide/', 'ru') -> '/ru/guide/'
 *       ('/ru/guide/', 'en') -> '/guide/'
 *       ('/', 'de') -> '/de/'
 */
export function getLocalizedUrl(currentPath: string, targetLang: Language): string {
  const base = stripLocale(currentPath);
  if (targetLang === 'en') {
    return base;
  }
  if (base === '/') {
    return `/${targetLang}/`;
  }
  return `/${targetLang}${base}`;
}
