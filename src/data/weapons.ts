export type WeaponCategory = 'all' | 'assault-rifle' | 'battle-rifle' | 'smg' | 'shotgun' | 'sniper' | 'sidearm';

export interface Weapon {
  id: string;
  name: string;
  category: Exclude<WeaponCategory, 'all'>;
  categoryLabel: string;
  caliber: string;
  damage: number;
  rpm: number;
  effectiveRange: string;
  magCapacity: number;
  recoilControl: number; // 0 - 100
  weightKg: number;
  modSlots: string[];
  tier: 'Starter' | 'Mid-Tier' | 'Endgame';
  vendor: string;
  description: string;
  recommendedBuild: string;
}

export interface Attachment {
  category: 'Muzzle' | 'Optics' | 'Grips & Rails' | 'Magazines' | 'Stocks';
  name: string;
  effect: string;
  recoilMod: string;
  ergoMod: string;
  compatibility: string;
  tacticalTip: string;
}

export interface CaliberBallistic {
  caliber: string;
  rounds: string;
  penTier: number; // 1 to 5
  damageRating: string;
  bleedChance: string;
  velocity: string;
  bestUse: string;
}

export const WEAPONS_DATABASE: Weapon[] = [
  // Assault Rifles
  {
    id: 'ak-74m',
    name: 'AK-74M Izhmash',
    category: 'assault-rifle',
    categoryLabel: 'Assault Rifle',
    caliber: '5.45x39mm',
    damage: 42,
    rpm: 650,
    effectiveRange: '60m',
    magCapacity: 30,
    recoilControl: 68,
    weightKg: 3.4,
    modSlots: ['Optic Rail', 'Muzzle', 'Handguard/Grip', 'Magazine', 'Stock'],
    tier: 'Mid-Tier',
    vendor: 'Scavenger Union (Rep 1) / Military Checkpoint Loot',
    description: 'The definitive post-Soviet workhorse. Fires controllable 5.45mm rounds with high velocity and cheap ammo abundance.',
    recommendedBuild: 'PBS-4 Suppressor + Kobra Red Dot + Magpul Foregrip for low-recoil mid-range sweep.'
  },
  {
    id: 'as-val',
    name: 'AS Val Special Recon',
    category: 'assault-rifle',
    categoryLabel: 'Assault Rifle',
    caliber: '9x39mm Subsonic',
    damage: 58,
    rpm: 900,
    effectiveRange: '35m',
    magCapacity: 20,
    recoilControl: 74,
    weightKg: 2.5,
    modSlots: ['Optic Rail', 'Integral Silencer', 'Magazine', 'Stock'],
    tier: 'Endgame',
    vendor: 'Wardens Arsenal (Rep 3) / Classified Lab Bunkers',
    description: 'Integrally suppressed special-purpose rifle. Subsonic 9x39mm rounds punch clean through heavy Tier-4 ceramic plates at close-to-medium quarters.',
    recommendedBuild: '30-rnd SPP Mag + OKP-7 Reflex. Deadly silent assassin build for bunker CQB.'
  },
  {
    id: 'aks-74u',
    name: 'AKS-74U "Krinkov"',
    category: 'assault-rifle',
    categoryLabel: 'Assault Rifle',
    caliber: '5.45x39mm',
    damage: 39,
    rpm: 730,
    effectiveRange: '40m',
    magCapacity: 30,
    recoilControl: 52,
    weightKg: 2.7,
    modSlots: ['Muzzle', 'Optic Mount', 'Grip', 'Magazine'],
    tier: 'Starter',
    vendor: 'Free Trader Outposts / Early Raider Drops',
    description: 'Compact carbine variant favored by stalkers navigating claustrophobic ruin stairwells. Snappy ADS speed with noticeable muzzle flash.',
    recommendedBuild: 'DTK Muzzle Brake to tame vertical rise during full-auto panic sprays.'
  },
  {
    id: 'm4a1-patrol',
    name: 'M4A1 Western Carbine',
    category: 'assault-rifle',
    categoryLabel: 'Assault Rifle',
    caliber: '5.56x45mm NATO',
    damage: 44,
    rpm: 800,
    effectiveRange: '65m',
    magCapacity: 30,
    recoilControl: 79,
    weightKg: 3.1,
    modSlots: ['Picatinny Top', 'Quad Rail', 'Muzzle', 'Buffer Tube Stock', 'Magazine'],
    tier: 'Endgame',
    vendor: 'Foreign Mercenary Outposts / Airdrop Crates',
    description: 'Imported NATO carbine with unparalleled modularity and laser-flat recoil. High repair cost and rare ammo.',
    recommendedBuild: 'Holographic Sight + SureFire Suppressor + 60-rnd Extended Casket Mag.'
  },

  // Battle Rifles
  {
    id: 'akm',
    name: 'AKM Classic',
    category: 'battle-rifle',
    categoryLabel: 'Battle Rifle',
    caliber: '7.62x39mm',
    damage: 54,
    rpm: 600,
    effectiveRange: '70m',
    magCapacity: 30,
    recoilControl: 46,
    weightKg: 3.8,
    modSlots: ['Muzzle', 'Dovetail Optic', 'Grip', 'Magazine', 'Stock'],
    tier: 'Mid-Tier',
    vendor: 'Frontier Caravan / Veteran Patrols',
    description: 'Heavy Soviet caliber designed to break bone and penetrate concrete barricades. Heavy kick requires burst discipline.',
    recommendedBuild: 'Rubber Buttpad + Compensator + 40-rnd Molot RPK Steel Magazine.'
  },
  {
    id: 'fal-battle-rifle',
    name: 'SA58 / FAL Paratrooper',
    category: 'battle-rifle',
    categoryLabel: 'Battle Rifle',
    caliber: '7.62x51mm NATO',
    damage: 72,
    rpm: 550,
    effectiveRange: '85m',
    magCapacity: 20,
    recoilControl: 38,
    weightKg: 4.4,
    modSlots: ['Top Rail', 'Muzzle Brake', 'Underbarrel', 'Stock'],
    tier: 'Endgame',
    vendor: 'Black Market Broker (Rep 3)',
    description: 'Heavy semi/full battle rifle that delivers devastating kinetic impact against armored ex-military wardens and mutant brutes.',
    recommendedBuild: 'Heavy Muzzle Brake + 2.5x Combat Prism Scope. Keep on semi-auto.'
  },

  // SMGs
  {
    id: 'pp-19-bizon',
    name: 'PP-19 Bizon Helical',
    category: 'smg',
    categoryLabel: 'Submachine Gun',
    caliber: '9x18mm Makarov',
    damage: 28,
    rpm: 700,
    effectiveRange: '25m',
    magCapacity: 64,
    recoilControl: 84,
    weightKg: 2.7,
    modSlots: ['Optic Rail', 'Muzzle', 'Flashlight'],
    tier: 'Starter',
    vendor: 'Scavenger Union Trader',
    description: 'Features a massive 64-round helical cylinder. Low per-bullet damage compensated by endless suppressing fire against unarmored mutant swarms.',
    recommendedBuild: 'Green Laser Pointer for pinpoint hip-fire clearing inside infected basements.'
  },
  {
    id: 'mp5a3',
    name: 'MP5A3 Submachine Gun',
    category: 'smg',
    categoryLabel: 'Submachine Gun',
    caliber: '9x19mm Parabellum',
    damage: 34,
    rpm: 800,
    effectiveRange: '30m',
    magCapacity: 30,
    recoilControl: 90,
    weightKg: 2.8,
    modSlots: ['Claw Mount Optic', 'Muzzle Suppressor', 'Handguard', 'Magazine'],
    tier: 'Mid-Tier',
    vendor: 'Smuggler Den / Mercenary Camps',
    description: 'Legendary roller-delayed blowback system offering pinpoint accuracy and practically zero horizontal dispersion.',
    recommendedBuild: 'Tactical Silencer + Aimpoint Micro + 50-rnd Drum. Perfect stealth infiltrator.'
  },
  {
    id: 'ppsh-41',
    name: 'PPSh-41 "Papasha"',
    category: 'smg',
    categoryLabel: 'Submachine Gun',
    caliber: '7.62x25mm Tokarev',
    damage: 31,
    rpm: 1000,
    effectiveRange: '20m',
    magCapacity: 71,
    recoilControl: 62,
    weightKg: 3.6,
    modSlots: ['Drum Mag', 'Stick Mag'],
    tier: 'Starter',
    vendor: 'WWII Bunker Weapon Caches / Salvage',
    description: 'Relic of the Great War that chews through high-velocity Tokarev rounds at 1,000 RPM. Melts soft targets instantly.',
    recommendedBuild: '71-rnd Drum with surplus 7.62x25mm for budget bunker farming.'
  },

  // Shotguns
  {
    id: 'toz-34',
    name: 'TOZ-34 Over/Under',
    category: 'shotgun',
    categoryLabel: 'Shotgun',
    caliber: '12-Gauge Buck/Slug',
    damage: 130,
    rpm: 240,
    effectiveRange: '15m',
    magCapacity: 2,
    recoilControl: 40,
    weightKg: 3.1,
    modSlots: ['Choke', 'Sling'],
    tier: 'Starter',
    vendor: 'Every Village Trader / Starting Gear',
    description: 'Every scavenger’s first faithful companion. Double-barrel instant double-tap delivers 260 damage at point-blank range.',
    recommendedBuild: 'Full Choke tube loaded with Heavy Buckshot for charging boar and blind dogs.'
  },
  {
    id: 'saiga-12k',
    name: 'Saiga-12K Tactical Semi-Auto',
    category: 'shotgun',
    categoryLabel: 'Shotgun',
    caliber: '12-Gauge Buck/Slug/Dart',
    damage: 115,
    rpm: 320,
    effectiveRange: '20m',
    magCapacity: 10,
    recoilControl: 58,
    weightKg: 3.6,
    modSlots: ['Optic Rail', 'Muzzle Choke', 'Foregrip', 'Box Magazine', 'Stock'],
    tier: 'Endgame',
    vendor: 'Wardens Heavy Quartermaster (Rep 2+)',
    description: 'Magazine-fed semi-automatic combat shotgun built on the AK platform. Demolishes elite mutated monstrosities in seconds.',
    recommendedBuild: '10-rnd Box Mag + Tactical Muzzle Brake + EOTech Holo Sight.'
  },
  {
    id: 'mp-133-pump',
    name: 'MP-133 Pump Action',
    category: 'shotgun',
    categoryLabel: 'Shotgun',
    caliber: '12-Gauge',
    damage: 120,
    rpm: 70,
    effectiveRange: '18m',
    magCapacity: 6,
    recoilControl: 50,
    weightKg: 3.2,
    modSlots: ['Extended Tube (+2)', 'Choke', 'Tactical Forend'],
    tier: 'Starter',
    vendor: 'Free Trader Outposts',
    description: 'Rugged pump shotgun that never jams even when dipped in toxic marsh mud. Highly reliable early-game defense.',
    recommendedBuild: 'Extended 8-shell magazine tube and tight modified choke.'
  },

  // Snipers & DMRs
  {
    id: 'mosin-nagant',
    name: 'Mosin-Nagant 1891/30 Sniper',
    category: 'sniper',
    categoryLabel: 'Sniper Rifle',
    caliber: '7.62x54mmR',
    damage: 110,
    rpm: 35,
    effectiveRange: '120m+',
    magCapacity: 5,
    recoilControl: 30,
    weightKg: 4.1,
    modSlots: ['PU Scope Mount', 'Bayonet/Brake', 'Cheek Rest'],
    tier: 'Starter',
    vendor: 'Old Forester NPC / Scavenger Stash',
    description: 'Bolt-action rifle renowned for extreme bullet velocity and one-shot headshot lethality on human snipers.',
    recommendedBuild: '3.5x PU Scope + Padded Leather Cheek Rest for steady crosshair hold.'
  },
  {
    id: 'svd-dragunov',
    name: 'SVD Dragunov DMR',
    category: 'sniper',
    categoryLabel: 'Designated Marksman',
    caliber: '7.62x54mmR',
    damage: 96,
    rpm: 280,
    effectiveRange: '110m',
    magCapacity: 10,
    recoilControl: 54,
    weightKg: 4.3,
    modSlots: ['Dovetail Optic', 'Muzzle Suppressor', 'SVD Polymer Stock', 'Magazine'],
    tier: 'Endgame',
    vendor: 'Wardens Sniper Division / High-Tier Stash',
    description: 'Semi-automatic designated marksman rifle. Rapidly puts down fortified guard towers and patrol squads from beyond visual range.',
    recommendedBuild: 'PSO-1 4x Scope + TGP-V Suppressor for completely undetectable long-range strikes.'
  },
  {
    id: 'vss-vintorez',
    name: 'VSS Vintorez Sniper Carbine',
    category: 'sniper',
    categoryLabel: 'Special Sniper',
    caliber: '9x39mm Subsonic',
    damage: 75,
    rpm: 700,
    effectiveRange: '60m',
    magCapacity: 10,
    recoilControl: 80,
    weightKg: 2.6,
    modSlots: ['Dovetail Scope', '20-rnd Magazine', 'Wooden Skeleton Stock'],
    tier: 'Endgame',
    vendor: 'Classified Anomaly Laboratory Vaults',
    description: 'The holy grail of covert marksmen. Fires heavy armor-piercing subsonic rounds with zero sonic boom.',
    recommendedBuild: '1P78 Kashtan Scope + 20-rnd AS Val Mag. One of the best guns in all of Zalesye.'
  },

  // Handguns & Sidearms
  {
    id: 'makarov-pm',
    name: 'Makarov PM Standard',
    category: 'sidearm',
    categoryLabel: 'Sidearm',
    caliber: '9x18mm Makarov',
    damage: 26,
    rpm: 350,
    effectiveRange: '15m',
    magCapacity: 8,
    recoilControl: 85,
    weightKg: 0.73,
    modSlots: ['Threaded Barrel Suppressor', 'Bakelite Grip'],
    tier: 'Starter',
    vendor: 'Standard Default Loadout / Ubiquitous',
    description: 'Pocket-sized emergency sidearm. 0.73 kg carry weight means zero stamina penalty. Keep it loaded for when your main gun clicks empty.',
    recommendedBuild: 'Threaded barrel with improvised oil filter suppressor.'
  },
  {
    id: 'tt-33',
    name: 'TT-33 Tokarev Service Pistol',
    category: 'sidearm',
    categoryLabel: 'Sidearm',
    caliber: '7.62x25mm Tokarev',
    damage: 38,
    rpm: 380,
    effectiveRange: '22m',
    magCapacity: 8,
    recoilControl: 68,
    weightKg: 0.85,
    modSlots: ['Muzzle Brake', 'Extended Baseplate Mag'],
    tier: 'Starter',
    vendor: 'Scavenger Union / Patrol Bodies',
    description: 'High chamber pressure gives the 7.62x25mm cartridge astonishing penetration through basic Kevlar vests.',
    recommendedBuild: 'Compensated barrel + high-power Tokarev steel-core ammo.'
  },
  {
    id: 'stechkin-aps',
    name: 'Stechkin APS Machine Pistol',
    category: 'sidearm',
    categoryLabel: 'Sidearm',
    caliber: '9x18mm Makarov',
    damage: 29,
    rpm: 750,
    effectiveRange: '20m',
    magCapacity: 20,
    recoilControl: 60,
    weightKg: 1.2,
    modSlots: ['Wooden Holster Stock', 'Threaded Suppressor', '20-rnd Mag'],
    tier: 'Mid-Tier',
    vendor: 'Elite Bandit Leaders / Black Market',
    description: 'Full-automatic select-fire sidearm. When fitted with its wooden holster-stock, functions as an ultra-compact submachine gun.',
    recommendedBuild: 'Wooden Holster-Stock attached: eliminates 45% of vertical climb.'
  }
];

