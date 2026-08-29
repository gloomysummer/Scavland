export interface MediaAsset {
  path: string;
  kind: 'screenshot' | 'card' | 'video' | 'community';
  caption: string;
  source: string;
  license: string;
  evidenceLevel: 'Official' | 'Community demonstration' | 'Personal in-game test';
}

export const media: MediaAsset[] = [
  { path:'/images/hero/page_bg_raw.jpg', kind:'screenshot', caption:'Authorized Scavland world background', source:'Official store asset pack', license:'Authorized for this site', evidenceLevel:'Official' },
  { path:'/images/hero/header.jpg', kind:'card', caption:'Scavland header artwork', source:'Official store asset pack', license:'Authorized for this site', evidenceLevel:'Official' },
  { path:'/images/cards/card_1_beginner_guide.jpg', kind:'card', caption:'Beginner survival route', source:'Official store asset pack', license:'Authorized for this site', evidenceLevel:'Official' },
  { path:'/images/cards/card_2_weapons_gear.jpg', kind:'card', caption:'Weapons & attachments interface', source:'Official store asset pack', license:'Authorized for this site', evidenceLevel:'Official' },
  { path:'/images/cards/card_3_quests_factions.jpg', kind:'card', caption:'Settlement quests & faction hubs', source:'Official store asset pack', license:'Authorized for this site', evidenceLevel:'Official' },
  { path:'/images/cards/card_4_mist_exploration.jpg', kind:'card', caption:'Hazardous Mist anomaly zone', source:'Official store asset pack', license:'Authorized for this site', evidenceLevel:'Official' },
  { path:'/images/screenshots/ss_08_overworld_map.jpg', kind:'screenshot', caption:'Overworld map reference', source:'Official Steam media', license:'Authorized for this site', evidenceLevel:'Official' },
  { path:'/images/screenshots/ss_09_radioactive_zone.jpg', kind:'screenshot', caption:'Irradiated hazard zone anomaly sweep', source:'Official Steam media', license:'Authorized for this site', evidenceLevel:'Official' },
  { path:'/images/screenshots/ss_07_underground_corridor.jpg', kind:'screenshot', caption:'Underground bunker corridor and tactical engagement', source:'Official Steam media', license:'Authorized for this site', evidenceLevel:'Official' },
  { path:'/images/screenshots/steam_ss_01.jpg', kind:'screenshot', caption:'Tactical night scavenging and ruin exploration', source:'Steam Store Direct 1080p', license:'Official Game Screenshot', evidenceLevel:'Official' },
  { path:'/images/screenshots/steam_ss_02.jpg', kind:'screenshot', caption:'Underground industrial bunker complex', source:'Steam Store Direct 1080p', license:'Official Game Screenshot', evidenceLevel:'Official' },
  { path:'/images/screenshots/steam_ss_03.jpg', kind:'screenshot', caption:'Forest mutant encounter and spatial awareness', source:'Steam Store Direct 1080p', license:'Official Game Screenshot', evidenceLevel:'Official' },
  { path:'/images/screenshots/steam_ss_05.jpg', kind:'screenshot', caption:'Inventory grid, backpack management & item sorting', source:'Steam Store Direct 1080p', license:'Official Game Screenshot', evidenceLevel:'Official' },
  { path:'/images/screenshots/steam_ss_08.jpg', kind:'screenshot', caption:'Full overworld sector map with settlement beacons', source:'Steam Store Direct 1080p', license:'Official Game Screenshot', evidenceLevel:'Official' },
  { path:'/images/community/yt_dropin_letsplay.jpg', kind:'community', caption:'Dropin community Let\'s Play demonstrating early game trader economy and junk barter', source:'YouTube (Dropin / 13.7K views)', license:'Community Content Demonstration', evidenceLevel:'Community demonstration' }
];
