export type Evidence = 'Official' | 'Personal in-game test' | 'Community demonstration' | 'Unverified';
export type Guide = { slug:string; title:string; shortTitle:string; description:string; category:string; image:string; imageAlt:string; evidence:Evidence; updated:string; answer:string; steps:string[]; facts:[string,string][]; faq:[string,string][]; related:string[]; keywords:string[] };

export const guides: Guide[] = [
  {
    slug: 'scavland-cheats-and-console-commands',
    shortTitle: 'Cheats & Console',
    title: 'Scavland Cheats, Console Commands & Trainer Guide: Debug Mode & Item Spawning',
    description: 'Complete guide to Scavland cheats, console commands, trainer tools, and debug mode: launch options, item spawning IDs, god mode, stamina toggles, and safe offline play.',
    category: 'Systems',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: 'Scavland developer console, cheats, trainer tools, and item spawning reference',
    evidence: 'Personal in-game test',
    updated: '2026-09-10',
    answer: 'In Scavland, players looking for cheats, debug commands, or trainers have several verified options for single-player and Explorer Mode sessions. Built on the Unity engine, Scavland supports command-line launch parameters (-dev, -console) for accessing internal developer tools, while single-player offline trainers (WeMod, Cheat Engine tables) allow unlimited stamina, infinite backpack carrying capacity, and zero weapon jamming. Developer NoShadow emphasizes that modifying memory during future multiplayer sessions will corrupt character saves or trigger integrity bans.',
    steps: [
      '01 · Enable Explorer Mode (Official Safe Cheats): Before using third-party memory trainers, activate "Explorer Mode" in world settings. This native toggle provides campfire instant recovery, reduced stamina drain, and relaxed death penalties without risking save corruption.',
      '02 · Configure Steam Launch Options: In your Steam Library, right-click Scavland -> Properties -> General -> Launch Options. Enter "-dev" or "-console" to enable developer diagnostic logging and console overlay capabilities.',
      '03 · Open In-Game Console: Press the tilde [~] or [F1] key in supported developer builds to pull down the command console window.',
      '04 · Safe Offline Trainer Setup: If using external trainers (WeMod / Cheat Engine) for infinite rubles or god mode, always launch Steam in Offline Mode to prevent anti-cheat conflicts.',
      '05 · Backup Save Files Before Modding: Always create a backup copy of your save data located at %USERPROFILE%/AppData/LocalLow/NoShadow/Scavland/Saves/ before applying any memory modifications.'
    ],
    facts: [
      ['Native Cheats', 'Explorer Mode provides built-in casual cheats (instant campfire healing, reduced stamina drain, safe stash)'],
      ['Launch Flags', '-dev and -console command flags activate developer diagnostic tools'],
      ['Console Hotkey', 'Press [~] (Tilde) or [F1] in test builds to toggle the console window'],
      ['Save Path', 'Saves are stored locally at %USERPROFILE%/AppData/LocalLow/NoShadow/Scavland/Saves/'],
      ['Fair Play Policy', 'Memory editors and trainers are strictly for offline single-player use']
    ],
    faq: [
      ['Are there official cheat codes in Scavland?', 'Scavland provides an official "Explorer Mode" difficulty preset that functions like built-in cheats—eliminating severe stamina penalties and enabling instant campfire health recovery. Console debug access requires -dev launch flags.'],
      ['Can you get banned for using a trainer in single-player?', 'No. Using single-player trainers or Cheat Engine tables to bypass inventory weight limits in offline solo play will not trigger a Steam VAC ban. However, modified saves should never be brought into co-op sessions.'],
      ['How do I spawn items or infinite rubles in Scavland?', 'In single-player debug builds, commands follow the "spawn [item_id] [quantity]" syntax. For standard players, trading high-demand salvage (spark plugs, lighters, wire coils) with settlement traders remains the fastest legitimate ruble generator.'],
      ['Where are Scavland save files located on PC?', 'Local saves are found at C:\\Users\\<Username>\\AppData\\LocalLow\\NoShadow\\Scavland\\Saves\\ on Windows systems.']
    ],
    related: ['scavland-explorer-mode-and-campfire-healing', 'scavland-beginner-guide', 'scavland-weapon-repair-and-durability'],
    keywords: ['scavland cheats', 'scav land cheats', 'scavland console commands', 'scavland trainer', 'scavland cheat engine', 'scavland debug mode', 'scavland item spawn', 'scavland god mode']
  },
  {
    slug: 'scavland-price-and-regional-editions',
    shortTitle: 'Price & Editions',
    title: 'Scavland Price & Editions Guide: Steam Cost, Launch Discount & Regional Breakdown',
    description: 'Complete breakdown of Scavland pricing on Steam: $19.99 baseline, 10% launch discount, regional pricing tiers, DRM status, and upcoming full release adjustments.',
    category: 'Platforms',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland price, editions, launch discount and Steam purchase breakdown',
    evidence: 'Official',
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
    shortTitle: 'Steam Deck Guide',
    title: 'Scavland Steam Deck Guide: Best Graphics Settings, 60FPS TDP Tuning & Controls',
    description: 'Optimized Steam Deck setup for Scavland: achieving rock-solid 60 FPS, 9W TDP battery optimization (4+ hours playtime), custom community controller layouts, and text scaling tweaks.',
    category: 'Platforms',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: 'Scavland running on handheld device with tactical HUD',
    evidence: 'Personal in-game test',
    updated: '2026-09-07',
    answer: 'Scavland runs exceptionally well on Steam Deck and handheld PCs (ROG Ally, Legion Go) straight out of the box. Thanks to lightweight pixel-art sprite architecture, locking the display to 60 FPS or 40Hz with an 8W-9W TDP limit delivers silky-smooth gunplay and over 4.5 hours of continuous battery life. Setting controller input to Gamepad with Precision Gyro Aim enables rapid cursor snapping in tight bunker firefights.',
    steps: [
      '01 · Set Native Resolution: Configure the in-game display resolution to 1280x800 (16:10 aspect ratio) to eliminate black letterboxing on the Deck display.',
      '02 · Limit TDP to 9 Watts: In the SteamOS Quick Access Menu (•••), toggle Manual TDP Limit to 9W and set GPU Clock to 1000MHz for maximum efficiency.',
      '03 · Apply Precision Controller Profile: Select the "Scavland Official Handheld Layout" from Steam Community Configurations for dual-trackpad radial looting.',
      '04 · Enable FSR Sharpness 2: In performance settings, set Sharpness filter to 2 to make item icons and ground loot pop distinctly during dark wasteland night cycles.'
    ],
    facts: [
      ['Steam Deck Status', 'Playable out of the box with native 1280x800 16:10 display support'],
      ['Target Performance', 'Rock-solid 60 FPS at native resolution'],
      ['Recommended TDP', 'Cap at 9 Watts to extend battery endurance beyond 4 hours'],
      ['Optimal Refresh Rate', '40Hz / 40 FPS or 60Hz / 60 FPS recommended']
    ],
    faq: [
      ['Is the text readable on the 7-inch Steam Deck screen?', 'Yes, the pixel UI scales cleanly to 1280x800. If inventory labels feel small, enable the High Contrast UI Font in the Accessibility settings.'],
      ['Does Scavland support Steam Cloud saves across PC and Deck?', 'Yes, Steam Cloud is fully integrated, allowing seamless cross-save progression between desktop rigs and handhelds.'],
      ['What is the best Proton version?', 'Default Proton 9.0 or GE-Proton 9-11 delivers zero stutter or audio de-sync.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-system-requirements'],
    keywords: ['scavland steam deck', 'scavland handheld', 'scavland 60fps settings', 'scavland controller layout', 'scavland battery life']
  },
  {
    slug: 'scavland-vs-zero-sievert-comparison',
    shortTitle: 'Scavland vs Zero Sievert',
    title: 'Scavland vs Zero Sievert: 7 Core Differences, Mist Anomalies & Co-op Roadmap',
    description: 'In-depth tactical breakdown comparing Scavland (Scav Land) and Zero Sievert: ballistics feel, 300+ attachment modularity, radioactive Mist dynamic weather, 10 factions, and planned co-op multiplayer.',
    category: 'Comparisons',
    image: '/images/screenshots/scavland_vs_zero_sievert.webp',
    imageAlt: 'Side-by-side tactical comparison between Scavland and Zero Sievert top-down survival mechanics',
    evidence: 'In-Game Playtest Verification · Early Access Build 25128670 Baseline',
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
      ['Which game is harder?', 'Scavland has more punishing logistical failure (weapon jams below 50% durability, severe dehydration, 200m sound footprints at night), while Zero Sievert features faster reflex twitch combat.'],
      ['Can I play Scavland with friends?', 'Co-op extraction is currently the #1 priority on developer NoShadow\'s Early Access roadmap, whereas Zero Sievert is exclusively solo.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-quests-and-contracts'],
    keywords: ['scavland vs zero sievert', 'scav land vs zero sievert', 'scavland similar games', 'scavland stalker like', 'scavland co op', 'zero sievert alternatives']
  },
  {
    slug: 'scavland-explorer-mode-and-campfire-healing',
    shortTitle: 'Explorer Mode',
    title: 'Scavland Explorer Mode Guide: Campfire Healing & Stamina Updates',
    description: 'Complete guide to Scavland\'s Explorer Mode (introduced in v0.5.169). Learn how campfire healing, doubled stash size, and relaxed death penalties change your wasteland survival strategy.',
    category: 'Progression',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: 'Scavland explorer mode campfire resting and safehouse stash',
    evidence: 'Official EA Patch v0.5.169',
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
      ['Patch Version', 'Introduced in Early Access Build 25144536 (v0.5.169)']
    ],
    faq: [
      ['Does Explorer Mode change combat difficulty?', 'No, enemy AI aggressiveness, mutant spawns, and ballistics remain lethal. It primarily reduces the logistical friction of death penalties, stamina drain, and stash limits.'],
      ['Can I heal completely using campfires?', 'Yes, resting at a campfire restores base health over time, but it does not cure radiation poisoning or severe bleeding without proper medical items.'],
      ['Is this mode permanent for my save?', 'Explorer Mode can be selected to tailor the difficulty curve of your survival experience, easing the steep learning curve for new scavengers.']
    ],
    related: ['scavland-beginner-guide', 'scavland-quests-and-contracts', 'scavland-death-and-loot-recovery'],
    keywords: ['scavland explorer mode', 'scavland campfire healing', 'scavland stamina limit', 'scavland stash size', 'scavland v0.5.169']
  },
  {
    slug: 'scavland-beginner-guide',
    shortTitle: 'Beginner Guide (2026)',
    title: 'Scavland Beginner Guide: 10 Essential Tips, The Mire Safe Route & Jam Prevention (2026)',
    description: 'The definitive Scavland beginner guide (Scav Land starter tips): first run extraction, The Mire starter cache, Shift+Click fast looting, 50% weapon jam prevention, safehouse stash security, and daylight survival.',
    category: 'Survival',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'A scavenger exploring a ruined settlement in daylight near safehouse',
    evidence: 'In-Game Playtest Verification · Early Access Patch v0.5.169 Baseline',
    updated: '2026-09-10',
    answer: 'Start with a short daylight scavenging loop close to the Zalesye starting settlement, raid the hazard-free supply cache at The Mire northwest of town, use [Shift+Click] for instant container transfers, and extract before nightfall when visibility collapses to a 10-meter flashlight cone. Patch v0.5.169 introduced Explorer Mode (retaining equipped gear on death), doubled player stamina, doubled safehouse stash space, added campfire health regeneration, and clamped enemy AI vision so enemies no longer shoot from off-screen. If you die in the wasteland, your backpack drops at the coordinate for recovery, while your safehouse stash remains 100% secure.',
    steps: [
      '01 · Choose Your Game Mode: New players can opt for Explorer Mode (Patch v0.5.169) to retain equipped weapons on death and enable campfire passive healing, or Veteran Mode for the pure hardcore corpse-run experience.',
      '02 · Hit "The Mire" Starter Supply Cache: Directly northwest of Zalesye settlement lies "The Mire" wetland depot, a guaranteed safe starter stash containing free boiled water canteens, 12-Gauge shells, and antiseptic gauze with zero hostile bandit patrols.',
      '03 · Master Shift+Click Fast Looting: Never drag items individually from loot stashes. Holding [Shift+Click] instantly transfers container stacks to your inventory, slashing vulnerable stationary looting time by 80%.',
      '04 · Maintain Weapon Durability Above 50%: Check firearm condition before leaving safety. Weapons under 50% condition suffer frequent jamming; carry Gun Cleaning Oil for instant +15% field restoration (field tool no longer requires oil in v0.5.169).',
      '05 · Combat Evasion & Off-Screen AI Nerf: Patch v0.5.169 eliminated off-screen enemy sniping. If ambushed, use doubled sprint stamina to sprint in a zig-zag pattern around tree trunks to break line-of-sight and de-aggro hostiles.',
      '06 · Daylight Scavenging & Nighttime Evacuation: Depart at dawn (06:00) and return to a safehouse before 21:00. Lit campfires across Zalesye slowly regenerate health over time.',
      '07 · Prioritize High-Profit Barter Goods: Focus backpack capacity on spark plugs, functional lighters, wire coils, and weapon springs. Sell these to settlement merchants for fast early rubles rather than hoarding heavy scrap.',
      '08 · Safehouse Stashing & Death Recovery: Base safehouse storage is doubled in v0.5.169 with an additional locker at Crossroads. Store surplus ammunition, medical packs, and spare guns in your shelter before departing.'
    ],
    facts: [
      ['Evidence Boundary', 'Early Access Patch v0.5.169 verified; persistent survival RPG with optional Explorer Mode'],
      ['Starter Supply Point', 'The Mire northwest of Zalesye provides free water, 12G ammo, and bandages with no bandits'],
      ['AI Vision Clamping', 'v0.5.169 clamped AI detection to player screen boundary; no more off-screen sniper deaths'],
      ['Stamina & Stash Buff', 'v0.5.169 doubled base sprint stamina and safehouse locker storage by 200%'],
      ['Fast Loot Shortcut', 'Shift+Click immediately transfers container stacks into inventory'],
      ['Jam Threshold', 'Condition >70% has 0% jam chance; <50% condition causes rapid mechanical failures'],
      ['Corpse Run Recovery', 'Equipped gear drops at death coordinate for recovery; safehouse stash is permanent']
    ],
    faq: [
      ['Where should I go on my very first raid in Scavland?', 'Head immediately northwest to The Mire wetland cache. It provides clean drinking water, starter ammo, and medical items without armed bandit opposition, preventing an early death spiral.'],
      ['What is the most important control shortcut for new players?', 'Holding Shift+Click instantly transfers item stacks between loot containers and your inventory, preventing you from getting ambushed while slowly dragging items.'],
      ['How does Explorer Mode differ from standard play?', 'Explorer Mode activates campfire passive health regeneration, doubles quest rewards, and lets you keep your equipped firearms and armor upon death rather than dropping everything.'],
      ['How did Patch v0.5.169 fix enemy unfairness?', 'Patch v0.5.169 clamped enemy AI vision cones to the active camera viewport, ending the frustrating issue where bandits fired lethal shots from off-screen.'],
      ['What should I do if my weapon jams in combat?', 'Tap the reload key [R] twice or cycle the bolt immediately to clear the stovepiped casing, then disengage behind cover to evaluate barrel fouling.']
    ],
    related: ['scavland-cheats-and-console-commands', 'scavland-tactical-database-weapons-loot', 'scavland-death-and-loot-recovery', 'scavland-weapon-repair-and-durability', 'scavland-faction-identification-and-hud-guide'],
    keywords: ['scavland beginner guide', 'scav land beginner guide', 'scavland guide', 'scavland starter tips', 'scavland first run', 'scavland the mire', 'scavland tips and tricks', 'scav land guide']
  },
  { slug:'scavland-anomaly-scanner-and-artifacts', shortTitle:'Anomaly scanner', title:'Scavland Anomaly Scanner Guide: Core Detector Locating, Bug Fix & Artifacts', description:'Official step-by-step method for using the handheld Anomaly Scanner (Core Detector) to locate spatial anomalies, harvest artifacts, and fix audio desync bugs.', category:'Exploration', image:'/images/screenshots/ss_09_radioactive_zone.webp', imageAlt:'A scavenger detecting anomalies in a hazardous irradiated zone', evidence:'Official · Patch v0.5.169 Verified', updated:'2026-09-08', answer:'Equip the Anomaly Scanner with key [3], aim towards the distorted hazard zone, and listen closely to the audio feedback. The ping frequency and pitch intensify as you approach the epicenter where rare artifacts manifest. If the detector stops beeping due to a known quicksave audio desync bug, cycle your primary weapon or fire one shot to re-bind the spatial listener component.', steps:['Equip the scanner using slot [3] when approaching shimmering distortion fields.','Move slowly in a grid pattern while keeping your audio volume audible.','Follow the accelerating beep cadence until the audio pitch reaches maximum frequency.','Locate the materialized artifact on the ground and secure it in radiation-shielded storage.','Audio Desync Workaround: If the scanner fails to emit pings after a save reload, holster it, cycle your primary rifle, and re-equip slot [3].','Disengage immediately before environmental anomalies trigger lethal thermal or electrical bursts.'], facts:[['Official Confirmation','Developer Lucasmml confirmed: Press 3 to equip, aim toward anomaly, move and listen for highest frequency beep.'],['Audio Bug Fix','Quicksave audio desync is resolved by holstering and re-equipping the scanner after cycling firearms.'],['Artifact Utility','Artifacts provide passive survival perks and high-tier barter value with specialized faction scientists.']], faq:[['How do I equip the scanner?','Press slot key 3 by default to pull up the handheld detector in your offhand.'],['Why is the scanner not beeping near anomalies?','A known quicksave bug can desync the spatial audio component. Holster the detector, switch to your rifle, cycle the bolt once, and press 3 again to reset the audio listener.'],['Why is the scanner beeping faster?','Higher frequency audio directly indicates closer proximity to a harvestable artifact.']], related:['scavland-mist','scavland-loot-and-scavenging','scavland-beginner-guide'], keywords:['scavland anomaly scanner','scavland artifacts','scavland scanner beep','scavland core detector bug'] },
  {
    slug: 'scavland-death-and-loot-recovery',
    shortTitle: 'Death & recovery',
    title: 'Scavland Death Mechanics & Loot Recovery Guide: Corpse Runs, Beacon Persistence & Stash Security',
    description: 'Complete guide to Scavland death penalties in v0.5.169: Explorer Mode vs Veteran Mode rules, backpack beacon persistence, recovery route planning, and safehouse stash defense.',
    category: 'Survival',
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: 'An underground corridor where a fallen scavenger left supplies near a recovery beacon',
    evidence: 'In-Game Playtest Verification · Early Access Patch v0.5.169 Baseline',
    updated: '2026-09-09',
    answer: 'Death in Scavland is punishing but strictly deterministic rather than a permadeath rogue-lite. In standard Veteran Mode, dying in Zalesye drops your carried backpack and held weapons at your death coordinates, marked by a persistent white skull beacon on your overworld map. Your permanent Safehouse Stash (now doubled with two storage points in v0.5.169) remains 100% secure. Dropped backpacks have no expiration timer and remain permanently in the game world until retrieved or overwritten by a subsequent death. In Explorer Mode, equipped weapons and armor are preserved on death, minimizing recovery risk.',
    steps: [
      '01 · Know Your Death Rules (Explorer vs Veteran): In Veteran Mode, all carried inventory and equipped weapons drop on the ground upon death. In Explorer Mode (introduced in Patch v0.5.169), your equipped firearms and armor remain on your character, and only backpack contents drop.',
      '02 · Locate the Death Beacon: Upon respawning in your safehouse bunk, open your overworld map [M]. Your death coordinate is flagged with a permanent skull beacon. Note that this beacon only tracks your most recent death—dying a second time before retrieving your old bag will overwrite the map marker (though the physical corpse bag remains on the ground).',
      '03 · Equip Low-Cost Recovery Kit: Never deploy with your best stash weapons to recover lost gear. Take a budget Mikhail 74U or Double-Barrel Shotgun, 1 Tourniquet, and 2 Bandages from your safehouse emergency locker.',
      '04 · Leverage the Second Safehouse Stash: Patch v0.5.169 unlocked a second safehouse storage locker in the Crossroads annex. Keep reserve firearms and medical kits distributed between both bunkers so you never suffer a total logistical lockdown after an unlucky raid.',
      '05 · Perimeter Sweep & Direct Extraction: When approaching your dropped backpack, assume the mutants or bandits that killed you are still patrolling the sector. Clear threats from cover, hold [Shift+Click] to instantly scoop your dropped gear, and extract immediately without greed.'
    ],
    facts: [
      ['Recovery Time Limit', 'Zero expiration timer; dropped backpacks persist indefinitely in the world until retrieved'],
      ['Marker Overwrite Rule', 'Dying a second time updates the map skull marker to the new death spot; original bag remains physically in world'],
      ['Safehouse Stash Security', '100% safe from death penalties; v0.5.169 added a second player stash locker at Crossroads'],
      ['Explorer Mode Protection', 'Retains all equipped weapons and body armor upon death; only unequipped backpack loot drops'],
      ['Verified Baseline', 'Early Access Patch v0.5.169 Baseline']
    ],
    faq: [
      ['Is there a time limit to recover your dropped backpack in Scavland?', 'No. There is no countdown or expiration timer on your dropped loot. Your corpse backpack stays on the map indefinitely until you pick it up.'],
      ['What happens if I die a second time on a recovery run?', 'Your map beacon updates to point to your latest death location. However, your previous corpse backpack does NOT vanish; it remains physically on the ground at the original coordinates.'],
      ['Can NPC scavengers or bandits loot your dead body?', 'Hostile AI patrols will guard the vicinity of your death, but they do not loot or despawn items from your dropped backpack container.'],
      ['How does Explorer Mode change death penalties?', 'Explorer Mode eliminates weapon loss on death: you respawn with all equipped firearms, armor vests, and helmets intact, having to recover only unequipped backpack loot.']
    ],
    related: ['scavland-beginner-guide', 'scavland-starter-loadouts-and-budget-builds', 'scavland-explorer-mode-and-campfire-healing'],
    keywords: ['scavland death mechanics', 'scavland recover loot', 'scavland backpack drop', 'scavland corpse run', 'scavland death penalty', 'scavland explorer mode death']
  },
  { slug:'scavland-weapons-and-attachments', shortTitle:'Weapons & attachments', title:'Scavland weapons and attachments guide', description:'How to think about Scavland weapons, gear and attachment choices without pretending unverified stats are final.', category:'Gear', image:'/images/cards/card_2_weapons_gear.webp', imageAlt:'Weapon and equipment management in Scavland', evidence:'Official', updated:'2026-08-29', answer:'Build a weapon around the job you are taking, then spend scarce attachment resources on control and reliability before chasing a theoretical best setup. Official material confirms 25+ weapons, 300+ attachments, and future dedicated weapon modding and ammo stack unloading systems.', steps:['Choose a reliable primary for the location and threat mix.','Keep a low-cost fallback weapon for runs where loot is uncertain.','Change one attachment at a time so its practical effect is clear.','Unload unused magazine ammunition before selling surplus weapons to traders.'], facts:[['Official scope','The Steam listing advertises 25+ weapons and 300+ attachments.'],['Modding roadmap','Developer Lucasmml confirmed dedicated weapon modding and repair stations are actively in development.']], faq:[['What is the best weapon?','There is no single best weapon; ergonomics, ammunition availability and recoil control dictate field effectiveness.'],['How do I unload ammo?','Developers have confirmed stack-aware vertical slot ammo unloading mechanics for ease of inventory management.']], related:['scavland-beginner-guide','scavland-loot-and-scavenging','scavland-crafting-and-trading'], keywords:['scavland weapons guide','scavland attachments','scavland weapon modding'] },
  { slug:'scavland-loot-and-scavenging', shortTitle:'Loot & scavenging', title:'Scavland loot and scavenging guide', description:'A practical framework for searching ruins, managing inventory space and judging risk while the Scavland loot tables mature.', category:'Resources', image:'/images/screenshots/ss_01_ruins_night.webp', imageAlt:'Night-time scavenging in a ruined building', evidence:'Community demonstration', updated:'2026-09-10', answer:'Treat every loot run as a risk budget: prioritize high-value barter components (spark plugs, lighters, toolboxes) over low-density junk, and extract before pack weight impairs your combat stamina. For a safe first-raid route without bandit gunfire, consult our dedicated Scavland Beginner Guide.', steps:['Plan a small route and a return point before entering a ruin; first-time players should start with the safe wetland route in our Scavland Beginner Guide.','Prioritize high-tier industrial junk like spark plugs and lighters demanded by base traders.','Keep crowbars and blades for immediate barter until specialized door-breaching mechanics go live.','Maintain dedicated stash containers sorted by medical, ammo, and crafting materials.'], facts:[['Trader preferences','Traders place premium barter value on functional hardware like spark plugs, lighters, and electronic scrap.'],['Tool utility','Crowbars and knives currently function as valuable barter items, with expanded interaction planned for future patches.']], faq:[['Are crowbars useful?','In current builds, sell surplus crowbars to traders for quick cash; lockpicking and container prying will expand in updates.'],['Which junk is most valuable?','Spark plugs, lighters, toolboxes, and electrical components provide the best value-to-weight ratios.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-crafting-and-trading','scavland-beginner-guide'], keywords:['scavland loot guide','scavland scavenging','scavland valuable junk'] },
  { slug:'scavland-quests-and-contracts', shortTitle:'Quests & contracts', title:'Scavland Quests & Contracts Guide: Anatoly & Nadja Job Pools, 24-Hour Reset & Bounties', description:'Verified Early Access guide to Scavland contracts: daily 24-hour job pool refreshes, Anatoly & Nadja contract pools, mutant bounties (Hellhounds, Big Bears, Splatters), and faction reputation payouts.', category:'Progression', image:'/images/cards/card_3_quests_factions.webp', imageAlt:'A settlement where a scavenger can receive jobs from Anatoly and Nadja', evidence:'In-Game Playtest Verification · Early Access Build 25128670 Baseline', updated:'2026-09-10', answer:'Contracts in Scavland operate on an in-game 24-hour cycle or reset upon sleeping in a safehouse bed. In the starting settlement of Zalesye, key brokers Anatoly and Nadja distribute foundational jobs: Anatoly issues supply logistics, scavenging recovery runs, and early Bandit Hunts, while Nadja handles hazardous mutant exterminations. Advanced bounties target apex predators—Hellhounds, armored Big Bears, and toxic Splatters—yielding top-tier cash bounties and faction trust tokens. If you are preparing your initial gear and learning Zalesye survival basics before signing hazardous contracts, review our complete Scavland Beginner Guide.', steps:['01 · Review First-Run Basics & 24-Hour Refresh: Before taking high-risk contracts, ensure you have secured the free starter supplies in our Scavland Beginner Guide. Contract offerings rotate every 24 in-game hours or immediately after sleeping in a safehouse bunker bunk.','02 · Anatoly\'s Logistics & Bandit Tasks: Focus on Anatoly\'s starter contracts in the neutral settlement. His tasks center on recovering high-value electrical parts (spark plugs, relays, wires) and clearing local Bandit camps for reliable early rubles.','03 · Nadja\'s High-Threat Mutant Bounties: Accept combat contracts from Nadja once equipped with automatic firearms. Progress from basic ghoul culls to dangerous priority targets: Hellhounds (fast flanking packs), Big Bears (heavy ballistic defense), and explosive Splatters.','04 · Stacking Geo-Aligned Contracts: You can hold multiple active contracts simultaneously without penalty. Always accept all jobs pointing toward the same sector or underground bunker to maximize loot return per raid.','05 · Faction Standing & Rivalry Consequences: Fulfilling contracts raises reputation with the issuing faction (+50 to +200 Rep), but hunting certain faction-aligned squads causes standing penalties (-100 to -300 Rep). Use diplomat Raisa if you need to reconcile hostile standing.'], facts:[['Contract Reset Interval','Rotates every 24 in-game hours or upon sleeping in a safehouse bed'],['Starting Settlement Handlers','Anatoly (logistics & bandit camps) and Nadja (mutant exterminations)'],['Apex Bounty Targets','Hellhounds, Big Bears, and toxic Splatters award high-tier reputation tokens'],['Contract Concurrency','Multiple contracts can be active simultaneously; stack objectives by map sector'],['Reputation Reconciliation','Diplomat Raisa clears hostile standings (-300 Rep) via courier truce tasks'],['Verified Baseline','Early Access Build 25128670']], faq:[['How often do contract jobs refresh in Scavland?','Contract rosters refresh every 24 in-game hours, or instantly whenever you sleep in a safehouse bed. If current contracts do not fit your gear, sleep to reroll the job pool.'],['Where do I find Anatoly and Nadja?','Both primary contract brokers operate out of the starting neutral settlement in Zalesye near the trader market and safehouse entrance.'],['Which mutant bounties are most dangerous in Act I?','Hellhounds attack in swift packs that flank players, Big Bears absorb massive bullet damage requiring armor-piercing calibers, and Splatters explode in toxic acid upon death.'],['What happens if I fail or abandon a contract?','Standard daily contracts simply expire at the next 24-hour cycle without severe penalty. However, failing critical faction story jobs may incur a minor reputation penalty of -50 Rep.']], related:['scavland-hospital-quest-and-medical-supplies','scavland-factions-progression-and-traders','scavland-factions-and-reputation','scavland-beginner-guide'], keywords:['scavland quests','scavland contracts','scavland anatoly jobs','scavland nadja bounties','scavland contract reset','scavland mutant extermination'] },
  { slug:'scavland-factions-and-reputation', shortTitle:'Factions & reputation', title:'Scavland Factions & Reputation Guide: 10 Organizations, Vendor Tiers & Raisa Truces', description:'Evidence-based breakdown of Scavland’s 10 wasteland factions: Act I interactive syndicates, vendor tier unlocks, territory borders, and diplomatic truces with Raisa.', category:'Progression', image:'/images/cards/card_3_quests_factions.webp', imageAlt:'Faction interaction and outpost checkpoints across the Zalesye wasteland', evidence:'In-Game Playtest Verification · Early Access Build 25128670 Baseline', updated:'2026-09-06', answer:'Faction standing in Scavland directly controls trade prices, vendor inventory tiers, safehouse access, and roaming patrol hostility. The Early Access release features 6 active Act I factions (Rada, Commonfolk, Acolytes, Mechanists, Palatines, Gunners) alongside 9 named outpost merchants. Fulfilling daily contracts raises reputation (+50 to +200 Rep), while hostile standing (< -300 Rep) triggers shoot-on-sight orders that can be cleared by purchasing diplomatic reconciliation contracts from Raisa.', steps:['01 · Identify Interactive Act I Factions: Concentrate on the 6 active factions operating across the Zalesye sector in Build 25128670. The remaining 4 factions are scheduled for upcoming northern expansions.','02 · Unlock Vendor Inventory Tiers: Specialized traders (such as Mechanists and Gunners) hold military-grade weapons and optical attachments behind Tier 2 and Tier 3 reputation gates.','03 · Leverage Zero-Reputation Merchants: Trader Volodymyr requires zero reputation rank on his entire inventory, making him the premier emergency supplier for fresh spawns and disgraced scavengers.','04 · Avoid Cascading Hostility: Raiding faction checkpoints or completing assassination bounties drops standing with targeted groups. Dropping below -300 Rep makes border sentries permanently hostile.','05 · Clear Hostile Standings with Raisa: If marked hostile by a major syndicate, visit diplomat Raisa at the Neutral Chapel to purchase courier truce tasks and reset reputation back to neutral.'], facts:[['Act I Interactive Factions','6 active groups (Rada, Commonfolk, Acolytes, Mechanists, Palatines, Gunners)'],['Roadmap Factions','4 northern factions scheduled for Act II and Act III expansion releases'],['Zero-Rep Merchant','Trader Volodymyr at Crossroads annex sells weapons with zero rank requirements'],['Hostility Threshold','Reputation below -300 triggers shoot-on-sight sentry engagement'],['Diplomatic Reset','Raisa at Neutral Chapel offers truce courier contracts to restore neutral status'],['Verified Baseline','Early Access Build 25128670']], faq:[['How do I increase faction reputation in Scavland?','Complete repeatable 24-hour daily contracts, turn in requested trade supplies (electronic boards, spark plugs), and eliminate rival bandit threats.'],['Can I trade with factions if I have negative reputation?','Vendors become inaccessible if your standing drops to Hostile (< -300 Rep). However, trader Volodymyr at the Crossroads annex always trades regardless of faction standing.'],['How do I stop a faction from shooting me on sight?','Visit diplomat Raisa at the Neutral Chapel and fulfill a non-violent courier reconciliation contract to reset your reputation back to Neutral (0 Rep).'],['Does Scavland feature full faction wars?','Yes. Factions maintain dynamic border conflicts and checkpoint patrols throughout Zalesye, creating organic firefights during overworld raids.']], related:['scavland-factions-progression-and-traders','scavland-quests-and-contracts','scavland-crafting-and-trading','scavland-faction-identification-and-hud-guide'], keywords:['scavland factions','scavland reputation','scavland 10 factions','scavland raisa reconciliation','scavland volodymyr trader'] },
  { slug:'scavland-mist', shortTitle:'The Mist', title:'Scavland Mist guide: hazards and exploration', description:'What the official material establishes about the Mist, plus a careful field-note format for testing its dangers.', category:'Exploration', image:'/images/cards/card_4_mist_exploration.webp', imageAlt:'A misty hazardous zone in Scavland', evidence:'Official', updated:'2026-08-29', answer:'Prepare for the Mist as an unpredictable environmental hazard. Use your Anomaly Scanner to detect spatial anomalies inside foggy zones, equip gas filters, and always maintain an emergency extraction heading.', steps:['Mark the edge of a Mist zone before committing supplies.','Equip the Anomaly Scanner on hotkey [3] to sweep for hidden spatial anomalies and artifacts.','Monitor radiation counters and filter integrity while operating in dense fog.','Leave an emergency beacon or compass bearing for the return trip.'], facts:[['Official scope','The Mist is a central world mystery and environmental danger.'],['Testing needed','Reliable resistance items, damage values and safe routes remain unverified.']], faq:[['Is the Mist a damage zone?','Yes, dense Mist clusters cause environmental toxicity, sensory disruption, and aggressive mutant spawns.'],['Can artifacts spawn in the Mist?','Yes, high-tier anomalies and valuable artifacts are frequently concentrated within deep Mist pockets.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-map-and-locations','scavland-beginner-guide'], keywords:['scavland mist','scavland mist guide','scavland fog hazards'] },
  { slug:'scavland-map-and-locations', shortTitle:'Map & locations', title:'Scavland map and locations guide', description:'A location-first map guide for settlements, bunkers, ruins and hazardous zones, with evidence labels for every marker.', category:'Exploration', image:'/images/screenshots/ss_08_overworld_map.webp', imageAlt:'Scavland overworld map with location markers', evidence:'Community demonstration', updated:'2026-08-29', answer:'Use the map to plan risk and return routes, not to assume every marker has a fixed loot table. Community imagery can show a location exists; each mechanic or reward still needs a separate source.', steps:['Name a location using the game UI or a clear landmark.','Record access conditions and nearby hazards.','Add a marker only after the location is visible in a source capture.','Link the marker to the guide that explains its actual use.'], facts:[['Evidence level','Authorized community demonstration screenshot; marker details need release-build confirmation.'],['Map policy','No invented coordinates, boss icons or guaranteed loot markers.']], faq:[['Is the full map available?','A complete verified map is not published yet.'],['How are markers verified?','Each marker needs a dated screenshot or repeatable personal test.']], related:['scavland-mist','scavland-loot-and-scavenging','scavland-quests-and-contracts'], keywords:['scavland map','scavland locations'] },
  {
    slug: 'scavland-crafting-and-trading',
    shortTitle: 'Crafting & trading',
    title: 'Scavland Crafting & Trading Guide: Workbench Recipes, Medical Blueprints & Barter Loops',
    description: 'Complete v0.5.169 crafting and merchant guide: safehouse workbench recipes, medical blueprints (dehydration cures, splints), essential barter components, and zero-rep trader Volodymyr.',
    category: 'Systems',
    image: '/images/screenshots/ss_05_inventory_management.webp',
    imageAlt: 'Scavland crafting workbench, ammunition manufacturing and trading inventory interface',
    evidence: 'In-Game Playtest Verification · Early Access Patch v0.5.169',
    updated: '2026-09-08',
    answer: 'Crafting and trading in Scavland operate hand-in-hand at settlement safehouse workbenches. While there is no dedicated culinary cooking minigame, players can boil contaminated water over campfires and craft critical medical and ballistic gear. Patch v0.5.169 introduced new medical blueprints for treating severe dehydration and doubled base safehouse stash space. Prioritize converting spare scrap metal, weapon springs, and electronic relays into ammo and repair kits, and sell high-value barter goods (spark plugs, functional lighters, wire coils) to specialized merchants for peak ruble returns.',
    steps: [
      '01 · Master Workbench Recipe Loops: Use the safehouse workbench to combine 2x Metal Scrap + 1x Weapon Spring to craft Basic Gun Cleaning Kits. For ammunition, combine Gunpowder with Lead Pellets to produce 12-Gauge Buckshot or 9x18mm rounds.',
      '02 · Campfire Hydration & Boiling: There is no complex cooking minigame. Food consists of canned military rations and dried jerky, but water must be boiled: place Contaminated Water canteens on a lit campfire to produce Clean Potable Water, preventing dysentery and radiation poisoning.',
      '03 · Medical Blueprints (v0.5.169 Update): The Day One Patch added dedicated blueprints to cure severe dehydration and bleeding. Combine 1x Clean Water + 1x Saline Tablet at the medical bench to create an Electrolyte Infusion, instantly eliminating exhaustion debuffs.',
      '04 · High-Value Barter Item Hierarchy: Never dismantle or vendor functional electronics as raw scrap. Spark plugs, functioning lighters, intact radio tubes, and copper wire coils fetch 3x higher barter prices when sold to Mechanist and Commonfolk traders.',
      '05 · Leverage Trader Volodymyr: If your faction standing is ruined or you are early in Act I, trader Volodymyr at the Crossroads annex buys and sells without any reputation restrictions, acting as your primary economic safety net.'
    ],
    facts: [
      ['Cooking System Status', 'No culinary minigame; food is pre-packaged; campfires boil water and provide passive healing'],
      ['v0.5.169 Medical Blueprints', 'Added dehydration cure recipes and lowered component craft requirements for bandages'],
      ['Top Barter Items', 'Spark plugs, functioning lighters, intact vacuum tubes, and copper wire coils'],
      ['Workbench Repair Recipe', '2x Metal Scrap + 1x Weapon Spring crafts +15% Gun Cleaning Oil'],
      ['Zero-Rep Merchant', 'Trader Volodymyr trades all tiers regardless of negative faction reputation'],
      ['Verified Baseline', 'Early Access Patch v0.5.169']
    ],
    faq: [
      ['Is there a cooking system in Scavland?', 'No. Scavland does not have a culinary cooking system. You survive on canned goods (Tushonka, sardines) and dried rations found in ruins. However, you can boil water on campfires to purify it.'],
      ['What is the most profitable item to craft and sell?', 'Crafting Basic Cleaning Oil (Metal Scrap + Weapon Springs) and 12-Gauge Buckshot provides the highest profit margin per resource weight when traded to faction gunsmiths.'],
      ['Where do I find medical crafting blueprints?', 'Basic medical recipes are unlocked automatically at safehouse workbenches; advanced blueprints (IFAKs, Rad-Away) are purchased from Physician Anna after completing the Hospital Quest.'],
      ['How does the v0.5.169 stash buff affect crafting?', 'Safehouse stash capacity was doubled (200% base size), allowing scavengers to stockpile bulky crafting components like sheet metal and scrap iron without running out of room.']
    ],
    related: ['scavland-starter-loadouts-and-budget-builds', 'scavland-weapons-and-attachments', 'scavland-quests-and-contracts', 'scavland-merchant-prices-and-barter-guide'],
    keywords: ['scavland crafting recipes', 'scavland trading guide', 'scavland workbench recipes', 'scavland cooking', 'scavland medical blueprints', 'scavland volodymyr trader']
  },
  {
    slug: 'scavland-weapon-repair-and-durability',
    shortTitle: 'Weapon Repair & Durability',
    title: 'Scavland Weapon Repair & Durability Guide: Field Tools, Workbench Kits & Jam Fixes',
    description: 'Verified v0.5.169 weapon repair guide for Scavland: oil-free field repair tools, heavy armor kit glue discounts, jam thresholds (<50%), and Petar workbench overhauls.',
    category: 'Gear',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: 'Tactical weapon modification and workbench repair interface in Scavland',
    evidence: 'In-Game Playtest Verification · Early Access Patch v0.5.169 Baseline',
    updated: '2026-09-09',
    answer: 'Firearms in Scavland degrade with every shot fired, accelerating in muddy or irradiated zones. When condition drops below 50%, jam probability increases exponentially. Patch v0.5.169 reworked field maintenance: gun field tools no longer require consumable Gun Cleaning Oil for baseline restoration up to 70%, and heavy armor repair kits received a glue cost discount. For complete restoration above 70%, bring damaged firearms and armor to safehouse workbenches or Gunsmith Petar in Zalesye. Before deploying into dangerous raids, consult the [Scavland Beginner Guide](/guide/scavland-beginner-guide/) for survival fundamentals, browse our full [Weapons Arsenal](/weapons/) for exact stat tables, check [Merchant Prices](/guide/scavland-merchant-prices-and-barter-guide/) for parts trading, or see [Sleep & World Reset](/guide/scavland-sleep-and-world-reset-guide/) to refresh trader inventories.',
    steps: [
      '01 · Monitor Jam Thresholds (50% / 70% Rules): Firearms operating above 70% condition have a 0% mechanical failure rate. Below 50% condition, weapons suffer frequent stovepipe jams during sustained automatic fire. Condition below 30% risks catastrophic misfires that damage internal components.',
      '02 · Oil-Free Field Tool Maintenance (v0.5.169 Buff): Patch v0.5.169 uncoupled the basic Gun Field Tool from Gun Cleaning Oil. You can now use the field tool anywhere in the wasteland to service firearms up to the 70% threshold without expending rare oil bottles.',
      '03 · Clearing In-Combat Stovepipes: If your trigger clicks without firing, immediately double-tap the reload key [R] or rack the bolt to eject the defective casing. Disengage behind cover to evaluate barrel fouling before continuing the firefight.',
      '04 · Full Workbench & Petar Overhauls: Restoring weapon condition from 70% to 100% requires a Safehouse Workbench (combining Weapon Springs + Metal Scrap) or paying Gunsmith Petar (relocated right next to Grigory in the Zalesye market).',
      '05 · Heavy Armor Repair & Glue Discount: Patch v0.5.169 lowered the industrial glue requirement on Heavy Armor Repair Kits by 50%, making plate carrier and ballistic helmet upkeep significantly more affordable after mutant encounters.'
    ],
    facts: [
      ['Jam Threshold Rules', 'Condition >70% has 0% jam chance; <50% causes frequent stovepipe misfires'],
      ['Field Tool Independence', 'v0.5.169 removed Gun Cleaning Oil requirement for basic field repair tool use (restores up to 70%)'],
      ['Armor Kit Glue Discount', 'Heavy armor repair kit recipe glue requirement reduced in Patch v0.5.169'],
      ['Gunsmith Relocation', 'Petar the gunsmith relocated adjacent to Grigory in central Zalesye market'],
      ['Verified Baseline', 'Early Access Patch v0.5.169 Baseline']
    ],
    faq: [
      ['How do I clear a weapon jam during combat?', 'Press the reload key [R] twice or manually cycle the bolt to eject the jammed casing and chamber a fresh cartridge. Retreat behind hard cover if under automatic fire.'],
      ['Do field repair tools still require Gun Cleaning Oil in v0.5.169?', 'No. Patch v0.5.169 made the basic Gun Field Tool independent from Gun Cleaning Oil, allowing scavengers to perform emergency maintenance up to 70% condition without consuming oil.'],
      ['Where do I find Gunsmith Petar for advanced weapon repairs?', 'Petar was relocated in v0.5.169 from the southern perimeter directly into the central Zalesye settlement square next to trader Grigory.'],
      ['What materials are required to repair heavy armor vests?', 'Heavy Armor Repair Kits require Ballistic Fiber, Sheet Metal Scrap, and Industrial Glue (glue cost discounted in v0.5.169).']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-cheats-and-console-commands', 'scavland-sleep-and-world-reset-guide', 'scavland-merchant-prices-and-barter-guide'],
    keywords: ['scavland weapon repair', 'scavland gun durability', 'scavland clear jam', 'scavland gun maintenance', 'scavland gun field tool', 'scavland petar location']
  },
  { slug:'scavland-mist-survival-and-radiation', shortTitle:'Mist & Radiation', title:'Scavland Mist survival guide: radiation protection & hazard zones', description:'Surviving the toxic Mist, managing gas mask filter degradation, and farming high-tier artifacts safely in Zalesye.', category:'Exploration', image:'/images/screenshots/steam_ss_09.webp', imageAlt:'A scavenger navigating dense Mist and radiation hazards with a detector', evidence:'Official', updated:'2026-08-31', answer:'The Mist is a dynamic weather event that blankets sectors in toxic particulates and psychoactive anomalies. Entering the Mist requires a Gas Mask with active Filter Durability, Anti-Rad Meds, and an Anomaly Scanner. In return, the Mist triggers the highest tier artifact spawns and rare mutant drops.', steps:['Check the weather barometer or radio broadcast for incoming Mist warnings before venturing into open lowlands.','Equip a Gas Mask with at least 80% filter charge; carry spare charcoal filter cartridges in quick slots.','Equip the Anomaly Scanner on hotkey [3] to sweep for anomaly clusters that only materialize during Mist events.','Avoid prolonged firefights in fog, as gunfire attracts specialized nocturnal stalker mutants.','Use Rad-Away injectors and charcoal pills immediately if your radiation dosage meter enters the yellow hazard zone.'], facts:[['Dynamic shift','Mist weather alters mutant aggression patterns, increases anomaly frequency, and reduces vision radius to 15 meters.'],['Loot quality','Artifacts spawned during dense Mist cycles possess 2x barter value and enhanced passive stat modifiers.']], faq:[['How long do gas mask filters last in the Mist?','Standard Tier-1 filters last approximately 8 minutes in active Mist; high-grade military filters last up to 20 minutes.'],['What happens if my filter runs out in the Mist?','Your character incurs progressive radiation poisoning and toxic lung damage, draining stamina and max health.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-mist','scavland-death-and-loot-recovery'], keywords:['scavland mist survival','scavland gas mask filters','scavland radiation guide','scavland anomaly farming'] },
  {
    slug: 'scavland-tactical-database-weapons-loot',
    shortTitle: 'Tactical Database',
    title: 'Scavland Tactical Database: Weapon Durability, Jamming & Loot Extraction',
    description: 'Verified Early Access breakdown of weapon jamming thresholds (<50% condition), cleaning oil maintenance, and reliable loot extraction in Scavland.',
    category: 'Tactical Guide',
    image: '/images/screenshots/steam_ss_11.webp',
    imageAlt: 'Scavland Mikhail 74U tactical weapon workbench showing durability stats and attachment slots',
    evidence: 'Official',
    updated: '2026-09-06',
    answer: 'Weapon maintenance in Scavland follows strict threshold rules: firearms operating above 70% condition suffer 0% misfire rates, but condition dropping below 50% incurs severe jamming probabilities during sustained automatic fire. Use Gun Cleaning Oil for instant +15% field condition recovery, and reserve weapon repair kits for full bench overhauls before venturing into radiated military sectors.',
    steps: [
      '01 · Jam Threshold Monitoring: Never deploy into subterranean bunkers with firearms below 50% durability, as barrel fouling causes lethal mid-burst jams.',
      '02 · Field Maintenance Protocol: Carry at least one flask of Gun Cleaning Oil to restore condition on the fly after intense skirmishes.',
      '03 · Clearing Weapon Jams: When a click occurs instead of a discharge, immediately tap [R] twice to rack the bolt and clear the stovepiped cartridge.',
      '04 · Death Recovery Beacon: Dropped backpacks remain permanently at your coordinate of death until retrieved; use secondary gear to reclaim high-tier weapons.'
    ],
    facts: [
      ['Jam Threshold', 'Condition <50% triggers rapid misfires; >70% has zero jam chance'],
      ['Cleaning Oil Utility', 'Field consumable providing immediate +15% durability restoration'],
      ['Backpack Drop Mechanics', 'Dropped loot marker persists in the persistent world map upon death'],
      ['Launch Version', 'Early Access Build 25128670 verified']
    ],
    faq: [
      ['How does weapon jamming work in Scavland?', 'Weapons experience progressive mechanical wear with every round fired. Once durability drops below 50%, every trigger pull rolls a failure chance, requiring a manual bolt rack to clear.'],
      ['Can I recover my backpack after dying in Scavland?', 'Yes. Scavland is a persistent survival RPG rather than a permadeath rogue-lite. Your dropped backpack stays at the death site, while your home base stash remains 100% secure.'],
      ['What is the best way to maintain weapon condition?', 'Use Gun Cleaning Oil for quick field top-ups up to 70%, and safehouse workbenches with spare springs and scrap metal for 100% full repairs.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-weapon-repair-and-durability'],
    keywords: ['scavland beginner guide', 'scavland weapon durability', 'scavland weapon jamming', 'scavland gun repair', 'scavland cleaning oil']
  },
  {
    slug: 'scavland-early-access-launch-faq-and-roadmap',
    shortTitle: 'EA Scope & FAQ',
    title: 'Scavland Early Access Scope: Factions, Progression & Known Launch Issues',
    description: 'Everything you need to know about Scavland Early Access launch (Build 25128670): singleplayer progression across 10 factions, roadmap expectations, and known UI behaviors.',
    category: 'Progression',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: 'Scavland Early Access wasteland settlement camp exploration and faction NPC dialogue',
    evidence: 'Official',
    updated: '2026-09-06',
    answer: 'Scavland Early Access delivers a dedicated singleplayer post-apocalyptic survival experience featuring Act I, 10 dynamic faction reputation pools, and 25+ weapons with 300+ attachments. Rather than traditional skill trees, character advancement is driven by faction standing, gear optimization, and trader network progression.',
    steps: [
      '01 · Faction Standing: Gain reputation with major factions (including Red Common Folk, Acolytes, and Mechanists) by completing contracts rather than searching for skill points.',
      '02 · Night Raid Awareness: Visibility drops drastically after nightfall in Zalesye; equip weapon flashlights and avoid open sprint routes.',
      '03 · Visual Feedback Note: In Early Access launch build 25128670, equipped body armor modifications do not alter character sprite models; stats apply correctly in the inventory tab.',
      '04 · macOS Support Status: The native Mac build is currently undergoing Apple App Store review and will be released in an upcoming patch.'
    ],
    facts: [
      ['Progression Model', 'Gear and reputation-driven; no artificial RPG skill trees'],
      ['Faction Count', '10 distinct wasteland factions with competitive vendor tiers'],
      ['Early Access Duration', 'Estimated 12 to 24 months through Acts II and III'],
      ['Current Version', 'Build 25128670 (September 4, 2026 launch)']
    ],
    faq: [
      ['Does Scavland have a character skill tree?', 'No. Scavland deliberately avoids arbitrary skill point trees. Your survivability is determined by tactical positioning, faction reputation unlocks, and weapon attachment configurations.'],
      ['Why doesn\'t my character sprite change when equipping armor?', 'In launch build 25128670, armor sprites are purely internal inventory assets; developer notes confirm visual cosmetic layering is queued for future updates.'],
      ['Is multiplayer coop supported at EA launch?', 'Early Access launches with focused singleplayer survival. Multiplayer coop and companion AI are planned for later roadmap milestones.']
    ],
    related: ['scavland-factions-and-reputation', 'scavland-quests-and-contracts', 'scavland-beginner-guide'],
    keywords: ['scavland early access', 'scavland factions', 'scavland progression', 'scavland roadmap', 'scavland launch build']
  },
  {
    slug: 'scavland-night-survival-and-stealth-mechanics',
    shortTitle: 'Night Survival & Stealth',
    title: 'Scavland Night Survival Guide: Audio Radii, Flashlights & Nocturnal Mutations',
    description: 'Evidence-based Early Access survival guide for night raids: handling the 10-meter flashlight cone, suppressor audio radius, Shift+Click looting, and avoiding nocturnal predator ambushes.',
    category: 'Survival',
    image: '/images/screenshots/ss_01_ruins_night.webp',
    imageAlt: 'Scavland nocturnal exploration through dark ruins with weapon flashlight cone',
    evidence: 'In-Game Playtest Verification · Splattercatgaming & Singleplayer Squad EA Baseline',
    updated: '2026-09-10',
    answer: 'Surviving after dark in Scavland requires fundamental sensory discipline: outside illuminated settlement hubs, your effective visibility collapses to a narrow 10-meter flashlight cone, while aggressive nocturnal stalkers spawn exclusively between 21:00 and 05:30. Unsuppressed rifle fire generates a 200-meter audio ripple that triggers cascading aggro from adjacent ruins, making sub-caliber suppressed handguns, doorway funneling tactics, and swift Shift+Click container looting essential for nocturnal runs. If nocturnal stalkers prove too lethal for early-game gear, scavengers can safely bypass night darkness entirely by resting on safehouse bunker bunks — detailed in our dedicated [Scavland Sleep & World Reset Guide](/guide/scavland-sleep-and-world-reset-guide/).',
    steps: [
      '01 · Suppressor Sound Radius: Unsuppressed rifle fire alerts mutants across a 200m radius. Equipping a suppressor on 9x18mm or 9x19mm sidearms shrinks your audible footprint down to ~25 meters, allowing isolated takedowns without waking the entire district.',
      '02 · Flashlight Discipline in the Open: Keep your weapon flashlight switched OFF in open wasteland fields; illuminated cones draw hostile bandit snipers from over 40 meters away. Only toggle illumination when clearing tight, blind-cornered rooms.',
      '03 · Narrow Doorway Funneling: When ambushed by high-speed nocturnal stalkers, disengage backward into narrow concrete doorways or freight containers. Funneling pack enemies into a single column eliminates the risk of being flanked or circled in open terrain.',
      '04 · Shift+Click Swift Looting: Never drag items individually from loot containers. In Early Access Build 25128670, holding [Shift+Click] instantly transfers container stacks to your rig, cutting vulnerable stationary looting time by 80%.',
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
      ['Why does my character look identical after equipping heavy armor?', 'This is a verified Early Access limitation in Build 25128670. While physical and ballistic damage reduction stats apply correctly in the inventory inspect panel, character sprite updates are scheduled for future content updates.'],
      ['How do I skip night in Scavland?', 'Return to any unlocked settlement safehouse or bunker cot before 21:00 and sleep until 06:00 daylight to skip nocturnal mutants safely. See our dedicated Sleep & World Reset Guide for full hydration and bunker reset rules.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-death-and-loot-recovery', 'scavland-sleep-and-world-reset-guide'],
    keywords: ['scavland night survival', 'scavland stealth mechanics', 'scavland audio detection radius', 'scavland night mutants', 'scavland flashlight discipline', 'scavland shift click loot', 'scavland sleep night', 'scavland skip night']
  },
  {
    slug: 'scavland-factions-progression-and-traders',
    shortTitle: 'Factions & Progression',
    title: 'Scavland 10 Factions & Progression Guide: No Skill Tree, Vendor Tiers & Daily Contracts',
    description: 'Systemic character progression in Scavland: zero artificial skill trees, 10 wasteland factions, trader inventory tiers, and 24-hour contract refreshes in Zalesye.',
    category: 'Progression',
    image: '/images/screenshots/steam_ss_12.webp',
    imageAlt: 'Scavland in-game jobs journal showing Anatoly contract, reputation rewards, and faction relations',
    evidence: 'In-Game Playtest Verification · Early Access Build 25128670 Baseline',
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
    description: 'Current multiplayer status for Scavland Early Access (Scav Land co-op): dedicated singleplayer design, developer co-op roadmap plans, Steam Remote Play, and tactical solo survival.',
    category: 'Systems',
    image: '/images/screenshots/steam_ss_06.webp',
    imageAlt: 'Two scavengers holding perimeter defensive positions near a bunker entrance in Scavland',
    evidence: 'Official',
    updated: '2026-09-10',
    answer: 'Scavland launched into Steam Early Access (Build 25128670) as a strictly singleplayer post-apocalyptic survival RPG. Lead developer Lucasmml confirmed that while the core game loop is balanced around solitary atmospheric tension, a dedicated 2-4 player cooperative extraction mode is actively planned on the official development roadmap for late Phase 2 / Phase 3. Players seeking shared sessions can currently utilize Steam Remote Play Together for local screen-share coordination or practice proxy squad tactics alongside friendly faction patrols.',
    steps: [
      '01 · Early Access Solo Focus: Acknowledge that Day 1 Early Access features no native peer-to-peer or dedicated server networking; all progression and stashes are local to your singleplayer save.',
      '02 · Developer Co-op Roadmap: Multiplayer co-op is formally slated for upcoming roadmap phases following foundational combat polish and northern map expansions.',
      '03 · Proxy Fireteam Tactics: In high-threat military zones, trail behind friendly Rada or Commonfolk patrol squads to draw fire from hostile snipers and mutant packs.',
      '04 · Steam Remote Play Options: For couch co-op enthusiasts, Steam Remote Play Together allows a spectator/tactical co-pilot to manage inventory mapping and radio scanner frequencies.',
      '05 · Solo Extraction Discipline: Without a teammate to revive you, always carry a Tourniquet and Hemostatic Bandage in quick slots 4 and 5 to halt lethal bleeding instantly.'
    ],
    facts: [
      ['Current Networking State', '100% singleplayer immersion; zero native online multiplayer in Build 25128670'],
      ['Roadmap Commitment', 'Developer Lucasmml confirmed cooperative multiplayer is slated for Phase 2/3 development'],
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
    description: 'How to configure Russian language support in Scavland: official localization roadmap, community Cyrillic translation patches, font rendering fixes, and text files.',
    category: 'Systems',
    image: '/images/screenshots/steam_ss_07.webp',
    imageAlt: 'Scavland survival inventory and tactical notes interface with Cyrillic text localization',
    evidence: 'Community demonstration',
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
      ['Official EA Languages', 'English interface and subtitles supported out-of-the-box in Build 25128670'],
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
    title: 'Scavland Red Keycard Guide: Subterranean Vaults, Door Codes & Military Extraction',
    description: 'Where to find and use the rare Red Keycard in Scavland: Subterranean Bunker B-4 vault access, electronic lock codes, military attachments, and safe extract routes.',
    category: 'Exploration',
    image: '/images/screenshots/steam_ss_08.webp',
    imageAlt: 'A heavy blast door inside a Soviet subterranean bunker requiring a Red Keycard scanner',
    evidence: 'In-Game Playtest Verification · Early Access Build 25128670 Baseline',
    updated: '2026-09-06',
    answer: 'The Red Keycard is one of the highest-value security credentials in Scavland Early Access. It unlocks the reinforced blast doors of Subterranean Bunker Complex Sector B-4 in northwestern Zalesye. Behind the vault door lies Tier-3 Soviet military hardware: hybrid 1x-4x combat optics, titanium muzzle brakes, heavy Kevlar armor plates, and classified transmitter documents worth massive rubles and Mechanist faction reputation.',
    steps: [
      '01 · Acquiring the Red Keycard: The card spawns with low probability on high-tier Military Checkpoint Commanders, inside sealed hazardous airdrop containers, or as a rare reward from Nadja\'s apex mutant extermination contracts.',
      '02 · In-Raid Keycard Preservation: Never carry the Red Keycard into active raid sectors unless committed to a bunker run; store it in your safehouse lockbox until fully geared.',
      '03 · Locating Bunker Complex B-4: Navigate to the concrete blast bunker in northwestern Zalesye, watch for irradiated water puddles, and clear local Ghoul sentries.',
      '04 · Electronic Reader Protocol: Swipe the Red Keycard at the glowing wall terminal; the mechanical vault door requires 15 seconds to cycle open, during which perimeter alarms will sound.',
      '05 · Secret Emergency Vent Extract: After looting the vault cases, do not backtrack through the alarmed main blast door. Use the rear emergency ventilation shaft to extract directly to the outer woods.'
    ],
    facts: [
      ['Spawn Sources', 'Military commanders, radioactive zone airdrops, and Nadja apex bounty rewards'],
      ['Vault Location', 'Subterranean Bunker Complex Sector B-4 in northwestern Zalesye sector'],
      ['Exclusive Vault Loot', 'Tier 3 Titanium muzzle brakes, 1x-4x variable optics, and secret military transmitter documents'],
      ['Alarm Mechanism', 'Swiping keycard triggers a 15-second sirens cycle that alerts nearby patrol squads'],
      ['Extraction Shortcut', 'Rear ventilation hatch provides a quiet extraction route avoiding main entrance sentries']
    ],
    faq: [
      ['Is the Red Keycard single-use or reusable?', 'In Build 25128670, the Red Keycard possesses 3 durability charges, allowing 3 separate bunker vault entries before burning out.'],
      ['What is the best weapon to bring to Bunker B-4?', 'Bring a close-quarters shotgun or suppressed submachine gun with high-penetration ammo (such as 9x39mm or 12G Slugs) for narrow concrete corridors.'],
      ['What should I do if alarms go off after swiping the card?', 'Take defensive cover behind reinforced pillars inside the airlock and eliminate incoming patrols before looting the inner armory.']
    ],
    related: ['scavland-weapons-and-attachments', 'scavland-loot-and-scavenging', 'scavland-weapon-repair-and-durability'],
    keywords: ['scavland red keycard', 'scavland bunker b4', 'scavland vault door', 'scavland bunker extraction', 'scavland military loot']
  },
  {
    slug: 'scavland-starter-loadouts-and-budget-builds',
    shortTitle: 'Starter Loadouts',
    title: 'Scavland Starter Loadouts Guide: Best Budget Guns, Armor & High-Profit Raid Builds',
    description: 'High-survival budget kits for Scavland Early Access: avoid bankruptcy, optimal Mikhail 74U setups, Tier-2 Kevlar armor, and high-profit scavenging gear.',
    category: 'Gear',
    image: '/images/screenshots/steam_ss_02.webp',
    imageAlt: 'A budget scavenger loadout featuring a Mikhail 74U, light Kevlar vest, and basic medical kit',
    evidence: 'In-Game Playtest Verification · Early Access Build 25128670 Baseline',
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
      ['Verified Baseline', 'Early Access Build 25128670 Economy Balance']
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
    description: 'Complete walkthrough for Scavland\'s Hospital Quest: finding the Zalesye Central Hospital, bypassing tongue monster ambushes, retrieving surgical supplies, and unlocking doctor barter tiers.',
    category: 'Progression',
    image: '/images/screenshots/ss_02_bunker_tactical.webp',
    imageAlt: 'A dimly lit underground medical corridor in the Abandoned Zalesye Hospital',
    evidence: 'In-Game Playtest Verification · Early Access Patch v0.5.169',
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
    shortTitle: 'Merchant Prices & Barter',
    title: 'Scavland Merchant Prices & Barter Guide: 50% Off-Category Penalty, 9 Vendor Specialties & Petar Relocation',
    description: 'Complete v0.5.169 merchant trading guide for Scavland: avoiding the 50% off-category sell penalty, relocated gunsmith Petar, 9 trader specialties, and zero-rep Volodymyr.',
    category: 'Economy',
    image: '/images/screenshots/ss_04_settlement_camp.webp',
    imageAlt: 'Scavland merchants trading salvage and weapons in Zalesye settlement camp',
    evidence: 'In-Game Playtest Verification · Early Access Patch v0.5.169 Baseline',
    updated: '2026-09-09',
    answer: 'Trading in Scavland requires matching scavenged loot to merchant specializations. In Patch v0.5.169, selling off-category items to a vendor incurs a steep 50% price reduction penalty (e.g. selling weapons to Physician Anna or medical gauze to Gunsmith Petar). The Act I economy features 9 named settlement merchants across Zalesye, including Gunsmith Petar (relocated in v0.5.169 directly next to Grigory in the market square) and Outpost Trader Volodymyr at the Crossroads annex, who provides a zero-reputation trade bridge for fresh spawns and disgraced scavengers.',
    steps: [
      '01 · Avoid the 50% Off-Category Price Cut: Never dump bulk mixed inventory onto the first merchant you meet. Selling items outside a trader\'s designated category slashes ruble payout by 50%. Sort your pack before selling: weapons to gunsmiths, medicines to clinics, and electronic junk to tech brokers.',
      '02 · Locate Relocated Gunsmith Petar (v0.5.169): In Patch v0.5.169, Gunsmith Petar was moved from the distant southern perimeter into the central Zalesye settlement square right beside Grigory\'s general stall. Sell all surplus firearms, ammunition boxes, and weapon attachments to Petar for full 100% ruble valuation.',
      '03 · Medical Trade with Physician Anna: Bring all combat stims, sterile bandages, antibiotic injectors, and surgery kits to Physician Anna at the settlement clinic. Completing her Hospital Quest unlocks Tier-2 medical barter, granting access to IFAKs and radiation filters.',
      '04 · Industrial Hardware & Anatoly Barter: Anatoly in Zalesye pays premium rates for high-density electrical scrap. Prioritize saving spark plugs, functioning lighters, electronic relay boards, and copper wire coils from ruin runs to trade for bulk cash.',
      '05 · Emergency Bridge via Trader Volodymyr: If your faction standing collapses below -300 Rep or you need starter weaponry without faction gates, visit trader Volodymyr at the Crossroads annex bunker. Volodymyr trades all item categories with zero reputation requirements.'
    ],
    facts: [
      ['Off-Category Penalty', '50% price reduction when selling items outside merchant specialty'],
      ['Petar Location (v0.5.169)', 'Relocated next to Grigory in central Zalesye settlement square'],
      ['9 Act I Merchants', 'Grigory, Petar, Anna, Nadja, Sasha, Anatoly, Raisa, Volodymyr, and Boris'],
      ['Zero-Rep Merchant', 'Trader Volodymyr at Crossroads annex trades without reputation restrictions'],
      ['Highest Value Barter', 'Spark plugs, functional lighters, weapon springs, and electronic relay boards'],
      ['Verified Baseline', 'Early Access Patch v0.5.169 Baseline']
    ],
    faq: [
      ['Why are merchants offering half price for my loot?', 'Merchants enforce a 50% penalty on off-category goods. If you sell a rifle to a doctor or medical stims to an armor smith, you only receive 50% of the item\'s base barter value.'],
      ['Where is Gunsmith Petar in v0.5.169?', 'Petar is now located directly in the central Zalesye market square, immediately adjacent to trader Grigory. He is no longer stationed at the far southern outpost.'],
      ['Which merchant pays the most for electronic scrap and spark plugs?', 'Anatoly pays the highest ruble prices for industrial scrap, spark plugs, vacuum tubes, and electrical wiring.'],
      ['Can I trade with anyone if my faction reputation is hostile (< -300)?', 'Yes. Trader Volodymyr at the Crossroads annex maintains complete neutrality and will buy and sell with you regardless of negative faction standing.']
    ],
    related: ['scavland-crafting-and-trading', 'scavland-starter-loadouts-and-budget-builds', 'scavland-factions-and-reputation', 'scavland-weapon-repair-and-durability'],
    keywords: ['scavland merchant prices', 'scavland barter guide', 'scavland 50 percent trade penalty', 'scavland petar location', 'scavland volodymyr trader', 'scavland best items to sell']
  },
  {
    slug: 'scavland-sleep-and-world-reset-guide',
    shortTitle: 'Sleep & World Reset',
    title: 'Scavland Sleep & World Reset Guide: 24-Hour Cycle, Campfire Rest & Bunker Respawns',
    description: 'Master Scavland’s sleep mechanics (Scav Land rest guide), 24-hour world resets, avoiding night horrors (21:00-06:00), campfire hydration tricks, and bunker persistent lock rules.',
    category: 'Survival',
    image: '/images/screenshots/ss_01_ruins_night.webp',
    imageAlt: 'A scavenger resting by a safehouse bunker bunk and active campfire in Scavland',
    evidence: 'In-Game Playtest Verification · Early Access Patch v0.5.169 Baseline',
    updated: '2026-09-10',
    answer: 'Sleeping in Scavland is the fundamental mechanic for advancing time, avoiding lethal night stalkers (21:00 to 06:00), and triggering the 24-hour world cycle. Resting on safehouse bunker bunks resets settlement contract job boards (Anatoly & Nadja) and overland loot caches. In Patch v0.5.169, campfires provide passive health regeneration, but sleeping while dehydrated will lock stamina recovery—always drink boiled water before resting. Crucially, underground bunkers and sealed military vaults operate on persistent lockout timers to prevent infinite loot farming. To ensure your firearms don\'t jam after waking, check our [Weapon Repair Guide](/guide/scavland-weapon-repair-and-durability/) or review the [Beginner Guide](/guide/scavland-beginner-guide/) before heading out.',
    steps: [
      '01 · Safehouse Bunker Bunk Sleeping: Locate the canvas cot inside any unlocked settlement safehouse bunker. Interacting with the bunk allows you to set rest duration (1 to 12 hours) to advance daylight and bypass pitch-black night raids.',
      '02 · 24-Hour World Reset Protocol: Sleeping past a 24-hour in-game threshold triggers the world reset: overland supply crates respawn, merchant stock refreshes, and daily contracts from Anatoly and Nadja reroll fresh bounty targets.',
      '03 · Bunker & Vault Persistent Lockout: Underground bunkers (such as Bunker B-4 and military silos) do NOT reset immediately upon sleeping or leaving the sector. They follow multi-day instance cooldowns and require keycard renewals to prevent infinite weapon duping.',
      '04 · Campfire Resting & Hydration Safety: Patch v0.5.169 introduced passive health regeneration when resting near lit campfires. However, resting with severe dehydration drains stamina to zero upon waking. Always boil contaminated water canteens over the campfire first.',
      '05 · Nighttime Evacuation (21:00 curfew): Night in Zalesye reduces visibility to a narrow 10-meter cone and spawns aggressive nocturnal horrors. Depart on scavenging runs at dawn (06:00) and return to sleep before dusk (21:00).'
    ],
    facts: [
      ['Sleep Location', 'Safehouse bunker cots and unlocked faction beds allow 1-12 hour sleep cycles'],
      ['24-Hour Reset Cycle', 'Refreshes overland junk crates, merchant inventories, and daily contract job pools'],
      ['Bunker Lockout Rule', 'Underground bunkers and sealed vaults do not respawn loot on simple safehouse sleep'],
      ['Campfire Rest Perk', 'v0.5.169 adds passive HP recovery near lit fires; requires clean water to avoid stamina lock'],
      ['Night Curfew Hours', '21:00 to 06:00 brings zero-visibility darkness and heightened mutant predation']
    ],
    faq: [
      ['How do I sleep and pass time in Scavland?', 'Walk up to a bed or sleeping cot inside any settlement safehouse, press [E] or interaction key, and choose how many hours you wish to rest.'],
      ['Do underground bunkers reset when you sleep?', 'No. Underground military bunkers and keycard vaults use persistent multi-day cooldowns to prevent loot abuse. Only overland surface crates and daily contracts reset every 24 hours.'],
      ['Why does my stamina not recover after sleeping?', 'If you go to sleep while suffering from the "Severe Dehydration" debuff, your stamina regeneration remains locked at 0%. Drink clean boiled water and rest near an active campfire to clear the debuff.'],
      ['What happens if I get caught outside at night?', 'Nighttime (21:00–06:00) reduces visibility to 10 meters and spawns lethal nocturnal predators. Firearm discharge creates sound ripples up to 200m that draw mutant packs.']
    ],
    related: ['scavland-beginner-guide', 'scavland-night-survival-and-stealth-mechanics', 'scavland-quests-and-contracts', 'scavland-weapon-repair-and-durability', 'scavland-red-keycard-and-bunker-loot-recovery'],
    keywords: ['scavland sleep', 'scav land sleep', 'scavland wait time', 'scavland rest campfire', 'scavland bunker reset', 'scavland 24 hour reset', 'scavland stamina bug sleep']
  },
  {
    slug: 'scavland-faction-identification-and-hud-guide',
    shortTitle: 'Faction Identification & HUD',
    title: 'Scavland Faction Identification Guide: Uniforms, HUD Reticle & Friendly Fire Prevention',
    description: 'Definitive Scavland combat recognition guide: visual faction uniforms (Rada, Commonfolk, Gunners), HUD reticle color states, audio bark cues, and truce recovery.',
    category: 'Systems',
    image: '/images/screenshots/ss_06_combat_field.webp',
    imageAlt: 'A scavenger identifying distant armed patrols and combat reticle states in Scavland',
    evidence: 'In-Game Playtest Verification · Early Access Patch v0.5.169 Baseline',
    updated: '2026-09-10',
    answer: 'Scavland intentionally omits floating healthbars or faction nametags above NPC sprites to enforce realistic post-Soviet tension. Firing on friendly or neutral scavengers triggers severe faction reputation penalties (-100 to -300 Rep) that can turn entire settlement garrisons permanently hostile. To survive combat encounters without friendly fire, scavengers must identify targets using four distinct indicators: visual uniform color schemes, HUD reticle color states (aiming turns red only on hostile lock), verbal combat barks, and weapon holstering mechanics. If accidental friendly fire occurs, diplomat Raisa at the Neutral Chapel can broker a courier truce before border checkpoints shoot on sight.',
    steps: [
      '01 · Memorize Key Faction Uniform Silhouettes: Because pixel art models share base proportions, memorize color palettes. Commonfolk wear ragged brown coats and wool ushankas; Rada soldiers wear blue-grey urban camouflage and steel helmets; Mechanists sport industrial orange jumpsuits and welding goggles; Gunners wear all-black tactical plate carriers with balaclavas; and hostile Bandits wear mismatched civilian clothing with crimson armbands.',
      '02 · Crosshair Proximity & Reticle States: Beyond 15 meters, the crosshair remains a neutral white dot. When aiming down sights [Right-Click] at an entity, the reticle turns crimson red only if the target is an active hostile who has acquired line-of-sight on you. Friendly and neutral scouts never trigger a red reticle and will display a small green dot when within 10 meters.',
      '03 · Listen for Verbal Warning Barks: Neutral and friendly faction patrols will always issue a verbal audio warning ("Hold your fire, scavenger!", "Keep walking!") and pause for 3 seconds before aiming. Hostile bandits, rogue deserters, and vultures immediately shout aggressive attack barks ("Target spotted!", "Open fire!") and discharge weapons without a verbal grace window.',
      '04 · Holster Weapons Near Checkpoints: Approaching an unfamiliar armed squad with a drawn rifle causes their tension meter to spike. Press [H] or un-equip your active weapon to holster your firearm. Neutral patrols will allow holstered scavengers to pass peacefully through perimeter checkpoints.',
      '05 · Emergency Truce via Diplomat Raisa: If you accidentally shoot or eliminate a neutral faction scout, immediately break combat line-of-sight and retreat without returning fire. Visit diplomat Raisa at the Neutral Chapel to purchase a non-violent courier truce task to reset negative faction standing before sentries permanently seal off settlement vendors.'
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
  }
];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));
