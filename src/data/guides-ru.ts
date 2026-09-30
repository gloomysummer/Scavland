import { guides as enGuides, type Guide } from './guides';

export const ruGuides: Guide[] = [
  {
    slug: 'scavland-beginner-guide',
    category: 'Выживание',
    title: 'Полный гайд для новичков по Scavland: первый рейд, инвентарь и эвакуация',
    shortTitle: 'Гайд для новичков',
    description: 'Пошаговое руководство по выживанию в Scavland: управление инвентарем, ориентирование в Залесье, выживание в первом рейде и безопасная эвакуация.',
    evidence: 'Официальный патчноут 0.5.169',
    updated: '2026-09-07',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Гайд для новичков по Scavland — тактический рейд и инвентарь',
    answer: 'Всегда проверяйте карту перед выходом с базы. В первом рейде избегайте густого <strong>Тумана</strong> без противогаза, собирайте только ценный лут весом менее <strong>0.5 кг</strong> на ячейку и запомните зеленый маркер эвакуации на компасе.',
    steps: [
      'Ориентация в <strong>Залесье</strong>: При появлении на локации сразу откройте карту (клавиша M) и отметьте ближайшую точку эвакуации (<strong>Extraction Point</strong>). Маршрут отхода должен быть спланирован до первого выстрела.',
      'Экономика инвентаря: Слоты ограничены весом и габаритами. Отдавайте приоритет патронам, медикаментам (<strong>бинты</strong>, <strong>антирадин</strong>) и редким компонентам оружия перед тяжелым металлоломом.',
      'Баллистика и скрытность: Стрельба привлекает мутантов и мародеров в радиусе <strong>120 метров</strong>. Используйте полуавтоматический огонь и цельтесь в уязвимые зоны (голова и неприкрытые участки).',
      'Механика <strong>Тумана</strong>: Если воздух начинает синеть и счетчик Гейгера потрескивает — немедленно уходите в укрытие или активируйте фильтр <strong>противогаза</strong>.',
      'Точка эвакуации: На точке выхода требуется удержание позиции в течение <strong>10 секунд</strong>. Займите круговую оборону за бетонным блоком или насыпью.'
    ],
    facts: [
      ['Жанр', 'Хардкорный изометрический тактический Survival RPG'],
      ['Длительность рейда', '15–25 минут в зависимости от размера карты'],
      ['Потеря снаряжения при гибели', 'Полный сброс несохраненного лута (кроме защищенного контейнера)'],
      ['Ключевой показатель здоровья', 'Кровотечение, радиация, выносливость, прочность брони'],
      ['Версия игры', 'Ранний доступ v0.5.169 (Steam)']
    ],
    faq: [
      ['Что делать при сильном кровотечении?', 'Используйте <strong>армейский жгут</strong> для мгновенной остановки артериального кровотечения, затем <strong>стерильный бинт</strong>.'],
      ['Как восстановить здоровье без аптечек?', 'В режиме исследователя или возле зажженных костров в безопасных лагерях здоровье медленно восстанавливается.'],
      ['Где найти первую винтовку?', 'Обыщите оружейные ящики в <strong>заброшенном военном блокпосте</strong> на севере первой локации.']
    ],
    related: ['scavland-weapons-and-attachments', 'scavland-price-and-regional-editions', 'scavland-vs-zero-sievert-comparison'],
    videoId: 'JRAOxOjeoc8',
    videoTitle: 'Гайд для новичков по Scavland: как не умирать в начале игры (Mars)',
    videoChannel: 'Mars'
  },
  {
    slug: 'scavland-price-and-regional-editions',
    category: 'Релиз и Цены',
    title: 'Цена Scavland в Steam: региональные цены, скидка на релизе и издания',
    shortTitle: 'Цена и издания в Steam',
    description: 'Стоимость Scavland в Steam: цены в долларах, евро, рублях и тенге. Данные о стартовой скидке 10%, системных требованиях и бонусах раннего доступа.',
    evidence: 'Официальные данные Steam Store от 4 сентября 2026',
    updated: '2026-09-07',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Официальная цена Scavland в Steam и региональные скидки',
    answer: 'Базовая цена Scavland в Steam составляет <strong>$19.99</strong> (в СНГ регионах действует региональная скидка, около <strong>710 ₽</strong> / <strong>4800 ₸</strong>). В течение релизной недели действует дополнительная скидка <strong>10%</strong>.',
    steps: [
      '<strong>Стандартное издание</strong> ($19.99): Включает полный доступ к раннему доступу со всеми <strong>25+</strong> видами оружия, 10 фракциями и бесплатными апдейтами.',
      'Региональные цены Steam: Для СНГ и Латинской Америки включена региональная адаптация цен Valve.',
      'Политика скидок: Стартовая скидка 10% действует первые <strong>7 дней</strong> после релиза 4 сентября 2026 года.',
      'Дополнительные DLC: В раннем доступе микротранзакции отсутствуют; саундтрек продается отдельным набором.'
    ],
    facts: [
      ['Базовая цена (США)', '$19.99 USD'],
      ['Цена в СНГ (рубли)', '~710 ₽ (с учетом стартовой скидки -10%)'],
      ['Цена в Казахстане (тенге)', '~4,800 ₸'],
      ['Дата выхода в Early Access', '4 сентября 2026 года'],
      ['Платформа', 'Steam (Windows PC; полная поддержка контроллеров, игра рассчитана на Steam Deck и портативные ПК)']
    ],
    faq: [
      ['Вырастет ли цена после выхода из раннего доступа?', 'NoShadow не объявляли новую цену для полной версии. Пока игра находится в <strong>раннем доступе</strong>, действует текущая цена в Steam; об изменениях разработчики сообщают в новостях Steam.'],
      ['Есть ли демоверсия?', 'Демоверсия была доступна во время Steam Next Fest; на релизе действует стандартная политика возврата Steam (до <strong>2 часов</strong> игры).'],
      ['Включен ли мультиплеер в базовую цену?', '<strong>Кооперативный режим</strong> разрабатывается согласно дорожной карте и будет бесплатным обновлением.']
    ],
    related: ['scavland-steam-deck-and-handheld-settings', 'scavland-beginner-guide', 'scavland-vs-zero-sievert-comparison'],
    videoId: 'sulLD0aNdOk',
    videoTitle: 'Обзор Scavland перед покупкой: особенности и цена (The Singleplayer Squad)',
    videoChannel: 'The Singleplayer Squad'
  },
  {
    slug: 'scavland-steam-deck-and-handheld-settings',
    category: 'Оптимизация',
    title: 'Scavland на Steam Deck и портативных ПК: настройки графики и управление',
    shortTitle: 'Настройки для Steam Deck',
    description: 'Настройка Scavland на Steam Deck, ROG Ally и Legion Go: какие параметры попробовать, как подобрать управление и масштаб текста. Это рекомендации, а не замеры производительности.',
    evidence: 'Официальный анонс Steam (поддержка контроллеров, игра рассчитана на Steam Deck); настройки — рекомендации',
    updated: '2026-09-07',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: 'Оптимизация Scavland для Steam Deck портативного гейминга',
    answer: 'Scavland выходит с полной поддержкой контроллеров и, по словам разработчиков, «задуман с учётом <strong>Steam Deck</strong> и портативной игры», поэтому отдельная перенастройка не требуется. В обновлении <strong>0.7.0</strong> также указано «улучшение масштабирования текста на Steam Deck». Настройки ниже — это отправные точки, а не результаты замеров: начните со стандартного профиля игры и постепенно снижайте лимит кадров или <strong>TDP</strong>, если хотите более тихую и долгую сессию.',
    steps: [
      '<strong>Proton</strong>: поведение зависит от системы. Если появятся проблемы с шейдерами или звуком, попробуйте сменить совместимость в свойствах игры в Steam.',
      'Графика: начните с нативного для Steam Deck разрешения <strong>1280x800</strong> в полноэкранном режиме и подберите тени и сглаживание под свой вкус.',
      'Питание (Quick Access): в меню быстрого доступа SteamOS можно ограничить <strong>частоту кадров</strong> и TDP — снижайте лимиты постепенно, следя за счётчиком кадров.',
      'Управление: <strong>правый трекпад</strong> можно назначить мышью для прицеливания; готовые раскладки сообщества доступны в настройках контроллера Steam.'
    ],
    facts: [
      ['Поддержка портативных устройств', 'Официально указана полная поддержка контроллеров; разработчик заявляет, что игра задумана с учётом Steam Deck и портативной игры'],
      ['Значок Valve Deck', 'На странице игры в Steam значок совместимости Deck не указан'],
      ['Частота кадров', 'Замеров мы не приводим — используйте ограничение кадров в Quick Access'],
      ['Лимит TDP', 'Настраивается в Quick Access SteamOS; снижайте постепенно'],
      ['Разрешение экрана', 'Нативное 1280x800 (соотношение 16:10) — физическое разрешение экрана Steam Deck']
    ],
    faq: [
      ['Работает ли игра без интернета в дороге?', 'Да, Scavland полностью поддерживает <strong>оффлайн-режим</strong> после первой загрузки в Steam.'],
      ['Удобно ли целиться стиками?', 'Рекомендуется комбинировать <strong>правый стик</strong> с гироскопом (<strong>Gyro Aiming</strong>) для идеальной точности при стрельбе на дальние дистанции.'],
      ['Читается ли текст интерфейса на 7-дюймовом экране?', 'В настройках игры есть опция <strong>"Крупный шрифт UI"</strong>, делающая описание предметов четким.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-price-and-regional-editions'],
    videoId: 'Zx0Uon9RJM4',
    videoTitle: 'Тест производительности Scavland на Steam Deck LCD (ciastek)',
    videoChannel: 'ciastek'
  },
  {
    slug: 'scavland-vs-zero-sievert-comparison',
    category: 'Сравнение',
    title: 'Scavland против Zero Sievert: 7 ключевых различий постапокалиптических RPG',
    shortTitle: 'Scavland vs Zero Sievert',
    description: 'Подробный тактический анализ Scavland и Zero Sievert: сравнение баллистики, глубины модификации оружия, поведения аномалий и дорожной карты мультиплеера.',
    evidence: 'Официальные патчноуты за сентябрь 2026',
    updated: '2026-09-07',
    image: '/images/screenshots/scavland_vs_zero_sievert.webp',
    imageAlt: 'Сравнение Scavland и Zero Sievert — 7 ключевых отличий',
    answer: 'Главные отличия: Scavland предлагает продвинутую систему из <strong>300+</strong> оружейных обвесов с реалистичной <strong>баллистикой рикошетов</strong>, динамическую механику токсичного <strong>Тумана</strong> и официальную разработку кооперативного режима.',
    steps: [
      'Оружейный конструктор: В Scavland реализована блочная кастомизация оружия — ствольные коробки, цевья, <strong>глушители</strong>, тактические рукояти и оптика напрямую влияют на отдачу, эргономику и звук выстрела.',
      'Погодные аномалии: В отличие от статичных радиоактивных очагов Zero Sievert, Туман в Scavland динамически перемещается по локации под воздействием <strong>ветра</strong>.',
      'Искусственный интеллект: Враждебные фракции используют <strong>подавляющий огонь</strong>, обходы с флангов и координируют действия через радиопереговоры.',
      'Эвакуация и базы: Система убежища включает крафтовые <strong>верстаки</strong>, ремонтные тиски и очистные фильтры для добытой радиоактивной воды.'
    ],
    facts: [
      ['Количество модификаций оружия', 'Scavland: 300+ деталей | Zero Sievert: стандартные слоты'],
      ['Баллистическая модель', 'Scavland: падение пули, бронепробитие, рикошет от стен'],
      ['Кооперативный режим', 'Scavland: подтвержден в дорожной карте раннего доступа'],
      ['Движок и визуальный стиль', 'Scavland: современный пиксель-арт с динамическим освещением и тенями'],
      ['Фракционная система', 'Scavland: 10 враждующих и нейтральных группировок']
    ],
    faq: [
      ['Понравится ли Scavland фанатам Zero Sievert?', 'Безусловно. Scavland развивает те же механики сталкерского выживания, но добавляет больше тактической глубины и <strong>хардкорного реализма</strong>.'],
      ['Что сложнее в освоении?', 'Scavland строже наказывает за ошибки в позиционировании из-за продвинутого ИИ врагов и механики <strong>потери крови</strong>.'],
      ['Можно ли перенести прогресс?', 'Нет, это совершенно независимые проекты от разных разработчиков.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-steam-deck-and-handheld-settings'],
    videoId: 'ETFXsWYOVlM',
    videoTitle: 'Сравнение изометрических шутеров с эвакуацией: Scavland и аналоги (Oscar Mikey)',
    videoChannel: 'Oscar Mikey'
  },
  {
    slug: 'scavland-weapons-and-attachments',
    category: 'Арсенал',
    title: 'Оружие и модификации в Scavland: 25+ пушек, 300+ обвесов и баллистика',
    shortTitle: 'Оружие и обвесы',
    description: 'Полная база данных вооружения Scavland: пистолеты, штурмовые винтовки, дробовики, снайперские системы, глушители, прицелы и характеристики патронов.',
    evidence: 'Данные таблицы оружия v0.5.169',
    updated: '2026-09-07',
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: 'База данных оружия и оружейного тюнинга Scavland',
    answer: 'В Scavland представлено более <strong>25</strong> видов базового огнестрельного оружия и <strong>300+</strong> взаимозаменяемых модулей. Характеристики оружия определяются <strong>калибром</strong>, длиной ствола и состоянием дульного тормоза.',
    steps: [
      'Категории вооружения: Пистолеты ближнего боя (<strong>ПМ</strong>, <strong>ТТ</strong>), пистолеты-пулеметы (Кедр), автоматы советской и натовской линейки (<strong>АК-74</strong>, <strong>АС ВАЛ</strong>, М4), помповые ружья и винтовки с продольно-скользящим затвором.',
      'Модульная сборка: Каждый ствол имеет до <strong>6 слотов</strong> тюнинга: ствольная коробка, дульное устройство (глушитель/ДТК), планка оптики, цевье, пистолетная рукоять и магазин увеличенной емкости.',
      'Износ и клины: При прочности ниже <strong>60%</strong> возрастает вероятность осечки или заклинивания гильзы прямо во время перестрелки.',
      'Бронепробитие: Патроны делятся на экспансивные (высокий урон по плоти), стандартные военные (<strong>FMJ</strong>) и бронебойные (<strong>AP</strong>) для пробития тяжелых титановых бронежилетов.'
    ],
    facts: [
      ['Всего видов оружия', '25+ моделей на старте Early Access'],
      ['Количество модулей', '300+ тактических обвесов'],
      ['Калибры', '9x18мм, 9x19мм, 5.45x39мм, 7.62x39мм, 7.62x54R, 12 калибр'],
      ['Влияние глушителя', 'Снижает радиус обнаружения выстрела со 120м до 25м'],
      ['Ремонт', 'Требует оружейный набор чистки и детали соответствующего калибра']
    ],
    faq: [
      ['Какая лучшая штурмовая винтовка для новичка?', 'Модернизированный АК-74 благодаря доступности патронов <strong>5.45x39мм</strong> у торговцев всех фракций.'],
      ['Где чинить заклинившее оружие?', 'На верстаке в лагере или с помощью портативного <strong>ремкомплекта оружейника</strong>.'],
      ['Влияет ли вес оружия на выносливость?', 'Да, тяжелые модификации с <strong>барабанными магазинами</strong> быстрее расходуют стамину при прицеливании.']
    ],
    related: ['scavland-beginner-guide', 'scavland-vs-zero-sievert-comparison', 'scavland-starter-loadouts-and-budget-builds'],
    videoId: 'JQDdSAYkOkQ',
    videoTitle: 'Местоположение лучшего оружия 63 Dragoon в Scavland (Game Detox)',
    videoChannel: 'Game Detox Dopamine'
  },
  {
    slug: 'scavland-mist-survival-and-radiation',
    category: 'Аномалии',
    title: 'Выживание в Тумане и защита от радиации в Scavland: фильтры и очаги',
    shortTitle: 'Туман и радиация',
    description: 'Руководство по преодолению токсичного Тумана и радиационных аномалий: типы фильтров противогаза, радиопротекторы, антидоты и поиск артефактов.',
    evidence: 'Официальный патчноут 0.5.169',
    updated: '2026-09-07',
    image: '/images/screenshots/steam_ss_09.webp',
    imageAlt: 'Выживание в Тумане и радиационная безопасность в Scavland',
    answer: '<strong>Туман</strong> в Scavland смертельно опасен без исправного <strong>противогаза</strong>. Следите за таймером ресурса фильтра и держите в быстром слоте минимум 2 шприца <strong>радиопротектора</strong>.',
    steps: [
      'Плотность Тумана: Различают белую дымку (слабое заражение) и фиолетовый эпицентр (мгновенное накопление рад-доз и слуховые галлюцинации).',
      'Замена фильтров: Фильтры марки <strong>ГП-5</strong> служат <strong>5 минут</strong> в зоне легкого загрязнения и всего <strong>2 минуты</strong> в эпицентре бункера.',
      'Антидоты и медицина: Препарат <strong>Рад-Блок</strong> снижает накопление радиации на 50%, а таблетки <strong>йодида калия</strong> выводят накопленные дозы.',
      'Поиск артефактов: В самом сердце Тумана <strong>аномальный сканер</strong> позволяет обнаружить ценные гравитационные и термические артефакты.'
    ],
    facts: [
      ['Длительность фильтра', 'От 2 до 8 минут в зависимости от класса защиты'],
      ['Смертельный порог радиации', '500 мЗв (приводит к отказу органов за 60 секунд)'],
      ['Оборудование', 'Счетчик Гейгера, сканер аномалий, противогаз с закрытым контуром'],
      ['Респаун артефактов', 'Каждый выброс Тумана обновляет положение ценных находок']
    ],
    faq: [
      ['Что делать, если фильтр закончился в глубине зоны?', 'Бегите к возвышенности или закройтесь в герметичном бункере с работающей вентиляцией.'],
      ['Можно ли спать во время Тумана?', 'Только на защищенных базах с <strong>герметичными шлюзами</strong>.']
    ],
    related: ['scavland-beginner-guide', 'scavland-death-and-loot-recovery', 'scavland-weapons-and-attachments']
  },
  {
    slug: 'scavland-death-and-loot-recovery',
    category: 'Механика',
    title: 'Смерть и возврат лута в Scavland: как не потерять топовую экипировку',
    shortTitle: 'Смерть и возврат лута',
    description: 'Что происходит при гибели сталкера в Scavland: таймер маркера тела, защищенный контейнер, страховка фракций и тактика эвакуации хабара.',
    evidence: 'Механики эвакуации патча v0.5.169',
    updated: '2026-09-07',
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: 'Механика смерти и возврата хабара в Scavland',
    answer: 'После гибели ваш рюкзак остается на месте смерти с таймером в <strong>25 минут</strong>. Все предметы в <strong>защищенном контейнере</strong> (<strong>Secure Case 2x2</strong>) гарантированно сохраняются на базе.',
    steps: [
      'Маркер тела: На карте появляется крест с точными координатами. Погодные условия и бродячие мародеры могут усложнить повторный прорыв к телу.',
      'Защищенный кейс: Всегда кладите в безопасный контейнер редкие <strong>ключи-карты</strong>, пачки валюты и дорогостоящие прицелы.',
      'Рейд спасения (<strong>Naked Run</strong>): Если вы идете забирать свой труп, возьмите дешевый дробовик и одну аптечку, чтобы не рисковать вторым комплектом брони.',
      'Фракционная страховка: Торговцы группировки <strong>"Дозор"</strong> предлагают <strong>страховку снаряжения</strong> с возвратом через <strong>24 внутриигровых часа</strong>.'
    ],
    facts: [
      ['Таймер исчезновения трупа', '25 минут реального времени в текущей игровой сессии'],
      ['Вместимость начального кейса', '4 ячейки (2x2), расширяется по квестам до 9 ячеек (3x3)'],
      ['Потеря опыта', 'При смерти теряется 15% прогресса текущего уровня выносливости'],
      ['Страховка', 'Возвращает до 70% стоимости утраченных предметов оружия']
    ],
    faq: [
      ['Могут ли боты залутать мой труп?', 'Да, <strong>мародеры</strong> собирают ценное оружие, если найдут тело раньше вас.'],
      ['Сохраняются ли квестовые предметы?', 'Квестовые документы сохраняются в специальной вкладке <strong>журнала заданий</strong>.']
    ],
    related: ['scavland-beginner-guide', 'scavland-mist-survival-and-radiation', 'scavland-factions-and-reputation'],
    videoId: 'WyI0vB4qE7A',
    videoTitle: 'Механика смерти и возвращение рюкзака в Scavland (Mars)',
    videoChannel: 'Mars'
  },
  {
    slug: 'scavland-factions-and-reputation',
    category: 'Фракции',
    title: '10 фракций и система репутации в Scavland: контракты, торговцы и война',
    shortTitle: 'Фракции и репутация',
    description: 'Полный обзор 10 группировок Залесья: военные сталкеры, вольные старатели, культисты Тумана, бандиты и ученые. Как открыть доступ к элитному снаряжению.',
    evidence: 'База фракций и таблица репутации v0.5.169',
    updated: '2026-09-07',
    image: '/images/cards/card_3_quests_factions.webp',
    imageAlt: '10 фракций и таблица репутации группировок Scavland',
    answer: 'В Scavland <strong>10 уникальных фракций</strong> со своими целями. Выполнение контрактов повышает репутацию и открывает <strong>4 тира ассортимента</strong> торговцев, но портит отношения с враждебными кланами.',
    steps: [
      'Выбор союзников: <strong>"Вольные Старатели"</strong> идеальны для сбыта электроники и компонентов, <strong>"Дозор"</strong> дает доступ к тяжелым бронежилетам <strong>5 класса</strong>.',
      'Система контрактов: Ежедневные задания на зачистку секторов, доставку медикаментов и разведку аномальных зон.',
      'Враждебность на локациях: При отрицательной репутации бойцы группировки открывают огонь без предупреждения при приближении ближе <strong>50 метров</strong>.',
      'Черный рынок: Торговцы-нейтралы на нейтральной станции принимают товары без штрафа к репутации, но с повышенной комиссией <strong>20%</strong>.'
    ],
    facts: [
      ['Всего фракций', '10 группировок (3 нейтральных, 4 дружественных по квестам, 3 враждебных)'],
      ['Уровни доверия торговцев', '4 тира (Открывают редкие глушители и тепловизоры)'],
      ['Штраф за убийство мирных', '-250 очков репутации с возможностью искупления через дань'],
      ['Награды за высший тир', 'Уникальные именные модификации оружия и скидка 15% на патроны']
    ],
    faq: [
      ['Можно ли быть нейтральным со всеми?', 'Да, если не выполнять агрессивные диверсионные контракты и торговать через посредников.'],
      ['Какая фракция продает лучшие снайперские прицелы?', 'Научно-исследовательская группа <strong>"Омега"</strong> в подземном <strong>Бункере Б-4</strong>.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-death-and-loot-recovery']
  },
  {
    slug: 'scavland-sleep-and-world-reset-guide',
    category: 'Выживание',
    title: 'Гайд по сну и сбросу мира 24 часа в Scavland: костры, респаун лута и бункеры',
    shortTitle: 'Сон и сброс мира',
    description: 'Механика сна в Scavland: пропуск ночи (21:00–06:00), 24-часовой сброс контрактов Анатолия и Нади, регенерация у костра и таймеры подземных бункеров.',
    evidence: 'Официальный патчноут 0.5.169',
    updated: '2026-09-09',
    image: '/images/screenshots/ss_01_ruins_night.webp',
    imageAlt: 'Мародер отдыхает у койки в бункере и у костра в Scavland',
    answer: 'Сон в Scavland — ключевая механика для перемотки времени, избегания ночных хищников (с <strong>21:00</strong> до <strong>06:00</strong>) и запуска <strong>24-часового цикла</strong> мира. Отдых на койках в убежище обновляет доски контрактов (<strong>Анатолий</strong> и <strong>Надя</strong>) и наземные ящики с припасами. В патче v0.5.169 костры восстанавливают здоровье, но сон при сильном обезвоживании заблокирует выносливость на 0% — обязательно кипятите воду перед сном. Подземные бункеры и сейфы не сбрасываются мгновенно, защищая экономику от бесконечного фарма.',
    steps: [
      '01 · Сон на койке в убежище: Подойдите к брезентовой кровати в любом безопасном бункере и выберите длительность сна (от 1 до 12 часов), чтобы безопасно дождаться рассвета (06:00).',
      '02 · 24-часовой протокол сброса мира: Преодоление 24-часовой отметки сбрасывает наземные контейнеры с ресурсами, обновляет ассортимент торговцев и обновляет задания у Анатолия и Нади.',
      '03 · Блокировка бункеров: Подземные военные комплексы (<strong>Бункер Б-4</strong>) не возрождают лут сразу после сна, требуя времени на перезагрузку инстанса.',
      '04 · Отдых у костра и гидратация: В v0.5.169 костры дают медленную регенерацию HP. Всегда кипятите грязную воду на костре, чтобы избежать дебаффа истощения.',
      '05 · Комендантский час (21:00): Ночью дальность обзора падает до <strong>10 метров</strong>, а звуки выстрелов привлекают стаи за <strong>200 метров</strong>. Выходите в рейд на рассвете и возвращайтесь до сумерек.'
    ],
    facts: [
      ['Места для сна', 'Койки в бункерах и нейтральных поселениях (от 1 до 12 часов)'],
      ['Цикл 24 часа', 'Обновляет наземные ящики, ассортимент торговцев и контракты'],
      ['Правило бункеров', 'Подземные хранилища не сбрасываются мгновенно от сна'],
      ['Бонус костра', 'Пассивное восстановление здоровья при наличии чистой воды'],
      ['Опасность ночи', 'Видимость падает до 10 метров, активны опасные мутанты']
    ],
    faq: [
      ['Как поспать и промотать время в игре?', 'Подойдите к кровати в убежище, нажмите клавишу действия [E] и выберите количество часов.'],
      ['Почему после сна не восстанавливается выносливость?', 'Это вызвано скрытым дебаффом <strong>"Тяжелое обезвоживание"</strong>. Выпейте кипяченой воды и отдохните у зажженного костра.'],
      ['Респаунится ли лут в подземных бункерах после сна?', 'Нет. <strong>Подземные бункеры</strong> имеют длительный внутренний таймер восстановления, чтобы исключить бесконечный фарм редкого оружия.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapon-repair-and-durability', 'scavland-quests-and-contracts'],
    videoId: 'IhLy3jap04Y',
    videoTitle: 'Механика сна и суточный сброс мира в Scavland (Games Quality Zone)',
    videoChannel: 'Games Quality Zone'
  },
  {
    slug: 'scavland-consumables-and-medical-supplies',
    category: 'Выживание',
    title: 'Медицина и припасы в Scavland: лечение, вода, еда и радиация',
    shortTitle: 'Медицина и припасы',
    description: 'Полный гайд по медицине и припасам в Scavland: остановка кровотечений, кипяченая вода против жажды, шины при переломах, аптечки и антирадин.',
    evidence: 'Официальный патчноут 0.6.0',
    updated: '2026-09-15',
    image: '/images/harvested/2026-09-11/we-hear-you-changes-are-coming/we-hear-you-changes-are-coming-frame-498s.jpg',
    imageAlt: 'Мародер распределяет медикаменты, сухпайки и чистую воду в Scavland',
    answer: 'Грамотное использование медикаментов и припасов в Scavland определяет шанс выживания в рейдах <strong>Залесья</strong>. Кровотечения необходимо останавливать до применения <strong>аптечек</strong>, а обезвоживание блокирует восстановление <strong>выносливости</strong> после сна.',
    steps: [
      '01 · Приоритет чистой воды: Всегда кипятите грязную воду из умывальников на костре. Сон при обезвоживании намертво блокирует шкалу выносливости.',
      '02 · Остановка кровотечений перед лечением: Артериальное кровотечение сжигает до <strong>5 HP/сек</strong>. Назначьте <strong>бинты</strong> или <strong>гемостатическую губку</strong> на слот [5].',
      '03 · Наложение шин при переломах: Падения и выстрелы вызывают переломы (<strong>-40% скорости</strong>, +60% раскачки оружия). <strong>Деревянная шина</strong> мгновенно снимает штраф.',
      '04 · Вывод радиации: При желтом уровне заражения принимайте таблетки <strong>активированного угля</strong>. Армейские шприцы <strong>Рад-Эвэй</strong> берегите для плотного Тумана.',
      '05 · Боевые стимуляторы и калории: Тушенка и сухпайки восстанавливают базовую шкалу сил. Энергетики дают <strong>+10 кг</strong> переносимого веса для спринта до эвакуации.'
    ],
    facts: [
      ['Кипяченая вода', 'Снимает жажду; создается кипячением грязной воды на костре (+40 гидратации)'],
      ['Стерильный бинт', 'Останавливает легкое кровотечение за 2 секунды (крафт из ткани и антисептика)'],
      ['Гемостатическая губка', 'Мгновенно останавливает тяжелое кровотечение; редкий лут в госпитале'],
      ['Деревянная шина', 'Устраняет перелом ноги (-40% скорости, +60% раскачки прицела)'],
      ['Инъектор Рад-Эвэй', 'Снижает 150 мЗв дозы радиации; продается у врача Анны в Залесье'],
      ['Блокировка сил', 'Сон при обезвоживании полностью замораживает регенерацию выносливости']
    ],
    faq: [
      ['Как остановить кровотечение в Scavland?', 'Назначьте бинты на горячую клавишу. Стандартные аптечки не восполняют HP, пока не остановлено кровотечение.'],
      ['Почему не восстанавливается выносливость после сна?', 'Это эффект тяжелого обезвоживания. Обязательно выпейте чистой воды перед тем, как лечь на койку в бункере.'],
      ['Где найти больше всего лекарств?', 'Медицинское крыло госпиталя Залесья содержит богатейшие запасы медикаментов, но охраняется языковыми мутантами.']
    ],
    related: ['scavland-beginner-guide', 'scavland-sleep-and-world-reset-guide', 'scavland-hospital-quest-and-medical-supplies']
  },
  {
    slug: 'scavland-loot-and-scavenging',
    category: 'Ресурсы и лут',
    title: 'Гайд по луту и бартеру в Scavland: крафт, веревка, батарейки и цены торговцев',
    shortTitle: 'Лут и бартер',
    description: 'Полный гайд по луту в Scavland: что сохранять, а что продавать, назначение веревки и батареек, ценность свечей зажигания и цены у Анатолия.',
    evidence: 'Официальный патчноут 0.6.0',
    updated: '2026-09-16',
    image: '/images/harvested/2026-09-11/we-hear-you-changes-are-coming/we-hear-you-changes-are-coming-frame-332s.jpg',
    imageAlt: 'Сортировка лута, бартерные компоненты и инвентарь в Scavland',
    answer: 'В патче <strong>v0.6.0</strong> верстак использует только базовые компоненты: металлолом, оружейные пружины, чистую ткань, антисептик, чистую воду, порох и баллистическое волокно. Такие предметы, как веревка, батарейки, лампочки и проводка, на данный момент не имеют рецептов крафта и являются чистым бартерным лутом. Продавать их выгоднее всего профильным торговцам: <strong>Анатолий</strong> и <strong>Механики</strong> платят полную цену за электронику (свечи зажигания: <strong>450 руб.</strong>, реле: <strong>350 руб.</strong>), тогда как непрофильные торговцы срезают цену на <strong>50%</strong>.',
    steps: [
      'Разделяйте крафт и бартер: В текущей версии веревка, бытовые батарейки и лампочки не используются в рецептах верстака — продавайте их торговцам за рубли.',
      'Используйте специализацию торговцев: Свечи зажигания, реле и проводку несите Анатолию или Механикам. Продажа медикам или оружейникам дает штраф -50% к цене.',
      'Оценивайте плотность стоимости (рублей на кг): Легкие предметы на 1 ячейку (свечи 0.3 кг / 450 руб., зажигалки 0.1 кг / 320 руб.) намного выгоднее тяжелого металлолома.',
      'Быстрый лут через <strong>Shift+ЛКМ</strong>: В опасных зонах зажимайте [Shift + ЛКМ] для мгновенного перемещения стопок предметов из контейнеров в рюкзак.',
      'Резерв в схроне: Храните в несгораемом ящике <strong>Залесья</strong> запас из <strong>10 пружин</strong> и 20 металлолома для ремонта оружия, а бытовой хлам сразу превращайте в рубли.'
    ],
    facts: [
      ['Статус крафта', 'Веревка, батарейки и лампочки не имеют рецептов в v0.6.0 (только для продажи)'],
      ['Материалы для крафта', 'Металлолом, пружины, чистая ткань, антисептик, вода, порох, баллистическая ткань'],
      ['Лучшая плотность цены', 'Свечи зажигания (450 руб. / 0.3 кг) и зажигалки (320 руб. / 0.1 кг) — более 1500 руб./кг'],
      ['Профильные торговцы', 'Анатолий и Механики платят 100% за электронику; непрофильные скупают со скидкой 50%'],
      ['Быстрый лут', 'Shift + ЛКМ мгновенно переносит предметы из ящиков в инвентарь']
    ],
    faq: [
      ['Используются ли веревка и батарейки для крафта в Scavland?', 'Нет. В патче v0.6.0 у них нет активных рецептов на верстаке. Разработчик подтвердил, что рецепты появятся позже, а сейчас это товар для продажи торговцам.'],
      ['Кому выгоднее всего продавать электронику и запчасти?', 'Анатолию в Залесье или торговцам фракции <strong>Механиков</strong>. Продажа оружейнику Петару или доктору Анне облагается 50% штрафом.'],
      ['Что собирать новичку в первую очередь?', 'Медикаменты (бинты, чистая вода), патроны для своего оружия и компактную электронику (свечи, реле, зажигалки).']
    ],
    related: ['scavland-beginner-guide', 'scavland-crafting-and-trading', 'scavland-merchant-prices-and-barter-guide'],
    videoId: 'l84-X9wHjeM',
    videoTitle: 'Фарм денег и ценный лут в Scavland (Nukov)',
    videoChannel: 'Nukov'
  }
,
  {
    slug: 'scavland-is-scavland-worth-it',
    category: "\u041e\u0431\u0437\u043e\u0440 \u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0430",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Is It Worth It? \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Is It Worth It?",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Is It Worth It? \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'Official Steam announcements & community reviews · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_01.webp',
    imageAlt: "Scavland atmospheric ruins and tactical survival gameplay showcase",
    answer: "Priced at <strong>$19.99 USD</strong> (\u20ac19.50 EUR / \u00a316.75 GBP) with zero predatory microtransactions, Scavland delivers remarkable value for fans of hardcore top-down extraction RPGs like S.T.A.L.K.E.R. and Escape from Tarkov. Built over six years by indie studio <strong>NoShadow</strong>, the launch build provides a handcrafted <strong>Act I</strong> exclusion zone roughly <strong>3x larger</strong> than the initial demo, containing <strong>25+ weapons</strong>, over <strong>300 modular attachments</strong>, and 10 dynamic factions. Thanks to rapid post-launch support\u2014including the <strong>Update 0.5.169</strong> Day One patch introducing <strong>Explorer Mode</strong>, <strong>Update 0.6.0</strong> adding rest mechanics, and <strong>Update 0.7.0</strong> overhauling weapon durability and <strong>Autosave Slots</strong>\u2014the title is exceptionally stable for an Early Access debut. If you enjoy tense tactical combat, inventory tetris, and procedural bunker exploration, Scavland is definitively worth buying at launch.",
    steps: [
      "01 \u00b7 Assess Content Depth & Playtime: The initial Early Access release offers between <strong>35 to 60 hours</strong> of content across the <strong>Zalesye</strong> sector alone. Players uncover subterranean Soviet vaults in <strong>Sector B-4</strong>, negotiate contracts with <strong>10 wasteland factions</strong>, and engage in high-risk extractions through the deadly <strong>Mist</strong> weather cycle.",
      "02 \u00b7 Evaluate Difficulty Presets: Hardcore survivalists face harsh death mechanics in <strong>Returner</strong> and <strong>Iron Man</strong> modes where character gear drops upon death. However, newcomers can activate <strong>Explorer Mode</strong>, which preserves equipped weapons, boosts maximum stamina to <strong>150 Stamina</strong> (reducing roll cost from 40 to 15), and enables 2x campfire healing.",
      "03 \u00b7 Analyze Technical Polish & Bug Frequency: Unlike troubled launches, Scavland deployed three major hotfixes within its first two weeks (including <strong>Hotfix 0.7.2</strong> resolving diplomatic contract loops with <strong>Raisa</strong> and world chunk streaming). Memory leaks have been stabilized, and the engine maintains a rock-solid <strong>60 FPS</strong> on modest PC hardware.",
      "04 \u00b7 Review Long-Term Value & Price Security: Developer NoShadow confirmed that early adopters will receive <strong>Act II</strong> and <strong>Act III</strong> narrative chapters, upcoming northern biomes, and the highly anticipated <strong>co-op multiplayer</strong> mode without additional DLC charges prior to the full <strong>Version 1.0</strong> release.",
      "05 \u00b7 Weigh Solo Focus Against Co-Op Demands: Understand that Scavland is currently a strictly single-player experience. While co-op is officially scheduled on the development roadmap, current raids rely entirely on local AI squads from allied syndicates like the <strong>Rada</strong> or <strong>Commonfolk</strong> for tactical support.",
      "06 \u00b7 Final Purchasing Verdict: For players who thrive on deliberate tactical pacing, realistic barrel fouling, and intense audio-driven stealth, Scavland stands as one of the best value-for-money survival purchases of 2026. Casual arcade shooter fans may find the steep learning curve punishing without Explorer Mode."
],
    facts: [
      [
            "Base Retail Price",
            "$19.99 USD / \u20ac19.50 EUR / \u00a316.75 GBP on Steam"
      ],
      [
            "Average Playtime",
            "35-60 hours for Act I storyline and high-tier bunker sweeps"
      ],
      [
            "Monetization Model",
            "100% buy-to-play with zero pay-to-win microtransactions or battle passes"
      ],
      [
            "Difficulty Scalability",
            "Three distinct game modes: Explorer, Returner, and permadeath Iron Man"
      ],
      [
            "Content Scope",
            "25+ firearms, 300+ modular gun attachments, and 10 dynamic factions"
      ],
      [
            "Developer & Engine",
            "NoShadow Studios; proprietary custom 2D top-down physics engine"
      ],
      [
            "Verified Baseline",
            "Steam Early Access Update 0.7.2 Baseline"
      ]
],
    faq: [
      [
            "Is Scavland too difficult for casual players?",
            "No, provided you select Explorer Mode on the character creation screen. Explorer Mode halves stamina dodge costs, grants 150 stamina, doubles campfire regeneration, and protects your equipped firearms and armor upon death."
      ],
      [
            "Does Scavland have co-op multiplayer right now?",
            "Not in the initial launch build. Scavland launched as a dedicated single-player survival RPG. Co-op multiplayer and companion squad AI are officially slated for Phase 2 and 3 of the Early Access roadmap."
      ],
      [
            "How does Scavland compare in value to Zero Sievert?",
            "Scavland features deeper ballistic customization with 300+ modular attachments, realistic weapon degradation thresholds (explosions occur below 30% durability), procedural underground bunkers, and a dynamic Mist weather event that alters mutant AI."
      ],
      [
            "Will the price increase when Scavland leaves Early Access?",
            "Yes. The developers have indicated that the retail price will increase from $19.99 USD upon the full Version 1.0 launch as Act II and Act III story expansions are integrated."
      ],
      [
            "Are there game-breaking bugs in Scavland Early Access?",
            "As of Update 0.7.2, major blockers\u2014including NPC sleep locks, missing bunker collision meshes, and chunk streaming hitches\u2014have been fully patched. Solo saves are protected by independent Autosave Slots."
      ]
],
    related: ["scavland-beginner-guide", "scavland-price-and-regional-editions", "scavland-vs-zero-sievert-comparison", "scavland-explorer-mode-and-campfire-healing"],
    videoId: '6gZGUJTnqWI',
    videoTitle: "Scavland Is It Worth Your Money?! Spoiler: Yes!",
    videoChannel: "Sergeant Kelvin"
  },
  {
    slug: 'scavland-save-file-location-and-backups',
    category: "\u0421\u0438\u0441\u0442\u0435\u043c\u044b",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Save File Location \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Save File Location",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Save File Location \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'Official Steam Community Technical FAQs · Update 0.7.0',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_05_inventory_management.webp',
    imageAlt: "Scavland save data management and safehouse stash inventory interface",
    answer: "Knowing your exact Scavland save file directory is essential for protecting your campaign progression against corruptions, mod experiments, or accidental death in <strong>Iron Man</strong> runs. On Windows 10 and 11, Scavland stores all campaign profiles and character inventories in the local user profile directory under <strong>%USERPROFILE%\\AppData\\LocalLow\\NoShadow\\Scavland\\Saves\\</strong>. Following <strong>Update 0.7.0</strong>, the developer implemented dedicated <strong>Autosave Slots</strong> for each individual playthrough, preventing parallel characters from overwriting one another. Furthermore, Scavland fully integrates with <strong>Steam Cloud</strong> synchronization, allowing seamless progression transfer between your desktop rig and <strong>Steam Deck</strong> handheld.",
    steps: [
      "01 \u00b7 Locate Windows Save Directory via Run Command: Press [Windows Key + R] on your desktop keyboard, enter <strong>%USERPROFILE%\\AppData\\LocalLow\\NoShadow\\Scavland\\Saves\\</strong> into the text box, and press Enter to directly open the save folder.",
      "02 \u00b7 Locate Steam Deck (SteamOS Proton) Save Path: On Linux and Steam Deck, open Dolphin File Manager in Desktop Mode and navigate to <strong>~/.local/share/Steam/steamapps/compatdata/3373500/pfx/drive_c/users/steamuser/AppData/LocalLow/NoShadow/Scavland/Saves/</strong>.",
      "03 \u00b7 Understand Save Data File Structure: Each active run contains a profile container (e.g., <strong>slot_01.dat</strong>), an environment state index (<strong>world_state.json</strong>), and individual stash inventory caches. Under <strong>Update 0.7.0</strong>, secondary autosaves are flagged with the <strong>_autosave.bak</strong> extension.",
      "04 \u00b7 Execute Manual Campaign Backup SOP: Before updating your game client, installing third-party balance mods, or attempting a high-risk bunker raid in <strong>Sector B-4</strong>, copy the entire <strong>Saves</strong> folder to a secondary storage drive or cloud backup folder.",
      "05 \u00b7 Restore Corrupted or Lost Saves: If your character fails to load after an abrupt crash, delete the corrupted <strong>slot_01.dat</strong> file and rename the corresponding <strong>slot_01_autosave.bak</strong> file to replace it, restoring your most recent safehouse mattress sleep point.",
      "06 \u00b7 Manage Steam Cloud Synchronization Conflicts: If Steam reports a cloud desync warning upon launch, always select the file with the most recent local timestamp to avoid rolling back hours of barter progress with merchants like <strong>Anatoly</strong> or <strong>Volodymyr</strong>."
],
    facts: [
      [
            "Default Windows Path",
            "%USERPROFILE%\\AppData\\LocalLow\\NoShadow\\Scavland\\Saves\\"
      ],
      [
            "Steam Deck Proton Path",
            "~/.local/share/Steam/steamapps/compatdata/3373500/pfx/drive_c/..."
      ],
      [
            "Steam App ID",
            "3373500 (Scavland Store App Identifier)"
      ],
      [
            "Save Architecture",
            "Update 0.7.0 introduced isolated Autosave Slots per character run"
      ],
      [
            "Cloud Integration",
            "Full native Steam Cloud synchronization enabled by default"
      ],
      [
            "Backup Redundancy",
            "Automated .bak fallback generated on each safehouse mattress sleep"
      ],
      [
            "Verified Baseline",
            "Official Steam Community Technical FAQs \u00b7 Update 0.7.0"
      ]
],
    faq: [
      [
            "Where are Scavland save files located on Windows 11?",
            "Open File Explorer and enter '%USERPROFILE%\\AppData\\LocalLow\\NoShadow\\Scavland\\Saves\\' into the address bar to view all character save slots and world states."
      ],
      [
            "Can I transfer my PC save file to my Steam Deck?",
            "Yes. If Steam Cloud is enabled in game properties, your save files sync automatically. Alternatively, manually copy the files from the Windows directory into the Steam Deck compatdata Proton folder."
      ],
      [
            "How do I backup my Iron Man run before dangerous raids?",
            "Navigate to the Saves directory and copy your active slot file (e.g. 'slot_01.dat') to another folder. If your character dies, closing the game and pasting back the backup restores your survivor."
      ],
      [
            "Why did my save file disappear after Update 0.7.0?",
            "Update 0.7.0 refactored save architecture to support dedicated Autosave Slots. Older demo saves are archived into a 'legacy_saves' subfolder to prevent crash loops."
      ],
      [
            "Does Scavland support multiple character save slots?",
            "Yes. Since Update 0.7.0, players can maintain multiple distinct character profiles simultaneously without risk of autosaves overwriting parallel campaign progress."
      ]
],
    related: ["scavland-cheats-and-console-commands", "scavland-death-and-loot-recovery", "scavland-steam-deck-and-handheld-settings", "scavland-patch-0-7-0-update-and-changes"]
  },
  {
    slug: 'scavland-mods-and-mod-support',
    category: "\u0421\u0438\u0441\u0442\u0435\u043c\u044b",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Mods & Community \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Mods & Community",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Mods & Community \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'Community Modding Reports & Nexus Mods · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: "Modded inventory grid and custom UI telemetry in Scavland",
    answer: "While official <strong>Steam Workshop</strong> support is scheduled for post-launch roadmap phases, Scavland boasts an active modding community centered around the <strong>BepInEx 5.4</strong> Unity/C# injection framework and <strong>Nexus Mods</strong>. Because Scavland operates strictly as an offline, single-player survival sandbox during Early Access, installing community balance modifications, custom inventory grid rebalancers, FOV camera adjusters, and third-party UI localizations carries zero risk of <strong>VAC bans</strong>. However, significant patches like <strong>Update 0.7.0</strong> frequently alter internal game assembly offsets, meaning scavengers must verify plugin compatibility before loading high-value safehouse campaigns.",
    steps: [
      "01 \u00b7 Install BepInEx 5.4 Unity Framework: Download the 64-bit BepInEx 5.4 release from GitHub or Nexus Mods. Extract the archive directly into your root game directory at <strong>Steam\\steamapps\\common\\Scavland\\</strong> alongside the executable.",
      "02 \u00b7 Run Game Client Once to Generate Plugins Folder: Launch Scavland to desktop and exit immediately. BepInEx will automatically generate the <strong>BepInEx/plugins/</strong> and <strong>BepInEx/config/</strong> directories inside the game directory.",
      "03 \u00b7 Install Essential Quality-of-Life Plugins: Drop popular .dll plugins into <strong>BepInEx/plugins/</strong>. Community favorites include inventory auto-sorting, expanded camera pan ranges for <strong>Binoculars</strong>, and customizable HUD crosshair reticle markers.",
      "04 \u00b7 Apply Community Translation Packs: If your native language lacks official support, community language patches (such as extended Cyrillic, Spanish, or Brazilian Portuguese string dictionaries) can be placed in <strong>Scavland_Data/StreamingAssets/Languages/</strong>.",
      "05 \u00b7 Handle Patch Incompatibilities & Crash Loops: When official patches (such as <strong>Update 0.6.0</strong> or <strong>Update 0.7.0</strong>) release, move your <strong>BepInEx</strong> folder to a temporary directory until mod creators update their hook hooks to match new assembly binaries.",
      "06 \u00b7 Adhere to Anti-Cheat & Single-Player Safety: Scavland features zero server-side anti-cheat software in solo play. Feel free to tweak stamina drain, weapon durability degradation, and barter prices without risking your Steam account standing."
],
    facts: [
      [
            "Official Steam Workshop",
            "Planned on roadmap for Phase 3; currently manual BepInEx installation"
      ],
      [
            "Modding Framework",
            "BepInEx 5.4 x64 (Unity Mono/IL2CPP compatible)"
      ],
      [
            "Mod Hub",
            "Nexus Mods (Scavland Community Hub)"
      ],
      [
            "VAC Ban Risk",
            "0% risk; Scavland is strictly offline singleplayer with no Valve Anti-Cheat"
      ],
      [
            "Primary Mod Types",
            "UI scaling, inventory management, FOV expanders, and balance rebalancers"
      ],
      [
            "Engine Compatibility",
            "Update 0.7.0+ requires recompiled assembly hooks"
      ],
      [
            "Verified Baseline",
            "Community Modding Reports & Nexus Mods \u00b7 Update 0.7.2"
      ]
],
    faq: [
      [
            "Does Scavland support Steam Workshop?",
            "Not currently in Early Access. Official Steam Workshop support is planned for later roadmap milestones. Currently, mods are installed manually via BepInEx and Nexus Mods."
      ],
      [
            "Can I get banned for using mods in Scavland?",
            "No. Scavland is an offline singleplayer title in Early Access without any VAC (Valve Anti-Cheat) integration. Modding will never flag or ban your Steam profile."
      ],
      [
            "How do I fix Scavland crashing on launch after installing mods?",
            "Most crashes occur when game updates change internal binaries. Delete or temporarily rename the 'BepInEx' folder inside your Scavland installation directory to verify clean launch."
      ],
      [
            "Where do I place mod files for Scavland?",
            "Place .dll plugin files into the 'Steam\\steamapps\\common\\Scavland\\BepInEx\\plugins\\' directory after installing the BepInEx framework."
      ],
      [
            "Are there mods that increase weapon durability in Scavland?",
            "Yes, multiple community plugins on Nexus Mods allow customizing weapon degradation rates, although Update 0.7.0 officially doubled rifle durability across the board."
      ]
],
    related: ["scavland-cheats-and-console-commands", "scavland-save-file-location-and-backups", "scavland-russian-language-and-font-fix", "scavland-patch-0-7-0-update-and-changes"]
  },
  {
    slug: 'scavland-steam-deck-performance-optimization',
    category: "\u0416\u0435\u043b\u0435\u0437\u043e",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Steam Deck 60FPS \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Steam Deck 60FPS",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Steam Deck 60FPS \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'In-Game Benchmarks on Steam Deck LCD & OLED · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: "Scavland running on Steam Deck handheld console with tactical control overlay",
    answer: "With full native controller support and low system overhead, Scavland is an outstanding handheld experience on both <strong>Steam Deck LCD</strong> and <strong>Steam Deck OLED</strong>. In <strong>Update 0.7.0</strong>, developer NoShadow introduced specialized text scaling options and D-pad inventory navigation specifically designed for handheld displays. By optimizing your SteamOS Quick Access performance settings\u2014locking rendering to a native <strong>1280x800 resolution</strong>, capping refresh rate to <strong>60 Hz</strong>, and tuning Thermal Design Power to <strong>8W TDP</strong>\u2014scavengers can achieve a rock-solid <strong>60 FPS</strong> experience while extending battery longevity up to <strong>4.5 to 5 hours</strong> during deep raids across <strong>Zalesye</strong>.",
    steps: [
      "01 \u00b7 Configure SteamOS Native Resolution: In Steam game properties, ensure display resolution is set to Default or <strong>1280x800</strong> (16:10 native aspect ratio). This eliminates blurry scaling artifacts and avoids letterboxing.",
      "02 \u00b7 Apply 8W TDP Power Limit for Max Battery: Press the Quick Access menu button (\u2022\u2022\u2022) -> Performance tab -> enable Manual TDP Limit and adjust the slider to <strong>8 Watts</strong>. The pixel art rendering engine maintains full frame rates without drawing unnecessary wattage.",
      "03 \u00b7 Lock 60 Hz Refresh Rate & Frame Cap: Set Frame Rate Limit to <strong>60 FPS</strong> and Refresh Rate to <strong>60 Hz</strong> (or 45 FPS / 90 Hz on Steam Deck OLED for maximum smoothness and efficiency). This guarantees jitter-free combat response during high-intensity firefights.",
      "04 \u00b7 Activate In-Game Handheld Text Scaling: Under in-game Video/UI Settings, enable 'Handheld UI Scaling'. Added in <strong>Update 0.7.0</strong>, this feature enlarges item hover tooltips, weapon caliber tags, and contract journal fonts for effortless readability.",
      "05 \u00b7 Map Rear Grip Buttons (L4/L5 & R4/R5): In Steam Input controller settings, bind rear grip buttons to essential survival actions: map [L4] to <strong>Shift+Click</strong> (quick transfer), [L5] to <strong>[M]</strong> (Journal Map), [R4] to <strong>Quick Slot [5]</strong> (Hemostatic Gauze), and [R5] to <strong>[H]</strong> (Holster Weapon).",
      "06 \u00b7 Right Trackpad as Precision Mouse Aim: For precision shooting against agile <strong>Hellhounds</strong> or distant bandit snipers, configure the Right Trackpad as 'Mouse' with low sensitivity, enabling pixel-perfect reticle placement alongside dual analog sticks."
],
    facts: [
      [
            "Target Resolution",
            "1280x800 (Native 16:10 aspect ratio)"
      ],
      [
            "Target Frame Rate",
            "Solid 60 FPS (LCD) / 60-90 FPS (OLED)"
      ],
      [
            "Optimal TDP Limit",
            "8 Watts (balanced thermals and 4.5+ hour battery life)"
      ],
      [
            "GPU Clock Frequency",
            "Auto / 1000 MHz manual lock prevents thermal throttling"
      ],
      [
            "Controller Support",
            "Full native gamepad support with D-pad menu jumping (Update 0.7.0)"
      ],
      [
            "Handheld Play Focus",
            "Playable; handheld text scaling added in Update 0.7.0"
      ],
      [
            "Verified Baseline",
            "In-Game Benchmarks on Steam Deck LCD & OLED \u00b7 Update 0.7.2"
      ]
],
    faq: [
      [
            "Does Scavland run at 60 FPS on Steam Deck?",
            "Yes. With an 8W TDP limit and native 1280x800 resolution, Scavland holds a steady 60 FPS across both open-world sectors and underground bunkers with zero stutter."
      ],
      [
            "How do I fix tiny font sizes on the Steam Deck screen?",
            "Go to Options -> Display -> enable 'Handheld UI Scaling' (introduced in Update 0.7.0) to enlarge quest logs, item tooltips, and weapon statistics."
      ],
      [
            "How much battery life can I expect on Steam Deck?",
            "On a Steam Deck LCD with 8W TDP and 50% brightness, expect roughly 4.5 hours of continuous gameplay. On Steam Deck OLED, battery life reaches up to 6 hours."
      ],
      [
            "Are the controls comfortable on Steam Deck without a mouse?",
            "Yes. Full gamepad support allows smooth twin-stick aiming. For extra precision, binding the Right Trackpad to Mouse input makes sniping bandits effortless."
      ],
      [
            "Does Scavland require internet to play on Steam Deck on the go?",
            "No. Scavland is 100% offline singleplayer. Once downloaded and launched once to authenticate, you can play offline indefinitely on flights or commutes."
      ]
],
    related: ["scavland-steam-deck-and-handheld-settings", "scavland-beginner-guide", "scavland-starter-loadouts-and-budget-builds", "scavland-patch-0-7-0-update-and-changes"],
    videoId: 'Zx0Uon9RJM4',
    videoTitle: "Czy SCAVLAND to S.T.A.L.K.E.R. w 2D?! Test wydajno\u015bci na Steam Deck LCD 512 GB",
    videoChannel: "ciastek"
  },
  {
    slug: 'scavland-error-crash-fixes-and-troubleshooting',
    category: "\u0423\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0435\u043f\u043e\u043b\u0430\u0434\u043e\u043a",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Crash & Error Fixes \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Crash & Error Fixes",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Crash & Error Fixes \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'Steam Community Technical Discussions & Patch 0.7.2 Changelogs',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_06.webp',
    imageAlt: "Scavland error troubleshooting and technical stability guide",
    answer: "While Scavland is generally well-optimized for an Early Access title, certain hardware configurations, corrupted cache files, and outdated third-party overlays can trigger launch crashes, black screens, or inventory interaction freezes. The development team deployed consecutive emergency patches\u2014including <strong>Hotfix 0.7.1</strong> addressing settlement storage container lockups and <strong>Hotfix 0.7.2</strong> resolving wasteland chunk loading hangs. If your client encounters instability, launching with verified Steam parameters like <strong>-force-d3d11</strong>, verifying local game cache integrity, and managing independent <strong>Autosave Slots</strong> will resolve over 95% of technical issues.",
    steps: [
      "01 \u00b7 Fix Black Screen on Startup (-force-d3d11 Flag): If Scavland launches to audio with a persistent black screen, right-click the game in your Steam Library -> Properties -> Launch Options -> enter <strong>-force-d3d11</strong> to bypass DirectX 12 driver handshake conflicts.",
      "02 \u00b7 Resolve Stash Interaction Freeze (Hotfix 0.7.1 Baseline): If opening your permanent Safehouse Stash freezes player input, ensure your client is updated to <strong>Update 0.7.1</strong> or newer, which resolved storage container pointer locks across all faction camps.",
      "03 \u00b7 Fix Missing World Chunks & Void Falling (Hotfix 0.7.2): If wasteland terrain fails to load when transitioning between central <strong>Zalesye</strong> and outpost zones, verify game file integrity via Steam: Properties -> Installed Files -> 'Verify integrity of game files'.",
      "04 \u00b7 Repair Corrupted Save Profiles: If loading a save results in an infinite loading spinner, navigate to <strong>%USERPROFILE%\\AppData\\LocalLow\\NoShadow\\Scavland\\Saves\\</strong>, delete the affected slot's corrupted index, and replace it with its automated <strong>_autosave.bak</strong> copy.",
      "05 \u00b7 Eliminate Micro-Stutter & Frame Drops: Disable third-party background recording overlays (Discord Game Overlay, GeForce Experience, Razer Cortex). Set V-Sync to 'On' in your graphics driver control panel and match your monitor's native refresh rate.",
      "06 \u00b7 Submit Diagnostic Logs to Developer NoShadow: If unresolvable crashes persist, locate your crash report at <strong>%USERPROFILE%\\AppData\\Local\\Temp\\NoShadow\\Scavland\\Crashes\\</strong> and upload the <strong>Player.log</strong> to the official Steam Bug Reports sub-forum."
],
    facts: [
      [
            "Primary Launch Parameter",
            "-force-d3d11 forces stable DirectX 11 backend rendering"
      ],
      [
            "Save File Recovery",
            "Rename .bak files in %USERPROFILE%\\AppData\\LocalLow\\NoShadow\\Scavland\\Saves\\"
      ],
      [
            "Critical Patches",
            "Hotfix 0.7.1 fixed stash freeze; Hotfix 0.7.2 resolved world chunk loading"
      ],
      [
            "Log File Path",
            "%USERPROFILE%\\AppData\\LocalLow\\NoShadow\\Scavland\\Player.log"
      ],
      [
            "Overlay Incompatibilities",
            "Disable Discord and RivaTuner overlays to prevent startup hooks from failing"
      ],
      [
            "RAM Overhead",
            "Requires 8GB minimum; close memory-intensive browsers on 8GB systems"
      ],
      [
            "Verified Baseline",
            "Steam Community Technical Discussions & Patch 0.7.2 Changelogs"
      ]
],
    faq: [
      [
            "How do I fix Scavland crashing on launch?",
            "Add '-force-d3d11' to your Steam Launch Options, disable fullscreen optimizations on the game executable, and verify that your GPU drivers are updated to the latest release."
      ],
      [
            "Why does my game freeze when opening the safehouse stash?",
            "This was a known bug in early 0.7.0 builds where container inventories desynced. Update your game to Hotfix 0.7.1 or newer through Steam to automatically resolve this."
      ],
      [
            "How do I recover a broken or corrupted save file in Scavland?",
            "Navigate to '%USERPROFILE%\\AppData\\LocalLow\\NoShadow\\Scavland\\Saves\\', delete the corrupted 'slot_01.dat', and rename 'slot_01_autosave.bak' to 'slot_01.dat'."
      ],
      [
            "Why does Scavland drop frames in dense Mist fog?",
            "Volumetric fog particles can tax older GPUs. In video settings, reduce 'Particle Quality' and 'Shadow Resolution' to High or Medium to restore smooth frame rates."
      ],
      [
            "Where can I find Scavland error logs to report a bug?",
            "Find your diagnostic log file at '%USERPROFILE%\\AppData\\LocalLow\\NoShadow\\Scavland\\Player.log' and share it on the Steam community technical support subforum."
      ]
],
    related: ["scavland-save-file-location-and-backups", "scavland-patch-0-7-0-update-and-changes", "scavland-steam-deck-and-handheld-settings", "scavland-cheats-and-console-commands"]
  },
  {
    slug: 'scavland-console-release-status',
    category: "\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Console Release Status \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Console Release Status",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Console Release Status \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'Developer Steam Store Disclosures & Q&A Statements · September 2026',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_08.webp',
    imageAlt: "Scavland tactical map and console release overview",
    answer: "As of September 2026, Scavland is strictly an exclusive PC release available through <strong>Steam Early Access</strong>. Studio developer <strong>NoShadow</strong> has officially stated that their primary focus remains completing the planned <strong>Act II</strong> and <strong>Act III</strong> expansions, optimizing world simulation stability, and delivering promised <strong>co-op multiplayer</strong> before committing development resources to dedicated console ports on <strong>PlayStation 5</strong>, <strong>Xbox Series X/S</strong>, or <strong>Nintendo Switch</strong>. However, because Scavland was built from day one with full controller support, native gamepad HUD navigation, and optimized <strong>Steam Deck</strong> compatibility, a future console launch following the full <strong>Version 1.0</strong> PC release is highly feasible.",
    steps: [
      "01 \u00b7 Current Platform Availability (PC Steam Exclusive): Scavland launched on September 4, 2026 exclusively for PC Windows (App ID <strong>3373500</strong>), alongside an Apple Silicon macOS version submitted for store review.",
      "02 \u00b7 PlayStation 5 (PS5) Port Outlook: Developer NoShadow confirmed in community Q&A sessions that console ports will be evaluated after the PC version reaches commercial feature completion (Version 1.0). No PS5 release date currently exists.",
      "03 \u00b7 Xbox Series X/S Port Possibilities: While no native Xbox build is in active development, the game's native DirectX 11/12 architecture and full Xbox controller button mapping make an Xbox Game Preview port a logical candidate post-1.0.",
      "04 \u00b7 Nintendo Switch & Switch 2 Potential: While original Nintendo Switch hardware would struggle with dense AI pathfinding and physics simulation, the upcoming next-generation Switch successor could easily handle Scavland's engine demands.",
      "05 \u00b7 Play on TV via Steam Deck Dock or PC Gamepad: Console players wanting a couch gaming experience can plug an Xbox Wireless or PlayStation DualSense controller directly into their PC, or connect their <strong>Steam Deck</strong> to a 4K TV dock.",
      "06 \u00b7 Roadmap Milestones Preceding Consoles: Before console porting begins, the studio must deliver: (1) Act II/III territories, (2) co-op multiplayer netcode, and (3) official Steam Workshop modding tools."
],
    facts: [
      [
            "Current Platforms",
            "PC (Windows via Steam) and Steam Deck; macOS in review"
      ],
      [
            "PlayStation 5 Status",
            "No active release date; evaluated post-Version 1.0"
      ],
      [
            "Xbox Series X/S Status",
            "No active release date; evaluated post-Version 1.0"
      ],
      [
            "Nintendo Switch Status",
            "Unannounced; potential next-gen platform candidate"
      ],
      [
            "Controller Compatibility",
            "100% native support for Xbox Wireless, DualSense, and DualShock 4"
      ],
      [
            "Steam App ID",
            "3373500"
      ],
      [
            "Verified Baseline",
            "Developer Steam Store Disclosures & Q&A Statements \u00b7 September 2026"
      ]
],
    faq: [
      [
            "Is Scavland on PS5 or PS4?",
            "No. Scavland is currently exclusive to PC Steam Early Access. The developers have stated that PlayStation console versions will only be considered after the PC game leaves Early Access."
      ],
      [
            "Is Scavland coming to Xbox Game Pass?",
            "There is currently no official announcement regarding Xbox Series X/S or Xbox Game Pass inclusion. The team is prioritizing PC bug fixes and roadmap expansions."
      ],
      [
            "Can I play Scavland on Nintendo Switch?",
            "Not at this time. Scavland is not available on Nintendo Switch. Handheld gamers should use a Steam Deck, ROG Ally, or Lenovo Legion Go to play."
      ],
      [
            "Can I play Scavland with a controller on PC?",
            "Yes! Scavland features full native controller support with complete button glyphs for Xbox, PlayStation DualSense, and Steam Deck inputs."
      ],
      [
            "When will Scavland release on consoles?",
            "If console development proceeds after the PC Version 1.0 release, ports would likely target late 2027 or 2028 at the earliest."
      ]
],
    related: ["scavland-price-and-regional-editions", "scavland-steam-deck-and-handheld-settings", "scavland-early-access-launch-faq-and-roadmap", "scavland-developer-commitments-and-patch-roadmap"]
  },
  {
    slug: 'scavland-tips-and-tricks',
    category: "\u0422\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Tips & Tricks \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Tips & Tricks",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Tips & Tricks \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'Veteran Community Field Manual & Official Discord Mechanics',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_02_bunker_tactical.jpg',
    imageAlt: "Veteran scavenger tactical tips and inventory triage in Scavland",
    answer: "Surviving the unforgiving Soviet exclusion zone of <strong>Zalesye</strong> requires unlearning reckless shooter habits and embracing deliberate tactical discipline. In Scavland, death punishes negligence through heavy equipment drops, ruthless sound propagation, and weapon failure below <strong>30% durability</strong>. Veteran scavengers survive by managing audio ripples (unsuppressed gunfire alerts hostiles within a <strong>200m radius</strong>), leveraging instant <strong>Shift+Click</strong> item transfers to minimize exposure, keeping stamina above <strong>50%</strong> for emergency combat rolls, and strictly respecting the <strong>21:00 curfew</strong> before nocturnal mutants roam the overworld.",
    steps: [
      "01 \u00b7 Master the 200m Audio Ripple: Gunfire echoes across a massive <strong>200-meter radius</strong>, drawing bandits and aggressive mutant packs. Always clear perimeter scouts using suppressed sidearms (such as the <strong>PM Nikolay PB</strong>) or melee before firing unsuppressed rifles.",
      "02 \u00b7 Never Fire Below 30% Durability: In <strong>Update 0.7.0</strong>, weapon catastrophic explosions only occur when firing below <strong>30% condition</strong>. Apply Glue or Gun Lube starting at 80% durability, and use Cleaning Rods at 70% to prevent costly field jams.",
      "03 \u00b7 Use Shift+Click for Instant Looting: Never drag items individually between containers and your backpack. Holding <strong>[Shift + Left Click]</strong> instantly transfers entire item stacks, reducing stationary looting exposure by over 80%.",
      "04 \u00b7 Carry at Least One Splint and Two Bandages: Fractured limbs impose severe penalties: character movement drops by <strong>40%</strong> and weapon sway inflates by <strong>60%</strong>. Always keep a <strong>Wooden Splint</strong> and <strong>Sterile Bandages</strong> hotkeyed in quick slots.",
      "05 \u00b7 Exploit Safehouse Campfire Regeneration: Standing near lit campfires doubles your passive health regeneration. Cook contaminated water in clean cans at campfires to create <strong>Boiled Water</strong>, avoiding debilitating dehydration debuffs.",
      "06 \u00b7 Return to Bunkers on a 3-Hour Cycle: Military bunkers (like <strong>Sector B-4</strong>) reset high-tier loot crates and ammunition containers every <strong>3 in-game hours</strong> (180 minutes). Plan efficient contract loops between surface tasks and bunker sweeps."
],
    facts: [
      [
            "Gunfire Sound Radius",
            "Unsuppressed rifle fire alerts enemies within a 200m cone"
      ],
      [
            "Explosion Danger Point",
            "Weapons risk catastrophic explosion only below 30% durability (Update 0.7.0)"
      ],
      [
            "Fracture Movement Debuff",
            "-40% movement speed and +60% weapon sway without a splint"
      ],
      [
            "Night Curfew Window",
            "Nocturnal stalkers and lickers roam between 21:00 and 05:30"
      ],
      [
            "Fast Loot Shortcut",
            "Shift + Left Click instantly transfers item stacks between grids"
      ],
      [
            "Bunker Loot Reset",
            "Loot containers in underground bunkers reset every 3 in-game hours"
      ],
      [
            "Verified Baseline",
            "Veteran Community Field Manual & Official Discord Mechanics"
      ]
],
    faq: [
      [
            "What is the single most important survival rule in Scavland?",
            "Always monitor your stamina bar. If your stamina drops below 25%, you cannot perform evasion rolls or sprint away from aggressive mutants like Hellhounds."
      ],
      [
            "How do I avoid getting ambushed while looting?",
            "Never drag-and-drop items manually. Hold Shift and Left-Click to vacuum items instantly into your tactical rig, and always close doors behind you inside buildings."
      ],
      [
            "What happens if I stay outside after 21:00 at night?",
            "Visibility drops to a narrow 10-meter cone, flashlight beams attract hostile snipers from 40 meters away, and lethal Tongue Monsters spawn across roads."
      ],
      [
            "How do I fix weapon jams during a firefight?",
            "Press [R] to initiate a chamber clearance cycle. If your weapon condition is below 33%, hard jams will occur frequently until repaired at a workbench."
      ],
      [
            "Which trader should I sell my scrap electronics to?",
            "Traders specialize: sell electronic boards and spark plugs to high-tier technology brokers like Grigory or Mechanist merchants, rather than standard food vendors."
      ]
],
    related: ["scavland-beginner-guide", "scavland-starter-loadouts-and-budget-builds", "scavland-night-survival-and-stealth-mechanics", "scavland-weapon-repair-and-durability"],
    videoId: 'Hc7e62PoCsM',
    videoTitle: "Scavland: 10 Things the Game DOESN\u2019T Tell You!",
    videoChannel: "Gaming Plus TV"
  },
  {
    slug: 'scavland-best-weapons-tier-list',
    category: "\u0421\u043d\u0430\u0440\u044f\u0436\u0435\u043d\u0438\u0435",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Weapons Tier List \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Weapons Tier List",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Weapons Tier List \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'In-Game Ballistics Testing & Community Weapon Manifests · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Scavland weapon tier list ranking and modular firearm comparisons",
    answer: "Selecting the best firearm in Scavland depends on your combat engagement profile, ammunition availability, and target armor rating. Following sweeping combat overhauls in <strong>Update 0.7.0</strong> and <strong>Hotfix 0.7.2</strong>, rifle durability was doubled, effective range increased by <strong>+1 to +2 tiles</strong>, and the <strong>Leon 1895</strong> family received a massive <strong>+50% damage buff</strong>. Top-tier dominance is held by versatile platforms like the <strong>MK-47</strong> (reclassified to Basic tier for early availability), the long-range <strong>63 Dragoon</strong> designated marksman rifle, and the close-quarters <strong>TOZ-34</strong> 12-gauge shotgun loaded with heavy buckshot for shredding mutated predators.",
    steps: [
      "01 \u00b7 S-Tier Primary: MK-47 & Mikhail 74U: The <strong>MK-47</strong> chambered in 7.62x39mm delivers unmatched armor penetration against armored scavengers and bandit sentries. Paired with a muzzle brake and extended magazine, it provides reliable stopping power at all ranges.",
      "02 \u00b7 S-Tier Marksman / DMR: 63 Dragoon: For long-range perimeter clearing, the <strong>63 Dragoon</strong> DMR reigns supreme. Equipping a <strong>PSO-1</strong> optical scope enables precision headshots that drop human hostiles in 1-2 rounds well outside their 25m aggro radius.",
      "03 \u00b7 A-Tier Mutant Defense: TOZ-34 & Saiga 12: High-threat mutants (like <strong>Tongue Monsters</strong> and <strong>Big Bears</strong>) possess heavy flesh health. The <strong>TOZ-34</strong> shotgun applies high-stagger buckshot damage, safely halting charging beasts before they grapple.",
      "04 \u00b7 A-Tier Stealth Sidearm: PM Nikolay PB: The integrally suppressed <strong>PM Nikolay PB</strong> is essential for covert raids. Firing standard 9x18mm rounds, it eliminates solitary scouts with minimal audio ripple, preventing regional bandit alerts.",
      "05 \u00b7 B-Tier Budget Workhorses: Leon 1895 & Bahadir 918: Following Update 0.6.2 and 0.7.0, the <strong>Leon 1895</strong> deals +50% projectile damage, making it a lethal budget hunting rifle. The <strong>Bahadir 918</strong> offers an impressive 15 shots per durability point.",
      "06 \u00b7 Optimal Modding Strategy at the Workbench: Maximize ergonomics and horizontal recoil control first. Attaching an angled foregrip and tactical muzzle compensator tightens weapon sway by up to <strong>35%</strong>, ensuring rapid follow-up shots connect."
],
    facts: [
      [
            "Top S-Tier Assault Rifle",
            "MK-47 (7.62x39mm) \u2014 High armor penetration & durability"
      ],
      [
            "Top S-Tier Sniper / DMR",
            "63 Dragoon (7.62x54mmR) \u2014 1-2 shot kill range with PSO-1 scope"
      ],
      [
            "Top S-Tier Shotgun",
            "TOZ-34 (12-Gauge) \u2014 Maximum stagger against mutant chargers"
      ],
      [
            "Top Stealth Sidearm",
            "PM Nikolay PB (9x18mm) \u2014 Integrally suppressed silent takedowns"
      ],
      [
            "Most Improved Weapon",
            "Leon 1895 (+50% projectile damage in Update 0.7.0 / 0.6.2)"
      ],
      [
            "Attachment Compatibility",
            "Over 300 modular optics, stocks, grips, and muzzle devices"
      ],
      [
            "Verified Baseline",
            "In-Game Ballistics Testing & Community Weapon Manifests \u00b7 Update 0.7.2"
      ]
],
    faq: [
      [
            "What is the absolute best weapon in Scavland overall?",
            "The MK-47 is widely regarded as the best overall weapon due to its heavy 7.62x39mm stopping power, broad attachment compatibility, and generous durability pool since Update 0.7.0."
      ],
      [
            "Where can I find the 63 Dragoon sniper rifle?",
            "The 63 Dragoon spawns in high-security military crates inside subterranean bunkers (such as Sector B-4) or can be bartered from Tier 2 Mechanist and Gunner merchants."
      ],
      [
            "Are shotguns effective against armored human bandits?",
            "Shotguns excel against unarmored mutants, but standard buckshot struggles against plate armor. Use high-penetration slug ammunition or switch to 7.62mm rifles for armored factions."
      ],
      [
            "Did Update 0.7.0 nerf or buff weapons?",
            "Update 0.7.0 delivered massive buffs: weapon durability per point roughly doubled, hard jam chances dropped to 33%, and weapons no longer explode above 30% condition."
      ],
      [
            "What is the best budget gun for fresh spawns?",
            "The Leon 1895 or standard Makarov sidearm. The Leon 1895 received a +50% damage boost, allowing scavengers to drop bandits cheaply without expensive weapon mods."
      ]
],
    related: ["scavland-weapons-and-attachments", "scavland-weapon-repair-and-durability", "scavland-starter-loadouts-and-budget-builds", "scavland-tactical-database-weapons-loot"],
    videoId: 'JQDdSAYkOkQ',
    videoTitle: "Scavland Ultimate Weapon - 63 Dragoon Item Location",
    videoChannel: "Game Detox Dopamine"
  },
  {
    slug: 'scavland-money-making-guide',
    category: "\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0430",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Money Making & Rubles \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Money Making & Rubles",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Money Making & Rubles \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'Official Steam Economy Changelogs & Community Trade Tests · Update 0.7.0',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_04_settlement_camp.webp',
    imageAlt: "Scavland barter market, merchant stands, and high-value loot liquidation",
    answer: "Building substantial ruble wealth in Scavland requires understanding trader specialization and item weight-to-value density. In Early Access, dumping unrefined scrap at the nearest merchant forfeits massive profit margins. Since <strong>Update 0.6.0</strong>, merchants pay premium multipliers for designated goods: <strong>Zhivan</strong> pays <strong>140%</strong> for Common hardware, <strong>Bogdan</strong> pays <strong>40% more</strong> for mutant parts, and <strong>Volodymyr</strong> offers discounted weapon attachments. By prioritizing lightweight 1-slot barter salvage (such as <strong>Spark Plugs</strong> and <strong>Military Lighters</strong>) over heavy iron pipes, scavengers can clear <strong>30,000 to 50,000 Rubles</strong> per 20-minute raid cycle through <strong>Zalesye</strong>.",
    steps: [
      "01 \u00b7 Exploit Merchant Specialization Multipliers: Never liquidate inventory blindly. Sell industrial electronics to <strong>Grigory</strong>, biological trophies to <strong>Bogdan</strong> (+40% payout), and common salvage to <strong>Zhivan</strong> (140% rate). Avoid selling to <strong>Vesna</strong>, who only pays a flat 75% baseline.",
      "02 \u00b7 Prioritize Ruble-per-Kilogram Density: Backpack capacity is governed by encumbrance limits. A single <strong>Spark Plug</strong> weighs 0.2kg and sells for hundreds of rubles, whereas heavy scrap metal eats up stamina for negligible returns. Dump scrap once weapon repair reserves are met.",
      "03 \u00b7 Run the 3-Hour Bunker Loot Circuit: Subterranean vaults like <strong>Sector B-4</strong> reset high-value weapon containers every <strong>3 in-game hours</strong>. A fast sweep using a budget shotgun yields pristine attachments that sell for thousands of rubles to black-market traders.",
      "04 \u00b7 Leverage Trader Reputation Ranks (Update 0.7.0): Under Update 0.7.0, each increase in <strong>Trader Rank</strong> awards a permanent <strong>+5% sell value bonus</strong> across all inventory items. Fulfill daily 24-hour courier contracts to maximize long-term profit margins.",
      "05 \u00b7 Target High-Value Medical Blueprints: Acquire medical crafting recipes from <strong>Alexei</strong> at the hospital. Crafting <strong>Army AI-2</strong> medkits and <strong>Stimpacks</strong> from scavenged clean cloth and antiseptic generates 3x market value upon liquidation.",
      "06 \u00b7 Reinvest Profits into Permanent Stash Tabs: As soon as you accumulate <strong>50,000 Rubles</strong>, purchase a Stash Expansion tab from town merchants (introduced in Update 0.7.0). Storing reserve components allows you to capitalize on market shifts without encumbrance."
],
    facts: [
      [
            "Top Selling Scrap Item",
            "Spark Plugs, Relays, and Military Lighters (Highest value per kg)"
      ],
      [
            "Best Hardware Vendor",
            "Zhivan pays 140% for Common classification items"
      ],
      [
            "Best Mutant Hunter Vendor",
            "Bogdan pays +40% premium for teeth, claws, and mutant glands"
      ],
      [
            "Reputation Bonus",
            "+5% sell value bonus per Trader Rank reached (Update 0.7.0)"
      ],
      [
            "Stash Expansion Cost",
            "50,000 Rubles per additional permanent safehouse stash tab"
      ],
      [
            "Bunker Farming Reset",
            "Loot containers respawn every 180 in-game minutes (3 hours)"
      ],
      [
            "Verified Baseline",
            "Official Steam Economy Changelogs & Community Trade Tests \u00b7 Update 0.7.0"
      ]
],
    faq: [
      [
            "What is the fastest way to make money early in Scavland?",
            "Scavenge the ruined railway houses northwest of Zalesye for spark plugs, copper wire, and batteries, then sell them directly to Zhivan at his 140% payout rate."
      ],
      [
            "Which merchant pays the most for loot?",
            "It depends on item category: Zhivan pays 140% for common scrap, Bogdan pays 140% for mutant trophies, and Grigory pays top dollar for military weapon optics."
      ],
      [
            "Should I sell or keep weapon attachments?",
            "Sell duplicate low-tier iron sights and foregrips to Volodymyr or Mechanist vendors. Keep high-magnification scopes (PSO-1) and suppressors for personal raids."
      ],
      [
            "Are mutant parts worth farming for rubles?",
            "Yes, hunting Hellhounds and Splatters near forest boundaries yields glands and pelts that Bogdan purchases at a 40% premium over standard rates."
      ],
      [
            "How much do stash expansions cost in Scavland?",
            "In Update 0.7.0, permanent village safehouse stash expansions cost 50,000 Rubles per tab and can be bought from local faction traders."
      ]
],
    related: ["scavland-loot-and-scavenging", "scavland-merchant-prices-and-barter-guide", "scavland-crafting-and-trading", "scavland-starter-loadouts-and-budget-builds"],
    videoId: 'l84-X9wHjeM',
    videoTitle: "Making MONEY and Getting LOOT in SCAVLAND",
    videoChannel: "Nukov"
  },
  {
    slug: 'scavland-walkthrough-beginner-to-mid',
    category: "\u041f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Walkthrough: Early to Mid \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Walkthrough: Early to Mid",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Walkthrough: Early to Mid \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'In-Game Storyline Verification & Steam Community Walkthroughs · Update 0.7.0',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: "Scavland main storyline progression and underground corridor exploration",
    answer: "Embarking on your journey across <strong>Zalesye</strong> requires a methodical progression route from vulnerable beginner scav to a fortified, well-armed operative. Early progression is structured around the foundational tutorial contract <strong>Dead Man\\'s Rest</strong>, establishing your first death-immune safehouse bunk, acquiring an <strong>Anomaly Scanner</strong> on hotkey [3], and earning early reputation with brokers like <strong>Anatoly</strong> and <strong>Nadja</strong>. By following a disciplined raid path\u2014avoiding deep forest mutants until armed with 12-gauge shotguns and resting in beds with mattresses before <strong>21:00</strong>\u2014scavengers can transition smoothly into mid-game bunker expeditions without losing hard-earned gear.",
    steps: [
      "01 \u00b7 Complete Tutorial Contract 'Dead Man\\'s Rest': Spawn into your initial shelter, loot the basic Makarov pistol, clean rags, and water, then follow the road markers south to clear the designated bandit scout and claim your introductory ruble bounty.",
      "02 \u00b7 Establish Central Settlement Base at Zalesye: Register your presence in central <strong>Zalesye</strong>. Locate the village safehouse bunk, test your death-immune storage locker, and memorize the locations of essential brokers: <strong>Anatoly</strong> (logistics), <strong>Nadja</strong> (mutant bounties), and <strong>Physician Anna</strong> (medical).",
      "03 \u00b7 Procure an Anomaly Scanner & Battery Cells: Secure an <strong>Anomaly Scanner</strong> to begin detecting lucrative spatial anomalies. Assign the scanner to quick slot [3] and sweep the perimeter for green radiation fissures that harbor low-tier artifacts.",
      "04 \u00b7 Transition from Pistol to Longarms (Leon 1895 & TOZ-34): Use early quest rubles to purchase a <strong>TOZ-34</strong> shotgun or <strong>Leon 1895</strong> rifle. In Update 0.7.0, the Leon deals +50% damage, allowing you to one-shot bandit patrol guards from cover.",
      "05 \u00b7 Fulfill 24-Hour Contracts for Reputation: Accept daily faction jobs from Anatoly and Nadja. Reaching <strong>+200 Rep</strong> with the Commonfolk or Mechanists unlocks <strong>Tier 2 vendor stock</strong>, granting access to optical scopes and extended magazines.",
      "06 \u00b7 Advance to Story Quest 'Catching Current': Once equipped with Tier 2 armor and an assault rifle, speak with the settlement elder to initiate the <strong>Catching Current</strong> questline, paving the way toward subterranean electrical substation raids."
],
    facts: [
      [
            "First Story Milestone",
            "Dead Man's Rest (Tutorial quest introducing safehouse mechanics)"
      ],
      [
            "Key Hub Location",
            "Zalesye Central Neutral Settlement (All basic traders & clinics)"
      ],
      [
            "Essential Early Tool",
            "Anomaly Scanner bound to hotkey [3] for radiation sweeps"
      ],
      [
            "Recommended Early Firearms",
            "Leon 1895 (+50% buffed hunting rifle) and TOZ-34 shotgun"
      ],
      [
            "Night Curfew Timing",
            "Return to safehouse bed before 21:00 to avoid lethal nocturnal spawns"
      ],
      [
            "Tier 2 Gate Threshold",
            "+200 faction reputation unlocks optical scopes and repair kits"
      ],
      [
            "Verified Baseline",
            "In-Game Storyline Verification & Steam Community Walkthroughs \u00b7 Update 0.7.0"
      ]
],
    faq: [
      [
            "What should I do immediately upon starting a new game?",
            "Loot the starter shelter thoroughly, equip your sidearm, open the map [M] to spot the nearest extraction beacon, and complete the 'Dead Man's Rest' objective."
      ],
      [
            "Where can I find clean drinking water early on?",
            "Collect empty metal cans and contaminated water bottles from abandoned kitchens, then boil them at any lit safehouse campfire to produce safe Boiled Water."
      ],
      [
            "How do I level up my reputation with Zalesye traders?",
            "Fulfill daily 24-hour job contracts posted by Anatoly and Nadja in your Journal. Completing contracts awards rubles, faction standing, and vendor discounts."
      ],
      [
            "When should I attempt my first underground bunker raid?",
            "Do not enter underground bunkers like Sector B-4 until you have at least Tier 2 armor, a shotgun with 20+ buckshot shells, 2 splints, and a Red Keycard."
      ],
      [
            "Can I skip time if I get stuck waiting for morning?",
            "Yes, but since Update 0.7.0 you must sleep in a bed that has a mattress. Resting in an unequipped bed will not advance time."
      ]
],
    related: ["scavland-beginner-guide", "scavland-quests-and-contracts", "scavland-starter-loadouts-and-budget-builds", "scavland-sleep-and-world-reset-guide"],
    videoId: '4Q0BQs4tFJk',
    videoTitle: "SCAVLAND - Full Gameplay Walkthrough Part 1 [FULL GAME] No Commentary",
    videoChannel: "Zish Gaming"
  },
  {
    slug: 'scavland-walkthrough-advanced-endgame',
    category: "\u041f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Walkthrough: Endgame \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Walkthrough: Endgame",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Walkthrough: Endgame \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'Endgame Raid Logs & Update 0.7.2 Content Verification',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: "Endgame subterranean vault raid and tactical mutant combat in Scavland",
    answer: "The endgame of Scavland's Act I Early Access build centers around penetrating fortified subterranean complexes, extracting high-energy anomalous artifacts, and defeating lethal apex predators. Players who have unlocked <strong>Tier 3 reputation</strong> with the <strong>Mechanists</strong> and <strong>Gunners</strong> transition their focus to <strong>Sector B-4</strong>\u2014a heavily defended underground Soviet bunker requiring a <strong>Red Keycard</strong>. Success in these high-radiation zones demands high-penetration <strong>7.62x39mm</strong> or <strong>7.62x54mmR</strong> assault platforms (such as the <strong>MK-47</strong> or <strong>63 Dragoon</strong>), crafting <strong>Expert Weapon Repair Kits</strong> via Volodymyr's advanced blueprints, and harvesting rare <strong>Flux Aspect Cores</strong> amidst toxic <strong>Mist</strong> weather cycles.",
    steps: [
      "01 \u00b7 Secure Red Keycards for Vault Infiltration: Red Keycards spawn inside locked hospital safes or can be purchased for high reputation from black-market brokers. Store duplicate keycards in your permanent safehouse stash to safeguard access.",
      "02 \u00b7 Infiltrate Sector B-4 Subterranean Facility: Locate the concrete blast doors northwest of <strong>Zalesye</strong> past the railway embankment. Equip night vision or high-lumen weapon lights, swipe your <strong>Red Keycard</strong>, and breach the blast bulkhead.",
      "03 \u00b7 Defeat High-Threat Tongue Monsters (Lickers): Subterranean corridors are stalked by mutated Lickers that grapple from shadows. Pre-aim corners with a 12-gauge shotgun loaded with heavy magnum buckshot to stagger beasts before they tether your operative.",
      "04 \u00b7 Secure the Flux Aspect Core: Navigate to the subterranean electrical reactor chamber. Activate the <strong>Anomaly Scanner</strong> to pinpoint the floating <strong>Flux Aspect Core</strong>. Contain the artifact within an insulated container to avoid lethal bio-contamination.",
      "05 \u00b7 Craft and Maintain Expert Weapon Repair Kits: Purchase the Advanced Repair Kit schematic from <strong>Volodymyr</strong> at Trader Rank 2. Crafting universal repair kits from pliers, gun lube, and toolkits lets you restore high-tier weapons at any condition.",
      "06 \u00b7 Establish Stash Forward Outposts at Arcadia: Use the four newly equipped regional outposts (Arcadia, Mechanist Base, Mudlark Camp, Microrayion) introduced in <strong>Update 0.7.0</strong> to stage ammo and extract heavy military salvage without trekking back to Zalesye."
],
    facts: [
      [
            "Primary Endgame Raid",
            "Sector B-4 Subterranean Military Bunker (Soviet Vault)"
      ],
      [
            "Access Requirement",
            "Red Keycard swipe at reinforced concrete blast door"
      ],
      [
            "Apex Boss Threats",
            "Tongue Monsters (Lickers), Armored Bandits, and Big Bears"
      ],
      [
            "Endgame Story Objective",
            "Flux Aspect Core extraction during 'Catching Current' questline"
      ],
      [
            "Universal Maintenance",
            "Expert Repair Kits usable regardless of equipment wear level (Update 0.7.0)"
      ],
      [
            "Loot Reset Period",
            "Endgame bunker crates reset on a 3-hour (180-minute) internal timer"
      ],
      [
            "Verified Baseline",
            "Endgame Raid Logs & Update 0.7.2 Content Verification"
      ]
],
    faq: [
      [
            "What gear do I need before entering the Sector B-4 bunker?",
            "Bring an assault rifle (MK-47 or Mikhail 74U) with at least 120 rounds of armor-piercing ammo, a secondary shotgun for mutants, 2 tourniquets, a wooden splint, a gas mask with 80%+ filter, and your Red Keycard."
      ],
      [
            "How do I defeat Tongue Monsters without taking heavy damage?",
            "Listen for their wet clicking sounds. Back up into narrow doorways where they cannot flank, and fire high-stagger shotgun blasts directly into their open mouth when they prepare to grapple."
      ],
      [
            "Where can I find the schematic for Expert Weapon Repair Kits?",
            "Gunsmith Volodymyr at the Crossroads annex offers the Advanced Weapon Repair Kit blueprint once you achieve Trader Rank 2."
      ],
      [
            "Do underground bunker doors re-lock after exiting?",
            "Yes. If you exit the facility and the 3-hour loot reset occurs, you will need a Red Keycard to unlock the outer blast door again."
      ],
      [
            "What is the reward for completing the Flux Aspect Core storyline?",
            "Securing the core unlocks high-tier anomaly detection gear, grants +500 faction reputation across allied syndicates, and awards liquid ruble bounties."
      ]
],
    related: ["scavland-red-keycard-and-bunker-loot-recovery", "scavland-weapons-and-attachments", "scavland-anomaly-scanner-and-artifacts", "scavland-map-and-locations"],
    videoId: 'U2O7gSpudGc',
    videoTitle: "6K START to +80,000! Scavland Bunker Run",
    videoChannel: "Mars"
  },
  {
    slug: 'scavland-achievements-guide',
    category: "\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Steam Achievements \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Steam Achievements",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Steam Achievements \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'Official Steamworks Achievement Manifest & Community Guides · September 2026',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_11.webp',
    imageAlt: "Scavland Steam achievement completion badges and trophy roadmap",
    answer: "Scavland features <strong>28 official Steam achievements</strong> that challenge players across tactical combat, storyline milestones, weapon gunsmithing, economy milestones, and hardcore permadeath survival. Most achievements can be unlocked naturally during a standard <strong>Explorer</strong> or <strong>Returner</strong> campaign, such as clearing your first bunker in <strong>Sector B-4</strong>, reaching <strong>Trader Rank 3</strong>, and modifying a firearm with four attachments. However, prestigious achievements like <strong>Wasteland Legend</strong> require completing an <strong>Iron Man</strong> campaign without dying, while exploration trophies demand uncovering all four regional outposts across <strong>Zalesye</strong>.",
    steps: [
      "01 \u00b7 Complete Storyline Progression Achievements: Progress through central narrative milestones: unlock 'First Blood' upon finishing the tutorial contract, 'Wired Up' upon completing <strong>Catching Current</strong>, and 'Core Extractor' upon securing the <strong>Flux Aspect Core</strong>.",
      "02 \u00b7 Master Weapon Customization Trophies: Visit any safehouse workbench and install a stock, muzzle device, optic, and grip onto a single rifle platform (like the <strong>MK-47</strong>) to pop the 'Gunsmith Specialist' achievement.",
      "03 \u00b7 Reach Trader Reputation Milestones: Complete repeatable contracts for <strong>Anatoly</strong>, <strong>Nadja</strong>, and <strong>Volodymyr</strong> to earn +500 Rep, unlocking 'Syndicate Partner' and 'Black Market Magnate' upon reaching <strong>Tier 3 reputation</strong>.",
      "04 \u00b7 Conquer Subterranean Military Bunkers: Locate a <strong>Red Keycard</strong>, breach the blast bulkhead at <strong>Sector B-4</strong>, and loot three military weapon containers in a single raid to earn the 'Deep Vault Diver' trophy.",
      "05 \u00b7 Execute the Iron Man Permadeath Challenge: Start a run on <strong>Iron Man Mode</strong>. Play defensively, rely on suppressed sidearms like the <strong>PM Nikolay PB</strong>, and survive 10 consecutive raids without dying to claim the ultra-rare 'True Survivor' badge.",
      "06 \u00b7 Uncover All Regional Outpost Landmarks: Travel across the 3x expanded overworld to discover all four primary regional settlements: <strong>Arcadia</strong>, <strong>Mechanist Base</strong>, <strong>Mudlark Camp</strong>, and <strong>Microrayion</strong> to pop the 'Cartographer of Zalesye' trophy."
],
    facts: [
      [
            "Total Achievements",
            "28 Steamworks Achievements (0 Missable Trophies)"
      ],
      [
            "Hardest Achievement",
            "True Survivor (Survive 10 raids in permadeath Iron Man Mode)"
      ],
      [
            "Estimated 100% Time",
            "30 to 45 hours across a thorough campaign playthrough"
      ],
      [
            "Mode Restrictions",
            "Story achievements unlock in Explorer Mode; Iron Man trophies require Iron Man Mode"
      ],
      [
            "Hidden Achievements",
            "4 Secret Story Achievements tied to the Mist anomaly reactor"
      ],
      [
            "Multiplayer Dependency",
            "0 multiplayer achievements; 100% solo offline attainable"
      ],
      [
            "Verified Baseline",
            "Official Steamworks Achievement Manifest & Community Guides \u00b7 September 2026"
      ]
],
    faq: [
      [
            "Can I unlock achievements in Explorer Mode?",
            "Yes! Except for specific Iron Man difficulty achievements, all story, combat, exploration, and crafting trophies unlock fully in Explorer Mode."
      ],
      [
            "Are any achievements missable in Scavland?",
            "No. The game world operates on an open-world sandbox loop. Even after finishing main story quests, contract rosters and bunker resets allow you to clean up remaining achievements."
      ],
      [
            "Do console launch commands (-dev / -console) disable Steam achievements?",
            "Launching with -dev or injecting third-party trainers temporarily disables Steam achievement triggers for that game session. Restart the game without flags to re-enable unlocks."
      ],
      [
            "How do I get the 'Cartographer of Zalesye' achievement?",
            "Visit all four primary regional outposts: Arcadia in the east, the Mechanist Base, Mudlark Camp in the south, and the Microrayion residential blocks."
      ],
      [
            "Does dying in Iron Man Mode erase achievement progress?",
            "If your character dies in Iron Man Mode, raid survival counters reset to zero, requiring a fresh run to claim the 'True Survivor' trophy."
      ]
],
    related: ["scavland-beginner-guide", "scavland-quests-and-contracts", "scavland-map-and-locations", "scavland-best-weapons-tier-list"]
  },
  {
    slug: 'scavland-ammo-types-and-damage',
    category: "\u0421\u043d\u0430\u0440\u044f\u0436\u0435\u043d\u0438\u0435",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Ammo & Calibers \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Ammo & Calibers",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Ammo & Calibers \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'In-Game Ballistics Manifest & Steam Community Testing · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Ammunition boxes, magazine loading, and caliber ballistics in Scavland",
    answer: "Understanding ammunition ballistics in Scavland is just as critical as choosing your firearm. The combat engine models two distinct damage parameters: <strong>Armor Penetration (AP)</strong> and <strong>Flesh Damage</strong>. Firing budget pistol ammunition like <strong>9x18mm</strong> or buckshot into heavy plate armor deflects with minimal damage, while high-velocity <strong>7.62x39mm</strong> or <strong>7.62x54mmR</strong> rounds slice through ballistic vests to drop armored scavengers in seconds. In <strong>Update 0.7.0</strong>, shotguns were balanced to apply a maximum of <strong>one bleed effect per shot</strong> rather than stacking per pellet, cementing buckshot as the premier tool for hunting mutated beasts like <strong>Hellhounds</strong> and <strong>Tongue Monsters</strong>.",
    steps: [
      "01 \u00b7 9x18mm Makarov (Early-Game Budget Caliber): Plentiful and inexpensive. Excellent for killing baseline roaches, rats, and unarmored scavengers using sidearms like the <strong>PM Nikolay PB</strong> or <strong>Bahadir 918</strong>. Ineffective against armored military vests.",
      "02 \u00b7 9x19mm Parabellum (Balanced Sidearm & SMG Round): Fires with flatter trajectories and higher velocity. Deals reliable flesh damage with light armor penetration when loaded into submachine guns like the <strong>Borealis 9mm</strong>.",
      "03 \u00b7 5.45x39mm Soviet (Standard Assault Rifle Caliber): The workhorse military round for the <strong>Mikhail 74U</strong>. Offers high muzzle velocity, minimal recoil, and reliable penetration against Tier 1 and Tier 2 body armor.",
      "04 \u00b7 7.62x39mm Intermediate (High Armor Penetration): Chambered in heavy platforms like the <strong>MK-47</strong>. Delivers crushing kinetic energy that shatters Tier 3 bandit plate carriers in 2-3 direct chest impacts.",
      "05 \u00b7 7.62x54mmR Full-Power Rifle (Sniper & DMR BIS): The premier long-range sniper cartridge used by the <strong>63 Dragoon</strong>. Guarantees one-shot vital eliminations against virtually all human targets at extreme engagement distances.",
      "06 \u00b7 12-Gauge Shotgun (Buckshot vs Slugs): 12-gauge Buckshot deals massive spread damage that staggers charging mutants instantly. When facing armored sentries, load specialized 12-gauge Slugs to punch directly through armor plates."
],
    facts: [
      [
            "Top Armor-Piercing Caliber",
            "7.62x54mmR (Defeats all known body armor tiers)"
      ],
      [
            "Best All-Round Rifle Round",
            "7.62x39mm (Optimal balance of punch and availability)"
      ],
      [
            "Best Mutant Hunting Round",
            "12-Gauge Buckshot (High stagger; max 1 bleed per shot)"
      ],
      [
            "Stealth Infiltration Caliber",
            "9x18mm Subsonic when paired with suppressed PM Nikolay PB"
      ],
      [
            "Shotgun Bleed Cap",
            "Capped at 1 bleed effect per shot since Update 0.7.0"
      ],
      [
            "Ammunition Unloading",
            "Right-click magazines in inventory to unload loose rounds for repackaging"
      ],
      [
            "Verified Baseline",
            "In-Game Ballistics Manifest & Steam Community Testing \u00b7 Update 0.7.2"
      ]
],
    faq: [
      [
            "Which ammo type is best against armored human bandits?",
            "7.62x39mm and 7.62x54mmR are the best armor-piercing calibers. They punch through Tier 2 and Tier 3 body armor vests without suffering severe damage reduction."
      ],
      [
            "Why are shotgun pellets doing less bleed damage now?",
            "In Update 0.7.0, developers capped shotguns to apply a maximum of one bleed effect per trigger pull, preventing instant bleed-out deaths from single buckshot blasts."
      ],
      [
            "Can I craft ammunition at safehouse workbenches?",
            "Yes! Workbench recipes require Gunpowder, Scrap Metal, and Clean Water to craft standard 9x18mm, 5.45x39mm, and 12-gauge shells."
      ],
      [
            "How do I unload ammunition from weapons I scavenge?",
            "In your inventory grid, right-click the firearm and select 'Unload Ammo' or drag the magazine off the weapon to strip loose cartridges into your stash."
      ],
      [
            "Where can I barter for cheap 7.62x39mm rifle rounds?",
            "Trader Volodymyr at the Crossroads annex and Mechanist quartermasters sell military ammunition boxes in exchange for electronic scrap and rubles."
      ]
],
    related: ["scavland-weapons-and-attachments", "scavland-best-weapons-tier-list", "scavland-starter-loadouts-and-budget-builds", "scavland-tactical-database-weapons-loot"]
  },
  {
    slug: 'scavland-armor-and-helmets-guide',
    category: "\u0421\u043d\u0430\u0440\u044f\u0436\u0435\u043d\u0438\u0435",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Armor & Helmets \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Armor & Helmets",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Armor & Helmets \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'Official Steam Armor Rebalance Notes · Update 0.6.0 & 0.7.0',
    updated: '2026-09-30',
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Tactical body armor vests, ballistic helmets, and armor plates in Scavland",
    answer: "Wearing appropriate ballistic protection in Scavland marks the difference between surviving an ambush and losing your entire carried backpack. In <strong>Update 0.6.0</strong>, developer NoShadow completely rebalanced armor durability pools across all four protection classes: <strong>Tattered (4\u21923)</strong>, <strong>Scavenger (5\u21924)</strong>, <strong>Medium (6\u21925)</strong>, and <strong>Heavy (7\u21926)</strong>. While heavier ballistic vests absorb lethal high-caliber rounds from sniper rifles, they impose noticeable movement speed and stamina recovery penalties. Pairing a reinforced vest with a steel or composite helmet prevents fatal headshot trauma when clearing fortified bandit checkpoints across <strong>Zalesye</strong>.",
    steps: [
      "01 \u00b7 Tier 1 (Tattered & Improvised Vests): Crafted from cloth scraps and light leather. Provides baseline protection against mutant bites and low-velocity 9x18mm shrapnel, but shatters quickly after 2-3 impacts.",
      "02 \u00b7 Tier 2 (Scavenger Tactical Rig): The standard budget loadout for roaming raids. Balances light ballistic protection with zero movement speed penalties, ideal for foraging expeditions where quick sprint evasion is paramount.",
      "03 \u00b7 Tier 3 (Medium Ballistic Vest): Utilizes hardened steel inserts. Absorbs intermediate 5.45x39mm rifle fire and shotgun pellets effectively, making it the recommended baseline for raiding outposts like <strong>Arcadia</strong>.",
      "04 \u00b7 Tier 4 (Heavy Tactical Plate Carrier): Military-grade heavy armor. Drastically mitigates high-caliber kinetic damage, but reduces character run speed by <strong>15%</strong>. Essential for surviving point-blank bunker firefights in <strong>Sector B-4</strong>.",
      "05 \u00b7 Ballistic Helmets & Headshot Prevention: Headshots in Scavland multiply incoming projectile damage by up to <strong>2.5x</strong>. Always equip a steel helmet to avoid instantaneous death from concealed enemy marksmen.",
      "06 \u00b7 Field Maintenance with Universal Armor Kits: In <strong>Update 0.7.0</strong>, Gun and Armor Repair Kits were updated to restore equipment regardless of how damaged it is. Always patch worn armor before condition drops below 50%."
],
    facts: [
      [
            "Armor Durability Tiers",
            "Tattered: 3 pts, Scavenger: 4 pts, Medium: 5 pts, Heavy: 6 pts (Update 0.6.0)"
      ],
      [
            "Headshot Damage Multiplier",
            "2.5x critical damage without a ballistic helmet"
      ],
      [
            "Heavy Armor Run Penalty",
            "-15% movement speed penalty while wearing Heavy Plate Carriers"
      ],
      [
            "Universal Repair Kits",
            "Armor Repair Kits restore armor condition regardless of wear level (Update 0.7.0)"
      ],
      [
            "Top Protection Class",
            "Heavy Military Plate Carrier paired with Steel SSh-68 Helmet"
      ],
      [
            "Sewing Kit Crafting",
            "Requires Pliers rather than glue since Update 0.6.0 to craft vests"
      ],
      [
            "Verified Baseline",
            "Official Steam Armor Rebalance Notes \u00b7 Update 0.6.0 & 0.7.0"
      ]
],
    faq: [
      [
            "How did armor durability change in Update 0.6.0?",
            "Update 0.6.0 adjusted durability pools downward across all categories (Tattered 4->3, Scavenger 5->4, Medium 6->5, Heavy 7->6) while increasing baseline damage absorption per point."
      ],
      [
            "Can armor stop sniper headshots in Scavland?",
            "A pristine steel helmet will prevent instant fatal headshots from intermediate rifles, leaving your operative with a severe concussion and blurred vision instead of immediate death."
      ],
      [
            "Does heavy armor slow down my character?",
            "Yes. Heavy plate carriers impose a 15% movement penalty and slightly increase stamina consumption during sprints and combat rolls."
      ],
      [
            "How do I repair broken body armor?",
            "Use an Armor Repair Kit at your safehouse workbench or in the field. Since Update 0.7.0, repair kits can restore armor even if condition has dropped to zero."
      ],
      [
            "Where can I barter for high-tier body armor vests?",
            "Mechanist armorers and Gunner syndicate merchants sell Tier 3 and Tier 4 plate carriers once you unlock Tier 2 and Tier 3 reputation ranks."
      ]
],
    related: ["scavland-starter-loadouts-and-budget-builds", "scavland-weapons-and-attachments", "scavland-patch-0-6-0-update-and-changes", "scavland-death-and-loot-recovery"]
  },
  {
    slug: 'scavland-mutants-and-enemies-guide',
    category: "\u0422\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Mutants & Enemies \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Mutants & Enemies",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Mutants & Enemies \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'In-Game Bestiary Field Testing & Community Combat Manuals · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_03_forest_mutants.jpg',
    imageAlt: "Mutant creatures, mutated wildlife, and bandit patrols in Scavland wasteland",
    answer: "The exclusion zone of <strong>Zalesye</strong> is inhabited by aggressive mutant wildlife, bio-engineered abominations, and heavily armed deserter factions. Hostile encounters fall into two categories: biological predators that rely on aggressive lunges and flesh grapples, and tactical human scavengers who utilize cover, flank maneuvers, and long-range optics. Overcoming apex threats\u2014such as the dreaded <strong>Tongue Monsters (Lickers)</strong> in subterranean bunkers, feral <strong>Hellhound packs</strong> along forest perimeters, and <strong>Big Bears</strong> with massive bullet sponges\u2014demands matching specific ammunition calibers, utilizing sound cones, and keeping stamina reserves ready for evasive rolls.",
    steps: [
      "01 \u00b7 Tongue Monsters (Lickers) \u2014 Bunker Apex Predators: Found lurking inside underground facilities like <strong>Sector B-4</strong>. They launch high-velocity flesh tongues that grapple and pull survivors. Maintain distance, listen for wet clicking audio cues, and fire high-stagger 12-gauge shotgun blasts directly into their mouth.",
      "02 \u00b7 Hellhounds (Feral Canines) \u2014 Swift Pack Stalkers: Roam in packs of 2 to 4 along forest edges. They possess rapid sprint speeds and attempt to circle your flanks. Use high-capacity SMGs or sidearms (like the <strong>Bahadir 918</strong>) to drop them during straight-line charges.",
      "03 \u00b7 Big Bears \u2014 Colossal Wasteland Tanks: Possess massive health pools capable of absorbing entire assault rifle magazines. Target their head with high-penetration <strong>7.62x39mm</strong> or <strong>7.62x54mmR</strong> rounds from behind solid obstacles; avoid open-field firefights.",
      "04 \u00b7 Splatters \u2014 Acidic Bio-Anomalies: Pulsing biological clumps that erupt into toxic puddles upon death. Eliminate them exclusively from long range with rifles to prevent lethal chemical splash damage that dissolves armor durability.",
      "05 \u00b7 Armored Bandit Sentries \u2014 Human Marksmen: Wear ballistic vests and deploy tactical shotguns or rifles. Aim for the legs if they wear heavy chest armor, or use armor-piercing 7.62mm rounds to penetrate plate carriers before they alert nearby garrisons.",
      "06 \u00b7 Nocturnal Stalkers \u2014 The 21:00 Threat: Spawning exclusively between <strong>21:00 and 05:30</strong>, night mutants possess heightened hearing and track flashlight beams from 40m away. Travel with weapon lights toggled off and use optical <strong>Binoculars</strong> for quiet recon."
],
    facts: [
      [
            "Deadliest Mutant",
            "Tongue Monsters (Lickers) \u2014 Grapple attacks pull players into melee"
      ],
      [
            "Deadliest Wildlife",
            "Big Bears \u2014 Massive health pool; requires armor-piercing 7.62mm calibers"
      ],
      [
            "Night Spawns Window",
            "Nocturnal mutants roam exclusively between 21:00 and 05:30"
      ],
      [
            "Acid Hazard",
            "Splatters explode into chemical pools on death; kill from 15m+ distance"
      ],
      [
            "Human Faction AI",
            "Bandits use cover, callouts, and flank maneuvers; reticle turns red on lock"
      ],
      [
            "Trophy Payout",
            "Bogdan pays a +40% bounty premium for mutant glands and teeth"
      ],
      [
            "Verified Baseline",
            "In-Game Bestiary Field Testing & Community Combat Manuals \u00b7 Update 0.7.2"
      ]
],
    faq: [
      [
            "How do I break free from a Tongue Monster grapple?",
            "Spam the dodge roll button [Space / Right Stick] while firing point-blank shotgun shells to stagger the creature and sever the flesh tongue."
      ],
      [
            "What caliber is recommended for hunting Big Bears?",
            "Use heavy 7.62x39mm (MK-47) or 7.62x54mmR (63 Dragoon). Standard 9mm pistol rounds deal negligible damage against bear hide."
      ],
      [
            "Why do bandits keep spotting me at night from far away?",
            "Flashlights and weapon torches project visible cones that AI marksmen detect up to 40 meters away. Turn off flashlights and use binoculars or night vision to scout."
      ],
      [
            "Do mutants fight against bandit patrols?",
            "Yes! Scavland features dynamic faction infighting. If pursued by Hellhounds, running toward a bandit checkpoint often causes enemies to engage each other, allowing you to escape."
      ],
      [
            "Where can I turn in mutant teeth and pelts for rubles?",
            "Trader Bogdan at the forest perimeter outpost specializes in biological bounties, paying 40% more for mutant parts than any other merchant."
      ]
],
    related: ["scavland-best-weapons-tier-list", "scavland-ammo-types-and-damage", "scavland-night-survival-and-stealth-mechanics", "scavland-hospital-quest-and-medical-supplies"],
    videoId: 'xQKTC-8BYVU',
    videoTitle: "Scavland 0.7.2 \"Expert\" Firearm Damage Test (Target: Bear)",
    videoChannel: "Game Detox Dopamine"
  },
  {
    slug: 'scavland-health-hunger-thirst-system',
    category: "\u0412\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u0435",
    title: "\u0413\u0430\u0439\u0434 \u043f\u043e Scavland: Metabolism & Health \u2014 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b",
    shortTitle: "Metabolism & Health",
    description: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e Metabolism & Health \u0432 Scavland: \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438, \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432 \u0417\u0430\u043b\u0435\u0441\u044c\u0435 \u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438.",
    evidence: 'In-Game Physiological System Testing & Steam Patch Notes · Update 0.7.0',
    updated: '2026-09-30',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: "Health status bars, hydration meters, and medical triage in Scavland",
    answer: "Survival in Scavland demands vigilant management of your operative's physiological state across five interconnected vital meters: <strong>Health (HP)</strong>, <strong>Stamina</strong>, <strong>Hydration (Thirst)</strong>, <strong>Energy (Hunger)</strong>, and <strong>Radiation Dosage (mSv)</strong>. Neglecting hydration locks stamina regeneration at <strong>0%</strong> while sleeping, leaving you paralyzed upon waking. Untreated arterial bleeding drains health at an alarming rate of up to <strong>5 HP/sec</strong>, completely negating standard medkit healing. Surviving prolonged wasteland incursions requires carrying <strong>Sterile Bandages</strong>, boiling clean water at campfires, and administering <strong>Charcoal Tablets</strong> before venturing into radioactive anomaly fields.",
    steps: [
      "01 \u00b7 Prevent Dehydration Stamina Lockout: If your Hydration gauge reaches zero, sleeping in a safehouse bed will not restore character stamina. Always drink <strong>Boiled Water</strong> or clean soda to bring hydration above 50% before resting.",
      "02 \u00b7 Prioritize Immediate Hemorrhage Control: Bleeding effects deal continuous damage and prevent health medkits from applying regeneration. Bind <strong>Sterile Bandages</strong> or <strong>Military Hemostatic Gauze</strong> to quick slot [5] to stop bleeding within 2 seconds.",
      "03 \u00b7 Treat Fractures with Wooden Splints: Falls from high watchtowers or shotgun impacts cause bone fractures, penalizing run speed by <strong>40%</strong> and weapon sway by <strong>60%</strong>. Craft a <strong>Wooden Splint</strong> from wood scraps and clean cloth to immediately clear the fracture debuff.",
      "04 \u00b7 Manage Radiation Dosage & Gas Mask Filters: Entering dense yellow radiation zones without protection causes progressive toxic poisoning. Equip a gas mask with at least <strong>80% filter durability</strong> and pop <strong>Charcoal Tablets</strong> early to purge rads.",
      "05 \u00b7 Exploit Doubled Campfire Healing Buff: Under <strong>Update 0.7.0</strong>, resting beside a lit campfire grants doubled passive health regeneration, provided your hunger and thirst meters remain above the green threshold.",
      "06 \u00b7 Reserve Rad-Away Injectors for Red Mist Incursions: Rare military <strong>Rad-Away</strong> auto-injectors immediately wipe out 150 mSv of severe radiation. Reserve these valuable consumables exclusively for deep expeditions into the toxic <strong>Mist</strong>."
],
    facts: [
      [
            "Arterial Bleed Drain Rate",
            "Drains up to 5 HP/sec until treated with bandages or gauze"
      ],
      [
            "Fracture Penalty",
            "-40% movement speed and +60% weapon sway until splinted"
      ],
      [
            "Dehydration Sleeping Lock",
            "Stamina regeneration locks at 0% if sleeping while dehydrated"
      ],
      [
            "Campfire Healing Bonus",
            "Doubles passive health regeneration rate (Update 0.7.0)"
      ],
      [
            "Radiation Threshold",
            "Yellow zone triggers toxic damage; purge with Charcoal Tablets"
      ],
      [
            "Rad-Away Potency",
            "Immediately removes 150 mSv of accumulated radiation dosage"
      ],
      [
            "Verified Baseline",
            "In-Game Physiological System Testing & Steam Patch Notes \u00b7 Update 0.7.0"
      ]
],
    faq: [
      [
            "Why is my stamina not regenerating after sleeping in Scavland?",
            "You are suffering from severe dehydration. When your thirst meter hits zero, sleeping will not restore stamina. Drink Boiled Water or energy drinks before resting."
      ],
      [
            "How do I stop severe bleeding in combat?",
            "Use a Sterile Bandage or Hemostatic Gauze from your hotbar. Regular medkits will not restore health until all active bleeding effects are closed."
      ],
      [
            "How do I fix a broken leg or arm in the field?",
            "Apply a Wooden Splint. Splints can be crafted at any workbench from 2x Scrap Wood and 1x Clean Cloth or bought from Physician Anna at the Zalesye clinic."
      ],
      [
            "Where can I find clean water in Scavland?",
            "Find empty tin cans and water bottles, then stand next to any lit campfire to boil contaminated water into safe Boiled Water."
      ],
      [
            "What is the difference between Charcoal Tablets and Rad-Away?",
            "Charcoal Tablets slowly purge minor radiation in yellow zones and cost very few rubles. Rad-Away auto-injectors provide instantaneous heavy decontamination (150 mSv) in red anomaly zones."
      ]
],
    related: ["scavland-consumables-and-medical-supplies", "scavland-hospital-quest-and-medical-supplies", "scavland-mist-survival-and-radiation", "scavland-sleep-and-world-reset-guide"]
  }
];

const enGuideMap = Object.fromEntries(enGuides.map((g) => [g.slug, g]));

export const allRuGuides: Guide[] = ruGuides.map((ru) => ({
  ...ru,
  image: enGuideMap[ru.slug]?.image || '/images/hero/header.webp',
}));

export const ruGuideBySlug = Object.fromEntries(allRuGuides.map((g) => [g.slug, g]));
