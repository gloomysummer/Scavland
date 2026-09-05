export interface Faction {
  id: string;
  name: string;
  codeName: string;
  territory: string;
  alignment: 'Neutral' | 'Guarded' | 'Ideological' | 'Mercenary' | 'Hostile' | 'Roadmap Phase 2';
  alignmentColor: string;
  summary: string;
  ideology: string;
  keyServices: string[];
  reconciliationRisk: string;
  exclusiveGear: string;
  confirmedStatus: 'Confirmed Named (v0.5.117)' | 'Roadmap Unreleased';
}

export interface Trader {
  name: string;
  title: string;
  location: string;
  specialty: string;
  criticalNote: string;
  reputationGated: boolean;
  priorityStock: string[];
}

export interface MedicalItem {
  id: string;
  name: string;
  category: 'First Aid' | 'Trauma Care' | 'Pain Management' | 'Hydration & Counter';
  healAmount: string;
  bleedStop: string;
  thirstImpact: string; // e.g. "-30 Hydration (Severe)"
  useTimeSec: number;
  recommendedSituation: string;
  traderSource: string;
}

export const FACTIONS_DATABASE: Faction[] = [
  {
    id: 'rada',
    name: 'Rada Council',
    codeName: 'Rada',
    territory: 'Central Administrative Sector & Safe Enclave',
    alignment: 'Guarded',
    alignmentColor: '#e39155',
    summary: 'The bureaucratic and military remnant of the pre-Mist regional council. They control key infrastructure, central checkpoints, and state ammunition stocks.',
    ideology: 'Restoration of strict pre-incident rule of law, centralization of all recovered Soviet technology, and eradication of unaligned scavengers.',
    keyServices: ['Official state bounties', 'High-tier military ammunition exchange', 'Bunker security clearances'],
    reconciliationRisk: 'Attacking Rada patrols triggers high-bounty hunter ambushes on paved highways. Raisa can broker a truce for substantial technological scrap.',
    exclusiveGear: 'Official Rada Officer Armband, Tier-4 Body Armor Vest, 5.45x39mm 7N22 BP Ammunition crates',
    confirmedStatus: 'Confirmed Named (v0.5.117)'
  },
  {
    id: 'commonfolk',
    name: 'The Commonfolk Union',
    codeName: 'Commonfolk',
    territory: 'Crossroads Village & Agricultural Outposts',
    alignment: 'Neutral',
    alignmentColor: '#00ffaa',
    summary: 'Decentralized mutual-defense collective formed by everyday survivors, farmers, scavengers, and mechanics trying to subsist away from faction wars.',
    ideology: 'Pragmatic survival, community mutual aid, barter economy, and shared access to clean water wells.',
    keyServices: ['Cheap staple food and clean water', 'Basic medical triage', 'Safehouse stash locker renting'],
    reconciliationRisk: 'Extremely forgiving. Stealing from their storage bins lowers reputation, easily restored through trade donations to Grigory.',
    exclusiveGear: 'Quilted Padded Stalker Jacket, Improvised Backpack Frames, Low-cost Purified Water filtration recipes',
    confirmedStatus: 'Confirmed Named (v0.5.117)'
  },
  {
    id: 'acolytes',
    name: 'The Mist Acolytes',
    codeName: 'Acolytes',
    territory: 'Irradiated Wetlands & Anomaly Field Shrines',
    alignment: 'Ideological',
    alignmentColor: '#b9e86c',
    summary: 'A secretive quasi-religious cult obsessed with the radioactive green fog. They view the Mist as a purifying evolutionary event rather than a disaster.',
    ideology: 'Sacred symbiosis with anomalous radiation. They harvest glowing mutant flora and craft esoteric chemical compounds.',
    keyServices: ['High-tier gas mask filter regeneration', 'Anomaly scanner calibration', 'Rare artifact purchasing'],
    reconciliationRisk: 'Attacking Acolyte shrines makes their territory lethal—they will snipe you with silenced rifles while you struggle in toxic fog.',
    exclusiveGear: 'Cultist Gas Hood (Max Chem Resistance), Organic Stimulant Salves, Anomaly Resonance Beacons',
    confirmedStatus: 'Confirmed Named (v0.5.117)'
  },
  {
    id: 'mechanists',
    name: 'Mechanists Guild',
    codeName: 'Mechanists',
    territory: 'Industrial Railway Depot & Metal Workshop',
    alignment: 'Neutral',
    alignmentColor: '#00ffaa',
    summary: 'Pragmatic engineers, machinists, and gunsmiths who hoard machine tools, welding equipment, and technical schematics from abandoned factories.',
    ideology: 'Engineering sovereignty. They believe only proper industrial maintenance, weapon blueprint recovery, and electrical power will rebuild Zalesye.',
    keyServices: ['Safehouse Workbench upgrades (Tier 1-3)', 'Weapon receiver ultrasonic restoration', 'Machined screws and spring supply'],
    reconciliationRisk: 'Refusing their repair contracts increases repair costs across all affiliated workshops by 30%.',
    exclusiveGear: 'Gunsmith Toolsets, High-durability Barrel Liners, Precision CNC Muzzle Brakes (DTK-2)',
    confirmedStatus: 'Confirmed Named (v0.5.117)'
  },
  {
    id: 'palatines',
    name: 'Palatines Executive Security',
    codeName: 'Palatines',
    territory: 'Bunker 02 Perimeter & Radio Relay Tower',
    alignment: 'Guarded',
    alignmentColor: '#e39155',
    summary: 'Corporate and oligarchic private security contractors deployed before the collapse. Highly disciplined, ruthlessly pragmatic, and equipped with Western gear.',
    ideology: 'Securing classified research documents, containment of genetic mutations, and guarding high-value extraction corridors.',
    keyServices: ['NATO weapon sales (5.56mm / 7.62x51mm)', 'Advanced tactical optics (Aimpoint/EOTech)', 'High-threat extraction escort'],
    reconciliationRisk: 'Extremely hostile if triggered. They use thermal optics and patrol in three-man fireteams.',
    exclusiveGear: 'SA58 Paratrooper Battle Rifle, Crye Precision Heavy Helmets, 60-rnd NATO Casket Magazines',
    confirmedStatus: 'Confirmed Named (v0.5.117)'
  },
  {
    id: 'gunners',
    name: 'Gunners Syndicate',
    codeName: 'Gunners',
    territory: 'Quarry Ruins & Old Factory Perimeters',
    alignment: 'Mercenary',
    alignmentColor: '#ffaa00',
    summary: 'Hardened mercenary syndicate that operates on a strictly transactional basis. If you have rubles or rare ammo, they are your best friends; if not, you are prey.',
    ideology: 'Pure profit, mercenary contracts, heavy firepower dominance, and territorial tribute collection.',
    keyServices: ['High-caliber assassination bounties', 'Explosives and grenade barter', 'Heavy machine gun parts'],
    reconciliationRisk: 'High. Failing or abandoning a Gunner contract marks you as a debt defaulter with roaming hit-squads.',
    exclusiveGear: 'Saiga-12K Custom Tactical Breacher, 40-rnd Molot RPK Magazines, Heavy Frag Grenades',
    confirmedStatus: 'Confirmed Named (v0.5.117)'
  },

  // Roadmap Unreleased Factions
  {
    id: 'bunker-wardens-sub',
    name: 'Subterranean Wardens',
    codeName: 'Wardens (Phase 2)',
    territory: 'Deep Soviet Nuclear Silos (Locked)',
    alignment: 'Roadmap Phase 2',
    alignmentColor: '#888',
    summary: 'Subterranean isolationist soldiers sealed inside deep nuclear silos since the first outbreak. Known only through intercepted radio broadcasts.',
    ideology: 'Absolute isolation and automated defense protocol enforcement.',
    keyServices: ['Planned deep underground trade hub'],
    reconciliationRisk: 'Unreleased in Early Access Act I.',
    exclusiveGear: 'Soviet Heavy Titanium Exoskeleton (Roadmap Phase 2)',
    confirmedStatus: 'Roadmap Unreleased'
  },
  {
    id: 'marsh-marauders',
    name: 'Northern Marauder Clans',
    codeName: 'Marauders (Phase 3)',
    territory: 'Northern Radioactive Bog (Act II Map Expansion)',
    alignment: 'Roadmap Phase 2',
    alignmentColor: '#888',
    summary: 'Feral raider factions roaming the uncharted northern perimeters beyond the current river boundary.',
    ideology: 'Total anarchy, pillage, and scavenging.',
    keyServices: ['Raid targets only'],
    reconciliationRisk: 'Unreleased in Early Access Act I.',
    exclusiveGear: 'Improvised Sawed-off Double Barrels & Barbed Armor (Roadmap)',
    confirmedStatus: 'Roadmap Unreleased'
  },
  {
    id: 'ecologist-mobile',
    name: 'State Ecological Expedition',
    codeName: 'Ecologists (Phase 2)',
    territory: 'Mobile Bio-Lab Convoy (Act II)',
    alignment: 'Roadmap Phase 2',
    alignmentColor: '#888',
    summary: 'Government-funded scientific survey units sent to chart the biological progression of the Mist phenomenon.',
    ideology: 'Empirical scientific isolation and containment.',
    keyServices: ['Artifact synthesis laboratory'],
    reconciliationRisk: 'Unreleased in Early Access Act I.',
    exclusiveGear: 'SEVA Closed-Cycle Hazard Suits (Roadmap)',
    confirmedStatus: 'Roadmap Unreleased'
  },
  {
    id: 'black-market-consortium',
    name: 'Outland Smuggler Ring',
    codeName: 'Smugglers (Phase 3)',
    territory: 'Sub-Rail Transit Tunnels (Act III)',
    alignment: 'Roadmap Phase 2',
    alignmentColor: '#888',
    summary: 'Cross-border contraband syndicate capable of smuggling foreign high-tech hardware into the exclusion zone.',
    ideology: 'Unregulated shadow trade.',
    keyServices: ['Foreign currency exchange and rare imported weapons'],
    reconciliationRisk: 'Unreleased in Early Access Act I.',
    exclusiveGear: 'Night-Vision Monoculars & Suppressed PDWs (Roadmap)',
    confirmedStatus: 'Roadmap Unreleased'
  }
];

