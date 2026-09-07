export type Evidence = 'Official' | 'Personal in-game test' | 'Community demonstration' | 'Unverified';
export type Guide = { slug:string; title:string; shortTitle:string; description:string; category:string; image:string; imageAlt:string; evidence:Evidence; updated:string; answer:string; steps:string[]; facts:[string,string][]; faq:[string,string][]; related:string[]; keywords:string[] };

export const guides: Guide[] = [
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
    description: 'In-depth tactical breakdown comparing Scavland and Zero Sievert: ballistics feel, 300+ attachment modularity, radioactive Mist dynamic weather, 10 factions, and planned co-op multiplayer.',
    category: 'Comparisons',
    image: '/images/screenshots/scavland_vs_zero_sievert.webp',
    imageAlt: 'Side-by-side tactical comparison between Scavland and Zero Sievert top-down survival mechanics',
    evidence: 'In-Game Playtest Verification · Early Access Build 25128670 Baseline',
    updated: '2026-09-07',
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
    keywords: ['scavland vs zero sievert', 'scavland similar games', 'scavland stalker like', 'scavland co op', 'zero sievert alternatives']
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
  { slug:'scavland-beginner-guide', shortTitle:'Beginner guide', title:'Scavland Beginner Guide: First Run Survival, Fast Looting & Jam Prevention', description:'Essential Early Access survival rules for your first run in Zalesye: Shift+Click rapid looting, 50% weapon jam thresholds, safehouse stash security, and daylight scavenging routes.', category:'Survival', image:'/images/cards/card_1_beginner_guide.webp', imageAlt:'A scavenger exploring a ruined settlement in daylight near safehouse', evidence:'In-Game Playtest Verification · Early Access Build 25128670 Baseline', updated:'2026-09-06', answer:'Start with a short daylight scavenging loop close to the Zalesye starting settlement, use [Shift+Click] for instant container transfer, and extract before nightfall when visibility collapses to a 10-meter flashlight cone. Scavland features persistent stashes and zero artificial skill trees—advancement is driven by equipped weapons, armor, and faction standing. If you die in the wasteland, your backpack drops at the coordinate for recovery, while your safehouse stash remains 100% secure.', steps:['01 · Master Shift+Click Fast Looting: Never drag items individually from loot stashes. Holding [Shift+Click] instantly transfers container stacks to your inventory, slashing vulnerable stationary looting time by 80%.','02 · Maintain Weapon Durability Above 50%: Check firearm condition before leaving safety. Weapons under 50% condition suffer frequent jamming; carry Gun Cleaning Oil for instant +15% field restoration.','03 · Daylight Scavenging & Nighttime Evacuation: Depart at dawn (06:00) and return to a safehouse before 21:00. Unsuppressed rifle fire at night creates a 200m sound ripple that alerts aggressive nocturnal stalkers.','04 · Prioritize High-Profit Barter Goods: Focus backpack capacity on spark plugs, functional lighters, wire coils, and weapon springs. Sell these to settlement merchants for fast early rubles rather than hoarding heavy scrap.','05 · Safehouse Stashing & Death Recovery: Store surplus ammunition, medical packs, and spare guns in your safehouse shelter before departing. If killed, deploy with fallback gear to recover your dropped backpack.'], facts:[['Evidence Boundary','Early Access Build 25128670 verified; persistent survival RPG with zero permadeath'],['Fast Loot Shortcut','Shift+Click immediately transfers container stacks into inventory'],['Jam Threshold','Condition >70% has 0% jam chance; <50% condition causes rapid mechanical failures'],['Night Detection Footprint','Unsuppressed gunfire alerts mutant packs up to 200m; flashlight draws snipers at 40m'],['Corpse Run Recovery','Equipped gear drops at death coordinate for recovery; safehouse stash is permanent']], faq:[['What is the most important control shortcut for new players?','Holding Shift+Click instantly transfers item stacks between loot containers and your inventory, preventing you from getting ambushed while slowly dragging items.'],['Does Scavland have character levels or skill trees?','No. Scavland features no artificial leveling perks. Character advancement is strictly determined by equipped weapon attachments, body armor plates, trader tier access, and accumulated rubles.'],['What should I do if my weapon jams in combat?','Tap the reload key [R] twice or cycle the bolt immediately to clear the stovepiped casing, then disengage behind cover to apply Gun Cleaning Oil.'],['Do I lose my base storage if I die on a raid?','No. Only carried weapons and backpack items drop at your point of death. All supplies stored in your safehouse bunker lockers are 100% safe.']], related:['scavland-tactical-database-weapons-loot','scavland-death-and-loot-recovery','scavland-night-survival-and-stealth-mechanics'], keywords:['scavland beginner guide','scavland first run','scavland survival tips','scavland shift click loot','scavland weapon jams','scavland safehouse'] },
  { slug:'scavland-anomaly-scanner-and-artifacts', shortTitle:'Anomaly scanner', title:'Scavland anomaly scanner guide: locating artifacts & hazard detection', description:'Official step-by-step method for using the handheld Anomaly Scanner to detect spatial anomalies and extract rare artifacts.', category:'Exploration', image:'/images/screenshots/ss_09_radioactive_zone.webp', imageAlt:'A scavenger detecting anomalies in a hazardous irradiated zone', evidence:'Official', updated:'2026-08-29', answer:'Equip the Anomaly Scanner with key [3], aim towards the distorted hazard zone, and listen closely to the audio feedback. The ping frequency and pitch intensify as you approach the epicenter where rare artifacts manifest. Developer Lucasmml confirmed audio proximity is the primary recovery mechanic.', steps:['Equip the scanner using slot [3] when approaching shimmering distortion fields.','Move slowly in a grid pattern while keeping your audio volume audible.','Follow the accelerating beep cadence until the audio pitch reaches maximum frequency.','Locate the materialized artifact on the ground and secure it in radiation-shielded storage.','Disengage immediately before environmental anomalies trigger lethal thermal or electrical bursts.'], facts:[['Official confirmation','Developer Lucasmml confirmed: Press 3 to equip, aim toward anomaly, move and listen for highest frequency beep.'],['Artifact utility','Artifacts provide passive survival perks and high-tier barter value with specialized faction scientists.']], faq:[['How do I equip the scanner?','Press slot key 3 by default to pull up the handheld detector in your offhand.'],['Why is the scanner beeping faster?','Higher frequency audio directly indicates closer proximity to a harvestable artifact.']], related:['scavland-mist','scavland-loot-and-scavenging','scavland-beginner-guide'], keywords:['scavland anomaly scanner','scavland artifacts','scavland scanner beep'] },
  { slug:'scavland-death-and-loot-recovery', shortTitle:'Death & recovery', title:'Scavland death mechanics and loot recovery guide', description:'How death penalties, dropped backpacks, beacon markers and safe recovery expeditions work in Scavland.', category:'Survival', image:'/images/screenshots/ss_07_underground_corridor.webp', imageAlt:'An underground corridor where a fallen scavenger left supplies', evidence:'Official', updated:'2026-08-29', answer:'Death in Scavland drops your current backpack at the point of failure while preserving your permanent shelter stash and character progression. Equip low-cost secondary kit at your base, mark the death coordinate on your map, and execute a focused extraction run to reclaim your lost items.', steps:['Respawn at your safehouse and review the death location beacon on your overworld map.','Equip inexpensive backup weapons and basic medical items rather than your best stash gear.','Clear the perimeter of hostile mutants or scavengers before attempting to loot your old corpse.','Transfer critical items into your active backpack and retreat along your cleared exit route.'], facts:[['Persistence model','Full loot drop upon death with persistent world state; dropped backpacks remain until retrieved or overwritten.'],['Risk management','Never risk your primary loadout on a high-threat recovery run without recon.']], faq:[['Do I lose everything permanently when I die?','No. Your dropped backpack stays in the game world, and your home base stash remains 100% safe.'],['Can other scavengers loot my bag?','In high-traffic hostile zones, local NPC scavengers may patrol near your remains.']], related:['scavland-beginner-guide','scavland-weapons-and-attachments','scavland-loot-and-scavenging'], keywords:['scavland death mechanics','scavland recover loot','scavland backpack drop'] },
  { slug:'scavland-weapons-and-attachments', shortTitle:'Weapons & attachments', title:'Scavland weapons and attachments guide', description:'How to think about Scavland weapons, gear and attachment choices without pretending unverified stats are final.', category:'Gear', image:'/images/cards/card_2_weapons_gear.webp', imageAlt:'Weapon and equipment management in Scavland', evidence:'Official', updated:'2026-08-29', answer:'Build a weapon around the job you are taking, then spend scarce attachment resources on control and reliability before chasing a theoretical best setup. Official material confirms 25+ weapons, 300+ attachments, and future dedicated weapon modding and ammo stack unloading systems.', steps:['Choose a reliable primary for the location and threat mix.','Keep a low-cost fallback weapon for runs where loot is uncertain.','Change one attachment at a time so its practical effect is clear.','Unload unused magazine ammunition before selling surplus weapons to traders.'], facts:[['Official scope','The Steam listing advertises 25+ weapons and 300+ attachments.'],['Modding roadmap','Developer Lucasmml confirmed dedicated weapon modding and repair stations are actively in development.']], faq:[['What is the best weapon?','There is no single best weapon; ergonomics, ammunition availability and recoil control dictate field effectiveness.'],['How do I unload ammo?','Developers have confirmed stack-aware vertical slot ammo unloading mechanics for ease of inventory management.']], related:['scavland-beginner-guide','scavland-loot-and-scavenging','scavland-crafting-and-trading'], keywords:['scavland weapons guide','scavland attachments','scavland weapon modding'] },
  { slug:'scavland-loot-and-scavenging', shortTitle:'Loot & scavenging', title:'Scavland loot and scavenging guide', description:'A practical framework for searching ruins, managing inventory space and judging risk while the Scavland loot tables mature.', category:'Resources', image:'/images/screenshots/ss_01_ruins_night.webp', imageAlt:'Night-time scavenging in a ruined building', evidence:'Community demonstration', updated:'2026-08-29', answer:'Treat every loot run as a risk budget: prioritize high-value barter components (spark plugs, lighters, toolboxes) over low-density junk, and extract before pack weight impairs your combat stamina.', steps:['Plan a small route and a return point before entering a ruin.','Prioritize high-tier industrial junk like spark plugs and lighters demanded by base traders.','Keep crowbars and blades for immediate barter until specialized door-breaching mechanics go live.','Maintain dedicated stash containers sorted by medical, ammo, and crafting materials.'], facts:[['Trader preferences','Traders place premium barter value on functional hardware like spark plugs, lighters, and electronic scrap.'],['Tool utility','Crowbars and knives currently function as valuable barter items, with expanded interaction planned for future patches.']], faq:[['Are crowbars useful?','In current builds, sell surplus crowbars to traders for quick cash; lockpicking and container prying will expand in updates.'],['Which junk is most valuable?','Spark plugs, lighters, toolboxes, and electrical components provide the best value-to-weight ratios.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-crafting-and-trading','scavland-beginner-guide'], keywords:['scavland loot guide','scavland scavenging','scavland valuable junk'] },
  { slug:'scavland-quests-and-contracts', shortTitle:'Quests & contracts', title:'Scavland Quests & Contracts Guide: Anatoly & Nadja Job Pools, 24-Hour Reset & Bounties', description:'Verified Early Access guide to Scavland contracts: daily 24-hour job pool refreshes, Anatoly & Nadja contract pools, mutant bounties (Hellhounds, Big Bears, Splatters), and faction reputation payouts.', category:'Progression', image:'/images/cards/card_3_quests_factions.webp', imageAlt:'A settlement where a scavenger can receive jobs from Anatoly and Nadja', evidence:'In-Game Playtest Verification · Early Access Build 25128670 Baseline', updated:'2026-09-06', answer:'Contracts in Scavland operate on an in-game 24-hour cycle or reset upon sleeping in a safehouse bed. In the starting settlement of Zalesye, key brokers Anatoly and Nadja distribute foundational jobs: Anatoly issues supply logistics, scavenging recovery runs, and early Bandit Hunts, while Nadja handles hazardous mutant exterminations. Advanced bounties target apex predators—Hellhounds, armored Big Bears, and toxic Splatters—yielding top-tier cash bounties and faction trust tokens.', steps:['01 · 24-Hour Job Refresh Protocol: Contract offerings rotate every 24 in-game hours or immediately after sleeping in a safehouse bunker bunk. Check with local handlers each morning to claim preferred raid objectives.','02 · Anatoly\'s Logistics & Bandit Tasks: Focus on Anatoly\'s starter contracts in the neutral settlement. His tasks center on recovering high-value electrical parts (spark plugs, relays, wires) and clearing local Bandit camps for reliable early rubles.','03 · Nadja\'s High-Threat Mutant Bounties: Accept combat contracts from Nadja once equipped with automatic firearms. Progress from basic ghoul culls to dangerous priority targets: Hellhounds (fast flanking packs), Big Bears (heavy ballistic defense), and explosive Splatters.','04 · Stacking Geo-Aligned Contracts: You can hold multiple active contracts simultaneously without penalty. Always accept all jobs pointing toward the same sector or underground bunker to maximize loot return per raid.','05 · Faction Standing & Rivalry Consequences: Fulfilling contracts raises reputation with the issuing faction (+50 to +200 Rep), but hunting certain faction-aligned squads causes standing penalties (-100 to -300 Rep). Use diplomat Raisa if you need to reconcile hostile standing.'], facts:[['Contract Reset Interval','Rotates every 24 in-game hours or upon sleeping in a safehouse bed'],['Starting Settlement Handlers','Anatoly (logistics & bandit camps) and Nadja (mutant exterminations)'],['Apex Bounty Targets','Hellhounds, Big Bears, and toxic Splatters award high-tier reputation tokens'],['Contract Concurrency','Multiple contracts can be active simultaneously; stack objectives by map sector'],['Reputation Reconciliation','Diplomat Raisa clears hostile standings (-300 Rep) via courier truce tasks'],['Verified Baseline','Early Access Build 25128670']], faq:[['How often do contract jobs refresh in Scavland?','Contract rosters refresh every 24 in-game hours, or instantly whenever you sleep in a safehouse bed. If current contracts do not fit your gear, sleep to reroll the job pool.'],['Where do I find Anatoly and Nadja?','Both primary contract brokers operate out of the starting neutral settlement in Zalesye near the trader market and safehouse entrance.'],['Which mutant bounties are most dangerous in Act I?','Hellhounds attack in swift packs that flank players, Big Bears absorb massive bullet damage requiring armor-piercing calibers, and Splatters explode in toxic acid upon death.'],['What happens if I fail or abandon a contract?','Standard daily contracts simply expire at the next 24-hour cycle without severe penalty. However, failing critical faction story jobs may incur a minor reputation penalty of -50 Rep.']], related:['scavland-factions-progression-and-traders','scavland-factions-and-reputation','scavland-beginner-guide'], keywords:['scavland quests','scavland contracts','scavland anatoly jobs','scavland nadja bounties','scavland contract reset','scavland mutant extermination'] },
  { slug:'scavland-factions-and-reputation', shortTitle:'Factions & reputation', title:'Scavland Factions & Reputation Guide: 10 Organizations, Vendor Tiers & Raisa Truces', description:'Evidence-based breakdown of Scavland’s 10 wasteland factions: Act I interactive syndicates, vendor tier unlocks, territory borders, and diplomatic truces with Raisa.', category:'Progression', image:'/images/cards/card_3_quests_factions.webp', imageAlt:'Faction interaction and outpost checkpoints across the Zalesye wasteland', evidence:'In-Game Playtest Verification · Early Access Build 25128670 Baseline', updated:'2026-09-06', answer:'Faction standing in Scavland directly controls trade prices, vendor inventory tiers, safehouse access, and roaming patrol hostility. The Early Access release features 6 active Act I factions (Rada, Commonfolk, Acolytes, Mechanists, Palatines, Gunners) alongside 9 named outpost merchants. Fulfilling daily contracts raises reputation (+50 to +200 Rep), while hostile standing (< -300 Rep) triggers shoot-on-sight orders that can be cleared by purchasing diplomatic reconciliation contracts from Raisa.', steps:['01 · Identify Interactive Act I Factions: Concentrate on the 6 active factions operating across the Zalesye sector in Build 25128670. The remaining 4 factions are scheduled for upcoming northern expansions.','02 · Unlock Vendor Inventory Tiers: Specialized traders (such as Mechanists and Gunners) hold military-grade weapons and optical attachments behind Tier 2 and Tier 3 reputation gates.','03 · Leverage Zero-Reputation Merchants: Trader Volodymyr requires zero reputation rank on his entire inventory, making him the premier emergency supplier for fresh spawns and disgraced scavengers.','04 · Avoid Cascading Hostility: Raiding faction checkpoints or completing assassination bounties drops standing with targeted groups. Dropping below -300 Rep makes border sentries permanently hostile.','05 · Clear Hostile Standings with Raisa: If marked hostile by a major syndicate, visit diplomat Raisa at the Neutral Chapel to purchase courier truce tasks and reset reputation back to neutral.'], facts:[['Act I Interactive Factions','6 active groups (Rada, Commonfolk, Acolytes, Mechanists, Palatines, Gunners)'],['Roadmap Factions','4 northern factions scheduled for Act II and Act III expansion releases'],['Zero-Rep Merchant','Trader Volodymyr at Crossroads annex sells weapons with zero rank requirements'],['Hostility Threshold','Reputation below -300 triggers shoot-on-sight sentry engagement'],['Diplomatic Reset','Raisa at Neutral Chapel offers truce courier contracts to restore neutral status'],['Verified Baseline','Early Access Build 25128670']], faq:[['How do I increase faction reputation in Scavland?','Complete repeatable 24-hour daily contracts, turn in requested trade supplies (electronic boards, spark plugs), and eliminate rival bandit threats.'],['Can I trade with factions if I have negative reputation?','Vendors become inaccessible if your standing drops to Hostile (< -300 Rep). However, trader Volodymyr at the Crossroads annex always trades regardless of faction standing.'],['How do I stop a faction from shooting me on sight?','Visit diplomat Raisa at the Neutral Chapel and fulfill a non-violent courier reconciliation contract to reset your reputation back to Neutral (0 Rep).'],['Does Scavland feature full faction wars?','Yes. Factions maintain dynamic border conflicts and checkpoint patrols throughout Zalesye, creating organic firefights during overworld raids.']], related:['scavland-factions-progression-and-traders','scavland-quests-and-contracts','scavland-crafting-and-trading'], keywords:['scavland factions','scavland reputation','scavland 10 factions','scavland raisa reconciliation','scavland volodymyr trader'] },
  { slug:'scavland-mist', shortTitle:'The Mist', title:'Scavland Mist guide: hazards and exploration', description:'What the official material establishes about the Mist, plus a careful field-note format for testing its dangers.', category:'Exploration', image:'/images/cards/card_4_mist_exploration.webp', imageAlt:'A misty hazardous zone in Scavland', evidence:'Official', updated:'2026-08-29', answer:'Prepare for the Mist as an unpredictable environmental hazard. Use your Anomaly Scanner to detect spatial anomalies inside foggy zones, equip gas filters, and always maintain an emergency extraction heading.', steps:['Mark the edge of a Mist zone before committing supplies.','Equip the Anomaly Scanner on hotkey [3] to sweep for hidden spatial anomalies and artifacts.','Monitor radiation counters and filter integrity while operating in dense fog.','Leave an emergency beacon or compass bearing for the return trip.'], facts:[['Official scope','The Mist is a central world mystery and environmental danger.'],['Testing needed','Reliable resistance items, damage values and safe routes remain unverified.']], faq:[['Is the Mist a damage zone?','Yes, dense Mist clusters cause environmental toxicity, sensory disruption, and aggressive mutant spawns.'],['Can artifacts spawn in the Mist?','Yes, high-tier anomalies and valuable artifacts are frequently concentrated within deep Mist pockets.']], related:['scavland-anomaly-scanner-and-artifacts','scavland-map-and-locations','scavland-beginner-guide'], keywords:['scavland mist','scavland mist guide','scavland fog hazards'] },
  { slug:'scavland-map-and-locations', shortTitle:'Map & locations', title:'Scavland map and locations guide', description:'A location-first map guide for settlements, bunkers, ruins and hazardous zones, with evidence labels for every marker.', category:'Exploration', image:'/images/screenshots/ss_08_overworld_map.webp', imageAlt:'Scavland overworld map with location markers', evidence:'Community demonstration', updated:'2026-08-29', answer:'Use the map to plan risk and return routes, not to assume every marker has a fixed loot table. Community imagery can show a location exists; each mechanic or reward still needs a separate source.', steps:['Name a location using the game UI or a clear landmark.','Record access conditions and nearby hazards.','Add a marker only after the location is visible in a source capture.','Link the marker to the guide that explains its actual use.'], facts:[['Evidence level','Authorized community demonstration screenshot; marker details need release-build confirmation.'],['Map policy','No invented coordinates, boss icons or guaranteed loot markers.']], faq:[['Is the full map available?','A complete verified map is not published yet.'],['How are markers verified?','Each marker needs a dated screenshot or repeatable personal test.']], related:['scavland-mist','scavland-loot-and-scavenging','scavland-quests-and-contracts'], keywords:['scavland map','scavland locations'] },
  { slug:'scavland-crafting-and-trading', shortTitle:'Crafting & trading', title:'Scavland crafting and trading guide', description:'A practical starting point for crafting, traders and resource decisions based on the official game loop.', category:'Systems', image:'/images/videos/feature_weapons_crafting.mp4', imageAlt:'Crafting and weapon modification footage from Scavland', evidence:'Official', updated:'2026-08-29', answer:'Keep resources that support your next expedition, prioritize selling high-demand trade items (plugs, lighters, scrap) to NPC merchants, and save specialized components for upcoming crafting stations.', steps:['Sort supplies by immediate survival value and trade value.','Check trader inventory needs (e.g. spark plugs, lighters, toolboxes) before converting items into raw scrap.','Stockpile spare components in your base stash for future crafting and weapon modding recipes.','Track merchant price fluctuations across different faction settlements.'], facts:[['Official scope','Crafting and traders are listed core systems.'],['Unverified','Fixed recipes, prices and best-profit routes are not asserted yet.']], faq:[['What should I craft first?','Medical splints, bandages, and basic ammunition provide the highest survival utility in early expeditions.'],['Which trader items give the best return?','Spark plugs and functional lighters fetch consistently higher barter rates across all major settlement traders.']], related:['scavland-weapons-and-attachments','scavland-loot-and-scavenging','scavland-quests-and-contracts'], keywords:['scavland crafting','scavland trading','scavland merchant guide'] },
  { slug:'scavland-weapon-repair-and-durability', shortTitle:'Repair & Durability', title:'Scavland weapon repair and durability guide: fixing jams & maintenance', description:'How weapon durability, barrel fouling, misfires, cleaning kits, and workbench repair mechanics work in Scavland.', category:'Gear', image:'/images/screenshots/steam_ss_10.webp', imageAlt:'Tactical weapon modification and repair interface in Scavland', evidence:'Official', updated:'2026-08-31', answer:'Weapons in Scavland degrade with every shot fired, taking accelerated wear in muddy or irradiated zones. When condition drops below 50%, jam probability increases exponentially. Use Gun Cleaning Oil and Weapon Repair Kits at safehouse workbenches to restore condition and prevent lethal misfires during firefights.', steps:['Monitor the durability bar on your primary firearm; avoid bringing guns under 40% condition into high-threat bunkers.','Keep Gun Cleaning Oil in your backpack for quick field maintenance (restores +15% condition up to 70%).','Bring damaged firearms to Safehouse Workbench stations for full component restoration using scrap metal and weapon springs.','If a weapon jams during combat, press [R] or reload key to cycle the jammed casing and clear the chamber.','Always strip high-tier optical sights and muzzle suppressors before scrapping worn-out guns.'], facts:[['Jam threshold','Guns above 70% condition have 0% jam rate; below 40% jam rate escalates per burst.'],['Maintenance tiers','Field oil allows quick top-up; workbench overhaul requires springs, metal scrap, and specialized gunsmith tools.']], faq:[['How do I clear a weapon jam?','Press the reload key [R] twice or rack the bolt to eject the defective round and chamber a fresh cartridge.'],['Where do I find weapon repair kits?','Gunsmith workshops in neutral settlements and Soviet military bunker lockers have the highest drop rates.']], related:['scavland-weapons-and-attachments','scavland-crafting-and-trading','scavland-beginner-guide'], keywords:['scavland weapon repair','scavland gun durability','scavland clear jam','scavland gun maintenance'] },
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
    updated: '2026-09-06',
    answer: 'Surviving after dark in Scavland requires fundamental sensory discipline: outside illuminated settlement hubs, your effective visibility collapses to a narrow 10-meter flashlight cone, while aggressive nocturnal stalkers spawn exclusively between 21:00 and 05:30. Unsuppressed rifle fire generates a 200-meter audio ripple that triggers cascading aggro from adjacent ruins, making sub-caliber suppressed handguns, doorway funneling tactics, and swift Shift+Click container looting essential for nocturnal runs.',
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
      ['Why does my character look identical after equipping heavy armor?', 'This is a verified Early Access limitation in Build 25128670. While physical and ballistic damage reduction stats apply correctly in the inventory inspect panel, character sprite updates are scheduled for future content updates.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-death-and-loot-recovery'],
    keywords: ['scavland night survival', 'scavland stealth mechanics', 'scavland audio detection radius', 'scavland night mutants', 'scavland flashlight discipline', 'scavland shift click loot']
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
    description: 'Current multiplayer status for Scavland Early Access: dedicated singleplayer design, developer co-op roadmap plans, Steam Remote Play, and tactical solo survival.',
    category: 'Systems',
    image: '/images/screenshots/steam_ss_06.webp',
    imageAlt: 'Two scavengers holding perimeter defensive positions near a bunker entrance in Scavland',
    evidence: 'Official',
    updated: '2026-09-06',
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
    keywords: ['scavland coop', 'scavland multiplayer', 'scavland play with friends', 'scavland co-op roadmap', 'scavland extraction squad']
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
  }
];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));
