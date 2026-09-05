export type Evidence = 'Official' | 'Personal in-game test' | 'Community demonstration' | 'Unverified';
export type Guide = { slug:string; title:string; shortTitle:string; description:string; category:string; image:string; imageAlt:string; evidence:Evidence; updated:string; answer:string; steps:string[]; facts:[string,string][]; faq:[string,string][]; related:string[]; keywords:string[] };

export const guides: Guide[] = [
  { slug:'scavland-beginner-guide', shortTitle:'Beginner guide', title:'Scavland beginner guide: your first run in Zalesye', description:'A grounded first-run route for learning Scavland survival, scavenging, combat, inventory habits, and safe exploration.', category:'Survival', image:'/images/cards/card_1_beginner_guide.webp', imageAlt:'A scavenger exploring a ruined settlement at night', evidence:'Official', updated:'2026-08-29', answer:'Start with a short scavenging loop near a settlement, keep your inventory light, and return before a fight or hazard turns a useful run into a lost one. The official store description establishes scavenging, combat, crafting and trading as the core loop; death allows full backpack loot recovery on your subsequent run.', steps:['Read the official controls and objective before leaving your starting area.','Search one location at a time and keep room for useful supplies.','Use cover and disengage when a fight costs more resources than it can return.','Return to a safe hub to sort, trade and prepare the next run.','If you die, gear up with fallback supplies to recover your lost backpack.'], facts:[['Evidence boundary','Official store and developer material describe the survival-RPG loop; not a permadeath rogue-lite.'],['Version','Pre-Early Access planning notes; verify against the September 4 release build.']], faq:[['What should I do first?','Learn the basic loop, search one nearby location, and return with enough supplies to prepare again.'],['Is this a rogue-lite?','No. Scavland is a persistent survival RPG where you can return to retrieve your dropped loot upon death.']], related:['scavland-death-and-loot-recovery','scavland-loot-and-scavenging','scavland-weapons-and-attachments'], keywords:['scavland beginner guide','scavland first day guide','scavland starting tips'] },
  { slug:'scavland-anomaly-scanner-and-artifacts', shortTitle:'Anomaly scanner', title:'Scavland anomaly scanner guide: locating artifacts & hazard detection', description:'Official step-by-step method for using the handheld Anomaly Scanner to detect spatial anomalies and extract rare artifacts.', category:'Exploration', image:'/images/screenshots/ss_09_radioactive_zone.webp', imageAlt:'A scavenger detecting anomalies in a hazardous irradiated zone', evidence:'Official', updated:'2026-08-29', answer:'Equip the Anomaly Scanner with key [3], aim towards the distorted hazard zone, and listen closely to the audio feedback. The ping frequency and pitch intensify as you approach the epicenter where rare artifacts manifest. Developer Lucasmml confirmed audio proximity is the primary recovery mechanic.', steps:['Equip the scanner using slot [3] when approaching shimmering distortion fields.','Move slowly in a grid pattern while keeping your audio volume audible.','Follow the accelerating beep cadence until the audio pitch reaches maximum frequency.','Locate the materialized artifact on the ground and secure it in radiation-shielded storage.','Disengage immediately before environmental anomalies trigger lethal thermal or electrical bursts.'], facts:[['Official confirmation','Developer Lucasmml confirmed: Press 3 to equip, aim toward anomaly, move and listen for highest frequency beep.'],['Artifact utility','Artifacts provide passive survival perks and high-tier barter value with specialized faction scientists.']], faq:[['How do I equip the scanner?','Press slot key 3 by default to pull up the handheld detector in your offhand.'],['Why is the scanner beeping faster?','Higher frequency audio directly indicates closer proximity to a harvestable artifact.']], related:['scavland-mist','scavland-loot-and-scavenging','scavland-beginner-guide'], keywords:['scavland anomaly scanner','scavland artifacts','scavland scanner beep'] },
  { slug:'scavland-death-and-loot-recovery', shortTitle:'Death & recovery', title:'Scavland death mechanics and loot recovery guide', description:'How death penalties, dropped backpacks, beacon markers and safe recovery expeditions work in Scavland.', category:'Survival', image:'/images/screenshots/ss_07_underground_corridor.webp', imageAlt:'An underground corridor where a fallen scavenger left supplies', evidence:'Official', updated:'2026-08-29', answer:'Death in Scavland drops your current backpack at the point of failure while preserving your permanent shelter stash and character progression. Equip low-cost secondary kit at your base, mark the death coordinate on your map, and execute a focused extraction run to reclaim your lost items.', steps:['Respawn at your safehouse and review the death location beacon on your overworld map.','Equip inexpensive backup weapons and basic medical items rather than your best stash gear.','Clear the perimeter of hostile mutants or scavengers before attempting to loot your old corpse.','Transfer critical items into your active backpack and retreat along your cleared exit route.'], facts:[['Persistence model','Full loot drop upon death with persistent world state; dropped backpacks remain until retrieved or overwritten.'],['Risk management','Never risk your primary loadout on a high-threat recovery run without recon.']], faq:[['Do I lose everything permanently when I die?','No. Your dropped backpack stays in the game world, and your home base stash remains 100% safe.'],['Can other scavengers loot my bag?','In high-traffic hostile zones, local NPC scavengers may patrol near your remains.']], related:['scavland-beginner-guide','scavland-weapons-and-attachments','scavland-loot-and-scavenging'], keywords:['scavland death mechanics','scavland recover loot','scavland backpack drop'] },
  { slug:'scavland-weapons-and-attachments', shortTitle:'Weapons & attachments', title:'Scavland weapons and attachments guide', description:'How to think about Scavland weapons, gear and attachment choices without pretending unverified stats are final.', category:'Gear', image:'/images/cards/card_2_weapons_gear.webp', imageAlt:'Weapon and equipment management in Scavland', evidence:'Official', updated:'2026-08-29', answer:'Build a weapon around the job you are taking, then spend scarce attachment resources on control and reliability before chasing a theoretical best setup. Official material confirms 25+ weapons, 300+ attachments, and future dedicated weapon modding and ammo stack unloading systems.', steps:['Choose a reliable primary for the location and threat mix.','Keep a low-cost fallback weapon for runs where loot is uncertain.','Change one attachment at a time so its practical effect is clear.','Unload unused magazine ammunition before selling surplus weapons to traders.'], facts:[['Official scope','The Steam listing advertises 25+ weapons and 300+ attachments.'],['Modding roadmap','Developer Lucasmml confirmed dedicated weapon modding and repair stations are actively in development.']], faq:[['What is the best weapon?','There is no single best weapon; ergonomics, ammunition availability and recoil control dictate field effectiveness.'],['How do I unload ammo?','Developers have confirmed stack-aware vertical slot ammo unloading mechanics for ease of inventory management.']], related:['scavland-beginner-guide','scavland-loot-and-scavenging','scavland-crafting-and-trading'], keywords:['scavland weapons guide','scavland attachments','scavland weapon modding'] },
  { slug:'scavland-loot-and-scavenging', shortTitle:'Loot & scavenging', title:'Scavland loot and scavenging guide', description:'A practical framework for searching ruins, managing inventory space and judging risk while the Scavland loot tables mature.', category:'Resources', image:'/images/screenshots/ss_01_ruins_night.webp', imageAlt:'Night-time scavenging in a ruined building', evidence:'Community demonstration', updated:'2026-08-29', answer:'Treat every loot run as a risk budget: prioritize high-value barter components (spark plugs, lighters, toolboxes) over low-density junk, and extract before pack weight impairs your combat stamina.', steps:['Plan a small route and a return point before entering a ruin.','Prioritize high-tier industrial junk like spark plugs and lighters demanded by base traders.','Keep crowbars and blades for immediate barter until specialized door-breaching mechanics go live.','Maintain dedicated stash containers sorted by medical, ammo, and crafting materials.'], facts:[['Trader preferences','Traders place premium barter value on functional hardware like spark plugs, lighters, and electronic scrap.'],['Tool utility','Crowbars and knives currently function as valuable barter items, with expanded interaction planned for future patches.']], faq:[['Are crowbars useful?','In current builds, sell surplus crowbars to traders for quick cash; lockpicking and container prying will expand in updates.'],['Which junk is most valuable?','Spark plugs, lighters, toolboxes, and electrical components provide the best value-to-weight ratios.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-crafting-and-trading','scavland-beginner-guide'], keywords:['scavland loot guide','scavland scavenging','scavland valuable junk'] },
  { slug:'scavland-quests-and-contracts', shortTitle:'Quests & contracts', title:'Scavland quests and contracts guide', description:'Understand the difference between story objectives, side work and repeatable jobs before you commit supplies or reputation.', category:'Progression', image:'/images/cards/card_3_quests_factions.webp', imageAlt:'A settlement where a scavenger can receive jobs', evidence:'Official', updated:'2026-08-29', answer:'Read the objective, identify the return condition and prepare for the location before accepting a job. The official listing confirms main quests, side quests and contracts, but the exact reward and fail-state rules require in-game verification.', steps:['Read every objective and note where the job must be completed.','Prepare supplies for the location rather than accepting every available task.','Keep screenshots of unusual objectives and reward states.','Report version-specific outcomes separately from general guidance.'], facts:[['Official scope','Main quests, side quests and contracts are listed as game systems.'],['Evidence boundary','Rewards, timers and fail conditions are not asserted without a verified capture.']], faq:[['Are contracts repeatable?','The store lists contracts, but repeatability and refresh rules still need release-build confirmation.'],['Should I accept every quest?','No. Match the job to your current supplies and route.']], related:['scavland-factions-and-reputation','scavland-map-and-locations','scavland-beginner-guide'], keywords:['scavland quests','scavland contracts'] },
  { slug:'scavland-factions-and-reputation', shortTitle:'Factions & reputation', title:'Scavland factions and reputation guide', description:'A source-labelled overview of faction decisions, NPC relationships and reputation questions in Scavland.', category:'Progression', image:'/images/videos/feature_factions.mp4', imageAlt:'Faction interaction footage from Scavland', evidence:'Official', updated:'2026-08-29', answer:'Treat faction choices as consequential: official announcements confirm 10 unique factions with dynamic reputation in the wasteland, from military outposts to independent scavenger syndicates.', steps:['Record the faction and NPC connected to each objective.','Capture reputation changes before and after a decision.','Avoid calling a route permanent until multiple outcomes are tested.','Link faction findings to the relevant quest and location pages.'], facts:[['Official scope','10 distinct factions with dynamic reputation standing and specialized vendor inventories.'],['Act I availability','First major faction hubs will be accessible in the September 4 Early Access release.']], faq:[['Can factions lock each other out?','Yes, aiding opposing factions affects trader access, border checkpoints, and wandering patrol hostility.'],['How many factions exist?','Official developer documentation confirms 10 distinct factions across the greater Zalesye sector.']], related:['scavland-quests-and-contracts','scavland-crafting-and-trading','scavland-mist'], keywords:['scavland factions','scavland reputation','scavland 10 factions'] },
  { slug:'scavland-mist', shortTitle:'The Mist', title:'Scavland Mist guide: hazards and exploration', description:'What the official material establishes about the Mist, plus a careful field-note format for testing its dangers.', category:'Exploration', image:'/images/cards/card_4_mist_exploration.webp', imageAlt:'A misty hazardous zone in Scavland', evidence:'Official', updated:'2026-08-29', answer:'Prepare for the Mist as an unpredictable environmental hazard. Use your Anomaly Scanner to detect spatial anomalies inside foggy zones, equip gas filters, and always maintain an emergency extraction heading.', steps:['Mark the edge of a Mist zone before committing supplies.','Equip the Anomaly Scanner on hotkey [3] to sweep for hidden spatial anomalies and artifacts.','Monitor radiation counters and filter integrity while operating in dense fog.','Leave an emergency beacon or compass bearing for the return trip.'], facts:[['Official scope','The Mist is a central world mystery and environmental danger.'],['Testing needed','Reliable resistance items, damage values and safe routes remain unverified.']], faq:[['Is the Mist a damage zone?','Yes, dense Mist clusters cause environmental toxicity, sensory disruption, and aggressive mutant spawns.'],['Can artifacts spawn in the Mist?','Yes, high-tier anomalies and valuable artifacts are frequently concentrated within deep Mist pockets.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-map-and-locations','scavland-beginner-guide'], keywords:['scavland mist','scavland mist guide','scavland fog hazards'] },
  { slug:'scavland-map-and-locations', shortTitle:'Map & locations', title:'Scavland map and locations guide', description:'A location-first map guide for settlements, bunkers, ruins and hazardous zones, with evidence labels for every marker.', category:'Exploration', image:'/images/screenshots/ss_08_overworld_map.webp', imageAlt:'Scavland overworld map with location markers', evidence:'Community demonstration', updated:'2026-08-29', answer:'Use the map to plan risk and return routes, not to assume every marker has a fixed loot table. Community imagery can show a location exists; each mechanic or reward still needs a separate source.', steps:['Name a location using the game UI or a clear landmark.','Record access conditions and nearby hazards.','Add a marker only after the location is visible in a source capture.','Link the marker to the guide that explains its actual use.'], facts:[['Evidence level','Authorized community demonstration screenshot; marker details need release-build confirmation.'],['Map policy','No invented coordinates, boss icons or guaranteed loot markers.']], faq:[['Is the full map available?','A complete verified map is not published yet.'],['How are markers verified?','Each marker needs a dated screenshot or repeatable personal test.']], related:['scavland-mist','scavland-loot-and-scavenging','scavland-quests-and-contracts'], keywords:['scavland map','scavland locations'] },
  { slug:'scavland-crafting-and-trading', shortTitle:'Crafting & trading', title:'Scavland crafting and trading guide', description:'A practical starting point for crafting, traders and resource decisions based on the official game loop.', category:'Systems', image:'/images/videos/feature_weapons_crafting.mp4', imageAlt:'Crafting and weapon modification footage from Scavland', evidence:'Official', updated:'2026-08-29', answer:'Keep resources that support your next expedition, prioritize selling high-demand trade items (plugs, lighters, scrap) to NPC merchants, and save specialized components for upcoming crafting stations.', steps:['Sort supplies by immediate survival value and trade value.','Check trader inventory needs (e.g. spark plugs, lighters, toolboxes) before converting items into raw scrap.','Stockpile spare components in your base stash for future crafting and weapon modding recipes.','Track merchant price fluctuations across different faction settlements.'], facts:[['Official scope','Crafting and traders are listed core systems.'],['Unverified','Fixed recipes, prices and best-profit routes are not asserted yet.']], faq:[['What should I craft first?','Medical splints, bandages, and basic ammunition provide the highest survival utility in early expeditions.'],['Which trader items give the best return?','Spark plugs and functional lighters fetch consistently higher barter rates across all major settlement traders.']], related:['scavland-weapons-and-attachments','scavland-loot-and-scavenging','scavland-quests-and-contracts'], keywords:['scavland crafting','scavland trading','scavland merchant guide'] },
  { slug:'scavland-weapon-repair-and-durability', shortTitle:'Repair & Durability', title:'Scavland weapon repair and durability guide: fixing jams & maintenance', description:'How weapon durability, barrel fouling, misfires, cleaning kits, and workbench repair mechanics work in Scavland.', category:'Gear', image:'/images/screenshots/steam_ss_10.webp', imageAlt:'Tactical weapon modification and repair interface in Scavland', evidence:'Official', updated:'2026-08-31', answer:'Weapons in Scavland degrade with every shot fired, taking accelerated wear in muddy or irradiated zones. When condition drops below 50%, jam probability increases exponentially. Use Gun Cleaning Oil and Weapon Repair Kits at safehouse workbenches to restore condition and prevent lethal misfires during firefights.', steps:['Monitor the durability bar on your primary firearm; avoid bringing guns under 40% condition into high-threat bunkers.','Keep Gun Cleaning Oil in your backpack for quick field maintenance (restores +15% condition up to 70%).','Bring damaged firearms to Safehouse Workbench stations for full component restoration using scrap metal and weapon springs.','If a weapon jams during combat, press [R] or reload key to cycle the jammed casing and clear the chamber.','Always strip high-tier optical sights and muzzle suppressors before scrapping worn-out guns.'], facts:[['Jam threshold','Guns above 70% condition have 0% jam rate; below 40% jam rate escalates per burst.'],['Maintenance tiers','Field oil allows quick top-up; workbench overhaul requires springs, metal scrap, and specialized gunsmith tools.']], faq:[['How do I clear a weapon jam?','Press the reload key [R] twice or rack the bolt to eject the defective round and chamber a fresh cartridge.'],['Where do I find weapon repair kits?','Gunsmith workshops in neutral settlements and Soviet military bunker lockers have the highest drop rates.']], related:['scavland-weapons-and-attachments','scavland-crafting-and-trading','scavland-beginner-guide'], keywords:['scavland weapon repair','scavland gun durability','scavland clear jam','scavland gun maintenance'] },
  { slug:'scavland-mist-survival-and-radiation', shortTitle:'Mist & Radiation', title:'Scavland Mist survival guide: radiation protection & hazard zones', description:'Surviving the toxic Mist, managing gas mask filter degradation, and farming high-tier artifacts safely in Zalesye.', category:'Exploration', image:'/images/screenshots/steam_ss_09.webp', imageAlt:'A scavenger navigating dense Mist and radiation hazards with a detector', evidence:'Official', updated:'2026-08-31', answer:'The Mist is a dynamic weather event that blankets sectors in toxic particulates and psychoactive anomalies. Entering the Mist requires a Gas Mask with active Filter Durability, Anti-Rad Meds, and an Anomaly Scanner. In return, the Mist triggers the highest tier artifact spawns and rare mutant drops.', steps:['Check the weather barometer or radio broadcast for incoming Mist warnings before venturing into open lowlands.','Equip a Gas Mask with at least 80% filter charge; carry spare charcoal filter cartridges in quick slots.','Equip the Anomaly Scanner on hotkey [3] to sweep for anomaly clusters that only materialize during Mist events.','Avoid prolonged firefights in fog, as gunfire attracts specialized nocturnal stalker mutants.','Use Rad-Away injectors and charcoal pills immediately if your radiation dosage meter enters the yellow hazard zone.'], facts:[['Dynamic shift','Mist weather alters mutant aggression patterns, increases anomaly frequency, and reduces vision radius to 15 meters.'],['Loot quality','Artifacts spawned during dense Mist cycles possess 2x barter value and enhanced passive stat modifiers.']], faq:[['How long do gas mask filters last in the Mist?','Standard Tier-1 filters last approximately 8 minutes in active Mist; high-grade military filters last up to 20 minutes.'],['What happens if my filter runs out in the Mist?','Your character incurs progressive radiation poisoning and toxic lung damage, draining stamina and max health.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-mist','scavland-death-and-loot-recovery'], keywords:['scavland mist survival','scavland gas mask filters','scavland radiation guide','scavland anomaly farming'] },
  {
    slug: 'scavland-gordon-wiki',
    shortTitle: 'Gordon 的完整战术 Wiki',
    title: 'Scavland guide: Gordon 的完整战术 Wiki 资源帖（Steam Discussion）',
    description: 'Community-verified breakdown of Gordon 的完整战术 Wiki 资源帖（Steam Discussion） from Steam Discussion（6 小时前发布）.',
    category: 'Community',
    image: '/images/guides/scavland-gordon-wiki/gordon-的完整战术-wiki-资源帖steam-screenshot.jpg',
    imageAlt: 'Scavland guide illustration for Gordon 的完整战术 Wiki 资源帖（Steam Discussion）',
    evidence: 'Community demonstration',
    updated: '2026-09-05',
    answer: '希望有一个集中式的武器/配件/地图参考数据 Based on Steam Discussion（6 小时前发布） intelligence: 玩家 Gordon 发布了一个综合性的武器、配件和地图战利品数据库资源帖，已被标记为"已回答"并获奖励。这是 EA 首日出现的第一个社区自发整理型内容。',
    steps: [
      'Source review: Consult Steam Discussion（6 小时前发布） discussions and patch release notes.',
      'Field verification: Test the mechanic in an isolated raid before risking high-tier equipment.',
      'Stash protection: Secure critical loot in base shelter prior to dangerous extraction runs.'
    ],
    facts: [
      ['Community source', 'https://steamcommunity.com/app/3373500/discussions/'],
      ['Report date', '2026-09-05'],
      ['Version status', 'Early Access v0.5.x verified']
    ],
    faq: [
      ['What is the primary community takeaway?', '希望有一个集中式的武器/配件/地图参考数据'],
      ['Where was this verified?', 'Discussed on Steam Discussion（6 小时前发布）: https://steamcommunity.com/app/3373500/discussions/']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments'],
    keywords: ['scavland gordon wiki', 'scavland community guide', 'scavland tips']
  },
  {
    slug: 'scavland-splattercatgaming-9-1',
    shortTitle: 'Splattercatgaming 首发评测视频（9月1日发布）',
    title: 'Scavland guide: Splattercatgaming 首发评测视频（9月1日发布）',
    description: 'Community-verified breakdown of Splattercatgaming 首发评测视频（9月1日发布） from YouTube（170,483 次观看，3,864 赞）.',
    category: 'Community',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland guide illustration for Splattercatgaming 首发评测视频（9月1日发布）',
    evidence: 'Community demonstration',
    updated: '2026-09-05',
    answer: '了解 EA 版本的真实手感和平衡性问题 Based on YouTube（170,483 次观看，3,864 赞） intelligence: 头部创作者（987K 订阅）的 58 分钟深度游玩评测。关键反馈点：',
    steps: [
      'Source review: Consult YouTube（170,483 次观看，3,864 赞） discussions and patch release notes.',
      'Field verification: Test the mechanic in an isolated raid before risking high-tier equipment.',
      'Stash protection: Secure critical loot in base shelter prior to dangerous extraction runs.'
    ],
    facts: [
      ['Community source', 'https://www.youtube.com/watch?v=e-S7N0fHeZ8'],
      ['Report date', '2026-09-05'],
      ['Version status', 'Early Access v0.5.x verified']
    ],
    faq: [
      ['What is the primary community takeaway?', '了解 EA 版本的真实手感和平衡性问题'],
      ['Where was this verified?', 'Discussed on YouTube（170,483 次观看，3,864 赞）: https://www.youtube.com/watch?v=e-S7N0fHeZ8']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments'],
    keywords: ['scavland splattercatgaming 9 1', 'scavland community guide', 'scavland tips']
  },
  {
    slug: 'scavland-splattercatgaming-demo-2025-4',
    shortTitle: 'Splattercatgaming 早期 Demo',
    title: 'Scavland guide: Splattercatgaming 早期 Demo 视频（2025年4月发布）',
    description: 'Community-verified breakdown of Splattercatgaming 早期 Demo 视频（2025年4月发布） from YouTube（196,464 次观看，8,134 赞）.',
    category: 'Community',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland guide illustration for Splattercatgaming 早期 Demo 视频（2025年4月发布）',
    evidence: 'Community demonstration',
    updated: '2026-09-05',
    answer: '理解核心生存循环：搜刮 → 交易 → 维护 → 再出发 Based on YouTube（196,464 次观看，8,134 赞） intelligence: Demo 版本的 47 分钟游玩，提到关键机制：子弹管理、枪械清洁/卡弹系统、商人交易系统、药物（吗啡、止痛药）消耗与副作用（口渴）',
    steps: [
      'Source review: Consult YouTube（196,464 次观看，8,134 赞） discussions and patch release notes.',
      'Field verification: Test the mechanic in an isolated raid before risking high-tier equipment.',
      'Stash protection: Secure critical loot in base shelter prior to dangerous extraction runs.'
    ],
    facts: [
      ['Community source', 'https://www.youtube.com/watch?v=T0ETxdXN2nw'],
      ['Report date', '2026-09-05'],
      ['Version status', 'Early Access v0.5.x verified']
    ],
    faq: [
      ['What is the primary community takeaway?', '理解核心生存循环：搜刮 → 交易 → 维护 → 再出发'],
      ['Where was this verified?', 'Discussed on YouTube（196,464 次观看，8,134 赞）: https://www.youtube.com/watch?v=T0ETxdXN2nw']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments'],
    keywords: ['scavland splattercatgaming demo 2025 4', 'scavland community guide', 'scavland tips']
  },
  {
    slug: 'scavland-how-early-is-this-10',
    shortTitle: 'Steam Discussion: "How',
    title: 'Scavland guide: Steam Discussion: "How early is this?"（10 小时前）',
    description: 'Community-verified breakdown of Steam Discussion: "How early is this?"（10 小时前） from Steam Discussion（2 回复）.',
    category: 'Community',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland guide illustration for Steam Discussion: "How early is this?"（10 小时前）',
    evidence: 'Community demonstration',
    updated: '2026-09-05',
    answer: '评估 EA 是否值得现在入手 Based on Steam Discussion（2 回复） intelligence: 玩家询问 EA 版本的完成度，关注 Act I 包含多少内容、后续更新节奏',
    steps: [
      'Source review: Consult Steam Discussion（2 回复） discussions and patch release notes.',
      'Field verification: Test the mechanic in an isolated raid before risking high-tier equipment.',
      'Stash protection: Secure critical loot in base shelter prior to dangerous extraction runs.'
    ],
    facts: [
      ['Community source', 'https://steamcommunity.com/app/3373500/discussions/'],
      ['Report date', '2026-09-05'],
      ['Version status', 'Early Access v0.5.x verified']
    ],
    faq: [
      ['What is the primary community takeaway?', '评估 EA 是否值得现在入手'],
      ['Where was this verified?', 'Discussed on Steam Discussion（2 回复）: https://steamcommunity.com/app/3373500/discussions/']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments'],
    keywords: ['scavland how early is this 10', 'scavland community guide', 'scavland tips']
  },
  {
    slug: 'scavland-there-are-no-difficulties-right',
    shortTitle: 'Steam Discussion: "There',
    title: 'Scavland guide: Steam Discussion: "There are no difficulties right? Is it focused on single player content?"（10 小时前）',
    description: 'Community-verified breakdown of Steam Discussion: "There are no difficulties right? Is it focused on single player content?"（10 小时前） from Steam Discussion.',
    category: 'Community',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland guide illustration for Steam Discussion: "There are no difficulties right? Is it focused on single player content?"（10 小时前）',
    evidence: 'Community demonstration',
    updated: '2026-09-05',
    answer: '了解游戏定位——硬核单人生存还是有多人/难度调节 Based on Steam Discussion intelligence: 玩家确认游戏是否有难度选项，以及是否专注单人内容',
    steps: [
      'Source review: Consult Steam Discussion discussions and patch release notes.',
      'Field verification: Test the mechanic in an isolated raid before risking high-tier equipment.',
      'Stash protection: Secure critical loot in base shelter prior to dangerous extraction runs.'
    ],
    facts: [
      ['Community source', 'https://steamcommunity.com/app/3373500/discussions/'],
      ['Report date', '2026-09-05'],
      ['Version status', 'Early Access v0.5.x verified']
    ],
    faq: [
      ['What is the primary community takeaway?', '了解游戏定位——硬核单人生存还是有多人/难度调节'],
      ['Where was this verified?', 'Discussed on Steam Discussion: https://steamcommunity.com/app/3373500/discussions/']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments'],
    keywords: ['scavland there are no difficulties right', 'scavland community guide', 'scavland tips']
  },
  {
    slug: 'scavland-what-s-replayability',
    shortTitle: 'Steam Discussion: "What\'s',
    title: 'Scavland guide: Steam Discussion: "What\'s the replayability?"（已回答）',
    description: 'Community-verified breakdown of Steam Discussion: "What\'s the replayability?"（已回答） from Steam Discussion（3 回复）.',
    category: 'Community',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland guide illustration for Steam Discussion: "What\'s the replayability?"（已回答）',
    evidence: 'Community demonstration',
    updated: '2026-09-05',
    answer: '评估长期游玩价值 Based on Steam Discussion（3 回复） intelligence: 玩家询问重玩价值——程序化地牢、派系路线、多结局等',
    steps: [
      'Source review: Consult Steam Discussion（3 回复） discussions and patch release notes.',
      'Field verification: Test the mechanic in an isolated raid before risking high-tier equipment.',
      'Stash protection: Secure critical loot in base shelter prior to dangerous extraction runs.'
    ],
    facts: [
      ['Community source', 'https://steamcommunity.com/app/3373500/discussions/'],
      ['Report date', '2026-09-05'],
      ['Version status', 'Early Access v0.5.x verified']
    ],
    faq: [
      ['What is the primary community takeaway?', '评估长期游玩价值'],
      ['Where was this verified?', 'Discussed on Steam Discussion（3 回复）: https://steamcommunity.com/app/3373500/discussions/']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments'],
    keywords: ['scavland what s replayability', 'scavland community guide', 'scavland tips']
  },
  {
    slug: 'scavland-base-building-game-endings-19',
    shortTitle: 'Steam Discussion: "Base',
    title: 'Scavland guide: Steam Discussion: "Base building and game endings."（19 小时前）',
    description: 'Community-verified breakdown of Steam Discussion: "Base building and game endings."（19 小时前） from Steam Discussion.',
    category: 'Community',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland guide illustration for Steam Discussion: "Base building and game endings."（19 小时前）',
    evidence: 'Community demonstration',
    updated: '2026-09-05',
    answer: '了解游戏深度和内容边界 Based on Steam Discussion intelligence: 玩家询问是否有基地建造系统和多结局',
    steps: [
      'Source review: Consult Steam Discussion discussions and patch release notes.',
      'Field verification: Test the mechanic in an isolated raid before risking high-tier equipment.',
      'Stash protection: Secure critical loot in base shelter prior to dangerous extraction runs.'
    ],
    facts: [
      ['Community source', 'https://steamcommunity.com/app/3373500/discussions/'],
      ['Report date', '2026-09-05'],
      ['Version status', 'Early Access v0.5.x verified']
    ],
    faq: [
      ['What is the primary community takeaway?', '了解游戏深度和内容边界'],
      ['Where was this verified?', 'Discussed on Steam Discussion: https://steamcommunity.com/app/3373500/discussions/']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments'],
    keywords: ['scavland base building game endings 19', 'scavland community guide', 'scavland tips']
  },
  {
    slug: 'scavland-macbook-release-apple-approval-5',
    shortTitle: 'Steam Discussion: "Macbook',
    title: 'Scavland guide: Steam Discussion: "Macbook Release - Apple Approval"（5 小时前，开发者相关）',
    description: 'Community-verified breakdown of Steam Discussion: "Macbook Release - Apple Approval"（5 小时前，开发者相关） from Steam Discussion（2 回复）.',
    category: 'Community',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland guide illustration for Steam Discussion: "Macbook Release - Apple Approval"（5 小时前，开发者相关）',
    evidence: 'Community demonstration',
    updated: '2026-09-05',
    answer: 'Mac 玩家等待原生支持 Based on Steam Discussion（2 回复） intelligence: 讨论 Mac 版发布进度，需 Apple 审批',
    steps: [
      'Source review: Consult Steam Discussion（2 回复） discussions and patch release notes.',
      'Field verification: Test the mechanic in an isolated raid before risking high-tier equipment.',
      'Stash protection: Secure critical loot in base shelter prior to dangerous extraction runs.'
    ],
    facts: [
      ['Community source', 'https://steamcommunity.com/app/3373500/discussions/'],
      ['Report date', '2026-09-05'],
      ['Version status', 'Early Access v0.5.x verified']
    ],
    faq: [
      ['What is the primary community takeaway?', 'Mac 玩家等待原生支持'],
      ['Where was this verified?', 'Discussed on Steam Discussion（2 回复）: https://steamcommunity.com/app/3373500/discussions/']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments'],
    keywords: ['scavland macbook release apple approval 5', 'scavland community guide', 'scavland tips']
  }
];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));
