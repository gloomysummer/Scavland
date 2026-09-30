import { guides as enGuides, type Guide } from './guides';

export const deGuides: Guide[] = [
  {
    slug: 'scavland-beginner-guide',
    category: 'Überleben',
    title: 'Scavland Anfänger-Guide: Erster Raid, Inventarverwaltung & Extraktion',
    shortTitle: 'Anfänger-Guide',
    description: 'Der ultimative Einsteiger-Guide für Scavland: Grundlagen des Zalesye-Ödlands, Überleben im ersten Raid, Inventar-Management und sichere Extraktion.',
    evidence: 'Offizieller Patch 0.5.169',
    updated: '2026-09-07',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland Einsteiger-Guide — Taktischer Raid und Überlebensstrategie',
    answer: 'Überprüfe vor jedem Aufbruch die Gebietskarte. Meide dichten Nebel ohne Schutzmaske, priorisiere Munition und Verbandszeug gegenüber schwerem Schrott und merke dir den grünen <strong>Extraktionspunkt</strong>.',
    steps: [
      'Orientierung in <strong>Zalesye</strong>: Öffne bei Raid-Start sofort die Karte (Taste M) und markiere den nächstgelegenen Evakuierungspunkt. Plane stets eine Ausweichroute ein.',
      'Inventar-Ökonomie: Deine Kapazität ist durch Gewicht und Gitterplätze limitiert. Behalte <strong>Munition</strong>, <strong>Antirad</strong> und seltene Waffenteile; lasse schweren Schrott liegen.',
      'Ballistik & Geräusche: Schusswechsel locken Mutanten und Plünderer im Umkreis von <strong>120 Metern</strong> an. Nutze Halbautomatik und ziele auf ungeschützte Körperstellen.',
      'Nebel-Dynamik: Wenn die Luft blau schimmert und der <strong>Geigerzähler</strong> ausschlägt, suche unverzüglich feste Schutzräume auf oder wechsle den <strong>Gasmaskenfilter</strong>.',
      'Extraktionszone: An der Evakuierungszone musst du <strong>10 Sekunden</strong> ausharren. Gehe hinter Betonblöcken in Deckung und sichere alle Zugänge.'
    ],
    facts: [
      ['Genre', 'Hardcore Top-Down Taktik-Survival RPG'],
      ['Raid-Dauer', '15 bis 25 Minuten pro Durchlauf'],
      ['Todesstrafe', 'Verlust des gesamten ungesicherten Loots (außer Secure Container)'],
      ['Vitalwerte', 'Blutung, Strahlung, Ausdauer, Rüstungshaltbarkeit'],
      ['Spielversion', 'Steam Early Access v0.5.169']
    ],
    faq: [
      ['Wie stoppe ich starke Blutungen?', 'Verwende zuerst ein <strong>Tourniquet</strong> für arterielle Blutungen, danach einen sterilen Verband.'],
      ['Wie regeneriert man Leben ohne Medkits?', 'Im <strong>Explorer-Modus</strong> oder an entfachten Lagerfeuern in sicheren Camps regeneriert sich die Gesundheit langsam.'],
      ['Wo findet man das erste Gewehr?', 'Durchsuche Waffenbehälter am verlassenen Militärposten im Norden des Startgebiets.']
    ],
    related: ['scavland-weapons-and-attachments', 'scavland-price-and-regional-editions', 'scavland-vs-zero-sievert-comparison'],
    videoId: 'JRAOxOjeoc8',
    videoTitle: 'SCAVLAND Einsteiger-Guide: Überleben im ersten Raid (Mars)',
    videoChannel: 'Mars'
  },
  {
    slug: 'scavland-price-and-regional-editions',
    category: 'Release & Preise',
    title: 'Scavland Preis auf Steam: Editionen, Release-Rabatt & Systemanforderungen',
    shortTitle: 'Preis & Editionen auf Steam',
    description: 'Alle Infos zum Scavland-Kaufpreis auf Steam: 19,99 € UVP, 10% Eröffnungsrabatt und Early-Access-Umfang.',
    evidence: 'Offizielle Steam-Store-Daten vom 4. September 2026',
    updated: '2026-09-07',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland Steam-Preis, Editionen und Rabattaktion',
    answer: 'Der Grundpreis für Scavland beträgt <strong>19,99 €</strong> auf Steam. In der ersten Launch-Woche gilt ein Rabatt von <strong>10% (17,99 €)</strong>. Es gibt keine Pay-to-Win-Mikrotransaktionen.',
    steps: [
      '<strong>Standard Edition</strong> (19,99 €): Beinhaltet den vollen <strong>Early-Access-Zugang</strong> mit 25+ Waffen, 10 Fraktionen und allen kommenden Inhalts-Updates.',
      'Launch-Rabatt: 10% Erlass für Frühkäufer in den ersten <strong>7 Tagen</strong> nach Veröffentlichung.',
      '<strong>Soundtrack-Bundle</strong>: Der atmosphärische Soviet-Wasteland-Soundtrack ist als separates DLC erhältlich.',
      'Rückgaberecht: Volle Steam-Rückgabegarantie (bis zu <strong>2 Stunden Spielzeit</strong> innerhalb von <strong>14 Tagen</strong>).'
    ],
    facts: [
      ['UVP (Europa)', '19,99 €'],
      ['Launch-Aktionspreis', '17,99 € (-10% für 7 Tage)'],
      ['Early Access Start', '4. September 2026'],
      ['Plattform', 'Steam (Windows PC & Steam Deck optimiert)'],
      ['Mikrotransaktionen', 'Keine']
    ],
    faq: [
      ['Steigt der Preis nach Verlassen des Early Access?', '<strong>NoShadow</strong> hat noch keinen neuen Preis für die Vollversion angekündigt. Solange sich Scavland im Early Access befindet, gilt der aktuelle <strong>Steam-Preis</strong>; Änderungen würden über die Steam-News mitgeteilt.'],
      ['Wird Koop-Multiplayer extra kosten?', 'Nein, das geplante Koop-Update wird für alle Besitzer des Hauptspiels kostenlos nachgeliefert.']
    ],
    related: ['scavland-steam-deck-and-handheld-settings', 'scavland-beginner-guide', 'scavland-vs-zero-sievert-comparison'],
    videoId: 'sulLD0aNdOk',
    videoTitle: 'Scavland Kaufberatung & Features vor dem Kauf (The Singleplayer Squad)',
    videoChannel: 'The Singleplayer Squad'
  },
  {
    slug: 'scavland-steam-deck-and-handheld-settings',
    category: 'Hardware-Tuning',
    title: 'Scavland auf Steam Deck & Handhelds: Controller, Display und Einstellungen',
    shortTitle: 'Steam Deck Einstellungen',
    description: 'Einstellungen als Ausgangspunkt für Scavland auf Steam Deck und Handheld-PCs: Auflösung, Framerate- und TDP-Optionen, Controller-Belegung und Textgröße. Das sind Vorschläge, keine gemessenen Werte.',
    evidence: 'Offizielle Steam-Ankündigung (Controller-Support, für Steam Deck ausgelegt); Einstellungen sind Vorschläge',
    updated: '2026-09-07',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: 'Scavland auf einem Handheld-Display mit taktischem HUD',
    answer: 'Scavland erscheint mit vollem <strong>Controller-Support</strong> und wurde laut Entwickler „mit Blick auf <strong>Steam Deck</strong> und Handheld-Spiel entwickelt“, sodass kein eigenes Setup nötig ist. Update <strong>0.7.0</strong> nennt außerdem eine „verbesserte Textgröße auf dem Steam Deck“. Die folgenden Punkte sind Startwerte und keine Messergebnisse: Beginne mit dem <strong>Standard-Preset</strong> des Spiels und senke Framerate- oder Leistungslimit schrittweise, wenn du es leiser und ausdauernder möchtest.',
    steps: [
      '<strong>Proton</strong>: Das Verhalten hängt vom System ab. Bei Shader- oder Audioproblemen zuerst das Kompatibilitätswerkzeug in den Spiel-Eigenschaften in Steam wechseln.',
      'Auflösung: Beginne mit der nativen Auflösung des Steam Deck, <strong>1280x800</strong> im <strong>16:10-Vollbildmodus</strong>, und passe Schatten und Kantenglättung nach Geschmack an.',
      'Leistungsmenü (... Taste): <strong>SteamOS</strong> erlaubt ein Framerate-Limit sowie TDP- und GPU-Takt-Grenzen. Senke die Werte schrittweise und beobachte dabei die Framerate.',
      'Controller: Das rechte <strong>Trackpad</strong> lässt sich als Maus belegen; Community-Layouts findest du in den Controller-Einstellungen von Steam.'
    ],
    facts: [
      ['Handheld-Unterstützung', 'Voller Controller-Support laut Store-Seite; laut Entwickler für Steam Deck und Handheld-Spiel ausgelegt'],
      ['Valve-Deck-Badge', 'Auf der Steam-Store-Seite ist kein Deck-Kompatibilitäts-Badge ausgewiesen'],
      ['Framerate', 'Hier werden keine Messwerte genannt — nutze das Framerate-Limit im Quick-Access-Menü'],
      ['Leistungslimit', 'Im SteamOS-Quick-Access-Menü einstellbar; schrittweise senken'],
      ['Auflösung', '1280x800 (16:10) ist die native Auflösung des Steam-Deck-Displays']
    ],
    faq: [
      ['Ist der Text auf dem Display lesbar?', 'Ja, die Option "<strong>Große Benutzeroberfläche</strong>" in den Einstellungen skaliert Item-Beschreibungen perfekt.'],
      ['Funktioniert Gyro-Zielen?', 'Ja, <strong>Gyroskop-Unterstützung</strong> lässt sich bequem über das Steam-Controller-Menü hinzuschalten.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-price-and-regional-editions'],
    videoId: 'Zx0Uon9RJM4',
    videoTitle: 'Scavland Steam Deck Performance & Handheld-Test (ciastek)',
    videoChannel: 'ciastek'
  },
  {
    slug: 'scavland-vs-zero-sievert-comparison',
    category: 'Vergleich',
    title: 'Scavland vs Zero Sievert: 7 zentrale Unterschiede für Hardcore-Survival-Fans',
    shortTitle: 'Scavland vs Zero Sievert',
    description: 'Direkter Systemvergleich zwischen Scavland und Zero Sievert: Ballistik, 300+ Waffenaufsätze, dynamischer Giftnebel und Mehrspieler-Roadmap.',
    evidence: 'Vergleich auf Basis öffentlicher Informationen',
    updated: '2026-09-07',
    image: '/images/screenshots/scavland_vs_zero_sievert.webp',
    imageAlt: 'Vergleich Scavland vs Zero Sievert — 7 Kernunterschiede',
    answer: 'Scavland bietet tiefere Waffenmodifikationen (<strong>300+ Teile</strong>), ein physikalisches Abprall- und Querschläger-System, dynamischen giftigen <strong>Nebel</strong> und eine offizielle <strong>Koop-Roadmap</strong>.',
    steps: [
      'Waffen-Baukasten: Scavland simuliert über 300 Anbauteile (<strong>Mündungsbremsen</strong>, <strong>Schäfte</strong>, Visiere, Magazine), die Rückstoß, Ergonomie und Mündungsfeuer spürbar verändern.',
      'Wetteranomalien: Der Nebel in Scavland zieht physikalisch mit der Windrichtung über die Karte, statt statisch zu verharren.',
      'KI-Verhalten: Feindliche Plünderer nutzen Deckungsfeuer, flankieren taktisch und kommunizieren per <strong>Funk</strong>.',
      'Unterschlupf-Ausbau: Das <strong>Versteck</strong> bietet modulare Werkbänke zur <strong>Patronenherstellung</strong> und <strong>Wasseraufbereitung</strong>.'
    ],
    facts: [
      ['Waffen-Modifikationen', 'Scavland: 300+ Teile | Zero Sievert: Basissystem'],
      ['Ballistik-Modell', 'Scavland: Querschläger, Geschossabfall, Rüstungsdurchschlag'],
      ['Koop-Modus', 'Scavland: Geplant in Early-Access-Roadmap'],
      ['Grafikstil', 'Scavland: Moderner Pixel-Art mit dynamischer Beleuchtung'],
      ['Fraktionen', 'Scavland: 10 eigenständige Fraktionen mit Rufsystem']
    ],
    faq: [
      ['Lohnt sich Scavland für Zero-Sievert-Spieler?', 'Definitiv. Wer die Atmosphäre von <strong>Zero Sievert</strong> mag, findet in Scavland noch mehr taktische Tiefe und Realismus.'],
      ['Welches Spiel ist schwerer?', 'Scavland verzeiht wegen des detaillierten Schadensmodells und <strong>Blutverlusts</strong> weniger Stellungsfehler.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-steam-deck-and-handheld-settings'],
    videoId: 'ETFXsWYOVlM',
    videoTitle: 'Top-Down Extraction Shooter Vergleich: Scavland & Zero Sievert (Oscar Mikey)',
    videoChannel: 'Oscar Mikey'
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
    answer: 'Scavland umfasst über <strong>25 Primär- und Sekundärwaffen</strong> sowie <strong>300+ Anbauteile</strong>. Haltbarkeit, Kaliber und Mündungsaufsätze bestimmen Schusspräzision und Lautstärke.',
    steps: [
      'Waffenkategorien: Sowjetische Klassiker (<strong>AK-74</strong>, <strong>AS VAL</strong>, <strong>TT-33</strong>), westliche Plattformen (<strong>M4A1</strong>), Repetierbüchsen und Schrotflinten.',
      'Modulares Tuning: Bis zu 6 Slots pro Waffe: <strong>Verschluss</strong>, Mündung (<strong>Schalldämpfer</strong>/Kompensator), Vorderschaft, Visier, Griff und Magazingröße.',
      'Verschleiß & Ladehemmung: Bei unter <strong>60% Zustand</strong> steigt die Gefahr von Klemmern während Feuergefechten rapide.',
      'Munitionsarten: <strong>FMJ</strong> für Allround, Hollow-Point gegen ungepanzerte Ziele und <strong>AP-Geschosse</strong> für schwere Panzerwesten.'
    ],
    facts: [
      ['Waffenmodelle', '25+ zum Early-Access-Start'],
      ['Anbauteile', '300+ taktische Modifikationen'],
      ['Kaliber', '9x18mm, 9x19mm, 5.45x39mm, 7.62x39mm, 7.62x54R, 12 Gauge'],
      ['Schalldämpfer-Effekt', 'Reduziert Erkennungsradius von 120m auf 25m'],
      ['Waffenreinigung', 'Erfordert Waffenreinigungsset und passende Ersatzteile']
    ],
    faq: [
      ['Welche Waffe ist am besten für Anfänger?', 'Die AK-74 wegen leicht verfügbarer <strong>5.45x39mm-Munition</strong> bei Händlern aller Fraktionen.'],
      ['Wo kann man Waffen reparieren?', 'An der <strong>Werkbank</strong> im Unterschlupf oder per Feldreparatur-Kit.']
    ],
    related: ['scavland-beginner-guide', 'scavland-vs-zero-sievert-comparison', 'scavland-starter-loadouts-and-budget-builds'],
    videoId: 'JQDdSAYkOkQ',
    videoTitle: 'Scavland Waffen-Fundort: 63 Dragoon (Game Detox Dopamine)',
    videoChannel: 'Game Detox Dopamine'
  },
  {
    slug: 'scavland-mist-survival-and-radiation',
    category: 'Anomalien',
    title: 'Überleben im Nebel & Strahlung in Scavland: Filter, Medizin & Artefakte',
    shortTitle: 'Nebel & Strahlung',
    description: 'Überlebenshandbuch für die toxische Nebelzone und radioaktive Hotspots: Gasmaskenfilter, Radioprotektoren, Antidote und Artefaktjagd.',
    evidence: 'Offizieller Patch 0.5.169',
    updated: '2026-09-07',
    image: '/images/screenshots/steam_ss_09.webp',
    imageAlt: 'Nebelüberleben und Strahlungsschutz in Scavland',
    answer: 'Ohne intakte <strong>Schutzmaske</strong> ist der Nebel tödlich. Behalte die Filter-Haltbarkeit im Auge und führe immer mindestens 2 Dosen <strong>Strahlenschutzmittel</strong> mit.',
    steps: [
      'Nebeldichte: Leichter weißer Dunst verursacht moderate Belastung; tief lilafarbene Zentren führen binnen Sekunden zu Vergiftung und Halluzinationen.',
      'Filterwechsel: <strong>Standardfilter</strong> halten ca. <strong>5 Minuten</strong> in Randzonen, im Bunker-Epizentrum oft nur <strong>2 Minuten</strong>.',
      'Medizinischer Schutz: <strong>Rad-Block</strong> halbiert die Strahlenaufnahme; <strong>Kaliumjodid</strong> senkt die akute Strahlenbelastung.',
      'Artefaktbergung: Mit dem <strong>Anomalie-Scanner</strong> lassen sich im dichten Nebel wertvolle thermische und kinetische Artefakte orten.'
    ],
    facts: [
      ['Filterlaufzeit', '2 bis 8 Minuten je nach Schutzklasse'],
      ['Tödliche Strahlendosis', '500 mSv (führt innerhalb von 60 Sek. zum Kollaps)'],
      ['Ausrüstung', 'Geigerzähler, Anomalie-Scanner, geschlossene Schutzmaske'],
      ['Artefakt-Respawn', 'Jeder Nebelsturm mischt Artefakt-Fundorte neu durch']
    ],
    faq: [
      ['Was tun, wenn der Filter verbraucht ist?', 'Sofort Höhenlagen ansteuern oder in hermetisch verriegelte <strong>Bunker</strong> flüchten.']
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
    answer: 'Nach dem Tod bleibt dein Rucksack <strong>25 Echtzeit-Minuten</strong> lang an Ort und Stelle. Gegenstände im <strong>Sicheren Container (2x2)</strong> gehen niemals verloren.',
    steps: [
      'Todesmarker: Ein Kreuz auf der <strong>Karte</strong> markiert die exakten Koordinaten deines Rucksacks.',
      'Sicherer Behälter: Platziere wertvolle <strong>Schlüsselkarten</strong>, Barvermögen und teure Zielfernrohre stets im geschützten Slot.',
      'Rettungs-Einsatz: Rüste für den Bergungsraid nur eine günstige Schrotflinte und Verbandszeug aus, um kein zweites Premium-Loadout zu riskieren.',
      'Fraktions-Versicherung: Händler der Fraktion "<strong>Wacht</strong>" bieten Versicherungspolicen mit Rückführung nach <strong>24 Ingame-Stunden</strong>.'
    ],
    facts: [
      ['Rucksack-Timer', '25 Minuten Echtzeit in der laufenden Spielsession'],
      ['Container-Größe', 'Startet mit 4 Slots (2x2), ausbaubar auf 9 Slots (3x3)'],
      ['Erfahrungsverlust', '15% Abzug auf aktuelle Ausdauer-Progression bei Raid-Tod'],
      ['Versicherungsquote', 'Erstattet bis zu 70% des Waffenwerts']
    ],
    faq: [
      ['Können KI-Gegner meinen Rucksack plündern?', 'Ja, feindliche Plünderer nehmen hochwertige Waffen mit, wenn sie vor dir eintreffen.'],
      ['Gehen Quest-Gegenstände verloren?', '<strong>Quest-Dokumente</strong> sind im separaten <strong>Auftragsbuch</strong> geschützt.']
    ],
    related: ['scavland-beginner-guide', 'scavland-mist-survival-and-radiation', 'scavland-factions-and-reputation'],
    videoId: 'WyI0vB4qE7A',
    videoTitle: 'Todesmechanik & Loot-Rückholung in Scavland (Mars)',
    videoChannel: 'Mars'
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
    answer: 'Scavland bietet <strong>10 Fraktionen</strong> mit eigenen Agenden. Durch Aufträge steigerst du deinen Ruf und schaltest <strong>4 Händler-Stufen</strong> mit High-End-Equipment frei.',
    steps: [
      'Bündniswahl: "<strong>Freie Schürfer</strong>" eignen sich für Elektronikverkauf; die "Wacht" gewährt Zugriff auf schwere Schutzwesten der <strong>Klasse 5</strong>.',
      'Auftragssystem: Tägliche Aufträge für Sektor-Säuberungen, medizinische Lieferungen und Aufklärung.',
      'Feindseligkeit: Bei negativem Ruf eröffnen Fraktionskämpfer ab <strong>50m Entfernung</strong> sofort das Feuer.',
      'Schwarzmarkt: Neutrale Händler verlangen <strong>20% Gebühr</strong>, akzeptieren dafür aber Schmuggelware ohne Rufverlust.'
    ],
    facts: [
      ['Fraktionsanzahl', '10 Gruppen (3 neutral, 4 verbündet via Quests, 3 feindlich)'],
      ['Händler-Vertrauensstufen', '4 Tiers (Schalten Schalldämpfer und Nachtsicht frei)'],
      ['Zivile Verluste', '-250 Rufpunkte Strafe mit Wiedergutmachungsoption'],
      ['Höchststufen-Bonus', '15% Rabatt auf Spezialmunition und exklusive Waffen-Builds']
    ],
    faq: [
      ['Kann man mit allen Fraktionen neutral bleiben?', 'Ja, wenn man aggressive Sabotage-Aufträge vermeidet und Handelsstationen nutzt.'],
      ['Wer verkauft die besten Scharfschützenvisiere?', 'Die <strong>Omega-Forschungsgruppe</strong> im <strong>Tiefbunker B-4</strong>.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-death-and-loot-recovery']
  },
  {
    slug: 'scavland-sleep-and-world-reset-guide',
    category: 'Überleben',
    title: 'Scavland Schlaf & Welt-Reset Guide: 24-Stunden-Zyklus, Lagerfeuer & Bunker-Respawn',
    shortTitle: 'Schlaf & Welt-Reset',
    description: 'Schlafsystem in Scavland: Nacht überspringen (21:00–06:00), 24-Stunden-Reset für Händler und Beutekisten, Lagerfeuer-Regeneration und Bunker-Regeln.',
    evidence: 'Offizieller Patch 0.5.169',
    updated: '2026-09-09',
    image: '/images/screenshots/ss_01_ruins_night.webp',
    imageAlt: 'Ein Scavenger ruht an einer Pritsche im Schutzbunker von Scavland',
    answer: 'Schlafen ist in Scavland die zentrale Mechanik zum Voranschreiten der Zeit, Vermeiden der tödlichen <strong>Nachtmutanten</strong> (21:00 bis 06:00 Uhr) und Auslösen des <strong>24-Stunden-Weltzyklus</strong>. Das Schlafen in Safehouse-Pritschen setzt Vertragstafeln (<strong>Anatoly</strong> & <strong>Nadja</strong>) sowie Oberflächen-Beutekisten zurück. In Patch v0.5.169 regenerieren Lagerfeuer passive Gesundheit, jedoch blockiert Schlafen bei starker <strong>Dehydrierung</strong> die Ausdauerregeneration — trinke stets abgekochtes Wasser vor dem Schlafengehen.',
    steps: [
      '01 · Schlafen im Safehouse: Interagiere mit der Pritsche in einem Schutzbunker, um <strong>1 bis 12 Stunden</strong> zu rasten und sicher den Tagesanbruch (06:00 Uhr) abzuwarten.',
      '02 · 24-Stunden-Welt-Reset: Das Überschreiten von <strong>24 Ingame-Stunden</strong> setzt Händler-Bestände, Oberflächenkisten und Kopfgeldverträge von Anatoly und Nadja zurück.',
      '03 · Bunker-Sperrzeiten: Unterirdische Militärbunker (z. B. <strong>Bunker B-4</strong>) respawnen nicht durch einfaches Schlafen, um unbegrenztes Beutefarmen zu verhindern.',
      '04 · Lagerfeuer-Rast & Hydrierung: <strong>Lagerfeuer</strong> bieten passive Heilung. Koche kontaminiertes Wasser ab, um tödliche Dehydrierungs-Debuffs nach dem Aufwachen zu vermeiden.',
      '05 · Ausgangssperre bei Nacht (<strong>21:00 Uhr</strong>): Nachts schrumpft die Sicht auf <strong>10 Meter</strong> und gefährliche Mutanten lauern in der Dunkelheit. Starte bei Sonnenaufgang und kehre vor der Dämmerung zurück.'
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
      ['Warum regeneriert sich meine Ausdauer nach dem Schlafen nicht?', 'Das liegt am verborgenen Debuff "<strong>Starke Dehydrierung</strong>". Trinke sauberes Wasser und raste an einem brennenden Lagerfeuer.'],
      ['Respawnen Kisten in Bunkern nach dem Schlafen?', 'Nein. Bunker und <strong>Kartenschlüssel-Tresore</strong> besitzen eigene mehrstündige Sperrzeiten, um Endlos-Farming zu unterbinden.']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapon-repair-and-durability', 'scavland-quests-and-contracts'],
    videoId: 'IhLy3jap04Y',
    videoTitle: 'Scavland Schlafsystem & Welt-Reset Patch 0.6.0 (Games Quality Zone)',
    videoChannel: 'Games Quality Zone'
  },
  {
    slug: 'scavland-consumables-and-medical-supplies',
    category: 'Überleben',
    title: 'Scavland Medizin & Vorräte: Heilung, Wasser, Nahrung & Strahlung',
    shortTitle: 'Medizin & Vorräte',
    description: 'Kompletter Scavland-Guide für medizinische Versorgung: Blutungen stoppen, Dehydrierung kurieren, Schmerzmittel, Verbände und Strahlenschutz.',
    evidence: 'Offizieller Patch 0.6.0',
    updated: '2026-09-15',
    image: '/images/harvested/2026-09-11/we-hear-you-changes-are-coming/we-hear-you-changes-are-coming-frame-498s.jpg',
    imageAlt: 'Scavenger verwaltet Vorräte, Verbandszeug und sauberes Wasser in Scavland',
    answer: 'Die richtige Handhabung von Vorräten und Traumata in Scavland entscheidet über erfolgreiche Evakuierung oder Tod im Ödland. Blutungen müssen vor der <strong>Medkit-Nutzung</strong> gestillt werden, und Dehydrierung blockiert die Ausdauerregeneration nach dem Schlafen.',
    steps: [
      '01 · Sauberes Trinkwasser priorisieren: Verunreinigtes Wasser aus Waschbecken stets an <strong>Lagerfeuern</strong> abkochen. Schlafen bei <strong>Dehydrierung</strong> blockiert die Ausdauerregeneration vollständig.',
      '02 · Blutungen vor Medkits stoppen: Arterielle Blutungen leeren bis zu <strong>5 TP/s</strong>. Nutze sterile Verbände oder <strong>Hämostase-Gaze</strong> auf Schnelltaste [5], bevor du Heilmittel anwendest.',
      '03 · Knochenbrüche schienen: Stürze und Schrotflintreffer verursachen <strong>Frakturen</strong> (-40% Tempo, +60% Waffenwackeln). <strong>Holzschienen</strong> stellen die normale Mobilität sofort wieder her.',
      '04 · Strahlenschutz & Rad-Away: Bei gelbem Strahlungswert <strong>Aktivkohletabletten</strong> schlucken. Spare militärische <strong>Rad-Away-Injektoren</strong> für rote Gefahrenzonen im dichten Nebel auf.',
      '05 · Kampfdoping & Kalorien: Dosenfleisch (<strong>Tuschonka</strong>) stellt verlorene Ausdauerkapazitäten wieder her. <strong>Adrenalin-Stims</strong> gewähren temporär <strong>+10kg Tragekraft</strong> für Flucht-Sprints.'
    ],
    facts: [
      ['Abgekochtes Wasser', 'Kuriert Dehydrierung; wird an Lagerfeuern aus Schmutzwasser hergestellt'],
      ['Steriler Verband', 'Stoppt leichte Blutungen in 2 Sekunden; Handwerk aus Stoff + Antiseptikum'],
      ['Militär-Hämostase-Gaze', 'Stoppt schwere Blutungen sofort; seltene Beute in Krankenhäusern'],
      ['Holzschiene', 'Entfernt Fraktur-Debuffs (-40% Tempo, +60% Waffenwackeln)'],
      ['Rad-Away Injektor', 'Beseitigt 150 mSv Strahlendosis; erhältlich bei Ärztin Anna in Zalesye'],
      ['Dehydrierungs-Sperre', 'Schlafen bei Dehydrierung friert die Ausdauerregeneration komplett ein']
    ],
    faq: [
      ['Wie stoppe ich Blutungen in Scavland?', 'Lege <strong>Verbände</strong> auf eine Schnelltaste. Normale Medkits stellen keine Gesundheit wieder her, solange eine aktive arterielle Blutung besteht.'],
      ['Warum regeneriert sich meine Ausdauer nach dem Schlafen nicht?', 'Starke Dehydrierung blockiert die Ausdauererholung. Trinke stets abgekochtes Wasser, bevor du dich schlafen legst.'],
      ['Wo findet man die meisten Medikamente?', 'Der Krankenhaustrakt von <strong>Zalesye</strong> bietet die dichtesten Fundorte für Pharmazeutika, wird jedoch von <strong>Zungenmonstern</strong> bewacht.']
    ],
    related: ['scavland-beginner-guide', 'scavland-sleep-and-world-reset-guide', 'scavland-hospital-quest-and-medical-supplies']
  }
];

const enGuideMap = Object.fromEntries(enGuides.map((g) => [g.slug, g]));

export const allDeGuides: Guide[] = deGuides.map((de) => ({
  ...de,
  image: enGuideMap[de.slug]?.image || '/images/hero/header.webp',
}));

export const deGuideBySlug = Object.fromEntries(allDeGuides.map((g) => [g.slug, g]));