export const TRADERS_DATABASE: Trader[] = [
  {
    name: 'Volodymyr',
    title: 'The Unrestricted Trader',
    location: 'Crossroads Safehouse Annex',
    specialty: 'Weapons, ammo, and survival gear for new stalkers',
    criticalNote: 'CRITICAL VALUE: 100% of Volodymyr’s inventory has ZERO Rank/Reputation requirement. Essential refuge for early progression or players with ruined faction standing.',
    reputationGated: false,
    priorityStock: ['Makarov PM', 'AKS-74U Basic', '9x18mm / 5.45mm Standard Surplus', 'Canvas Backpack']
  },
  {
    name: 'Nadja',
    title: 'Hardware & Machine Parts Purveyor',
    location: 'Mechanists Railway Workshop',
    specialty: 'Industrial screws, fasteners, springs, and workbench parts',
    criticalNote: 'BUILD v0.5.117 UPDATE: Developers significantly boosted Nadja’s screw (Screws) inventory to ease safehouse workbench construction bottlenecks.',
    reputationGated: true,
    priorityStock: ['Box of Steel Screws', 'Recoiling Springs', 'Gun Cleaning Solvent', 'Blowtorch Fuel']
  },
  {
    name: 'Sasha',
    title: 'Wasteland Armorer',
    location: 'Gunners Outpost Bastion',
    specialty: 'Heavy weapon chassis, muzzle devices, and assault rifles',
    criticalNote: 'CRITICAL NOTE (v0.5.117): Sasha NO LONGER sells the 3-Line Mosin-Nagant (03). Players must loot it from sniper corpses or find it in Forester Stashes.',
    reputationGated: true,
    priorityStock: ['AK-74M Izhmash', 'PBS-4 Silencer', 'Zenitco RK-0 Foregrip', 'Saiga 10-rnd Box Mags']
  },
  {
    name: 'Raisa',
    title: 'Faction Diplomatic Intermediary',
    location: 'Neutral Chapel Outpost',
    specialty: 'Reconciliation Contracts & Faction Truces',
    criticalNote: 'CORE MECHANIC: If you become hostile with Rada, Gunners, or Acolytes, visit Raisa to purchase reconciliation courier missions to restore neutral standing.',
    reputationGated: false,
    priorityStock: ['Diplomatic Safe-Pass Permits', 'Reconciliation Bounty Contracts', 'Forged ID Papers']
  },
  {
    name: 'Grigory',
    title: 'General Provisioner',
    location: 'Commonfolk Settlement Center',
    specialty: 'Food, potable water, bandages, and AI-2 first-aid kits',
    criticalNote: 'Primary day-one restock hub. If your hunger or radiation spikes after an extraction, Grigory is your most affordable medical refuel.',
    reputationGated: false,
    priorityStock: ['AI-2 Orange Medkit', 'Medical Bandages', 'Canned Beef Tushonka', 'Purified Bottled Water']
  },
  {
    name: 'Jasna',
    title: 'Quartermaster & Hydration Specialist',
    location: 'Commonfolk Outskirts Well',
    specialty: 'Water canteens, chemical water tablets, and travel gear',
    criticalNote: 'ESSENTIAL GEAR: Sells Military Canteens. Essential purchase to counteract the severe dehydration caused by painkiller/morphine usage.',
    reputationGated: false,
    priorityStock: ['Aluminum Military Canteen (1L)', 'Water Purification Tablets', 'Stalker Flask']
  },
  {
    name: 'Marco',
    title: 'Smuggler & Contraband Dealer',
    location: 'Basement Bar behind Train Depot',
    specialty: 'Moonshine, Baikal Soda, glowing mushrooms, cigarettes',
    criticalNote: 'Barter and morale specialist. Baikal Soda cures severe morphine thirst; cigarettes calm sniper aim sway during high-radiation storms.',
    reputationGated: false,
    priorityStock: ['Baikal Soda Bottle', 'Distilled Moonshine', 'Rad-Absorbing Mushrooms', 'Red Star Cigarettes']
  },
  {
    name: 'Olga',
    title: 'Bulk Goods Merchant',
    location: 'Warehouse Dock 3',
    specialty: 'Heavy bulk supplies, industrial crates, and building steel',
    criticalNote: 'Stocks larger batch quantities than regular vendors, but shop refresh cycle takes 3 full in-game days.',
    reputationGated: true,
    priorityStock: ['Industrial Metal Plates', 'Storage Locker Upgrade Kits', 'Bulk 5.45mm Spam Cans']
  },
  {
    name: 'Anatoly',
    title: 'Covert Black Market Broker',
    location: 'Secret Bunker 04 Drainage Exit',
    specialty: 'High-end classified technology and special optics',
    criticalNote: 'Only appears between 22:00 and 04:00 night hours in Zalesye. Demands pristine anomaly artifacts for top-tier military gear.',
    reputationGated: true,
    priorityStock: ['1P78 Kashtan Combat Scope', 'AS Val 30-rnd SPP Mags', 'Night Vision Battery Cells']
  }
];

