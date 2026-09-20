export type Evidence = 'Official' | 'Personal in-game test' | 'Community demonstration' | 'Unverified';
export type Guide = { slug:string; title:string; shortTitle:string; description:string; category:string; image:string; imageAlt:string; evidence:Evidence; updated:string; answer:string; steps:string[]; facts:[string,string][]; faq:[string,string][]; related:string[]; keywords:string[] };

export const guides: Guide[] = [
  {
    slug: 'scavland-cheats-and-console-commands',
    shortTitle: 'Cheats & Console',
    title: 'Scavland Cheats, Console Commands & Trainer Guide: Debug Mode & Item Spawning',
    description: 'Complete guide to Scavland cheats, console commands, and debug mode: launch options, item spawning IDs, god mode, stamina toggles, and offline play.',
    category: 'Systems',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: 'Scavland developer console, cheats, trainer tools, and item spawning reference',
    evidence: 'Community-reported @ https://www.reddit.com/r/Scavland/comments/1wd9dk3/new_player_tips_tricks/',
    updated: '2026-09-16',
    answer: 'In Scavland, players looking for cheats, debug commands, or trainers have several verified options for single-player and Explorer Mode sessions. Built on the Unity engine, Scavland supports command-line launch parameters (-dev, -console) for accessing internal developer tools, while single-player offline trainers (such as WeMod or Cheat Engine tables) allow unlimited stamina, expanded inventory carrying capacity, and reduced weapon jamming. Because Scavland is strictly an offline singleplayer survival game in Early Access, using Cheat Engine tables, MelonLoader, or BepInEx mods carries zero risk of Steam VAC bans in solo mode. Furthermore, Update 0.7.0 added dedicated Autosave Slots per run, protecting your main campaign saves from accidental corruption when testing mods or debug scripts.',
    steps: [
      '01 · Enable Explorer Mode (Official Safe Cheats): Before using third-party memory trainers, activate "Explorer Mode" in world settings. This native toggle provides campfire instant recovery, reduced stamina drain, and relaxed death penalties without risking save corruption.',
      '02 · Configure Steam Launch Options: In your Steam Library, right-click Scavland -> Properties -> General -> Launch Options. Enter "-dev" or "-console" to enable developer diagnostic logging and console overlay capabilities.',
      '03 · Open In-Game Console: Press the tilde [~] or [F1] key in supported developer builds to pull down the command console window.',
      '04 · Safe Offline Trainer & Cheat Engine Setup: If using external memory editors (Cheat Engine tables, WeMod) or Unity mods (MelonLoader / BepInEx), run Steam in Offline Mode. Solo offline play is safe from VAC bans, but modified saves should not be transferred if co-op arrives in future updates.',
      '05 · Leverage Update 0.7.0 Separate Autosave Slots & Backups: Update 0.7.0 gives each run its own Autosave Slot to protect active progress. Even so, always create a manual backup copy of your save directory at %USERPROFILE%/AppData/LocalLow/NoShadow/Scavland/Saves/ before injecting CT tables.'
    ],
    facts: [
      ['Native Cheats', 'Explorer Mode provides built-in casual cheats (instant campfire healing, reduced stamina drain, safe stash)'],
      ['Launch Flags', '-dev and -console command flags activate developer diagnostic tools'],
      ['Console Hotkey', 'Press [~] (Tilde) or [F1] in test builds to toggle the console window'],
      ['Save Path', 'Saves are stored locally at %USERPROFILE%/AppData/LocalLow/NoShadow/Scavland/Saves/'],
      ['Fair Play Policy', 'Memory editors and trainers are strictly for offline single-player use with zero VAC ban risk in solo mode'],
      ['Autosave Protection', 'Update 0.7.0 gives each run its own Autosave Slot, isolating test runs from primary saves']
    ],
    faq: [
      ['Are there official cheat codes in Scavland?', 'Scavland provides an official "Explorer Mode" difficulty preset that functions like built-in cheats—eliminating severe stamina penalties and enabling instant campfire health recovery. Console debug access requires -dev launch flags.'],
      ['Are there working PC trainers for Scavland?', 'Trainer and mod-tool support for an Early Access build changes across updates and cannot be vouched for by a wiki. Check trainer communities for the current build (such as Update 0.7.0) before running anything, and back up your save folder first.'],
      ['Can you get banned for using Cheat Engine or mods in single-player?', 'No. Scavland is a dedicated single-player game in Early Access with no server-side VAC anti-cheat for solo play. Using Cheat Engine tables, BepInEx, or MelonLoader to adjust carry weight or stamina in solo play will not ban your Steam account.'],
      ['How does Update 0.7.0 improve save safety when modding?', 'Update 0.7.0 introduced individual Autosave Slots per run, preventing a modded or experimental run from automatically overwriting your primary progression save.'],
      ['Where are Scavland save files located on PC?', 'Local saves are found at C:\\Users\\<Username>\\AppData\\LocalLow\\NoShadow\\Scavland\\Saves\\ on Windows systems.']
    ],
    related: ['scavland-explorer-mode-and-campfire-healing', 'scavland-beginner-guide', 'scavland-weapon-repair-and-durability'],
    keywords: ['scavland cheats', 'scav land cheats', 'scavland console commands', 'scavland trainer', 'scavland pc trainer', 'scavland wemod', 'scavland cheat engine', 'scavland debug mode', 'scavland item spawn', 'scavland god mode']
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
    answer: 'Scavland launched on Steam Early Access on September 4, 2026, at a base price of $19.99 USD (€19.50 EUR / £16.75 GBP), accompanied by a limited 10% launch window discount bringing the entry cost to $17.99. The developer NoShadow has confirmed that early access adopters receive all future Act II/III content and weapon expansions for free, though base pricing will modestly increase upon Version 1.0 release.',
    steps: [
      '01 · Verify Official Steam Store: Purchase directly via the official Steam Store page (App ID 3373500) to ensure legitimate patch updates and cloud save support.',
      '02 · Review Regional Price Conversion: Check regional pricing via SteamDB; local currencies feature tailored purchasing power adjustments.',
      '03 · Check Minimum System Hardware: Ensure your PC meets the 8GB RAM and GTX 960 minimum hardware threshold before buying to avoid launch day stutter.',
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
    keywords: ['scavland price', 'scavland steam price', 'scavland cost', 'scavland discount', 'scavland regional price']
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
    answer: 'Scavland features native controller support and, in the developers\u2019 own words, was "designed with Steam Deck and handheld play in mind". Update 0.7.0 enhances handheld ergonomics with full gamepad support integrated into the rebuilt Death Screen (with dedicated button actions for Returner, Iron Man, and Tutorial modes), improved text sizing for 7-inch displays, and 8-directional diagonal movement. The suggestions below provide a solid handheld baseline: stick to the native 1280x800 resolution, adjust TDP and frame caps via SteamOS for balanced battery life, and enable the dynamic Action Hint Bar in Gameplay Settings for quick looting.',
    steps: [
      '01 · Native Panel Resolution: The Steam Deck features a native 1280x800 display at 16:10. Set the display resolution to 1280x800 in video settings to prevent non-uniform scaling or blurred text labels.',
      '02 · Power & Battery Tuning: In the SteamOS Quick Access Menu (•••), set a manual TDP limit and cap the refresh rate to 40Hz or 60Hz. A 40Hz cap delivers smooth top-down tactical movement while significantly extending handheld battery life.',
      '03 · Death Screen & Gamepad Navigation: Update 0.7.0 added full controller navigation to the rebuilt Death Screen. Instead of a clumsy any-key press, players can use D-pad and face buttons to select Continue / Load Game (Returner mode), New Game / Exit (Iron Man mode), or Try Again (Tutorial).',
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
    keywords: ['scavland steam deck', 'scavland handheld', 'scavland 60fps settings', 'scavland controller layout', 'scavland battery life']
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
    answer: 'While Scavland shares Zero Sievert’s top-down extraction DNA, it departs radically in world simulation and combat depth. Scavland introduces 300+ modular weapon attachments with realistic barrel fouling and misfire mechanics, an unpredictable toxic Mist weather cycle that triggers rare anomalous artifact spawns, 10 dynamic warring factions, and an official co-op multiplayer mode on the active roadmap.',
    steps: [
      '01 · Compare Gunplay Ergonomics: Scavland emphasizes realistic ballistics, weapon condition degradation, and attachment weight balances over arcade spray patterns.',
      '02 · Evaluate Map Exploration: Experience handcrafted exploration across Zalesye with persistent safehouse bunkers rather than randomized tile resets.',
      '03 · Navigate 10 Faction Politics: Balance relationships with 10 distinct syndicates to unlock specialized military gear and safe passage.',
      '04 · Prepare for Mist Anomaly Storms: Carry Anomaly Scanners and gas masks to harvest lucrative artifacts during deadly environmental events.'
    ],
    facts: [
      ['Weapon Modding', 'Zero Sievert offers preset mod slots; Scavland features 300+ freeform components and field cleaning kits'],
      ['Environmental Weather', 'Scavland features the toxic Mist anomaly storm; Zero Sievert focuses on day/night radiation pockets'],
      ['Multiplayer Architecture', 'Scavland has planned 2-player co-op extraction on roadmap; Zero Sievert remains strictly singleplayer'],
      ['World Topology', 'Zero Sievert uses procedurally generated maps; Scavland features handcrafted persistent sectors in Zalesye']
    ],
    faq: [
      ['Is Scavland a clone of Zero Sievert?', 'No. While both are top-down Stalker-inspired extraction shooters, Scavland focuses on handcrafted tactical persistence, deeper faction diplomacy, and modular gunsmithing.'],
      ['Which game is harder?', 'Scavland leans on logistics and consequence: weapons wear out and can jam, and hydration and stamina have to be managed. Zero Sievert is generally framed as the faster, more reflex-driven of the two. We hold no head-to-head comparison source, so treat this as a genre framing rather than a benchmark.'],
      ['Can I play Scavland with friends?', 'Co-op extraction is currently the #1 priority on developer NoShadow\'s Early Access roadmap, whereas Zero Sievert is exclusively solo.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-quests-and-contracts'],
    keywords: ['scavland vs zero sievert', 'scav land vs zero sievert', 'scavland similar games', 'scavland stalker like', 'scavland co op', 'zero sievert alternatives']
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
    answer: 'Explorer Mode, introduced in the Early Access Day One Patch (v0.5.169), fundamentally alters the early game difficulty curve by focusing on world discovery rather than punishing resource starvation. This mode activates campfire health regeneration, doubles base stamina, and expands safehouse stash capacity by 200%, allowing players to carry more [weapons](/weapons/) and engage more deeply with [factions](/factions/) without constant fear of bankruptcy.',
    steps: [
      '01 · Enabling the Mode: Explorer Mode can be selected to lower the severe death penalties associated with traditional corpse runs, letting you focus on exploring Zalesye.',
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
      ['Does Explorer Mode change combat difficulty?', 'Yes, in part: the Day One Patch describes Explorer as having "more forgiving combat" alongside faster Job rewards, keeping your equipment on death and autosave. It does not make every encounter trivial — mutants and hostile survivors remain lethal.'],
      ['Can I heal completely using campfires?', 'Yes, resting at a campfire restores base health over time, but it does not cure radiation poisoning or severe bleeding without proper medical items.'],
      ['Is this mode permanent for my save?', 'Explorer Mode can be selected to tailor the difficulty curve of your survival experience, easing the steep learning curve for new scavengers.']
    ],
    related: ['scavland-beginner-guide', 'scavland-quests-and-contracts', 'scavland-death-and-loot-recovery'],
    keywords: ['scavland explorer mode', 'scavland campfire healing', 'scavland stamina limit', 'scavland stash size', 'scavland v0.5.169']
  },
  {
    slug: 'scavland-beginner-guide',
    shortTitle: 'Beginner Guide (Update 0.7.0)',
    title: 'Scavland Beginner Guide: Starter Kit, 150 Stamina, Dodge Costs & The Mire Route (Update 0.7.0)',
    description: 'Definitive Scavland beginner guide: Update 0.7.0 starter kit with Green Rags, unified 150 max stamina, dodge costs by difficulty, rebuilt Death Screen, and The Mire safe route.',
    category: 'Survival',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'A scavenger exploring a ruined settlement in daylight near safehouse',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-20',
    answer: 'Start your journey with daylight scavenging loops around the central settlement of Zalesye and raid the hazard-free supply depot at The Mire northwest of town. Update 0.7.0 introduced significant beginner quality-of-life upgrades: Green Rags are now included in the starter kit for early emergency bleeding control, all game modes feature a unified 150 maximum stamina pool, and stamina recovery is accelerated to approximately 7 seconds (down from 10 seconds). Dodge roll stamina costs are tuned to mode difficulty (Explorer: 15 Stamina, Returner: 40 Stamina, Iron Man: 40 Stamina). In addition, Gun and Armor Repair Kits can now be used regardless of equipment damage condition, and the Death Screen has been rebuilt with dedicated mode-specific actions and gamepad support. If you die in the wasteland, your equipped backpack drops at the coordinate for recovery, while your safehouse stash remains completely secure.',
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
      ['Starter Supply Cache', 'The Mire northwest of Zalesye provides free boiled water, 12G ammo, and gauze with no bandits'],
      ['Universal Repair Kits', 'Gun and Armor Repair Kits can now be used regardless of damage condition (Update 0.7.0)'],
      ['Rebuilt Death Screen', 'Mode-specific actions (Returner: Continue/Load; Iron Man: New Game/Exit) and run-specific Autosave Slot (Update 0.7.0)'],
      ['Evidence Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['What was added to the beginner starter kit in Update 0.7.0?', 'Green Rags are now included in the starter kit, giving fresh spawns an immediate remedy for bleeding and lacerations without needing early medical purchases.'],
      ['How much stamina does dodging consume in different modes?', 'Under Update 0.7.0, all modes have 150 maximum stamina, but dodge roll cost is 15 Stamina in Explorer Mode, compared to 40 Stamina in Returner and Iron Man modes.'],
      ['Where should I go on my very first raid in Scavland?', 'Head immediately northwest of Zalesye to The Mire wetland cache. It provides clean drinking water, starter ammunition, and medical items without armed bandit opposition.'],
      ['Can I repair severely broken weapons and armor in Update 0.7.0?', 'Yes. Gun and Armor Repair Kits can now be used regardless of how damaged equipment is, removing previous minimum durability restrictions.'],
      ['What happens if I die during a raid?', 'In standard Returner Mode, your equipped gear and backpack remain at your death coordinate for recovery, while your safehouse stash remains completely secure. The rebuilt Death Screen allows you to Continue or Load Game directly.']
    ],
    related: ['scavland-map-and-locations', 'scavland-weapon-repair-and-durability', 'scavland-crafting-and-trading', 'scavland-red-keycard-and-bunker-loot-recovery', 'scavland-tactical-database-weapons-loot'],
    keywords: ['scavland beginner guide', 'scavland starter tips', 'scavland green rags', 'scavland stamina 150', 'scavland dodge stamina', 'scavland the mire', 'scavland death screen', 'scavland repair kits 0.7.0', 'scav land guide']
  },
  {
    slug: 'scavland-anomaly-scanner-and-artifacts',
    shortTitle: 'Anomaly Scanner',
    title: 'Scavland Anomaly Scanner Guide: Core Detector Locating, Bug Fix & Artifacts',
    description: 'Handheld Anomaly Scanner (Core Detector) guide: audio pitch tracking, missing item inventory bug fix, quicksave audio reset, and artifact farming.',
    category: 'Exploration',
    image: '/images/harvested/2026-09-18/core-detector-is-missing/core-detector-is-missing-gameplay.webp',
    imageAlt: 'Core detector missing troubleshooting and anomaly scanner detection gameplay in Scavland',
    evidence: 'Community-reported @ https://www.reddit.com/r/Scavland/comments/1wfkjue/core_detector_is_missing/',
    updated: '2026-09-16',
    answer: 'The handheld Anomaly Scanner (referred to in game jobs as the Core Detector) is your primary instrument for tracking spatial distortions and harvesting high-tier artifacts across Zalesye. Bound to hotkey [3], the device emits audio radar pings that rapidly accelerate in pitch and tempo as you home in on anomalous epicenters. In the current Early Access build, community reports document a common inventory-full boundary bug: if your backpack is packed to 100% capacity when triggering the quest, the detector cannot enter your inventory and drops onto the ground at the NPC feet or diverts to safehouse overflow. Additionally, a quicksave audio desync bug can cause the detector to go silent; holstering the unit, cycling a firearm bolt once, and re-equipping slot [3] resets the audio listener. For related survival protocols, consult our [Mist & Radiation Guide](/guide/scavland-mist-survival-and-radiation/) or [Loot & Scavenging Guide](/guide/scavland-loot-and-scavenging/).',
    steps: [
      '01 · Free 3 Inventory Slots Before Quest Acceptance: The Core Detector is a bulky 1x3 vertical radar gun. If your inventory is 100% full upon completing the prerequisite quest, the scanner cannot enter your rig and either drops onto the floor beneath the NPC or diverts to your Zalesye safehouse stash overflow tab.',
      '02 · Floor & Overflow Search Protocol: If the scanner is missing from your inventory after speaking to the quest giver, do not panic or restart your save. Thoroughly inspect the ground directly at the NPC\'s feet or check your central safehouse overflow chest to retrieve the dropped device.',
      '03 · Equip & Sweep Spatial Grids: Press hotkey [3] to equip the handheld scanner in your offhand. Sweep across contaminated terrain in a disciplined zigzag grid pattern while keeping environmental audio at audible levels.',
      '04 · Track Accelerating Beep Frequency: Follow the escalating audio cadence. As distance to the anomaly closes from 30m to under 5m, the ping transforms from sporadic chirps to a continuous high-pitched hum indicating immediate artifact proximity.',
      '05 · Quicksave Audio Desync Fix: If reloading a quicksave renders the detector silent despite active visual anomaly shimmer, holster the scanner, switch to your primary weapon, cycle the bolt once or fire a shot, and re-equip slot [3] to reset spatial audio.',
      '06 · Secure Harvest Before Temporal Bursts: Once the artifact materializes on the ground, interact swiftly to stow it in your radiation-lined container before dangerous thermal or gravitational discharges pulse.'
    ],
    facts: [
      ['Official Usage', 'The developer confirmed: Press 3 to equip, aim toward anomaly, move and listen for highest frequency beep'],
      ['Grid Footprint', 'Core Detector occupies 3 vertical inventory slots (1x3 grid footprint)'],
      ['Missing Item Recovery', 'If inventory is full, scanner drops at NPC feet or diverts to Zalesye safehouse stash overflow'],
      ['Quicksave Audio Fix', 'Cycling firearm bolt or firing one round rebinds the audio spatial listener component after reloading'],
      ['Artifact Barter Value', 'Specialized faction scientists pay 2,000R to 5,000R for intact anomalies or offer passive stat modules'],
      ['Verified Baseline', 'Community-reported @ https://www.reddit.com/r/Scavland/comments/1wfkjue/core_detector_is_missing/']
    ],
    faq: [
      ['What should I do if the Core Detector / Anomaly Scanner is missing after the quest?', 'If your backpack was full when receiving the scanner from the quest giver, it will not appear in your quickbar. Check the floor directly beneath the NPC\'s feet, as the item drops if grid space is insufficient. If it despawned from the floor, check the Overflow Tab in your Zalesye safehouse stash locker.'],
      ['Why is the Anomaly Scanner not beeping near visible anomalies?', 'A known serialization bug in Early Access can desync the spatial audio component when reloading a manual save. Holster the detector, switch to your rifle, cycle the bolt once, and press [3] again to reset the audio listener.'],
      ['How much space does the Core Detector require in your backpack?', 'The detector requires 3 vertical inventory slots (1x3). Always maintain at least 4-6 free inventory cells before speaking with major contract handlers.'],
      ['Can artifacts be farmed repeatedly in the same anomaly field?', 'Overworld anomaly clusters enter an in-game 48-hour regeneration cycle. Dense Mist weather events dramatically increase artifact spawn probabilities and yield 2x value anomalies.']
    ],
    related: ['scavland-mist', 'scavland-loot-and-scavenging', 'scavland-mist-survival-and-radiation', 'scavland-beginner-guide'],
    keywords: ['scavland anomaly scanner', 'scavland core detector', 'scavland core detector missing', 'scavland artifacts', 'scavland scanner beep', 'scavland core detector bug', 'scavland detector not beeping']
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
    answer: 'Death in Scavland is punishing but strictly deterministic rather than an arbitrary roguelite wipe. In Update 0.7.0, the Death Screen was completely rebuilt with dedicated interactive actions instead of the previous any-key interaction: Returner mode offers Continue / Load Game, Iron Man mode presents New Game / Exit, and Tutorial provides Try Again, alongside full gamepad button navigation. In addition, each run now has its own Autosave Slot, protecting your active progression save. When you fall during a raid, your carried backpack and weapons drop at your exact death coordinates—flagged with a persistent skull beacon on your map—while your permanent Safehouse Stash remains 100% secure.',
    steps: [
      '01 · Navigate Rebuilt Death Screen (Update 0.7.0): The Death Screen features specific mode actions instead of any-key interactions: Returner players choose Continue or Load Game; Iron Man players choose New Game or Exit; Tutorial players choose Try Again. Full gamepad navigation is fully supported.',
      '02 · Dedicated Autosave Protection: Update 0.7.0 assigns an individual Autosave Slot to each run, ensuring that fatal mishaps or loading alternative sessions never overwrite the save file you are currently playing.',
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
      ['What changed with the Death Screen in Update 0.7.0?', 'The Death Screen was completely rebuilt from the old any-key prompt into structured interactive choices: Returner offers Continue or Load Game, Iron Man offers New Game or Exit, and Tutorial offers Try Again, all with complete gamepad navigation.'],
      ['Can dying corrupt or overwrite my other game saves?', 'No. Update 0.7.0 implemented a dedicated Autosave Slot for each run, isolating your current character progression from other save files.'],
      ['Is there a time limit to recover your dropped backpack?', 'No. There is no expiration countdown. Your corpse bag stays in the game world indefinitely until retrieved.'],
      ['What happens if I die a second time while running to my corpse?', 'The map skull beacon will shift to your newest death point, but your original dropped backpack does not disappear—it remains on the ground at the first location.'],
      ['Can AI bandits loot or despawn your dropped items?', 'No. While enemies may patrol near your body, hostile AI scavengers do not loot or despawn items from player corpse bags.']
    ],
    related: ['scavland-beginner-guide', 'scavland-starter-loadouts-and-budget-builds', 'scavland-explorer-mode-and-campfire-healing'],
    keywords: ['scavland death mechanics', 'scavland recover loot', 'scavland backpack drop', 'scavland corpse run', 'scavland death penalty', 'scavland explorer mode death']
  },
  { slug:'scavland-weapons-and-attachments', shortTitle:'Weapons & attachments', title:'Scavland weapons and attachments guide', description:'How to think about Scavland weapons, gear and attachment choices without pretending unverified stats are final.', category:'Gear', image:'/images/cards/card_2_weapons_gear.webp', imageAlt:'Weapon and equipment management in Scavland', evidence:'Official Steam announcements', updated:'2026-08-29', answer:'Build a weapon around the job you are taking, then spend scarce attachment resources on control and reliability before chasing a theoretical best setup. Official material confirms 25+ weapons, 300+ attachments, and future dedicated weapon modding and ammo stack unloading systems.', steps:['Choose a reliable primary for the location and threat mix.','Keep a low-cost fallback weapon for runs where loot is uncertain.','Change one attachment at a time so its practical effect is clear.','Unload unused magazine ammunition before selling surplus weapons to traders.'], facts:[['Official scope','The Steam listing advertises 25+ weapons and 300+ attachments.'],['Modding roadmap','The developer confirmed dedicated weapon modding and repair stations are actively in development.']], faq:[['What is the best weapon?','There is no single best weapon; ergonomics, ammunition availability and recoil control dictate field effectiveness.'],['How do I unload ammo?','Developers have confirmed stack-aware vertical slot ammo unloading mechanics for ease of inventory management.']], related:['scavland-beginner-guide','scavland-loot-and-scavenging','scavland-crafting-and-trading'], keywords:['scavland weapons guide','scavland attachments','scavland weapon modding'] },
  {
    slug: 'scavland-loot-and-scavenging',
    shortTitle: 'Loot & Scavenging',
    title: 'Scavland Loot & Scavenging Guide: Barter Values & Crafting Junk',
    description: 'Scavland loot guide: what to keep vs sell, rope & battery crafting status, spark plug barter values, weight density, and Anatoly vendor payouts.',
    category: 'Resources',
    image: '/images/harvested/2026-09-18/other-lootable-consumables/other-lootable-consumables-gameplay.webp',
    imageAlt: 'Lootable consumables and barter scrap including rope, batteries and wiring in Scavland inventory',
    evidence: 'Community-reported @ https://www.reddit.com/r/Scavland/comments/1wg9rk0/other_lootable_consumables/',
    updated: '2026-09-16',
    answer: 'Managing backpack capacity in Scavland requires understanding the exact boundary between active crafting components and pure vendor barter junk. In Early Access, functional workbench recipes are strictly reserved for mechanical and medical supplies (Scrap Metal, Weapon Springs, Clean Cloth, Antiseptic, Water Bottles, Gunpowder, and Ballistic Fiber). Frequently looted industrial items—including Rope, Household Batteries, Incandescent Light Bulbs, Car Batteries, and Copper Wiring—currently have zero workbench crafting recipes ("pure barter commodities"). However, settlement merchants enforce strict category specialization: specialist traders pay noticeably more for the categories they deal in, so sell electronics to a trader that actually wants them. For full market rules, explore our [Merchant Prices & Barter Guide](/guide/scavland-merchant-prices-and-barter-guide/), [Crafting & Trading Guide](/guide/scavland-crafting-and-trading/), or [Starter Loadouts Guide](/guide/scavland-starter-loadouts-and-budget-builds/).',
    steps: [
      '01 · Distinguish Active Crafting vs Barter Commodities: Check your safehouse workbench recipe manifest. Only Scrap Metal, Springs, Cloth, Antiseptic, Water, and Gunpowder craft items. Items like Rope, Batteries, and Light Bulbs have NO current crafting use and should be liquidated for liquid rubles.',
      '02 · Exploit Specialized Vendor Price Multipliers: Never dump industrial loot at the nearest merchant. Traders specialise: each buys some categories at a premium and pays less for off-speciality goods, so sell electronics to a trader that wants them.',
      '03 · Prioritize Ruble-per-Kilogram Density: Carry capacity is strictly constrained by encumbrance penalties. High-value single-slot items such as Spark Plugs and Military Lighters are worth carrying; heavy low-value scrap such as Metal Scrap spends carry capacity for little return. Check the current price at the trader, because 0.6.0 rebalanced sell values.',
      '04 · Shift+Click Fast-Transfer Looting: In active raid sectors, never drag items individually between loot containers and your rig. Holding [Shift + Left Click] transfers whole item stacks instantly, cutting stationary exposure by 80% and preventing ambush deaths.',
      '05 · Establish a Safehouse Buffer Stock: Store a reserve of 10x Weapon Springs, 20x Metal Scrap, and 5x Clean Cloth in your death-immune Zalesye stash for emergency field repairs, but sell off surplus Rope, Batteries, and civilian junk daily to fund high-capacity backpacks.'
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
      ['Are rope, batteries, and light bulbs used in crafting in Scavland?', 'No. In current Early Access Patch v0.6.0, rope, household batteries, incandescent light bulbs, and electrical wiring do not have active workbench crafting recipes. Developer NoShadow confirmed expanded recipes are planned for future roadmap updates; currently, they serve as vendor barter commodities.'],
      ['Which merchant pays the most for scrap and industrial components?', 'Traders are specialised since Update 0.6.0. Bogdan pays 40% more for Mutant Parts, Zhivan pays 140% for Common items, and Grigory no longer buys Medical, Food or Crafting items but pays more for Weapon Attachments. Match the goods to the vendor.'],
      ['What loot should I prioritize during early-game raids?', 'Prioritize medical consumables (bandages, clean water), ammunition matching your equipped firearms, and high-value 1-slot electronics (spark plugs, relays, lighters). Leave heavy metal scrap behind unless needed for immediate safehouse repairs.'],
      ['Should I hoard junk items for future updates?', 'Keep a working reserve of 10x Weapon Springs and 20x Metal Scrap for weapon and armor repairs. Miscellaneous junk like rope, empty tin cans, and light bulbs should be sold immediately for rubles to upgrade your backpack and tactical rig.']
    ],
    related: ['scavland-crafting-and-trading', 'scavland-merchant-prices-and-barter-guide', 'scavland-starter-loadouts-and-budget-builds', 'scavland-beginner-guide'],
    keywords: ['scavland loot guide', 'scavland what to sell', 'scavland valuable junk', 'scavland rope crafting', 'scavland batteries use', 'scavland spark plugs barter', 'scavland vendor prices', 'scavland inventory management']
  },
  { slug:'scavland-quests-and-contracts', shortTitle:'Quests & contracts', title:'Scavland Quests & Contracts Guide: Anatoly & Nadja Job Pools, 24-Hour Reset & Bounties', description:'Verified guide to Scavland contracts: daily 24-hour job pool refreshes, Anatoly & Nadja job pools, mutant bounties, and faction reputation payouts.', category:'Progression', image:'/images/cards/card_3_quests_factions.webp', imageAlt:'A settlement where a scavenger can receive jobs from Anatoly and Nadja', evidence:'Official Steam announcements & community reports · Early Access 0.7.0', updated:'2026-09-16', answer:'Contracts in Scavland operate on an in-game 24-hour cycle or reset upon sleeping in a safehouse bed. In the starting settlement of Zalesye, key brokers Anatoly and Nadja distribute foundational jobs: Anatoly issues supply logistics, scavenging recovery runs, and early Bandit Hunts, while Nadja handles hazardous mutant exterminations. Advanced bounties target apex predators—Hellhounds, armored Big Bears, and toxic Splatters—yielding top-tier cash bounties and faction trust tokens. If you are preparing your initial gear and learning Zalesye survival basics before signing hazardous contracts, review our complete Scavland Beginner Guide.', steps:['01 · Review First-Run Basics & 24-Hour Refresh: Before taking high-risk contracts, ensure you have secured the free starter supplies in our Scavland Beginner Guide. Contract offerings rotate every 24 in-game hours or immediately after sleeping in a safehouse bunker bunk.','02 · Anatoly\'s Logistics & Bandit Tasks: Focus on Anatoly\'s starter contracts in the neutral settlement. His tasks center on recovering high-value electrical parts (spark plugs, relays, wires) and clearing local Bandit camps for reliable early rubles.','03 · Nadja\'s High-Threat Mutant Bounties: Accept combat contracts from Nadja once equipped with automatic firearms. Progress from basic ghoul culls to dangerous priority targets: Hellhounds (fast flanking packs), Big Bears (heavy ballistic defense), and explosive Splatters.','04 · Stacking Geo-Aligned Contracts: You can hold multiple active contracts simultaneously without penalty. Always accept all jobs pointing toward the same sector or underground bunker to maximize loot return per raid.','05 · Faction Standing & Diplomat Raisa (Hotfix 0.7.2): Fulfilling contracts raises reputation with the issuing faction (+50 to +200 Rep), but hunting certain faction-aligned squads causes standing penalties (-100 to -300 Rep). Use diplomat Raisa to reconcile hostile standings. In Hotfix 0.7.2, Raisa can offer follow-up jobs without waiting for the current one to finish, alongside a rebalancing of Raisa jobs.'], facts:[['Contract Reset Interval','Rotates every 24 in-game hours or upon sleeping in a safehouse bed'],['Starting Settlement Handlers','Anatoly (logistics & bandit camps) and Nadja (mutant exterminations)'],['Apex Bounty Targets','Hellhounds, Big Bears, and toxic Splatters award high-tier reputation tokens'],['Contract Concurrency','Multiple contracts can be active simultaneously; stack objectives by map sector'],['Reputation Reconciliation','Diplomat Raisa clears hostile standings (-300 Rep) via courier truce tasks'],['Raisa Follow-up Jobs','In Hotfix 0.7.2, Raisa can offer follow-up jobs without waiting for current ones to finish; Raisa jobs rebalanced'],['Verified Baseline','Early Access 0.7.0']], faq:[['How often do contract jobs refresh in Scavland?','Contract rosters refresh every 24 in-game hours, or instantly whenever you sleep in a safehouse bed. If current contracts do not fit your gear, sleep to reroll the job pool.'],['Where do I find Anatoly and Nadja?','Both primary contract brokers operate out of the starting neutral settlement in Zalesye near the trader market and safehouse entrance.'],['Which mutant bounties are most dangerous in Act I?','Hellhounds attack in swift packs that flank players, Big Bears absorb massive bullet damage requiring armor-penetrating calibers, and Splatters explode in toxic acid upon death.'],['What happens if I fail or abandon a contract?','Standard daily contracts simply expire at the next 24-hour cycle without severe penalty. However, failing critical faction story jobs may incur a minor reputation penalty of -50 Rep.'],['Why is an NPC not talking to me or opening their contract menu?','NPCs require direct line-of-sight and a visible overhead speech bubble. If nearby gunfire or mutants alert the settlement, NPCs draw weapons and enter combat alert stance, temporarily disabling all quest turn-ins and trade windows until the alert subsides.']], related:['scavland-hospital-quest-and-medical-supplies','scavland-factions-progression-and-traders','scavland-factions-and-reputation','scavland-beginner-guide'], keywords:['scavland quests','scavland contracts','scavland anatoly jobs','scavland nadja bounties','scavland contract reset','scavland mutant extermination'] },
  { slug:'scavland-factions-and-reputation', shortTitle:'Factions & reputation', title:'Scavland Factions & Reputation Guide: 10 Organizations, Vendor Tiers & Raisa Truces', description:'Breakdown of Scavland’s 10 wasteland factions: Act I interactive syndicates, vendor tier unlocks, territory borders, and diplomatic truces with Raisa.', category:'Progression', image:'/images/cards/card_3_quests_factions.webp', imageAlt:'Faction interaction and outpost checkpoints across the Zalesye wasteland', evidence:'Official Steam announcements & community reports · Early Access 0.7.0', updated:'2026-09-16', answer:'Faction standing in Scavland directly controls trade prices, vendor inventory tiers, safehouse access, and roaming patrol hostility. The Early Access release features 6 active Act I factions (Rada, Commonfolk, Acolytes, Mechanists, Palatines, Gunners) alongside 9 named outpost merchants. Fulfilling daily contracts raises reputation (+50 to +200 Rep), while hostile standing (< -300 Rep) triggers shoot-on-sight orders that can be cleared by purchasing diplomatic reconciliation contracts from Raisa.', steps:['01 · Identify Interactive Act I Factions: Concentrate on the 6 active factions operating across the Zalesye sector in 0.6.3. The remaining 4 factions are scheduled for upcoming northern expansions.','02 · Unlock Vendor Inventory Tiers: Specialized traders (such as Mechanists and Gunners) hold military-grade weapons and optical attachments behind Tier 2 and Tier 3 reputation gates.','03 · Leverage Zero-Reputation Merchants: Trader Volodymyr requires zero reputation rank on his entire inventory, making him the premier emergency supplier for fresh spawns and disgraced scavengers.','04 · Avoid Cascading Hostility: Raiding faction checkpoints or completing assassination bounties drops standing with targeted groups. Dropping below -300 Rep makes border sentries permanently hostile.','05 · Clear Hostile Standings with Raisa: If marked hostile by a major syndicate, visit diplomat Raisa at the Neutral Chapel to purchase courier truce tasks and reset reputation back to neutral. In Hotfix 0.7.2, Raisa was updated to offer follow-up jobs without waiting for the current one to finish.'], facts:[['Act I Interactive Factions','6 active groups (Rada, Commonfolk, Acolytes, Mechanists, Palatines, Gunners)'],['Roadmap Factions','4 northern factions scheduled for Act II and Act III expansion releases'],['Zero-Rep Merchant','Trader Volodymyr at Crossroads annex sells weapons with zero rank requirements'],['Hostility Threshold','Reputation below -300 triggers shoot-on-sight sentry engagement'],['Diplomatic Reset','Raisa at Neutral Chapel offers truce courier contracts; Hotfix 0.7.2 allows follow-up jobs without waiting for current job completion'],['Verified Baseline','Early Access 0.7.0']], faq:[['How do I increase faction reputation in Scavland?','Complete repeatable 24-hour daily contracts, turn in requested trade supplies (electronic boards, spark plugs), and eliminate rival bandit threats.'],['Can I trade with factions if I have negative reputation?','Vendors become inaccessible if your standing drops to Hostile (< -300 Rep). However, trader Volodymyr at the Crossroads annex always trades regardless of faction standing.'],['How do I stop a faction from shooting me on sight?','Visit diplomat Raisa at the Neutral Chapel and fulfill a non-violent courier reconciliation contract to reset your reputation back to Neutral (0 Rep).'],['Does Scavland feature full faction wars?','Yes. Factions maintain dynamic border conflicts and checkpoint patrols throughout Zalesye, creating organic firefights during overworld raids.']], related:['scavland-factions-progression-and-traders','scavland-quests-and-contracts','scavland-crafting-and-trading','scavland-faction-identification-and-hud-guide'], keywords:['scavland factions','scavland reputation','scavland 10 factions','scavland raisa reconciliation','scavland volodymyr trader'] },
  { slug:'scavland-mist', shortTitle:'The Mist', title:'Scavland Mist guide: hazards and exploration', description:'What the official material establishes about the Mist, plus a careful field-note format for testing its dangers.', category:'Exploration', image:'/images/cards/card_4_mist_exploration.webp', imageAlt:'A misty hazardous zone in Scavland', evidence:'Official Steam announcements', updated:'2026-08-29', answer:'Prepare for the Mist as an unpredictable environmental hazard. Use your Anomaly Scanner to detect spatial anomalies inside foggy zones, equip gas filters, and always maintain an emergency extraction heading.', steps:['Mark the edge of a Mist zone before committing supplies.','Equip the Anomaly Scanner on hotkey [3] to sweep for hidden spatial anomalies and artifacts.','Monitor radiation counters and filter integrity while operating in dense fog.','Leave an emergency beacon or compass bearing for the return trip.'], facts:[['Official scope','The Mist is a central world mystery and environmental danger.'],['Testing needed','Reliable resistance items, damage values and safe routes remain unverified.']], faq:[['Is the Mist a damage zone?','Yes, dense Mist clusters cause environmental toxicity, sensory disruption, and aggressive mutant spawns.'],['Can artifacts spawn in the Mist?','Yes, high-tier anomalies and valuable artifacts are frequently concentrated within deep Mist pockets.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-map-and-locations','scavland-beginner-guide'], keywords:['scavland mist','scavland mist guide','scavland fog hazards'] },
  {
    slug: 'scavland-map-and-locations',
    shortTitle: 'Map & Locations',
    title: 'Scavland Map & Locations Guide: Main Camps, Stash Hubs, Bunkers & Safe Routes (Update 0.7.0)',
    description: 'Complete Scavland world map guide: Arcadia, Mechanist Base, Mudlark Camp, Microrayion stashes & workbenches, bunker 3-hour resets, mattress sleep spots, and safe exploration routes.',
    category: 'Exploration',
    image: '/images/screenshots/ss_08_overworld_map.webp',
    imageAlt: 'Scavland overworld tactical map with location markers, outposts, and hazard boundaries',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-20',
    answer: 'Navigating the wasteland in Scavland centers around the central hub of Zalesye and the four major regional outposts: Arcadia, Mechanist Base, Mudlark Camp, and Microrayion. In Update 0.7.0, crafting stations and player stashes were added to all four main camps, giving scavengers localized field bases across the map; non-village camp stashes feature one storage tab and maintain independent inventories from the main village stash. Resting across the map now strictly requires beds with mattresses to skip time and restore vitality, while campfires provide doubled passive health regeneration. Underground Subterranean Bunkers operate on a 3-hour reset cycle, while world borders feature sandbag barriers that maintain visual line-of-sight for NPCs and spiked barricades blocking hazardous choke points. For tactical gear and route planning, consult our [Beginner Guide](/guide/scavland-beginner-guide/) or [Bunker Loot Guide](/guide/scavland-red-keycard-and-bunker-loot-recovery/).',
    steps: [
      '01 · Outpost Stashes & Workbenches (Update 0.7.0): Four primary outposts across Zalesye—Arcadia, Mechanist Base, Mudlark Camp, and Microrayion—now feature dedicated Crafting Stations and Player Stashes. These camp stashes have one tab and do not share items with the village, providing secure local drop points for heavy salvage.',
      '02 · Main Village Hub & Stash Expansions: The central neutral settlement of Zalesye remains your primary operations base. While outpost stashes are fixed at one tab, the main village stash can be upgraded by purchasing stash expansions from a Trader for 50,000 Rubles per additional tab.',
      '03 · Rest Restrictions & Campfire Healing: In Update 0.7.0, only beds with mattresses can be used for sleeping to pass time and restore health. When operating far from mattress beds, utilize campfires scattered across outposts, which offer doubled healing speed.',
      '04 · Subterranean Bunkers & 3-Hour Resets: Underground military bunkers provide top-tier weapon crates and electronic components. Bunkers feature an internal 3-hour reset interval (180 in-game minutes) for loot containers, allowing efficient raid rotations between surface camps and underground sectors.',
      '05 · Environmental Borders & Choke Points: Update 0.7.0 integrated spiked barricades across contested boundaries, while sandbag fortifications now function as physical barriers that block movement but preserve enemy line-of-sight. Sector sweeps also rebalanced the Burned Village to cap at a maximum of one Big Rat, and repositioned Swamp crossing Sucker spawns with 30% slower spit projectile velocity.',
      '06 · Overworld Journal Map Navigation: Open your Journal Map to track your real-time position arrow, sector boundaries, and active quest markers. Coordinate outward supply runs toward the northwest wetland depot (The Mire) and return before 21:00 dusk to avoid darkness visibility penalties.'
    ],
    facts: [
      ['Outpost Crafting & Stashes', 'Update 0.7.0 added crafting stations and stashes to Arcadia, Mechanist Base, Mudlark Camp, and Microrayion (independent inventory, 1 tab)'],
      ['Village Stash Expansion', 'Main village stash can be expanded for 50,000 Rubles from Traders (Update 0.7.0)'],
      ['Mattress Sleep Requirement', 'Only beds with mattresses can be used for sleeping since Update 0.7.0'],
      ['Campfire Healing Buff', 'Update 0.7.0 doubled health regeneration rate at lit campfires'],
      ['Bunker Reset Timer', 'Subterranean bunkers reset loot containers every 3 in-game hours'],
      ['World Border Fortifications', 'Spiked barricades and see-through sandbag barriers added across world sectors (Update 0.7.0)'],
      ['Evidence Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['Do outpost stashes share items with the main village stash?', 'No. Stashes at Arcadia, Mechanist Base, Mudlark Camp, and Microrayion have one storage tab and keep independent local inventories that do not sync with the village stash.'],
      ['Where can I sleep to restore health and pass time on the map?', 'Since Update 0.7.0, only beds with mattresses can be used for sleeping. If you cannot reach a mattress bed, rest beside a lit campfire to benefit from doubled passive health regeneration.'],
      ['How often do underground bunkers reset their loot?', 'Subterranean bunkers reset loot containers every 3 in-game hours (180 minutes), allowing players to plan repeatable farming runs between surface contracts.'],
      ['How do I expand my storage capacity?', 'Visit a Trader in the main village and purchase a Stash expansion for 50,000 Rubles to unlock an additional Stash tab.'],
      ['What world changes were made to creature spawns in Update 0.7.0?', 'The Burned Village is now capped at a maximum of one Big Rat, Boss Spiker size increased by 1.5x, and Swamp crossing Sucker spawns were repositioned with spit projectile speed reduced by approximately 30%.']
    ],
    related: ['scavland-beginner-guide', 'scavland-red-keycard-and-bunker-loot-recovery', 'scavland-crafting-and-trading', 'scavland-loot-and-scavenging', 'scavland-quests-and-contracts'],
    keywords: ['scavland map', 'scavland map game', 'scavland locations', 'scavland outpost stashes', 'scavland arcadia', 'scavland mechanist base', 'scavland mudlark camp', 'scavland microrayion', 'scavland bunker reset', 'scavland safehouse beds']
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
    answer: 'Crafting and trading in Scavland operate hand-in-hand at settlement safehouses and campfires across Zalesye. While Scavland does not feature an elaborate culinary minigame, campfire thermal processing and cooking are vital for survival: boiling contaminated water canteens over open flames produces clean potable water (preventing radiation poisoning and dysentery), while eating provisions, canned Tushonka, and dried meats restores hunger and sustains your maximum stamina pool (150 in Explorer Mode, 100 in Returner and Iron Man). In Update 0.7.0, stashes and crafting tables were added to all main camps. At safehouse workbenches, craft essential ammunition, medical kits, and cleaning tools from scrap metal, weapon springs, clean cloth, and gunpowder. For related nutrition and medical item details, explore our [Consumables & Medical Guide](/guide/scavland-consumables-and-medical-supplies/), [Loot & Scavenging Guide](/guide/scavland-loot-and-scavenging/), or [Merchant Prices & Barter Guide](/guide/scavland-merchant-prices-and-barter-guide/).',
    steps: [
      '01 · Campfire Cooking & Water Purification: Campfires in safe camps and outposts act as primary survival stations. Place Contaminated Water canteens directly on a lit campfire to boil clean potable water. Sleeping near campfires or beds restores health (5 health per in-game hour in beds) and skipping time keeps the world simulation active.',
      '02 · Nutrition & Stamina Cap Management: Scavland food crafting is streamlined—consume canned rations (Tushonka, sardines, beans) and dried meats to keep Hunger low. Neglecting food depletes stamina regeneration and caps maximum stamina below baseline (150 in Explorer Mode, 100 in Returner and Iron Man).',
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
    keywords: ['scavland crafting recipes', 'scavland trading guide', 'scavland workbench recipes', 'scavland cooking', 'scavland food crafting', 'scavland campfire cooking', 'scavland campfire healing', 'scavland stamina recovery', 'scavland medical blueprints', 'scavland volodymyr trader']
  },
  {
    slug: 'scavland-weapon-repair-and-durability',
    shortTitle: 'Weapon Repair & Durability',
    title: 'Scavland Weapon Repair & Durability Guide: Field Tools, Workbench Kits & Jam Fixes',
    description: 'Scavland weapon repair guide: field tools without Gun Lube, the durability and jamming changes in Updates 0.5.169 and 0.7.0, Petar’s relocation, and the repair kit changes.',
    category: 'Gear',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: 'Tactical weapon modification and workbench repair interface in Scavland',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-16',
    answer: 'Firearms in Scavland degrade with every shot fired, accelerating 2x faster in muddy or irradiated zones. When condition drops below 50%, jam probability increases exponentially. In mid-game raids, scavengers frequently loot high-tier military firearms (such as Mosin-Nagant rifles, SVDs, and AS Vals) severely degraded at 30% to 45% condition. While Safehouse Workbench restoration traditionally required specific blueprints, Update 0.7.0 made Gun and Armor Repair Kits usable regardless of how damaged equipment is, and lowered field repair thresholds: Glue and Gun Lube can now be applied from 80% durability (previously 85%), while Cleaning Rods and Field Repair Kits are usable from 70% (previously 75%). For comprehensive weapon statistics, consult our [Weapons Arsenal](/weapons/), check [Merchant Prices](/guide/scavland-merchant-prices-and-barter-guide/) for repair parts trading, or review the [Tactical Database](/guide/scavland-tactical-database-weapons-loot/).',
    steps: [
      '01 · Monitor weapon condition: guns can explode below 30% condition since Update 0.5.169. Update 0.7.0 increased durability across almost the entire arsenal, made jamming begin later and occur less often, and lowered the hard-jam chance at 10% durability from 45% to 33%.',
      '02 · Universal Repair Kits (Update 0.7.0): Gun and Armor Repair Kits can now be used regardless of how damaged your equipment is, eliminating situations where broken gear was impossible to service.',
      '03 · Field Maintenance Thresholds: Update 0.5.169 removed the Gun Lube requirement from Gun Field Tools. In Update 0.7.0, Glue and Gun Lube can be used from 80% durability (previously 85%), while Cleaning Rods and Field Repair Kits can be used from 70% durability (previously 75%).',
      '04 · Clearing In-Combat Stovepipes: If your trigger clicks without firing, immediately double-tap the reload key [R] or rack the bolt to eject the defective casing. Disengage behind cover to evaluate barrel fouling before continuing the firefight.',
      '05 · Incoming Damage Distribution: In Update 0.7.0, incoming damage is distributed across the different gear pieces you are wearing, preventing single armor pieces from degrading disproportionately.'
    ],
    facts: [
      ['Jamming Mitigation', 'Begins later and occurs less often since Update 0.7.0; hard-jam chance at 10% durability is 33%, down from 45%'],
      ['Universal Repair Kits', 'Gun and Armor Repair Kits can now be used regardless of how damaged your equipment is (Update 0.7.0)'],
      ['Field Tool Thresholds', 'Glue & Gun Lube from 80% (prev 85%); Cleaning Rods & Field Repair Kits from 70% (prev 75%)'],
      ['Field tool independence', 'Update 0.5.169 removed the Gun Lube requirement from Gun Field Tools'],
      ['Damage Distribution', 'Incoming damage is now distributed across the different gear pieces you wear (Update 0.7.0)'],
      ['Armor Kit Glue Discount', 'Heavy armor repair kit recipe glue requirement reduced in Patch v0.5.169'],
      ['Gunsmith Relocation', 'Petar the gunsmith relocated adjacent to Grigory in central Zalesye market'],
      ['Verified Baseline', 'Official Steam announcements · Update 0.7.0']
    ],
    faq: [
      ['How do I clear a weapon jam during combat?', 'Press the reload key [R] twice or manually cycle the bolt to eject the jammed casing and chamber a fresh cartridge. Retreat behind hard cover if under automatic fire.'],
      ['How do I repair advanced military guns without the workbench blueprint?', 'In Update 0.7.0, Gun and Armor Repair Kits can now be used regardless of how damaged your equipment is, and Repair Kits are once again available as world loot (Scavenger/Basic: Very Rare, Advanced/Expert/Medium/Heavy: Ultra Rare). If you lack workbench blueprints, you can use these universal Repair Kits, service weapons with Cleaning Rods and Field Repair Kits from 70% durability (Glue & Gun Lube from 80%), or pay Gunsmith Petar in the central Zalesye market for professional repairs.'],
      ['Do field repair tools still require Gun Lube?', 'No. Update 0.5.169 removed the Gun Lube requirement from the basic Gun Field Tool, so you can perform emergency maintenance without spending lube.'],
      ['Where do I find Gunsmith Petar for advanced weapon repairs?', 'Petar was relocated in v0.5.169 from the southern perimeter directly into the central Zalesye settlement square next to trader Grigory.'],
      ['What materials are required to repair heavy armor vests?', 'Heavy Armor Repair Kits require Ballistic Fiber, Sheet Metal Scrap, and Industrial Glue (glue cost discounted in v0.5.169).'],
      ['What spare parts should I carry for emergency field repairs?', 'Always carry 2x Weapon Springs, 1x Electronic Relay, and 1x Gun Field Tool in your tactical rig. In irradiated sectors where weapon degradation accelerates by 2x, these components let you restore guns above the 70% threshold without returning to base.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-cheats-and-console-commands', 'scavland-sleep-and-world-reset-guide', 'scavland-merchant-prices-and-barter-guide'],
    keywords: ['scavland weapon repair', 'scavland gun durability', 'scavland clear jam', 'scavland gun maintenance', 'scavland gun field tool', 'scavland petar location', 'scavland no blueprint weapon repair', 'scavland mosin repair']
  },
  { slug:'scavland-mist-survival-and-radiation', shortTitle:'Mist & Radiation', title:'Scavland Mist survival guide: radiation protection & hazard zones', description:'Surviving the toxic Mist, managing gas mask filter degradation, and farming high-tier artifacts safely in Zalesye.', category:'Exploration', image:'/images/screenshots/steam_ss_09.webp', imageAlt:'A scavenger navigating dense Mist and radiation hazards with a detector', evidence:'Official Steam announcements', updated:'2026-08-31', answer:'The Mist is a dynamic weather event that blankets sectors in toxic particulates and psychoactive anomalies. Entering the Mist requires a Gas Mask with active Filter Durability, Anti-Rad Meds, and an Anomaly Scanner. In return, the Mist triggers the highest tier artifact spawns and rare mutant drops.', steps:['Check the weather barometer or radio broadcast for incoming Mist warnings before venturing into open lowlands.','Equip a Gas Mask with at least 80% filter charge; carry spare charcoal filter cartridges in quick slots.','Equip the Anomaly Scanner on hotkey [3] to sweep for anomaly clusters that only materialize during Mist events.','Avoid prolonged firefights in fog, as gunfire attracts specialized nocturnal stalker mutants.','Use Rad-Away injectors and charcoal pills immediately if your radiation dosage meter enters the yellow hazard zone.'], facts:[['Dynamic shift','Mist weather alters mutant aggression patterns, increases anomaly frequency, and reduces vision radius to 15 meters.'],['Loot quality','Artifacts spawned during dense Mist cycles possess 2x barter value and enhanced passive stat modifiers.']], faq:[['How long do gas mask filters last in the Mist?','Standard Tier-1 filters last approximately 8 minutes in active Mist; high-grade military filters last up to 20 minutes.'],['What happens if my filter runs out in the Mist?','Your character incurs progressive radiation poisoning and toxic lung damage, draining stamina and max health.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-mist','scavland-death-and-loot-recovery'], keywords:['scavland mist survival','scavland gas mask filters','scavland radiation guide','scavland anomaly farming'] },
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
    answer: 'Weapon condition in Scavland is tracked per item and maintenance is part of the survival loop. Durability and repair were reworked twice after launch: Update 0.5.169 made Guns able to explode below 30% durability (previously 50%) and removed the Gun Lube requirement from Gun Field Tools; Update 0.7.0 then made a major pass in which weapons last significantly longer, jamming begins later and happens less often (hard-jam chance at 10% durability fell from 45% to 33%), and Repair Kits can be used regardless of how damaged your equipment is.',
    steps: [
      '01 · Watch the condition bar: Guns can explode below 30% condition since Update 0.5.169, so do not deploy with a badly worn firearm. Scrap-tier weapons also lose durability faster than Basic-tier ones.',
      '02 · Field maintenance: Gun Field Tools no longer require Gun Lube since Update 0.5.169. In Update 0.7.0, Cleaning Rods and Field Repair Kits became usable from 70% durability, previously 75%.',
      '03 · Clearing jams: When a click replaces the shot, rack the bolt to clear the round. Jamming begins later and occurs less frequently since Update 0.7.0.',
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
      ['How does weapon jamming work in Scavland?', 'Weapons wear with every round fired, so jamming becomes likelier as condition falls. At 10% durability the hard-jam chance is 33%, reduced from 45% in Update 0.7.0, and jamming now begins later and occurs less often. Guns can explode below 30% durability.'],
      ['Can I recover my backpack after dying in Scavland?', 'Yes. Scavland is a persistent survival RPG rather than a permadeath roguelite: your dropped gear and backpack stay at the death site for recovery, and your stash is a separate, shared inventory you keep.'],
      ['What is the best way to maintain weapon condition?', 'Use field maintenance between fights — Gun Field Tools no longer require Gun Lube — and heavier repair at a workbench, where Gun and Armor Repair Kits can be used regardless of how damaged the item is. Lube and Glue can be applied from 80% durability.'],
      ['What is the tactical purpose of the Thread Cutter rifle?', 'The Thread Cutter sits in Scavland\u2019s arsenal of 25+ weapons. Update 0.6.0 rebalanced many long guns, including the Thread Cutter, from 2 inventory rows to 3, so carrying long-range firepower trades off against pack space; Update 0.7.0 improved its accuracy, range, durability and fire rate.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-weapon-repair-and-durability'],
    keywords: ['scavland beginner guide', 'scavland weapon durability', 'scavland weapon jamming', 'scavland gun repair', 'scavland cleaning oil']
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
    answer: 'Scavland Early Access delivers a dedicated singleplayer post-apocalyptic survival experience featuring Act I, 10 dynamic faction reputation pools, and 25+ weapons with 300+ attachments. Rather than traditional skill trees, character advancement is driven by faction standing, gear optimization, and trader network progression.',
    steps: [
      '01 · Faction Standing: Gain reputation with major factions (including Red Common Folk, Acolytes, and Mechanists) by completing contracts rather than searching for skill points.',
      '02 · Night Raid Awareness: Visibility drops drastically after nightfall in Zalesye; equip weapon flashlights and avoid open sprint routes.',
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
      ['Is multiplayer coop supported at EA launch?', 'Early Access launches with focused singleplayer survival. Multiplayer coop and companion AI are planned for later roadmap milestones.']
    ],
    related: ['scavland-factions-and-reputation', 'scavland-quests-and-contracts', 'scavland-beginner-guide'],
    keywords: ['scavland early access', 'scavland factions', 'scavland progression', 'scavland roadmap', 'scavland launch build']
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
    answer: 'Surviving after dark in Scavland requires fundamental sensory discipline: outside illuminated settlement hubs, your effective visibility collapses to a narrow 10-meter flashlight cone, while aggressive nocturnal stalkers spawn exclusively between 21:00 and 05:30. Unsuppressed rifle fire generates a 200-meter audio ripple that triggers cascading aggro from adjacent ruins, making sub-caliber suppressed handguns, doorway funneling tactics, and swift Shift+Click container looting essential for nocturnal runs. If nocturnal stalkers prove too lethal for early-game gear, scavengers can safely bypass night darkness entirely by resting on safehouse bunker bunks — detailed in our dedicated [Scavland Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/).',
    steps: [
      '01 · Suppressor Sound Radius: Unsuppressed rifle fire alerts mutants across a 200m radius. Equipping a suppressor on 9x18mm or 9x19mm sidearms shrinks your audible footprint down to ~25 meters, allowing isolated takedowns without waking the entire district.',
      '02 · Flashlight Discipline in the Open: Keep your weapon flashlight switched OFF in open wasteland fields; illuminated cones draw hostile bandit snipers from over 40 meters away. Only toggle illumination when clearing tight, blind-cornered rooms.',
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
    answer: 'Progression in Scavland is strictly systemic and economic rather than level-based: there are zero artificial skill trees, stat points, or unlockable character perks. Your survivor\'s durability, combat lethality, and carry capacity are determined entirely by gear tier, workbench maintenance, and standing with Zalesye\'s 10 wasteland factions. Specialized faction vendors unlock military-grade trade inventories only as you fulfill repeatable 24-hour contracts.',
    steps: [
      '01 · Understand No Skill Tree Mechanics: Do not look for experience points or leveling menus. Character growth is measured through wealth accumulation, modded firearms, body armor tier, and faction trust ratings.',
      '02 · Faction Trade Specialization: Never sell goods indiscriminately. The Mechanists provide high-tier weapon attachments and workbench repair scrap; the Red Common Folk supply food, potable water, and medical bandages; and the Gunners stock high-penetration AP ammunition.',
      '03 · Daily 24-Hour Contract Cycles: Job pools offered by key handlers (including Anatoly and Nadja) reset every 24 in-game hours or upon sleeping in a designated safehouse bunker bed. Always accept contracts matching your intended raid vector.',
      '04 · High-Value Bounty Targets: Progress from introductory Bandit Hunts and Mutant Exterminations to priority bounties targeting Hellhounds, Big Bears, and Splatters to earn elite faction reputation tokens and cash bonuses.',
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
    keywords: ['scavland factions guide', 'scavland progression system', 'scavland no skill tree', 'scavland trader tiers', 'scavland daily contracts', 'scavland mechanists']
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
    answer: 'Scavland launched into Steam Early Access (0.6.3) as a strictly singleplayer post-apocalyptic survival RPG. The developer confirmed that while the core game loop is balanced around solitary atmospheric tension, no cooperative mode has been announced in any official Steam post. Players seeking shared sessions can currently utilize Steam Remote Play Together for local screen-share coordination or practice proxy squad tactics alongside friendly faction patrols.',
    steps: [
      '01 · Early Access Solo Focus: Acknowledge that Day 1 Early Access features no native peer-to-peer or dedicated server networking; all progression and stashes are local to your singleplayer save.',
      '02 · Developer Co-op Roadmap: Multiplayer co-op is formally slated for upcoming roadmap phases following foundational combat polish and northern map expansions.',
      '03 · Proxy Fireteam Tactics: In high-threat military zones, trail behind friendly Rada or Commonfolk patrol squads to draw fire from hostile snipers and mutant packs.',
      '04 · Steam Remote Play Options: For couch co-op enthusiasts, Steam Remote Play Together allows a spectator/tactical co-pilot to manage inventory mapping and radio scanner frequencies.',
      '05 · Solo Extraction Discipline: Without a teammate to revive you, always carry a Tourniquet and Hemostatic Bandage in quick slots 4 and 5 to halt lethal bleeding instantly.'
    ],
    facts: [
      ['Current Networking State', '100% singleplayer immersion; zero native online multiplayer in 0.6.3'],
      ['Roadmap Commitment', 'The developer confirmed cooperative multiplayer is slated for Phase 2/3 development'],
      ['Revive Mechanics', 'No teammate revives currently exist; death immediately drops backpack at point of failure'],
      ['Faction Proxy Support', 'Allied faction squads can be leveraged as organic fire support during overworld skirmishes'],
      ['Verified Baseline', 'Official Steam Store Specification & Developer Q&A']
    ],
    faq: [
      ['Is there multiplayer or co-op in Scavland?', 'Not currently. Scavland is designed from the ground up as a focused singleplayer hardcore survival RPG. However, co-op multiplayer is officially scheduled in the Early Access roadmap.'],
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
    answer: 'Scavland Early Access currently ships with full English interface and subtitles. Because the game is set in a Soviet wasteland (Zalesye), demand for Russian (русский язык) localization is extremely high across Eastern European communities. While official multi-language support is in development for future patches, players can safely install verified community string files and font patches to enjoy full Russian item descriptions, trader dialogues, and quest journals.',
    steps: [
      '01 · Official Localization Status: Check the game language settings in Steam library properties; developer NoShadow is currently working with community translators for official integration.',
      '02 · Backup Original Language Strings: Navigate to your installation directory (`Steam/steamapps/common/Scavland/data/localization/`) and backup `en_strings.json`.',
      '03 · Apply Verified Translation Patch: Place the community `ru_strings.json` dictionary into the localization directory or use the community-provided launch parameter `-lang=ru`.',
      '04 · Resolving Cyrillic Font Square Glyphs: If Russian letters display as empty boxes, replace the bitmap font file in `data/fonts/` with the extended Unicode UTF-8 font patch.',
      '05 · Verifying Trader Dialogue: Launch the game and converse with trader Anatoly in Zalesye to verify that quest descriptions and barter prices render correctly.'
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
      ['Why do Cyrillic letters show up as question marks or boxes?', 'This occurs when the default font atlas lacks Cyrillic Unicode code points; installing the extended font pack resolves all missing glyphs.']
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
    answer: 'Subterranean Bunkers in Scavland represent the highest-risk, highest-yield extraction destinations in Zalesye. The primary fortified complex, Subterranean Bunker Sector B-4, is situated in the rugged northwestern forest sector of Zalesye behind a concrete surface trench and steel blast bulkhead. Accessing the inner military armory requires the rare Red Keycard swiped at the security console. Behind the vault door lies Tier-3 military hardware: hybrid optics, titanium muzzle attachments, heavy Kevlar armor plates, and classified transmitter documents. Bunker armory containers and high-tier military loot reset 3 hours after leaving them (or across the in-game 24-hour day-night cycle upon safehouse sleep). For related combat preparations, check our [Starter Loadouts Guide](/guide/scavland-starter-loadouts-and-budget-builds/), [Weapons Arsenal](/weapons/), or [Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/).',
    steps: [
      '01 · Locate the Bunker B-4 Surface Entrance: Head into the northwestern Zalesye woods, following the overgrown railway spur toward the concrete drainage trench. The entrance is marked by a reinforced blast doorway guarded by patrol sentries and irradiated puddles.',
      '02 · Acquire the Red Keycard: The Red Keycard is a rare military security pass dropped by checkpoint commanders, found in hazardous radioactive zone airdrops, or awarded from Nadja\'s apex mutant extermination contracts. Store it in your safehouse stash until ready.',
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
      ['Where is the subterranean bunker located in Scavland?', 'Subterranean Bunker Complex B-4 is located in northwestern Zalesye. Look for the concrete drainage trench and heavy steel blast door situated at the end of the overgrown rail line.'],
      ['How do bunker loot and crates respawn?', 'Under official mechanics introduced in Update 0.6.0 and stabilized in Update 0.7.0, bunkers reset 3 hours after leaving them. Additionally, sleeping in a safehouse bed advances the 24-hour world reset cycle, repopulating unlocked lockers and military crates.'],
      ['Is the Red Keycard single-use or reusable?', 'In current builds, the Red Keycard possesses 3 durability charges, allowing 3 separate bunker vault entries before burning out.'],
      ['What is the best weapon loadout for clearing subterranean bunkers?', 'Bring close-quarters shotguns with buckshot or high-penetration rifles along with a flashlight to handle dark narrow concrete corridors and sudden mutant ambushes.']
    ],
    related: ['scavland-weapons-and-attachments', 'scavland-loot-and-scavenging', 'scavland-weapon-repair-and-durability', 'scavland-sleep-and-world-reset-guide'],
    keywords: ['scavland bunker', 'scavland bunker location', 'scavland bunker entrance', 'scavland bunker b4', 'scavland red keycard', 'scavland subterranean bunker', 'scavland bunker respawn', 'scavland bunker extraction']
  },
  {
    slug: 'scavland-starter-loadouts-and-budget-builds',
    shortTitle: 'Starter Loadouts',
    title: 'Scavland Starter Loadouts Guide: Best Budget Guns, Armor & High-Profit Raid Builds',
    description: 'High-survival budget kits for Scavland Early Access: avoid bankruptcy, optimal Mikhail 74U setups, Tier-2 Kevlar armor, and high-profit scavenging gear.',
    category: 'Gear',
    image: '/images/screenshots/steam_ss_02.webp',
    imageAlt: 'A budget scavenger loadout featuring a Mikhail 74U, light Kevlar vest, and basic medical kit',
    evidence: 'Official Steam announcements & community reports · Early Access 0.7.0',
    updated: '2026-09-06',
    answer: 'Surviving your first 20 hours in Scavland requires avoiding the "bankruptcy death spiral"—deploying with gear that is too expensive and losing your entire fortune to unexpected mutant ambushes. The ultimate budget starter loadout pairs a Mikhail 74U carbine or a Double-Barrel 12G Shotgun with light Tier-2 Kevlar, a 16-slot Canvas Backpack, and basic medical supplies. This entire kit costs under 4,500 rubles and pays for itself with a single successful loot run.',
    steps: [
      '01 · The Zero-Bankruptcy Rule: Never deploy on a scavenging raid risking more than 20% of your current liquid ruble reserves. Keep surplus weapons in your bunker safe.',
      '02 · Primary Weapon - Mikhail 74U: Purchase or scavenge the Mikhail 74U chambered in 5.45x39mm. It offers high mobility, affordable ammunition, and zero jam probability above 70% condition.',
      '03 · Budget Secondary - Double-Barrel 12G: For close-quarters bunker looting, a sawed-off shotgun with Buckshot instantly neutralizes charging mutant dogs and early bandit scouts.',
      '04 · Protective Armor - Light Kevlar Vest: Avoid heavy metal armor early on, as the stamina penalty slows your sprint speed by 25%. A light Kevlar vest absorbs stray pistol rounds while keeping you fast.',
      '05 · Essential Pocket Medical Kit: Carry exactly 1 Tourniquet (stops heavy bleed), 2 Clean Bandages, 1 Morphine injector, and 1 canteen of boiled water in hotbar slots.'
    ],
    facts: [
      ['Budget Loadout Cost', 'Approx. 4,200 rubles from starting vendor Volodymyr; pays off in 1 successful extraction'],
      ['Optimal Starter Weapon', 'Mikhail 74U (5.45x39mm) or Double-Barrel Shotgun (12-Gauge Buckshot)'],
      ['Armor Mobility Rule', 'Tier-2 Kevlar provides ballistic torso protection with 0% movement speed penalty'],
      ['Zero-Ruble Knife Run', 'If completely broke, safehouse locker provides a free survival knife and 1 bandage for emergency runs'],
      ['Verified Baseline', 'Early Access 0.6.3 Economy Balance']
    ],
    faq: [
      ['What is the best starter gun in Scavland?', 'The Mikhail 74U is the undisputed king of early game. Its 5.45x39mm ammunition is ubiquitous on dead bandits and vendor Volodymyr sells surplus magazines cheaply.'],
      ['What should I do if I run out of rubles completely?', 'Use the safehouse Emergency Stash. It respawns a free survival knife, 1 medical bandage, and a box of basic matches so you can execute stealth knife runs.'],
      ['Should I buy optical scopes early on?', 'No. High-magnification optics are expensive and reduce close-range target acquisition speed. Stick to iron sights or basic reflex dots until you have 20,000+ rubles.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-crafting-and-trading'],
    keywords: ['scavland starter loadout', 'scavland budget build', 'scavland best early weapons', 'scavland mikhail 74u', 'scavland cheap armor']
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
    answer: 'The Hospital Quest is a critical Act I progression milestone issued by the settlement medical officer in Zalesye. Players must navigate to the Abandoned Regional Hospital in the northeastern ruins, breach the barricaded second-floor surgical wing, and extract three sealed Sterile Antibiotic Crates and a Surgical Kit. The hospital interior is infested with high-threat Tongue Monsters (Lickers) that grapple players from medium range; countering them requires a high-stagger 12-gauge shotgun, doorway bottlenecking, and anti-bleed tourniquets.',
    steps: [
      '01 · Contract Activation & Route Preparation: Accept the quest from Settlement Physician Anna in Zalesye. Pack at least 2 Tourniquets, 1 Morphine injector, and a close-quarters shotgun (TOZ-34 or Mikhail 74U with Buckshot) before departing toward the northeastern sector.',
      '02 · Breaching the Ground Floor Lobby: Approach the hospital complex via the western ambulance bay to avoid open-field sniper crossfire. The ground floor lobby contains 4 Ghoul sentries; neutralize them silently with a suppressed 9mm sidearm to avoid waking the entire facility.',
      '03 · Countering the Tongue Monster Ambush: Ascending the central staircase triggers a Tongue Monster (Licker) spawn. Tongue Monsters attack via an 8-meter tongue whip grapple that immobilizes the player. Disengage backward down the stairwell, force the monster into the doorway bottleneck, and stagger it with two rapid 12G Buckshot rounds.',
      '04 · Locating Surgical Crates & Pharmacy Stash: On the second-floor surgical ward, locate Room 204 behind a locked wooden door (breachable with a basic crowbar or heavy melee strike). Secure the three glowing green Antibiotic Crates and the steel Surgical Kit on the operating table.',
      '05 · Southern Fire Escape Extraction: Do not retreat through the main lobby. Exit via the southern fire escape ladder behind Room 208, dropping safely into the perimeter canal for a direct sprint back to Zalesye settlement.'
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
      ['Where is the Abandoned Hospital in Scavland?', 'The Hospital is located in northeastern Zalesye, past the rusted railway depot and adjacent to the flooded quarry. Watch for yellow biohazard warning signs along the perimeter.'],
      ['How do you kill the Tongue Monster in the hospital stairwell?', 'Do not fight it in open hallways. Retreat down the stairs into the door frame so its tongue grapple hits the wall, then blast its exposed skull with high-stagger 12G shotgun buckshot.'],
      ['What do I do if I cannot find Room 204?', 'Head to the second floor, turn right past the nurses\' station, and look for the room marked with a red medical cross stencil over the doorway.'],
      ['What rewards do you get for completing the Hospital Quest?', 'Completing the quest grants 3,800 Rubles, +250 Commonfolk faction reputation, and unlocks Physician Anna\'s Tier-2 medical shop containing Morphine, Hemostatic Gauze, and IFAKs.']
    ],
    related: ['scavland-quests-and-contracts', 'scavland-beginner-guide', 'scavland-starter-loadouts-and-budget-builds'],
    keywords: ['scavland hospital quest', 'scavland hospital walkthrough', 'scavland tongue monster', 'scavland medical supplies', 'scavland physician anna']
  },
  {
    slug: 'scavland-merchant-prices-and-barter-guide',
    shortTitle: 'Merchant Prices & Traders',
    title: 'Scavland Merchant Prices & Trader Guide: Volodymyr Location, Buy Rates & Stash Expansions (Update 0.7.0)',
    description: 'Complete Scavland merchant guide: Trader Volodymyr Crossroads location and zero-rep stock, Update 0.7.0 trader rank +5% sell bonus, and 50,000 Ruble stash expansions.',
    category: 'Economy',
    image: '/images/screenshots/ss_04_settlement_camp.webp',
    imageAlt: 'Scavland merchants trading salvage and weapons in Zalesye settlement camp',
    evidence: 'Official Steam announcements & community reports · Update 0.7.0',
    updated: '2026-09-21',
    answer: 'Trading in Scavland requires matching scavenged loot to merchant specializations while leveraging reputation progression and key vendor locations. Trader Volodymyr, stationed at the Crossroads annex outside central Zalesye, serves as the primary black-market armorer: he operates with zero reputation rank requirements, making him accessible even if your faction standing collapses. In Update 0.7.0, Volodymyr\'s weapon attachments are approximately 35% cheaper, he sells Advanced and Expert Repair Kits as well as an Expert Repair Kit Blueprint, and his contracts focus on high-quality weapons and dangerous mutants. Across the wider economy, Update 0.7.0 introduced a +5% sell value bonus per Trader Rank and allowed purchasing a Stash expansion from a Trader in the main village for 50,000 Rubles. Traders maintain strict specializations: Zhivan pays 140% for Common items, Bogdan pays 40% more for Mutant Parts, Vesna buys Common items at 30% and Clothing at 60%, and Grigory pays premium rates for attachments while buying Common items at 50% (no longer buying Food or Medical items). For weapon servicing details, see our [Weapon Repair Guide](/guide/scavland-weapon-repair-and-durability/) or [Tactical Database](/guide/scavland-tactical-database-weapons-loot/).',
    steps: [
      '01 · Trader Volodymyr Location & Zero-Reputation Trade: Head southwest from central Zalesye toward the Crossroads annex near the Neutral Chapel perimeter to locate Trader Volodymyr. Volodymyr requires zero faction reputation rank to purchase his inventory, making him the premier emergency arms dealer for disgraced or unaligned scavengers.',
      '02 · Exploit Volodymyr\'s Update 0.7.0 Inventory & Contracts: In Update 0.7.0, Volodymyr\'s weapon attachments were discounted by approximately 35%, and he now sells Advanced and Expert Repair Kits alongside an Expert Repair Kit Blueprint. Additionally, Volodymyr\'s contracts focus on high-quality weapons and dangerous mutants, offering lucrative early ruble payouts.',
      '03 · Match Salvage to Merchant Category Specializations: Never dump all loot into one trader. Zhivan pays 140% for Common items; Bogdan pays 40% more for Mutant Parts; Vesna buys Clothing at 60% and Common goods at 30%; and Grigory buys Common items at 50% while paying premium rates for weapon attachments (he no longer buys food, medical, or crafting supplies).',
      '04 · Compound Profits with Trader Rank Bonuses (+5% per Rank): Update 0.7.0 awards an additional 5% sell value per Trader Rank. Completing daily contracts for settlement merchants permanently compounds the rubles earned on every sold firearm, attachment, and scavenged electronic part.',
      '05 · Purchase 50,000 Ruble Stash Expansions: In the main village, visit a Trader and purchase a Stash expansion for 50,000 Rubles to unlock an additional Stash tab. Take advantage of newly added camp stashes and workbenches across all four main camps (Arcadia, Mechanist Base, Mudlark Camp, Microrayion), noting that outpost stashes feature only one tab and maintain independent inventories from the village.'
    ],
    facts: [
      ['Trader Volodymyr Location', 'Crossroads annex outside central Zalesye; trades with zero faction reputation requirements'],
      ['Volodymyr 0.7.0 Adjustments', 'Weapon attachments ~35% cheaper; sells Advanced/Expert Repair Kits & Blueprint; jobs focus on high-quality weapons & mutants'],
      ['Trader Rank Sell Bonus', '+5% additional sell value per Trader Rank (Update 0.7.0)'],
      ['Stash Expansion Cost', '50,000 Rubles from a Trader in the main village for an extra Stash tab (Update 0.7.0)'],
      ['Merchant Specialization Rates', 'Zhivan pays 140% for Common items; Vesna pays 30% Common / 60% Clothing; Grigory buys Common at 50% and attachments at premium; Bogdan pays 40% more for Mutant Parts'],
      ['Camp Stash Independence', 'Main camp stashes have 1 tab and do not share items with the village (Update 0.7.0)'],
      ['Evidence Baseline', 'Official Steam announcements & community reports · Update 0.7.0']
    ],
    faq: [
      ['Where is Trader Volodymyr located and what does he sell?', 'Trader Volodymyr is located at the Crossroads annex outside the central Zalesye settlement. He trades with zero reputation requirements, meaning even scavengers marked hostile by major factions can trade with him. In Update 0.7.0, his weapon attachments are roughly 35% cheaper, he sells Advanced and Expert Repair Kits plus an Expert Blueprint, and his contracts target high-quality weapons and dangerous mutants.'],
      ['How does Trader Rank affect item sell prices in Update 0.7.0?', 'In Update 0.7.0, traders pay an additional 5% sell value per Trader Rank. Increasing your standing with faction merchants directly compounds the rubles you receive for every sold item.'],
      ['How do you unlock extra stash tabs in Scavland?', 'Purchase a Stash expansion from a Trader in the main village for 50,000 Rubles to unlock an additional Stash tab. While stashes were also added to Arcadia, Mechanist Base, Mudlark Camp, and Microrayion in Update 0.7.0, outpost stashes currently feature one tab and do not share items with the village.'],
      ['Which merchant pays the most for each item type?', 'Zhivan pays 140% for Common items; Bogdan pays 40% more for Mutant Parts; Vesna buys Clothing at 60% and Common items at 30%; Grigory pays top prices for Weapon Attachments and 50% for Common items (he no longer buys food or medical supplies); and Anatoly pays top prices for electrical salvage.']
    ],
    related: ['scavland-crafting-and-trading', 'scavland-starter-loadouts-and-budget-builds', 'scavland-safehouses-and-fast-travel-guide', 'scavland-weapon-repair-and-durability', 'scavland-factions-and-reputation'],
    keywords: ['scavland volodymyr location', 'volodymyr scavland', 'scavland volodymyr', 'scavland trader volodymyr', 'volodymyr location', 'scavland traders', 'scavland merchant prices', 'scavland trader rank bonus', 'scavland trader specialization', 'scavland stash expansion 50000', 'scavland barter guide']
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
    answer: 'Sleeping in Scavland is the essential survival mechanic for skipping time, avoiding deadly night stalkers (21:00 to 06:00), recovering vitality, and cycling settlement contracts. In Update 0.7.0, sleeping rules received fundamental overhauls: only beds with mattresses can now be used for sleeping, meaning bare frames and derelict cots no longer provide rest. Sleeping in a valid bed restores 5 health per in-game hour while world simulation continues running; taking damage, extreme Hunger, or Thirst triggers a notification that interrupts sleep. In the field where mattress beds are unavailable, campfires serve as primary triage stations with doubled health regeneration in Update 0.7.0. World contracts and merchant stocks rotate on a 24-hour cycle, while Subterranean Bunkers reset loot containers 3 hours after leaving them. For related recovery systems, check our [Beginner Guide](/guide/scavland-beginner-guide/), [Bunker Loot Guide](/guide/scavland-red-keycard-and-bunker-loot-recovery/), or [Safehouses Guide](/guide/scavland-safehouses-and-fast-travel-guide/).',
    steps: [
      '01 · Locate Valid Beds with Mattresses (Update 0.7.0): Under Update 0.7.0 rules, only beds with mattresses can be used for sleeping. Bare spring frames, stripped cots, or makeshift benches can no longer be activated. Safehouse bunkers in central Zalesye and established faction outposts contain qualifying mattress beds.',
      '02 · Bed Rest Vitality & Interruption Checks: Sleeping in a valid mattress bed restores 5 health per in-game hour (established in Hotfix 0.6.2). The Sleep interface displays stat changes before waking. Because the world continues simulating during sleep, taking damage or suffering acute Hunger or Thirst immediately interrupts your rest with an explanatory UI notification.',
      '03 · Doubled Campfire Healing in the Field: When operating far from mattress beds, utilize campfires scattered across wasteland outposts and camps. Update 0.7.0 doubled campfire passive healing speed, allowing scavengers to rapidly patch injuries between engagements without returning to town.',
      '04 · 24-Hour Settlement & Contract Reset: Passing a 24-hour in-game threshold rerolls daily contracts offered by Anatoly, Nadja, and Volodymyr, while restocking merchant inventories. Sleeping skips daytime hours safely to refresh high-payout bounty pools.',
      '05 · Subterranean Bunker 3-Hour Reset Cycle: Unlike surface loot that refreshes across the 24-hour cycle, underground military bunkers (such as Bunker B-4) reset their loot containers 3 hours after you exit the instance (with bunker reset stability resolved in Update 0.7.0).',
      '06 · Audio Stinger & Chunk Stability: Update 0.7.0 replaced looping sleep music with a subtle audio stinger and quiet snapshot upon waking, and resolved a legacy bug where sleeping after a world chunk unloaded could freeze simulation.'
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
      ['Why can I not sleep in certain beds in Update 0.7.0?', 'Update 0.7.0 strictly enforced that only beds with mattresses can be used for sleeping. Bare bed frames, makeshift cots, and broken bunks without mattresses can no longer be interacted with for sleep.'],
      ['How much health does sleeping restore in Scavland?', 'Sleeping in a bed with a mattress restores 5 health per in-game hour. Additionally, resting beside a lit campfire provides passive health regeneration, which was doubled in Update 0.7.0.'],
      ['What happens if my character takes damage or starves while sleeping?', 'The world simulation continues to run while you sleep. If your character takes damage, or if Hunger or Thirst reach critical thresholds, sleep is immediately interrupted and a notification appears explaining why you woke up.'],
      ['Do underground bunkers reset when you sleep for 24 hours?', 'Underground military bunkers reset independently from surface settlement contracts. Bunkers reset their loot containers 3 hours after leaving them, allowing players to rotate between surface contracts and underground bunker raids.'],
      ['What changed with sleep audio in Update 0.7.0?', 'Update 0.7.0 replaced the repetitive looping sleep music with a concise audio stinger and a quiet snapshot on wakeup, while fixing chunk unloading bugs that previously disrupted sleep.']
    ],
    related: ['scavland-beginner-guide', 'scavland-night-survival-and-stealth-mechanics', 'scavland-red-keycard-and-bunker-loot-recovery', 'scavland-safehouses-and-fast-travel-guide', 'scavland-map-and-locations'],
    keywords: ['scavland sleep', 'scav land sleep', 'scavland sleep mechanics', 'scavland bed with mattress', 'scavland sleep heal', 'scavland campfire healing', 'scavland bunker reset 3 hours', 'scavland 24 hour reset', 'scavland wait time']
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
    answer: 'Scavland intentionally omits floating healthbars or faction nametags above NPC sprites to enforce realistic post-Soviet tension. Firing on friendly or neutral scavengers triggers severe faction reputation penalties (-100 to -300 Rep) that can turn entire settlement garrisons permanently hostile. To survive combat encounters without friendly fire, scavengers must identify targets using four distinct indicators: visual uniform color schemes, weapon posture cues (low-ready pointing down vs raised aim), HUD reticle color states (aiming turns red only on hostile lock; green dot on neutrals within 10m), and verbal combat barks. If accidental friendly fire occurs, diplomat Raisa at the Neutral Chapel can broker a courier truce before border checkpoints shoot on sight.',
    steps: [
      '01 · Memorize Key Faction Uniform Silhouettes: Because pixel art models share base proportions, memorize color palettes. Commonfolk wear ragged brown coats and wool ushankas; Rada soldiers wear blue-grey urban camouflage and steel helmets; Mechanists sport industrial orange jumpsuits and welding goggles; Gunners wear all-black tactical plate carriers with balaclavas; and hostile Bandits wear mismatched civilian clothing with crimson armbands.',
      '02 · Pre-Fire Stance & Weapon Low-Ready Cues: Watch the NPC\'s weapon posture before pulling the trigger. Neutral and friendly patrols hold their rifles in a "low-ready" posture pointing toward the ground. Hostile bandits and rogue scavengers immediately shoulder firearms and lock their weapon barrels horizontally onto your character sprite.',
      '03 · Crosshair Proximity & Reticle States: Beyond 15 meters, the crosshair remains a neutral white dot. When aiming down sights [Right-Click] at an entity, the reticle turns crimson red only if the target is an active hostile who has acquired line-of-sight on you. Friendly and neutral scouts never trigger a red reticle and will display a small green dot when within 10 meters.',
      '04 · Listen for Verbal Warning Barks: Neutral and friendly faction patrols will always issue a verbal audio warning ("Hold your fire, scavenger!", "Keep walking!") and pause for 3 seconds before aiming. Hostile bandits, rogue deserters, and vultures immediately shout aggressive attack barks ("Target spotted!", "Open fire!") and discharge weapons without a verbal grace window.',
      '05 · Holster Weapons Near Checkpoints: Approaching an unfamiliar armed squad with a drawn rifle causes their tension meter to spike. Press [H] or un-equip your active weapon to holster your firearm. Neutral patrols will allow holstered scavengers to pass peacefully through perimeter checkpoints.'
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
    keywords: ['scavland faction identification', 'scavland friendly fire', 'scavland hud reticle', 'scavland faction uniforms', 'scavland green dot npc', 'scavland how to tell friendly from hostile']
  },
  {
    slug: 'scavland-developer-commitments-and-patch-roadmap',
    shortTitle: 'Developer Commitments & Roadmap',
    title: 'Scavland Developer Commitments & Patch Roadmap: Death Choice, A-Life Spawns & Economy Rebalance',
    description: 'Scavland roadmap tracker: Lucasmml Steam updates on save loading, mutant spawn limits, v0.5.169 economy rebalances, and co-op timeline.',
    category: 'Progression',
    image: '/images/harvested/2026-09-11/we-hear-you-changes-are-coming/we-hear-you-changes-are-coming-frame-498s.jpg',
    imageAlt: 'Scavland developer update review showcasing v0.5.169 gameplay balance adjustments and roadmap features',
    evidence: 'Official Steam announcements',
    updated: '2026-09-16',
    answer: 'In response to community feedback following Scavland\'s Steam Early Access release (0.6.3), lead the developer published the official "We Hear You - Changes Are Coming" address. The developer directly tackled the community\'s top concerns: testing an optional save-game loading prompt upon death (mitigating forced corpse run fatigue), resolving dynamic mutant proximity spawns, reviewing armor durability upkeep costs ($40k new vs repair imbalance), and the broad 0.5.169 and 0.6.0 balance passes (Explorer mode, campfire healing, a larger Stash, doubled Stamina and a trader specialisation rework). For active survival mechanics while awaiting upcoming patches, consult our [Weapon Repair Guide](/guide/scavland-weapon-repair-and-durability/), [Death & Loot Recovery Guide](/guide/scavland-death-and-loot-recovery/), or browse our [Weapons Database](/weapons/).',
    steps: [
      '01 · Death Loop Friction: Save-Game Loading vs Forced Corpse Runs: The most upvoted community debate centers on post-death agency. Lucasmml acknowledged that hardcore corpse retrieval can create punishing death spirals when weapons break. The development team is testing an optional "Reload Last Safehouse Save" prompt alongside standard Veteran corpse respawning.',
      '02 · Dynamic Enemy Spawning & Sound Propagation Tuning: Responding to reports of mutants spawning in close proximity to players, the notes describe a wide rebalance but publish no aggro-radius figures. The 0.6.0 notes describe a broad balance pass across survival, traders, armour, items and mutants.',
      '03 · Comprehensive Economy & Medical Rebalance (v0.5.169 Delivered): Patch v0.5.169 overhauled early-game survival: Stimpack prices dropped significantly, IFAK bandages now stack up to 3 units, trader Alexi increased emergency medical stock, and Gunsmith Petar was permanently relocated to central Zalesye next to Grigory.',
      '04 · Armor Durability Rebalance & Upkeep Costs: Community feedback highlighted economic friction where repairing a 75%-damaged plate carrier with rare Ballistic Fiber and Glue costs nearly as much as buying a new 40,000R vest. Developers confirmed dynamic armor repair scaling and scrap-based field patches are in active evaluation.',
      '05 · Long-Term Roadmap: Phase 2/3 Co-op & Northern Map Expansions: Early Access is slated for 12 to 24 months. The official roadmap schedules major content phases: Act II northern exclusion zone sectors, deeper faction diplomacy (Rada vs Gunners), and native 2-4 player cooperative multiplayer extraction.'
    ],
    facts: [
      ['Official Address', 'The developer posted "We Hear You" addressing Day 1 feedback on Steam'],
      ['Death Mechanic Decision', 'Optional "Load Last Save" feature in active development alongside Veteran corpse runs'],
      ['Armor Durability Balance', 'Community feedback on $40k new armor vs repair cost imbalance under active developer review'],
      ['v0.5.169 Medical Buff', 'IFAK bandages stack to 3; Stimpack purchase price reduced across all settlement doctors'],
      ['Vendor Relocation', 'Gunsmith Petar moved from perimeter outpost into central Zalesye market plaza'],
      ['Secondary Stash Point', 'Permanent second stash locker unlocked in Zalesye hospital medical wing'],
      ['Handheld UI Scaling', 'Dynamic font scaling in active development for 7-inch Steam Deck and handheld displays'],
      ['Verified Baseline', 'Official Steam Discussions Pinned Developer Response & Early Access Patch v0.5.169']
    ],
    faq: [
      ['Will Scavland add an option to reload saves when you die?', 'Yes. Lucasmml confirmed developers are testing an option allowing players to reload their latest safehouse save rather than being forced into an un-geared corpse recovery run.'],
      ['Have armor and weapon repair costs been rebalanced?', 'Yes, in Update 0.7.0, which the developers describe as a major focus on "addressing your feedback around weapon durability, repairs, accuracy, and overall combat balance". Update 0.5.169 had already lowered the glue requirement for Heavy Armor Repair Kits.'],
      ['Do enemies really spawn directly on top of the player?', 'Mutants do not spawn from thin air on your coordinate; rather, unsuppressed gunfire radiates a 200m sound cone that draws surrounding roaming packs. Build v0.5.169 patched off-screen enemy shooting to ensure fair line-of-sight engagements.'],
      ['When is co-op multiplayer coming to Scavland?', 'Co-op multiplayer (2-4 player squad extraction) is confirmed on the official development roadmap for late Phase 2 / Phase 3, following singleplayer balancing and engine optimization.'],
      ['How do trader buy rates work?', 'Traders became specialised in Update 0.6.0. Each pays a different rate per category: Vesna pays 75% for Common items, Nadja 90% for Common and 80% for Crafting items, and Bogdan 40% more for Mutant Parts. There is no single flat off-category rate.']
    ],
    related: [
      'scavland-early-access-launch-faq-and-roadmap',
      'scavland-death-and-loot-recovery',
      'scavland-merchant-prices-and-barter-guide',
      'scavland-coop-and-multiplayer-mechanics',
      'scavland-weapons-and-attachments'
    ],
    keywords: [
      'scavland roadmap',
      'scav land roadmap',
      'scavland developer commitments',
      'scavland we hear you',
      'scavland changes coming',
      'scavland death save reload',
      'scavland enemy spawn around player',
      'scavland patch 0.5.169',
      'scavland lucasmml update'
    ]
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
    answer: 'Scavland Patch v0.6.0 represents the first major milestone update since Early Access launch, and delivers comprehensive system overhauls. The Steam store page states Scavland was built with controller and Steam Deck support in mind, and lists Full controller support. Key additions include a dynamic sleep-in-bed system that advances world time with injury interrupt checks, direct stash-to-workbench material pulling for crafting, across-the-board firearm effective range buffs (+1 to +2 tiles), compressed armor durability maximums, and specialized merchant buy rate adjustments (such as Zhivan paying 140% for common hardware). For complete gear data and trader locations, cross-reference our [Weapons Arsenal](/weapons/), [Merchant Prices Guide](/guide/scavland-merchant-prices-and-barter-guide/), or [Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/).',
    steps: [
      '01 · Controller Support: the Steam store page states Scavland was built with controller and Steam Deck support in mind, and lists Full controller support. Every action is rebindable, including hold and tap variants, so build a layout that suits you.',
      '02 · Bed Sleep System & Ambient World Clock: Sleeping on canvas beds in safehouses now skips 1 to 12 hours of in-game time to bypass hazardous night mutants (21:00 to 06:00). Unlike simple pause-skips, the world simulation continues running, and sleep immediately cancels if you take environmental damage or reach critical hunger/thirst thresholds.',
      '03 · Gun Range Buffs & Weapon Reclassifications: All base firearms received a +1 to +2 tile effective range extension to improve medium-range engagements. Long rifles now occupy 3 full horizontal backpack rows, while the MK-47 has been reclassified into the Basic weapon tier to smooth early-game raider combat.',
      '04 · Direct Workbench Stash Pulling: Safehouse craft stations now directly pull required components (ballistic fiber, metal scrap, toolkits) from your nearby stash chest, eliminating tedious manual container swapping. Sewing kit recipes now require Pliers rather than glue bottles.',
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
      ['What are the biggest changes in Scavland Patch v0.6.0?', 'Patch v0.6.0 brings a full in-game sleep skipping mechanic, a completely rebuilt Controls & Keybinding system, automatic workbench pulling from stash chests, weapon range increases across all guns, and extensive Trader and loot rebalancing.'],
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
    ]
  },
  {
    slug: 'scavland-patch-0-7-0-update-and-changes',
    shortTitle: 'Patch 0.7.0, 0.7.1 & 0.7.2',
    title: 'Scavland Patch 0.7.0, 0.7.1 & 0.7.2 Guide: Stash Expansion, Death Screen & Raisa Jobs',
    description: 'Complete breakdown of Scavland Update 0.7.0 and Hotfixes 0.7.1 & 0.7.2: 50,000 ruble stash expansions, rebuilt death screen, Raisa jobs rebalancing, and chunk fixes.',
    category: 'Updates',
    image: '/images/screenshots/ss_02_bunker_tactical.webp',
    imageAlt: 'Scavland Update 0.7.0 tactical gameplay showing weapon durability and stash storage in bunker',
    evidence: 'Official Update 0.7.0 @ https://store.steampowered.com/news/app/3373500/view/701026688965805465 @ 2026-09-16',
    updated: '2026-09-16',
    answer: 'Scavland Update 0.7.0 and Hotfixes 0.7.1 & 0.7.2 introduce major system expansions across player storage, combat durability, diplomatic progression, and survival balance. Key additions include purchasable Stash expansions (50,000 Rubles to unlock an additional tab from a Trader in the main village), camp stashes and crafting tables across all main camps, an extra 5% sell value per Trader Rank, and a completely rebuilt Death Screen featuring dedicated button interactions for Returner, Iron Man, and Tutorial modes with full gamepad support. Furthermore, each run now has its own Autosave Slot, protecting current campaign saves. In Hotfix 0.7.2, diplomat Raisa was updated so she can offer follow-up jobs without waiting for current ones to finish, alongside a rebalancing of Raisa jobs and fixes for world chunks not loading. In combat maintenance, Gun and Armor Repair Kits can now be used regardless of equipment condition, jamming begins later with hard-jam chances at 10% durability reduced from 45% to 33%, and weapon durability has been increased across almost the entire arsenal. For tactical weapon statistics and merchant prices, explore our [Tactical Database](/guide/scavland-tactical-database-weapons-loot/), [Weapons Arsenal](/weapons/), or [Safehouses & Fast Travel Guide](/guide/scavland-safehouses-and-fast-travel-guide/).',
    steps: [
      '01 · Unlock Village Stash Expansions: In the central village, visit a Trader with 50,000 Rubles to purchase an additional Stash tab expansion. Stashes and crafting tables were also deployed to all main camps (camp stashes currently hold one tab and do not share items with the village). Hotfix 0.7.1 resolved an issue preventing stashes from opening for certain players.',
      '02 · Leverage Universal Repair Kits: Gun and Armor Repair Kits can now be used regardless of how severely damaged your equipment is, eliminating mid-game repair lockouts. Glue and Gun Lube can now be applied from 80% durability (previously 85%), while Cleaning Rods and Field Repair Kits can be used from 70% durability (previously 75%).',
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
    ]
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
    answer: 'Scavland deliberately rejects instant map teleportation and decorative player housing to maintain hardcore post-Soviet survival tension. Instead, the game features a decentralized network of fortified subterranean Safehouses and main camps across Zalesye: Central Zalesye Settlement, the Crossroads Annex, the Hospital Medical Wing, and Outpost B-1. In Update 0.7.0, player storage received a massive expansion: stashes and crafting tables were added to all main camps, and players can purchase an additional Stash tab from a Trader in the main village for 50,000 Rubles. Safehouse stashes remain 100% immune to death penalties, while Hotfix 0.7.1 resolved a launch bug preventing stashes from opening. For complete map coordinates and survival tips, review our [Zalesye Overworld Map](/maps/), [Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/), or [Beginner Survival Guide](/guide/scavland-beginner-guide/).',
    steps: [
      '01 · Understand the Safehouse Network (4 Key Hubs): Scavland features four distinct safehouse shelters across the exclusion zone: the Central Zalesye Starter Bunker, the Crossroads Annex (near trader Volodymyr), the Hospital Medical Wing (unlocked via the Hospital Quest), and Outpost B-1 on the eastern border. Each serves as an operational base for resting, repairs, and stash access.',
      '02 · Stash Expansions & Camp Stashes (Update 0.7.0): In Update 0.7.0, stashes and crafting tables were added to all main camps. For now, only the main village features upgradable stashes—you can buy an expansion from a Trader for 50,000 Rubles to unlock an additional tab. Note that camp stashes do not share items with the main village inventory.',
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
      ['How do stash expansions work in Update 0.7.0?', 'In Update 0.7.0, you can purchase an expansion from a Trader in the main village for 50,000 Rubles to unlock an additional Stash tab. Secondary camps have one tab for now and are not upgradable.'],
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
    answer: 'Scavland restricts the default camera to a tight isometric perspective, creating claustrophobic tension but leaving scavengers vulnerable to long-range ambushes. The Binoculars (Field Glasses) are a critical handheld scouting tool that unlocks extended viewport panning without moving your character. Equipping binoculars and holding Right-Click extends your vision cone up to 45 meters forward—tripling the standard 15-meter fog-of-war. This allows you to spot concealed Tongue Monsters, identify Bandit snipers in ruined towers, and map safe traversal corridors outside the 25-meter AI visual detection radius. For comprehensive tactical gear advice, review our [Weapons & Attachments Guide](/guide/scavland-weapons-and-attachments/), [Night Survival & Stealth Guide](/guide/scavland-night-survival-and-stealth-mechanics/), or [Beginner Survival Guide](/guide/scavland-beginner-guide/).',
    steps: [
      '01 · Acquire & Equip Field Binoculars: Binoculars spawn in military observation towers, outpost lookout nests, or can be bartered directly from trader Anatoly or Volodymyr. Drag them into a hotkey quick slot (e.g. slot [4]) or your secondary active tool slot.',
      '02 · Camera Panning & Viewport Extension: With binoculars selected in your hands, hold the Right Mouse Button (Aim/Look) and move your cursor toward the edge of your screen. This disengages the centered camera lock, panning your visual cone up to 45 meters in any direction.',
      '03 · Bypassing Sound Ripples & Aggro Radii: High-threat wasteland predators (such as Tongue Monsters and Hellhounds) trigger aggro within a 25-meter radius, while unsuppressed gunfire radiates a 200m sound cone. Long-range scouting lets you mark enemy patrol vectors well outside their aggro zone.',
      '04 · Foliage Penetration & Environmental Optics: Binoculars pierce light foliage, brush, and outer Mist anomaly fringes that normally obscure top-down vision. Note that solid brick walls, reinforced bunker blast doors, and dense radioactive anomaly cores still block optical line-of-sight.',
      '05 · Optical Scopes vs Binoculars Comparison: While rifle scopes (such as the PSO-1 or PU 3.5x) allow precision aiming, they rapidly drain stamina while holding Aim-Down-Sights (ADS) and suffer weapon sway. Binoculars consume zero character stamina and provide a stable, wide 60-degree pan arc.'
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
    answer: 'Managing survival consumables and trauma in Scavland is the difference between extracting with high-tier loot and dying in the wasteland. Unlike casual survival shooters, Scavland distinguishes between acute ballistic trauma (Light and Heavy Bleeding, Fractures) and systemic physical degradation (Dehydration, Radiation Dosage, Hunger). Sleeping while dehydrated triggers a lethal stamina lock, and applying a standard medkit without first plugging arterial bleeding wastes scarce healing pulses. Mastering the hierarchy of field treatment—stopping hemorrhage with Sterile Bandages, drinking Boiled Water before resting, splinting broken bones to restore sprint speed, and popping Charcoal Tablets before Mist incursions—ensures sustained operational readiness across Zalesye. For related tactical guidance, consult our [Beginner Survival Guide](/guide/scavland-beginner-guide/), [Hospital Medical Wing Quest](/guide/scavland-hospital-quest-and-medical-supplies/), or [Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/).',
    steps: [
      '01 · Prioritize Hydration & Clean Water Protocol: Never venture into raids without at least one bottle of Boiled Water. Collecting dirty water bottles from sinks and boiling them at safehouse campfires using an Empty Tin Can eliminates intestinal bacteria. Crucially, sleeping while dehydrated locks stamina recovery to zero upon waking.',
      '02 · Stop Hemorrhage Before Healing HP: Arterial and venous bleeding drain health at up to 5 HP/sec and will cancel incoming medkit regeneration. Keep Sterile Bandages or Military Hemostatic Gauze bound to quick slot [5] to seal active hemorrhage in under 2 seconds before using healing salves.',
      '03 · Stabilize Fractures with Field Splints: High-altitude falls from watchtowers and heavy shotgun blasts cause limb fractures, penalizing character movement speed by 40% and inflating weapon sway by 60%. Always carry a Wooden Splint (crafted from Scrap Wood and Clean Cloth) to immediately normalize movement.',
      '04 · Radiation Flush & Anti-Rad Dosage: Environmental hotspots and the toxic Mist accumulate millisieverts (mSv) on your Geiger counter. Consume Charcoal Tablets early in yellow radiation zones; reserve rare military-grade Rad-Away auto-injectors for red-line radiation spikes encountered during deep anomaly farming.',
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
      ['Where is the best place to find medical supplies in Scavland?', 'The Zalesye Hospital Medical Wing is the richest spawn area for pharmaceutical items, defended by Tongue Monsters. You can also purchase medical kits directly from Physician Anna in the central settlement.'],
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
];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));


