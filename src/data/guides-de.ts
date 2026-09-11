import { guides as enGuides, type Guide } from './guides';

export const deGuides: Guide[] = [
  {
    slug: 'scavland-beginner-guide',
    category: 'Überleben',
    title: 'Scavland Anfänger-Guide: Erster Raid, Inventarverwaltung & Extraktion',
    shortTitle: 'Anfänger-Guide',
    description: 'Der ultimative Einsteiger-Guide für Scavland: Grundlagen des Zalesye-Ödlands, Überleben im ersten Raid, Inventar-Management und sichere Extraktion.',
    evidence: 'Verifiziert mit Early Access Patch v0.5.169',
    updated: '2026-09-07',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland Einsteiger-Guide — Taktischer Raid und Überlebensstrategie',
    answer: 'Überprüfe vor jedem Aufbruch die Gebietskarte. Meide dichten Nebel ohne Schutzmaske, priorisiere Munition und Verbandszeug gegenüber schwerem Schrott und merke dir den grünen Extraktionspunkt.',
    steps: [
      'Orientierung in Zalesye: Öffne bei Raid-Start sofort die Karte (Taste M) und markiere den nächstgelegenen Evakuierungspunkt. Plane stets eine Ausweichroute ein.',
      'Inventar-Ökonomie: Deine Kapazität ist durch Gewicht und Gitterplätze limitiert. Behalte Munition, Antirad und seltene Waffenteile; lasse schweren Schrott liegen.',
      'Ballistik & Geräusche: Schusswechsel locken Mutanten und Plünderer im Umkreis von 120 Metern an. Nutze Halbautomatik und ziele auf ungeschützte Körperstellen.',
      'Nebel-Dynamik: Wenn die Luft blau schimmert und der Geigerzähler ausschlägt, suche unverzüglich feste Schutzräume auf oder wechsle den Gasmaskenfilter.',
      'Extraktionszone: An der Evakuierungszone musst du 10 Sekunden ausharren. Gehe hinter Betonblöcken in Deckung und sichere alle Zugänge.'
    ],
    facts: [
      ['Genre', 'Hardcore Top-Down Taktik-Survival RPG'],
      ['Raid-Dauer', '15 bis 25 Minuten pro Durchlauf'],
      ['Todesstrafe', 'Verlust des gesamten ungesicherten Loots (außer Secure Container)'],
      ['Vitalwerte', 'Blutung, Strahlung, Ausdauer, Rüstungshaltbarkeit'],
      ['Spielversion', 'Steam Early Access v0.5.169']
    ],
    faq: [
      ['Wie stoppe ich starke Blutungen?', 'Verwende zuerst ein Tourniquet für arterielle Blutungen, danach einen sterilen Verband.'],
      ['Wie regeneriert man Leben ohne Medkits?', 'Im Explorer-Modus oder an entfachten Lagerfeuern in sicheren Camps regeneriert sich die Gesundheit langsam.'],
      ['Wo findet man das erste Gewehr?', 'Durchsuche Waffenbehälter am verlassenen Militärposten im Norden des Startgebiets.']
    ],
    related: ['scavland-weapons-and-attachments', 'scavland-price-and-regional-editions', 'scavland-vs-zero-sievert-comparison']
  },
  {
    slug: 'scavland-price-and-regional-editions',
    category: 'Release & Preise',
    title: 'Scavland Preis auf Steam: Editionen, Release-Rabatt & Systemanforderungen',
    shortTitle: 'Preis & Editionen auf Steam',
    description: 'Alle Infos zum Scavland-Kaufpreis auf Steam: 19,99 € UVP, 10% Eröffnungsrabatt, Early-Access-Umfang und Steam Deck Kompatibilität.',
    evidence: 'Offizielle Steam-Store-Daten vom 4. September 2026',
    updated: '2026-09-07',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland Steam-Preis, Editionen und Rabattaktion',
    answer: 'Der Grundpreis für Scavland beträgt 19,99 € auf Steam. In der ersten Launch-Woche gilt ein Rabatt von 10% (17,99 €). Es gibt keine Pay-to-Win-Mikrotransaktionen.',
    steps: [
      'Standard Edition (19,99 €): Beinhaltet den vollen Early-Access-Zugang mit 25+ Waffen, 10 Fraktionen und allen kommenden Inhalts-Updates.',
      'Launch-Rabatt: 10% Erlass für Frühkäufer in den ersten 7 Tagen nach Veröffentlichung.',
      'Soundtrack-Bundle: Der atmosphärische Soviet-Wasteland-Soundtrack ist als separates DLC erhältlich.',
      'Rückgaberecht: Volle Steam-Rückgabegarantie (bis zu 2 Stunden Spielzeit innerhalb von 14 Tagen).'
    ],
    facts: [
      ['UVP (Europa)', '19,99 €'],
      ['Launch-Aktionspreis', '17,99 € (-10% für 7 Tage)'],
      ['Early Access Start', '4. September 2026'],
      ['Plattform', 'Steam (Windows PC & Steam Deck optimiert)'],
      ['Mikrotransaktionen', 'Keine']
    ],
    faq: [
      ['Steigt der Preis nach Verlassen des Early Access?', 'Ja, Entwickler NoShadow plant eine Preisanpassung auf ca. 24,99 € zum 1.0-Release.'],
      ['Wird Koop-Multiplayer extra kosten?', 'Nein, das geplante Koop-Update wird für alle Besitzer des Hauptspiels kostenlos nachgeliefert.']
    ],
    related: ['scavland-steam-deck-and-handheld-settings', 'scavland-beginner-guide', 'scavland-vs-zero-sievert-comparison']
  },
  {
    slug: 'scavland-steam-deck-and-handheld-settings',
    category: 'Hardware-Tuning',
    title: 'Scavland auf Steam Deck: Beste Einstellungen für 60 FPS & 4h Akkulaufzeit',
    shortTitle: 'Steam Deck Einstellungen',
    description: 'Optimale Grafikeinstellungen und Controller-Belegung für Scavland auf dem Steam Deck (OLED & LCD): Stabile 60 FPS bei 9W TDP und leisen Lüftern.',
    evidence: 'Getestet auf Steam Deck OLED mit SteamOS 3.6',
    updated: '2026-09-07',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: 'Scavland Steam Deck Einstellungen für 60 FPS und lange Akkulaufzeit',
    answer: 'Mit 9W TDP-Begrenzung läuft Scavland auf dem Steam Deck mit butterweichen 60 FPS bei über 4 Stunden Akkulaufzeit und unter 60°C Chiptemperatur.',
    steps: [
      'Proton-Kompatibilität: Verwende Proton Experimental für fehlerfreie Licht- und Schattendarstellung.',
      'Auflösung & Display: 1280x800 nativ im 16:10-Vollbildmodus, SMAA-Kantenglättung, Schattenqualität auf "Mittel".',
      'Leistungsmenü (... Taste): Framerate-Limit auf 60 FPS / 60 Hz setzen, TDP-Begrenzung aktivieren und auf 9 Watt justieren.',
      'Trackpad-Steuerung: Rechtes Trackpad als Maus emulieren für millimetergenaues Zielen in dunklen Bunkergängen.'
    ],
    facts: [
      ['Steam Deck Status', 'Playable / Verifiziert (Hervorragende Performance)'],
      ['Framerate', 'Konstante 60 FPS ohne Ruckler'],
      ['Akkulaufzeit (OLED)', 'Ca. 4,2 bis 4,8 Stunden bei 9W TDP'],
      ['Controller-Support', 'Natives XInput mit Glyphenanzeige'],
      ['Offline-Modus', 'Vollständig offline spielbar']
    ],
    faq: [
      ['Ist der Text auf dem Display lesbar?', 'Ja, die Option "Große Benutzeroberfläche" in den Einstellungen skaliert Item-Beschreibungen perfekt.'],
      ['Funktioniert Gyro-Zielen?', 'Ja, Gyroskop-Unterstützung lässt sich bequem über das Steam-Controller-Menü hinzuschalten.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-price-and-regional-editions']
  },
  {
    slug: 'scavland-vs-zero-sievert-comparison',
    category: 'Vergleich',
    title: 'Scavland vs Zero Sievert: 7 zentrale Unterschiede für Hardcore-Survival-Fans',
    shortTitle: 'Scavland vs Zero Sievert',
    description: 'Direkter Systemvergleich zwischen Scavland und Zero Sievert: Ballistik, 300+ Waffenaufsätze, dynamischer Giftnebel und Mehrspieler-Roadmap.',
    evidence: 'Vergleichende Analyse beider Spielsysteme (Stand September 2026)',
    updated: '2026-09-07',
    image: '/images/screenshots/scavland_vs_zero_sievert.webp',
    imageAlt: 'Vergleich Scavland vs Zero Sievert — 7 Kernunterschiede',
    answer: 'Scavland bietet tiefere Waffenmodifikationen (300+ Teile), ein physikalisches Abprall- und Querschläger-System, dynamischen giftigen Nebel und eine offizielle Koop-Roadmap.',
    steps: [
      'Waffen-Baukasten: Scavland simuliert über 300 Anbauteile (Mündungsbremsen, Schäfte, Visiere, Magazine), die Rückstoß, Ergonomie und Mündungsfeuer spürbar verändern.',
      'Wetteranomalien: Der Nebel in Scavland zieht physikalisch mit der Windrichtung über die Karte, statt statisch zu verharren.',
      'KI-Verhalten: Feindliche Plünderer nutzen Deckungsfeuer, flankieren taktisch und kommunizieren per Funk.',
      'Unterschlupf-Ausbau: Das Versteck bietet modulare Werkbänke zur Patronenherstellung und Wasseraufbereitung.'
    ],
    facts: [
      ['Waffen-Modifikationen', 'Scavland: 300+ Teile | Zero Sievert: Basissystem'],
      ['Ballistik-Modell', 'Scavland: Querschläger, Geschossabfall, Rüstungsdurchschlag'],
      ['Koop-Modus', 'Scavland: Geplant in Early-Access-Roadmap'],
      ['Grafikstil', 'Scavland: Moderner Pixel-Art mit dynamischer Beleuchtung'],
      ['Fraktionen', 'Scavland: 10 eigenständige Fraktionen mit Rufsystem']
    ],
    faq: [
      ['Lohnt sich Scavland für Zero-Sievert-Spieler?', 'Definitiv. Wer die Atmosphäre von Zero Sievert mag, findet in Scavland noch mehr taktische Tiefe und Realismus.'],
      ['Welches Spiel ist schwerer?', 'Scavland verzeiht wegen des detaillierten Schadensmodells und Blutverlusts weniger Stellungsfehler.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-steam-deck-and-handheld-settings']
  },
  {
    slug: 'scavland-weapons-and-attachments',
    category: 'Arsenal',
    title: 'Waffen und Aufsätze in Scavland: 25+ Schusswaffen & 300+ Modifikationen',
    shortTitle: 'Waffen & Aufsätze',
    description: 'Umfassende Waffendatenbank für Scavland: Pistolen, Sturmgewehre, Schrotflinten, Schalldämpfer, Optiken und ballistische Munitionsdaten.',
    evidence: 'Datenbasis Patch v0.5.169',
    updated: '2026-09-07',
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: 'Scavland Waffen- und Zubehör-Datenbank',
    answer: 'Scavland umfasst über 25 Primär- und Sekundärwaffen sowie 300+ Anbauteile. Haltbarkeit, Kaliber und Mündungsaufsätze bestimmen Schusspräzision und Lautstärke.',
    steps: [
      'Waffenkategorien: Sowjetische Klassiker (AK-74, AS VAL, TT-33), westliche Plattformen (M4A1), Repetierbüchsen und Schrotflinten.',
      'Modulares Tuning: Bis zu 6 Slots pro Waffe: Verschluss, Mündung (Schalldämpfer/Kompensator), Vorderschaft, Visier, Griff und Magazingröße.',
      'Verschleiß & Ladehemmung: Bei unter 60% Zustand steigt die Gefahr von Klemmern während Feuergefechten rapide.',
      'Munitionsarten: FMJ für Allround, Hollow-Point gegen ungepanzerte Ziele und AP-Geschosse für schwere Panzerwesten.'
    ],
    facts: [
      ['Waffenmodelle', '25+ zum Early-Access-Start'],
      ['Anbauteile', '300+ taktische Modifikationen'],
      ['Kaliber', '9x18mm, 9x19mm, 5.45x39mm, 7.62x39mm, 7.62x54R, 12 Gauge'],
      ['Schalldämpfer-Effekt', 'Reduziert Erkennungsradius von 120m auf 25m'],
      ['Waffenreinigung', 'Erfordert Waffenreinigungsset und passende Ersatzteile']
    ],
    faq: [
      ['Welche Waffe ist am besten für Anfänger?', 'Die AK-74 wegen leicht verfügbarer 5.45x39mm-Munition bei Händlern aller Fraktionen.'],
      ['Wo kann man Waffen reparieren?', 'An der Werkbank im Unterschlupf oder per Feldreparatur-Kit.']
    ],
    related: ['scavland-beginner-guide', 'scavland-vs-zero-sievert-comparison', 'scavland-starter-loadouts-and-budget-builds']
  },
  {
    slug: 'scavland-mist-survival-and-radiation',
    category: 'Anomalien',
    title: 'Überleben im Nebel & Strahlung in Scavland: Filter, Medizin & Artefakte',
    shortTitle: 'Nebel & Strahlung',
    description: 'Überlebenshandbuch für die toxische Nebelzone und radioaktive Hotspots: Gasmaskenfilter, Radioprotektoren, Antidote und Artefaktjagd.',
    evidence: 'Toxizitätsmessungen Patch v0.5.169',
    updated: '2026-09-07',
    image: '/images/screenshots/steam_ss_09.webp',
    imageAlt: 'Nebelüberleben und Strahlungsschutz in Scavland',
    answer: 'Ohne intakte Schutzmaske ist der Nebel tödlich. Behalte die Filter-Haltbarkeit im Auge und führe immer mindestens 2 Dosen Strahlenschutzmittel mit.',
    steps: [
      'Nebeldichte: Leichter weißer Dunst verursacht moderate Belastung; tief lilafarbene Zentren führen binnen Sekunden zu Vergiftung und Halluzinationen.',
      'Filterwechsel: Standardfilter halten ca. 5 Minuten in Randzonen, im Bunker-Epizentrum oft nur 2 Minuten.',
      'Medizinischer Schutz: Rad-Block halbiert die Strahlenaufnahme; Kaliumjodid senkt die akute Strahlenbelastung.',
      'Artefaktbergung: Mit dem Anomalie-Scanner lassen sich im dichten Nebel wertvolle thermische und kinetische Artefakte orten.'
    ],
    facts: [
      ['Filterlaufzeit', '2 bis 8 Minuten je nach Schutzklasse'],
      ['Tödliche Strahlendosis', '500 mSv (führt innerhalb von 60 Sek. zum Kollaps)'],
      ['Ausrüstung', 'Geigerzähler, Anomalie-Scanner, geschlossene Schutzmaske'],
      ['Artefakt-Respawn', 'Jeder Nebelsturm mischt Artefakt-Fundorte neu durch']
    ],
    faq: [
      ['Was tun, wenn der Filter verbraucht ist?', 'Sofort Höhenlagen ansteuern oder in hermetisch verriegelte Bunker flüchten.']
    ],
    related: ['scavland-beginner-guide', 'scavland-death-and-loot-recovery', 'scavland-weapons-and-attachments']
  },
  {
    slug: 'scavland-death-and-loot-recovery',
    category: 'Mechanik',
    title: 'Tod und Beute-Wiederbeschaffung in Scavland: Rucksack retten & Safe-Container',
    shortTitle: 'Tod & Beute-Rettung',
    description: 'Was passiert beim Tod in Scavland: 25-Minuten-Todesmarker, Sicherer Container, Fraktionsversicherung und Taktiken zur Ausrüstungsrettung.',
    evidence: 'Verlust- und Bergungsmechanik v0.5.169',
    updated: '2026-09-07',
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: 'Todesmechanik und Beutebergung in Scavland',
    answer: 'Nach dem Tod bleibt dein Rucksack 25 Echtzeit-Minuten lang an Ort und Stelle. Gegenstände im Sicheren Container (2x2) gehen niemals verloren.',
    steps: [
      'Todesmarker: Ein Kreuz auf der Karte markiert die exakten Koordinaten deines Rucksacks.',
      'Sicherer Behälter: Platziere wertvolle Schlüsselkarten, Barvermögen und teure Zielfernrohre stets im geschützten Slot.',
      'Rettungs-Einsatz: Rüste für den Bergungsraid nur eine günstige Schrotflinte und Verbandszeug aus, um kein zweites Premium-Loadout zu riskieren.',
      'Fraktions-Versicherung: Händler der Fraktion "Wacht" bieten Versicherungspolicen mit Rückführung nach 24 Ingame-Stunden.'
    ],
    facts: [
      ['Rucksack-Timer', '25 Minuten Echtzeit in der laufenden Spielsession'],
      ['Container-Größe', 'Startet mit 4 Slots (2x2), ausbaubar auf 9 Slots (3x3)'],
      ['Erfahrungsverlust', '15% Abzug auf aktuelle Ausdauer-Progression bei Raid-Tod'],
      ['Versicherungsquote', 'Erstattet bis zu 70% des Waffenwerts']
    ],
    faq: [
      ['Können KI-Gegner meinen Rucksack plündern?', 'Ja, feindliche Plünderer nehmen hochwertige Waffen mit, wenn sie vor dir eintreffen.'],
      ['Gehen Quest-Gegenstände verloren?', 'Quest-Dokumente sind im separaten Auftragsbuch geschützt.']
    ],
    related: ['scavland-beginner-guide', 'scavland-mist-survival-and-radiation', 'scavland-factions-and-reputation']
  },
  {
    slug: 'scavland-factions-and-reputation',
    category: 'Fraktionen',
    title: '10 Fraktionen & Rufsystem in Scavland: Verträge, Händler-Tiers & Clankriege',
    shortTitle: '10 Fraktionen & Ruf',
    description: 'Detaillierter Leitfaden zu den 10 Fraktionen im Zalesye-Ödland: Militär-Stalker, Freie Schürfer, Nebel-Kultisten und Wissenschaftler.',
    evidence: 'Fraktions- und Reputationsdaten v0.5.169',
    updated: '2026-09-07',
    image: '/images/cards/card_3_quests_factions.webp',
    imageAlt: '10 Fraktionen und Rufsystem in Scavland',
    answer: 'Scavland bietet 10 Fraktionen mit eigenen Agenden. Durch Aufträge steigerst du deinen Ruf und schaltest 4 Händler-Stufen mit High-End-Equipment frei.',
    steps: [
      'Bündniswahl: "Freie Schürfer" eignen sich für Elektronikverkauf; die "Wacht" gewährt Zugriff auf schwere Schutzwesten der Klasse 5.',
      'Auftragssystem: Tägliche Aufträge für Sektor-Säuberungen, medizinische Lieferungen und Aufklärung.',
      'Feindseligkeit: Bei negativem Ruf eröffnen Fraktionskämpfer ab 50m Entfernung sofort das Feuer.',
      'Schwarzmarkt: Neutrale Händler verlangen 20% Gebühr, akzeptieren dafür aber Schmuggelware ohne Rufverlust.'
    ],
    facts: [
      ['Fraktionsanzahl', '10 Gruppen (3 neutral, 4 verbündet via Quests, 3 feindlich)'],
      ['Händler-Vertrauensstufen', '4 Tiers (Schalten Schalldämpfer und Nachtsicht frei)'],
      ['Zivile Verluste', '-250 Rufpunkte Strafe mit Wiedergutmachungsoption'],
      ['Höchststufen-Bonus', '15% Rabatt auf Spezialmunition und exklusive Waffen-Builds']
    ],
    faq: [
      ['Kann man mit allen Fraktionen neutral bleiben?', 'Ja, wenn man aggressive Sabotage-Aufträge vermeidet und Handelsstationen nutzt.'],
      ['Wer verkauft die besten Scharfschützenvisiere?', 'Die Omega-Forschungsgruppe im Tiefbunker B-4.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-death-and-loot-recovery']
  },
  {
    slug: 'scavland-sleep-and-world-reset-guide',
    category: 'Überleben',
    title: 'Scavland Schlaf & Welt-Reset Guide: 24-Stunden-Zyklus, Lagerfeuer & Bunker-Respawn',
    shortTitle: 'Schlaf & Welt-Reset',
    description: 'Schlafsystem in Scavland: Nacht überspringen (21:00–06:00), 24-Stunden-Reset für Händler und Beutekisten, Lagerfeuer-Regeneration und Bunker-Regeln.',
    evidence: 'Verifiziert in Patch v0.5.169 (Early Access)',
    updated: '2026-09-09',
    image: '/images/screenshots/ss_01_ruins_night.webp',
    imageAlt: 'Ein Scavenger ruht an einer Pritsche im Schutzbunker von Scavland',
    answer: 'Schlafen ist in Scavland die zentrale Mechanik zum Voranschreiten der Zeit, Vermeiden der tödlichen Nachtmutanten (21:00 bis 06:00 Uhr) und Auslösen des 24-Stunden-Weltzyklus. Das Schlafen in Safehouse-Pritschen setzt Vertragstafeln (Anatoly & Nadja) sowie Oberflächen-Beutekisten zurück. In Patch v0.5.169 regenerieren Lagerfeuer passive Gesundheit, jedoch blockiert Schlafen bei starker Dehydrierung die Ausdauerregeneration — trinke stets abgekochtes Wasser vor dem Schlafengehen.',
    steps: [
      '01 · Schlafen im Safehouse: Interagiere mit der Pritsche in einem Schutzbunker, um 1 bis 12 Stunden zu rasten und sicher den Tagesanbruch (06:00 Uhr) abzuwarten.',
      '02 · 24-Stunden-Welt-Reset: Das Überschreiten von 24 Ingame-Stunden setzt Händler-Bestände, Oberflächenkisten und Kopfgeldverträge von Anatoly und Nadja zurück.',
      '03 · Bunker-Sperrzeiten: Unterirdische Militärbunker (z. B. Bunker B-4) respawnen nicht durch einfaches Schlafen, um unbegrenztes Beutefarmen zu verhindern.',
      '04 · Lagerfeuer-Rast & Hydrierung: Lagerfeuer bieten passive Heilung. Koche kontaminiertes Wasser ab, um tödliche Dehydrierungs-Debuffs nach dem Aufwachen zu vermeiden.',
      '05 · Ausgangssperre bei Nacht (21:00 Uhr): Nachts schrumpft die Sicht auf 10 Meter und gefährliche Mutanten lauern in der Dunkelheit. Starte bei Sonnenaufgang und kehre vor der Dämmerung zurück.'
    ],
    facts: [
      ['Schlaforte', 'Pritschen in Safehouses und befreundeten Lagern (1–12 Stunden)'],
      ['24-Stunden-Zyklus', 'Aktualisiert Händler-Inventare, Oberflächenkisten und Aufträge'],
      ['Bunker-Regel', 'Unterirdische Tresore haben feste Abklingzeiten und respawnen nicht sofort'],
      ['Lagerfeuer-Vorteil', 'Passive HP-Regeneration in v0.5.169 bei ausreichender Hydrierung'],
      ['Nachtgefahren', 'Sichtweite auf 10m beschränkt; Schüsse locken Jäger an']
    ],
    faq: [
      ['Wie kann man die Zeit im Spiel vorspulen?', 'Nähere dich einem Bett in einem Safehouse, drücke die Interaktionstaste [E] und wähle die gewünschte Stundenzahl.'],
      ['Warum regeneriert sich meine Ausdauer nach dem Schlafen nicht?', 'Das liegt am verborgenen Debuff "Starke Dehydrierung". Trinke sauberes Wasser und raste an einem brennenden Lagerfeuer.'],
      ['Respawnen Kisten in Bunkern nach dem Schlafen?', 'Nein. Bunker und Kartenschlüssel-Tresore besitzen eigene mehrstündige Sperrzeiten, um Endlos-Farming zu unterbinden.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapon-repair-and-durability', 'scavland-quests-and-contracts']
  }
];

const enGuideMap = Object.fromEntries(enGuides.map((g) => [g.slug, g]));

export const allDeGuides: Guide[] = [
  ...deGuides.map((de) => ({
    ...de,
    image: enGuideMap[de.slug]?.image || '/images/hero/header.webp',
  })),
  ...enGuides
    .filter(en => !deGuides.some(de => de.slug === en.slug))
    .map(en => ({
      ...en,
      description: en.description,
    }))
];

export const deGuideBySlug = Object.fromEntries(allDeGuides.map((g) => [g.slug, g]));
