export type Evidence = 'Official' | 'Personal in-game test' | 'Community demonstration' | 'Unverified';
export type Guide = { slug:string; title:string; shortTitle:string; description:string; category:string; image:string; imageAlt:string; evidence:Evidence; updated:string; answer:string; steps:string[]; facts:[string,string][]; faq:[string,string][]; related:string[]; keywords:string[]; videoId?: string; videoTitle?: string; videoChannel?: string; };

export const guides: Guide[] = [
  {
    slug: 'scavland-cheats-and-console-commands',
    shortTitle: 'Console & Cheats',
    title: 'Scavland Console Commands & Cheats Guide: Debug Mode (-dev / -console) & Item Spawning',
    description: 'Definitive Scavland console commands and cheats guide: -dev and -console Steam launch parameters, debug overlay hotkeys, CT table memory offsets, and safe solo testing.',
    category: 'Systems',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: 'Scavland developer console, cheats, trainer tools, and item spawning reference',
    evidence: 'Community-reported @ https://steamcommunity.com/app/3373500/discussions/',
    updated: '2026-09-29',
    answer: 'In Scavland, players seeking developer console commands, debug overlays, or trainer modifications can access internal diagnostic features through verified Steam parameters. While developer debug menus were restricted following Early Access <strong>v0.2.4</strong>, players can pass command-line launch parameters (<strong>-dev</strong>, <strong>-console</strong>) via Steam to activate diagnostic overlays and console functionality. For memory trainers and <strong>Cheat Engine</strong> (CT) tables, recent patches including <strong>Update 0.7.0</strong> and <strong>Update 0.7.2</strong> shifted dynamic memory offsets for stamina, carry weight, and durability, requiring updated pointers. Because Scavland is strictly an offline single-player survival RPG in Early Access, third-party memory trainers carry no risk of Steam VAC bans in solo sessions. Furthermore, <strong>Update 0.7.0</strong> added independent <strong>Autosave Slots</strong> per run, protecting your main campaign from corruption during experimental testing.',
    steps: [
      '01 · Configure Steam Launch Parameters (-dev / -console): To enable the developer console and diagnostic features, right-click Scavland in your Steam Library -> Properties -> General -> Launch Options. Enter "-dev" or "-console" (without quotes) to activate developer diagnostic logging and command overlay support on boot.',
      '02 · Open Diagnostic Console Hotkeys: Launch your run and press the tilde [~] or [F1] / [F2] key to toggle the in-game developer overlay window for real-time telemetry and debug commands.',
      '03 · Enable Explorer Mode (Official Built-in Cheats): Before altering memory tables or injecting external code, consider enabling Explorer Mode in world settings. This native difficulty setting acts as a built-in cheat suite with 1.2x vendor payouts, baseline 150 stamina with reduced roll costs (15 stamina vs 40 in standard modes), and 2x campfire healing without risking save corruption.',
      '04 · Cheat Engine (CT Table) & Trainer Compatibility: With Update 0.7.0 and Update 0.7.2, pointer shifts invalidated legacy CT tables. Ensure you load tables specifically built for Update 0.7.0+ to prevent memory desyncs or game freezes when locking stamina or editing currency.',
      '05 · Solo Offline Safety & VAC Policy: Scavland operates entirely offline in solo play with no Valve Anti-Cheat (VAC) integration, making Cheat Engine tables, console commands, and local mods safe from account bans in single-player sessions.',
      '06 · Leverage Dedicated Autosave Slots & Backups: Update 0.7.0 isolates each run into its own Autosave Slot. Before testing external memory tables or debug injections, create a manual backup of %USERPROFILE%/AppData/LocalLow/NoShadow/Scavland/Saves/ to preserve campaign progression.'
    ],
    facts: [
      ['Console Launch Flags', 'Passing -dev and -console command flags in Steam activates developer diagnostic logging and console overlay'],
      ['Console Overlay Hotkeys', 'Press [~] (Tilde) or [F1] / [F2] in test builds to toggle the console window'],
      ['Built-in Casual Cheats', 'Explorer Mode provides built-in casual settings: 1.2x vendor payouts, 15 roll stamina cost, and 2x campfire healing'],
      ['Memory Offset Updates', 'Update 0.7.0 and Update 0.7.2 adjusted memory pointers, requiring updated CT tables for stamina and inventory'],
      ['Anti-Cheat Policy', 'Scavland is an offline single-player game in Early Access with no server-side VAC bans for solo play'],
      ['Save File Location', 'Saves are stored locally at %USERPROFILE%/AppData/LocalLow/NoShadow/Scavland/Saves/'],
      ['Autosave Protection', 'Update 0.7.0 gives each run an independent Autosave Slot, safeguarding primary campaign progress'],
      ['Evidence Baseline', 'Community-reported @ https://steamcommunity.com/app/3373500/discussions/']
    ],
    faq: [
      ['How do you open the console in Scavland?', 'To open the developer console, add -dev or -console to your Steam Launch Options (right-click Scavland -> Properties -> General -> Launch Options). Once in-game, press [~] (Tilde) or [F1] / [F2] to toggle the debug console overlay.'],
      ['Are there official cheat codes in Scavland?', 'Scavland provides an official "Explorer Mode" difficulty preset that functions like built-in cheats—offering 150 maximum stamina with 15 roll cost (compared to 40 in standard modes) and 2x campfire health recovery. Console debug access requires -dev or -console launch flags.'],
      ['Why do older Cheat Engine tables crash after Update 0.7.0 / 0.7.2?', 'Update 0.7.0 and Update 0.7.2 refactored internal data structures and inventory serialization, shifting memory pointers. Legacy tables cause memory desyncs or crashes; always use tables updated for the current patch.'],
      ['Can you get VAC banned for using console commands or Cheat Engine in Scavland?', 'No. Scavland is a dedicated single-player title in Early Access with no server-side VAC anti-cheat for solo play. Modifying local stamina or ruble values in single-player will not ban your Steam account.'],
      ['How does Update 0.7.0 safeguard saves when using cheats?', 'Update 0.7.0 introduced individual Autosave Slots per run, preventing a modded or experimental session from automatically overwriting your primary progression save.'],
      ['Where are Scavland save files located on PC?', 'Local saves are found at C:\\Users\\<Username>\\AppData\\LocalLow\\NoShadow\\Scavland\\Saves\\ on Windows systems.']
    ],
    related: ['scavland-explorer-mode-and-campfire-healing', 'scavland-beginner-guide', 'scavland-weapon-repair-and-durability'],
    keywords: ['scavland console', 'scavland console commands', 'scavland cheats', 'scavland cheat engine', 'scavland cheat', 'scav land console', 'scavland debug mode', 'scavland dev mode', 'scavland trainer', 'scavland pc trainer', 'scavland ct table 0.7.0', 'scavland item spawn', 'scavland god mode']
  },
  {
    slug: 'scavland-price-and-regional-editions',
    shortTitle: 'Price & Editions',
    title: 'Scavland Price & Editions Guide: Steam Cost, Launch Discount & Regional Breakdown',
    description: 'Complete breakdown of Scavland pricing on Steam: $19.99 baseline, 10% launch discount, regional pricing tiers, DRM status, and roadmap adjustments.',
    category: 'Platforms',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland price, editions, launch discount and Steam purchase breakdown',
    evidence: 'Official Steam announcements',
    updated: '2026-09-07',
    answer: 'Scavland launched on Steam Early Access on September 4, 2026, at a base price of <strong>$19.99 USD</strong> (<strong>€19.50 EUR</strong> / <strong>£16.75 GBP</strong>), accompanied by a limited <strong>10%</strong> launch window discount bringing the entry cost to <strong>$17.99</strong>. The developer NoShadow has confirmed that early access adopters receive all future <strong>Act II/III</strong> content and weapon expansions for free, though base pricing will modestly increase upon <strong>Version 1.0</strong> release.',
    steps: [
      '01 · Verify Official Steam Store: Purchase directly via the official Steam Store page (<strong>App ID 3373500</strong>) to ensure legitimate patch updates and cloud save support.',
      '02 · Review Regional Price Conversion: Check regional pricing via SteamDB; local currencies feature tailored purchasing power adjustments.',
      '03 · Check Minimum System Hardware: Ensure your PC meets the <strong>8GB RAM</strong> and <strong>GTX 960</strong> minimum hardware threshold before buying to avoid launch day stutter.',
      '04 · Secure Early Access Bonus: Early adopters lock in the lower $19.99 price tier before full release price escalation.'
    ],
    facts: [
      ['Base Price', '$19.99 USD on Steam Early Access'],
      ['Launch Discount', '10% promotional discount ($17.99 USD) during week one'],
      ['DLC Policy', 'Zero paid microtransactions; all content patches included in base purchase'],
      ['V1.0 Price Outlook', 'Planned price increase upon full release graduation']
    ],
    faq: [
      ['Is there a Deluxe or Collector\'s Edition?', 'Currently only the Standard Early Access Edition is available. Special supporter cosmetic packs are planned for future major content milestones.'],
      ['Will Scavland go on deeper sale soon?', 'Standard Steam policy prevents further discounts for 30 days after the launch promotion ends. The launch week discount is the lowest price for the near term.'],
      ['Is Scavland available on Epic Games or GOG?', 'No, Scavland is currently exclusive to Steam Early Access. Developer NoShadow plans to explore DRM-free GOG distribution closer to V1.0.']
    ],
    related: ['scavland-beginner-guide', 'scavland-release-date', 'scavland-system-requirements'],
    keywords: ['scavland price', 'scavland steam price', 'scavland cost', 'scavland discount', 'scavland regional price'],
    videoId: 'sulLD0aNdOk',
    videoTitle: "SCAVLAND But I Don't Waste Your Time (Before You Buy & Features)",
    videoChannel: 'The Singleplayer Squad'
  },
  {
    slug: 'scavland-steam-deck-and-handheld-settings',
    shortTitle: 'Steam Deck & Handheld Guide',
    title: 'Scavland Steam Deck & Handheld Guide: Controller Setup, Display and Settings Tips',
    description: 'Handheld setup for Scavland on Steam Deck and portable PCs: display scaling, frame-rate and power options, controller layouts, and text sizing. The settings below are suggestions to try, not measured benchmarks.',
    category: 'Platforms',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: 'Scavland running on handheld device with tactical HUD',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-16',
    answer: 'Scavland features native controller support and, in the developers\u2019 own words, was "designed with Steam Deck and handheld play in mind". <strong>Update 0.7.0</strong> enhances handheld ergonomics with full gamepad support integrated into the rebuilt <strong>Death Screen</strong> (with dedicated button actions for <strong>Returner</strong>, <strong>Iron Man</strong>, and Tutorial modes), improved text sizing for 7-inch displays, and 8-directional diagonal movement. The suggestions below provide a solid handheld baseline: stick to the native 1280x800 resolution, adjust TDP and frame caps via SteamOS for balanced battery life, and enable the dynamic Action Hint Bar in Gameplay Settings for quick looting.',
    steps: [
      '01 · Native Panel Resolution: The Steam Deck features a native 1280x800 display at 16:10. Set the display resolution to 1280x800 in video settings to prevent non-uniform scaling or blurred text labels.',
      '02 · Power & Battery Tuning: In the SteamOS Quick Access Menu (•••), set a manual TDP limit and cap the refresh rate to 40Hz or 60Hz. A 40Hz cap delivers smooth top-down tactical movement while significantly extending handheld battery life.',
      '03 · <strong>Death Screen</strong> & Gamepad Navigation: <strong>Update 0.7.0</strong> added full controller navigation to the rebuilt <strong>Death Screen</strong>. Instead of a clumsy any-key press, players can use D-pad and face buttons to select Continue / Load Game (<strong>Returner</strong> mode), New Game / Exit (Iron Man mode), or Try Again (Tutorial).',
      '04 · Action Hint Bar & Custom Rebinding: Ensure the Action Hint Bar remains enabled in Gameplay Settings. It dynamically displays context-sensitive button prompts across Inventory, Trade, Journal, and stack splitting windows.',
      '05 · Text Sizing & UI Readability: Update 0.7.0 delivers improved text sizing on handheld screens. If small inventory descriptions or barter prices feel tight on a 7-inch panel, check UI scale options in accessibility settings.'
    ],
    facts: [
      ['Handheld support', 'Full controller support; developer confirms game was designed with Steam Deck and handhelds in mind'],
      ['Death Screen Gamepad', 'Update 0.7.0 introduced full gamepad button navigation across all game mode death screens'],
      ['Native Resolution', '1280x800 at 16:10 aspect ratio matching the Steam Deck screen'],
      ['Power Optimization', 'Adjustable manual TDP and 40Hz / 60Hz refresh presets in SteamOS Quick Access Menu'],
      ['Action Hint Bar', 'Contextual bar dynamically displays relevant button inputs in inventory and trade windows'],
      ['Latest Update', 'Update 0.7.0 & Hotfix 0.7.1']
    ],
    faq: [
      ['How does Scavland perform on Steam Deck with Update 0.7.0?', 'Update 0.7.0 significantly polishes handheld play by introducing full gamepad support to the rebuilt Death Screen, refining text sizing on the 7-inch display, and maintaining smooth 8-directional analog movement.'],
      ['Is text legible on the 7-inch Steam Deck screen?', 'Yes. Update 0.7.0 specifically optimized font rendering and text sizing for handheld resolutions. In-game item descriptions, trader barter values, and journal logs remain sharp at native 1280x800.'],
      ['Does Scavland support Steam Cloud saves across PC and Deck?', 'Yes. Steam Cloud save synchronization is enabled, allowing seamless progression transfer between your desktop rig and Steam Deck.'],
      ['Can you navigate the death screen with a controller?', 'Yes. As of Update 0.7.0, the Death Screen features full gamepad support with dedicated actions (Continue, Load Game, New Game, Exit, Try Again) instead of the previous generic any-key interaction.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-system-requirements'],
    keywords: ['scavland steam deck', 'scavland handheld', 'scavland 60fps settings', 'scavland controller layout', 'scavland battery life'],
    videoId: 'Zx0Uon9RJM4',
    videoTitle: 'Czy SCAVLAND to S.T.A.L.K.E.R. w 2D?! Test wydajności na Steam Deck LCD 512 GB',
    videoChannel: 'ciastek'
  },
  {
    slug: 'scavland-vs-zero-sievert-comparison',
    shortTitle: 'Scavland vs Zero Sievert',
    title: 'Scavland vs Zero Sievert: 7 Core Differences, Mist Anomalies & Co-op Roadmap',
    description: 'Tactical comparison between Scavland and Zero Sievert: ballistics feel, 300+ attachments, radioactive Mist weather, 10 factions, and co-op roadmap.',
    category: 'Comparisons',
    image: '/images/screenshots/scavland_vs_zero_sievert.webp',
    imageAlt: 'Side-by-side tactical comparison between Scavland and Zero Sievert top-down survival mechanics',
    evidence: 'Official Steam announcements & community reports · Early Access 0.7.0',
    updated: '2026-09-10',
    answer: 'While Scavland shares <strong>Zero Sievert</strong>’s top-down extraction DNA, it departs radically in world simulation and combat depth. Scavland introduces <strong>300+</strong> modular weapon attachments with realistic barrel fouling and misfire mechanics, an unpredictable toxic <strong>Mist</strong> weather cycle that triggers rare anomalous artifact spawns, <strong>10</strong> dynamic warring factions, and an official co-op multiplayer mode on the active roadmap.',
    steps: [
      '01 · Compare Gunplay Ergonomics: Scavland emphasizes realistic ballistics, weapon condition degradation, and attachment weight balances over arcade spray patterns.',
      '02 · Evaluate Map Exploration: Experience handcrafted exploration across <strong>Zalesye</strong> with persistent safehouse bunkers rather than randomized tile resets.',
      '03 · Navigate 10 Faction Politics: Balance relationships with 10 distinct syndicates to unlock specialized military gear and safe passage.',
      '04 · Prepare for <strong>Mist</strong> Anomaly Storms: Carry Anomaly Scanners and gas masks to harvest lucrative artifacts during deadly environmental events.'
    ],
    facts: [
      ['Weapon Modding', 'Zero Sievert offers preset mod slots; Scavland features 300+ freeform components and field cleaning kits'],
      ['Environmental Weather', 'Scavland features the toxic Mist anomaly storm; Zero Sievert focuses on day/night radiation pockets'],
      ['Multiplayer Architecture', 'Scavland has planned 2-player co-op extraction on roadmap; Zero Sievert remains strictly singleplayer'],
      ['World Topology', 'Zero Sievert uses procedurally generated maps; Scavland features handcrafted persistent sectors in Zalesye']
    ],
    faq: [
      ['Is Scavland a clone of <strong>Zero Sievert</strong>?', 'No. While both are top-down <strong>Stalker</strong>-inspired extraction shooters, Scavland focuses on handcrafted tactical persistence, deeper faction diplomacy, and modular gunsmithing.'],
      ['Which game is harder?', 'Scavland leans on logistics and consequence: weapons wear out and can jam, and hydration and stamina have to be managed. Zero Sievert is generally framed as the faster, more reflex-driven of the two. We hold no head-to-head comparison source, so treat this as a genre framing rather than a benchmark.'],
      ['Can I play Scavland with friends?', 'Co-op extraction is currently the #1 priority on developer NoShadow\'s Early Access roadmap, whereas Zero Sievert is exclusively solo.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-quests-and-contracts'],
    keywords: ['scavland vs zero sievert', 'scav land vs zero sievert', 'scavland similar games', 'scavland stalker like', 'scavland co op', 'zero sievert alternatives'],
    videoId: 'ETFXsWYOVlM',
    videoTitle: "5 Top Down Extraction Shooters That AREN'T ZERO Sievert...",
    videoChannel: 'Oscar Mikey'
  },
  {
    slug: 'scavland-explorer-mode-and-campfire-healing',
    shortTitle: 'Explorer Mode',
    title: 'Scavland Explorer Mode Guide: Campfire Healing & Stamina Updates',
    description: 'Complete guide to Scavland Explorer Mode (v0.5.169): campfire health healing, doubled stash capacity, relaxed death penalties, and survival strategy.',
    category: 'Progression',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: 'Scavland explorer mode campfire resting and safehouse stash',
    evidence: 'Official Steam announcement · Update 0.5.169',
    updated: '2026-09-07',
    answer: '<strong>Explorer Mode</strong>, introduced in the Early Access <strong>Day One Patch</strong> (<strong>v0.5.169</strong>), fundamentally alters the early game difficulty curve by focusing on world discovery rather than punishing resource starvation. This mode activates campfire health regeneration, doubles base stamina, and expands safehouse stash capacity by 200%, allowing players to carry more [weapons](/weapons/) and engage more deeply with [factions](/factions/) without constant fear of bankruptcy.',
    steps: [
      '01 · Enabling the Mode: <strong>Explorer Mode</strong> can be selected to lower the severe death penalties associated with traditional corpse runs, letting you focus on exploring <strong>Zalesye</strong>.',
      '02 · Campfire Regeneration: Resting at active campfires across the wasteland now provides a slow but continuous health regeneration aura. This significantly reduces early reliance on scarce bandages and medical splints.',
      '03 · Expanded Logistics: Base stash capacity and maximum character stamina are doubled (2x). You can now stockpile more high-tier [weapons](/weapons/) and industrial trade goods for [faction](/factions/) merchants.',
      '04 · Hydration Mechanics: The patch introduces new medical blueprints specifically for managing the severe dehydration debuff. Always boil water before consuming to prevent rad poisoning.'
    ],
    facts: [
      ['Stamina Pool', 'Doubled (2x) base stamina, allowing for extended sprinting and heavier loot extraction'],
      ['Stash Capacity', 'Base safehouse storage increased by 100% to accommodate more weapon hoarding'],
      ['Campfire Healing', 'Passive HP regeneration when resting near a lit campfire'],
      ['Patch Version', 'Introduced in Early Access 0.6.3 (v0.5.169)']
    ],
    faq: [
      ['Does <strong>Explorer Mode</strong> change combat difficulty?', 'Yes, in part: the <strong>Day One Patch</strong> describes <strong>Explorer</strong> as having "more forgiving combat" alongside faster Job rewards, keeping your equipment on death and autosave. It does not make every encounter trivial — mutants and hostile survivors remain lethal.'],
      ['Can I heal completely using campfires?', 'Yes, resting at a campfire restores base health over time, but it does not cure radiation poisoning or severe bleeding without proper medical items.'],
      ['Is this mode permanent for my save?', 'Explorer Mode can be selected to tailor the difficulty curve of your survival experience, easing the steep learning curve for new scavengers.']
    ],
    related: ['scavland-beginner-guide', 'scavland-quests-and-contracts', 'scavland-death-and-loot-recovery'],
    keywords: ['scavland explorer mode', 'scavland campfire healing', 'scavland stamina limit', 'scavland stash size', 'scavland v0.5.169'],
    videoId: 'LKSUTqQc0HA',
    videoTitle: 'Day One Update With MASSIVE Changes to Scavland! | Patch 0.5.169 Notes',
    videoChannel: 'Empty_Estus'
  },
  {
    slug: 'scavland-beginner-guide',
    shortTitle: 'Beginner Guide (Update 0.7.0)',
    title: 'Scavland Beginner Guide: Starter Kit, 150 Stamina, Dodge Costs & The Mire Route (Update 0.7.0)',
    description: 'Definitive Scavland beginner guide: Update 0.7.0 starter kit with Green Rags, 150 max stamina, difficulty dodge costs, 2x campfire triage healing, and The Mire safe route.',
    category: 'Survival',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'A scavenger exploring a ruined settlement in daylight near safehouse',
    evidence: 'Official Update 0.7.0 @ https://store.steampowered.com/news/app/3373500/view/710034946759065894 @ 2026-09-16',
    updated: '2026-09-29',
    answer: 'Start your journey with daylight scavenging loops around the central settlement of <strong>Zalesye</strong> and raid the hazard-free supply depot at <strong>The Mire</strong> northwest of town. <strong>Update 0.7.0</strong> introduced significant beginner quality-of-life upgrades: <strong>Green Rags</strong> are now included in the starter kit for early emergency bleeding control, all game modes feature a unified 150 maximum stamina pool, and stamina recovery is accelerated to approximately <strong>7 seconds</strong> (down from <strong>10 seconds</strong>). Dodge roll stamina costs are tuned to mode difficulty (<strong>Explorer</strong>: <strong>15 Stamina</strong>, <strong>Returner</strong>: <strong>40 Stamina</strong>, <strong>Iron Man</strong>: 40 Stamina). In addition, Gun and Armor Repair Kits can now be used regardless of equipment damage condition, campfire healing has been doubled for emergency field triage, and the Death Screen has been rebuilt with dedicated mode-specific actions and gamepad support. If you die in the wasteland, your equipped backpack drops at the coordinate for recovery, while your safehouse stash remains completely secure.',
    steps: [
      '01 · Starter Kit & Green Rags (Update 0.7.0): Every new run now includes Green Rags in the starter kit alongside basic field gear. Use Green Rags immediately when suffering lacerations or light bleeding during early skirmishes.',
      '02 · Understand Mode Difficulty & Dodge Costs: All game modes now feature 150 maximum Stamina. However, dodge roll stamina costs vary significantly by chosen mode: Explorer Mode requires only 15 Stamina per dodge roll, whereas Returner Mode and Iron Man Mode demand 40 Stamina per dodge roll.',
      '03 · Rapid Stamina Recovery: Stamina regenerates significantly faster in Update 0.7.0, taking approximately 7 seconds to fully recover from empty (down from 10 seconds previously). Keep hunger satisfied with canned rations (Tushonka, beans) to prevent stamina cap penalties.',
      '04 · Hit "The Mire" Starter Supply Cache: Directly northwest of Zalesye settlement lies The Mire wetland depot, a guaranteed safe starter stash containing free boiled water canteens, 12-Gauge shells, and antiseptic gauze with zero hostile bandit patrols.',
      '05 · Master Shift+Click Fast Looting: Never drag items individually from loot containers. Holding [Shift+Click] instantly transfers container stacks to your inventory, slashing vulnerable stationary looting time.',
      '06 · Equipment Maintenance & Universal Repair Kits: Guns can explode below 30% condition, but Update 0.7.0 made weapon jamming begin later and lowered hard-jam chance at 10% durability from 45% to 33%. Furthermore, Gun and Armor Repair Kits can now be applied regardless of how damaged your equipment is.',
      '07 · Daylight Raids & Campfire Recovery: Depart at dawn (06:00) and return before 21:00 dusk when visibility collapses. Campfire healing has been doubled in Update 0.7.0, making lit campfires highly effective field triage stations between raids.',
      '08 · Death Screen & Run Autosaves: The Death Screen has been rebuilt with dedicated options (Returner: Continue / Load Game; Iron Man: New Game / Exit; Tutorial: Try Again). Each run now maintains its own separate Autosave Slot, protecting your active progression.'
    ],
    facts: [
      ['Starter Kit Green Rags', 'Green Rags are now included in the starter kit (Update 0.7.0)'],
      ['Maximum Stamina Baseline', 'All game modes now have 150 maximum Stamina (Update 0.7.0)'],
      ['Dodge Roll Stamina Cost', 'Explorer Mode: 15 Stamina; Returner Mode: 40 Stamina; Iron Man Mode: 40 Stamina (Update 0.7.0)'],
      ['Stamina Regeneration Rate', 'Full recovery takes approximately 7 seconds, down from ~10 seconds (Update 0.7.0)'],
      ['Campfire Triage Healing', 'Campfire healing rate is doubled in Update 0.7.0 for rapid field recovery'],
      ['Starter Supply Cache', 'The Mire northwest of Zalesye provides free boiled water, 12G ammo, and gauze with no bandits'],
      ['Universal Repair Kits', 'Gun and Armor Repair Kits can now be used regardless of damage condition (Update 0.7.0)'],
      ['Rebuilt Death Screen', 'Mode-specific actions (Returner: Continue/Load; Iron Man: New Game/Exit) and run-specific Autosave Slot (Update 0.7.0)'],
      ['Evidence Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['What was added to the beginner starter kit in Update 0.7.0?', 'Green Rags are now included in the starter kit, giving fresh spawns an immediate remedy for bleeding and lacerations without needing early medical purchases.'],
      ['How much stamina does dodging consume in different modes?', 'Under Update 0.7.0, all modes have 150 maximum stamina, but dodge roll cost is 15 Stamina in Explorer Mode, compared to 40 Stamina in Returner and Iron Man modes.'],
      ['How does campfire healing work in Update 0.7.0?', 'Campfire healing is doubled in Update 0.7.0, allowing scavengers to rapidly restore baseline health in the field without consuming scarce medkits.'],
      ['Where should I go on my very first raid in Scavland?', 'Head immediately northwest of Zalesye to The Mire wetland cache. It provides clean drinking water, starter ammunition, and medical items without armed bandit opposition.'],
      ['Can I repair severely broken weapons and armor in Update 0.7.0?', 'Yes. Gun and Armor Repair Kits can now be used regardless of how damaged equipment is, removing previous minimum durability restrictions.'],
      ['What happens if I die during a raid?', 'In standard Returner Mode, your equipped gear and backpack remain at your death coordinate for recovery, while your safehouse stash remains completely secure. The rebuilt Death Screen allows you to Continue or Load Game directly.']
    ],
    related: ['scavland-map-and-locations', 'scavland-weapon-repair-and-durability', 'scavland-crafting-and-trading', 'scavland-red-keycard-and-bunker-loot-recovery', 'scavland-tactical-database-weapons-loot'],
    keywords: ['scavland beginner guide', 'scavlands', 'scavlands beginner guide', 'scavland starter tips', 'scavland green rags', 'scavland stamina 150', 'scavland dodge stamina', 'scavland the mire', 'scavland campfire healing', 'scavland death screen', 'scavland repair kits 0.7.0', 'scav land guide'],
    videoId: 'JRAOxOjeoc8',
    videoTitle: 'SCAVLAND - Stop Dying Early: The Complete Beginner Guide',
    videoChannel: 'Mars'
  },
  {
    slug: 'scavland-anomaly-scanner-and-artifacts',
    shortTitle: 'Anomaly Scanner',
    title: 'Scavland Anomaly Scanner & Catching Current Guide: Core Detector, Flux Aspect Core & Artifacts',
    description: 'Complete guide to the Core Detector anomaly scanner in Catching Current: locating the Flux Aspect Core, audio pitch tracking, missing item bug fix, and quicksave reset.',
    category: 'Exploration',
    image: '/images/harvested/2026-09-30/core-detector-is-missing/core-detector-is-missing-gameplay.webp',
    imageAlt: 'Core detector missing troubleshooting and anomaly scanner detection gameplay in Scavland',
    evidence: 'Community-reported @ https://www.reddit.com/r/Scavland/comments/1wfkjue/core_detector_is_missing/',
    updated: '2026-09-29',
    answer: 'The handheld <strong>Anomaly Scanner</strong> (named the <strong>Core Detector</strong> in game contracts) is your primary instrument for tracking spatial anomalies and harvesting artifacts across <strong>Zalesye</strong>. In the primary storyline quest "<strong>Catching Current</strong>", you must equip this device to locate and harvest the rare <strong>Flux Aspect Core</strong>. Bound to hotkey [3], the <strong>Core Detector</strong> emits audio radar pings that rapidly accelerate in pitch and tempo as you home in on anomalous epicenters. In the current Early Access build, community reports document a common inventory boundary issue: because the <strong>Core Detector</strong> occupies 3 vertical slots (1x3), if your inventory is 100% full upon accepting or turning in "<strong>Catching Current</strong>", the device cannot enter your quickbar and drops onto the ground directly near the NPC feet or diverts to your <strong>Zalesye</strong> safehouse stash overflow. If looking on the floor does not reveal it, drop junk to free slots, then fast travel away and return to force a respawn check. Additionally, a quicksave audio desync bug can silence the scanner; holstering the unit, cycling a firearm bolt once, and re-equipping slot [3] resets the audio listener component.',
    steps: [
      '01 · Free 3 Inventory Slots Before "<strong>Catching Current</strong>": The <strong>Core Detector</strong> occupies 3 vertical inventory slots (1x3 grid footprint). Clear at least 3-4 backpack cells before accepting the "<strong>Catching Current</strong>" quest from the handler so the scanner can safely enter your gear.',
      '02 · Floor & Safehouse Overflow Retrieval: If the <strong>Core Detector</strong> is missing from your inventory after accepting "<strong>Catching Current</strong>", do not restart your save. Inspect the ground directly beneath the NPC\'s feet where dropped items spawn, or check the Overflow Tab in your Zalesye safehouse stash locker.',
      '03 · Fast-Travel Reload Check: If the scanner is not visible on the floor, drop several unneeded items to guarantee empty inventory cells, then fast travel away to an outpost safehouse and return to the quest giver to force an object respawn check.',
      '04 · Equip Offhand Scanner & Sweep Terrain: Press hotkey [3] to equip the Core Detector in your offhand. Sweep across the quest search perimeter in a zigzag pattern while keeping in-game master and effects audio enabled.',
      '05 · Track Accelerating Cadence to Epicenter: Follow the escalating audio ping rate. As you approach the Flux Aspect Core epicenter from ~30m down to under 5m, the sound shifts from sporadic chirps to a continuous high-pitched hum.',
      '06 · Bolt-Cycle Audio Listener Reset: If loading a save renders the detector completely silent near visible shimmering anomalies, holster the scanner, switch to your primary firearm, cycle the bolt once, and re-equip slot [3] to reinitialize the spatial audio listener.',
      '07 · Harvest the Flux Aspect Core: Once the spatial distortion peaks and the Flux Aspect Core materializes on the ground, interact immediately to stow it before toxic radiation pulses or spatial backlash damage occur.'
    ],
    facts: [
      ['Quest Objective', 'The Core Detector is required to locate and harvest the Flux Aspect Core in the Catching Current quest line'],
      ['Equipment Hotkey', 'Press [3] to equip the handheld scanner, point toward spatial anomalies, and follow highest frequency pings'],
      ['Grid Footprint', 'Core Detector occupies 3 vertical inventory slots (1x3 grid footprint)'],
      ['Missing Item Recovery', 'If inventory is full, the scanner drops at the NPC feet or routes to Zalesye safehouse stash overflow'],
      ['Respawn Check', 'Drop junk to free slots, fast travel away and return to trigger an object respawn check'],
      ['Bolt-Cycle Audio Fix', 'Cycling a firearm bolt rebinds the audio spatial listener component if the detector goes silent'],
      ['Flux Core Value', 'The Flux Aspect Core fulfills the Catching Current contract and provides critical research barter with faction scientists'],
      ['Evidence Source', 'Community-reported @ https://old.reddit.com/r/Scavland/comments/1wfkjue/core_detector_is_missing/']
    ],
    faq: [
      ['How do I complete the <strong>Catching Current</strong> quest and find the Flux Aspect Core?', 'Equip the Core Detector using hotkey [3], traverse the marked anomaly zone, and follow the escalating audio radar frequency. When the pings transition into a continuous high-pitched tone, locate the shimmering epicenter and harvest the Flux Aspect Core directly from the ground.'],
      ['What should I do if the Core Detector is missing after accepting Catching Current?', 'If your backpack was full when receiving the scanner from the quest giver, it could not enter your grid. Return to the quest giver and check the floor directly beneath the NPC\'s feet. If it does not appear, drop some junk to free up slots, fast travel away to another zone, and return to force an engine respawn check.'],
      ['Why is the Anomaly Scanner not beeping near anomalies?', 'A known serialization bug in Early Access can desync the spatial audio component when loading a save. Holster the detector, cycle your firearm\'s bolt once, and re-equip slot [3] to reset the audio listener.'],
      ['How much backpack space does the Core Detector require?', 'The Core Detector requires 3 vertical inventory cells (1x3). Always maintain free slots before talking to major quest givers.'],
      ['Can anomaly fields be harvested repeatedly for artifacts?', 'Overworld anomaly zones undergo a 48-hour in-game regeneration cycle. Dense Mist events increase artifact spawn probabilities and yield enhanced anomaly loot.']
    ],
    related: ['scavland-mist', 'scavland-loot-and-scavenging', 'scavland-mist-survival-and-radiation', 'scavland-beginner-guide'],
    keywords: ['scavland catching current', 'scavland flux aspect core', 'catching current quest', 'scavland anomaly scanner', 'scavland core detector', 'scavland core detector missing', 'scavland artifacts', 'scavland scanner beep', 'scavland core detector bug', 'scavland detector not beeping', 'flux aspect core scavland']
  },
  {
    slug: 'scavland-death-and-loot-recovery',
    shortTitle: 'Death & recovery',
    title: 'Scavland Death Mechanics & Loot Recovery Guide: Corpse Runs, Beacon Persistence & Stash Security',
    description: 'Complete guide to Scavland death mechanics: rebuilt Death Screen in Update 0.7.0, dedicated Autosave Slots, corpse recovery, and safehouse stash defense.',
    category: 'Survival',
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: 'An underground corridor where a fallen scavenger left supplies near a recovery beacon',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-16',
    answer: 'Death in Scavland is punishing but strictly deterministic rather than an arbitrary roguelite wipe. In <strong>Update 0.7.0</strong>, the <strong>Death Screen</strong> was completely rebuilt with dedicated interactive actions instead of the previous any-key interaction: <strong>Returner</strong> mode offers Continue / Load Game, <strong>Iron Man</strong> mode presents New Game / Exit, and Tutorial provides Try Again, alongside full gamepad button navigation. In addition, each run now has its own <strong>Autosave Slot</strong>, protecting your active progression save. When you fall during a raid, your carried backpack and weapons drop at your exact death coordinates—flagged with a persistent skull beacon on your map—while your permanent Safehouse Stash remains 100% secure.',
    steps: [
      '01 · Navigate Rebuilt <strong>Death Screen</strong> (<strong>Update 0.7.0</strong>): The <strong>Death Screen</strong> features specific mode actions instead of any-key interactions: <strong>Returner</strong> players choose Continue or Load Game; <strong>Iron Man</strong> players choose New Game or Exit; Tutorial players choose Try Again. Full gamepad navigation is fully supported.',
      '02 · Dedicated Autosave Protection: <strong>Update 0.7.0</strong> assigns an individual <strong>Autosave Slot</strong> to each run, ensuring that fatal mishaps or loading alternative sessions never overwrite the save file you are currently playing.',
      '03 · Locate the Persistent Death Beacon: Upon respawning in your safehouse bunk, press [M] to open the overworld map. Your death coordinates are flagged with a skull beacon. While the beacon points to your latest death, older corpse bags remain physically on the ground until retrieved.',
      '04 · Deploy with Budget Recovery Gear: Never take your best weapons on a corpse recovery run. Equip a budget shotgun or Makarov pistol, a clean bandage, and a splint from your safehouse emergency stash.',
      '05 · Perimeter Sweep & Fast Scoop: Bandits or mutants that downed you frequently linger near the corpse bag. Clear hostiles from cover, hold [Shift+Click] to scoop all gear instantly, and extract without unnecessary detours.'
    ],
    facts: [
      ['Rebuilt Death Screen', 'Update 0.7.0 added proper actions: Returner (Continue/Load Game), Iron Man (New Game/Exit), Tutorial (Try Again)'],
      ['Full Gamepad Support', 'The Death Screen supports direct D-pad and controller face buttons since Update 0.7.0'],
      ['Dedicated Autosave Slots', 'Each run has its own Autosave Slot protecting current progression (Update 0.7.0)'],
      ['Corpse Persistence', 'Dropped backpacks persist in the world with zero despawn timer until picked up'],
      ['Safehouse Stash Security', 'Safehouse stashes are completely immune to death penalties and shared across camps'],
      ['Verified Baseline', 'Official Steam announcements · Update 0.7.0']
    ],
    faq: [
      ['What changed with the <strong>Death Screen</strong> in <strong>Update 0.7.0</strong>?', 'The <strong>Death Screen</strong> was completely rebuilt from the old any-key prompt into structured interactive choices: Returner offers Continue or Load Game, Iron Man offers New Game or Exit, and Tutorial offers Try Again, all with complete gamepad navigation.'],
      ['Can dying corrupt or overwrite my other game saves?', 'No. Update 0.7.0 implemented a dedicated Autosave Slot for each run, isolating your current character progression from other save files.'],
      ['Is there a time limit to recover your dropped backpack?', 'No. There is no expiration countdown. Your corpse bag stays in the game world indefinitely until retrieved.'],
      ['What happens if I die a second time while running to my corpse?', 'The map skull beacon will shift to your newest death point, but your original dropped backpack does not disappear—it remains on the ground at the first location.'],
      ['Can AI bandits loot or despawn your dropped items?', 'No. While enemies may patrol near your body, hostile AI scavengers do not loot or despawn items from player corpse bags.']
    ],
    related: ['scavland-beginner-guide', 'scavland-starter-loadouts-and-budget-builds', 'scavland-explorer-mode-and-campfire-healing'],
    keywords: ['scavland death mechanics', 'scavland recover loot', 'scavland backpack drop', 'scavland corpse run', 'scavland death penalty', 'scavland explorer mode death'],
    videoId: 'WyI0vB4qE7A',
    videoTitle: 'Surviving 4 Hours in Scavland With 0 Deaths is brutal',
    videoChannel: 'Mars'
  },
  {
    slug: 'scavland-weapons-and-attachments',
    shortTitle: 'Weapons & attachments',
    title: 'Scavland Weapons & Attachments Guide: 25+ Firearms, Durability Pass & Mod Bench (Update 0.7.0)',
    description: 'Complete Scavland weapons and attachments guide: 25+ firearms, 300+ attachment components, Update 0.7.0 durability pass, jam clearance, and weapon bench modding.',
    category: 'Gear',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: 'Scavland weapon modification and attachment station with stocks, optics, and magazine assemblies',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-26',
    answer: 'Firearms in Scavland require deliberate tactical customization and proactive maintenance to survive lethal encounters in <strong>Zalesye</strong>. Official releases confirm an arsenal of over 25 weapons and hundreds of weapon parts and attachments. In <strong>Update 0.7.0</strong>, developers delivered a sweeping combat and durability overhaul: rifle durability per point doubled across many weapons, hard jams at 10% condition decreased from 45% to 33%, and catastrophic weapon explosions only trigger when fired below <strong>30% durability</strong> (improved from 50%). Shotguns were balanced to apply a maximum of one bleed effect per shot, while <strong>Repair Kits</strong> can now restore equipment regardless of current condition. For weapon stats, calibers, and ballistics tables, explore our full [Interactive Weapons Database](/weapons/) and [Weapon Repair Guide](/guide/scavland-weapon-repair-and-durability/).',
    steps: [
      '01 · Master the 25+ Arsenal & Caliber Roles: Scavland features over 25 verified firearms spanning Assault Rifles, Battle Rifles, SMGs, Shotguns, Snipers/DMRs, and Sidearms. Match your primary to the target threat profile: high-penetration 5.45x39mm or 7.62x39mm for armored scavengers, and buckshot for mutated wildlife. Inspect verified stats in our [Weapons Database](/weapons/).',
      '02 · Modular Attachment Workbench Customization: Safehouse workbenches allow players to swap stocks, magazines, optics, muzzle devices, and grips. Update 0.7.0 expanded stock compatibility between Bahadir, MK-47, 74u, and Borealis families, while adding a 30-round magazine for the Thread Cutter. Foregrips provide dedicated ergonomics and handling improvements.',
      '03 · Navigate Update 0.7.0 Durability & Jam Thresholds: In Update 0.7.0, weapon durability was significantly increased across almost the entire arsenal. Rifles now last approximately twice as many shots per durability point, hard-jam chance at 10% durability is reduced to 33%, and catastrophic explosions only occur below 30% durability (down from 50%).',
      '04 · Field Maintenance & Universal Repair Kits: Perform preventative care before weapons enter danger thresholds: Glue and Gun Lube can be used from 80% durability (previously 85%), while Cleaning Rods and Field Repair Kits can be used from 70% durability (previously 75%). Gun and Armor Repair Kits now restore gear regardless of how damaged it is.',
      '05 · Secondary Weapon (Sidearm) BIS Selection: To preserve primary rifle durability and scarce ammunition against basic rats, carry a dependable sidearm. The suppressed PM Nikolay PB offers quiet infiltration, the hard-hitting Leon 1895 Short delivers heavy stopping power (+50% projectile damage in Update 0.7.0 / 0.6.2), and the Bahadir 918 Short provides 15 shots per durability point.'
    ],
    facts: [
      ['Verified Arsenal Scope', 'Scavland features 25+ weapons and hundreds of weapon parts and attachments (Update 0.7.0)'],
      ['Weapon Durability Pass', 'Rifles and larger weapons last roughly twice as many shots per durability point since Update 0.7.0'],
      ['Explosion Threshold', 'Firearms only risk exploding when fired below 30% durability (improved from 50% in Update 0.7.0)'],
      ['Jam Probability Reduction', 'At 10% durability, hard jam chance was reduced from 45% to 33% (Update 0.7.0)'],
      ['Maintenance Thresholds', 'Glue & Gun Lube usable from 80% durability; Cleaning Rods & Field Kits usable from 70% durability'],
      ['Universal Repair Kits', 'Gun & Armor Repair Kits can be used regardless of equipment damage condition (Update 0.7.0)'],
      ['Shotgun Bleed Limit', 'Shotguns apply a maximum of one bleed effect per shot instead of per pellet (Update 0.7.0)'],
      ['Evidence Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['What changed with weapon durability and jamming in <strong>Update 0.7.0</strong>?', 'Weapon durability was significantly increased across almost the entire arsenal, with many rifles lasting twice as many shots per point. Hard jamming at <strong>10% durability</strong> dropped from 45% to 33%, catastrophic explosions now only occur below <strong>30% durability</strong> (previously 50%), and <strong>Repair Kits</strong> work at any wear level.'],
      ['What is the best secondary weapon (sidearm) in Scavland?', 'For stealth, the suppressed PM Nikolay PB provides silent takedowns. For raw stopping power, the Leon 1895 Short deals +50% projectile damage with a 75 fire rate. For dependable longevity, the Bahadir 918 Short offers 15 shots per durability point with standard 9x18mm rounds.'],
      ['At what durability percentage can weapons explode?', 'In Update 0.7.0, the catastrophic failure threshold was lowered to 30% durability (previously 50%). Firing a weapon above 30% durability will never trigger a catastrophic explosion.'],
      ['How do maintenance consumables work in Update 0.7.0?', 'Glue and Gun Lube can now be applied once durability drops to 80% (previously 85%). Cleaning Rods and Field Repair Kits can be used from 70% durability (previously 75%). Full Repair Kits have no minimum percentage requirement.'],
      ['Do shotgun pellets stack multiple bleed effects?', 'No. Update 0.7.0 capped shotguns to apply a maximum of one bleed effect per shot, preventing excessive bleed stacking from individual pellets.']
    ],
    related: ['scavland-weapon-repair-and-durability', 'scavland-starter-loadouts-and-budget-builds', 'scavland-tactical-database-weapons-loot', 'scavland-beginner-guide'],
    keywords: ['scavland weapons', 'scavland weapon', 'scavland all weapons', 'scavland attachments', 'scavland weapons guide', 'scavland weapon repair', 'scavland gun durability', 'scavland secondary weapon', 'scavland weapon mods', 'scavland gun jam'],
    videoId: 'JQDdSAYkOkQ',
    videoTitle: 'Scavland Ultimate Weapon - 63 Dragoon Item Location',
    videoChannel: 'Game Detox Dopamine'
  },
  {
    slug: 'scavland-loot-and-scavenging',
    shortTitle: 'Loot & Scavenging',
    title: 'Scavland Loot & Scavenging Guide: Barter Values & Crafting Junk',
    description: 'Scavland loot guide: what to keep vs sell, rope & battery crafting status, spark plug barter values, weight density, and Anatoly vendor payouts.',
    category: 'Resources',
    image: '/images/harvested/2026-09-30/other-lootable-consumables/other-lootable-consumables-gameplay.webp',
    imageAlt: 'Lootable consumables and barter scrap including rope, batteries and wiring in Scavland inventory',
    evidence: 'Community-reported @ https://www.reddit.com/r/Scavland/comments/1wg9rk0/other_lootable_consumables/',
    updated: '2026-09-29',
    answer: 'Managing backpack capacity in Scavland requires understanding the exact boundary between active crafting components and pure vendor barter junk. In Early Access, functional workbench recipes are strictly reserved for mechanical and medical supplies (Scrap Metal, Weapon Springs, Clean Cloth, Antiseptic, Water Bottles, Gunpowder, and Ballistic Fiber). Frequently looted industrial items—including Rope, Household Batteries, Incandescent Light Bulbs, Car Batteries, and Copper Wiring—currently have zero workbench crafting recipes ("pure barter commodities"). However, settlement merchants enforce strict category specialization: specialist traders pay noticeably more for the categories they deal in, so sell electronics to a trader that actually wants them. For full market rules, explore our [Merchant Prices & Barter Guide](/guide/scavland-merchant-prices-and-barter-guide/), [Crafting & Trading Guide](/guide/scavland-crafting-and-trading/), or [Starter Loadouts Guide](/guide/scavland-starter-loadouts-and-budget-builds/).',
    steps: [
      '01 · Distinguish Active Crafting vs Barter Commodities: Check your safehouse workbench recipe manifest. Only <strong>Scrap Metal</strong>, <strong>Springs</strong>, Cloth, Antiseptic, Water, and Gunpowder craft items. Items like Rope, Batteries, and Light Bulbs have NO current crafting use and should be liquidated for liquid rubles.',
      '02 · Exploit Specialized Vendor Price Multipliers: Never dump industrial loot at the nearest merchant. Traders specialise: each buys some categories at a premium and pays less for off-speciality goods, so sell electronics to a trader that wants them.',
      '03 · Prioritize Ruble-per-Kilogram Density: Carry capacity is strictly constrained by encumbrance penalties. High-value single-slot items such as <strong>Spark Plugs</strong> and <strong>Military Lighters</strong> are worth carrying; heavy low-value scrap such as Metal Scrap spends carry capacity for little return. Check the current price at the trader, because 0.6.0 rebalanced sell values.',
      '04 · Shift+Click Fast-Transfer Looting: In active raid sectors, never drag items individually between loot containers and your rig. Holding [<strong>Shift + Left Click</strong>] transfers whole item stacks instantly, cutting stationary exposure by 80% and preventing ambush deaths.',
      '05 · Establish a Safehouse Buffer Stock: Store a reserve of <strong>10x Weapon Springs</strong>, <strong>20x Metal Scrap</strong>, and 5x Clean Cloth in your death-immune Zalesye stash for emergency field repairs, but sell off surplus Rope, Batteries, and civilian junk daily to fund high-capacity backpacks.'
    ],
    facts: [
      ['Crafting vs Junk Status', 'Rope, Batteries, and Light Bulbs currently have 0 workbench recipes (pure vendor barter salvage)'],
      ['Active Crafting Materials', 'Scrap Metal, Weapon Springs, Clean Cloth, Antiseptic, Clean Water, Gunpowder, and Ballistic Fiber'],
      ['Top Barter Value Density', 'Spark Plugs and Military Lighters are single-slot, high value-per-slot items'],
      ['Specialised vendors', 'Update 0.6.0 made traders more specialised in what they buy: Zhivan pays 140% for Common items, Vesna 75%, Nadja 90% for Common and 80% for Crafting items'],
      ['Fast Loot Shortcut', 'Shift + Left Click transfers whole item stacks instantly between containers and inventory'],
      ['Verified Baseline', 'Community-reported @ https://www.reddit.com/r/Scavland/comments/1wg9rk0/other_lootable_consumables/']
    ],
    faq: [
      ['Are rope, batteries, and light bulbs used in crafting in Scavland?', 'No. In current Early Access Patch <strong>v0.6.0</strong>, rope, household batteries, incandescent light bulbs, and electrical wiring do not have active workbench crafting recipes. Developer NoShadow confirmed expanded recipes are planned for future roadmap updates; currently, they serve as vendor barter commodities.'],
      ['Which merchant pays the most for scrap and industrial components?', 'Traders are specialised since Update 0.6.0. Bogdan pays 40% more for Mutant Parts, Zhivan pays 140% for Common items, and Grigory no longer buys Medical, Food or Crafting items but pays more for Weapon Attachments. Match the goods to the vendor.'],
      ['What loot should I prioritize during early-game raids?', 'Prioritize medical consumables (bandages, clean water), ammunition matching your equipped firearms, and high-value 1-slot electronics (spark plugs, relays, lighters). Leave heavy metal scrap behind unless needed for immediate safehouse repairs.'],
      ['Should I hoard junk items for future updates?', 'Keep a working reserve of 10x Weapon Springs and 20x Metal Scrap for weapon and armor repairs. Miscellaneous junk like rope, empty tin cans, and light bulbs should be sold immediately for rubles to upgrade your backpack and tactical rig.']
    ],
    related: ['scavland-crafting-and-trading', 'scavland-merchant-prices-and-barter-guide', 'scavland-starter-loadouts-and-budget-builds', 'scavland-beginner-guide'],
    keywords: ['scavland loot guide', 'scavland what to sell', 'scavland valuable junk', 'scavland rope crafting', 'scavland batteries use', 'scavland spark plugs barter', 'scavland vendor prices', 'scavland inventory management'],
    videoId: 'l84-X9wHjeM',
    videoTitle: 'Making MONEY and Getting LOOT in SCAVLAND',
    videoChannel: 'Nukov'
  },
  {
    slug: 'scavland-quests-and-contracts',
    shortTitle: 'Quests & contracts',
    title: 'Scavland Main Quests & Contracts Guide: Storyline Chain, Job Tracking & Reputation Rules',
    description: 'Complete guide to Scavland main quests and contracts: storyline progression from Dead Man\'s Rest to Catching Current, orange vs green quest items, and job penalties.',
    category: 'Progression',
    image: '/images/harvested/2026-09-24/core-detector-is-missing/core-detector-is-missing-gameplay.webp',
    imageAlt: 'Scavland quest journal showing main story progression, contract tracking, and inventory item colors',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-24',
    answer: 'Progression in Scavland is bifurcated into primary storyline Quests and repeatable faction Jobs (Contracts). Main quests guide your overarching narrative through <strong>Zalesye</strong>—commencing with the tutorial objective \'Dead Man\'s Rest\' and advancing to core contracts like \'Catching Current\' to secure the Flux Aspect Core. To safeguard quest items, Update 0.6.0 and Update 0.7.0 introduced explicit visual item segregation: Quest Items are colored <strong>orange</strong>, while Job Items appear in <strong>green</strong>. Furthermore, equipped clothing can no longer be accidentally handed in for jobs, and quest containers automatically vanish once their objective completes. You can track multiple jobs simultaneously in your Journal, but cancelling an accepted contract deducts 20% of that Job\'s Reputation reward (with a minimum penalty of 1). Contracts and job rosters refresh across an in-game 24-hour cycle or upon sleeping in a bed with a mattress.',
    steps: [
      '01 · Distinguish Main Quests vs Faction Jobs: Main Quests (such as \'Dead Man\'s Rest\' and \'<strong>Catching Current</strong>\') advance world lore and unlock critical survival gear. Faction Jobs are repeatable economic contracts taken from brokers like <strong>Anatoly</strong> (logistics and bandit camps) and <strong>Nadja</strong> (mutant hunts).',
      '02 · Color-Coded Quest Item Identification: In your inventory, Quest Items are highlighted in orange, whereas repeatable Job Items are highlighted in green. Quest items can be transferred between stash inventories with a confirmation warning, preventing accidental loss.',
      '03 · Multi-Job Tracking & Map Navigation: The Journal allows tracking multiple Jobs simultaneously; notifications only trigger for actively tracked objectives. The Journal Map can stay open while walking, continuously updating your player marker in real time.',
      '04 · Contract Cancellation & Reputation Penalty: You can cancel unwanted contracts directly from the Journal interface, but cancelling costs 20% of that Job\'s Reputation reward (with a minimum penalty of 1). Only abandon jobs if their objective sector is heavily contested.',
      '05 · Faction Broker Roles & Volodymyr\'s Jobs: In Update 0.7.0, gunsmith <strong>Volodymyr</strong> offers specialized jobs focused on high-quality weapons and dangerous mutants. Bogdan\'s fetch jobs reward expanded reputation, and Diplomat Raisa offers truce contracts (updated in Hotfix 0.7.2 to offer follow-up jobs without waiting for current job completion).',
      '06 · World Refresh & Mattress Sleeping: Job rosters refresh every 24 in-game hours. Under <strong>Update 0.7.0</strong>, sleeping to advance time requires a bed with a mattress. Safehouse sleep cycles both merchant stocks and daily contract boards.'
    ],
    facts: [
      ['Main Quest Line', 'Narrative progression runs through foundational milestones including Dead Man\'s Rest and Catching Current'],
      ['Item Color Separation', 'Quest Items are visually highlighted in orange; Job Items appear in green (Update 0.6.0)'],
      ['Job Cancellation Penalty', 'Cancelling a Job directly from the Journal costs 20% of that Job\'s Reputation reward with a minimum penalty of 1'],
      ['Simultaneous Job Tracking', 'Multiple jobs can be tracked at once; notifications only display for actively tracked jobs'],
      ['Trader Volodymyr Jobs', 'Volodymyr now offers jobs focused on high-quality weapons and dangerous mutants (Update 0.7.0)'],
      ['Diplomat Raisa Overhaul', 'Raisa can offer follow-up jobs without waiting for current one to finish (Hotfix 0.7.2)'],
      ['24-Hour Reset Cycle', 'Contract rosters refresh every 24 in-game hours or upon sleeping in a bed with a mattress (Update 0.7.0)']
    ],
    faq: [
      ['What is the difference between Main Quests and Jobs in Scavland?', 'Main Quests (such as Dead Man\'s Rest and Catching Current) drive central narrative progression, introduce core tools like the Core Detector, and carry orange-bordered items. Jobs are repeatable contracts offered by local brokers like Anatoly, Nadja, and Volodymyr to earn rubles and faction reputation.'],
      ['Why are some items orange and others green in my inventory?', 'Under Update 0.6.0, Quest Items are color-coded in orange to prevent accidental disposal or sale, while repeatable Job Items are color-coded in green. Equipped clothing cannot be accidentally turned in for jobs.'],
      ['What is the penalty for cancelling a Job in Scavland?', 'Cancelling an accepted Job directly from the Journal deducts 20% of that Job\'s Reputation reward, with a minimum penalty of 1 reputation point.'],
      ['Can I track more than one contract at the same time?', 'Yes. The rebuilt Journal allows tracking multiple jobs concurrently. Notifications appear exclusively for the tasks you have actively marked for tracking.'],
      ['How often do contract boards and merchant jobs reset?', 'Job offerings rotate every 24 in-game hours or immediately after sleeping in a bed with a mattress. In Update 0.7.0, only beds equipped with mattresses allow sleeping to skip time.']
    ],
    related: ['scavland-anomaly-scanner-and-artifacts', 'scavland-hospital-quest-and-medical-supplies', 'scavland-factions-progression-and-traders', 'scavland-factions-and-reputation', 'scavland-sleep-and-world-reset-guide'],
    keywords: ['scavland main quest', 'scavland quests', 'scavland contracts', 'scavland storyline', 'scavland dead mans rest', 'scavland job tracking', 'scavland anatoly jobs', 'scavland nadja bounties', 'scavland contract reset', 'scavland orange quest items'],
    videoId: 'lmeGDw8lihw',
    videoTitle: 'Scavland Part 9 Catching Current',
    videoChannel: 'Zquietgamer'
  },
  { slug:'scavland-factions-and-reputation', shortTitle:'Factions & reputation', title:'Scavland Factions & Reputation Guide: 10 Organizations, Vendor Tiers & Raisa Truces', description:'Breakdown of Scavland’s 10 wasteland factions: Act I interactive syndicates, vendor tier unlocks, territory borders, and diplomatic truces with Raisa.', category:'Progression', image:'/images/cards/card_3_quests_factions.webp', imageAlt:'Faction interaction and outpost checkpoints across the Zalesye wasteland', evidence:'Official Steam announcements & community reports · Early Access 0.7.0', updated:'2026-09-16', answer:'Faction standing in Scavland directly controls trade prices, vendor inventory tiers, safehouse access, and roaming patrol hostility. The Early Access release features 6 active <strong>Act I</strong> factions (<strong>Rada</strong>, <strong>Commonfolk</strong>, <strong>Acolytes</strong>, <strong>Mechanists</strong>, <strong>Palatines</strong>, <strong>Gunners</strong>) alongside 9 named outpost merchants. Fulfilling daily contracts raises reputation (<strong>+50 to +200 Rep</strong>), while hostile standing (< -300 Rep) triggers shoot-on-sight orders that can be cleared by purchasing diplomatic reconciliation contracts from Raisa.', steps:['01 · Identify Interactive Act I Factions: Concentrate on the 6 active factions operating across the <strong>Zalesye</strong> sector in 0.6.3. The remaining 4 factions are scheduled for upcoming northern expansions.','02 · Unlock Vendor Inventory Tiers: Specialized traders (such as Mechanists and Gunners) hold military-grade weapons and optical attachments behind Tier 2 and Tier 3 reputation gates.','03 · Leverage Zero-Reputation Merchants: <strong>Trader Volodymyr</strong> requires zero reputation rank on his entire inventory, making him the premier emergency supplier for fresh spawns and disgraced scavengers.','04 · Avoid Cascading Hostility: Raiding faction checkpoints or completing assassination bounties drops standing with targeted groups. Dropping below -300 Rep makes border sentries permanently hostile.','05 · Clear Hostile Standings with Raisa: If marked hostile by a major syndicate, visit diplomat Raisa at the Neutral Chapel to purchase courier truce tasks and reset reputation back to neutral. In Hotfix 0.7.2, Raisa was updated to offer follow-up jobs without waiting for the current one to finish.'], facts:[['Act I Interactive Factions','6 active groups (Rada, Commonfolk, Acolytes, Mechanists, Palatines, Gunners)'],['Roadmap Factions','4 northern factions scheduled for Act II and Act III expansion releases'],['Zero-Rep Merchant','Trader Volodymyr at Crossroads annex sells weapons with zero rank requirements'],['Hostility Threshold','Reputation below -300 triggers shoot-on-sight sentry engagement'],['Diplomatic Reset','Raisa at Neutral Chapel offers truce courier contracts; Hotfix 0.7.2 allows follow-up jobs without waiting for current job completion'],['Verified Baseline','Early Access 0.7.0']], faq:[['How do I increase faction reputation in Scavland?','Complete repeatable <strong>24-hour</strong> daily contracts, turn in requested trade supplies (electronic boards, spark plugs), and eliminate rival bandit threats.'],['Can I trade with factions if I have negative reputation?','Vendors become inaccessible if your standing drops to Hostile (< -300 Rep). However, trader Volodymyr at the Crossroads annex always trades regardless of faction standing.'],['How do I stop a faction from shooting me on sight?','Visit diplomat Raisa at the Neutral Chapel and fulfill a non-violent courier reconciliation contract to reset your reputation back to Neutral (0 Rep).'],['Does Scavland feature full faction wars?','Yes. Factions maintain dynamic border conflicts and checkpoint patrols throughout Zalesye, creating organic firefights during overworld raids.']], related:['scavland-factions-progression-and-traders','scavland-quests-and-contracts','scavland-crafting-and-trading','scavland-faction-identification-and-hud-guide'], keywords:['scavland factions','scavland reputation','scavland 10 factions','scavland raisa reconciliation','scavland volodymyr trader'] },
  { slug:'scavland-mist', shortTitle:'The Mist', title:'Scavland Mist guide: hazards and exploration', description:'What the official material establishes about the Mist, plus a careful field-note format for testing its dangers.', category:'Exploration', image:'/images/cards/card_4_mist_exploration.webp', imageAlt:'A misty hazardous zone in Scavland', evidence:'Official Steam announcements', updated:'2026-08-29', answer:'Prepare for the <strong>Mist</strong> as an unpredictable environmental hazard. Use your <strong>Anomaly Scanner</strong> to detect spatial anomalies inside foggy zones, equip <strong>gas filters</strong>, and always maintain an emergency extraction heading.', steps:['Mark the edge of a <strong>Mist</strong> zone before committing supplies.','Equip the Anomaly Scanner on hotkey <strong>[3]</strong> to sweep for hidden spatial anomalies and artifacts.','Monitor radiation counters and filter integrity while operating in dense fog.','Leave an <strong>emergency beacon</strong> or compass bearing for the return trip.'], facts:[['Official scope','The Mist is a central world mystery and environmental danger.'],['Testing needed','Reliable resistance items, damage values and safe routes remain unverified.']], faq:[['Is the <strong>Mist</strong> a damage zone?','Yes, dense <strong>Mist</strong> clusters cause environmental toxicity, sensory disruption, and aggressive mutant spawns.'],['Can artifacts spawn in the Mist?','Yes, high-tier anomalies and valuable artifacts are frequently concentrated within deep Mist pockets.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-map-and-locations','scavland-beginner-guide'], keywords:['scavland mist','scavland mist guide','scavland fog hazards'] },
  {
    slug: 'scavland-map-and-locations',
    shortTitle: 'Map & Locations',
    title: 'Scavland Full Map & Locations Guide: Main Camps, Bunker Coordinates & Stash Hubs (Update 0.7.0)',
    description: 'Complete Scavland full map & locations guide: 3x expanded Zalesye world, Arcadia, Mechanist Base, Mudlark Camp, Microrayion stashes, Bunker B-4 landmarks, and safe routes.',
    category: 'Exploration',
    image: '/images/screenshots/ss_08_overworld_map.webp',
    imageAlt: 'Scavland overworld tactical map with location markers, outposts, and hazard boundaries',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-26',
    answer: 'Navigating the wasteland in Scavland centers around the central hub of <strong>Zalesye</strong> and the four major regional outposts: Arcadia, Mechanist Base, Mudlark Camp, and Microrayion. Since Early Access, the game world expanded roughly 3x in scale, introducing interconnected roads, faction territories, and secret underground complexes. In <strong>Update 0.7.0</strong>, crafting stations and player stashes were added to all four main camps, giving scavengers localized field bases across the map; non-village camp stashes feature one storage tab and maintain independent inventories from the main village stash. Subterranean Bunkers (such as <strong>Sector B-4</strong> located northwest of <strong>Zalesye</strong> past the railway embankment) operate on a 3-hour loot reset cycle and require a <strong>Red Keycard</strong> for entry. Resting across the map strictly requires beds with mattresses to skip time and restore vitality, while campfires provide doubled passive health regeneration. For comprehensive POI layout, inspect our [Tactical Map Hub](/maps/) and [Beginner Survival Guide](/guide/scavland-beginner-guide/).',
    steps: [
      '01 · 3x World Expansion & Tactical Map Overview: Since Early Access release, Scavland world map expanded roughly 3x in size across Zalesye, introducing paved road networks, faction-controlled outposts, and hazardous border zones. Use our [Tactical Map Hub](/maps/) alongside the in-game Journal Map [M] to track active player coordinates and sector borders.',
      '02 · Outpost Stashes & Crafting Stations (Update 0.7.0): Four primary regional outposts across Zalesye—Arcadia, Mechanist Base, Mudlark Camp, and Microrayion—feature dedicated Crafting Tables and Player Stashes. These camp lockers have one tab and do not share items with the village, providing secure local drop points for heavy salvage.',
      '03 · Main Village Operations Hub & Stash Expansions: The central neutral settlement of Zalesye remains your primary trading and operations base. While outpost lockers are fixed at one tab, the main village stash can be upgraded by purchasing stash expansions from Traders for 50,000 Rubles per additional tab.',
      '04 · Locating Subterranean Bunkers (Bunker B-4 Landmarks): Addressing player confusion over missing bunker entrances, underground military bunkers are reached by heading northwest from central Zalesye beyond the railway berm into Sector B-4. Look for low-profile reinforced concrete blast structures, hazard-striped steel bulkheads, and red radiation warning signs. Unlocking the inner vault requires a Red Keycard.',
      '05 · Bunker 3-Hour Loot Container Resets: Subterranean bunkers feature a dedicated 3-hour internal loot reset timer (180 in-game minutes) for military weapon crates and electronic components. Plan an efficient raid rotation between surface contracts and underground bunker sweeps.',
      '06 · Mattress Sleep Rules, Campfires & Border Safety: In Update 0.7.0, only beds with mattresses can be used for sleeping to pass time and restore health. In the field away from mattress beds, lit campfires grant doubled passive health regeneration. Be aware that world border sandbag walls block movement while preserving enemy visual line-of-sight.'
    ],
    facts: [
      ['World Scale', 'Scavland world map is roughly 3x larger with new settlements, roads, and faction territories'],
      ['Outpost Crafting & Stashes', 'Update 0.7.0 added crafting stations and stashes to Arcadia, Mechanist Base, Mudlark Camp, and Microrayion (independent inventory, 1 tab)'],
      ['Bunker B-4 Navigation', 'Underground military bunkers feature reinforced blast doors situated northwest of Zalesye beyond the railway berm'],
      ['Bunker Reset Timer', 'Subterranean bunkers reset loot containers every 3 in-game hours'],
      ['Village Stash Expansion', 'Main village stash can be expanded for 50,000 Rubles from Traders (Update 0.7.0)'],
      ['Mattress Sleep Requirement', 'Only beds with mattresses can be used for sleeping since Update 0.7.0'],
      ['Campfire Healing Buff', 'Update 0.7.0 doubled health regeneration rate at lit campfires'],
      ['Evidence Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['Where is the underground bunker entrance located on the map?', 'Bunker entrances (such as <strong>Sector B-4</strong>) are situated northwest of central <strong>Zalesye</strong> beyond the northern railway embankment. Look for low-profile reinforced concrete structures with yellow-and-black hazard striping and heavy blast doors. A <strong>Red Keycard</strong> is required to unlock the inner vault.'],
      ['Do outpost stashes share items with the main village stash?', 'No. Stashes at Arcadia, Mechanist Base, Mudlark Camp, and Microrayion feature one storage tab and maintain independent local inventories that do not sync with the central village stash.'],
      ['How often do underground bunkers reset their loot containers?', 'Subterranean bunkers operate on a 3-hour physical reset cycle (180 in-game minutes) once the player exits the zone, allowing repeatable farming runs between surface contracts.'],
      ['How do I expand my permanent stash capacity?', 'Visit a Trader in the central village and purchase a Stash expansion for 50,000 Rubles to unlock an additional Stash tab. Outpost camp stashes cannot currently be expanded.'],
      ['Where can I sleep on the map to pass time and restore health?', 'Since Update 0.7.0, only beds with mattresses can be used for sleeping. When away from mattress beds, resting beside a lit campfire grants doubled passive health regeneration.']
    ],
    related: ['scavland-beginner-guide', 'scavland-red-keycard-and-bunker-loot-recovery', 'scavland-crafting-and-trading', 'scavland-loot-and-scavenging', 'scavland-quests-and-contracts'],
    keywords: ['scavland map', 'scavland full map', 'scavland map game', 'scavland game map', 'scavland locations', 'scavland bunker location', 'scavland bunker entrance', 'scavland arcadia', 'scavland mechanist base', 'scavland mudlark camp', 'scavland microrayion', 'scavland interactive map', 'scavland map guide'],
    videoId: 'yG9k2NjxSWs',
    videoTitle: 'We Found ARCADIA! Deep Into Bandit Territory | SCAVLAND',
    videoChannel: 'Mr Feudal'
  },
  {
    slug: 'scavland-crafting-and-trading',
    shortTitle: 'Crafting & trading',
    title: 'Scavland Crafting & Trading Guide: Workbench Recipes, Campfire Cooking & Barter Loops',
    description: 'Complete Scavland crafting, cooking, and merchant guide: safehouse workbench recipes, campfire water boiling, stamina recovery, medical blueprints, and trader specialization.',
    category: 'Systems',
    image: '/images/screenshots/ss_05_inventory_management.webp',
    imageAlt: 'Scavland crafting workbench, ammunition manufacturing and trading inventory interface',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-16',
    answer: 'Crafting and trading in Scavland operate hand-in-hand at settlement safehouses and campfires across <strong>Zalesye</strong>. While Scavland does not feature an elaborate culinary minigame, campfire thermal processing and cooking are vital for survival: boiling contaminated water canteens over open flames produces clean potable water (preventing radiation poisoning and dysentery), while eating provisions, canned <strong>Tushonka</strong>, and dried meats restores hunger and sustains your maximum stamina pool (150 in <strong>Explorer Mode</strong>, 100 in <strong>Returner</strong> and <strong>Iron Man</strong>). In <strong>Update 0.7.0</strong>, stashes and crafting tables were added to all main camps. At safehouse workbenches, craft essential ammunition, medical kits, and cleaning tools from scrap metal, weapon springs, clean cloth, and gunpowder. For related nutrition and medical item details, explore our [Consumables & Medical Guide](/guide/scavland-consumables-and-medical-supplies/), [Loot & Scavenging Guide](/guide/scavland-loot-and-scavenging/), or [Merchant Prices & Barter Guide](/guide/scavland-merchant-prices-and-barter-guide/).',
    steps: [
      '01 · Campfire Cooking & Water Purification: Campfires in safe camps and outposts act as primary survival stations. Place Contaminated Water canteens directly on a lit campfire to boil clean potable water. Sleeping near campfires or beds restores health (5 health per in-game hour in beds) and skipping time keeps the world simulation active.',
      '02 · Nutrition & Stamina Cap Management: Scavland food crafting is streamlined—consume canned rations (<strong>Tushonka</strong>, sardines, beans) and dried meats to keep Hunger low. Neglecting food depletes stamina regeneration and caps maximum stamina below baseline (150 in <strong>Explorer Mode</strong>, 100 in <strong>Returner</strong> and <strong>Iron Man</strong>).',
      '03 · Master Workbench Crafting Loops: At safehouse workbenches, combine 2x Metal Scrap + 1x Weapon Spring to assemble Basic Gun Cleaning Kits. For ammunition, combine Gunpowder with Lead Pellets to produce 12-Gauge Buckshot or 9x18mm rounds.',
      '04 · Exploit Trader Category Specialization: Traders specialize in specific goods: Zhivan pays 140% for Common items, Vesna 75%, and Nadja 90% for Common and 80% for Crafting items. Grigory no longer buys food or medical items, paying premiums for weapon attachments instead.',
      '05 · Trader Rank Value Bonus (Update 0.7.0): In Update 0.7.0, traders pay an additional 5% sell value per Trader Rank. Completing jobs and selling specialized wares rapidly accelerates ruble earnings.',
      '06 · Unrestricted Trading with Volodymyr: If your faction reputation has dropped from hostile engagements, trader Volodymyr at the Crossroads annex continues to buy and sell all items without reputation rank restrictions.'
    ],
    facts: [
      ['Campfire Cooking & Boiling', 'Campfires purify contaminated water canteens into clean water; food is eaten to prevent stamina cap penalties'],
      ['Stamina Pool Baselines', 'Maximum stamina is 150 in Explorer Mode and 100 in Returner and Iron Man modes'],
      ['Safehouse Workbenches', 'Stashes and crafting tables were added to all main camps in Update 0.7.0'],
      ['Trader Rank Bonus', 'Traders pay an additional 5% sell value per Trader Rank since Update 0.7.0'],
      ['Specialized Vendor Payouts', 'Zhivan pays 140% for Common items, Vesna 75%, Nadja 90% for Common and 80% for Crafting items'],
      ['Universal Repair Kits', 'Gun and Armor Repair Kits can now be used regardless of equipment damage condition (Update 0.7.0)'],
      ['Verified Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['How does cooking work in Scavland?', 'Scavland does not have a complex cooking menu with raw meat recipes. Instead, food is eaten as packaged provisions (canned Tushonka, dried meat, sardines) to satisfy hunger and prevent stamina cap penalties. Campfires are used to boil contaminated water canteens into clean potable water.'],
      ['Why is my maximum stamina reduced?', 'Severe hunger, thirst, or exhaustion penalizes your stamina bar. Keep your character fed with rations and hydrated with boiled clean water to maintain full stamina (150 in Explorer Mode, 100 in Returner and Iron Man).'],
      ['Which trader gives the best price for crafting components?', 'Nadja pays 80% for Crafting items and 90% for Common goods. Grigory no longer purchases food, medical, or crafting items, focusing on weapon attachments.'],
      ['What changed with crafting and stashes in Update 0.7.0?', 'Stashes and crafting tables were added to all main camps across Zalesye. Stash expansions can also be purchased from a Trader for 50,000 Rubles to unlock an additional Stash tab in the main village.']
    ],
    related: ['scavland-starter-loadouts-and-budget-builds', 'scavland-weapons-and-attachments', 'scavland-quests-and-contracts', 'scavland-merchant-prices-and-barter-guide'],
    keywords: ['scavland crafting recipes', 'scavland trading guide', 'scavland workbench recipes', 'scavland cooking', 'scavland food crafting', 'scavland campfire cooking', 'scavland campfire healing', 'scavland stamina recovery', 'scavland medical blueprints', 'scavland volodymyr trader'],
    videoId: '6aY3Lfc_w8g',
    videoTitle: 'Scavland Locations of Merchants Selling Important Items',
    videoChannel: 'Game Detox Dopamine'
  },
  {
    slug: 'scavland-weapon-repair-and-durability',
    shortTitle: 'Weapon Repair & Durability',
    title: 'Scavland Weapon Repair & Durability Guide: Field Tools, Workbench Kits & Jam Fixes',
    description: 'Scavland weapon repair guide: field tools without Gun Lube, durability and jamming changes in Updates 0.5.169 and 0.7.0, Volodymyr Rank 2 blueprints, and universal kits.',
    category: 'Gear',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: 'Tactical weapon modification and workbench repair interface in Scavland',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-28',
    answer: 'Firearms in Scavland degrade with every shot fired, accelerating 2x faster in muddy or irradiated zones. When condition drops below 50%, jam probability increases exponentially. In mid-game raids, scavengers frequently loot high-tier military firearms severely degraded at 30% to 45% condition. While players often struggle to restore these guns with basic cleaning rods, <strong>Update 0.7.0</strong> made Gun and Armor <strong>Repair Kits</strong> usable regardless of how damaged equipment is, eliminating previous minimum durability lockouts. For permanent crafting, arms dealer Volodymyr sells the Advanced Weapon Repair Kit recipe once you attain Trader Rank 2. Additionally, field repair thresholds have been lowered: Glue and Gun Lube can now be applied from <strong>80% durability</strong> (previously 85%), while Cleaning Rods and Field <strong>Repair Kits</strong> are usable from 70% (previously 75%). For comprehensive weapon statistics, consult our [Weapons Arsenal](/weapons/), check [Merchant Prices](/guide/scavland-merchant-prices-and-barter-guide/) for repair parts trading, or review the [Tactical Database](/guide/scavland-tactical-database-weapons-loot/).',
    steps: [
      '01 · Monitor weapon condition: guns can explode below 30% condition since <strong>Update 0.5.169</strong>. <strong>Update 0.7.0</strong> increased durability across almost the entire arsenal, made jamming begin later and occur less often, and lowered the hard-jam chance at <strong>10% durability</strong> from 45% to 33%.',
      '02 · Universal <strong>Repair Kits</strong> (<strong>Update 0.7.0</strong>): Gun and Armor <strong>Repair Kits</strong> can now be used regardless of how damaged your equipment is, eliminating situations where broken gear below 50% was impossible to service.',
      '03 · Volodymyr Rank 2 Advanced Blueprint: If you need to craft your own high-tier maintenance supplies, level up reputation with arms dealer Volodymyr in the Crossroads Annex. Volodymyr\'s Advanced Weapon Repair Kit recipe unlocks for purchase at Trader Rank 2.',
      '04 · World Loot Repair Kit Rarities: Repair Kits spawn naturally as world loot across military containers with tiered rarities: Tattered / Scrap are Rare, Scavenger / Basic are Very Rare, and Advanced / Expert / Medium / Heavy are Ultra Rare.',
      '05 · Field Maintenance Thresholds: Update 0.5.169 removed the Gun Lube requirement from Gun Field Tools. In Update 0.7.0, Glue and Gun Lube can be used from 80% durability (previously 85%), while Cleaning Rods and Field Repair Kits can be used from 70% durability (previously 75%).',
      '06 · Clearing In-Combat Stovepipes: If your trigger clicks without firing, immediately double-tap the reload key [R] or rack the bolt to eject the defective casing. Disengage behind cover to evaluate barrel fouling before continuing the firefight.',
      '07 · Incoming Damage Distribution: In Update 0.7.0, incoming damage is distributed across the different gear pieces you are wearing, preventing single armor pieces from degrading disproportionately.'
    ],
    facts: [
      ['Jamming Mitigation', 'Begins later and occurs less often since Update 0.7.0; hard-jam chance at 10% durability is 33%, down from 45%'],
      ['Universal Repair Kits', 'Gun and Armor Repair Kits can now be used regardless of how damaged your equipment is (Update 0.7.0)'],
      ['Volodymyr Blueprint', 'Volodymyr sells Advanced Weapon Repair Kit recipe at Trader Rank 2 (Update 0.6.0)'],
      ['Repair Kit Loot Tiers', 'World loot: Tattered/Scrap (Rare), Scavenger/Basic (Very Rare), Advanced/Expert/Medium/Heavy (Ultra Rare)'],
      ['Field Tool Thresholds', 'Glue & Gun Lube from 80% (prev 85%); Cleaning Rods & Field Repair Kits from 70% (prev 75%)'],
      ['Field tool independence', 'Update 0.5.169 removed the Gun Lube requirement from Gun Field Tools'],
      ['Damage Distribution', 'Incoming damage is now distributed across the different gear pieces you wear (Update 0.7.0)'],
      ['Armor Kit Glue Discount', 'Heavy armor repair kit recipe glue requirement reduced in Patch v0.5.169'],
      ['Gunsmith Relocation', 'Petar the gunsmith relocated adjacent to Grigory in central Zalesye market'],
      ['Verified Baseline', 'Official Steam announcements · Update 0.7.0']
    ],
    faq: [
      ['How do I clear a weapon jam during combat?', 'Press the reload key [R] twice or manually cycle the bolt to eject the jammed casing and chamber a fresh cartridge. Retreat behind hard cover if under automatic fire.'],
      ['How do I repair advanced military guns sitting at 30-40% durability?', 'In Update 0.7.0, Gun and Armor Repair Kits can now be used regardless of how damaged your equipment is. You can obtain Repair Kits as world loot (Scavenger/Basic: Very Rare, Advanced/Expert: Ultra Rare), buy the Advanced Weapon Repair Kit recipe from arms dealer Volodymyr once you reach Trader Rank 2, service weapons with Cleaning Rods and Field Repair Kits from 70% durability (Glue & Gun Lube from 80%), or pay Gunsmith Petar in the central Zalesye market for repairs.'],
      ['Where do I get the Advanced Weapon Repair Kit blueprint?', 'Volodymyr sells the Advanced Weapon Repair Kit recipe at Trader Rank 2. Complete weapon delivery and attachment contracts to raise your reputation standing with him.'],
      ['Do field repair tools still require Gun Lube?', 'No. Update 0.5.169 removed the Gun Lube requirement from the basic Gun Field Tool, so you can perform emergency maintenance without spending lube.'],
      ['Where do I find Gunsmith Petar for advanced weapon repairs?', 'Petar was relocated in v0.5.169 from the southern perimeter directly into the central Zalesye settlement square next to trader Grigory.'],
      ['What materials are required to repair heavy armor vests?', 'Heavy Armor Repair Kits require Ballistic Fiber, Sheet Metal Scrap, and Industrial Glue (glue cost discounted in v0.5.169).'],
      ['What spare parts should I carry for emergency field repairs?', 'Always carry 2x Weapon Springs, 1x Electronic Relay, and 1x Gun Field Tool in your tactical rig. In irradiated sectors where weapon degradation accelerates by 2x, these components let you restore guns above the 70% threshold without returning to base.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-cheats-and-console-commands', 'scavland-sleep-and-world-reset-guide', 'scavland-merchant-prices-and-barter-guide'],
    keywords: ['scavland weapon repair', 'scavland gun durability', 'scavland clear jam', 'scavland gun maintenance', 'scavland gun field tool', 'scavland petar location', 'scavland no blueprint weapon repair', 'scavland volodymyr repair blueprint', 'scavland mosin repair'],
    videoId: 'G2QsRe2kj_I',
    videoTitle: 'Scavland 0.7.2 "Expert" Weapon Repair Kit: Blueprint, Unlock Requirements, and Details',
    videoChannel: 'Game Detox Dopamine'
  },
  { slug:'scavland-mist-survival-and-radiation', shortTitle:'Mist & Radiation', title:'Scavland Mist survival guide: radiation protection & hazard zones', description:'Surviving the toxic Mist, managing gas mask filter degradation, and farming high-tier artifacts safely in Zalesye.', category:'Exploration', image:'/images/screenshots/steam_ss_09.webp', imageAlt:'A scavenger navigating dense Mist and radiation hazards with a detector', evidence:'Official Steam announcements', updated:'2026-08-31', answer:'The <strong>Mist</strong> is a dynamic weather event that blankets sectors in toxic particulates and psychoactive anomalies. Entering the <strong>Mist</strong> requires a <strong>Gas Mask</strong> with active Filter Durability, Anti-Rad Meds, and an <strong>Anomaly Scanner</strong>. In return, the <strong>Mist</strong> triggers the highest tier artifact spawns and rare mutant drops.', steps:['Check the weather barometer or radio broadcast for incoming <strong>Mist</strong> warnings before venturing into open lowlands.','Equip a Gas Mask with at least <strong>80%</strong> filter charge; carry spare charcoal filter cartridges in quick slots.','Equip the Anomaly Scanner on hotkey <strong>[3]</strong> to sweep for anomaly clusters that only materialize during Mist events.','Avoid prolonged firefights in fog, as gunfire attracts specialized nocturnal stalker mutants.','Use <strong>Rad-Away</strong> injectors and <strong>charcoal pills</strong> immediately if your radiation dosage meter enters the yellow hazard zone.'], facts:[['Dynamic shift','Mist weather alters mutant aggression patterns, increases anomaly frequency, and reduces vision radius to 15 meters.'],['Loot quality','Artifacts spawned during dense Mist cycles possess 2x barter value and enhanced passive stat modifiers.']], faq:[['How long do gas mask filters last in the <strong>Mist</strong>?','Standard Tier-1 filters last approximately 8 minutes in active <strong>Mist</strong>; high-grade military filters last up to 20 minutes.'],['What happens if my filter runs out in the Mist?','Your character incurs progressive radiation poisoning and toxic lung damage, draining stamina and max health.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-mist','scavland-death-and-loot-recovery'], keywords:['scavland mist survival','scavland gas mask filters','scavland radiation guide','scavland anomaly farming'] },
  {
    slug: 'scavland-tactical-database-weapons-loot',
    shortTitle: 'Tactical Database',
    title: 'Scavland Tactical Database: Weapon Durability, Jamming & Loot Extraction',
    description: 'Breakdown of weapon durability and jamming in Scavland after Updates 0.5.169 and 0.7.0, plus reliable loot extraction.',
    category: 'Tactical Guide',
    image: '/images/screenshots/steam_ss_11.webp',
    imageAlt: 'Scavland Mikhail 74U tactical weapon workbench showing durability stats and attachment slots',
    evidence: 'Official Steam announcements',
    updated: '2026-09-06',
    answer: 'Weapon condition in Scavland is tracked per item and maintenance is part of the survival loop. Durability and repair were reworked twice after launch: <strong>Update 0.5.169</strong> made Guns able to explode below <strong>30% durability</strong> (previously 50%) and removed the Gun Lube requirement from Gun Field Tools; <strong>Update 0.7.0</strong> then made a major pass in which weapons last significantly longer, jamming begins later and happens less often (hard-jam chance at <strong>10% durability</strong> fell from 45% to 33%), and <strong>Repair Kits</strong> can be used regardless of how damaged your equipment is.',
    steps: [
      '01 · Watch the condition bar: Guns can explode below 30% condition since <strong>Update 0.5.169</strong>, so do not deploy with a badly worn firearm. Scrap-tier weapons also lose durability faster than Basic-tier ones.',
      '02 · Field maintenance: Gun Field Tools no longer require Gun Lube since <strong>Update 0.5.169</strong>. In <strong>Update 0.7.0</strong>, Cleaning Rods and Field <strong>Repair Kits</strong> became usable from <strong>70% durability</strong>, previously 75%.',
      '03 · Clearing jams: When a click replaces the shot, rack the bolt to clear the round. Jamming begins later and occurs less frequently since <strong>Update 0.7.0</strong>.',
      '04 · Death recovery: Equipped gear and backpack contents drop at your death coordinate, which stays on the map for recovery; the stash is a separate, shared inventory you keep.'
    ],
    facts: [
      ['Durability', 'Guns can explode below 30% condition since Update 0.5.169; weapon durability increased significantly across the arsenal in Update 0.7.0'],
      ['Hard-jam chance', 'At 10% durability, reduced from 45% to 33% in Update 0.7.0'],
      ['Repair Kits', 'Usable regardless of how damaged your equipment is (Update 0.7.0); Glue and Gun Lube apply from 80% durability'],
      ['Backpack Drop Mechanics', 'Equipped gear and backpack contents drop at your death coordinate and remain there for recovery'],
      ['Thread Cutter footprint', 'Update 0.6.0 rebalanced many long guns, including the Thread Cutter, to occupy 3 inventory rows instead of 2'],
      ['Latest documented build', 'Update 0.7.0 plus Hotfix 0.7.1 (16 September 2026)']
    ],
    faq: [
      ['How does weapon jamming work in Scavland?', 'Weapons wear with every round fired, so jamming becomes likelier as condition falls. At <strong>10% durability</strong> the hard-jam chance is 33%, reduced from 45% in Update 0.7.0, and jamming now begins later and occurs less often. Guns can explode below 30% durability.'],
      ['Can I recover my backpack after dying in Scavland?', 'Yes. Scavland is a persistent survival RPG rather than a permadeath roguelite: your dropped gear and backpack stay at the death site for recovery, and your stash is a separate, shared inventory you keep.'],
      ['What is the best way to maintain weapon condition?', 'Use field maintenance between fights — Gun Field Tools no longer require Gun Lube — and heavier repair at a workbench, where Gun and Armor Repair Kits can be used regardless of how damaged the item is. Lube and Glue can be applied from 80% durability.'],
      ['What is the tactical purpose of the Thread Cutter rifle?', 'The Thread Cutter sits in Scavland\u2019s arsenal of 25+ weapons. Update 0.6.0 rebalanced many long guns, including the Thread Cutter, from 2 inventory rows to 3, so carrying long-range firepower trades off against pack space; Update 0.7.0 improved its accuracy, range, durability and fire rate.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-weapon-repair-and-durability'],
    keywords: ['scavland beginner guide', 'scavland weapon durability', 'scavland weapon jamming', 'scavland gun repair', 'scavland cleaning oil'],
    videoId: 'xQKTC-8BYVU',
    videoTitle: 'Scavland 0.7.2 "Expert" Firearm Damage Test (Target: Bear)',
    videoChannel: 'Game Detox Dopamine'
  },
  {
    slug: 'scavland-early-access-launch-faq-and-roadmap',
    shortTitle: 'EA Scope & FAQ',
    title: 'Scavland Early Access Scope: Factions, Progression & Known Launch Issues',
    description: 'Everything about Scavland Early Access launch (0.6.3): singleplayer progression across 10 factions, roadmap expectations, and UI behaviors.',
    category: 'Progression',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: 'Scavland Early Access wasteland settlement camp exploration and faction NPC dialogue',
    evidence: 'Official Steam announcements',
    updated: '2026-09-06',
    answer: 'Scavland Early Access delivers a dedicated singleplayer post-apocalyptic survival experience featuring <strong>Act I</strong>, <strong>10</strong> dynamic faction reputation pools, and <strong>25+</strong> weapons with <strong>300+</strong> attachments. Rather than traditional skill trees, character advancement is driven by faction standing, gear optimization, and trader network progression.',
    steps: [
      '01 · Faction Standing: Gain reputation with major factions (including <strong>Red Common Folk</strong>, <strong>Acolytes</strong>, and <strong>Mechanists</strong>) by completing contracts rather than searching for skill points.',
      '02 · Night Raid Awareness: Visibility drops drastically after nightfall in <strong>Zalesye</strong>; equip weapon flashlights and avoid open sprint routes.',
      '03 · Visual Feedback Note: In Early Access the current Early Access build, equipped body armor modifications do not alter character sprite models; stats apply correctly in the inventory tab.',
      '04 · macOS Support Status: The native Mac build is currently undergoing Apple App Store review and will be released in an upcoming patch.'
    ],
    facts: [
      ['Progression Model', 'Gear and reputation-driven; no artificial RPG skill trees'],
      ['Faction Count', '10 distinct wasteland factions with competitive vendor tiers'],
      ['Early Access Duration', 'Estimated 12 to 24 months through Acts II and III'],
      ['Current Version', '0.6.3 (September 4, 2026 launch)']
    ],
    faq: [
      ['Does Scavland have a character skill tree?', 'No. Scavland deliberately avoids arbitrary skill point trees. Your survivability is determined by tactical positioning, faction reputation unlocks, and weapon attachment configurations.'],
      ['Why doesn\'t my character sprite change when equipping armor?', 'In the current Early Access build, armor sprites are purely internal inventory assets; developer notes confirm visual cosmetic layering is queued for future updates.'],
      ['Is multiplayer coop supported at EA launch?', 'Early Access launches with focused singleplayer survival. <strong>Multiplayer coop</strong> and companion AI are planned for later roadmap milestones.']
    ],
    related: ['scavland-factions-and-reputation', 'scavland-quests-and-contracts', 'scavland-beginner-guide'],
    keywords: ['scavland early access', 'scavland factions', 'scavland progression', 'scavland roadmap', 'scavland launch build'],
    videoId: 'GKck5sYNwGw',
    videoTitle: 'Scavland - Early Access Release Date Trailer',
    videoChannel: 'Scavland (Official)'
  },
  {
    slug: 'scavland-night-survival-and-stealth-mechanics',
    shortTitle: 'Night Survival & Stealth',
    title: 'Scavland Night Survival Guide: Audio Radii, Flashlights & Nocturnal Mutations',
    description: 'Early Access survival guide for night raids: handling the 10-meter flashlight cone, suppressor audio radius, fast looting, and predator ambushes.',
    category: 'Survival',
    image: '/images/screenshots/ss_01_ruins_night.webp',
    imageAlt: 'Scavland nocturnal exploration through dark ruins with weapon flashlight cone',
    evidence: 'Official Steam announcements & community reports',
    updated: '2026-09-10',
    answer: 'Surviving after dark in Scavland requires fundamental sensory discipline: outside illuminated settlement hubs, your effective visibility collapses to a narrow <strong>10-meter</strong> flashlight cone, while aggressive nocturnal stalkers spawn exclusively between <strong>21:00</strong> and <strong>05:30</strong>. Unsuppressed rifle fire generates a <strong>200-meter</strong> audio ripple that triggers cascading aggro from adjacent ruins, making sub-caliber suppressed handguns, doorway funneling tactics, and swift <strong>Shift+Click</strong> container looting essential for nocturnal runs. If nocturnal stalkers prove too lethal for early-game gear, scavengers can safely bypass night darkness entirely by resting on safehouse bunker bunks — detailed in our dedicated [Scavland Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/).',
    steps: [
      '01 · Suppressor Sound Radius: Unsuppressed rifle fire alerts mutants across a <strong>200m</strong> radius. Equipping a suppressor on <strong>9x18mm or 9x19mm</strong> sidearms shrinks your audible footprint down to ~25 meters, allowing isolated takedowns without waking the entire district.',
      '02 · Flashlight Discipline in the Open: Keep your weapon flashlight switched OFF in open wasteland fields; illuminated cones draw hostile bandit snipers from over <strong>40 meters</strong> away. Only toggle illumination when clearing tight, blind-cornered rooms.',
      '03 · Narrow Doorway Funneling: When ambushed by high-speed nocturnal stalkers, disengage backward into narrow concrete doorways or freight containers. Funneling pack enemies into a single column eliminates the risk of being flanked or circled in open terrain.',
      '04 · Shift+Click Swift Looting: Never drag items individually from loot containers. In Early Access 0.6.3, holding [Shift+Click] instantly transfers container stacks to your rig, cutting vulnerable stationary looting time by 80%.',
      '05 · Armor Visual Sprite Notice: Equipping high-tier body armor plates or helmets currently does not alter your character\'s in-game pixel art sprite. Damage reduction mechanics function properly, but visual paper-doll customization is confirmed as a work-in-progress EA known rough edge.'
    ],
    facts: [
      ['Wasteland Night Visibility', 'Shrinks to ~10 meters flashlight cone outside illuminated settlement hubs'],
      ['Unsuppressed Rifle Audio', 'Alerts mutant packs and hostile scavengers within a 200-meter radius'],
      ['Suppressed Sidearm Audio', 'Dampens detection footprint down to ~25 meters (Makarov & 9mm pistols)'],
      ['Nocturnal Spawns Window', 'Exclusive high-tier stalkers and mist predators only patrol between 21:00 and 05:30'],
      ['Quick Looting Shortcut', 'Shift+Click instantly transfers item stacks from containers into inventory'],
      ['Character Armor Visuals', 'Sprite does not change with armor (known EA cosmetic limitation; stat DR works)'],
      ['Verified Baseline', 'Splattercatgaming & The Singleplayer Squad Early Access launch evaluations']
    ],
    faq: [
      ['Is night scavenging worth the extreme risk in Scavland?', 'Yes. Nighttime incursions yield significantly higher anomaly artifact drop rates, rare safehouse loot container resets, and unpicked medicinal herbs, though survival risk doubles due to restricted vision.'],
      ['Do mutants hear my footsteps while moving?', 'Yes. Full sprinting creates substantial audio cues audible through walls and ceilings. Crouch-walking completely dampens footstep noise, enabling silent melee takedowns from behind.'],
      ['Why does my character look identical after equipping heavy armor?', 'This is a verified Early Access limitation in 0.6.3. While physical and ballistic damage reduction stats apply correctly in the inventory inspect panel, character sprite updates are scheduled for future content updates.'],
      ['How do I skip night in Scavland?', 'Return to any unlocked settlement safehouse or bunker cot before 21:00 and sleep until 06:00 daylight to skip nocturnal mutants safely. See our dedicated Sleep & World Reset Guide for full hydration and bunker reset rules.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-death-and-loot-recovery', 'scavland-sleep-and-world-reset-guide'],
    keywords: ['scavland night survival', 'scavland stealth mechanics', 'scavland audio detection radius', 'scavland night mutants', 'scavland flashlight discipline', 'scavland shift click loot', 'scavland sleep night', 'scavland skip night']
  },
  {
    slug: 'scavland-factions-progression-and-traders',
    shortTitle: 'Factions & Progression',
    title: 'Scavland 10 Factions & Progression Guide: No Skill Tree, Vendor Tiers & Daily Contracts',
    description: 'Character progression in Scavland: zero artificial skill trees, 10 wasteland factions, trader inventory tiers, and 24-hour contract refreshes.',
    category: 'Progression',
    image: '/images/screenshots/steam_ss_12.webp',
    imageAlt: 'Scavland in-game jobs journal showing Anatoly contract, reputation rewards, and faction relations',
    evidence: 'Official Steam announcements & community reports · Early Access 0.7.0',
    updated: '2026-09-06',
    answer: 'Progression in Scavland is strictly systemic and economic rather than level-based: there are zero artificial skill trees, stat points, or unlockable character perks. Your survivor\'s durability, combat lethality, and carry capacity are determined entirely by gear tier, workbench maintenance, and standing with <strong>Zalesye</strong>\'s <strong>10</strong> wasteland factions. Specialized faction vendors unlock military-grade trade inventories only as you fulfill repeatable 24-hour contracts.',
    steps: [
      '01 · Understand No Skill Tree Mechanics: Do not look for experience points or leveling menus. Character growth is measured through wealth accumulation, modded firearms, body armor tier, and faction trust ratings.',
      '02 · Faction Trade Specialization: Never sell goods indiscriminately. The <strong>Mechanists</strong> provide high-tier weapon attachments and workbench repair scrap; the <strong>Red Common Folk</strong> supply food, potable water, and medical bandages; and the <strong>Gunners</strong> stock high-penetration AP ammunition.',
      '03 · Daily 24-Hour Contract Cycles: Job pools offered by key handlers (including <strong>Anatoly</strong> and <strong>Nadja</strong>) reset every <strong>24 in-game hours</strong> or upon sleeping in a designated safehouse bunker bed. Always accept contracts matching your intended raid vector.',
      '04 · High-Value Bounty Targets: Progress from introductory Bandit Hunts and Mutant Exterminations to priority bounties targeting <strong>Hellhounds</strong>, <strong>Big Bears</strong>, and <strong>Splatters</strong> to earn elite faction reputation tokens and cash bonuses.',
      '05 · Rival Faction Standing: Supporting militant syndicates will actively decrease your standing with neutral survivor enclaves; monitor faction balance before committing to high-reward assault contracts.'
    ],
    facts: [
      ['Progression Model', '100% economy, weapon attachments, and faction reputation; zero artificial skill trees'],
      ['Named Major Factions', 'Red Common Folk, Mechanists, Palatines, Gunners, Acolytes, and regional syndicates'],
      ['Mechanists Specialty', 'Tier 2 & Tier 3 weapon attachments, optics, receivers, and ultrasonic repair kits'],
      ['Red Common Folk Specialty', 'Fresh provisions, clean water, sterile bandages, and basic caliber ammunition'],
      ['Contract Reset Interval', 'Job rosters refresh every 24 in-game hours or upon sleeping in safehouse'],
      ['Elite Bounty Targets', 'Hellhounds, Big Bears, and toxic Splatters award maximum reputation tokens'],
      ['Verified Baseline', 'The Singleplayer Squad EA Review & Steam Community Gordon Tactical Directory']
    ],
    faq: [
      ['Can I unlock passive perks or stats in Scavland?', 'No. Scavland features no arbitrary leveling perks. Passive buffs come from equipping rare artifacts, body armor plates, and modified weapon ergonomics.'],
      ['How do I increase trader inventory tiers?', 'Completing high-priority contracts for a faction unlocks Tier 2 and Tier 3 vendor stock, granting access to advanced optics, armor-piercing ammunition, and suppressors.'],
      ['Can aiding one faction make another hostile?', 'Yes. Competing factions maintain bitter rivalries; elevating standing with militant groups will decrease trust with opposing survivor syndicates.'],
      ['What is the best way to earn early rubles?', 'Take basic scavenging contracts from the Red Common Folk in the starting settlement and sell medical supplies specifically to doctors and weapon parts to gunsmiths for full value.']
    ],
    related: ['scavland-factions-and-reputation', 'scavland-quests-and-contracts', 'scavland-crafting-and-trading'],
    keywords: ['scavland factions guide', 'scavland progression system', 'scavland no skill tree', 'scavland trader tiers', 'scavland daily contracts', 'scavland mechanists'],
    videoId: 'CNmucSzrD0o',
    videoTitle: 'Our Reputation Is PAYING OFF! Rank 2 Traders Unlocked | SCAVLAND',
    videoChannel: 'Mr Feudal'
  },
  {
    slug: 'scavland-coop-and-multiplayer-mechanics',
    shortTitle: 'Co-op & Multiplayer',
    title: 'Scavland Co-op & Multiplayer Guide: Early Access Status, Roadmap & Squad Extraction',
    description: 'Current multiplayer status for Scavland Early Access: dedicated singleplayer design, developer co-op roadmap plans, Steam Remote Play, and solo tips.',
    category: 'Systems',
    image: '/images/screenshots/steam_ss_06.webp',
    imageAlt: 'Two scavengers holding perimeter defensive positions near a bunker entrance in Scavland',
    evidence: 'Official Steam announcements',
    updated: '2026-09-10',
    answer: 'Scavland launched into Steam Early Access (<strong>0.6.3</strong>) as a strictly singleplayer post-apocalyptic survival RPG. The developer confirmed that while the core game loop is balanced around solitary atmospheric tension, no cooperative mode has been announced in any official Steam post. Players seeking shared sessions can currently utilize <strong>Steam Remote Play Together</strong> for local screen-share coordination or practice proxy squad tactics alongside friendly faction patrols.',
    steps: [
      '01 · Early Access Solo Focus: Acknowledge that Day 1 Early Access features no native peer-to-peer or dedicated server networking; all progression and stashes are local to your singleplayer save.',
      '02 · Developer Co-op Roadmap: Multiplayer co-op is formally slated for upcoming roadmap phases following foundational combat polish and northern map expansions.',
      '03 · Proxy Fireteam Tactics: In high-threat military zones, trail behind friendly <strong>Rada</strong> or <strong>Commonfolk</strong> patrol squads to draw fire from hostile snipers and mutant packs.',
      '04 · Steam Remote Play Options: For couch co-op enthusiasts, <strong>Steam Remote Play Together</strong> allows a spectator/tactical co-pilot to manage inventory mapping and radio scanner frequencies.',
      '05 · Solo Extraction Discipline: Without a teammate to revive you, always carry a <strong>Tourniquet</strong> and <strong>Hemostatic Bandage</strong> in quick slots 4 and 5 to halt lethal bleeding instantly.'
    ],
    facts: [
      ['Current Networking State', '100% singleplayer immersion; zero native online multiplayer in 0.6.3'],
      ['Roadmap Commitment', 'The developer confirmed cooperative multiplayer is slated for Phase 2/3 development'],
      ['Revive Mechanics', 'No teammate revives currently exist; death immediately drops backpack at point of failure'],
      ['Faction Proxy Support', 'Allied faction squads can be leveraged as organic fire support during overworld skirmishes'],
      ['Verified Baseline', 'Official Steam Store Specification & Developer Q&A']
    ],
    faq: [
      ['Is there multiplayer or co-op in Scavland?', 'Not currently. Scavland is designed from the ground up as a focused <strong>singleplayer</strong> hardcore survival RPG. However, <strong>co-op multiplayer</strong> is officially scheduled in the Early Access roadmap.'],
      ['Can I play Scavland with friends using mods?', 'Community modders are exploring basic netcode hooks, but official multiplayer will arrive with dedicated developer backend support in future major content milestones.'],
      ['What happens when you die without a squad?', 'Your backpack stays at your coordinate of death as a persistent recovery beacon. You respawn safely in your bunker stash room to re-arm for a corpse recovery raid.']
    ],
    related: ['scavland-beginner-guide', 'scavland-death-and-loot-recovery', 'scavland-early-access-launch-faq-and-roadmap'],
    keywords: ['scavland coop', 'scavland multiplayer', 'scav land multiplayer', 'scavland co op', 'scavland play with friends', 'scavland co-op roadmap', 'scavland extraction squad']
  },
  {
    slug: 'scavland-russian-language-and-font-fix',
    shortTitle: 'Russian Language Setup',
    title: 'Scavland Russian Language Guide: Localization Status, Cyrillic Fonts & Community Setup',
    description: 'How to configure Russian language support in Scavland: localization roadmap, community Cyrillic translation patches, font fixes, and text files.',
    category: 'Systems',
    image: '/images/screenshots/steam_ss_07.webp',
    imageAlt: 'Scavland survival inventory and tactical notes interface with Cyrillic text localization',
    evidence: 'Community reports',
    updated: '2026-09-06',
    answer: 'Scavland Early Access currently ships with full English interface and subtitles. Because the game is set in a Soviet wasteland (<strong>Zalesye</strong>), demand for Russian (<strong>русский язык</strong>) localization is extremely high across Eastern European communities. While official multi-language support is in development for future patches, players can safely install verified community string files and font patches to enjoy full Russian item descriptions, trader dialogues, and quest journals.',
    steps: [
      '01 · Official Localization Status: Check the game language settings in Steam library properties; developer NoShadow is currently working with community translators for official integration.',
      '02 · Backup Original Language Strings: Navigate to your installation directory (`Steam/steamapps/common/Scavland/data/localization/`) and backup <strong>`en_strings.json`</strong>.',
      '03 · Apply Verified Translation Patch: Place the community <strong>`ru_strings.json`</strong> dictionary into the localization directory or use the community-provided launch parameter <strong>`-lang=ru`</strong>.',
      '04 · Resolving Cyrillic Font Square Glyphs: If Russian letters display as empty boxes, replace the bitmap font file in `data/fonts/` with the extended <strong>Unicode UTF-8</strong> font patch.',
      '05 · Verifying Trader Dialogue: Launch the game and converse with trader Anatoly in <strong>Zalesye</strong> to verify that quest descriptions and barter prices render correctly.'
    ],
    facts: [
      ['Official EA Languages', 'English interface and subtitles supported out-of-the-box in 0.6.3'],
      ['Roadmap Integration', 'Official Russian, German, and Spanish translations are planned for upcoming quarterly patches'],
      ['String File Format', 'Plaintext UTF-8 JSON structure located in game root localization directory'],
      ['Font Rendering Fix', 'Square glyph errors are resolved by dropping extended Cyrillic bitmap fonts into the font folder'],
      ['Save File Safety', 'Language string modifications do not alter character save files or safehouse progression']
    ],
    faq: [
      ['Does Scavland support Russian officially?', 'Official Russian localization is scheduled for an upcoming Early Access update. Currently, the game natively supports English with active community translations available.'],
      ['Will applying a language patch ban me or corrupt my save?', 'No. Scavland is a singleplayer game without anti-cheat restrictions on localization files, and string files are completely decoupled from save game data.'],
      ['Why do Cyrillic letters show up as question marks or boxes?', 'This occurs when the default font atlas lacks <strong>Cyrillic Unicode code points</strong>; installing the extended font pack resolves all missing glyphs.']
    ],
    related: ['scavland-beginner-guide', 'scavland-early-access-launch-faq-and-roadmap', 'scavland-quests-and-contracts'],
    keywords: ['scavland russian language', 'scavland русский язык', 'scavland russian translation', 'scavland cyrillic font fix', 'scavland localization']
  },
  {
    slug: 'scavland-red-keycard-and-bunker-loot-recovery',
    shortTitle: 'Red Keycard & Bunkers',
    title: 'Scavland Bunker & Red Keycard Guide: Subterranean Vaults, Entrance Locations & Military Loot',
    description: 'Complete Scavland bunker guide: subterranean bunker entrance locations in northwestern Zalesye, Red Keycard vault access, military loot respawn cycles, and emergency extract routes.',
    category: 'Exploration',
    image: '/images/screenshots/steam_ss_08.webp',
    imageAlt: 'A heavy blast door inside a Soviet subterranean bunker requiring a Red Keycard scanner',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-19',
    answer: 'Subterranean Bunkers in Scavland represent the highest-risk, highest-yield extraction destinations in <strong>Zalesye</strong>. The primary fortified complex, Subterranean Bunker <strong>Sector B-4</strong>, is situated in the rugged northwestern forest sector of <strong>Zalesye</strong> behind a concrete surface trench and steel blast bulkhead. Accessing the inner military armory requires the rare <strong>Red Keycard</strong> swiped at the security console. Behind the vault door lies Tier-3 military hardware: hybrid optics, titanium muzzle attachments, heavy Kevlar armor plates, and classified transmitter documents. Bunker armory containers and high-tier military loot reset 3 hours after leaving them (or across the in-game 24-hour day-night cycle upon safehouse sleep). For related combat preparations, check our [Starter Loadouts Guide](/guide/scavland-starter-loadouts-and-budget-builds/), [Weapons Arsenal](/weapons/), or [Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/).',
    steps: [
      '01 · Locate the Bunker B-4 Surface Entrance: Head into the northwestern <strong>Zalesye</strong> woods, following the overgrown railway spur toward the concrete drainage trench. The entrance is marked by a reinforced blast doorway guarded by patrol sentries and irradiated puddles.',
      '02 · Acquire the <strong>Red Keycard</strong>: The <strong>Red Keycard</strong> is a rare military security pass dropped by checkpoint commanders, found in hazardous radioactive zone airdrops, or awarded from Nadja\'s apex mutant extermination contracts. Store it in your safehouse stash until ready.',
      '03 · Secure the Perimeter & Keycard Reader: Clear surface hostiles before descending the stairwell. Insert the Red Keycard into the glowing terminal reader; the mechanical vault door takes 15 seconds to cycle open while audible sirens sound.',
      '04 · Clear Subterranean Corridors & Sweep Vault Lockers: Advance through narrow concrete choke points with close-quarters weapons. Loot military crates containing high-tier attachments, ammunition, and rare electronics.',
      '05 · Understand Bunker Reset Cooldowns (3 Hours / 24-Hour Sleep): Under Update 0.6.0 and Update 0.7.0, subterranean bunkers reset 3 hours after leaving them. Alternatively, advancing the 24-hour day-night cycle by sleeping in a safehouse bed triggers world container refreshes, allowing scavengers to plan repeatable farming runs.',
      '06 · Use the Emergency Ventilation Extract: Avoid backtracking through the alarmed main entrance corridor where roaming patrols congregate. Climb the rear emergency ventilation shaft to extract quietly back to the surface.'
    ],
    facts: [
      ['Bunker Location & Entrance', 'Sector B-4 subterranean complex in northwestern Zalesye, accessed via concrete trench entrance'],
      ['Vault Access Requirement', 'Red Keycard with 3 entry charges swiped at electronic console'],
      ['Military Loot Reset', 'Bunkers reset 3 hours after leaving them (Update 0.6.0), or refresh on 24-hour safehouse sleep cycle'],
      ['Alarm & Defense Timer', 'Swiping keycard triggers a 15-second siren alert cycle that draws nearby sector hostiles'],
      ['Emergency Extraction', 'Rear ventilation hatch enables direct escape to the outer surface forest'],
      ['Verified Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['Where is the subterranean bunker located in Scavland?', 'Subterranean Bunker Complex B-4 is located in northwestern <strong>Zalesye</strong>. Look for the concrete drainage trench and heavy steel blast door situated at the end of the overgrown rail line.'],
      ['How do bunker loot and crates respawn?', 'Under official mechanics introduced in Update 0.6.0 and stabilized in Update 0.7.0, bunkers reset 3 hours after leaving them. Additionally, sleeping in a safehouse bed advances the 24-hour world reset cycle, repopulating unlocked lockers and military crates.'],
      ['Is the Red Keycard single-use or reusable?', 'In current builds, the Red Keycard possesses 3 durability charges, allowing 3 separate bunker vault entries before burning out.'],
      ['What is the best weapon loadout for clearing subterranean bunkers?', 'Bring close-quarters shotguns with buckshot or high-penetration rifles along with a flashlight to handle dark narrow concrete corridors and sudden mutant ambushes.']
    ],
    related: ['scavland-weapons-and-attachments', 'scavland-loot-and-scavenging', 'scavland-weapon-repair-and-durability', 'scavland-sleep-and-world-reset-guide'],
    keywords: ['scavland bunker', 'scavland bunker location', 'scavland bunker entrance', 'scavland bunker b4', 'scavland red keycard', 'scavland subterranean bunker', 'scavland bunker respawn', 'scavland bunker extraction'],
    videoId: 'Xbq3ZHQf1YE',
    videoTitle: 'Scavland How do you enter all the currently identified bunkers and secret bunkers?..',
    videoChannel: 'Game Detox Dopamine'
  },
  {
    slug: 'scavland-starter-loadouts-and-budget-builds',
    shortTitle: 'Starter Loadouts & Armor',
    title: 'Scavland Starter Loadouts & Armor Guide: Body Armor Tiers, Damage Distribution & Budget Builds',
    description: 'Complete guide to Scavland armor mechanics and starter loadouts: body armor hit durability tiers, Update 0.7.0 damage distribution, repair kits, and budget Mikhail 74U kits.',
    category: 'Gear',
    image: '/images/harvested/2026-09-24/other-lootable-consumables/other-lootable-consumables-gameplay.webp',
    imageAlt: 'Scavland tactical armor tiers, damage distribution across gear, and budget starter loadouts',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-24',
    answer: 'Surviving your early excursions in Scavland requires understanding body armor mechanics alongside budget weapon builds. Following <strong>Update 0.7.0</strong>, combat survivability changed fundamentally: incoming damage is now distributed across the different gear pieces you are wearing, making a full set of armor, head protection, and trousers (such as Old Tactical Pants) vastly more effective at mitigating lethality. Furthermore, <strong>Update 0.6.0</strong> rebalanced baseline armor hit points across four tiers (Tattered absorbs 3 hits, Scavenger absorbs 4 hits, Medium absorbs 5 hits, and Heavy absorbs 6 hits). Under <strong>Update 0.7.0</strong>, Gun and Armor <strong>Repair Kits</strong> can now be applied regardless of how damaged your equipment is, eliminating past minimum condition lockouts. Pairing a Mikhail 74U or 12-gauge shotgun with scavenged torso protection ensures high survivability without risking expensive liquid reserves.',
    steps: [
      '01 · Understand Distributed Damage Mechanics: In <strong>Update 0.7.0</strong>, incoming ballistic and mutant damage is distributed across each equipped gear piece rather than hitting a single total health pool. Wearing headgear, chest armor, and tactical pants simultaneously disperses impact force across multiple items.',
      '02 · Master Armor Durability Tiers (3 to 6 Hits): Armor durability operates on discrete hit absorption thresholds established in <strong>Update 0.6.0</strong>: Tattered armor withstands 3 hits, Scavenger armor withstands 4 hits, Medium armor withstands 5 hits, and Heavy armor withstands 6 hits before failing.',
      '03 · Universal Armor <strong>Repair Kits</strong> (<strong>Update 0.7.0</strong>): Prior updates prevented repairing heavily damaged items, but <strong>Update 0.7.0</strong> permits Gun and Armor <strong>Repair Kits</strong> to be used regardless of how damaged your equipment is. Kits appear in the world with distinct rarities: Tattered/Scrap (Rare), Scavenger/Basic (Very Rare), and Advanced/Expert/Medium/Heavy (Ultra Rare).',
      '04 · Crafting Medium Armor at Equipment Bench: Under <strong>Update 0.6.0</strong>, Medium Armor is crafted directly at the Equipment Bench (moved from the Medical Bench). Tattered and Scavenger armor repair kits are crafted using collected materials.',
      '05 · Primary Weapon - Mikhail 74U: Pair your protective armor with an economical Mikhail 74U chambered in 5.45x39mm or a close-range 12-gauge shotgun. Mikhail 74U magazines and ammunition are plentiful on fallen bandits and budget vendor Volodymyr at Crossroads.',
      '06 · Field Medical Hotbar Setup: Maintain quick-access survival triage consisting of Clean Bandages, <strong>Green Rags</strong> (now included in the beginner starter kit in <strong>Update 0.7.0</strong>), and clean drinking water to manage bleeding before armor durability degrades.'
    ],
    facts: [
      ['Damage Distribution', 'Incoming damage is distributed across the different gear pieces you are wearing (Update 0.7.0)'],
      ['Armor Hit Durability', 'Tattered: 3 hits; Scavenger: 4 hits; Medium: 5 hits; Heavy: 6 hits before breaking (Update 0.6.0)'],
      ['Universal Repair Kits', 'Gun and Armor Repair Kits can now be used regardless of how damaged equipment is (Update 0.7.0)'],
      ['Repair Kit Loot Rarity', 'Tattered/Scrap: Rare; Scavenger/Basic: Very Rare; Advanced/Expert/Medium/Heavy: Ultra Rare (Update 0.7.0)'],
      ['Equipment Bench Crafting', 'Medium Armor is crafted at the Equipment Bench rather than the Medical Bench (Update 0.6.0)'],
      ['Tactical Pants Droptable', 'Old Tactical Pants can spawn again in world containers (Update 0.7.0)'],
      ['Starter Medical Supplies', 'Green Rags are now included in the beginner starter kit (Update 0.7.0)']
    ],
    faq: [
      ['How does armor reduce damage in Scavland <strong>Update 0.7.0</strong>?', 'Under <strong>Update 0.7.0</strong>, incoming damage is distributed across the various pieces of gear you wear (headwear, body armor, pants) rather than impacting a single unified health pool. Equipping multiple protective layers spreads out incoming damage across several durability pools.'],
      ['How many hits can each armor tier absorb before breaking?', 'Per the Update 0.6.0 rebalance, armor hit points are strictly tiered: Tattered armor absorbs 3 hits, Scavenger armor absorbs 4 hits, Medium armor absorbs 5 hits, and Heavy armor absorbs 6 hits before durability is fully exhausted.'],
      ['Can you repair completely broken armor in Update 0.7.0?', 'Yes. In Update 0.7.0, Gun and Armor Repair Kits can now be used regardless of how damaged your equipment is, removing the earlier durability restriction.'],
      ['Where do you craft Medium Armor?', 'In Update 0.6.0, Medium Armor crafting was moved to the Equipment Bench instead of the Medical Bench.'],
      ['What is the best budget firearm to pair with early armor?', 'The Mikhail 74U in 5.45x39mm and 12-gauge shotguns provide the best balance of low repair cost, readily scavenged ammunition, and stopping power against mutant ambushes.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-crafting-and-trading', 'scavland-weapon-repair-and-durability'],
    keywords: ['scavland armor', 'scavland body armor', 'scavland armor repair', 'scavland armor durability', 'scavland starter loadout', 'scavland budget build', 'scavland best early weapons', 'scavland mikhail 74u', 'scavland tactical pants', 'scavland armor tiers'],
    videoId: 'uLK0n3hEfhk',
    videoTitle: "SCAVLAND | Bunker Didn't Stand a Chance Against This Loadout",
    videoChannel: 'Confused Dango'
  },
  {
    slug: 'scavland-hospital-quest-and-medical-supplies',
    shortTitle: 'Hospital Quest & Meds',
    title: 'Scavland Hospital Quest Guide: Zalesye Medical Wing, Keycard & Tongue Monsters',
    description: 'Walkthrough for Scavland Hospital Quest: locating Zalesye Central Hospital, surviving tongue monsters, surgical crates, and unlocking doctor barter tiers.',
    category: 'Progression',
    image: '/images/screenshots/ss_02_bunker_tactical.webp',
    imageAlt: 'A dimly lit underground medical corridor in the Abandoned Zalesye Hospital',
    evidence: 'Official Steam announcements & community reports · Update 0.5.169',
    updated: '2026-09-08',
    answer: 'The Hospital Quest is a critical Act I progression milestone issued by the settlement medical officer in <strong>Zalesye</strong>. Players must navigate to the <strong>Abandoned Regional Hospital</strong> in the northeastern ruins, breach the barricaded second-floor surgical wing, and extract three sealed Sterile Antibiotic Crates and a Surgical Kit. The hospital interior is infested with high-threat <strong>Tongue Monsters (Lickers)</strong> that grapple players from medium range; countering them requires a high-stagger <strong>12-gauge shotgun</strong>, doorway bottlenecking, and anti-bleed tourniquets.',
    steps: [
      '01 · Contract Activation & Route Preparation: Accept the quest from Settlement <strong>Physician Anna</strong> in <strong>Zalesye</strong>. Pack at least 2 Tourniquets, 1 Morphine injector, and a close-quarters shotgun (<strong>TOZ-34</strong> or <strong>Mikhail 74U</strong> with <strong>Buckshot</strong>) before departing toward the northeastern sector.',
      '02 · Breaching the Ground Floor Lobby: Approach the hospital complex via the western ambulance bay to avoid open-field sniper crossfire. The ground floor lobby contains 4 Ghoul sentries; neutralize them silently with a suppressed 9mm sidearm to avoid waking the entire facility.',
      '03 · Countering the Tongue Monster Ambush: Ascending the central staircase triggers a Tongue Monster (Licker) spawn. Tongue Monsters attack via an 8-meter tongue whip grapple that immobilizes the player. Disengage backward down the stairwell, force the monster into the doorway bottleneck, and stagger it with two rapid 12G Buckshot rounds.',
      '04 · Locating Surgical Crates & Pharmacy Stash: On the second-floor surgical ward, locate <strong>Room 204</strong> behind a locked wooden door (breachable with a basic crowbar or heavy melee strike). Secure the three glowing green Antibiotic Crates and the steel Surgical Kit on the operating table.',
      '05 · Southern Fire Escape Extraction: Do not retreat through the main lobby. Exit via the southern fire escape ladder behind Room 208, dropping safely into the perimeter canal for a direct sprint back to <strong>Zalesye</strong> settlement.'
    ],
    facts: [
      ['Quest Giver', 'Physician Anna at the Zalesye Settlement Clinic'],
      ['Target Objective', '3x Sterile Antibiotic Crates & 1x Steel Surgical Kit in Room 204'],
      ['Apex Threat', 'Tongue Monsters (Lickers) feature an 8m grapple whip; counters: 12G Buckshot stagger'],
      ['Door Breach Method', 'Room 204 door can be pried using a Crowbar or kicked down with 3 heavy melee hits'],
      ['Doctor Barter Reward', 'Unlocks Tier-2 Medical Trade (Morphine, IFAKs, Charcoal Radiation Filters) + 3,800 Rubles'],
      ['Verified Baseline', 'Early Access Patch v0.5.169']
    ],
    faq: [
      ['Where is the Abandoned Hospital in Scavland?', 'The Hospital is located in northeastern <strong>Zalesye</strong>, past the rusted railway depot and adjacent to the flooded quarry. Watch for yellow biohazard warning signs along the perimeter.'],
      ['How do you kill the Tongue Monster in the hospital stairwell?', 'Do not fight it in open hallways. Retreat down the stairs into the door frame so its tongue grapple hits the wall, then blast its exposed skull with high-stagger 12G shotgun buckshot.'],
      ['What do I do if I cannot find Room 204?', 'Head to the second floor, turn right past the nurses\' station, and look for the room marked with a red medical cross stencil over the doorway.'],
      ['What rewards do you get for completing the Hospital Quest?', 'Completing the quest grants <strong>3,800 Rubles</strong>, <strong>+250 Commonfolk</strong> faction reputation, and unlocks Physician Anna\'s Tier-2 medical shop containing Morphine, Hemostatic Gauze, and IFAKs.']
    ],
    related: ['scavland-quests-and-contracts', 'scavland-beginner-guide', 'scavland-starter-loadouts-and-budget-builds'],
    keywords: ['scavland hospital quest', 'scavland hospital walkthrough', 'scavland tongue monster', 'scavland medical supplies', 'scavland physician anna']
  },
  {
    slug: 'scavland-merchant-prices-and-barter-guide',
    shortTitle: 'Merchant Prices & Volodymyr',
    title: 'Scavland Merchant Prices & Trader Guide: Volodymyr Location, Buy Rates & Stash Expansions (Update 0.7.0)',
    description: 'Complete Scavland merchant guide: Trader Volodymyr Crossroads location, zero-reputation stock, 35% attachment discount, +5% sell bonus per rank, and 50,000 Ruble stash expansions.',
    category: 'Economy',
    image: '/images/screenshots/ss_04_settlement_camp.webp',
    imageAlt: 'Scavland merchants trading salvage and weapons in Zalesye settlement camp',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-26',
    answer: 'Trading in Scavland requires matching scavenged loot to merchant specializations while leveraging reputation progression and key vendor locations. Trader <strong>Volodymyr</strong>, stationed at the <strong>Crossroads annex</strong> outside central <strong>Zalesye</strong>, serves as the primary black-market armorer: he operates with zero reputation rank requirements, making him accessible even if your faction standing collapses. In <strong>Update 0.7.0</strong>, Volodymyr\'s weapon attachments are approximately 35% cheaper, he sells Advanced and Expert Repair Kits as well as an Expert Repair Kit Blueprint, and his contracts focus on high-quality weapons and dangerous mutants. Across the wider economy, Update 0.7.0 introduced a <strong>+5%</strong> sell value bonus per <strong>Trader Rank</strong> and allowed purchasing a Stash expansion from a Trader in the main village for 50,000 Rubles to unlock an additional Stash tab. Traders maintain strict specializations: Zhivan pays 140% for Common items, Bogdan pays 40% more for Mutant Parts, Vesna buys Common items at 75% and Clothing at 60%, and Grigory pays premium rates for attachments while buying Common items at 50% (no longer buying Food, Medical, or Crafting items). Items like Rope, Household Batteries, Incandescent Bulbs, Car Batteries, and Copper Wiring currently lack crafting recipes and should be sold as pure barter salvage, while Spark Plugs fetch premium rubles. For weapon servicing details, see our [Weapon Repair Guide](/guide/scavland-weapon-repair-and-durability/) or [Tactical Database](/guide/scavland-tactical-database-weapons-loot/).',
    steps: [
      '01 · Trader Volodymyr Location & Zero-Reputation Trade: Head southwest from central <strong>Zalesye</strong> toward the Crossroads annex near the Neutral Chapel perimeter to locate Trader Volodymyr. Volodymyr requires zero faction reputation rank to purchase his inventory, making him the premier emergency arms dealer for disgraced or unaligned scavengers.',
      '02 · Exploit Volodymyr\'s Update 0.7.0 Inventory & Contracts: In Update 0.7.0, Volodymyr\'s weapon attachments were discounted by approximately 35%, and he now sells Advanced and Expert <strong>Repair Kits</strong> alongside an Expert Repair Kit Blueprint. Additionally, Volodymyr\'s contracts focus on high-quality weapons and dangerous mutants, offering lucrative early ruble payouts.',
      '03 · Purchase 50,000 Ruble Stash Expansions in Main Village: In the main village, visit a Trader and purchase a Stash expansion for 50,000 Rubles to unlock an additional Stash tab (Update 0.7.0). Note that newly added camp stashes and workbenches across all four main camps (Arcadia, Mechanist Base, Mudlark Camp, Microrayion) feature only one tab and maintain independent inventories from the village; only the main village stash can be upgraded.',
      '04 · Loot Triage — Barter Salvage vs Workbench Materials: In Early Access, workbench crafting recipes are strictly mechanical and medical (Scrap Metal, Weapon Springs, Clean Cloth, Antiseptic, Water Bottles, Gunpowder, Ballistic Fiber). Items such as Rope, Household Batteries, Incandescent Bulbs, Car Batteries, and Copper Wiring have zero crafting use and represent pure barter weight to sell for rubles. Spark Plugs are the exception, fetching high prices from Anatoly and Zhivan.',
      '05 · Match Salvage to Merchant Category Specializations: Never dump all loot into one trader. Zhivan pays 140% for Common items; Bogdan pays 40% more for Mutant Parts; Vesna buys Common items at 75% and Clothing at 60%; Nadja pays 90% for Common and 80% for Crafting; and Grigory buys Common items at 50% while paying premium rates for weapon attachments (he no longer buys food, medical, or crafting supplies).',
      '06 · Compound Profits with Trader Rank Bonuses (+5% per Rank): Update 0.7.0 awards an additional 5% sell value per Trader Rank. Completing daily contracts for settlement merchants permanently compounds the rubles earned on every sold firearm, attachment, and scavenged electronic part.'
    ],
    facts: [
      ['Trader Volodymyr Location', 'Crossroads annex outside central Zalesye; trades with zero faction reputation requirements'],
      ['Volodymyr 0.7.0 Adjustments', 'Weapon attachments ~35% cheaper; sells Advanced/Expert Repair Kits & Blueprint; jobs focus on high-quality weapons & mutants'],
      ['Trader Rank Sell Bonus', '+5% additional sell value per Trader Rank (Update 0.7.0)'],
      ['Stash Expansion Cost', '50,000 Rubles from a Trader in the main village for an extra Stash tab (Update 0.7.0)'],
      ['Loot Triage Salvage', 'Rope, Batteries, Bulbs, and Copper Wire have no crafting recipes and should be bartered; Spark Plugs fetch top value'],
      ['Merchant Specialization Rates', 'Zhivan pays 140% for Common items; Vesna pays 75% Common / 60% Clothing; Grigory buys Common at 50% and attachments at premium; Bogdan pays 40% more for Mutant Parts'],
      ['Camp Stash Independence', 'Main camp stashes have 1 tab and do not share items with the village (Update 0.7.0)'],
      ['Evidence Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['Where is Trader Volodymyr located and what does he sell?', 'Trader Volodymyr is located at the Crossroads annex outside the central <strong>Zalesye</strong> settlement. He trades with zero reputation requirements, meaning even scavengers marked hostile by major factions can trade with him. In <strong>Update 0.7.0</strong>, his weapon attachments are roughly 35% cheaper, he sells Advanced and Expert <strong>Repair Kits</strong> plus an Expert Blueprint, and his contracts target high-quality weapons and dangerous mutants.'],
      ['Who sells the 50,000 Ruble Stash Expansion in Scavland?', 'The 50,000 Ruble Stash expansion can be purchased from a Trader in the main village to unlock an additional Stash tab (Update 0.7.0). Stashes in outlying camps (Arcadia, Mechanist Base, Mudlark Camp, Microrayion) currently have only one tab and do not share items with the village.'],
      ['Which looted items have no crafting recipes and should be sold?', 'In Early Access, items like Rope, Household Batteries, Incandescent Bulbs, Car Batteries, and Copper Wiring have zero workbench crafting recipes and should be sold to merchants as pure barter salvage. Spark Plugs also have no crafting recipes but fetch premium prices from Anatoly and Zhivan.'],
      ['How does Trader Rank affect item sell prices in Update 0.7.0?', 'In Update 0.7.0, traders pay an additional 5% sell value per Trader Rank. Increasing your standing with faction merchants directly compounds the rubles you receive for every sold item.'],
      ['Which merchant pays the most for each item type?', 'Zhivan pays 140% for Common items; Bogdan pays 40% more for Mutant Parts; Vesna buys Common items at 75% and Clothing at 60%; Grigory pays top prices for Weapon Attachments and 50% for Common items (he no longer buys food or medical supplies); and Nadja pays 90% for Common and 80% for Crafting items.']
    ],
    related: ['scavland-crafting-and-trading', 'scavland-starter-loadouts-and-budget-builds', 'scavland-safehouses-and-fast-travel-guide', 'scavland-weapon-repair-and-durability', 'scavland-factions-and-reputation'],
    keywords: ['scavland volodymyr location', 'volodymyr scavland', 'scavland volodymyr', 'scavland trader volodymyr', 'volodymyr location', 'scavland traders', 'scavland merchant prices', 'scavland trader rank bonus', 'scavland trader specialization', 'scavland stash expansion 50000', 'scavland barter guide', 'scavland loot triage'],
    videoId: 'UZLVFxYaSnU',
    videoTitle: "Scavland 0.6.0 Key NPC: Check changes to Volodymyr's sales list.",
    videoChannel: 'Game Detox Dopamine'
  },
  {
    slug: 'scavland-sleep-and-world-reset-guide',
    shortTitle: 'Sleep & World Reset',
    title: 'Scavland Sleep & World Reset Guide: Mattress Rule, 24-Hour Cycle & 3-Hour Bunker Resets (Update 0.7.0)',
    description: 'Complete guide to Scavland sleep and world resets: Update 0.7.0 mattress-only bed rule, doubled campfire healing, 5 HP/hr bed rest, and 3-hour bunker resets.',
    category: 'Survival',
    image: '/images/screenshots/ss_01_ruins_night.webp',
    imageAlt: 'A scavenger resting by a safehouse bunker bunk and active campfire in Scavland',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-21',
    answer: 'Sleeping in Scavland is the essential survival mechanic for skipping time, avoiding deadly night stalkers (21:00 to 06:00), recovering vitality, and cycling settlement contracts. In <strong>Update 0.7.0</strong>, sleeping rules received fundamental overhauls: only beds with mattresses can now be used for sleeping, meaning bare frames and derelict cots no longer provide rest. Sleeping in a valid bed restores 5 health per in-game hour while world simulation continues running; taking damage, extreme Hunger, or Thirst triggers a notification that interrupts sleep. In the field where mattress beds are unavailable, campfires serve as primary triage stations with doubled health regeneration in <strong>Update 0.7.0</strong>. World contracts and merchant stocks rotate on a 24-hour cycle, while Subterranean Bunkers reset loot containers 3 hours after leaving them. For related recovery systems, check our [Beginner Guide](/guide/scavland-beginner-guide/), [Bunker Loot Guide](/guide/scavland-red-keycard-and-bunker-loot-recovery/), or [Safehouses Guide](/guide/scavland-safehouses-and-fast-travel-guide/).',
    steps: [
      '01 · Locate Valid Beds with Mattresses (<strong>Update 0.7.0</strong>): Under <strong>Update 0.7.0</strong> rules, only beds with mattresses can be used for sleeping. Bare spring frames, stripped cots, or makeshift benches can no longer be activated. Safehouse bunkers in central <strong>Zalesye</strong> and established faction outposts contain qualifying mattress beds.',
      '02 · Bed Rest Vitality & Interruption Checks: Sleeping in a valid mattress bed restores 5 health per in-game hour (established in Hotfix 0.6.2). The Sleep interface displays stat changes before waking. Because the world continues simulating during sleep, taking damage or suffering acute Hunger or Thirst immediately interrupts your rest with an explanatory UI notification.',
      '03 · Doubled Campfire Healing in the Field: When operating far from mattress beds, utilize campfires scattered across wasteland outposts and camps. <strong>Update 0.7.0</strong> doubled campfire passive healing speed, allowing scavengers to rapidly patch injuries between engagements without returning to town.',
      '04 · 24-Hour Settlement & Contract Reset: Passing a 24-hour in-game threshold rerolls daily contracts offered by Anatoly, Nadja, and Volodymyr, while restocking merchant inventories. Sleeping skips daytime hours safely to refresh high-payout bounty pools.',
      '05 · Subterranean Bunker 3-Hour Reset Cycle: Unlike surface loot that refreshes across the 24-hour cycle, underground military bunkers (such as Bunker B-4) reset their loot containers 3 hours after you exit the instance (with bunker reset stability resolved in <strong>Update 0.7.0</strong>).',
      '06 · Audio Stinger & Chunk Stability: <strong>Update 0.7.0</strong> replaced looping sleep music with a subtle audio stinger and quiet snapshot upon waking, and resolved a legacy bug where sleeping after a world chunk unloaded could freeze simulation.'
    ],
    facts: [
      ['Mattress Sleeping Rule', 'Only beds with mattresses can be used for sleeping since Update 0.7.0'],
      ['Bed Health Regeneration', 'Resting in a valid bed restores 5 health per in-game hour (Hotfix 0.6.2)'],
      ['Campfire Healing Buff', 'Update 0.7.0 doubled passive health regeneration rate at lit campfires'],
      ['Sleep Interruptions', 'Taking damage, severe hunger, or thirst halts sleep and displays an explanatory notification (Update 0.6.0)'],
      ['Bunker Reset Timer', 'Subterranean military bunkers reset containers 3 hours after exiting'],
      ['Audio & Chunk Fixes', 'Quiet audio stinger snapshot replaces looping sleep music; fixed sleeping after world chunk unloads (Update 0.7.0)'],
      ['Evidence Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['Why can I not sleep in certain beds in <strong>Update 0.7.0</strong>?', '<strong>Update 0.7.0</strong> strictly enforced that only beds with mattresses can be used for sleeping. Bare bed frames, makeshift cots, and broken bunks without mattresses can no longer be interacted with for sleep.'],
      ['How much health does sleeping restore in Scavland?', 'Sleeping in a bed with a mattress restores 5 health per in-game hour. Additionally, resting beside a lit campfire provides passive health regeneration, which was doubled in Update 0.7.0.'],
      ['What happens if my character takes damage or starves while sleeping?', 'The world simulation continues to run while you sleep. If your character takes damage, or if Hunger or Thirst reach critical thresholds, sleep is immediately interrupted and a notification appears explaining why you woke up.'],
      ['Do underground bunkers reset when you sleep for 24 hours?', 'Underground military bunkers reset independently from surface settlement contracts. Bunkers reset their loot containers 3 hours after leaving them, allowing players to rotate between surface contracts and underground bunker raids.'],
      ['What changed with sleep audio in Update 0.7.0?', 'Update 0.7.0 replaced the repetitive looping sleep music with a concise audio stinger and a quiet snapshot on wakeup, while fixing chunk unloading bugs that previously disrupted sleep.']
    ],
    related: ['scavland-beginner-guide', 'scavland-night-survival-and-stealth-mechanics', 'scavland-red-keycard-and-bunker-loot-recovery', 'scavland-safehouses-and-fast-travel-guide', 'scavland-map-and-locations'],
    keywords: ['scavland sleep', 'scav land sleep', 'scavland sleep mechanics', 'scavland bed with mattress', 'scavland sleep heal', 'scavland campfire healing', 'scavland bunker reset 3 hours', 'scavland 24 hour reset', 'scavland wait time'],
    videoId: 'IhLy3jap04Y',
    videoTitle: 'Scavland Patch 0.6.0 Full Overview: Sleep System, Stash Crafting & Trader Rework',
    videoChannel: 'Games Quality Zone'
  },
  {
    slug: 'scavland-faction-identification-and-hud-guide',
    shortTitle: 'Faction Identification & HUD',
    title: 'Scavland Faction Identification Guide: Uniforms, HUD Reticle & Friendly Fire Prevention',
    description: 'Scavland combat recognition guide: visual faction uniforms (Rada, Commonfolk, Gunners), HUD reticle color states, audio cues, and truce recovery.',
    category: 'Systems',
    image: '/images/screenshots/ss_06_combat_field.webp',
    imageAlt: 'A scavenger identifying distant armed patrols and combat reticle states in Scavland',
    evidence: 'Official Steam announcements & community reports · Update 0.5.169',
    updated: '2026-09-16',
    answer: 'Scavland intentionally omits floating healthbars or faction nametags above NPC sprites to enforce realistic post-Soviet tension. Firing on friendly or neutral scavengers triggers severe faction reputation penalties (<strong>-100 to -300 Rep</strong>) that can turn entire settlement garrisons permanently hostile. To survive combat encounters without friendly fire, scavengers must identify targets using four distinct indicators: visual uniform color schemes, weapon posture cues (low-ready pointing down vs raised aim), HUD reticle color states (aiming turns red only on hostile lock; green dot on neutrals within <strong>10m</strong>), and verbal combat barks. If accidental friendly fire occurs, diplomat <strong>Raisa</strong> at the <strong>Neutral Chapel</strong> can broker a courier truce before border checkpoints shoot on sight.',
    steps: [
      '01 · <strong>Memorize Key</strong> Faction Uniform Silhouettes: Because pixel art models share base proportions, memorize color palettes. <strong>Commonfolk</strong> wear ragged brown coats and wool ushankas; <strong>Rada</strong> soldiers wear blue-grey urban camouflage and steel helmets; <strong>Mechanists</strong> sport industrial orange jumpsuits and welding goggles; <strong>Gunners</strong> wear all-black tactical plate carriers with balaclavas; and hostile Bandits wear mismatched civilian clothing with crimson armbands.',
      '02 · Pre-Fire Stance & Weapon Low-Ready Cues: Watch the NPC\'s weapon posture before pulling the trigger. Neutral and friendly patrols hold their rifles in a "low-ready" posture pointing toward the ground. Hostile bandits and rogue scavengers immediately shoulder firearms and lock their weapon barrels horizontally onto your character sprite.',
      '03 · Crosshair Proximity & Reticle States: Beyond 15 meters, the crosshair remains a neutral white dot. When aiming down sights [Right-Click] at an entity, the reticle turns crimson red only if the target is an active hostile who has acquired line-of-sight on you. Friendly and neutral scouts never trigger a red reticle and will display a small green dot when within 10 meters.',
      '04 · Listen for Verbal Warning Barks: Neutral and friendly faction patrols will always issue a verbal audio warning ("Hold your fire, scavenger!", "Keep walking!") and pause for 3 seconds before aiming. Hostile bandits, rogue deserters, and vultures immediately shout aggressive attack barks ("Target spotted!", "Open fire!") and discharge weapons without a verbal grace window.',
      '05 · Holster Weapons Near Checkpoints: Approaching an unfamiliar armed squad with a drawn rifle causes their tension meter to spike. Press <strong>[H]</strong> or un-equip your active weapon to holster your firearm. Neutral patrols will allow holstered scavengers to pass peacefully through perimeter checkpoints.'
    ],
    facts: [
      ['HUD Reticle Trigger', 'Reticle turns red only when a hostile acquires line-of-sight; neutrals never turn red'],
      ['Audio Warning Window', 'Neutral patrols shout verbal warnings giving 3 seconds to back off before engaging'],
      ['Uniform Palettes', 'Commonfolk (brown/grey coats), Rada (blue-grey camo), Gunners (black tactical), Bandits (red armbands)'],
      ['Holster Shortcut', 'Press [H] to holster active weapon, reducing neutral NPC suspicion radius by 60%'],
      ['Diplomatic Reconciliation', 'Raisa at Neutral Chapel clears accidental friendly fire penalties (< -300 Rep)'],
      ['Verified Baseline', 'Early Access Patch v0.5.169 Baseline']
    ],
    faq: [
      ['Why are there no names or healthbars above NPCs in Scavland?', 'Developer NoShadow deliberately designed Scavland with minimal HUD clutter to simulate tactical realism. Target identity must be discerned through uniform silhouettes, gear color schemes, and vocal barks.'],
      ['How do I know if an NPC is friendly or hostile before shooting?', 'Hostile raiders will immediately yell combat cries and raise weapons, while neutral patrols issue verbal warnings first. Additionally, aiming at an alerted enemy turns your reticle red.'],
      ['What happens if I accidentally shoot a friendly NPC?', 'Damaging a friendly or neutral scout drops reputation with their faction by -100 Rep, and killing them drops standing by -300 Rep (triggering shoot-on-sight hostility across their faction checkpoints).'],
      ['How do I fix negative reputation after accidental friendly fire?', 'Travel to the Neutral Chapel in central Zalesye and speak to diplomat Raisa. She offers courier truce contracts to reset hostile standings back to Neutral (0 Rep).']
    ],
    related: ['scavland-factions-and-reputation', 'scavland-factions-progression-and-traders', 'scavland-quests-and-contracts', 'scavland-beginner-guide'],
    keywords: ['scavland faction identification', 'scavland friendly fire', 'scavland hud reticle', 'scavland faction uniforms', 'scavland green dot npc', 'scavland how to tell friendly from hostile'],
    videoId: 'Hc7e62PoCsM',
    videoTitle: 'Scavland: 10 Things the Game DOESN’T Tell You!',
    videoChannel: 'Gaming Plus TV'
  },
  {
    slug: 'scavland-developer-commitments-and-patch-roadmap',
    shortTitle: 'Developer Commitments & Roadmap',
    title: 'Scavland Developer Commitments & Patch Roadmap: Delivered 0.7.0 Features, Save Reload & Future Co-op',
    description: 'Scavland roadmap tracker: Lucasmml updates on delivered Update 0.7.0 features (Death Screen rebuild, autosave slots, 50k stash), balance passes, and future co-op timeline.',
    category: 'Progression',
    image: '/images/harvested/2026-09-11/we-hear-you-changes-are-coming/we-hear-you-changes-are-coming-frame-498s.jpg',
    imageAlt: 'Scavland developer update review showcasing Update 0.7.0 gameplay balance adjustments and roadmap features',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-22',
    answer: 'Following the Early Access release and early community feedback in the "We Hear You - Changes Are Coming" address, lead developer Lucasmml has progressively delivered on major roadmap commitments. In <strong>Update 0.7.0</strong>, developers completely rebuilt the <strong>Death Screen</strong> with dedicated agency (<strong>Returner</strong>: Continue / Load Game; <strong>Iron Man</strong>: New Game / Exit; Tutorial: Try Again; full gamepad support), added run-specific <strong>Autosave Slots</strong> to protect active progress, enabled Stash tab expansions from Traders for 50,000 Rubles, added independent 1-tab stashes and crafting benches to four major outpost camps (Arcadia, Mechanist Base, Mudlark Camp, Microrayion), and granted +5% sell value per Trader Rank. On the future roadmap, native 2-4 player cooperative multiplayer extraction and northern Act II/III sectors remain confirmed for full release. For active mechanics, consult our [Map & Locations Guide](/guide/scavland-map-and-locations/), [Weapon Repair Guide](/guide/scavland-weapon-repair-and-durability/), or [Weapons Database](/weapons/).',
    steps: [
      '01 · <strong>Death Screen</strong> Rebuilt & <strong>Autosave Slots</strong> (Delivered in <strong>Update 0.7.0</strong>): Post-death agency was completely overhauled with dedicated actions: <strong>Returner</strong> mode now offers "Continue" and "Load Game", Tutorial features "Try Again", and <strong>Iron Man</strong> provides "New Game" or "Exit", complete with full gamepad support. Furthermore, each run now receives its own dedicated <strong>Autosave Slot</strong>, ensuring your active campaign cannot be overwritten or wiped accidentally.',
      '02 · Stash Expansions & Forward Outpost Hubs (Delivered in <strong>Update 0.7.0</strong>): Solving stash capacity friction, players can purchase Stash expansions from Traders for 50,000 Rubles per additional tab at the main village. Moreover, dedicated crafting stations and single-tab player stashes were established across four major forward camps: Arcadia, Mechanist Base, Mudlark Camp, and Microrayion (independent inventories from <strong>Zalesye</strong>).',
      '03 · Weapon Durability, Jamming & Combat Rebalance (Delivered in <strong>Update 0.7.0</strong>): Addressing durability upkeep complaints, weapons last approximately twice as many shots per durability point across many rifles, jamming occurs less frequently (hard jam reduced from 45% to 33% at <strong>10% durability</strong>), Gun and Armor Repair Kits work at any damage percentage, and incoming damage distributes across worn gear pieces.',
      '04 · Trader Progression & Field Survival Economy (Delivered in Update 0.7.0): Traders now reward loyalty by paying an additional 5% sell value per Trader Rank. Early survival received starter Green Rags, campfires now grant doubled passive health regeneration, and resting strictly requires beds with mattresses.',
      '05 · Long-Term Roadmap: 2-4 Player Co-op & Northern Map Expansions: Early Access is slated for a 12 to 24 month duration. Confirmed development targets for full release include 2-4 player cooperative multiplayer squad extraction, expanded northern exclusion zone sectors (Act II/III), and deeper faction diplomacy between Rada and Gunners.'
    ],
    facts: [
      ['Delivered Death Agency', 'Rebuilt Death Screen with Continue / Load Game for Returner mode, and run-specific Autosave Slots'],
      ['Delivered Stash Expansion', '50,000 Rubles at Traders unlocks extra Stash tabs; 4 outposts gained 1-tab stashes'],
      ['Combat & Durability Overhaul', 'Rifles last ~2x shots per durability point; jam chance dropped from 45% to 33% at 10% durability in Update 0.7.0'],
      ['Trader Progression', 'Traders pay an additional 5% sell value per Trader Rank'],
      ['Starter Survival Buff', 'Green Rags added to starter kit; campfire healing doubled'],
      ['Roadmap: Co-op Multiplayer', '2-4 player squad extraction mode confirmed for full release during 12-24 month Early Access'],
      ['Roadmap: Northern Expansions', 'Act II northern exclusion zone sectors and faction diplomacy slated for future roadmap phases'],
      ['Verified Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['Has Scavland added an option to reload saves when you die?', 'Yes! In Update 0.7.0, the Death Screen was completely rebuilt with dedicated actions instead of any-key respawning: Returner mode features Continue and Load Game, Iron Man features New Game or Exit, and Tutorial features Try Again, supported by run-specific Autosave Slots.'],
      ['How do Stash expansions work in Update 0.7.0?', 'Players can purchase Stash expansions from a Trader for 50,000 Rubles per additional tab at the main village. Furthermore, four outpost camps (Arcadia, Mechanist Base, Mudlark Camp, Microrayion) now feature independent 1-tab stashes and crafting tables.'],
      ['Have armor and weapon repair costs been rebalanced?', 'Yes. In Update 0.7.0, weapon durability was significantly increased across almost the entire arsenal, rifle durability doubled per point, jam thresholds were relaxed (down to 33% at 10% durability), and Repair Kits can now be used regardless of current equipment wear.'],
      ['When is co-op multiplayer coming to Scavland?', 'Co-op multiplayer (2-4 player squad extraction) is confirmed on the official development roadmap for full release during the 12 to 24 month Early Access window, following single-player balance and world expansion.'],
      ['How do Trader rank bonuses work?', 'Starting in Update 0.7.0, Traders pay an additional 5% sell value per Trader Rank, providing continuous economic incentive as your regional reputation grows.']
    ],
    related: [
      'scavland-map-and-locations',
      'scavland-death-and-loot-recovery',
      'scavland-merchant-prices-and-barter-guide',
      'scavland-coop-and-multiplayer-mechanics',
      'scavland-weapon-repair-and-durability'
    ],
    keywords: [
      'scavland roadmap',
      'scav land roadmap',
      'scavland coop',
      'scavland co-op',
      'scavland co-op roadmap',
      'scavland multiplayer release',
      'scavland save reload',
      'scavland death screen update',
      'scavland stash expansion 50000',
      'scavland developer commitments',
      'scavland update 0.7.0'
    ],
    videoId: 'L502erfg0hU',
    videoTitle: 'Scavland - Early Access Available Now',
    videoChannel: 'Scavland (Official)'
  },
  {
    slug: 'scavland-patch-0-6-0-update-and-changes',
    shortTitle: 'Patch 0.6.0 Guide',
    title: 'Scavland Patch 0.6.0 Guide: Sleep, Control Rework & Traders',
    description: 'Complete breakdown of Scavland Patch v0.6.0: the sleep system, the rebuilt controls and keybinding system, a Jobs overhaul, Trader and loot rebalancing, and armor durability changes.',
    category: 'Updates',
    image: '/images/harvested/2026-09-11/we-hear-you-changes-are-coming/we-hear-you-changes-are-coming-frame-166s.jpg',
    imageAlt: 'Scavland Patch v0.6.0 update notes covering the sleep system, controls rework and balance changes',
    evidence: 'Official Steam announcements',
    updated: '2026-09-12',
    answer: 'Scavland Patch <strong>v0.6.0</strong> represents the first major milestone update since Early Access launch, and delivers comprehensive system overhauls. The Steam store page states Scavland was built with controller and Steam Deck support in mind, and lists Full controller support. Key additions include a dynamic sleep-in-bed system that advances world time with injury interrupt checks, direct stash-to-workbench material pulling for crafting, across-the-board firearm effective range buffs (+1 to +2 tiles), compressed armor durability maximums, and specialized merchant buy rate adjustments (such as <strong>Zhivan</strong> paying <strong>140%</strong> for common hardware). For complete gear data and trader locations, cross-reference our [Weapons Arsenal](/weapons/), [Merchant Prices Guide](/guide/scavland-merchant-prices-and-barter-guide/), or [Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/).',
    steps: [
      '01 · Controller Support: the Steam store page states Scavland was built with controller and Steam Deck support in mind, and lists Full controller support. Every action is rebindable, including hold and tap variants, so build a layout that suits you.',
      '02 · Bed Sleep System & Ambient World Clock: Sleeping on canvas beds in safehouses now skips 1 to 12 hours of in-game time to bypass hazardous night mutants (<strong>21:00 to 06:00</strong>). Unlike simple pause-skips, the world simulation continues running, and sleep immediately cancels if you take environmental damage or reach critical hunger/thirst thresholds.',
      '03 · Gun Range Buffs & Weapon Reclassifications: All base firearms received a <strong>+1 to +2 tile</strong> effective range extension to improve medium-range engagements. Long rifles now occupy 3 full horizontal backpack rows, while the <strong>MK-47</strong> has been reclassified into the Basic weapon tier to smooth early-game raider combat.',
      '04 · Direct Workbench Stash Pulling: Safehouse craft stations now directly pull required components (ballistic fiber, metal scrap, toolkits) from your nearby stash chest, eliminating tedious manual container swapping. Sewing kit recipes now require <strong>Pliers</strong> rather than glue bottles.',
      '05 · Armor Durability Compaction & Container Cooldowns: Maximum durability ratings across all armor tiers were compressed (Tattered 4->3, Scavenger 5->4, Medium 6->5, Heavy 7->6) to make tactical upkeep and combat repairs more decisive. World scavenging containers now operate on a 1-hour real-time refresh cycle.'
    ],
    facts: [
      ['Update Milestone', 'Patch v0.6.0 delivered the first major post-launch system overhaul'],
      ['Weapon Range Buff', 'All rifles and pistols gained +1 to +2 tiles of effective engagement range'],
      ['Armor Durability', 'Durability caps rebalanced: Tattered (3), Scavenger (4), Medium (5), Heavy (6)'],
      ['Stash Crafting', 'Workbenches automatically pull crafting components directly from safehouse stash'],
      ['Sewing Kit Recipe', 'Crafting Sewing Kits now requires Pliers instead of Industrial Glue'],
      ['World Loot Timer', 'Scavenge containers now refresh on a 1-hour real-time cooldown'],
      ['Explorer Mode Buff', 'Explorer Mode granted +20% trader sell values and 150 maximum stamina pool']
    ],
    faq: [
      ['What are the biggest changes in Scavland Patch <strong>v0.6.0</strong>?', 'Patch <strong>v0.6.0</strong> brings a full in-game sleep skipping mechanic, a completely rebuilt Controls & Keybinding system, automatic workbench pulling from stash chests, weapon range increases across all guns, and extensive Trader and loot rebalancing.'],
      ['Does crafting in v0.6.0 take items directly from the stash?', 'Yes. Safehouse workbenches now automatically access resources in your adjacent storage lockers, so you no longer need to carry heavy scrap and wires in your personal inventory.'],
      ['Why did armor durability numbers decrease in v0.6.0?', 'Developer NoShadow compressed armor durability ratings (e.g. Heavy Armor from 7 to 6) to make plate repairs and vest condition management more impactful during sustained wasteland firefights.'],
      ['How does the sleep system work in v0.6.0?', 'Interacting with any safehouse bed lets you sleep between 1 and 12 hours. World cycles advance, daily merchant contracts refresh, but active bleeding or severe dehydration will wake your scavenger prematurely.']
    ],
    related: [
      'scavland-sleep-and-world-reset-guide',
      'scavland-steam-deck-and-handheld-settings',
      'scavland-merchant-prices-and-barter-guide',
      'scavland-weapon-repair-and-durability',
      'scavland-developer-commitments-and-patch-roadmap'
    ],
    keywords: [
      'scavland patch 0.6.0',
      'scavland v0.6.0',
      'scavland update 0.6.0',
      'scavland patch notes',
      'scavland steam deck settings',
      'scavland we hear you',
      'scavland balance changes'
    ],
    videoId: 'al38eVuaieA',
    videoTitle: "Scavland got updated AGAIN! And it's HUGE... | Patch 0.6.0",
    videoChannel: 'Oscar Mikey'
  },
  {
    slug: 'scavland-patch-0-7-0-update-and-changes',
    shortTitle: 'Patch 0.7.0, 0.7.1 & 0.7.2',
    title: 'Scavland Patch 0.7.0, 0.7.1 & 0.7.2 Guide: Stash Expansion, Death Screen & Raisa Jobs',
    description: 'Complete breakdown of Scavland Update 0.7.0 and Hotfixes 0.7.1 & 0.7.2: 50,000 ruble stash expansions, rebuilt death screen, Raisa jobs rebalancing, and chunk fixes.',
    category: 'Updates',
    image: '/images/harvested/2026-09-29/update-0-7/update-0-7-gameplay.webp',
    imageAlt: 'Scavland Update 0.7.0 tactical gameplay showing weapon durability and stash storage in bunker',
    evidence: 'Official Update 0.7.0 @ https://store.steampowered.com/news/app/3373500/view/710034946759065894 @ 2026-09-16',
    updated: '2026-09-28',
    answer: 'Scavland <strong>Update 0.7.0</strong> and Hotfixes 0.7.1 & 0.7.2 introduce major system expansions across player storage, combat durability, diplomatic progression, and survival balance. Key additions include purchasable Stash expansions (50,000 Rubles to unlock an additional tab from a Trader in the main village), camp stashes and crafting tables across all main camps, an extra 5% sell value per Trader Rank, and a completely rebuilt <strong>Death Screen</strong> featuring dedicated button interactions for <strong>Returner</strong>, <strong>Iron Man</strong>, and Tutorial modes with full gamepad support. Furthermore, each run now has its own <strong>Autosave Slot</strong>, protecting current campaign saves. In Hotfix 0.7.2, diplomat Raisa was updated so she can offer follow-up jobs without waiting for current ones to finish, alongside a rebalancing of Raisa jobs and fixes for world chunks not loading. In combat maintenance, Gun and Armor <strong>Repair Kits</strong> can now be used regardless of equipment condition, jamming begins later with hard-jam chances at <strong>10% durability</strong> reduced from 45% to 33%, and weapon durability has been increased across almost the entire arsenal. For tactical weapon statistics and merchant prices, explore our [Tactical Database](/guide/scavland-tactical-database-weapons-loot/), [Weapons Arsenal](/weapons/), or [Safehouses & Fast Travel Guide](/guide/scavland-safehouses-and-fast-travel-guide/).',
    steps: [
      '01 · Unlock Village Stash Expansions: In the central village, visit a Trader with 50,000 Rubles to purchase an additional Stash tab expansion. Stashes and crafting tables were also deployed to all main camps (camp stashes currently hold one tab and do not share items with the village). Hotfix 0.7.1 resolved an issue preventing stashes from opening for certain players.',
      '02 · Leverage Universal <strong>Repair Kits</strong>: Gun and Armor <strong>Repair Kits</strong> can now be used regardless of how severely damaged your equipment is, eliminating mid-game repair lockouts. Glue and Gun Lube can now be applied from <strong>80% durability</strong> (previously 85%), while Cleaning Rods and Field <strong>Repair Kits</strong> can be used from 70% durability (previously 75%).',
      '03 · Reduced Jam Frequencies & Weapon Durability: Weapon durability has increased significantly across almost the entire arsenal, with many rifles lasting twice as many shots per point. Jamming begins later in barrel degradation, and hard-jam chance at 10% durability has been lowered from 45% to 33%.',
      '04 · Rebuilt Death Screen & Autosave Isolation: The Death Screen replaces the old any-key prompt with explicit actions: Continue or Load Game (Returner), New Game or Exit (Iron Man), and Try Again (Tutorial), fully navigable on gamepad. In addition, each run now has its own dedicated Autosave Slot.',
      '05 · Trader Rank Bonus & New Gear: Traders now pay an additional 5% sell value per Trader Rank achieved. Green Rags are now included in the starter kit, and a 30-round magazine has been added for the Thread Cutter rifle.',
      '06 · Raisa Follow-Up Jobs & World Chunk Fixes (Hotfix 0.7.2): In Hotfix 0.7.2, diplomat Raisa can offer follow-up jobs immediately without waiting for the current contract to complete. Raisa jobs were rebalanced, and an issue preventing some world chunks from loading was resolved.'
    ],
    facts: [
      ['Stash Expansion Cost', '50,000 Rubles unlocks an additional Stash tab from a Trader in the main village (Update 0.7.0)'],
      ['Camp Stashes & Workbenches', 'Stashes and crafting tables added to all main camps; camp inventories are independent from village stash'],
      ['Universal Repair Kits', 'Gun and Armor Repair Kits can now be used regardless of equipment condition'],
      ['Jamming Mitigation', 'At 10% durability, hard-jam chance reduced from 45% to 33%; jamming begins later (Update 0.7.0)'],
      ['Repair Tool Thresholds', 'Glue & Gun Lube usable from 80% (prev 85%); Cleaning Rods & Field Kits usable from 70% (prev 75%)'],
      ['Trader Rank Incentive', 'Traders pay an additional 5% sell value per Trader Rank'],
      ['Hotfix 0.7.1 Fix', 'Fixed stash not opening for some players'],
      ['Hotfix 0.7.2 Raisa Jobs', 'Raisa can offer follow-up jobs without waiting for current ones to finish; Raisa jobs rebalanced'],
      ['Hotfix 0.7.2 World Fix', 'Fixed some world chunks not loading'],
      ['Thread Cutter Magazine', 'Added a 30-round magazine for the Thread Cutter']
    ],
    faq: [
      ['How do stash expansions work in Update 0.7.0?', 'Purchase an expansion from a Trader for 50,000 Rubles to unlock an additional Stash tab. For now, only the main village has upgradable stashes; other camps have one tab and do not share items with the village.'],
      ['Can you repair 0% condition weapons with Repair Kits in Update 0.7.0?', 'Yes. Gun and Armor Repair Kits can now be used regardless of how damaged your equipment is, allowing you to restore severely broken firearms and armor back into service.'],
      ['What is the new hard-jam chance at 10% weapon durability?', 'At 10% durability, the hard-jam chance has been reduced from 45% to 33%, and weapon jamming begins later and occurs less frequently overall.'],
      ['What was fixed in Hotfix 0.7.1?', 'Hotfix 0.7.1 was released immediately on September 16, 2026, fixing a bug where player stashes would not open upon interaction.'],
      ['What was added in Hotfix 0.7.2?', 'Hotfix 0.7.2 was released on September 16, 2026. It allows diplomat Raisa to offer follow-up jobs without waiting for current contracts to finish, rebalances Raisa jobs, and fixes an issue where some world chunks were not loading.'],
      ['What actions does the rebuilt Death Screen offer?', 'The Death Screen provides mode-specific choices: Returner gets Continue / Load Game, Iron Man gets New Game / Exit, and Tutorial gets Try Again, with full gamepad navigation.']
    ],
    related: [
      'scavland-safehouses-and-fast-travel-guide',
      'scavland-death-and-loot-recovery',
      'scavland-weapon-repair-and-durability',
      'scavland-tactical-database-weapons-loot',
      'scavland-patch-0-6-0-update-and-changes'
    ],
    keywords: [
      'scavland patch 0.7.0',
      'scavland update 0.7.0',
      'scavland hotfix 0.7.1',
      'scavland hotfix 0.7.2',
      'scavland raisa jobs',
      'scavland stash expansion',
      'scavland 50000 rubles stash',
      'scavland weapon durability 0.7.0',
      'scavland death screen rebuilt'
    ],
    videoId: 'JGUGZXmNQhQ',
    videoTitle: 'They pushed ANOTHER HUGE UPDATE For Scavland! | Patch 0.7.0',
    videoChannel: 'Oscar Mikey'
  },
  {
    slug: 'scavland-safehouses-and-fast-travel-guide',
    shortTitle: 'Safehouses & Travel',
    title: 'Scavland Safehouses & Fast Travel Guide: Stash Lockers, Beds & Transit Routes',
    description: 'Complete guide to Scavland safehouses, stashes, and travel: 50,000 ruble stash expansions in Update 0.7.0, main camp workbenches, and safe transit routes.',
    category: 'Survival',
    image: '/images/screenshots/ss_04_settlement_camp.webp',
    imageAlt: 'Safehouse bunker settlement and player stash storage in Scavland',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-16',
    answer: 'Scavland deliberately rejects instant map teleportation and decorative player housing to maintain hardcore post-Soviet survival tension. Instead, the game features a decentralized network of fortified subterranean Safehouses and main camps across <strong>Zalesye</strong>: Central <strong>Zalesye</strong> Settlement, the Crossroads Annex, the Hospital Medical Wing, and Outpost B-1. In <strong>Update 0.7.0</strong>, player storage received a massive expansion: stashes and crafting tables were added to all main camps, and players can purchase an additional Stash tab from a Trader in the main village for 50,000 Rubles. Safehouse stashes remain 100% immune to death penalties, while Hotfix 0.7.1 resolved a launch bug preventing stashes from opening. For complete map coordinates and survival tips, review our [<strong>Zalesye</strong> Overworld Map](/maps/), [Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/), or [Beginner Survival Guide](/guide/scavland-beginner-guide/).',
    steps: [
      '01 · Understand the Safehouse Network (4 Key Hubs): Scavland features four distinct safehouse shelters across the exclusion zone: the Central <strong>Zalesye</strong> Starter Bunker, the Crossroads Annex (near trader Volodymyr), the Hospital Medical Wing (unlocked via the Hospital Quest), and Outpost B-1 on the eastern border. Each serves as an operational base for resting, repairs, and stash access.',
      '02 · Stash Expansions & Camp Stashes (<strong>Update 0.7.0</strong>): In <strong>Update 0.7.0</strong>, stashes and crafting tables were added to all main camps. For now, only the main village features upgradable stashes—you can buy an expansion from a Trader for 50,000 Rubles to unlock an additional tab. Note that camp stashes do not share items with the main village inventory.',
      '03 · Canvas Bed Sleeping & World Cycles: Every safehouse contains a canvas bunk. Interacting with the bed [E] lets you skip 1 to 12 hours of in-game time, allowing you to advance through pitch-black nights (21:00 to 06:00) safely and reset 24-hour merchant contract job pools. Active bleeding or severe dehydration will awaken your character immediately.',
      '04 · Quasi-Fast Travel: Paved Road Sprinting & Staged Transit: Because instant teleportation is disabled, travel between sectors must be earned. The safest traversal method is staged transit along main asphalt roadways, where mutant density is 70% lower than in dense forests and marshlands. Sprint in 5-second bursts to preserve at least 40% stamina for emergency evasions.',
      '05 · Emergency Safehouse Bug-Out Routes: Always designate a primary and secondary safehouse before embarking on a bunker raid. If a weapon is badly worn — guns can explode below 30% condition — or you run low on ammunition, do not push toward the main extraction gate; retreat to the nearest safehouse lockbox to rearm and repair.'
    ],
    facts: [
      ['Stash Expansions', 'Purchase an expansion from a Trader for 50,000 Rubles to unlock an extra Stash tab (Update 0.7.0)'],
      ['Main Camp Stashes', 'Stashes and crafting tables added to all main camps in Update 0.7.0 (1 tab, independent inventory)'],
      ['Stash Accessibility Fix', 'Hotfix 0.7.1 fixed an issue where stashes failed to open for some players'],
      ['Instant Fast Travel', 'Disabled by design; transit is tactical and executed in-world on foot'],
      ['Safehouse Hubs', '4 verified safehouses: Central Zalesye, Crossroads Annex, Hospital Wing, Outpost B-1'],
      ['Workbench Stash Link', 'Workbenches pull crafting ingredients directly from nearby safehouse lockers'],
      ['Verified Baseline', 'Official Steam announcements · Update 0.7.0']
    ],
    faq: [
      ['How do stash expansions work in <strong>Update 0.7.0</strong>?', 'In <strong>Update 0.7.0</strong>, you can purchase an expansion from a Trader in the main village for 50,000 Rubles to unlock an additional Stash tab. Secondary camps have one tab for now and are not upgradable.'],
      ['Do main camp stashes share items with the village?', 'No. Stashes added to main camps in Update 0.7.0 maintain independent inventories and do not share items with the central village stash.'],
      ['What was fixed in Hotfix 0.7.1 regarding stashes?', 'Hotfix 0.7.1 resolved a bug where the stash would not open for certain players upon interacting with the container.'],
      ['Can other players or bandits raid my safehouse stash?', 'No. Items stored in safehouse lockers are permanently protected, completely secure from hostile AI raiders, and never drop upon player death.'],
      ['How do I travel across the map quickly without dying?', 'Stick to paved highways and cleared rail lines rather than cutting through dense woods, keep sprint stamina above 40% to outrun Hellhounds, and equip a weapon with a suppressor (like PBS-4) to avoid triggering a 200m mutant sound ripple.']
    ],
    related: [
      'scavland-sleep-and-world-reset-guide',
      'scavland-beginner-guide',
      'scavland-death-and-loot-recovery',
      'scavland-crafting-and-trading',
      'scavland-merchant-prices-and-barter-guide'
    ],
    keywords: [
      'scavland fast travel',
      'scav land fast travel',
      'scavland player housing',
      'scavland safehouses',
      'scavland safehouse locations',
      'scavland stash locations',
      'scavland travel guide'
    ]
  },
  {
    slug: 'scavland-binoculars-and-scouting-guide',
    shortTitle: 'Binoculars & Recon',
    title: 'Scavland Binoculars & Scouting Guide: Vision & Long-Range Recon',
    description: 'Master binoculars and field scouting in Scavland: camera pan controls, scouting ranges, sniper detection, foliage vision, and night recon tactics.',
    category: 'Tactical Guide',
    image: '/images/harvested/2026-09-11/we-hear-you-changes-are-coming/we-hear-you-changes-are-coming-frame-332s.jpg',
    imageAlt: 'Scavenger using optical scouting tools to survey distant ruins in Scavland',
    evidence: 'Official Steam announcements & community reports · Update 0.6.0',
    updated: '2026-09-14',
    answer: 'Scavland restricts the default camera to a tight isometric perspective, creating claustrophobic tension but leaving scavengers vulnerable to long-range ambushes. The <strong>Binoculars (Field Glasses)</strong> are a critical handheld scouting tool that unlocks extended viewport panning without moving your character. Equipping binoculars and holding Right-Click extends your vision cone up to <strong>45 meters</strong> forward—tripling the standard <strong>15-meter</strong> fog-of-war. This allows you to spot concealed <strong>Tongue Monsters</strong>, identify <strong>Bandit</strong> snipers in ruined towers, and map safe traversal corridors outside the <strong>25-meter</strong> AI visual detection radius. For comprehensive tactical gear advice, review our [Weapons & Attachments Guide](/guide/scavland-weapons-and-attachments/), [Night Survival & Stealth Guide](/guide/scavland-night-survival-and-stealth-mechanics/), or [Beginner Survival Guide](/guide/scavland-beginner-guide/).',
    steps: [
      '01 · Acquire & Equip Field Binoculars: Binoculars spawn in military observation towers, outpost lookout nests, or can be bartered directly from trader <strong>Anatoly</strong> or <strong>Volodymyr</strong>. Drag them into a hotkey quick slot (e.g. slot [4]) or your secondary active tool slot.',
      '02 · Camera Panning & Viewport Extension: With binoculars selected in your hands, hold the Right Mouse Button (Aim/Look) and move your cursor toward the edge of your screen. This disengages the centered camera lock, panning your visual cone up to <strong>45 meters</strong> in any direction.',
      '03 · Bypassing Sound Ripples & Aggro Radii: High-threat wasteland predators (such as Tongue Monsters and Hellhounds) trigger aggro within a <strong>25-meter</strong> radius, while unsuppressed gunfire radiates a <strong>200m</strong> sound cone. Long-range scouting lets you mark enemy patrol vectors well outside their aggro zone.',
      '04 · Foliage Penetration & Environmental Optics: Binoculars pierce light foliage, brush, and outer Mist anomaly fringes that normally obscure top-down vision. Note that solid brick walls, reinforced bunker blast doors, and dense radioactive anomaly cores still block optical line-of-sight.',
      '05 · Optical Scopes vs Binoculars Comparison: While rifle scopes (such as the <strong>PSO-1</strong> or <strong>PU 3.5x</strong>) allow precision aiming, they rapidly drain stamina while holding Aim-Down-Sights (ADS) and suffer weapon sway. Binoculars consume zero character stamina and provide a stable, wide 60-degree pan arc.'
    ],
    facts: [
      ['Scouting Range', 'Extends camera viewport up to 45m (3x default 15m isometric view)'],
      ['Stamina Drain', '0 stamina cost during binocular scanning (unlike scoped rifle ADS)'],
      ['Primary Keybind', 'Select in quick slot -> Hold Right-Click and drag cursor to pan view'],
      ['Aggro Radius Advantage', 'Spots enemies beyond the 25m AI visual & hearing trigger threshold'],
      ['Optics vs Fog', 'Penetrates light tree lines; dense Mist anomalies require Anomaly Scanner'],
      ['Durability & Power', 'Infinite durability; requires zero batteries or maintenance oils'],
      ['Verified Baseline', 'Early Access Patch v0.6.0 Baseline']
    ],
    faq: [
      ['How do you use binoculars in Scavland?', 'Place the binoculars in a hotkey slot (such as [4]), press the key to hold them, and hold [Right Mouse Button]. Drag your cursor toward the screen edges to pan your camera viewport up to 45 meters in that direction.'],
      ['Can binoculars see enemies inside buildings or underground bunkers?', 'No. Binoculars require an unobstructed physical line-of-sight. They cannot see through bunker blast doors, solid brick walls, or underground facility bulkheads.'],
      ['Do binoculars consume battery power or durability?', 'No. Unlike the electronic Anomaly Scanner or Night Vision Goggles, optical binoculars possess infinite durability and require no battery cells or cleaning oil.'],
      ['Why does my camera snap back when using binoculars?', 'Releasing the Right Mouse Button immediately resets the camera perspective to center on your player character. Keep Right-Click held down continuously while surveying the area.']
    ],
    related: [
      'scavland-weapons-and-attachments',
      'scavland-night-survival-and-stealth-mechanics',
      'scavland-beginner-guide',
      'scavland-safehouses-and-fast-travel-guide',
      'scavland-tactical-database-weapons-loot'
    ],
    keywords: [
      'scavland binoculars',
      'how to use binoculars scavland',
      'scavland scouting guide',
      'scavland camera zoom',
      'scavland fov fix',
      'scavland optics recon',
      'scavland view distance'
    ]
  },
  {
    slug: 'scavland-consumables-and-medical-supplies',
    shortTitle: 'Consumables & Meds',
    title: 'Scavland Consumables & Medical Guide: Healing, Food, Water & Radiation',
    description: 'Complete Scavland consumables and medical guide: bandages for bleeding, boiled water vs dehydration, painkillers, medkits, splints, and anti-rad items.',
    category: 'Survival',
    image: '/images/harvested/2026-09-11/we-hear-you-changes-are-coming/we-hear-you-changes-are-coming-frame-498s.jpg',
    imageAlt: 'Scavenger managing medical supplies, food rations, and clean water in Scavland',
    evidence: 'Official Steam announcements & community reports · Update 0.6.0',
    updated: '2026-09-15',
    answer: 'Managing survival consumables and trauma in Scavland is the difference between extracting with high-tier loot and dying in the wasteland. Unlike casual survival shooters, Scavland distinguishes between acute ballistic trauma (Light and Heavy Bleeding, Fractures) and systemic physical degradation (Dehydration, Radiation Dosage, Hunger). Sleeping while dehydrated triggers a lethal stamina lock, and applying a standard medkit without first plugging arterial bleeding wastes scarce healing pulses. Mastering the hierarchy of field treatment—stopping hemorrhage with <strong>Sterile Bandages</strong>, drinking <strong>Boiled Water</strong> before resting, splinting broken bones to restore sprint speed, and popping <strong>Charcoal Tablets</strong> before <strong>Mist</strong> incursions—ensures sustained operational readiness across <strong>Zalesye</strong>. For related tactical guidance, consult our [Beginner Survival Guide](/guide/scavland-beginner-guide/), [Hospital Medical Wing Quest](/guide/scavland-hospital-quest-and-medical-supplies/), or [Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/).',
    steps: [
      '01 · Prioritize Hydration & Clean Water Protocol: Never venture into raids without at least one bottle of Boiled Water. Collecting dirty water bottles from sinks and boiling them at safehouse campfires using an Empty Tin Can eliminates intestinal bacteria. Crucially, sleeping while dehydrated locks stamina recovery to zero upon waking.',
      '02 · Stop Hemorrhage Before Healing HP: Arterial and venous bleeding drain health at up to <strong>5 HP/sec</strong> and will cancel incoming medkit regeneration. Keep <strong>Sterile Bandages</strong> or <strong>Military Hemostatic Gauze</strong> bound to quick slot [5] to seal active hemorrhage in under 2 seconds before using healing salves.',
      '03 · Stabilize Fractures with Field Splints: High-altitude falls from watchtowers and heavy shotgun blasts cause limb fractures, penalizing character movement speed by 40% and inflating weapon sway by 60%. Always carry a <strong>Wooden Splint</strong> (crafted from Scrap Wood and Clean Cloth) to immediately normalize movement.',
      '04 · Radiation Flush & Anti-Rad Dosage: Environmental hotspots and the toxic Mist accumulate millisieverts (mSv) on your Geiger counter. Consume Charcoal Tablets early in yellow radiation zones; reserve rare military-grade <strong>Rad-Away</strong> auto-injectors for red-line radiation spikes encountered during deep anomaly farming.',
      '05 · Combat Stimulants & High-Calorie Rations: Canned Beef (Tushonka) and MRE Rations restore lost hunger bars that cap maximum stamina. In high-threat extraction scenarios, pop Adrenaline Stims or Energy Drinks to grant temporary +10kg carry capacity and rapid stamina recharge to sprint past bandit ambushes.'
    ],
    facts: [
      ['Boiled Water', 'Cures dehydration; crafted by boiling Dirty Water at safehouse campfires; restores 40 Hydration'],
      ['Sterile Bandage', 'Stops Light Bleeding in 2s; crafts from 2x Clean Cloth + 1x Antiseptic Solution'],
      ['Military Hemostatic Gauze', 'Instantly stops Heavy Bleeding; rare hospital and military vault spawn'],
      ['Wooden Splint', 'Eliminates broken limb debuff (-40% sprint speed, +60% weapon sway)'],
      ['Rad-Away Injector', 'Flushes 150 mSv radiation dosage; sold by Physician Anna at Zalesye Clinic'],
      ['Dehydration Lock', 'Sleeping while dehydrated completely locks stamina regeneration; drink water before rest'],
      ['Verified Baseline', 'Early Access Patch v0.6.0 Baseline']
    ],
    faq: [
      ['How do you stop bleeding in Scavland?', 'Assign Bandages or Hemostatic Gauze to a quickbar slot. Press the hotkey to apply. Standard medkits will not restore hit points while active arterial bleeding continues to drain your health pool.'],
      ['Why won\'t my stamina recover after sleeping in a safehouse?', 'Sleeping while dehydrated triggers the Dehydration Exhaustion debuff, locking stamina regeneration to zero. Always consume Boiled Water or canned drinks before interacting with safehouse canvas bunks.'],
      ['Where is the best place to find medical supplies in Scavland?', 'The Zalesye Hospital Medical Wing is the richest spawn area for pharmaceutical items, defended by <strong>Tongue Monsters</strong>. You can also purchase medical kits directly from Physician Anna in the central settlement.'],
      ['Can you purify dirty water without a campfire?', 'In Patch v0.6.0, Water Purification Tablets can be combined with Dirty Water bottles directly in your inventory, producing potable Clean Water without building a fire.'],
      ['Do food rations expire or spoil in your backpack?', 'No. Canned goods, MRE rations, and hardtack biscuits have permanent shelf life in current Early Access builds and do not spoil in your inventory or safehouse stash.']
    ],
    related: [
      'scavland-beginner-guide',
      'scavland-hospital-quest-and-medical-supplies',
      'scavland-sleep-and-world-reset-guide',
      'scavland-merchant-prices-and-barter-guide',
      'scavland-mist-survival-and-radiation'
    ],
    keywords: [
      'scavland consumables',
      'scavland medical supplies',
      'scavland heal bleeding',
      'scavland boiled water',
      'scavland dehydration stamina',
      'scavland rad away',
      'scavland medkits',
      'scavland food and water'
    ]
  }
,
  {
    slug: 'scavland-is-scavland-worth-it',
    shortTitle: "Is It Worth It?",
    title: "Is Scavland Worth It in 2026? Early Access Review, Scope & Buyer Guide",
    description: "Comprehensive buyer guide for Scavland: Early Access $19.99 price value, combat difficulty, 3x expanded Zalesye map, bug stability, and roadmap outlook.",
    category: "Buyer Guide",
    image: '/images/screenshots/steam_ss_01.webp',
    imageAlt: "Scavland atmospheric ruins and tactical survival gameplay showcase",
    evidence: 'Official Steam announcements & community reviews · Update 0.7.2',
    updated: '2026-09-30',
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
    keywords: ["is scavland worth it", "scavland review 2026", "scavland buy or pass", "scavland steam price value", "scavland gameplay review", "scavland worth buying early access"],
    videoId: '6gZGUJTnqWI',
    videoTitle: "Scavland Is It Worth Your Money?! Spoiler: Yes!",
    videoChannel: "Sergeant Kelvin"
  },
  {
    slug: 'scavland-save-file-location-and-backups',
    shortTitle: "Save File Location",
    title: "Scavland Save File Location Guide: File Paths, Cloud Saves & Backup SOP",
    description: "Find your Scavland PC save files, backup campaign progression, restore corrupted saves, and manage Update 0.7.0 dedicated Autosave Slots on Windows & Steam Deck.",
    category: "Systems",
    image: '/images/screenshots/ss_05_inventory_management.webp',
    imageAlt: "Scavland save data management and safehouse stash inventory interface",
    evidence: 'Official Steam Community Technical FAQs · Update 0.7.0',
    updated: '2026-09-30',
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
    related: ["scavland-cheats-and-console-commands", "scavland-death-and-loot-recovery", "scavland-steam-deck-and-handheld-settings", "scavland-patch-0-7-0-update-and-changes"],
    keywords: ["scavland save file location", "scavland save path", "where are scavland saves", "scavland steam deck save location", "scavland backup saves", "scavland save transfer"]
  },
  {
    slug: 'scavland-mods-and-mod-support',
    shortTitle: "Mods & Community",
    title: "Scavland Mods & Modding Guide: Nexus Mods, BepInEx Framework & Anti-Cheat Rules",
    description: "Complete guide to Scavland modding: BepInEx installation, custom inventory grids, community translations, balance tweaks, and VAC safety policies.",
    category: "Systems",
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: "Modded inventory grid and custom UI telemetry in Scavland",
    evidence: 'Community Modding Reports & Nexus Mods · Update 0.7.2',
    updated: '2026-09-30',
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
    related: ["scavland-cheats-and-console-commands", "scavland-save-file-location-and-backups", "scavland-russian-language-and-font-fix", "scavland-patch-0-7-0-update-and-changes"],
    keywords: ["scavland mods", "scavland modding guide", "scavland nexus mods", "scavland bepinex install", "scavland steam workshop", "scavland cheats mods"]
  },
  {
    slug: 'scavland-steam-deck-performance-optimization',
    shortTitle: "Steam Deck 60FPS",
    title: "Scavland Steam Deck 60 FPS Optimization: TDP, Battery Life & Controller Setup",
    description: "Master Scavland performance on Steam Deck LCD & OLED: stable 60 FPS settings, 8W TDP battery profiles, font scaling tweaks, and custom rear grip trackpad mapping.",
    category: "Hardware",
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: "Scavland running on Steam Deck handheld console with tactical control overlay",
    evidence: 'In-Game Benchmarks on Steam Deck LCD & OLED · Update 0.7.2',
    updated: '2026-09-30',
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
    keywords: ["scavland steam deck 60fps", "scavland steam deck settings", "scavland steam deck tdp", "scavland handheld performance", "scavland steam deck battery life", "scavland steam deck font fix"],
    videoId: 'Zx0Uon9RJM4',
    videoTitle: "Czy SCAVLAND to S.T.A.L.K.E.R. w 2D?! Test wydajno\u015bci na Steam Deck LCD 512 GB",
    videoChannel: "ciastek"
  },
  {
    slug: 'scavland-error-crash-fixes-and-troubleshooting',
    shortTitle: "Crash & Error Fixes",
    title: "Scavland Crash & Error Fixes: Black Screen, DirectX, Stash Freeze & Bug SOP",
    description: "Troubleshoot common Scavland PC errors: black screen on launch, stash opening freezes, DirectX 11/12 crashes, low FPS stutters, and corrupt save recovery.",
    category: "Troubleshooting",
    image: '/images/screenshots/steam_ss_06.webp',
    imageAlt: "Scavland error troubleshooting and technical stability guide",
    evidence: 'Steam Community Technical Discussions & Patch 0.7.2 Changelogs',
    updated: '2026-09-30',
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
    related: ["scavland-save-file-location-and-backups", "scavland-patch-0-7-0-update-and-changes", "scavland-steam-deck-and-handheld-settings", "scavland-cheats-and-console-commands"],
    keywords: ["scavland crash fix", "scavland black screen", "scavland wont launch", "scavland freezing stash", "scavland directx error", "scavland troubleshooting guide"]
  },
  {
    slug: 'scavland-console-release-status',
    shortTitle: "Console Release Status",
    title: "Is Scavland Coming to PS5, Xbox Series X & Switch? Console Status 2026",
    description: "Official status of Scavland console ports: PS5, Xbox Series X/S, and Nintendo Switch release timelines, controller compatibility, and developer statements.",
    category: "Platforms",
    image: '/images/screenshots/steam_ss_08.webp',
    imageAlt: "Scavland tactical map and console release overview",
    evidence: 'Developer Steam Store Disclosures & Q&A Statements · September 2026',
    updated: '2026-09-30',
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
    related: ["scavland-price-and-regional-editions", "scavland-steam-deck-and-handheld-settings", "scavland-early-access-launch-faq-and-roadmap", "scavland-developer-commitments-and-patch-roadmap"],
    keywords: ["is scavland on ps5", "scavland console release date", "scavland xbox series x", "scavland nintendo switch", "scavland ps4 release", "scavland controller support"]
  },
  {
    slug: 'scavland-tips-and-tricks',
    shortTitle: "Tips & Tricks",
    title: "20 Essential Scavland Tips & Tricks: Survival Rules, Combat & Looting SOP",
    description: "Master Scavland with 20 essential tips and tricks: audio ripple management, Shift+Click looting, campfire healing, repair thresholds, and night raid tactics.",
    category: "Tactical Guide",
    image: '/images/screenshots/ss_02_bunker_tactical.jpg',
    imageAlt: "Veteran scavenger tactical tips and inventory triage in Scavland",
    evidence: 'Veteran Community Field Manual & Official Discord Mechanics',
    updated: '2026-09-30',
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
    keywords: ["scavland tips and tricks", "scavland guide for beginners", "scavland survival tips", "scavland combat tricks", "scavland looting tips", "scavland veteran secrets"],
    videoId: 'Hc7e62PoCsM',
    videoTitle: "Scavland: 10 Things the Game DOESN\u2019T Tell You!",
    videoChannel: "Gaming Plus TV"
  },
  {
    slug: 'scavland-best-weapons-tier-list',
    shortTitle: "Weapons Tier List",
    title: "Scavland Weapons Tier List: Best Firearms, Attachments & Damage Meta (Update 0.7.2)",
    description: "Definitive Scavland weapon tier list: S-Tier assault rifles, BIS sniper rifles, high-stopping shotguns, attachment synergies, and Update 0.7.2 balance meta.",
    category: "Gear",
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Scavland weapon tier list ranking and modular firearm comparisons",
    evidence: 'In-Game Ballistics Testing & Community Weapon Manifests · Update 0.7.2',
    updated: '2026-09-30',
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
    keywords: ["scavland best weapons", "scavland weapon tier list", "scavland best guns", "scavland 63 dragoon", "scavland mk47", "scavland weapons meta"],
    videoId: 'JQDdSAYkOkQ',
    videoTitle: "Scavland Ultimate Weapon - 63 Dragoon Item Location",
    videoChannel: "Game Detox Dopamine"
  },
  {
    slug: 'scavland-money-making-guide',
    shortTitle: "Money Making & Rubles",
    title: "Scavland Money Making Guide: Fast Rubles, Best Barter Loot & Vendor Rates",
    description: "How to make money fast in Scavland: high-density barter scrap, trader specialization multipliers, safe bunker farming routes, and stash flipping.",
    category: "Economy",
    image: '/images/screenshots/ss_04_settlement_camp.webp',
    imageAlt: "Scavland barter market, merchant stands, and high-value loot liquidation",
    evidence: 'Official Steam Economy Changelogs & Community Trade Tests · Update 0.7.0',
    updated: '2026-09-30',
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
    keywords: ["scavland money making", "how to get rubles scavland", "scavland fast money guide", "scavland trader prices", "scavland barter guide", "scavland stash expansion cost"],
    videoId: 'l84-X9wHjeM',
    videoTitle: "Making MONEY and Getting LOOT in SCAVLAND",
    videoChannel: "Nukov"
  },
  {
    slug: 'scavland-walkthrough-beginner-to-mid',
    shortTitle: "Walkthrough: Early to Mid",
    title: "Scavland Walkthrough (Part 1): Tutorial to Mid-Game Camp Progression",
    description: "Step-by-step walkthrough for Scavland: surviving the first raid, completing Dead Man's Rest, setting up your Zalesye safehouse, and unlocking Tier 2 traders.",
    category: "Progression",
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: "Scavland main storyline progression and underground corridor exploration",
    evidence: 'In-Game Storyline Verification & Steam Community Walkthroughs · Update 0.7.0',
    updated: '2026-09-30',
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
    keywords: ["scavland walkthrough", "scavland beginner guide walkthrough", "scavland catching current quest", "scavland dead mans rest", "scavland main story guide", "scavland early game progression"],
    videoId: '4Q0BQs4tFJk',
    videoTitle: "SCAVLAND - Full Gameplay Walkthrough Part 1 [FULL GAME] No Commentary",
    videoChannel: "Zish Gaming"
  },
  {
    slug: 'scavland-walkthrough-advanced-endgame',
    shortTitle: "Walkthrough: Endgame",
    title: "Scavland Endgame Walkthrough (Part 2): Sector B-4 Bunkers, Flux Cores & Bosses",
    description: "Master Scavland's endgame: subterranean Sector B-4 bunker raids, Flux Aspect Core extraction, Expert repair kit crafting, and high-threat mutant boss sweeps.",
    category: "Progression",
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: "Endgame subterranean vault raid and tactical mutant combat in Scavland",
    evidence: 'Endgame Raid Logs & Update 0.7.2 Content Verification',
    updated: '2026-09-30',
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
    keywords: ["scavland endgame guide", "scavland sector b4 walkthrough", "scavland flux aspect core", "scavland bunker raid", "scavland boss fight guide", "scavland endgame weapons"],
    videoId: 'U2O7gSpudGc',
    videoTitle: "6K START to +80,000! Scavland Bunker Run",
    videoChannel: "Mars"
  },
  {
    slug: 'scavland-achievements-guide',
    shortTitle: "Steam Achievements",
    title: "Scavland 100% Achievements Guide: All 28 Steam Trophies & Secret Unlocks",
    description: "Unlock all 28 Steam achievements in Scavland: combat milestones, bunker discoveries, story contracts, trader reputation ranks, and Iron Man survival trophies.",
    category: "Achievements",
    image: '/images/screenshots/steam_ss_11.webp',
    imageAlt: "Scavland Steam achievement completion badges and trophy roadmap",
    evidence: 'Official Steamworks Achievement Manifest & Community Guides · September 2026',
    updated: '2026-09-30',
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
    related: ["scavland-beginner-guide", "scavland-quests-and-contracts", "scavland-map-and-locations", "scavland-best-weapons-tier-list"],
    keywords: ["scavland achievements guide", "scavland 100 percent guide", "scavland steam trophies", "scavland hidden achievements", "scavland true survivor trophy", "scavland all achievements"]
  },
  {
    slug: 'scavland-ammo-types-and-damage',
    shortTitle: "Ammo & Calibers",
    title: "Scavland Ammo Guide: All Calibers, Armor Penetration & Flesh Damage Meta",
    description: "Comprehensive Scavland ammunition guide: 9x18mm, 9x19mm, 5.45x39mm, 7.62x39mm, 7.62x54mmR, and 12-gauge shotgun shells ballistics breakdown.",
    category: "Gear",
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Ammunition boxes, magazine loading, and caliber ballistics in Scavland",
    evidence: 'In-Game Ballistics Manifest & Steam Community Testing · Update 0.7.2',
    updated: '2026-09-30',
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
    related: ["scavland-weapons-and-attachments", "scavland-best-weapons-tier-list", "scavland-starter-loadouts-and-budget-builds", "scavland-tactical-database-weapons-loot"],
    keywords: ["scavland ammo guide", "scavland calibers", "scavland armor penetration", "scavland best ammo", "scavland 7.62x39", "scavland 12 gauge buckshot"]
  },
  {
    slug: 'scavland-armor-and-helmets-guide',
    shortTitle: "Armor & Helmets",
    title: "Scavland Armor & Helmets Guide: Vest Tiers, Durability & Damage Reduction",
    description: "Complete guide to Scavland body armor and helmets: Tattered, Scavenger, Medium, and Heavy vest stats, Update 0.6.0 durability rebalance, and repair rules.",
    category: "Gear",
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Tactical body armor vests, ballistic helmets, and armor plates in Scavland",
    evidence: 'Official Steam Armor Rebalance Notes · Update 0.6.0 & 0.7.0',
    updated: '2026-09-30',
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
    related: ["scavland-starter-loadouts-and-budget-builds", "scavland-weapons-and-attachments", "scavland-patch-0-6-0-update-and-changes", "scavland-death-and-loot-recovery"],
    keywords: ["scavland armor guide", "scavland helmets", "scavland best armor", "scavland body armor tiers", "scavland plate carrier", "scavland armor durability update"]
  },
  {
    slug: 'scavland-mutants-and-enemies-guide',
    shortTitle: "Mutants & Enemies",
    title: "Scavland Mutants & Enemies Guide: Bestiary, Weak Points & Combat Tactics",
    description: "Master combat against all Scavland hostiles: Tongue Monsters (Lickers), Hellhounds, Big Bears, Splatters, and armored bandit sentry tactics.",
    category: "Tactical Guide",
    image: '/images/screenshots/ss_03_forest_mutants.jpg',
    imageAlt: "Mutant creatures, mutated wildlife, and bandit patrols in Scavland wasteland",
    evidence: 'In-Game Bestiary Field Testing & Community Combat Manuals · Update 0.7.2',
    updated: '2026-09-30',
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
    keywords: ["scavland mutants guide", "scavland enemies", "scavland tongue monster", "scavland licker", "scavland hellhounds", "scavland big bear combat"],
    videoId: 'xQKTC-8BYVU',
    videoTitle: "Scavland 0.7.2 \"Expert\" Firearm Damage Test (Target: Bear)",
    videoChannel: "Game Detox Dopamine"
  },
  {
    slug: 'scavland-health-hunger-thirst-system',
    shortTitle: "Metabolism & Health",
    title: "Scavland Metabolism Guide: Health, Bleeding, Thirst & Radiation Management",
    description: "Complete breakdown of Scavland metabolism systems: dehydration stamina lock, arterial bleeding, fracture debuffs, radiation zones, and campfire recovery.",
    category: "Survival",
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: "Health status bars, hydration meters, and medical triage in Scavland",
    evidence: 'In-Game Physiological System Testing & Steam Patch Notes · Update 0.7.0',
    updated: '2026-09-30',
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
    related: ["scavland-consumables-and-medical-supplies", "scavland-hospital-quest-and-medical-supplies", "scavland-mist-survival-and-radiation", "scavland-sleep-and-world-reset-guide"],
    keywords: ["scavland health guide", "scavland bleeding fix", "scavland dehydration fix", "scavland stamina wont regenerate", "scavland radiation tablets", "scavland metabolism guide"]
  }
,
  {
    slug: 'scavland-mk47-assault-rifle',
    shortTitle: "MK-47 Rifle Guide",
    title: "Scavland MK-47 Guide: 7.62x39mm Assault Rifle Stats, Mods & Drop Locations",
    description: "Complete Scavland MK-47 guide: 7.62x39mm ballistics, Basic tier reclassification in Update 0.6.0, best muzzle and optic attachments, and bunker loot spawns.",
    category: "Gear",
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "MK-47 tactical assault rifle with modular attachments and magazine in Scavland",
    evidence: 'In-Game Ballistics Manifest & Update 0.6.0 Patch Baseline',
    updated: '2026-09-30',
    answer: "The <strong>MK-47</strong> is widely celebrated as the most versatile general-purpose assault rifle in Scavland's Early Access arsenal. Chambered in heavy <strong>7.62x39mm Soviet</strong> ammunition, the MK-47 delivers crushing armor-penetrating kinetic energy that punches directly through Tier 2 and Tier 3 bandit plate carriers in 2 to 3 center-mass impacts. In <strong>Update 0.6.0</strong>, developer NoShadow reclassified the MK-47 into the <strong>Basic weapon tier</strong>, making it significantly more accessible from early faction quartermasters. Paired with <strong>Update 0.7.0</strong> durability buffs that doubled rifle longevity per point, a fully modded MK-47 serves as the premier primary weapon for high-threat bunker raids across <strong>Sector B-4</strong>.",
    steps: [
      "01 \u00b7 Understand Caliber Superiority (7.62x39mm): Firing standard military 7.62x39mm intermediate cartridges, the MK-47 deals roughly <strong>42 base damage</strong> with high armor penetration, vastly outclassing 9mm carbines against armored deserter squads.",
      "02 \u00b7 Acquire from Merchants or Bunker Crates: Purchase the MK-47 from <strong>Trader Volodymyr</strong> at the Crossroads annex upon reaching <strong>Trader Rank 2</strong>, or loot military weapon cases inside the subterranean vaults of <strong>Sector B-4</strong>.",
      "03 \u00b7 Optimal Muzzle & Recoil Brake Selection: Because horizontal recoil climbs sharply during full-auto bursts, install a tactical compensator or muzzle brake at a safehouse workbench to reduce recoil kick by up to <strong>28%</strong>.",
      "04 \u00b7 Optical Sights Synergy (Kobra vs PSO-1): For close-to-medium clearance, mount a <strong>Kobra red dot sight</strong> to maintain clear peripheral awareness without stamina ADS penalties. For perimeter overwatch, attach a <strong>PU 3.5x scope</strong>.",
      "05 \u00b7 Magazine Capacities & Reload Drills: While standard steel magazines hold 30 rounds, hunting military caches can yield 40-round extended drum assemblies, eliminating vulnerability during mutant swarms.",
      "06 \u00b7 Prevent Field Degradation & Jams: Apply <strong>Gun Lube</strong> starting at 80% durability and use cleaning kits before condition drops below <strong>70%</strong>. Never fire the MK-47 below <strong>30% durability</strong> to avoid catastrophic breech explosions."
],
    facts: [
      [
            "Weapon Classification",
            "Assault Rifle (Reclassified to Basic Tier in Update 0.6.0)"
      ],
      [
            "Primary Caliber",
            "7.62x39mm Soviet Intermediate Round"
      ],
      [
            "Effective Range",
            "Extended by +1 to +2 tiles across all rifles in Update 0.6.0"
      ],
      [
            "Explosion Threshold",
            "Only risks catastrophic failure when fired below 30% durability"
      ],
      [
            "Magazine Options",
            "30-round standard steel box / 40-round extended drum"
      ],
      [
            "Barter Price Range",
            "Approximately 18,500 to 24,000 Rubles from faction brokers"
      ],
      [
            "Verified Baseline",
            "In-Game Ballistics Manifest & Update 0.6.0 Patch Baseline"
      ]
],
    faq: [
      [
            "Why was the MK-47 reclassified as Basic tier in Update 0.6.0?",
            "Developers shifted the MK-47 into the Basic tier so survivors could acquire a viable armor-penetrating assault rifle earlier in the Act I progression loop."
      ],
      [
            "Which merchant sells the MK-47 in Zalesye?",
            "Trader Volodymyr at the Crossroads annex stocks the MK-47, and Mechanist quartermasters sell it once you achieve Tier 2 faction reputation."
      ],
      [
            "What is the best muzzle attachment for the MK-47?",
            "The Tactical Muzzle Compensator is recommended because it tames the heavy vertical muzzle climb during 3-round burst firing."
      ],
      [
            "Can the MK-47 equip a suppressor?",
            "Yes, threading a standard 7.62mm suppressor onto the barrel muffles audio ripple from 200m down to roughly 40m, perfect for stealth night raids."
      ],
      [
            "How does the MK-47 compare to the Mikhail 74U?",
            "The MK-47 hits harder against plate armor due to 7.62x39mm rounds, while the Mikhail 74U has lighter recoil and uses lighter 5.45x39mm ammunition."
      ]
],
    related: ["scavland-weapons-and-attachments", "scavland-best-weapons-tier-list", "scavland-ammo-types-and-damage", "scavland-weapon-repair-and-durability"],
    keywords: ["scavland mk47", "scavland mk 47 rifle", "scavland best assault rifle", "scavland mk47 attachments", "scavland mk47 location", "scavland 7.62x39 weapon"],
    videoId: '92NCjgl7aLo',
    videoTitle: "We Got Some NEW GUNS! | Scavland EP 5",
    videoChannel: "Oscar Mikey"
  },
  {
    slug: 'scavland-63-dragoon-sniper-rifle',
    shortTitle: "63 Dragoon Sniper",
    title: "Scavland 63 Dragoon Sniper Guide: 7.62x54mmR Stats, Scope Setup & Location",
    description: "Master the 63 Dragoon designated marksman rifle in Scavland: 7.62x54mmR one-shot ballistics, PSO-1 scope magnification, stamina ADS tips, and bunker drop rates.",
    category: "Gear",
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "63 Dragoon designated marksman rifle with PSO-1 optic in Scavland",
    evidence: 'In-Game Sniper Ballistics Testing & Community Weapon Manifests · Update 0.7.2',
    updated: '2026-09-30',
    answer: "For scavengers prioritizing extreme-range lethality, the <strong>63 Dragoon</strong> stands as the pinnacle designated marksman rifle (DMR) in Scavland. Firing full-power <strong>7.62x54mmR rimmed rifle cartridges</strong>, the 63 Dragoon delivers over <strong>85 base kinetic damage</strong>, guaranteeing instantaneous one-shot eliminations on unarmored human sentries and dropping heavily armored Gunner bodyguards in two precise hits. When outfitted with an authentic <strong>PSO-1 4x optical scope</strong> and supported by prone stamina stabilization, the 63 Dragoon allows operatives to neutralize perimeter defenses around <strong>Arcadia</strong> and <strong>Sector B-4</strong> well beyond the enemy AI's <strong>25-meter visual detection radius</strong>.",
    steps: [
      "01 \u00b7 Master 7.62x54mmR Stopping Power: The 63 Dragoon penetrates through Tier 1, 2, and 3 body armor vests effortlessly, ignoring up to <strong>75% of passive armor damage reduction</strong> on direct vital chest hits.",
      "02 \u00b7 Locate the 63 Dragoon in Military Bunkers: This high-tier DMR spawns in locked security weapon footlockers within <strong>Sector B-4</strong> (requiring a <strong>Red Keycard</strong>) or can be bartered from <strong>Tier 3 Mechanist brokers</strong>.",
      "03 \u00b7 Equip the PSO-1 4x Optical Reticle: Mount a PSO-1 scope at a safehouse workbench. The illuminated rangefinder chevron reticle lets you estimate target distances accurately up to <strong>60 meters</strong>.",
      "04 \u00b7 Manage Aim-Down-Sights (ADS) Stamina Drain: Holding weapon ADS while aiming through high-magnification glass continuously drains stamina. Crouch or lean against sandbag barricades to halve your stamina consumption rate.",
      "05 \u00b7 Pair with Suppressed PM Nikolay PB Sidearm: Because unsuppressed 7.62x54mmR rifle fire projects a thunderous <strong>200-meter audio ripple</strong>, always carry a silent sidearm like the <strong>PM Nikolay PB</strong> to deal with stray roaches without alerting the zone.",
      "06 \u00b7 Prevent Durability Failures: In <strong>Update 0.7.0</strong>, precision rifles last twice as many shots per durability point, but maintaining condition above <strong>70%</strong> with universal repair kits is crucial to prevent mid-fight ejection jams."
],
    facts: [
      [
            "Weapon Class",
            "Designated Marksman Rifle (Semi-Automatic Sniper)"
      ],
      [
            "Primary Cartridge",
            "7.62x54mmR Rimmed Full-Power Military Cartridge"
      ],
      [
            "Base Damage Rating",
            "85+ Damage (Highest single-shot kinetic impact in class)"
      ],
      [
            "Standard Optic",
            "PSO-1 4x Optical Scope with Stadiametric Rangefinder"
      ],
      [
            "Magazine Size",
            "10-round detachable steel box magazine"
      ],
      [
            "Effective Range",
            "Up to 60+ meters across wasteland clearings"
      ],
      [
            "Verified Baseline",
            "In-Game Sniper Ballistics Testing & Community Weapon Manifests \u00b7 Update 0.7.2"
      ]
],
    faq: [
      [
            "Where is the guaranteed spawn location for the 63 Dragoon?",
            "While not guaranteed, the highest spawn probability is found in the locked armory vault of Sector B-4 behind the Red Keycard door, or through Tier 3 Mechanist barter."
      ],
      [
            "Does the 63 Dragoon kill bandits in one shot?",
            "Yes, center-mass or headshot impacts on unarmored or light armored targets kill instantly. Heavy plate armored sentries take 2 body hits."
      ],
      [
            "Why does my sniper reticle sway so heavily?",
            "Weapon sway increases when character stamina is low or when suffering from arm fractures. Crouch to steady your aim and apply a Wooden Splint if fractured."
      ],
      [
            "Can I attach a suppressor to the 63 Dragoon?",
            "Yes, heavy 7.62x54mm tactical suppressors can be mounted, reducing weapon sound signature significantly during long-range skirmishes."
      ],
      [
            "How does the 63 Dragoon compare to the Leon 1895?",
            "The Leon 1895 is a budget bolt-action rifle, while the 63 Dragoon is semi-automatic with much higher fire rate, larger magazine capacity, and superior armor penetration."
      ]
],
    related: ["scavland-best-weapons-tier-list", "scavland-weapons-and-attachments", "scavland-ammo-types-and-damage", "scavland-red-keycard-and-bunker-loot-recovery"],
    keywords: ["scavland 63 dragoon", "scavland sniper rifle", "scavland 7.62x54r", "scavland best sniper", "scavland 63 dragoon location", "scavland pso1 scope"],
    videoId: 'JQDdSAYkOkQ',
    videoTitle: "Scavland Ultimate Weapon - 63 Dragoon Item Location",
    videoChannel: "Game Detox Dopamine"
  },
  {
    slug: 'scavland-toz34-shotgun',
    shortTitle: "TOZ-34 Shotgun Guide",
    title: "Scavland TOZ-34 Shotgun Guide: 12-Gauge Stats, Stagger & Mutant Defense",
    description: "Definitive guide to the TOZ-34 over-under shotgun in Scavland: 12-gauge buckshot spread, bleed mechanics in Update 0.7.0, and mutant hunting tactics.",
    category: "Gear",
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "TOZ-34 double-barrel shotgun and 12-gauge ammunition shells in Scavland",
    evidence: 'In-Game Shotgun Spread Testing & Update 0.7.0 Balance Notes',
    updated: '2026-09-30',
    answer: "When exploring claustrophobic Soviet corridors or clearing abandoned hospitals, no firearm provides greater stopping power than the iconic <strong>TOZ-34</strong> over-under double-barrel shotgun. Chambered in heavy <strong>12-gauge shells</strong>, the TOZ-34 delivers colossal close-quarters burst damage capable of neutralizing charging <strong>Hellhounds</strong> and staggering lethal <strong>Tongue Monsters (Lickers)</strong> before they can execute grapple maneuvers. In <strong>Update 0.7.0</strong>, shotgun balance was refined to cap bleed status at a maximum of <strong>one bleed effect per shot</strong> rather than stacking per pellet, reinforcing the TOZ-34 as an essential, high-reliability secondary defensive tool.",
    steps: [
      "01 \u00b7 Understand High-Stagger Mechanics: Each 12-gauge blast fires a dense cluster of pellets that interrupts enemy attack animations, knocking beasts backward and creating space for tactical reloads.",
      "02 \u00b7 Acquire from Starter Quests or Settlement Vendors: The TOZ-34 can be bought inexpensively from <strong>Anatoly</strong> in central <strong>Zalesye</strong> for under <strong>5,000 Rubles</strong>, making it the premier Day 1 emergency firearm.",
      "03 \u00b7 Master the Double-Tap Trigger Technique: With two loaded barrels, fire a double-tap burst in rapid succession to instantly eliminate high-threat mutants before retreating behind doorways.",
      "04 \u00b7 Swap Ammunition: Buckshot vs Slugs: Use standard <strong>12-gauge Buckshot</strong> against unarmored mutants and feral beasts. When entering bandit checkpoints, swap to <strong>12-gauge Slugs</strong> to punch through steel body armor.",
      "05 \u00b7 Mitigate the 2-Round Capacity Limit: Because the TOZ-34 only holds 2 shells, bind the reload key to a comfortable mouse thumb button and practice stutter-stepping behind cover while reloading.",
      "06 \u00b7 Maintain Clean Barrels with Glue and Gun Lube: Shotguns suffer minimal mechanical jam risk compared to automatic rifles, but maintaining condition above <strong>50%</strong> ensures maximum pellet velocity."
],
    facts: [
      [
            "Weapon Mechanism",
            "Over-Under Double-Barrel Break Action Shotgun"
      ],
      [
            "Ammunition Type",
            "12-Gauge (Buckshot / Magnum / Heavy Slug)"
      ],
      [
            "Magazine Capacity",
            "2 Shells (Instantaneous dual discharge capability)"
      ],
      [
            "Bleed Cap Rule",
            "Maximum 1 bleed effect per shot since Update 0.7.0"
      ],
      [
            "Best Role",
            "Point-blank mutant defense and subterranean bunker clearance"
      ],
      [
            "Barter Cost",
            "Approximately 4,200 to 5,500 Rubles in early settlements"
      ],
      [
            "Verified Baseline",
            "In-Game Shotgun Spread Testing & Update 0.7.0 Balance Notes"
      ]
],
    faq: [
      [
            "Is the TOZ-34 shotgun effective against Tongue Monsters?",
            "Yes! The heavy stagger from 12-gauge buckshot knocks Tongue Monsters out of their grapple windup, making it the most reliable counter to licker ambushes."
      ],
      [
            "Can the TOZ-34 be modded with optical sights?",
            "The standard TOZ-34 features traditional iron bead sights, but tactical choke adapters can be attached at a workbench to tighten pellet spread."
      ],
      [
            "What should I do if a mutant survives both shotgun barrels?",
            "Immediately execute an evasive combat roll [Space / Right Stick] backward to open distance while executing a break-action reload."
      ],
      [
            "Are 12-gauge slugs better than buckshot in Scavland?",
            "Buckshot is superior against soft mutant flesh; slugs are superior against human bandits wearing Tier 2 and Tier 3 ballistic armor vests."
      ],
      [
            "Where can I find cheap 12-gauge shells?",
            "Physician Anna and settlement traders sell boxes of buckshot, or you can craft shells at your safehouse workbench using Gunpowder and Scrap Metal."
      ]
],
    related: ["scavland-weapons-and-attachments", "scavland-best-weapons-tier-list", "scavland-ammo-types-and-damage", "scavland-starter-loadouts-and-budget-builds"],
    keywords: ["scavland toz 34", "scavland shotgun guide", "scavland 12 gauge", "scavland best shotgun", "scavland toz34 location", "scavland mutant defense weapon"],
    videoId: 'uLK0n3hEfhk',
    videoTitle: "SCAVLAND | Bunker Didn't Stand a Chance Against This Loadout",
    videoChannel: "Confused Dango"
  },
  {
    slug: 'scavland-leon1895-rifle',
    shortTitle: "Leon 1895 Guide",
    title: "Scavland Leon 1895 Guide: +50% Buffed Damage Stats, Caliber & Hunting Meta",
    description: "Master the buffed Leon 1895 rifle in Scavland: +50% projectile damage in Update 0.7.0 / 0.6.2, 75 fire rate, budget hunting loadouts, and accuracy tips.",
    category: "Gear",
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Leon 1895 bolt-action hunting rifle on workbench in Scavland",
    evidence: 'Official Steam Patch 0.6.2 & 0.7.0 Ballistics Changelogs',
    updated: '2026-09-30',
    answer: "Few firearms in Scavland have undergone as dramatic a transformation as the <strong>Leon 1895</strong> rifle. Originally relegated to a sluggish starter weapon, developer NoShadow delivered a massive combat rework in <strong>Hotfix 0.6.2</strong> and reinforced it in <strong>Update 0.7.0</strong>, granting the entire Leon 1895 family (Short, Standard, and Long variants) a permanent <strong>+50% projectile damage buff</strong> alongside a crisp <strong>75 fire rate</strong>. Operating as a dependable, budget-friendly marksman rifle, the buffed Leon 1895 drops human bandits and mutated stalkers in 1 to 2 shots, making it the premier value-for-money primary weapon for frugal scavengers roaming <strong>Zalesye</strong>.",
    steps: [
      "01 \u00b7 Leverage the +50% Damage Overhaul: Thanks to official balance buffs, single-shot chest impacts deal lethal damage that rivals high-end sniper rifles, allowing players to punch well above their economic weight.",
      "02 \u00b7 Choose the Right Variant (Short vs Long): The <strong>Leon 1895 Short</strong> provides fast handling and lightweight agility for brush fights, while the <strong>Leon 1895 Long</strong> extends effective range and tightens barrel sway for long-range engagements.",
      "03 \u00b7 Mount Vintage Glass Optics: Attach a period-correct <strong>PU 3.5x optical scope</strong> to turn the Leon into an exceptional precision marksman weapon capable of clearing bandit watchtowers with ease.",
      "04 \u00b7 Budget Hunting Ammunition Availability: Unlike scarce full-power cartridges, ammunition for the Leon 1895 is widely distributed across civilian dressers, rusted car trunks, and early trader inventories.",
      "05 \u00b7 Engage Enemies from Cover at Range: Because the Leon relies on manual bolt cycling between shots, always engage hostiles from behind concrete barriers or foliage to avoid return fire during cycling pauses.",
      "06 \u00b7 Field Care with Cleaning Rods: Apply inexpensive <strong>Cleaning Rods</strong> at 70% durability. With the doubled durability per point added in Update 0.7.0, a single repair keeps the Leon firing for dozens of raids."
],
    facts: [
      [
            "Damage Buff Status",
            "+50% Projectile Damage applied in Update 0.6.2 / 0.7.0"
      ],
      [
            "Fire Rate Specification",
            "Rated at 75 fire rate with smooth bolt-cycling animation"
      ],
      [
            "Available Variants",
            "Short (High mobility), Standard, and Long (Max range)"
      ],
      [
            "Recommended Optic",
            "PU 3.5x Optical Scope for 40m+ precision targeting"
      ],
      [
            "Ammo Economy",
            "Exceptional; abundant civilian ammunition found throughout Act I"
      ],
      [
            "Durability Profile",
            "Rifle durability pool doubled in Update 0.7.0"
      ],
      [
            "Verified Baseline",
            "Official Steam Patch 0.6.2 & 0.7.0 Ballistics Changelogs"
      ]
],
    faq: [
      [
            "Did the Leon 1895 get buffed recently in Scavland?",
            "Yes! Update 0.6.2 and 0.7.0 increased projectile damage across all Leon 1895 models by +50%, making it one of the hardest-hitting budget rifles in the game."
      ],
      [
            "Where can I find the Leon 1895 in early raids?",
            "The Leon 1895 frequently spawns in rural farmhouses and hunting cabins across northern Zalesye, or can be bartered cheaply from Anatoly."
      ],
      [
            "What is the difference between Leon 1895 Short and Long?",
            "The Short variant has higher ergonomics and less weight for close encounters, while the Long variant offers tighter accuracy and longer effective range."
      ],
      [
            "Can the Leon 1895 one-shot bandits?",
            "Yes, center-mass hits on unarmored scavengers and headshots against light helmets will kill human targets in a single shot."
      ],
      [
            "How do I fix barrel sway on the Leon 1895?",
            "Crouch before aiming down sights and ensure character stamina is above 50% to eliminate reticle drift."
      ]
],
    related: ["scavland-weapons-and-attachments", "scavland-best-weapons-tier-list", "scavland-starter-loadouts-and-budget-builds", "scavland-ammo-types-and-damage"],
    keywords: ["scavland leon 1895", "scavland leon rifle", "scavland leon 1895 buff", "scavland best early rifle", "scavland leon 1895 damage", "scavland budget rifle guide"]
  },
  {
    slug: 'scavland-mikhail-74u-carbine',
    shortTitle: "Mikhail 74U Carbine",
    title: "Scavland Mikhail 74U Guide: 5.45x39mm Compact Carbine Stats & Build",
    description: "Complete Scavland Mikhail 74U carbine guide: 5.45x39mm ballistics, high ergonomics, stock modding compatibility in Update 0.7.0, and bunker room clearing.",
    category: "Gear",
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Mikhail 74U compact assault carbine with folded stock in Scavland",
    evidence: 'In-Game Ballistics Manifest & Update 0.7.0 Stock Overhaul',
    updated: '2026-09-30',
    answer: "Combining the rapid cyclic fire of an assault rifle with the tight handling ergonomics of a submachine gun, the <strong>Mikhail 74U</strong> is the ultimate compact carbine for room-clearing expeditions across <strong>Zalesye</strong>. Firing standard military <strong>5.45x39mm Soviet</strong> rounds, the 74U delivers high-velocity projectile impacts with manageable recoil. In <strong>Update 0.7.0</strong>, developer NoShadow expanded stock compatibility across the 74u, Bahadir, and MK-47 families, allowing survivors to mount ergonomic tactical folding stocks and reflex red dots that make snapping between targets in subterranean bunkers like <strong>Sector B-4</strong> virtually instantaneous.",
    steps: [
      "01 \u00b7 Master 5.45x39mm Military Ballistics: The 5.45mm cartridge offers flat ballistic trajectories with high muzzle velocity, making it superior to pistol-caliber SMGs at medium combat ranges.",
      "02 \u00b7 Exploit Update 0.7.0 Modular Stock Overhaul: Safehouse workbenches now support cross-family stock attachments. Equipping a skeletonized folding stock reduces weapon weight by <strong>1.2kg</strong> while boosting ADS draw speed.",
      "03 \u00b7 Optimal Attachments for Bunker Clearing: Attach an <strong>OKP-7</strong> or <strong>Kobra holographic optic</strong> alongside an angled tactical grip. This tightens hip-fire spread when rounding blind bunker corridors.",
      "04 \u00b7 High Cyclic Rate & Burst Control: The 74U fires rapidly; avoid holding down full-auto at ranges beyond 15 meters. Fire disciplined 2-to-3 round trigger taps to group impacts on target.",
      "05 \u00b7 Secondary Role in High-Tier Loadouts: Because the 74U occupies minimal inventory grid space, many veteran operatives carry it in secondary weapon slots alongside a long-range <strong>63 Dragoon</strong> DMR.",
      "06 \u00b7 Universal Repair Kit Upkeep: Keep a supply of <strong>Universal Repair Kits</strong> in your safehouse. Since Update 0.7.0, repair kits restore equipment condition regardless of wear level."
],
    facts: [
      [
            "Weapon Category",
            "Compact Assault Carbine (Submachine Profile)"
      ],
      [
            "Caliber",
            "5.45x39mm Soviet Military Cartridge"
      ],
      [
            "Modular Stocks",
            "Expanded cross-family stock compatibility in Update 0.7.0"
      ],
      [
            "Weight Efficiency",
            "Under 3.0kg fully modded (High mobility and low stamina drain)"
      ],
      [
            "Best Application",
            "Indoor CQB, corridor room-clearing, and bunker raids"
      ],
      [
            "Magazine Sizes",
            "30-round standard magazine / 45-round RPK extended box"
      ],
      [
            "Verified Baseline",
            "In-Game Ballistics Manifest & Update 0.7.0 Stock Overhaul"
      ]
],
    faq: [
      [
            "Where can I find the Mikhail 74U in Scavland?",
            "The Mikhail 74U frequently drops from military bandit squad leaders near railway checkpoints or can be purchased from Mechanist vendors."
      ],
      [
            "What changed with the 74u in Update 0.7.0?",
            "Update 0.7.0 expanded stock compatibility between the 74u, Bahadir, and MK-47 platforms, and doubled rifle durability points across the board."
      ],
      [
            "Is the 74U better than the MK-47 for bunker raids?",
            "In tight bunker corridors, the 74U has faster ADS draw speed and higher fire rate, making it slightly easier to handle around sharp corners than the heavier MK-47."
      ],
      [
            "What ammo type should I load into the 74U?",
            "Standard 5.45x39mm FMJ rounds handle unarmored targets; load 5.45mm Armor-Piercing (AP) ammo when raiding armored Gunner checkpoints."
      ],
      [
            "Can the Mikhail 74U mount a silencer?",
            "Yes, standard Soviet 5.45mm suppressors can be installed at any safehouse workbench."
      ]
],
    related: ["scavland-weapons-and-attachments", "scavland-best-weapons-tier-list", "scavland-ammo-types-and-damage", "scavland-red-keycard-and-bunker-loot-recovery"],
    keywords: ["scavland mikhail 74u", "scavland 74u guide", "scavland 5.45x39 weapon", "scavland best cqb gun", "scavland mikhail 74u attachments", "scavland compact assault rifle"],
    videoId: 'fQC7mMzd7ss',
    videoTitle: "Scavland Ultimate Weapon - Mikhail 50 (Pristine) Item Location",
    videoChannel: "Game Detox Dopamine"
  },
  {
    slug: 'scavland-pm-nikolay-pb-pistol',
    shortTitle: "PM Nikolay PB Pistol",
    title: "Scavland PM Nikolay PB Guide: Suppressed Stealth Pistol Stats & Tactics",
    description: "Master silent takedowns with the PM Nikolay PB in Scavland: integrally suppressed 9x18mm ballistics, zero audio ripples, stealth night raids, and ammo savings.",
    category: "Gear",
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "PM Nikolay PB integrally suppressed tactical sidearm in Scavland",
    evidence: 'In-Game Stealth Audio Waveform Testing · Update 0.7.2',
    updated: '2026-09-30',
    answer: "In a post-Soviet wasteland where unsuppressed gunfire reverberates across a <strong>200-meter audio ripple</strong>, the <strong>PM Nikolay PB</strong> is the indisputable king of stealth sidearms. Built with an authentic integral barrel sound suppressor, this dedicated covert handgun fires subsonic <strong>9x18mm Makarov</strong> ammunition with virtually zero acoustic signature. In Scavland, firing the PM Nikolay PB alert radius is restricted to less than <strong>15 meters</strong>, allowing operatives to eliminate solitary bandit lookouts, mutated roaches, and perimeter scouts during dangerous night incursions without triggering regional garrison alarms.",
    steps: [
      "01 \u00b7 Eliminate Audio Ripple Alerts: Unlike unsuppressed sidearms that attract hostiles from 200m away, the PB's integral silencer ensures shots outside 15m remain completely unheard by enemy AI.",
      "02 \u00b7 Exploit Low Ammunition Costs: 9x18mm cartridges are the most abundant and inexpensive ammunition in the game, allowing scavengers to clear low-tier threats without burning scarce rifle ammunition.",
      "03 \u00b7 Aim for Vital Headshots: Because 9x18mm rounds have limited armor penetration, always aim for unarmored heads or faces. Headshots apply a <strong>2.5x critical multiplier</strong>, dropping scouts instantly.",
      "04 \u00b7 Ideal Night Raid Secondary: Pair the PM Nikolay PB with optical <strong>Binoculars</strong> for nighttime stealth raids between <strong>21:00 and 05:30</strong>, preserving your location against nocturnal snipers.",
      "05 \u00b7 Upgrade Sights and Grips: Install ergonomic rubberized grips at a workbench to reduce weapon draw time and virtually eliminate horizontal reticle wobble.",
      "06 \u00b7 Inexpensive Field Repairs: Handguns require very few materials to maintain. Applying basic <strong>Glue</strong> or <strong>Gun Lube</strong> above 80% durability keeps the PB operating reliably for dozens of infiltrations."
],
    facts: [
      [
            "Weapon Classification",
            "Integrally Suppressed Semi-Automatic Sidearm"
      ],
      [
            "Caliber Specification",
            "9x18mm Subsonic Makarov Round"
      ],
      [
            "Sound Signature",
            "Under 15 meters (Compared to 200m for unsuppressed firearms)"
      ],
      [
            "Magazine Capacity",
            "8-round single-stack steel box magazine"
      ],
      [
            "Durability Maintenance",
            "Usable with Glue and Gun Lube from 80% condition"
      ],
      [
            "Weight Profile",
            "Under 1.0kg (Minimal carry capacity impact)"
      ],
      [
            "Verified Baseline",
            "In-Game Stealth Audio Waveform Testing \u00b7 Update 0.7.2"
      ]
],
    faq: [
      [
            "Where can I find the PM Nikolay PB sidearm?",
            "The PM Nikolay PB spawns in officer lockboxes inside military outposts or can be purchased from Tier 2 Mechanist and Rada traders."
      ],
      [
            "Can the PM Nikolay PB pierce body armor?",
            "Standard 9x18mm ammo struggles against heavy plate carriers. When using the PB against armored guards, aim exclusively for the unarmored head or legs."
      ],
      [
            "Does the suppressor wear out on the PM Nikolay PB?",
            "No! Unlike attached screw-on silencers that degrade in some survival games, the PB's integral suppressor has permanent durability linked to the firearm."
      ],
      [
            "Is the PM Nikolay PB better than the Bahadir 918?",
            "For stealth, yes. The Bahadir offers higher durability per point (15 shots per point), but is unsuppressed and alerts hostiles across 200 meters."
      ],
      [
            "What is the primary role of this sidearm in a raid?",
            "To silently dispatch solitary roaches, mutant rats, and perimeter sentries without alerting nearby camps or burning expensive rifle ammo."
      ]
],
    related: ["scavland-weapons-and-attachments", "scavland-best-weapons-tier-list", "scavland-night-survival-and-stealth-mechanics", "scavland-ammo-types-and-damage"],
    keywords: ["scavland pm nikolay pb", "scavland silenced pistol", "scavland suppressed sidearm", "scavland stealth pistol", "scavland 9x18 quiet weapon", "scavland pb pistol location"]
  },
  {
    slug: 'scavland-arcadia-outpost-guide',
    shortTitle: "Arcadia Outpost Guide",
    title: "Scavland Arcadia Outpost Guide: Location, Traders, Crafting & Safe Stash",
    description: "Explore the eastern regional settlement of Arcadia in Scavland: Update 0.7.0 crafting tables and player stashes, bandit borders, and specialized traders.",
    category: "Exploration",
    image: '/images/screenshots/ss_08_overworld_map.webp',
    imageAlt: "Arcadia regional outpost camp, fortifications, and player stash in Scavland",
    evidence: 'Official Steam Announcement Feed & Update 0.7.0 Outpost Notes',
    updated: '2026-09-30',
    answer: "Situated in the dense eastern ruins of <strong>Zalesye</strong> past the fortified rail embankment, <strong>Arcadia</strong> serves as one of the four critical regional forward operating bases introduced to support wasteland survival. In <strong>Update 0.7.0</strong>, developer NoShadow upgraded Arcadia from a passive landmark into a fully operational staging outpost by installing a permanent <strong>Crafting Table</strong> and a dedicated <strong>Player Stash</strong> locker. While outpost lockers feature a fixed single-tab capacity and operate with independent local inventories that do not mirror your central village stash, Arcadia provides an invaluable intermediate resupply and triage station during deep eastern contract runs.",
    steps: [
      "01 \u00b7 Navigate to Arcadia from Central Zalesye: Depart central <strong>Zalesye</strong> heading directly east along the main asphalt road. Watch for concrete checkpoint ruins, bypass bandit sandbag barriers, and enter the walled compound of Arcadia.",
      "02 \u00b7 Utilize the Dedicated Outpost Stash (Update 0.7.0): Store heavy mechanical scrap, spare ammunition boxes, and reserve medical supplies in the camp locker to avoid encumbrance penalties on return trips.",
      "03 \u00b7 Field Crafting at Arcadia's Workbench: The on-site crafting station allows survivors to craft <strong>Wooden Splints</strong>, assemble <strong>Sterile Bandages</strong>, and repair worn weapons without backtracking across the map.",
      "04 \u00b7 Interact with Resident Faction Merchants: Arcadia houses local black-market traders who buy regional industrial salvage and offer localized courier tasks for easy reputation gains.",
      "05 \u00b7 Campfire Resting & Health Regeneration: Rest beside Arcadia's central campfire to double your passive health recovery while consuming boiled water and rations.",
      "06 \u00b7 Defend Against Roaming Bandit Patrols: Hostile bandit squads patrol the perimeter fringes outside Arcadia's walls. Clear sentries using suppressed sidearms before venturing out on foraging runs."
],
    facts: [
      [
            "Outpost Geographic Location",
            "Eastern sector of Zalesye beyond the railway berm"
      ],
      [
            "Workbench Availability",
            "Crafting Table added in Update 0.7.0"
      ],
      [
            "Player Stash Storage",
            "1-Tab Player Stash installed in Update 0.7.0 (Independent inventory)"
      ],
      [
            "Key Hub Function",
            "Eastern forward resupply, field repairs, and loot staging"
      ],
      [
            "Campfire Health Regen",
            "Active campfire grants 2x passive health recovery (Update 0.7.0)"
      ],
      [
            "Surrounding Hostiles",
            "Heavy bandit presence and roaming mutant packs on perimeter"
      ],
      [
            "Verified Baseline",
            "Official Steam Announcement Feed & Update 0.7.0 Outpost Notes"
      ]
],
    faq: [
      [
            "Where is Arcadia located on the Scavland map?",
            "Arcadia is located in the eastern region of Zalesye. Follow the eastern road past the railway embankment until you spot fortified perimeter fences."
      ],
      [
            "Does the stash in Arcadia share items with the main Zalesye stash?",
            "No. Outpost stashes installed in Update 0.7.0 maintain independent local inventories and do not sync with the central village stash."
      ],
      [
            "Can I repair my weapons at Arcadia?",
            "Yes, Update 0.7.0 added a fully functional crafting table to Arcadia, allowing field repairs and ammo assembly."
      ],
      [
            "Is Arcadia safe from mutant attacks?",
            "Inside the walled compound is safe; however, hostile bandits and Hellhounds frequently roam the perimeter immediately outside the gates."
      ],
      [
            "Can I sleep at Arcadia to pass the night?",
            "You can only sleep to advance time if the camp possesses a bed with a mattress (Update 0.7.0 requirement). Otherwise, rest at the campfire for healing."
      ]
],
    related: ["scavland-map-and-locations", "scavland-safehouses-and-fast-travel-guide", "scavland-patch-0-7-0-update-and-changes", "scavland-starter-loadouts-and-budget-builds"],
    keywords: ["scavland arcadia", "scavland arcadia location", "scavland arcadia outpost", "scavland arcadia stash", "scavland map arcadia", "scavland east base"],
    videoId: 'yG9k2NjxSWs',
    videoTitle: "We Found ARCADIA! Deep Into Bandit Territory | SCAVLAND",
    videoChannel: "Mr Feudal"
  },
  {
    slug: 'scavland-mechanist-base-guide',
    shortTitle: "Mechanist Base Guide",
    title: "Scavland Mechanist Base Guide: Tech Traders, Advanced Weapon Benches & Rep",
    description: "Explore the industrial Mechanist Base in Scavland: high-tier tech traders, weapon attachment workbenches, Tier 2/3 reputation unlocks, and secure stashes.",
    category: "Exploration",
    image: '/images/screenshots/ss_08_overworld_map.webp',
    imageAlt: "Mechanist industrial base, workbenches, and weapon modifications in Scavland",
    evidence: 'Official Steam Announcements & Faction Data · Update 0.7.0',
    updated: '2026-09-30',
    answer: "Recognized by its industrial orange signage, fortified steel barricades, and mechanical lathe workshops, the <strong>Mechanist Base</strong> is the premier technological and gunsmithing hub in Scavland. Situated in the industrialized northern sector of <strong>Zalesye</strong>, this fortified stronghold houses high-tier weapon specialists who barter rare modular weapon attachments, advanced scopes, and armor repair kits. In <strong>Update 0.7.0</strong>, the Mechanist Base received a dedicated <strong>Player Stash</strong> and advanced <strong>Crafting Station</strong>, establishing it as an essential forward base for scavengers preparing to infiltrate the subterranean vaults of <strong>Sector B-4</strong>.",
    steps: [
      "01 \u00b7 Locate the Mechanist Industrial Compound: Head north from central Zalesye toward the factory smokestacks. Pass through outer guard towers where Mechanist sentries in orange jumpsuits stand guard.",
      "02 \u00b7 Unlock High-Tier Attachment Inventories: Fulfill 24-hour engineering contracts to build reputation. Reaching <strong>Tier 2 and Tier 3 reputation</strong> unlocks high-magnification scopes, compensators, and tactical foregrips.",
      "03 \u00b7 Utilize Advanced Weapon Workbenches: The base features specialized workbenches equipped for stock modification, barrel threading, and installing 40-round drum magazines on platforms like the <strong>MK-47</strong>.",
      "04 \u00b7 Barter Industrial Electronics for Weapon Parts: Mechanist quartermasters pay top dollar for salvaged <strong>Spark Plugs</strong>, <strong>Copper Wiring</strong>, and <strong>Household Batteries</strong>, exchanging them directly for rifle components.",
      "05 \u00b7 Utilize the Update 0.7.0 Camp Stash: Drop off heavy machine tools, iron scrap, and excess weapon receivers into the single-tab local stash to eliminate encumbrance before sweeping Sector B-4.",
      "06 \u00b7 Maintain Faction Standing above -300 Rep: Never discharge weapons inside the compound. Firing on Mechanists imposes severe penalties (<strong>-100 to -300 Rep</strong>), causing automated sentry turrets to open fire on sight."
],
    facts: [
      [
            "Faction Alignment",
            "The Mechanists (Industrial tech and engineering syndicate)"
      ],
      [
            "Geographic Landmark",
            "Northern industrial sector marked by factory stacks"
      ],
      [
            "Key Specialty",
            "High-tier weapon attachments, optical scopes, and toolkits"
      ],
      [
            "Workbench Features",
            "Full weapon attachment station and crafting table (Update 0.7.0)"
      ],
      [
            "Local Stash Facility",
            "1-Tab Player Stash installed in Update 0.7.0"
      ],
      [
            "Hostility Threshold",
            "Dropping below -300 Rep triggers shoot-on-sight turret defenses"
      ],
      [
            "Verified Baseline",
            "Official Steam Announcements & Faction Data \u00b7 Update 0.7.0"
      ]
],
    faq: [
      [
            "Where is the Mechanist Base located in Scavland?",
            "In the northern industrial sector of Zalesye, marked by red brick factory smokestacks and orange safety signage."
      ],
      [
            "What items do Mechanist traders specialize in?",
            "They specialize in weapon attachments, optical scopes (PSO-1), suppressors, extended magazines, and armor repair kits."
      ],
      [
            "How do I increase reputation with the Mechanists?",
            "Complete repeatable daily jobs involving electronics delivery, scrap collection, and clearing nearby mutant nests."
      ],
      [
            "Can I modify my weapons at the Mechanist Base?",
            "Yes, Update 0.7.0 added crafting tables to all main camps, allowing full attachment customization and field maintenance."
      ],
      [
            "What happens if I accidentally shoot a Mechanist guard?",
            "Visit diplomat Raisa at the Neutral Chapel to fulfill a courier truce contract before your reputation drops below -300 Rep."
      ]
],
    related: ["scavland-factions-progression-and-traders", "scavland-weapons-and-attachments", "scavland-factions-and-reputation", "scavland-map-and-locations"],
    keywords: ["scavland mechanist base", "scavland mechanists location", "scavland weapon workbench", "scavland tech traders", "scavland mechanist reputation", "scavland north outpost"],
    videoId: '6aY3Lfc_w8g',
    videoTitle: "Scavland Locations of Merchants Selling Important Items",
    videoChannel: "Game Detox Dopamine"
  },
  {
    slug: 'scavland-mudlark-camp-guide',
    shortTitle: "Mudlark Camp Guide",
    title: "Scavland Mudlark Camp Guide: Southern Swamp Hub, Mutant Bounties & Stash",
    description: "Explore Mudlark Camp in Scavland: southern wetland location, mutant trophy bounties with Bogdan, Update 0.7.0 field stash, and swamp traversal.",
    category: "Exploration",
    image: '/images/screenshots/ss_08_overworld_map.webp',
    imageAlt: "Mudlark wetland camp, wooden boardwalks, and hunter outposts in Scavland",
    evidence: 'Official Steam Announcement Feed & Update 0.7.0 Outpost Notes',
    updated: '2026-09-30',
    answer: "Perched on raised wooden boardwalks above the murky southern wetlands of <strong>Zalesye</strong>, <strong>Mudlark Camp</strong> is the primary wilderness outpost for hunters, trappers, and bio-anomaly scavengers. The settlement serves as the home base for <strong>Trader Bogdan</strong>, who pays an exclusive <strong>+40% bonus</strong> for biological trophies including <strong>Hellhound teeth</strong>, mutant claws, and pelt pelts. Enhanced in <strong>Update 0.7.0</strong> with a permanent <strong>Player Stash</strong> and <strong>Crafting Table</strong>, Mudlark Camp allows survivors to stage hunting gear, brew herbal poultices, and resupply clean drinking water without navigating back to the central village.",
    steps: [
      "01 \u00b7 Navigate to Southern Wetlands: Travel south from central Zalesye through overgrown marshlands. Look for stilted wooden boardwalks, hanging pelt racks, and lantern posts marking Mudlark Camp.",
      "02 \u00b7 Liquidate Mutant Trophies to Bogdan (+40% Payout): Sell harvested glands, Hellhound claws, and bear pelts directly to <strong>Bogdan</strong> to capitalize on his +40% biological bounty bonus.",
      "03 \u00b7 Utilize Local Stash for Heavy Pelts: Mutant pelts and biological specimens weigh heavily. Store them in the single-tab <strong>Player Stash</strong> locker (added in Update 0.7.0) to preserve agility.",
      "04 \u00b7 Craft Medical Poultices at the Workbench: Collect marsh herbs and clean cloth to craft budget antiseptic dressings and splints using the on-site crafting table.",
      "05 \u00b7 Prepare for Swamp Acid Hazards: The surrounding marshes are home to acidic <strong>Splatters</strong> and toxic water pools. Equip rubberized boots and keep <strong>Charcoal Tablets</strong> ready.",
      "06 \u00b7 Rest at Campfire to Counter Wetness & Hypothermia: Resting beside Mudlark Camp's open fire restores character warmth, doubles passive health regeneration, and cleanses minor stamina chills."
],
    facts: [
      [
            "Outpost Geographic Zone",
            "Southern wetlands and swamp basin of Zalesye"
      ],
      [
            "Key Merchant",
            "Trader Bogdan (Pays +40% premium for mutant parts)"
      ],
      [
            "Workbench Availability",
            "Crafting station installed in Update 0.7.0"
      ],
      [
            "Stash Facility",
            "1-Tab Player Stash operational since Update 0.7.0"
      ],
      [
            "Surrounding Threats",
            "Hellhounds, Splatters, and toxic water radiation pools"
      ],
      [
            "Campfire Recovery",
            "Doubled passive health regeneration rate beside campfire"
      ],
      [
            "Verified Baseline",
            "Official Steam Announcement Feed & Update 0.7.0 Outpost Notes"
      ]
],
    faq: [
      [
            "Where is Mudlark Camp on the map?",
            "Mudlark Camp is located in the southern swamp sector of Zalesye, accessible by following the southern riverbed boardwalks."
      ],
      [
            "Why should I visit Mudlark Camp instead of Zalesye?",
            "Trader Bogdan pays 40% more for mutant parts and hunting trophies than any other merchant in the game, making it the premier liquidation hub for hunters."
      ],
      [
            "Are there crafting tables at Mudlark Camp?",
            "Yes, Update 0.7.0 added full crafting tables and local player stashes to Mudlark Camp."
      ],
      [
            "What enemies spawn around Mudlark Camp?",
            "Feral Hellhound packs roam the reeds, and toxic Splatters lurk in deep water pockets."
      ],
      [
            "Can I drink the water around Mudlark Camp?",
            "No, marsh water is heavily contaminated. Boil water in clean metal cans at the camp fire before drinking."
      ]
],
    related: ["scavland-map-and-locations", "scavland-loot-and-scavenging", "scavland-money-making-guide", "scavland-mutants-and-enemies-guide"],
    keywords: ["scavland mudlark camp", "scavland bogdan trader", "scavland south outpost", "scavland swamp base", "scavland mutant hunting hub", "scavland mudlark stash"],
    videoId: 'l84-X9wHjeM',
    videoTitle: "Making MONEY and Getting LOOT in SCAVLAND",
    videoChannel: "Nukov"
  },
  {
    slug: 'scavland-microrayion-residential-blocks',
    shortTitle: "Microrayion Blocks",
    title: "Scavland Microrayion Guide: Soviet Apartment Blocks, Rooftops & Loot Rooms",
    description: "Explore the Microrayion residential blocks in Scavland: multi-story Soviet apartment buildings, rooftop sniper perches, locked loot rooms, and stash locations.",
    category: "Exploration",
    image: '/images/screenshots/ss_08_overworld_map.webp',
    imageAlt: "Microrayion Soviet residential concrete blocks and rooftop sniper vantage points in Scavland",
    evidence: 'Official Steam Announcement Feed & Update 0.7.0 Outpost Notes',
    updated: '2026-09-30',
    answer: "Dominated by towering Soviet-era prefabricated concrete housing blocks (khrushchyovkas), the <strong>Microrayion</strong> residential district represents the densest urban scavenging zone in Scavland. Located in the western sector of <strong>Zalesye</strong>, this multi-tiered complex offers vertical room-by-room clearance, locked apartment storage lockers, and commanding rooftop vantage points. In <strong>Update 0.7.0</strong>, developer NoShadow installed a permanent <strong>Player Stash</strong> and <strong>Crafting Station</strong> within the central residential courtyard, allowing operatives to triage domestic salvage, cook rations, and stage military ammunition without returning to central village depots.",
    steps: [
      "01 \u00b7 Navigate to the Western Urban District: Head west from central Zalesye across the broken drainage aqueduct until gray multi-story apartment monoliths come into view.",
      "02 \u00b7 Secure the Courtyard Stash & Crafting Hub: The central apartment courtyard contains the single-tab <strong>Player Stash</strong> and <strong>Crafting Table</strong> installed in Update 0.7.0. Register this point as your urban rally base.",
      "03 \u00b7 Room-by-Room Interior Triage: Search kitchens for non-perishable canned meat and clean jars. Check bathrooms for medical boxes containing <strong>Sterile Bandages</strong> and <strong>Charcoal Tablets</strong>.",
      "04 \u00b7 Establish Rooftop Sniper Overwatch: Scale interior stairwells to access apartment rooftops. Outfitted with a <strong>63 Dragoon</strong> or scoped rifle, the elevated concrete lip provides an exceptional 360-degree vantage over ground patrols.",
      "05 \u00b7 Breaching Locked Apartment Units: Certain heavy security doors require mechanical lockpicks or brute-force shotgun breaching. Inside lie pristine radios, copper wiring, and civilian firearms.",
      "06 \u00b7 Beware of Narrow Staircase Ambush Chokepoints: Stairwells are tight and dark. Always equip a suppressed sidearm like the <strong>PM Nikolay PB</strong> or a 12-gauge shotgun when rounding blind stair landings."
],
    facts: [
      [
            "District Location",
            "Western urban sector of Zalesye past the drainage canal"
      ],
      [
            "Architecture Style",
            "Soviet prefabricated concrete multi-story apartment blocks"
      ],
      [
            "Workbench Availability",
            "Courtyard Crafting Station installed in Update 0.7.0"
      ],
      [
            "Stash Facility",
            "1-Tab Player Stash operational in central courtyard (Update 0.7.0)"
      ],
      [
            "Vertical Advantage",
            "Rooftops offer high-ground sniper overwatch with minimal cover penalties"
      ],
      [
            "Key Loot Categories",
            "Civilian electronics, canned provisions, medical supplies, and keys"
      ],
      [
            "Verified Baseline",
            "Official Steam Announcement Feed & Update 0.7.0 Outpost Notes"
      ]
],
    faq: [
      [
            "Where are the Microrayion residential blocks in Scavland?",
            "In the western sector of Zalesye. Follow the paved road west across the bridge until you reach the concrete high-rise district."
      ],
      [
            "Are the apartments safe from mutants?",
            "Ground floors are frequently prowled by Hellhounds and stray bandits; upper residential floors and rooftops are generally secure once cleared."
      ],
      [
            "What is the best weapon for clearing the Microrayion?",
            "The TOZ-34 shotgun or Mikhail 74U carbine excel in tight stairwells, while a scoped rifle works best once you reach the roof."
      ],
      [
            "Is there a player stash in the Microrayion?",
            "Yes! Update 0.7.0 added a permanent player stash and crafting table directly in the central courtyard."
      ],
      [
            "Can I find keys for locked apartment doors?",
            "Yes, civilian keys spawn inside bedside dressers and on desks throughout neighboring apartment flats."
      ]
],
    related: ["scavland-map-and-locations", "scavland-safehouses-and-fast-travel-guide", "scavland-starter-loadouts-and-budget-builds", "scavland-loot-and-scavenging"],
    keywords: ["scavland microrayion", "scavland apartment blocks", "scavland west outpost", "scavland residential blocks", "scavland rooftop sniper", "scavland urban looting"]
  },
  {
    slug: 'scavland-sector-b4-bunker-complex',
    shortTitle: "Sector B-4 Bunker",
    title: "Scavland Sector B-4 Bunker Guide: Red Keycard, Subterranean Vaults & Traps",
    description: "Comprehensive tactical guide to the Sector B-4 subterranean bunker in Scavland: Red Keycard access, ventilation shafts, radioactive valves, and high-tier military vaults.",
    category: "Exploration",
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: "Sector B-4 subterranean military bunker entrance and concrete blast doors in Scavland",
    evidence: 'In-Game Subterranean Vault Blueprint Testing · Update 0.7.2',
    updated: '2026-09-30',
    answer: "Concealed beneath the industrial rail yards northwest of <strong>Zalesye</strong>, the <strong>Sector B-4 Bunker Complex</strong> is the most perilous and lucrative subterranean Soviet facility in Scavland's Early Access build. Guarded by a reinforced hydraulic blast bulkhead, entry requires swiping an authentic <strong>Red Keycard</strong>. Inside, the facility is divided into two distinct levels: an upper administrative sector containing armory footlockers and electrical breaker panels, and a flooded sub-level infested with lethal <strong>Tongue Monsters (Lickers)</strong> and radioactive pipe breaches. Successfully raiding Sector B-4 yields S-Tier military firearms, high-magnification optics, and rare <strong>Flux Aspect Cores</strong>.",
    steps: [
      "01 \u00b7 Acquire a Red Keycard: Before marching to the facility, secure a Red Keycard from locked hospital director safes or barter with Tier 3 black-market merchants.",
      "02 \u00b7 Breach the Outer Blast Door: Swipe your Red Keycard at the electronic reader beside the heavy blast doors. Keep your firearm raised, as sirens alert nearby surface patrols.",
      "03 \u00b7 Clear Upper Administrative Corridors: Systematically sweep office rooms using suppressed firearms. Loot metal desks for weapon attachments, <strong>5.45x39mm</strong> military ammo boxes, and security schematics.",
      "04 \u00b7 Restore Emergency Reactor Power: Locate the central electrical generator room. Replace damaged fuses and throw the primary breaker to restore overhead lighting and drain flooded lower corridors.",
      "05 \u00b7 Infiltrate Lower Sub-Level Bio-Vaults: Don a gas mask with at least <strong>80% filter charge</strong> to survive heavy yellow radiation zones. Use a 12-gauge shotgun to eliminate lurking Tongue Monsters.",
      "06 \u00b7 Loot High-Tier Military Weapon Crates: The deepest vault contains locked green footlockers housing pristine rifles (such as the <strong>63 Dragoon</strong> or <strong>MK-47</strong>). Crates reset every <strong>3 in-game hours</strong>."
],
    facts: [
      [
            "Complex Landmark",
            "Sector B-4 Subterranean Soviet Defense Shelter"
      ],
      [
            "Key Access Requirement",
            "Red Keycard swipe at reinforced electronic blast door"
      ],
      [
            "Sub-Level Hazard",
            "Heavy localized radiation requiring 80%+ gas mask filter charge"
      ],
      [
            "Apex Inhabitant",
            "Tongue Monsters (Lickers) lurking in flooded reactor passages"
      ],
      [
            "Loot Container Reset",
            "Military armory crates refresh on a 180-minute (3-hour) cycle"
      ],
      [
            "Story Climax Point",
            "Primary objective location for the 'Catching Current' questline"
      ],
      [
            "Verified Baseline",
            "In-Game Subterranean Vault Blueprint Testing \u00b7 Update 0.7.2"
      ]
],
    faq: [
      [
            "Where is the entrance to Sector B-4 located?",
            "Northwest of central Zalesye, nestled against the railway retaining wall behind rusted industrial shipping containers."
      ],
      [
            "Does the Red Keycard break after one use?",
            "No, keycards possess multi-use electronic durability, but keep a spare stored in your central safehouse stash."
      ],
      [
            "What should I do if the lights go out inside Sector B-4?",
            "Turn on your weapon flashlight or night vision immediately. The facility has dark corridors where mutants ambush in pitch blackness."
      ],
      [
            "Can I find the Flux Aspect Core in Sector B-4?",
            "Yes, the Flux Aspect Core is located in the deepest reactor core room and requires an Anomaly Scanner to safely extract."
      ],
      [
            "How long does it take for Sector B-4 loot to respawn?",
            "All high-tier military footlockers and ammo crates reset every 3 in-game hours (180 minutes)."
      ]
],
    related: ["scavland-red-keycard-and-bunker-loot-recovery", "scavland-walkthrough-advanced-endgame", "scavland-weapons-and-attachments", "scavland-quests-and-contracts"],
    keywords: ["scavland sector b4", "scavland bunker guide", "scavland red keycard bunker", "scavland b4 location", "scavland underground vault", "scavland military crates"],
    videoId: 'Xbq3ZHQf1YE',
    videoTitle: "Scavland How do you enter all the currently identified bunkers and secret bunkers?..",
    videoChannel: "Game Detox Dopamine"
  },
  {
    slug: 'scavland-rada-faction-contracts',
    shortTitle: "Rada Faction Contracts",
    title: "Scavland Rada Faction Guide: Military Patrols, Tier Rewards & Contract Chain",
    description: "Complete guide to the Rada military faction in Scavland: urban camo uniform recognition, diplomatic standing, Tier 2/3 armor unlocks, and base contracts.",
    category: "Factions",
    image: '/images/cards/card_3_quests_factions.webp',
    imageAlt: "Rada soldiers in urban camouflage and military checkpoints in Scavland",
    evidence: 'Official Steam Announcement Feed & Faction Mechanics · Update 0.7.0',
    updated: '2026-09-30',
    answer: "Operating as the remnants of organized regular armed forces, the <strong>Rada</strong> represent the most heavily disciplined military faction in Scavland. Instantly recognizable by their distinctive <strong>blue-grey urban camouflage uniforms</strong>, steel ballistic helmets, and standardized <strong>5.45x39mm</strong> rifles, the Rada control fortified road checkpoints and perimeter exclusion gates across <strong>Zalesye</strong>. Fulfilling daily 24-hour courier and clearing contracts for Rada commanders earns substantial faction reputation, unlocking Tier 2 and Tier 3 military quartermasters who supply reinforced <strong>Heavy Tactical Plate Carriers</strong>, pristine ammo crates, and specialized military weapon modifications.",
    steps: [
      "01 \u00b7 Identify Rada Uniforms & Sentry Posts: Rada troops wear blue-grey camouflage, high-collar tactical vests, and steel helmets. Their weapon posture remains low-ready unless provoked; reticles show green at 10m.",
      "02 \u00b7 Accept Repeatable Security Contracts: Speak with Rada border officers at checkpoint sandbag redoubts. Typical assignments involve clearing bandit ambushes or securing lost military couriers.",
      "03 \u00b7 Avoid Friendly Fire Penalties: Discharging firearms at Rada personnel triggers severe standing penalties (<strong>-100 to -300 Rep</strong>), causing checkpoint heavy machine guns to open fire on sight.",
      "04 \u00b7 Unlock Tier 2 Military Quartermaster: Achieving <strong>+200 Rep</strong> with the Rada unlocks access to bulk military 5.45x39mm armor-piercing ammunition and professional <strong>Armor Repair Kits</strong>.",
      "05 \u00b7 Unlock Tier 3 Heavy Plate Carriers: Reaching <strong>+500 Rep</strong> grants the privilege of purchasing military-grade Heavy Plate Carriers, which maximize kinetic damage mitigation in deep bunker raids.",
      "06 \u00b7 Broker Truces with Diplomat Raisa: If accidental friendly fire occurs, immediately visit diplomat <strong>Raisa</strong> at the Neutral Chapel to complete a courier truce task before border garrisons lock you out."
],
    facts: [
      [
            "Faction Identity",
            "The Rada (Organized regular military military remnants)"
      ],
      [
            "Uniform Silhouettes",
            "Blue-grey urban camouflage uniforms and steel helmets"
      ],
      [
            "Standard Caliber",
            "5.45x39mm Soviet and 9x18mm sidearms"
      ],
      [
            "Tier 2 Gate",
            "+200 Reputation unlocks military ammunition crates and repair kits"
      ],
      [
            "Tier 3 Gate",
            "+500 Reputation unlocks Heavy Tactical Plate Carriers"
      ],
      [
            "Diplomatic Truce",
            "Brokerable through diplomat Raisa at the Neutral Chapel"
      ],
      [
            "Verified Baseline",
            "Official Steam Announcement Feed & Faction Mechanics \u00b7 Update 0.7.0"
      ]
],
    faq: [
      [
            "How do I recognize Rada soldiers from bandits?",
            "Rada soldiers wear uniform blue-grey camouflage and steel helmets, and your HUD reticle displays a green dot within 10 meters. Bandits wear mismatched civilian coats and ushankas."
      ],
      [
            "What is the benefit of siding with the Rada?",
            "The Rada offer the best body armor vests, high-penetration military ammunition, and heavy weapon repair kits in Act I."
      ],
      [
            "What happens if my reputation with the Rada turns hostile?",
            "Checkpoint sentries and automated bunker turrets will engage you on sight from 30+ meters away."
      ],
      [
            "Can I repair my reputation with the Rada if I shot a guard?",
            "Yes, visit diplomat Raisa at the Neutral Chapel to pay a ruble indemnity or complete a courier truce mission."
      ],
      [
            "Where is the main Rada military outpost located?",
            "Along the northern highway checkpoint bordering central Zalesye, marked by concrete barriers and military sandbags."
      ]
],
    related: ["scavland-factions-progression-and-traders", "scavland-factions-and-reputation", "scavland-faction-identification-and-hud-guide", "scavland-armor-and-helmets-guide"],
    keywords: ["scavland rada faction", "scavland rada contracts", "scavland rada reputation", "scavland blue grey soldiers", "scavland military faction", "scavland rada armor"],
    videoId: 'CNmucSzrD0o',
    videoTitle: "Our Reputation Is PAYING OFF! Rank 2 Traders Unlocked | SCAVLAND",
    videoChannel: "Mr Feudal"
  },
  {
    slug: 'scavland-commonfolk-syndicate-missions',
    shortTitle: "Commonfolk Syndicate",
    title: "Scavland Commonfolk Syndicate Guide: Quests, Barter & Community Rep",
    description: "Guide to the Commonfolk syndicate in Scavland: ragged civilian coat recognition, food and hardware contracts, Zhivan 140% sell rates, and militia standing.",
    category: "Factions",
    image: '/images/cards/card_3_quests_factions.webp',
    imageAlt: "Commonfolk wasteland scavengers in padded jackets and ushankas in Scavland",
    evidence: 'Official Steam Announcement Feed & Faction Mechanics · Update 0.7.0',
    updated: '2026-09-30',
    answer: "Formed by resilient civilian survivors, farmers, and independent local scavengers, the <strong>Commonfolk</strong> syndicate constitutes the civilian backbone of <strong>Zalesye</strong>. Identified by their <strong>ragged brown padded jackets</strong>, wool ushankas, and improvised civilian shotguns, the Commonfolk maintain open trade markets, community kitchens, and agricultural outposts. Aligning with the Commonfolk grants access to essential survival staples\u2014clean water rations, medical bandages, and basic hunting ammunition\u2014while unlocking premium trade relationships with merchants like <strong>Zhivan</strong>, who pays an incredible <strong>140% buy rate</strong> for common hardware.",
    steps: [
      "01 \u00b7 Recognize Commonfolk Visual Silhouettes: Commonfolk operatives wear worn brown civilian jackets, wool ushankas, and carry single-barrel or double-barrel shotguns like the <strong>TOZ-34</strong>.",
      "02 \u00b7 Undertake Civilian Logistics Contracts: Speak with community brokers like <strong>Anatoly</strong> to accept basic collection jobs: gathering clean tin cans, firewood, electrical wire, and spare cloth.",
      "03 \u00b7 Capitalize on Zhivan's 140% Common Scrap Rate: Commonfolk hardware vendor <strong>Zhivan</strong> pays a massive <strong>140% multiplier</strong> for common classification scrap, making them your top liquidation partner.",
      "04 \u00b7 Procure Clean Food and Water Rations: Commonfolk quartermasters stock fresh canned beef, boiled water jars, and herbal tea that restore both hunger and hydration without radiation risk.",
      "05 \u00b7 Faction Defense Assistance: Commonfolk militia frequently engage stray <strong>Hellhounds</strong> around village perimeters. Assisting them in combat awards instant micro-reputation boosts.",
      "06 \u00b7 Avoid Aggressive Confrontations: Never discharge firearms inside central village perimeters. Harming Commonfolk turns settlement clinic physicians hostile, revoking medical triage services."
],
    facts: [
      [
            "Faction Alignment",
            "The Commonfolk (Civilian survivor & scavenger syndicate)"
      ],
      [
            "Visual Appearance",
            "Brown padded coats, civilian ushankas, and hunting shotguns"
      ],
      [
            "Core Economic Perk",
            "Zhivan pays 140% for Common classification items"
      ],
      [
            "Primary Hub",
            "Central Zalesye settlement square and rural farming plots"
      ],
      [
            "Key Supplies",
            "Clean canned provisions, boiled water, splints, and hunting ammo"
      ],
      [
            "Hostility Penalty",
            "-100 to -300 Rep locks players out of central clinic healing"
      ],
      [
            "Verified Baseline",
            "Official Steam Announcement Feed & Faction Mechanics \u00b7 Update 0.7.0"
      ]
],
    faq: [
      [
            "Why should I build reputation with the Commonfolk?",
            "The Commonfolk provide cheap food, clean drinking water, basic medical supplies, and merchant Zhivan's unbeatable 140% scrap buy rate."
      ],
      [
            "Where can I find Commonfolk contracts?",
            "In the central Zalesye market square from coordinator Anatoly and local farm overseers."
      ],
      [
            "Are Commonfolk guards aggressive?",
            "No, Commonfolk are neutral-friendly. They will only engage if you draw weapons aggressively or initiate friendly fire."
      ],
      [
            "What is the fastest way to earn Commonfolk reputation?",
            "Deliver requested hardware items (such as copper wire and spark plugs) to complete daily repeatable journal contracts."
      ],
      [
            "What happens if I accidentally shoot a Commonfolk villager?",
            "Immediately holster your weapon [H] and visit diplomat Raisa at the Neutral Chapel to broker a truce."
      ]
],
    related: ["scavland-factions-progression-and-traders", "scavland-money-making-guide", "scavland-merchant-prices-and-barter-guide", "scavland-faction-identification-and-hud-guide"],
    keywords: ["scavland commonfolk", "scavland commonfolk faction", "scavland zhivan trader", "scavland civilian quests", "scavland commonfolk reputation", "scavland zalesye syndicate"]
  },
  {
    slug: 'scavland-acolytes-cult-and-anomaly-tasks',
    shortTitle: "Acolytes Cult Guide",
    title: "Scavland Acolytes Cult Guide: Mist Worship, Artifact Shrines & Tasks",
    description: "Complete guide to the enigmatic Acolytes cult in Scavland: Mist anomaly shrines, artifact harvesting contracts, bio-protection gear, and reputation.",
    category: "Factions",
    image: '/images/cards/card_4_mist_exploration.webp',
    imageAlt: "Acolytes cultists at a glowing anomaly shrine in the dense Mist in Scavland",
    evidence: 'In-Game Anomaly Cult Logs & Steam Community Reports · Update 0.7.0',
    updated: '2026-09-30',
    answer: "Revering the toxic <strong>Mist</strong> as a divine cleansing event, the <strong>Acolytes</strong> represent the most mysterious and spiritually fanatic faction in Scavland. Cloaked in dark hooded hazard robes and respirators, the Acolytes operate secluded shrines deep within active radiation zones and anomaly clusters. While other factions flee the Mist, the Acolytes venture into dense fog to harvest high-tier artifacts using specialized <strong>Anomaly Scanners</strong>. Aligning with the Acolytes grants access to esoteric bio-protection gear, advanced <strong>Charcoal Tablets</strong>, and coveted artifact barter contracts that yield legendary passive bonuses, establishing consecrated altars that pulse with ethereal energy across Zalesye.",
    steps: [
      "01 \u00b7 Locate Secluded Anomaly Shrines: Acolyte shrines are hidden within foggy hollows and dense swamps. Look for wooden totems wrapped in barbed wire and blue-glowing bio-lanterns.",
      "02 \u00b7 Equip Proper Respiratory Protection: Acolyte camps sit in mild-to-heavy radiation zones. Always equip a gas mask with at least <strong>80% filter durability</strong> before approaching shrine elders.",
      "03 \u00b7 Fulfill Artifact Harvesting Contracts: Acolyte priests offer unique tasks requiring players to locate and extract floating anomalous nodes using an <strong>Anomaly Scanner</strong> on hotkey [3].",
      "04 \u00b7 Barter for Advanced Radiation Scrubbers: Acolyte vendors barter high-efficiency <strong>Charcoal Tablets</strong> and rare <strong>Rad-Away</strong> injectors in exchange for raw bio-crystals.",
      "05 \u00b7 Learn Safe Passage through Anomaly Fields: Cultists possess detailed knowledge of spatial distortions, granting tips on navigating electric arc traps and gravity wells safely.",
      "06 \u00b7 Maintain Neutrality: Never desecrate an anomaly shrine or open fire on cult acolytes. Their silenced firearms and poison-tipped rounds apply severe lethal debuffs."
],
    facts: [
      [
            "Faction Philosophy",
            "Mystical worship of the Mist and anomalous spatial phenomena"
      ],
      [
            "Uniform Visuals",
            "Dark hooded hazard robes, filtration respirators, and bone amulets"
      ],
      [
            "Primary Territory",
            "Deep radiation basins, foggy swamps, and secluded shrines"
      ],
      [
            "Key Goods Offered",
            "Rad-Away injectors, Anomaly Scanners, and bio-protection consumables"
      ],
      [
            "Contract Focus",
            "Extracting rare artifacts and cleansing biological anomalies"
      ],
      [
            "Combat Style",
            "Silenced ambushes utilizing toxic and psychological ammunition"
      ],
      [
            "Verified Baseline",
            "In-Game Anomaly Cult Logs & Steam Community Reports \u00b7 Update 0.7.0"
      ]
],
    faq: [
      [
            "Where can I find the Acolytes faction in Scavland?",
            "Their primary shrines are hidden in the southeastern foggy hollows and near toxic swamp boundaries."
      ],
      [
            "Are the Acolytes hostile to players?",
            "They are neutral unless you fire on them or enter their inner sanctums during active Mist events without permission."
      ],
      [
            "What rewards do Acolyte quests offer?",
            "High-grade anomaly detection tools, Rad-Away auto-injectors, and rare artifacts with powerful passive stat boosts."
      ],
      [
            "Do I need an Anomaly Scanner to complete Acolyte missions?",
            "Yes, most of their tasks require scanning and harvesting energetic anomalous nodes."
      ],
      [
            "Can I buy gas mask filters from the Acolytes?",
            "Yes, Acolyte traders offer military-grade charcoal filter cartridges with extended lifespan in dense Mist."
      ]
],
    related: ["scavland-anomaly-scanner-and-artifacts", "scavland-mist-survival-and-radiation", "scavland-mist", "scavland-factions-and-reputation"],
    keywords: ["scavland acolytes", "scavland cult faction", "scavland mist worship", "scavland artifact shrines", "scavland rad away", "scavland anomaly tasks"]
  },
  {
    slug: 'scavland-gunners-mercenary-contracts',
    shortTitle: "Gunners Mercenaries",
    title: "Scavland Gunners Faction Guide: Mercenary Bounties, Black-Market Guns & Rep",
    description: "Complete guide to the Gunners mercenary faction in Scavland: black tactical gear, high-caliber sniper contracts, heavy plate armor, and underground bases.",
    category: "Factions",
    image: '/images/cards/card_3_quests_factions.webp',
    imageAlt: "Gunners mercenary contractor in black tactical plate carrier in Scavland",
    evidence: 'Official Steam Announcement Feed & Faction Mechanics · Update 0.7.0',
    updated: '2026-09-30',
    answer: "Operating strictly on liquid currency and ruthless mercenary contracts, the <strong>Gunners</strong> are a heavily armed private security syndicate operating in Scavland. Cloaked in professional <strong>all-black tactical plate carriers</strong>, night-vision goggles, and balaclavas, the Gunners occupy fortified military bunkers and high-value resource depots. Gunners commanders offer high-paying elimination contracts targeting rogue deserters, fortified bandit encampments, and mutant alpha beasts roaming the outer perimeter zones. Cultivating reputation with the Gunners grants access to Tier 3 black-market weapon platforms, military <strong>7.62x54mmR sniper ammunition</strong>, and optical modifications.",
    steps: [
      "01 \u00b7 Identify Gunners Contractors: Gunners wear all-black tactical gear, black ballistic helmets, and modern plate carriers, wielding customized automatic assault rifles and scoped DMRs.",
      "02 \u00b7 Accept High-Risk Elimination Bounties: Gunners contracts focus on lethal direct action: assassinating bandit commanders, clearing heavy machine gun nests, or securing fortified vaults.",
      "03 \u00b7 Purchase Premium High-Caliber Ammunition: Gunner quartermasters stock bulk military-grade <strong>7.62x39mm AP</strong> and <strong>7.62x54mmR</strong> cartridges unavailable at civilian markets.",
      "04 \u00b7 Barter for the 63 Dragoon Sniper Platform: Achieve <strong>Tier 3 reputation (+500 Rep)</strong> with the Gunners to unlock direct purchase of the devastating <strong>63 Dragoon</strong> marksman rifle.",
      "05 \u00b7 Utilize Gunners Secure Bunkers: Gunner outposts feature heavy steel doors and dedicated ammo reloading benches, providing excellent shelter against nocturnal mutant raids.",
      "06 \u00b7 Never Default on Gunner Contracts: Cancelling an accepted Gunner contract deducts <strong>20% of the reputation reward</strong> (minimum 1 point). Ensure you have adequate gear before accepting."
],
    facts: [
      [
            "Faction Designation",
            "The Gunners (Private military mercenary syndicate)"
      ],
      [
            "Visual Uniform",
            "All-black tactical plate carriers, balaclavas, and NVG mounts"
      ],
      [
            "Weaponry",
            "Modernized MK-47s, 63 Dragoon sniper rifles, and tactical shotguns"
      ],
      [
            "Reputation Reward",
            "Unlocks Tier 3 military ammunition and optical sniper scopes"
      ],
      [
            "Contract Philosophy",
            "High-ruble bounties targeting bandit warlords and apex mutants"
      ],
      [
            "Contract Cancellation",
            "Deducts 20% of rep reward upon forfeit (Update 0.6.0)"
      ],
      [
            "Verified Baseline",
            "Official Steam Announcement Feed & Faction Mechanics \u00b7 Update 0.7.0"
      ]
],
    faq: [
      [
            "Where can I find Gunners mercenary contracts?",
            "At fortified security checkpoints and inside underground bunkers across the western sectors of Zalesye."
      ],
      [
            "Are the Gunners hostile to new players?",
            "Gunners maintain strict armed neutrality. Approaching with a raised weapon or ignoring verbal warnings will trigger lethal sniper fire."
      ],
      [
            "What is the best item to buy from Gunner traders?",
            "Bulk military-grade armor-piercing ammunition (7.62x39mm AP and 7.62x54mmR) and tactical 4x optical scopes."
      ],
      [
            "Can I buy the 63 Dragoon sniper rifle from the Gunners?",
            "Yes, reaching Tier 3 reputation with the Gunners unlocks direct purchase of the 63 Dragoon."
      ],
      [
            "What happens if I fail a Gunner assassination contract?",
            "Failing or cancelling the contract incurs a 20% reputation deduction penalty."
      ]
],
    related: ["scavland-factions-progression-and-traders", "scavland-best-weapons-tier-list", "scavland-ammo-types-and-damage", "scavland-armor-and-helmets-guide"],
    keywords: ["scavland gunners faction", "scavland gunners mercenary", "scavland black tactical soldiers", "scavland gunner contracts", "scavland 63 dragoon trader", "scavland gunner reputation"]
  },
  {
    slug: 'scavland-status-effects-and-debuffs',
    shortTitle: "Status Effects & Debuffs",
    title: "Scavland Status Effects Guide: Bleeding, Fractures, Radiation & Cures",
    description: "Complete reference of all Scavland status effects: arterial bleeding, bone fractures, dehydration lock, radiation sickness, toxic mist poisoning, and exact medical cures.",
    category: "Survival",
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: "Medical triage, status effect icons, and debuff treatment in Scavland",
    evidence: 'In-Game Debuff Manifest & Medical Treatment Testing · Update 0.7.2',
    updated: '2026-09-30',
    answer: "Surviving combat in Scavland requires understanding the intricate medical status effects and debilitating physical debuffs modeled by the survival engine. Unlike games where health merely acts as a single hitpoint pool, Scavland inflicts realistic physiological penalties: <strong>Arterial Bleeding</strong> drains health at up to <strong>5 HP/sec</strong> while disabling standard medkit recovery; <strong>Bone Fractures</strong> reduce character sprint speed by <strong>40%</strong> and inflate weapon sway by <strong>60%</strong>; and <strong>Dehydration Lockout</strong> completely halts stamina recovery during sleep. Below is the comprehensive medical treatment protocol for diagnosing and curing every negative condition.",
    steps: [
      "01 \u00b7 Arterial Bleeding (High-Priority Threat): Caused by bullet lacerations and mutant claws. Drains health rapidly (up to 5 HP/sec). Treatment: Apply a <strong>Sterile Bandage</strong> or <strong>Military Hemostatic Gauze</strong> immediately from quick slot [5].",
      "02 \u00b7 Bone Fracture (Mobility & Aim Debuff): Caused by high falls, shotgun blasts, or bear charges. Imposes -40% move speed and +60% weapon sway. Treatment: Apply a <strong>Wooden Splint</strong> (crafted from 2x Wood and 1x Clean Cloth).",
      "03 \u00b7 Radiation Poisoning (mSv Accumulation): Caused by entering yellow/red anomaly fields or unsealed bunkers. Drains maximum stamina and causes vision blur. Treatment: Consume <strong>Charcoal Tablets</strong> (minor) or inject <strong>Rad-Away</strong> (150 mSv purge).",
      "04 \u00b7 Dehydration & Starvation (Metabolic Lock): Reaching 0% Hydration or Energy blocks stamina regeneration upon waking from sleep. Treatment: Consume <strong>Boiled Water</strong>, soda cans, or canned stew before resting.",
      "05 \u00b7 Toxic Mist Inhalation (Lung Corrosion): Caused by roaming the Mist with an expired gas mask filter. Degrades maximum health over time. Treatment: Replace the gas mask with an <strong>80%+ filter</strong> and take Antidote Injectors.",
      "06 \u00b7 Concussion & Shellshock: Caused by explosive blasts or non-fatal helmet bullet impacts. Distorts peripheral vision and muffles audio. Treatment: Rest in cover for 15 seconds; pop <strong>Painkillers</strong> to restore focus."
],
    facts: [
      [
            "Arterial Bleed Drain",
            "Up to 5 HP per second; halts natural and medkit regeneration"
      ],
      [
            "Bone Fracture Penalty",
            "-40% movement speed, +60% weapon sway until splinted"
      ],
      [
            "Dehydration Impact",
            "Locks stamina recovery at 0% during mattress sleep"
      ],
      [
            "Rad-Away Potency",
            "Instantly purges 150 mSv of toxic radiation accumulation"
      ],
      [
            "Gas Mask Durability",
            "Requires 80%+ filter charge to block active toxic Mist damage"
      ],
      [
            "Campfire Healing Buff",
            "Doubles passive health regeneration rate (Update 0.7.0)"
      ],
      [
            "Verified Baseline",
            "In-Game Debuff Manifest & Medical Treatment Testing \u00b7 Update 0.7.2"
      ]
],
    faq: [
      [
            "Why does my health keep dropping even after using a medkit?",
            "You have an untreated active Bleeding effect. Medkits will not restore health until you apply a Sterile Bandage or Hemostatic Gauze to close the wound."
      ],
      [
            "How do I fix a broken leg in Scavland?",
            "Use a Wooden Splint. Splints can be crafted at any workbench from 2x Scrap Wood and 1x Clean Cloth or bought from Physician Anna."
      ],
      [
            "What happens if my radiation meter enters the red zone?",
            "Your maximum HP will permanently decrease, character movement will slow down, and your operative will vomit, losing hydration rapidly."
      ],
      [
            "Can I sleep off radiation sickness in Scavland?",
            "No! Sleeping with high radiation will cause your character to take continuous damage and potentially die in their sleep. Purge radiation first."
      ],
      [
            "How do I prevent weapon sway from fractures during combat?",
            "Apply a splint immediately, or take Painkillers which temporarily suppress fracture sway penalties for 90 seconds."
      ]
],
    related: ["scavland-health-hunger-thirst-system", "scavland-consumables-and-medical-supplies", "scavland-hospital-quest-and-medical-supplies", "scavland-mist-survival-and-radiation"],
    keywords: ["scavland status effects", "scavland debuffs guide", "scavland bleeding cure", "scavland fracture fix", "scavland radiation sickness", "scavland wooden splint"]
  },
  {
    slug: 'scavland-mist-anomalies-and-artifacts-list',
    shortTitle: "Mist Anomalies & Artifacts",
    title: "Scavland Anomalies & Artifacts Guide: Arc Traps, Gravity Wells & Stats",
    description: "Master Scavland anomalies and artifacts: electric arc traps, gravity fissures, toxic clouds, Anomaly Scanner sweeps, and legendary artifact passive stat buffs.",
    category: "Exploration",
    image: '/images/cards/card_4_mist_exploration.webp',
    imageAlt: "Glowing spatial anomaly and floating artifact extraction during Mist weather in Scavland",
    evidence: 'In-Game Anomaly Field Measurements & Artifact Testing · Update 0.7.2',
    updated: '2026-09-30',
    answer: "The dynamic <strong>Mist</strong> weather event transforms the wasteland of <strong>Zalesye</strong> into an unpredictable landscape of lethal spatial anomalies and priceless energetic treasures. While electric arc fissures, gravity vortexes, and chemical steam vents kill unprepared scavengers in seconds, they also materialize rare <strong>Artifacts</strong> with immense barter value and powerful passive stat modifiers. Equipped with an <strong>Anomaly Scanner</strong> on hotkey [3], survivors can detect anomalous frequencies, navigate around hazard triggers, and harvest legendary artifacts like the <strong>Flux Aspect Core</strong>, which double in value during dense Mist cycles.",
    steps: [
      "01 \u00b7 Equip the Anomaly Scanner (Hotkey [3]): Never enter blue or green shimmering zones without an active scanner. The beep frequency accelerates as you approach dangerous spatial distortions.",
      "02 \u00b7 Electric Arc Traps (Lightning Anomalies): Visible as crackling blue static arcs. Triggers instant lethal electrocution if stepped on. Toss metal bolts or empty bullet casings ahead to discharge the node safely.",
      "03 \u00b7 Gravity Fissures (Crush Vortexes): Warps surrounding air in shimmering ripples. Pulls survivors inward and crushes them against terrain. Circumvent vortexes by maintaining at least a 10m perimeter.",
      "04 \u00b7 Chemical Steam Vents: Erupts in corrosive green gas. Dissolves armor condition rapidly. Wear an 80%+ gas mask filter and sprint past during brief vent dormancy intervals.",
      "05 \u00b7 Harvest Floating Artifacts at Peak Mist Density: The highest-tier artifacts only materialize during dense Mist weather. Captured artifacts provide passive benefits: +20% stamina regen, +15% carry weight, or +10% bleed resistance.",
      "06 \u00b7 Store Artifacts in Insulated Containers: Raw artifacts emit low-level passive radiation into your inventory. Store them inside lead-lined artifact cases to safely carry multiple specimens."
],
    facts: [
      [
            "Anomaly Detection Tool",
            "Anomaly Scanner bound to hotkey [3] with acoustic frequency detection"
      ],
      [
            "Electric Trap Counter",
            "Toss metal bolts or casings to harmlessly trigger electric discharges"
      ],
      [
            "Top Story Artifact",
            "Flux Aspect Core (Extracted during Catching Current storyline)"
      ],
      [
            "Barter Multiplier",
            "Artifacts spawned during dense Mist cycles sell for 2x market barter value"
      ],
      [
            "Passive Stat Modifiers",
            "+Stamina regen, +Carry capacity, and +Radiation resistance"
      ],
      [
            "Inventory Radiation",
            "Raw artifacts emit passive rads; store in lead-lined containers"
      ],
      [
            "Verified Baseline",
            "In-Game Anomaly Field Measurements & Artifact Testing \u00b7 Update 0.7.2"
      ]
],
    faq: [
      [
            "How do I find artifacts in Scavland?",
            "Equip your Anomaly Scanner on hotkey [3] and explore anomaly fields during active Mist events. Follow the acoustic pitch until the artifact materializes."
      ],
      [
            "How do I survive electric arc anomalies?",
            "Throw loose metal bolts or empty casings into the anomaly to temporarily discharge the electrical field, allowing safe passage for 5 seconds."
      ],
      [
            "Do artifacts give passive buffs when carried in my backpack?",
            "Yes! Different artifacts provide permanent passive stat increases such as faster stamina recovery, bonus carry weight, or reduced bleed chance."
      ],
      [
            "Why is my character taking radiation damage while carrying an artifact?",
            "Unshielded artifacts emit passive radiation into your inventory. Keep them inside an insulated artifact container or take Charcoal Tablets."
      ],
      [
            "Where can I sell artifacts for the highest price?",
            "Acolyte cult shrines and high-tier Mechanist tech brokers pay double the standard price for pristine artifacts."
      ]
],
    related: ["scavland-anomaly-scanner-and-artifacts", "scavland-mist-survival-and-radiation", "scavland-mist", "scavland-money-making-guide"],
    keywords: ["scavland anomalies guide", "scavland artifacts list", "scavland anomaly scanner", "scavland electric arc anomaly", "scavland flux core", "scavland mist artifacts"]
  }
];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));