export const MEDICAL_DATABASE: MedicalItem[] = [
  {
    id: 'ai-2',
    name: 'AI-2 Individual First Aid Kit (Orange Box)',
    category: 'First Aid',
    healAmount: '+35 HP instantly',
    bleedStop: 'Light Bleed (60% chance)',
    thirstImpact: '0 Hydration Loss',
    useTimeSec: 2.5,
    recommendedSituation: 'Basic field triage during quiet moments; low cost staple.',
    traderSource: 'Grigory (Cheap) / Common Loot'
  },
  {
    id: 'ifak',
    name: 'IFAK Tactical Medical Kit',
    category: 'Trauma Care',
    healAmount: '+75 HP over 6 seconds',
    bleedStop: 'Heavy Bleed 100% + Light Bleed 100%',
    thirstImpact: '-5 Hydration',
    useTimeSec: 4.0,
    recommendedSituation: 'Severe firefights with multiple shrapnel wounds and heavy bleeding.',
    traderSource: 'Rada Quartermaster / Palatines'
  },
  {
    id: 'bandage',
    name: 'Sterile Gauze Bandage',
    category: 'First Aid',
    healAmount: '+10 HP',
    bleedStop: 'Heavy Bleed 100% Stop',
    thirstImpact: '0 Hydration Loss',
    useTimeSec: 1.8,
    recommendedSituation: 'Fastest bleed stopper. Keep at least 2 on your hotbar [4] or [5].',
    traderSource: 'Grigory / All Traders'
  },
  {
    id: 'morphine',
    name: 'Morphine Injector Ampoule',
    category: 'Pain Management',
    healAmount: '0 HP (Temporarily ignores limb fractures & tremors)',
    bleedStop: 'None',
    thirstImpact: '-35 Hydration (CRITICAL THIRST SPIKE)',
    useTimeSec: 1.5,
    recommendedSituation: 'Emergency extraction dash with broken legs. WARNING: Must drink immediately after or suffer dehydration damage.',
    traderSource: 'Marco / Acolytes / High-tier Stashes'
  },
  {
    id: 'pills-analgesic',
    name: 'Analgesic Painkiller Tablets',
    category: 'Pain Management',
    healAmount: '+5 HP (Eliminates pain blur for 180s)',
    bleedStop: 'None',
    thirstImpact: '-15 Hydration',
    useTimeSec: 2.0,
    recommendedSituation: 'Pre-combat prep before entering hostile bunker hallways.',
    traderSource: 'Grigory / Marco'
  },
  {
    id: 'baikal-soda',
    name: 'Baikal Herbal Soda',
    category: 'Hydration & Counter',
    healAmount: '+15 HP + Rapid Stamina Regen',
    bleedStop: 'None',
    thirstImpact: '+65 Hydration (Full Recovery)',
    useTimeSec: 2.0,
    recommendedSituation: 'Immediate counter to Morphine/Painkiller dehydration spikes.',
    traderSource: 'Marco'
  },
  {
    id: 'canteen-water',
    name: 'Purified Water Canteen (1L)',
    category: 'Hydration & Counter',
    healAmount: 'Stabilizes heart rate & max stamina',
    bleedStop: 'None',
    thirstImpact: '+100 Hydration (3 multi-use sips)',
    useTimeSec: 2.5,
    recommendedSituation: 'Deep radiation marsh expeditions where natural water sources are contaminated.',
    traderSource: 'Jasna Exclusive'
  }
];