export const ATTACHMENTS_CATALOG: Attachment[] = [
  {
    category: 'Muzzle',
    name: 'PBS-4 5.45mm Suppressor',
    effect: 'Reduces firing sound signature by 75%; eliminates night muzzle flash.',
    recoilMod: '-8% Vertical Kick',
    ergoMod: '-4 ADS Speed',
    compatibility: 'AK-74M, AKS-74U',
    tacticalTip: 'Essential for avoiding horde alarms during night raids.'
  },
  {
    category: 'Muzzle',
    name: 'DTK-2 Muzzle Brake & Compensator',
    effect: 'Aggressively vents propellant gases upward to pull barrel down.',
    recoilMod: '-22% Vertical Recoil',
    ergoMod: '-2 ADS Speed',
    compatibility: 'AK-74M, AKM',
    tacticalTip: 'Best in slot for full-auto firefights against armored squads.'
  },
  {
    category: 'Optics',
    name: 'Kobra EKP-1S-03 Reflex Sight',
    effect: 'Wide open optic hood with 4 selectable reticle styles (dot, chevron, cross).',
    recoilMod: 'Neutral',
    ergoMod: '+10% Target Acquisition',
    compatibility: 'All Soviet Dovetail Mounts (AK, SVD, Saiga)',
    tacticalTip: 'Top tier CQB optic for quick acquisition inside dark bunker corridors.'
  },
  {
    category: 'Optics',
    name: 'PSO-1 4x Sniper Scope',
    effect: 'Includes built-in 1.7m stadiametric rangefinder and glowing illuminated chevron.',
    recoilMod: 'Neutral',
    ergoMod: '-8% ADS Speed',
    compatibility: 'SVD Dragunov, AK-74M, AS Val',
    tacticalTip: 'Allows exact range calculation without exposing yourself to counter-sniper fire.'
  },
  {
    category: 'Grips & Rails',
    name: 'Zenitco RK-0 Angled Foregrip',
    effect: 'Reinforced CNC aluminum ergonomic grip that steadies rapid follow-up shots.',
    recoilMod: '-14% Horizontal Kick',
    ergoMod: '+6% Ergonomics',
    compatibility: 'Picatinny Rail Handguards',
    tacticalTip: 'Eliminates side-to-side rifle drift during sustained bursts.'
  },
  {
    category: 'Magazines',
    name: '60-rnd Quad-Stack 5.45x39mm Casket Mag',
    effect: 'Doubles standard magazine capacity without increasing weapon slot height.',
    recoilMod: '+2% Steady Weight',
    ergoMod: '-15% Reload Speed',
    compatibility: 'AK-74M, AKS-74U',
    tacticalTip: 'Invaluable during extraction countdowns against relentless mutant waves.'
  },
  {
    category: 'Stocks',
    name: 'PT-1 Zenitco "Klassika" Telescopic Stock',
    effect: 'Foldable aircraft-grade aluminum stock with adjustable cheek pad elevation.',
    recoilMod: '-18% Overall Recoil',
    ergoMod: '+8% ADS Speed',
    compatibility: 'Folding AK Platform',
    tacticalTip: 'The ultimate endgame stock modification for precision assault rifles.'
  }
];

export const BALLISTICS_CHART: CaliberBallistic[] = [
  {
    caliber: '5.45x39mm',
    rounds: '7N6 / 7N10 (PP) / 7N22 (BP)',
    penTier: 3,
    damageRating: 'Moderate (42)',
    bleedChance: '35%',
    velocity: '880 m/s',
    bestUse: 'Standard general-purpose infantry caliber. High velocity, laser-flat trajectory, abundant loot.'
  },
  {
    caliber: '7.62x39mm',
    rounds: 'M43 Surplus / BP Armor Piercing',
    penTier: 4,
    damageRating: 'High (54)',
    bleedChance: '45%',
    velocity: '715 m/s',
    bestUse: 'Heavy kinetic barrier penetrator. Punches through wooden fences and thin sheet metal cover.'
  },
  {
    caliber: '9x39mm Subsonic',
    rounds: 'SP-5 Sniper / SP-6 Armor Piercing',
    penTier: 5,
    damageRating: 'Very High (58 - 75)',
    bleedChance: '50%',
    velocity: '290 m/s (Subsonic)',
    bestUse: 'Endgame stealth raids. Completely silent with suppressors and ignores Tier-4 body armor.'
  },
  {
    caliber: '7.62x54mmR',
    rounds: 'LPS / 7N1 Sniper / 7N14 AP',
    penTier: 5,
    damageRating: 'Extreme (96 - 110)',
    bleedChance: '65%',
    velocity: '830 m/s',
    bestUse: 'Heavy sniper rounds. One-hit kill potential to the head against all humanoid enemies.'
  },
  {
    caliber: '9x19mm Parabellum',
    rounds: 'PSO / 7N21 High Pressure',
    penTier: 2,
    damageRating: 'Low-Medium (34)',
    bleedChance: '25%',
    velocity: '375 m/s',
    bestUse: 'Bunker swarms, mutant packs, and light reconnaissance sidearm ammunition.'
  },
  {
    caliber: '12-Gauge',
    rounds: '00 Buckshot / Lead Slug / Flechette',
    penTier: 2,
    damageRating: 'Devastating (115 - 130)',
    bleedChance: '70%',
    velocity: '400 m/s',
    bestUse: 'Close-quarters door breaching, clearing blind corners, and staggering massive mutants.'
  }
];
