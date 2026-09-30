import { guides as enGuides, type Guide } from './guides';

export const jaGuides: Guide[] = [
  {
    slug: 'scavland-beginner-guide',
    category: 'サバイバル',
    title: 'Scavland 初心者攻略ガイド：序盤の生き残り方・脱出・高速ルート＆弾詰まり対策',
    shortTitle: '初心者攻略ガイド',
    description: 'Scavland（スカブランド）の初心者向け完全サバイバルガイド：Zalesye荒野での初レイド、Shift+クリックによる高速ルート、武器耐久度とジャム（弾詰まり）回避、安全な夜間脱出手順を解説。',
    evidence: '公式パッチノート 0.5.169',
    updated: '2026-09-08',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland 初心者向けサバイバルガイド — レイド攻略と安全な脱出',
    answer: 'レイド開始直後にマップ（<strong>Mキー</strong>）を開き、最も近い緑色の脱出地点（<strong>Extraction Point</strong>）を確認してください。夜間は視界が<strong>10メートル</strong>に縮小し狂暴なミュータントが徘徊するため、必ず<strong>日没（<strong>21:00</strong>）</strong>前に<strong>セーフハウス</strong>へ帰還するのが鉄則です。所持品は<strong>Shift+クリック</strong>で一括移動し、武器耐久度は<strong>50%以上</strong>を常に維持しましょう。',
    steps: [
      '01 · Shift+クリックで高速回収：アイテムを1個ずつドラッグせず、[Shift+左クリック]でコンテナから一括転送。敵の奇襲を受けるリスクを80%軽減します。',
      '02 · 武器耐久度50%以上をキープ：耐久度が50%を切ると弾詰まり（ジャム）が急増します。携行用の銃器用クリーニングオイルで即座に+15%回復しましょう。',
      '03 · 日中探索と夜間避難：出撃は夜明け（06:00）に行い、21:00前には帰還。夜間にサプレッサーなしで発砲すると半径200mの敵が警戒状態になります。',
      '04 · 高価値換金アイテムを優先：バックパックの重量制限があるため、重い鉄くずよりスパークプラグやライター、ワイヤーなど高額パーツを優先回収して売却。',
      '05 · セーフハウス保管庫の活用：拠点保管庫（Stash）のアイテムは死亡しても100%保護されます。レイド出発前に予備の弾薬や医薬品を預けておきましょう。'
    ],
    facts: [
      ['ジャンル', 'ハードコア・見下ろし型ピクセルアートサバイバルRPG'],
      ['レイド標準時間', '1回の探索で約15〜25分'],
      ['デスペナルティ', '死亡地点にバックパックをドロップ（回収可能、拠点保管庫は安全）'],
      ['重要ステータス', '出血、放射能、スタミナ、銃器耐久度'],
      ['ゲームバージョン', 'Steam早期アクセス v0.5.169']
    ],
    faq: [
      ['死亡すると保管庫のアイテムも失われますか？', 'いいえ。失われるのは携行していた装備と<strong>バックパック</strong>のみで、拠点のロッカーに預けた物資は完全に安全です。'],
      ['戦闘中に銃が弾詰まり（ジャム）したらどうする？', 'リロードキー[R]を素早く2回押すかボルトを手動で引いて不発弾・薬莢を排出し、遮蔽物に隠れて整備オイルを使用してください。'],
      ['初心者が最初に目指すべき目標は？', '初期集落周辺で安全な日中ルートを回り、アナトリーとナージャの依頼を受けて初期ルーブルと評判を稼ぎましょう。']
    ],
    related: ['scavland-weapon-repair-and-durability', 'scavland-cheats-and-console-commands', 'scavland-death-and-loot-recovery'],
    videoId: 'JRAOxOjeoc8',
    videoTitle: '【Scavland攻略】初心者が生き残るための完全サバイバルガイド (Mars)',
    videoChannel: 'Mars'
  },
  {
    slug: 'scavland-cheats-and-console-commands',
    category: 'システム',
    title: 'Scavland チート＆コンソールコマンド解説：デバッグモード・アイテム生成・トレーナー',
    shortTitle: 'チート＆コンソール',
    description: 'Scavlandのチートコード、開発者コンソールコマンド、シングルプレイ用トレーナー（WeMod / Cheat Engine）、エクスプローラーモード公式設定の完全解説。',
    evidence: 'コミュニティ報告ベース',
    updated: '2026-09-08',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: 'Scavland 開発者コンソールとチート・デバッグツール解説',
    answer: 'Scavlandでチートやデバッグコマンドを利用する場合、最も安全な方法はワールド設定の公式「<strong>エクスプローラーモード</strong>（Explorer Mode）」を有効化することです。<strong>焚き火</strong>での即時全快や<strong>スタミナ</strong>消費低減が公式に適用されます。PC版Steamの起動オプションに「<strong>-dev</strong>」または「<strong>-console</strong>」を指定することでデバッグオーバーレイの呼び出しが可能です。',
    steps: [
      '01 · 公式<strong>エクスプローラーモード</strong>の推奨：外部ツールを使わずに、難易度設定から<strong>エクスプローラーモード</strong>をON。セーブデータ破損の危険なく快適にプレイできます。',
      '02 · Steam起動オプションの設定：SteamライブラリでScavlandを右クリック ➔ プロパティ ➔ 一般 ➔ 起動オプションに「<strong>-dev</strong>」を入力。',
      '03 · コンソールキーの入力：対応ビルドでチルダキー [~] または [F1] を押して開発者コンソールウィンドウを表示。',
      '04 · オフライン用トレーナーの利用：所持重量無限などの外部ツール（WeMod等）を使用する場合は、必ずSteamをオフラインモードにして実行してください。',
      '05 · セーブデータの事前バックアップ：改造やメモリ書き換えを行う前に、「%USERPROFILE%/AppData/LocalLow/NoShadow/Scavland/Saves/」のセーブファイルを必ずバックアップしてください。'
    ],
    facts: [
      ['公式チート設定', 'エクスプローラーモードで焚き火回復・スタミナ緩和・安全保管が標準利用可能'],
      ['起動オプション', '-dev または -console でUnityデバッグログが有効化'],
      ['コンソールキー', '[~] または [F1] キーでコンソール表示'],
      ['セーブデータ保存先', '%USERPROFILE%/AppData/LocalLow/NoShadow/Scavland/Saves/'],
      ['マルチプレイ方針', 'Co-opマッチング実装後は外部ツールの使用が制限されます']
    ],
    faq: [
      ['シングルプレイでトレーナーを使うとBANされますか？', 'いいえ。オフラインシングルプレイでの重量制限解除や資金増加によるSteam VAC BANの報告はありません。ただしセーブ破損には十分ご注意ください。'],
      ['アイテム生成（Item Spawn）の書式は？', '開発者ビルドでは「spawn [アイテムID] [数量]」の構文が使用されます。'],
      ['正規プレイで一番効率よくお金を稼ぐ方法は？', 'スパークプラグ、ライター、ワイヤーなどの高単価交易品を集落の商人に持ち込んで売却するのが最速かつ安全です。']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapon-repair-and-durability', 'scavland-steam-deck-and-handheld-settings']
  },
  {
    slug: 'scavland-weapon-repair-and-durability',
    category: '装備',
    title: 'Scavland 武器耐久度・ジャム修理ガイド：銃器メンテナンス＆作業台オーバーホール',
    shortTitle: '武器修理＆ジャム対策',
    description: 'Scavlandにおける武器の劣化メカニズム、銃身の汚れ、弾詰まり（ジャム）の解消方法、クリーニングオイルの使い方と作業台修理の完全ガイド。',
    evidence: '公式パッチノート・コミュニティ報告',
    updated: '2026-09-08',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: 'Scavland 武器改造・耐久度修理インターフェース',
    answer: 'Scavlandの銃器は発砲ごとに耐久度が摩耗し、50%を下回ると<strong>弾詰まり（<strong>ジャム</strong>）</strong>の発生確率が指数関数的に跳ね上がります。レイド中は<strong>クリーニングオイル</strong>で即座に70%まで応急手当を行い、拠点のワークベンチ（<strong>作業台</strong>）でスプリングや<strong>金属くず</strong>を使って<strong>100%</strong>まで修理するのがベストです。',
    steps: [
      '01 · 耐久度ゲージを常時監視：メイン武器の耐久バーを確認。<strong>40%未満</strong>の銃を危険度の高い地下バンカーに持ち込んではいけません。',
      '02 · <strong>クリーニングオイル</strong>の携帯：フィールドでの即時メンテナンス用にオイルを<strong>バックパック</strong>に常備（最大70%まで耐久度を<strong>+15%</strong>回復）。',
      '03 · 拠点<strong>作業台</strong>での完全修理：傷んだ銃を<strong>セーフハウス</strong>の<strong>作業台</strong>に持ち込み、<strong>金属スクラップ</strong>やバネを消費して<strong>100%</strong>コンディションまで再生。',
      '04 · 戦闘中のジャム即時解除：戦闘中に銃が詰まったら、素早く[R]キーを押して不良薬莢を排出し、次弾を装填してください。',
      '05 · 不要な銃のパーツ取り：ボロボロの銃を分解・売却する前に、必ず高倍率スコープやサプレッサーを取り外してストックしましょう。'
    ],
    facts: [
      ['ジャム発生閾値', '耐久度70%以上はジャム率0%、50%未満から射撃ごとに不発リスクが急上昇'],
      ['メンテナンス手段', '携行オイル（簡易補給）とセーフハウス作業台（完全オーバーホール）の2段階'],
      ['修理素材', '金属スクラップ、銃器スプリング、精密工具キット'],
      ['排莢ショートカット', 'リロードキー[R]の2回押しで手動サイクル排莢']
    ],
    faq: [
      ['武器修理キットはどこで手に入りますか？', '中立集落のガンスミス工房や、ソビエト軍事バンカー内のロッカーで高確率で見つかります。'],
      ['サプレッサーも摩耗しますか？', 'はい。サプレッサーも一定発砲数で消音性能が低下するため、定期的な点検が必要です。']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapons-and-attachments', 'scavland-cheats-and-console-commands'],
    videoId: 'G2QsRe2kj_I',
    videoTitle: '【Scavland 0.7.2】上級・エキスパート武器修理キット設計図と入手方法 (Game Detox)',
    videoChannel: 'Game Detox Dopamine'
  },
  {
    slug: 'scavland-death-and-loot-recovery',
    category: 'サバイバル',
    title: 'Scavland 死亡時の仕様とアイテム回収ガイド：デスペナルティ＆バックパック回収',
    shortTitle: '死亡とアイテム回収',
    description: 'Scavlandでのデスペナルティ、ロストしたバックパックの回収方法、マップ上のマーカー確認と安全な死体回収ルートの立ち回り。',
    evidence: 'コミュニティ報告ベース',
    updated: '2026-09-08',
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: 'Scavland 地下通路での死亡現場と装備回収ルート',
    answer: 'Scavlandで死亡してもキャラクターの基本能力や<strong>セーフハウス</strong>の保管庫は失われません。携行していた<strong>バックパック</strong>のみが死亡座標に残されるため、予備の安価な装備を整えてマップの<strong>遺品マーカー</strong>へ回収レイドに向かうことができます。',
    steps: [
      '01 · 拠点リスポーンとマップ確認：<strong>セーフハウス</strong>で復活したら、全体マップ（M）で死亡ビーコンの位置と周囲の地形を確認。',
      '02 · 予備装備の選定：最高級の装備を持ち出さず、安価な<strong>予備ピストル</strong>と<strong>止血帯</strong>・弾薬のみの身軽な装備で出撃。',
      '03 · 現場周囲のクリアリング：倒された場所の近くには敵ミュータントやNPCスカベンジャーがまだ潜んでいるため、周囲を慎重に偵察。',
      '04 · <strong>バックパック</strong>の回収と即時離脱：ドロップしたバッグから最重要物資を回収し、事前に決めた安全な撤退ルートで脱出地点へ直行。'
    ],
    facts: [
      ['パーシステンス仕様', 'ワールド内のドロップしたバックパックは回収または上書きされるまで維持'],
      ['拠点保管の安全性', 'セーフハウスのスタッシュに格納されたアイテムは死亡時も100%保護'],
      ['回収の鉄則', '回収用レイドにメイン装備を持ち出して二次災害を起こさないこと']
    ],
    faq: [
      ['敵NPCが私の<strong>バックパック</strong>を漁ることはありますか？', '巡回中のNPCスカベンジャーが遺品付近を警戒している場合がありますが、中身は回収可能です。'],
      ['回収に行く制限時間はありますか？', '時間制限はありませんが、回収前に再度死亡すると古いバックパックの位置が更新される場合があります。']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapon-repair-and-durability', 'scavland-mist-survival-and-radiation'],
    videoId: 'WyI0vB4qE7A',
    videoTitle: 'Scavland 死亡時の仕様と死体回収の鉄則 (Mars)',
    videoChannel: 'Mars'
  },
  {
    slug: 'scavland-steam-deck-and-handheld-settings',
    category: 'プラットフォーム',
    title: 'Scavland Steam Deck・携帯ゲーミングPC 設定ガイド：コントローラーと表示の調整',
    shortTitle: 'Steam Deck 最適設定',
    description: 'Steam Deckや<strong>ROG Ally</strong>など携帯機でScavlandを遊ぶための設定の出発点：解像度、フレームレートとTDPの目安、コントローラー配置、文字サイズ。ここに載せているのは実測値ではなくおすすめ設定です。',
    evidence: 'Steam公式アナウンス（コントローラー対応・Steam Deckを想定して設計）／設定はおすすめ',
    updated: '2026-09-08',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: 'Steam Deck上でScavlandを表示しているゲーム画面',
    answer: 'Scavlandはフルコントローラー対応で、開発者によれば「Steam Deckと携帯機でのプレイを想定して設計」されているため、特別な設定をしなくても遊べます。<strong>アップデート0.7.0</strong>では「Steam Deckでのテキストサイズ改善」も挙げられています。以下はあくまで出発点となるおすすめ設定で、実測値ではありません。まずはゲーム標準のプリセットから始め、静音性やバッテリーを持たせたい場合はフレームレート上限やTDPを少しずつ下げて調整してください。',
    steps: [
      '01 · 画面解像度：Steam Deckのパネルは<strong>1280x800</strong>（16:10）です。まずはこの解像度を基準にし、別の解像度にする場合はアスペクト比を確認しましょう。',
      '02 · 電力設定の調整：SteamOSのクイックアクセス（•••）では<strong>TDP上限</strong>と<strong>GPUクロック上限</strong>を設定できます。初期値から少しずつ下げ、フレームレートを確認しながら自分に合うバランスを探してください。',
      '03 · コントローラー配置の選択：Steamのコントローラー設定からコミュニティ配置を参照し、トラックパッド照準やラジアル操作を試したうえで自分の配置を保存できます。',
      '04 · 文字が小さいと感じた場合：<strong>1280x800</strong>でアイテム名が見づらいときは、設定のアクセシビリティから<strong>UIテキストサイズ</strong>を調整してください。'
    ],
    facts: [
      ['携帯機での対応', 'フルコントローラー対応。開発者はSteam Deckと携帯機でのプレイを想定して設計したと述べています'],
      ['ValveのDeck認定', 'SteamストアページにDeck互換バッジの表示はありません'],
      ['フレームレート', '実測値は掲載していません。クイックアクセスのフレームレート上限をご利用ください'],
      ['TDP上限', 'SteamOSのクイックアクセスで調整可能。必要に応じて少しずつ下げてください']
    ],
    faq: [
      ['文字は7インチ画面でも読みやすいですか？', 'ピクセルUIは<strong>1280x800</strong>にスケールし、<strong>アップデート0.7.0</strong>ではSteam Deckでのテキストサイズ改善が明記されています。それでも小さい場合は<strong>UIテキストサイズ</strong>を調整してください。'],
      ['ジャイロエイムは使えますか？', 'はい。Steam入力からジャイロをマウス操作に割り当てることで、直感的な射撃エイムが可能です。']
    ],
    related: ['scavland-beginner-guide', 'scavland-price-and-regional-editions', 'scavland-weapons-and-attachments'],
    videoId: 'Zx0Uon9RJM4',
    videoTitle: 'Scavland Steam Deck実機プレイ＆最適動作検証 (ciastek)',
    videoChannel: 'ciastek'
  },
  {
    slug: 'scavland-price-and-regional-editions',
    category: 'リリース＆価格',
    title: 'Scavland Steam価格・早期アクセス割引・日本語対応情報まとめ',
    shortTitle: '価格＆エディション情報',
    description: 'ScavlandのSteam販売価格、ローンチ10%割引、早期アクセス配信範囲についての解説。',
    evidence: 'Steam公式ストアデータ 2026年9月確認',
    updated: '2026-09-08',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: 'Scavland Steam公式価格と割引キャンペーン',
    answer: 'Scavlandは2026年9月4日に<strong>Steam早期アクセス</strong>として<strong>定価1,980円</strong>（$19.99 USD）でリリースされました。発売初週は<strong>10%割引</strong>（約1,780円）が適用されます。早期アクセス購入者は今後の大型アップデート（Act II/IIIや武器追加）を追加料金なしでプレイ可能です。',
    steps: [
      '01 · Steam公式ストアで購入：非正規キーサイトを避け、クラウドセーブ対応のSteam公式ストア（<strong>App ID 3373500</strong>）で購入。',
      '02 · 初週割引を活用：リリース初週の<strong>10%OFF</strong>期間を利用して最安値でゲームを確保。',
      '03 · 動作環境の確認：<strong>RAM 8GB</strong>および<strong>GeForce GTX 960</strong>以上の最低スペックを満たしているか事前確認。'
    ],
    facts: [
      ['基本価格', '1,980円 / $19.99 USD（Steam早期アクセス）'],
      ['課金要素', '有料ガチャやマイクロトランザクションなしの買い切り制'],
      ['正式版への引き継ぎ', '早期アクセス購入者は正式リリース後もそのままプレイ可能']
    ],
    faq: [
      ['デラックス版やDLCはありますか？', '現在は<strong>スタンダード早期アクセス版</strong>のみの販売です。'],
      ['PS5やSwitchへの移植予定はありますか？', '現在はPC（Steam）先行リリースとなっており、コンソール版は早期アクセス終了後に検討予定です。']
    ],
    related: ['scavland-beginner-guide', 'scavland-steam-deck-and-handheld-settings', 'scavland-vs-zero-sievert-comparison'],
    videoId: 'sulLD0aNdOk',
    videoTitle: 'Scavland 購入前チェック＆エディション機能解説 (The Singleplayer Squad)',
    videoChannel: 'The Singleplayer Squad'
  },
  {
    slug: 'scavland-weapons-and-attachments',
    category: '装備',
    title: 'Scavland 武器一覧＆おすすめアタッチメント改造ガイド：銃器カスタム完全版',
    shortTitle: '武器一覧＆アタッチメント',
    description: 'Scavlandに登場する25種類以上の銃器と300種類以上のアタッチメントパーツ：反動制御、光学照準器、マズルサプレッサー、弾薬の選び方。',
    evidence: '公式パッチノート・コミュニティ報告',
    updated: '2026-09-08',
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: 'Scavland 銃器カスタムとアタッチメント装備画面',
    answer: 'Scavlandでは25種類以上の火器と300種類を超えるアタッチメントが用意されています。まずはリコイル（反動）制御と耐久性を最優先にカスタムし、夜間レイド用には<strong>フラッシュライト</strong>や<strong>暗視スコープ</strong>、消音<strong>サプレッサー</strong>を組み込むのが基本戦術です。',
    steps: [
      '01 · 用途に応じた銃の選択：近接室内戦には<strong>ショットガン</strong>や<strong>サブマシンガン</strong>、遠距離野外戦には<strong>マークスマンライフル</strong>を配備。',
      '02 · <strong>サプレッサー</strong>の装着：発砲音による周囲のミュータント呼び寄せを防ぐため、<strong>サプレッサー</strong>は最優先で確保。',
      '03 · 弾薬口径の確認：敵のアーマーレベルに合わせた<strong>徹甲弾（AP弾）</strong>や通常弾の使い分けが勝敗を分けます。'
    ],
    facts: [
      ['銃器バリエーション', 'ピストル、SMG、アサルトライフル、ショットガン、スナイパーライフル（計25種以上）'],
      ['アタッチメント数', '照準器、マズル、フォアグリップ、マガジン等300種類以上'],
      ['弾薬システム', '実在口径に基づくリアルな弾薬管理と徹甲特性']
    ],
    faq: [
      ['最強の武器は何ですか？', '絶対的な単一の最強武器はありませんが、入手性と威力のバランスが良いAK系アサルトライフルが序盤から中盤まで重宝します。'],
      ['余った弾薬の抜き方は？', 'インベントリ内の武器を右クリックして「マガジンから排弾」を選択することで弾薬を回収できます。']
    ],
    related: ['scavland-weapon-repair-and-durability', 'scavland-beginner-guide', 'scavland-cheats-and-console-commands'],
    videoId: 'JQDdSAYkOkQ',
    videoTitle: '【Scavland】最強武器 63 Dragoon の入手場所・性能 (Game Detox)',
    videoChannel: 'Game Detox Dopamine'
  },
  {
    slug: 'scavland-mist-survival-and-radiation',
    category: '探索',
    title: 'Scavland ミスト（霧）サバイバルガイド：放射線防護・ガスマスク・異常アーティファクト',
    shortTitle: 'ミスト＆放射能対策',
    description: '致死性の有毒ガスと異常現象が渦巻く「ミスト」エリアの生き残り方：ガスマスクのフィルター耐久度管理、抗放射線薬、アーティファクト採取。',
    evidence: '公式ゲームプレイトレーラー',
    updated: '2026-09-08',
    image: '/images/screenshots/steam_ss_09.webp',
    imageAlt: 'ミストが立ち込める有毒放射能地帯を進むスカベンジャー',
    answer: '「ミスト（Mist）」は<strong>Zalesye</strong>全域に不定期に発生する有毒ガス現象です。視界が極端に悪化し凶暴な変異体が出現しますが、高額で取引されるレアな<strong>アーティファクト</strong>が多数出現します。<strong>ガスマスク</strong>と予備フィルター、<strong>抗放射線薬（<strong>Rad-Away</strong>）</strong>を必ず装備して突入してください。',
    steps: [
      '01 · 天候予報と<strong>ガイガーカウンター</strong>：霧の接近時には<strong>ガイガーカウンター</strong>が反応するため、開けた平原での長居は避ける。',
      '02 · <strong>ガスマスク</strong>のフィルター残量管理：フィルター残量がゼロになると急激な放射線障害と呼吸器ダメージが発生。',
      '03 · アノマリースキャナーの活用：[3]キーでスキャナーを構え、警告ビープ音の間隔が狭まる方向へ進んでアーティファクトを回収。'
    ],
    facts: [
      ['ミストの特性', '視界制限（15m以内）、放射能蓄積、凶暴ミュータントのスポーン増加'],
      ['フィルター持続時間', '標準フィルターで約8分、軍用高密度フィルターで約20分'],
      ['アーティファクト価値', 'ミスト時に採取した鉱石は通常時の2倍以上の取引価値']
    ],
    faq: [
      ['フィルターが切れたら即死しますか？', '即死はしませんが、最大HPと<strong>スタミナ</strong>上限が急速に削られ、数分で行動不能になります。'],
      ['放射線被曝を治療する方法は？', '抗放射線アンプル（Rad-Away）または活性炭錠剤を使用することで体内の被曝量を安全値まで下げられます。']
    ],
    related: ['scavland-beginner-guide', 'scavland-death-and-loot-recovery', 'scavland-weapon-repair-and-durability']
  },
  {
    slug: 'scavland-vs-zero-sievert-comparison',
    category: '比較・考察',
    title: 'Scavland vs ZERO Sievert 徹底比較：7つの違い・ミスト・Co-op予定',
    shortTitle: 'ZERO Sievert との比較',
    description: '人気ポストアポカリプス見下ろし型シューター「ZERO Sievert」と「Scavland」のゲーム性、システム、難易度、マルチプレイ予定の違いを徹底検証。',
    evidence: '公開情報に基づく比較',
    updated: '2026-09-08',
    image: '/images/screenshots/steam_ss_08.webp',
    imageAlt: 'Scavland と ZERO Sievert のゲーム画面比較',
    answer: '両作ともタルコフ（EFT）ライクな2D見下ろし型サバイバルですが、<strong>ZERO Sievert</strong>がプロシージャル生成マップとスキル育成中心であるのに対し、Scavlandは作り込まれた固定ハンドクラフトマップ、リアルな武器耐久度・<strong>ジャム</strong>システム、有毒ミスト現象、そして将来の<strong>Co-op協力プレイ</strong>を特徴としています。',
    steps: [
      '01 · マップ構造の違い：<strong>ZERO Sievert</strong>は自動生成、Scavlandは緻密に配置された固定マップで探索の学習深度が深い。',
      '02 · 武器メカニクス：Scavlandは<strong>耐久度50%</strong>未満での薬莢<strong>ジャム</strong>（弾詰まり）手動排莢など、よりリアルな銃器挙動を採用。',
      '03 · マルチプレイ展望：Scavlandはロードマップにて<strong>Co-op協力プレイ</strong>の実装を明言。'
    ],
    facts: [
      ['視点', '両作ともに2Dトップダウン（見下ろし型）シューター'],
      ['マップ生成', 'ZERO Sievert: ランダム自動生成 / Scavland: 固定ハンドクラフト'],
      ['マルチプレイ', 'ZERO Sievert: 完全ソロ専用 / Scavland: Co-op協力プレイ予定あり']
    ],
    faq: [
      ['<strong>ZERO Sievert</strong>が好きなプレイヤーにもおすすめですか？', 'はい。硬派なアイテム管理や緊迫感のある銃撃戦が好きな方には間違いなく刺さる完成度です。']
    ],
    related: ['scavland-beginner-guide', 'scavland-price-and-regional-editions', 'scavland-steam-deck-and-handheld-settings'],
    videoId: 'ETFXsWYOVlM',
    videoTitle: 'Zero Sievert系見下ろし型脱出サバイバル比較 (Oscar Mikey)',
    videoChannel: 'Oscar Mikey'
  },
  {
    slug: 'scavland-factions-and-reputation',
    category: '進行・派閥',
    title: 'Scavland 派閥（ファクション）一覧＆評判システム攻略：商人ランクと停戦協定',
    shortTitle: '派閥一覧＆評判システム',
    description: 'Zalesye荒野に割拠する10の派閥組織、商人ランク解放条件、友好度・敵対関係の仕組み、外交官ライサによる停戦リセット方法。',
    evidence: '公式パッチノート・コミュニティ報告',
    updated: '2026-09-08',
    image: '/images/cards/card_3_quests_factions.webp',
    imageAlt: 'Scavland 派閥拠点と検問所ガードの警戒態勢',
    answer: 'Scavlandには10の派閥が存在し、初期エリア（Act I）では6大派閥が活動しています。日課クエストを達成することで名声（+50〜+200）が上がり、商人ランクが解放されて高性能な光学照準器や軍用弾薬が購入可能になります。評判が<strong>-300</strong>を下回ると見敵必殺の敵対状態になりますが、<strong>外交官ライサ</strong>に停戦任務を頼むことで中立に戻せます。',
    steps: [
      '01 · 初期6大派閥の把握：<strong>ラーダ</strong>、<strong>庶民連合</strong>、<strong>アコライト</strong>、<strong>メカニスト</strong>、<strong>パラディン</strong>、<strong>ガナーズ</strong>の特徴を理解。',
      '02 · トレーダーランクの解放：<strong>メカニスト</strong>や<strong>ガナーズ</strong>の評判を上げ、Tier 2〜3の高性能銃器パーツをアンロック。',
'03 · 敵対化の回避：不用意に派閥の検問所を攻撃すると評判が大幅ダウン。<strong>-300</strong>以下で即座に銃撃されるため注意。',
      '04 · <strong>外交官ライサ</strong>の停戦協定：万が一敵対化してしまったら、<strong>中立チャペル</strong>のライサを訪ねて非戦闘の配達任務で中立（0）にリセット。'
    ],
    facts: [
      ['派閥総数', '10組織（Act Iで6組織と直接対話可能）'],
      ['評判ペナルティ閾値', '-300以下で即座に交戦状態（敵対）'],
      ['無条件取引商人', '交差点アネックスの商人ヴォロディミルは評判に関係なく常時取引可能']
    ],
    faq: [
      ['すべての派閥と仲良くすることは可能ですか？', 'はい。特定の派閥暗殺クエストを避け、物資調達や変異体討伐クエストを中心に行うことで全派閥と中立以上を維持できます。']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapon-repair-and-durability', 'scavland-weapons-and-attachments']
  },
  {
    slug: 'scavland-sleep-and-world-reset-guide',
    category: 'サバイバル',
    title: 'Scavland 睡眠＆ワールドリセット完全解説：24時間サイクル・焚き火回復・バンカー再湧き仕様',
    shortTitle: '睡眠・ワールドリセット',
    description: 'Scavlandの睡眠システム徹底解説：1〜12時間の時間経過、夜間（21:00〜06:00）の危険回避、24時間ごとの地上物資＆契約リセット、地下バンカーの持続ロック仕様。',
    evidence: '公式パッチノート 0.5.169',
    updated: '2026-09-09',
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: 'Scavland セーフハウスのベッドと時間経過システム',
    answer: 'Scavlandにおける「睡眠（Sleep）」は時間を進め、危険な夜間（<strong>21:00</strong>〜<strong>06:00</strong>）をスキップし、<strong>24時間</strong>ワールドサイクルを更新するための基本メカニクスです。<strong>セーフハウス</strong>のベッドで寝ることで<strong>アナトリー</strong>や<strong>ナージャ</strong>のデイリー契約と地上の物資箱が再湧き（リセット）します。パッチv0.5.169では<strong>焚き火</strong>の周りでパッシブHP回復が付与されますが、<strong>脱水症状</strong>のまま寝ると<strong>スタミナ</strong>回復が0%にロックされるため、事前に沸騰させた水を飲んでおきましょう。なお、地下バンカーやカードキーの金庫室は無限周回を防ぐため数日間の固定クールダウンが適用されます。',
    steps: [
      '01 · セーフハウスのベッドで睡眠：集落のシェルター内にあるキャンバスベッドで[E]キーを押し、1〜12時間の睡眠時間を設定して朝（06:00）まで安全に時間を進めます。',
      '02 · 24時間ワールドリセット：ゲーム内時間で24時間経過すると、地上のジャンク箱や商人の在庫、デイリー契約（アナトリーの物資回収・ナージャの討伐任務）が全更新されます。',
      '03 · 地下バンカーの再湧き制限：地下軍事施設（バンカーB-4など）は通常の睡眠ではリセットされず、高レア装備の無限増殖を防ぐための独自ロック時間が設けられています。',
      '04 · 焚き火での休息と水分補給：焚き火の近くで休むとHPが持続回復します。汚染水を焚き火で沸騰させて清潔な水を作り、脱水によるスタミナ低下を防ぎましょう。',
      '05 · 夜間外出禁止（21:00〜06:00）：夜間は視界が10mに狭まり強力な夜間変異体が出現します。夜明け（06:00）に出撃し、日没前に帰還するのが鉄則です。'
    ],
    facts: [
      ['睡眠可能な場所', 'セーフハウス内のベッドおよび解放済み派閥拠点の簡易寝床'],
      ['24時間リセット対象', '地上ジャンクコンテナ、商人の在庫、日替わり契約掲示板'],
      ['バンカーの仕様', '地下施設やレッドカード金庫は睡眠による即時リセット不可'],
      ['焚き火休息バフ', 'v0.5.169で追加された周囲HP自然回復（清潔な水の併用が必要）'],
      ['夜間の危険性', '視界10m制限および銃声による広範囲索敵']
    ],
    faq: [
      ['どうやって寝て時間を進めますか？', '<strong>セーフハウス</strong>内のベッドに近づいてインタラクトキーを押し、希望の睡眠時間を選択します。'],
      ['寝ても地下バンカーの敵や宝箱が復活しません。', '仕様です。地下バンカーやキーカード部屋は高ティアアイテムの無限ファームを防ぐため、通常の睡眠では即時リセットされません。'],
      ['寝起きにスタミナが全く回復しないのはなぜ？', '重度の脱水（Severe Dehydration）デバフが原因です。清潔な水を飲み、焚き火の近くで休むことで解消されます。']
    ],
    related: ['scavland-beginner-guide', 'scavland-weapon-repair-and-durability', 'scavland-quests-and-contracts'],
    videoId: 'IhLy3jap04Y',
    videoTitle: 'Scavland 睡眠システムと24時間リセット仕様 (Games Quality Zone)',
    videoChannel: 'Games Quality Zone'
  },
  {
    slug: 'scavland-consumables-and-medical-supplies',
    category: 'サバイバル',
    title: 'Scavland 医療品＆消費アイテム攻略：止血・水分補給・放射能対策',
    shortTitle: '医療品＆消費アイテム',
    description: 'Scavlandの医療品・消耗品システム完全攻略：出血の止め方、脱水症状と煮沸水、骨折の添え木治療、医療キット、抗放射線薬の使い方。',
    evidence: '公式パッチノート 0.6.0',
    updated: '2026-09-15',
    image: '/images/harvested/2026-09-11/we-hear-you-changes-are-coming/we-hear-you-changes-are-coming-frame-498s.jpg',
    imageAlt: 'Scavland 医療品・食料・飲料水のインベントリ管理画面',
    answer: 'Scavlandにおける医療品と消耗品の適切な使用は、生還と全ロストを分ける最重要スキルです。動脈<strong>出血</strong>は毎秒大ダメージを与えるため医療キットより先に包帯で止血が必要であり、脱水状態で寝ると<strong>スタミナ</strong>回復が0%にロックされます。',
    steps: [
      '01 · 飲用水の確保と脱水防止：洗面台の汚染水は空き缶を使い<strong>焚き火</strong>で沸騰させて清潔な水を作成。脱水のまま寝ると<strong>スタミナ</strong>が回復しなくなります。',
      '02 · 止血の最優先化：動脈出血は毎秒<strong>5HP</strong>を削り、医療キットの回復効果を相殺します。包帯または止血帯をスロット[5]にセットし即座に止血しましょう。',
      '03 · 骨折への添え木治療：高所落下や散弾被弾で骨折すると移動速度-40%、銃のブレ+60%の重いデバフが発生。木製添え木で即座に治療できます。',
      '04 · 放射能除染とラッドアウェイ：ガイガーカウンターの黄ゾーンでは<strong>活性炭錠剤</strong>を服用。高濃度の赤いミスト地帯用には軍用ラッドアウェイを温存。',
      '05 · 戦闘刺激薬とカロリー補給：缶詰（トゥションカ）や戦闘糧食で最大スタミナ上限を回復。エナジードリンクは所持重量+10kgで脱出ダッシュを助けます。'
    ],
    facts: [
      ['煮沸した水', '脱水を解消；汚染水を焚き火で沸騰させて作成（水分+40回復）'],
      ['滅菌包帯', '軽度の出血を2秒で止血；清潔な布+消毒液でクラフト可能'],
      ['軍用止血ガーゼ', '重度の動脈出血を即座に止血；病院や軍用金庫の貴重品'],
      ['木製添え木', '骨折デバフ（移動速度-40%、銃のブレ+60%）を完全解除'],
      ['ラッドアウェイ注射器', '放射線量150mSvを除染；Zalesyeの医師アンナから購入可能'],
      ['脱水ロック仕様', '脱水状態でベッドに寝るとスタミナ自然回復が完全に停止']
    ],
    faq: [
      ['<strong>出血</strong>はどうやって止めますか？', '包帯または<strong>止血帯</strong>をクイックスロットから使用します。<strong>出血</strong>が続いている間は通常の医療キットを使ってもHPは回復しません。'],
      ['寝た後にスタミナが回復しないのはなぜ？', '重度の脱水デバフが原因です。ベッドで寝る前に必ず煮沸した水やソーダを飲んでおきましょう。'],
      ['医療品はどこで一番多く手に入りますか？', 'Zalesye病院の医療病棟が最も高密度な出現スポットですが、舌の変異体（リッカー）が徘徊しているため銃器の準備が必要です。']
    ],
    related: ['scavland-beginner-guide', 'scavland-sleep-and-world-reset-guide', 'scavland-hospital-quest-and-medical-supplies']
  },
  {
    slug: 'scavland-loot-and-scavenging',
    category: '資源・アイテム',
    title: 'Scavland 換金・資材・アイテム完全攻略：ロープ・電池・電球の用途と売却先',
    shortTitle: '換金・資材攻略',
    description: 'Scavland（スカブランド）のアイテム換金・資材管理ガイド：ロープや乾電池・電球のクラフト用途判定、スパークプラグ等の高額売却先、重量比効率を徹底解説。',
    evidence: '公式パッチノート 0.6.0',
    updated: '2026-09-16',
    image: '/images/harvested/2026-09-11/we-hear-you-changes-are-coming/we-hear-you-changes-are-coming-frame-332s.jpg',
    imageAlt: 'Scavland アイテム整理と換金資材・クラフト素材の分類インターフェース',
    answer: '早期アクセス v0.6.0 において、作業台で実際にクラフトに使用できる素材は<strong>金属くず</strong>、<strong>銃器スプリング</strong>、<strong>清潔な布</strong>、<strong>消毒液</strong>、水、<strong>火薬</strong>などに限られます。<strong>ロープ</strong>、<strong>乾電池</strong>、<strong>白熱電球</strong>、<strong>配線</strong>などは現時点でクラフトレシピが存在せず、純粋な換金アイテム（バーター品）です。ただし売却先には注意が必要で、電子部品や<strong>スパークプラグ</strong>は<strong>アナトリー</strong>やメカニスト商人に売ると2〜3倍の高値がつきます。',
    steps: [
      '01 · クラフト素材と純粋な換金ゴミの選別：v0.6.0では<strong>ロープ</strong>や電池、電球にクラフトレシピはありません。拠点の保管庫を圧迫する前に換金しましょう。',
      '02 · 商人の専門分野で売却価格を最大化：<strong>スパークプラグ</strong>やリレーは<strong>アナトリー</strong>に売却。専門外の商人に売ると50%の減額ペナルティが発生します。',
      '03 · 重量対価格（ルーブル/kg）を重視：車のバッテリーのような重量物よりも、<strong>スパークプラグ</strong>や<strong>ライター</strong>など1マスで高単価なアイテムを優先。',
      '04 · Shift+クリックによる高速回収：危険なレイド中はコンテナのアイテムを[Shift+左クリック]で即座に一括回収し、無防備な時間を最小限に抑えます。',
      '05 · 拠点保管庫の予備備蓄：武器修理用の銃器スプリング10個と金属くず20個は安全な拠点ロッカーに常備し、余剰な日用品ゴミは即座に売却しましょう。'
    ],
    facts: [
      ['クラフト用途の有無', 'ロープ、電池、電球はv0.6.0現在クラフトレシピなし（純粋な換金アイテム）'],
      ['実用クラフト素材', '金属くず、銃器スプリング、清潔な布、消毒液、煮沸した水、火薬、防弾繊維'],
      ['最高峰の換金効率', 'スパークプラグや軍用ライターは1スロットあたりの換金効率が高い'],
      ['専門商人の買取補正', 'アナトリーやメカニストは工業・電子部品を満額買取；専門外の商人は50%減額'],
      ['高速回収ショートカット', 'Shift+左クリックでコンテナから所持品枠へ一瞬でアイテムを移動可能']
    ],
    faq: [
      ['<strong>ロープ</strong>や<strong>乾電池</strong>、電球はクラフトに使いますか？', 'いいえ。パッチv0.6.0現在、これらのアイテムに<strong>作業台</strong>レシピはなく、商人への売却用バーターアイテムとして機能しています。今後のアップデートで拡張が予告されています。'],
      ['工業部品やスクラップは誰に売るのが一番高いですか？', '初期集落のアナトリー、またはメカニスト陣営の商人に売ると最高値で買い取ってくれます。銃匠ペタルや医師アンナに売ると50%減額されます。'],
      ['序盤のレイドで優先して持ち帰るべきものは？', '包帯や清潔な水などの医療品、使用中の銃に適合する弾薬、そしてスパークプラグやライターなど1マスで高値のつく電子部品です。']
    ],
    related: ['scavland-beginner-guide', 'scavland-crafting-and-trading', 'scavland-merchant-prices-and-barter-guide'],
    videoId: 'l84-X9wHjeM',
    videoTitle: '【Scavland】効率的な金策とおすすめルート攻略 (Nukov)',
    videoChannel: 'Nukov',
    keywords: ['scavland loot', 'scavland 日本語', 'scavland 換金', 'scavland クラフト素材', 'scavland アイテム']
  },
  {
    slug: 'scavland-red-keycard-and-bunker-loot-recovery',
    category: '探索',
    title: 'Scavland 地下バンカー＆赤キーカード攻略：B-4入口の場所・軍用金庫・脱出ルート',
    shortTitle: '地下バンカー＆赤キーカード',
    description: 'Scavland（スカブランド）の地下バンカー完全攻略：ザレシエ（Zalesye）北西部Sector B-4入口の場所、赤キーカード（Red Keycard）による電子金庫の解除、軍用物資リセット周期、換気シャフト脱出ルートを徹底解説。',
    evidence: '公式Steam告知＆コミュニティ報告 · Update 0.7.0',
    updated: '2026-09-19',
    image: '/images/screenshots/steam_ss_08.webp',
    imageAlt: 'Scavland 地下バンカーの防爆隔壁と赤キーカード認証端末',
    answer: 'Scavlandの地下バンカー（Subterranean Bunkers）は、ザレシエ（<strong>Zalesye</strong>）荒野において最高難易度かつ最高峰の軍用物資を獲得できる重要攻略拠点です。最大の複合施設「<strong>セクターB-4</strong>（<strong>Sector B-4</strong>）」は北西部の森林地帯に位置し、コンクリートの排水トレンチと重厚な<strong>防爆ハッチ</strong>が目印となります。内部の軍用金庫室を開けるには、耐久度3回の「<strong>赤キーカード</strong>（<strong>Red Keycard</strong>）」が必要です。バンカー内の物資は退出後<strong>3時間</strong>（または<strong>セーフハウス</strong>での睡眠によるゲーム内<strong>24時間</strong>周期）で再配置されます。警報サイレン作動時は背面の非常用<strong>換気シャフト</strong>から脱出しましょう。',
    steps: [
      '01 · 北西部森林のB-4バンカー入口を特定：ザレシエ北西の森に入り、草木に覆われた線路に沿って<strong>コンクリート排水トレンチ</strong>を進むと、哨戒兵と放射性水たまりの奥に重<strong>防爆ハッチ</strong>があります。',
      '02 · <strong>赤キーカード</strong>（<strong>Red Keycard</strong>）の入手：検問所の指揮官ドロップ、高危険度エリアのエアードロップ、または<strong>ナージャ</strong>の討伐契約報酬から獲得します。消耗品ですが3回の解錠耐久度を持っています。',
      '03 · 周囲の安全確保とキーカード認証：地上の敵を排除してから階段を下り、緑色に光る端末に<strong>赤キーカード</strong>を通します。開扉中は約<strong>15秒間</strong>のサイレンが鳴り響き、周囲の敵を呼び寄せるため迎撃の準備をしてください。',
      '04 · 狭隘通路の制圧と軍用コンテナ回収：狭いコンクリート通路を進み、至近距離戦用<strong>ショットガン</strong>や高貫通ライフルで変異体を排除。<strong>軍用チェスト</strong>から高位アタッチメントや弾薬、軍用プレートを回収します。',
      '05 · バンカーのリセット周期を把握：Update 0.6.0より、地下バンカーは退出後<strong>3時間</strong>経過（または<strong>セーフハウス</strong>のベッドで寝てゲーム内<strong>24時間</strong>周期を経過）することでコンテナや物資が再配置されます。',
      '06 · 非常用<strong>換気シャフト</strong>からの緊急脱出：正面入口はサイレンで敵が集まりやすいため、探索後はバンカー奥の非常用<strong>換気シャフト</strong>をよじ登って地上の森林へ安全に脱出するのが鉄則です。'
    ],
    facts: [
      ['バンカー所在地・入口', 'ザレシエ北西部森林 Sector B-4（コンクリート排水トレンチ奥）'],
      ['金庫アクセス要件', '赤キーカード（Red Keycard / 耐久度3回）を電子端末に通す'],
      ['軍用物資リセット仕様', 'バンカー退出後3時間（またはセーフハウス睡眠による24時間周期）で再配置'],
      ['警報サイレン作動時間', 'カード認証時に約15秒間のサイレンが鳴り周囲の敵を警戒状態にする'],
      ['非常脱出ルート', 'バンカー最奥の換気シャフトから地上の森林へ直接脱出可能'],
      ['検証ベースライン', '公式Steam告知＆コミュニティ報告 · Update 0.7.0']
    ],
    faq: [
      ['地下バンカー（B-4）はマップのどこにありますか？', 'ザレシエ北西の森林地帯にあります。草木に覆われた古い線路の先にある<strong>コンクリート排水トレンチ</strong>と、頑丈な防爆扉を探してください。'],
      ['バンカーの軍用チェストや物資は再出現（リスポーン）しますか？', 'はい。バンカーから退出して3時間経過するか、セーフハウスのベッドで寝て24時間周期を進めることで、解錠したロッカーやコンテナの物資が再配置されます。'],
      ['赤キーカード（Red Keycard）は使い捨てですか？', '1回きりの消費アイテムではなく、3回の耐久チャージを持っています。最大3回までバンカーの扉を解錠可能です。'],
      ['バンカー攻略に最適な装備は？', '狭いコンクリート通路での遭遇戦になるため、散弾銃（ショットガン）や大口径ライフル、暗所用のフラッシュライトの携行を推奨します。']
    ],
    related: ['scavland-beginner-guide', 'scavland-loot-and-scavenging', 'scavland-sleep-and-world-reset-guide', 'scavland-weapon-repair-and-durability'],
    videoId: 'Xbq3ZHQf1YE',
    videoTitle: '【Scavland】全地下バンカーの入り方とシークレットルーム攻略 (Game Detox)',
    videoChannel: 'Game Detox Dopamine',
    keywords: ['scavland バンカー', 'scavland 赤キーカード', 'scavland 地下バンカー', 'scavland bunker', 'scavland bunker entrance', 'scavland red keycard']
  }
,
  {
    slug: 'scavland-is-scavland-worth-it',
    category: "\u8cfc\u5165\u30ac\u30a4\u30c9",
    title: "\u3010Scavland\u653b\u7565\u3011Is It Worth It?\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Is It Worth It?",
    description: "Scavland\u306eIs It Worth It?\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'Official Steam announcements & community reviews · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_01.webp',
    imageAlt: "Scavland atmospheric ruins and tactical survival gameplay showcase",
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
    videoId: '6gZGUJTnqWI',
    videoTitle: "Scavland Is It Worth Your Money?! Spoiler: Yes!",
    videoChannel: "Sergeant Kelvin"
  },
  {
    slug: 'scavland-save-file-location-and-backups',
    category: "\u30b7\u30b9\u30c6\u30e0",
    title: "\u3010Scavland\u653b\u7565\u3011Save File Location\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Save File Location",
    description: "Scavland\u306eSave File Location\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'Official Steam Community Technical FAQs · Update 0.7.0',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_05_inventory_management.webp',
    imageAlt: "Scavland save data management and safehouse stash inventory interface",
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
    related: ["scavland-cheats-and-console-commands", "scavland-death-and-loot-recovery", "scavland-steam-deck-and-handheld-settings", "scavland-patch-0-7-0-update-and-changes"]
  },
  {
    slug: 'scavland-mods-and-mod-support',
    category: "\u30b7\u30b9\u30c6\u30e0",
    title: "\u3010Scavland\u653b\u7565\u3011Mods & Community\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Mods & Community",
    description: "Scavland\u306eMods & Community\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'Community Modding Reports & Nexus Mods · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_10.webp',
    imageAlt: "Modded inventory grid and custom UI telemetry in Scavland",
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
    related: ["scavland-cheats-and-console-commands", "scavland-save-file-location-and-backups", "scavland-russian-language-and-font-fix", "scavland-patch-0-7-0-update-and-changes"]
  },
  {
    slug: 'scavland-steam-deck-performance-optimization',
    category: "\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2",
    title: "\u3010Scavland\u653b\u7565\u3011Steam Deck 60FPS\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Steam Deck 60FPS",
    description: "Scavland\u306eSteam Deck 60FPS\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'In-Game Benchmarks on Steam Deck LCD & OLED · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_04.webp',
    imageAlt: "Scavland running on Steam Deck handheld console with tactical control overlay",
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
    videoId: 'Zx0Uon9RJM4',
    videoTitle: "Czy SCAVLAND to S.T.A.L.K.E.R. w 2D?! Test wydajno\u015bci na Steam Deck LCD 512 GB",
    videoChannel: "ciastek"
  },
  {
    slug: 'scavland-error-crash-fixes-and-troubleshooting',
    category: "\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",
    title: "\u3010Scavland\u653b\u7565\u3011Crash & Error Fixes\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Crash & Error Fixes",
    description: "Scavland\u306eCrash & Error Fixes\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'Steam Community Technical Discussions & Patch 0.7.2 Changelogs',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_06.webp',
    imageAlt: "Scavland error troubleshooting and technical stability guide",
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
    related: ["scavland-save-file-location-and-backups", "scavland-patch-0-7-0-update-and-changes", "scavland-steam-deck-and-handheld-settings", "scavland-cheats-and-console-commands"]
  },
  {
    slug: 'scavland-console-release-status',
    category: "\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",
    title: "\u3010Scavland\u653b\u7565\u3011Console Release Status\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Console Release Status",
    description: "Scavland\u306eConsole Release Status\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'Developer Steam Store Disclosures & Q&A Statements · September 2026',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_08.webp',
    imageAlt: "Scavland tactical map and console release overview",
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
    related: ["scavland-price-and-regional-editions", "scavland-steam-deck-and-handheld-settings", "scavland-early-access-launch-faq-and-roadmap", "scavland-developer-commitments-and-patch-roadmap"]
  },
  {
    slug: 'scavland-tips-and-tricks',
    category: "\u6226\u8853\u30ac\u30a4\u30c9",
    title: "\u3010Scavland\u653b\u7565\u3011Tips & Tricks\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Tips & Tricks",
    description: "Scavland\u306eTips & Tricks\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'Veteran Community Field Manual & Official Discord Mechanics',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_02_bunker_tactical.jpg',
    imageAlt: "Veteran scavenger tactical tips and inventory triage in Scavland",
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
    videoId: 'Hc7e62PoCsM',
    videoTitle: "Scavland: 10 Things the Game DOESN\u2019T Tell You!",
    videoChannel: "Gaming Plus TV"
  },
  {
    slug: 'scavland-best-weapons-tier-list',
    category: "\u88c5\u5099",
    title: "\u3010Scavland\u653b\u7565\u3011Weapons Tier List\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Weapons Tier List",
    description: "Scavland\u306eWeapons Tier List\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'In-Game Ballistics Testing & Community Weapon Manifests · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Scavland weapon tier list ranking and modular firearm comparisons",
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
    videoId: 'JQDdSAYkOkQ',
    videoTitle: "Scavland Ultimate Weapon - 63 Dragoon Item Location",
    videoChannel: "Game Detox Dopamine"
  },
  {
    slug: 'scavland-money-making-guide',
    category: "\u7d4c\u6e08\u30fb\u91d1\u7b56",
    title: "\u3010Scavland\u653b\u7565\u3011Money Making & Rubles\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Money Making & Rubles",
    description: "Scavland\u306eMoney Making & Rubles\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'Official Steam Economy Changelogs & Community Trade Tests · Update 0.7.0',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_04_settlement_camp.webp',
    imageAlt: "Scavland barter market, merchant stands, and high-value loot liquidation",
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
    videoId: 'l84-X9wHjeM',
    videoTitle: "Making MONEY and Getting LOOT in SCAVLAND",
    videoChannel: "Nukov"
  },
  {
    slug: 'scavland-walkthrough-beginner-to-mid',
    category: "\u9032\u884c\u30fb\u30af\u30a8\u30b9\u30c8",
    title: "\u3010Scavland\u653b\u7565\u3011Walkthrough: Early to Mid\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Walkthrough: Early to Mid",
    description: "Scavland\u306eWalkthrough: Early to Mid\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'In-Game Storyline Verification & Steam Community Walkthroughs · Update 0.7.0',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: "Scavland main storyline progression and underground corridor exploration",
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
    videoId: '4Q0BQs4tFJk',
    videoTitle: "SCAVLAND - Full Gameplay Walkthrough Part 1 [FULL GAME] No Commentary",
    videoChannel: "Zish Gaming"
  },
  {
    slug: 'scavland-walkthrough-advanced-endgame',
    category: "\u9032\u884c\u30fb\u30af\u30a8\u30b9\u30c8",
    title: "\u3010Scavland\u653b\u7565\u3011Walkthrough: Endgame\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Walkthrough: Endgame",
    description: "Scavland\u306eWalkthrough: Endgame\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'Endgame Raid Logs & Update 0.7.2 Content Verification',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_07_underground_corridor.webp',
    imageAlt: "Endgame subterranean vault raid and tactical mutant combat in Scavland",
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
    videoId: 'U2O7gSpudGc',
    videoTitle: "6K START to +80,000! Scavland Bunker Run",
    videoChannel: "Mars"
  },
  {
    slug: 'scavland-achievements-guide',
    category: "\u5b9f\u7e3e",
    title: "\u3010Scavland\u653b\u7565\u3011Steam Achievements\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Steam Achievements",
    description: "Scavland\u306eSteam Achievements\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'Official Steamworks Achievement Manifest & Community Guides · September 2026',
    updated: '2026-09-30',
    image: '/images/screenshots/steam_ss_11.webp',
    imageAlt: "Scavland Steam achievement completion badges and trophy roadmap",
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
    related: ["scavland-beginner-guide", "scavland-quests-and-contracts", "scavland-map-and-locations", "scavland-best-weapons-tier-list"]
  },
  {
    slug: 'scavland-ammo-types-and-damage',
    category: "\u88c5\u5099",
    title: "\u3010Scavland\u653b\u7565\u3011Ammo & Calibers\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Ammo & Calibers",
    description: "Scavland\u306eAmmo & Calibers\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'In-Game Ballistics Manifest & Steam Community Testing · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Ammunition boxes, magazine loading, and caliber ballistics in Scavland",
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
    related: ["scavland-weapons-and-attachments", "scavland-best-weapons-tier-list", "scavland-starter-loadouts-and-budget-builds", "scavland-tactical-database-weapons-loot"]
  },
  {
    slug: 'scavland-armor-and-helmets-guide',
    category: "\u88c5\u5099",
    title: "\u3010Scavland\u653b\u7565\u3011Armor & Helmets\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Armor & Helmets",
    description: "Scavland\u306eArmor & Helmets\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'Official Steam Armor Rebalance Notes · Update 0.6.0 & 0.7.0',
    updated: '2026-09-30',
    image: '/images/cards/card_2_weapons_gear.webp',
    imageAlt: "Tactical body armor vests, ballistic helmets, and armor plates in Scavland",
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
    related: ["scavland-starter-loadouts-and-budget-builds", "scavland-weapons-and-attachments", "scavland-patch-0-6-0-update-and-changes", "scavland-death-and-loot-recovery"]
  },
  {
    slug: 'scavland-mutants-and-enemies-guide',
    category: "\u6226\u8853\u30ac\u30a4\u30c9",
    title: "\u3010Scavland\u653b\u7565\u3011Mutants & Enemies\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Mutants & Enemies",
    description: "Scavland\u306eMutants & Enemies\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'In-Game Bestiary Field Testing & Community Combat Manuals · Update 0.7.2',
    updated: '2026-09-30',
    image: '/images/screenshots/ss_03_forest_mutants.jpg',
    imageAlt: "Mutant creatures, mutated wildlife, and bandit patrols in Scavland wasteland",
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
    videoId: 'xQKTC-8BYVU',
    videoTitle: "Scavland 0.7.2 \"Expert\" Firearm Damage Test (Target: Bear)",
    videoChannel: "Game Detox Dopamine"
  },
  {
    slug: 'scavland-health-hunger-thirst-system',
    category: "\u30b5\u30d0\u30a4\u30d0\u30eb",
    title: "\u3010Scavland\u653b\u7565\u3011Metabolism & Health\uff1a\u5b8c\u5168\u89e3\u8aac\u3068\u7acb\u3061\u56de\u308a",
    shortTitle: "Metabolism & Health",
    description: "Scavland\u306eMetabolism & Health\u306b\u95a2\u3059\u308b\u5b8c\u5168\u653b\u7565\u30ac\u30a4\u30c9\u3002Zalesye\u8352\u91ce\u3067\u306e\u4ed5\u69d8\u3001\u30c7\u30fc\u30bf\u3001\u6226\u8853\u7684\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u89e3\u8aac\u3002",
    evidence: 'In-Game Physiological System Testing & Steam Patch Notes · Update 0.7.0',
    updated: '2026-09-30',
    image: '/images/cards/card_1_beginner_guide.webp',
    imageAlt: "Health status bars, hydration meters, and medical triage in Scavland",
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
    related: ["scavland-consumables-and-medical-supplies", "scavland-hospital-quest-and-medical-supplies", "scavland-mist-survival-and-radiation", "scavland-sleep-and-world-reset-guide"]
  }
];

const enGuideMap = Object.fromEntries(enGuides.map((g) => [g.slug, g]));

export const allJaGuides: Guide[] = jaGuides.map((ja) => ({
  ...ja,
  image: enGuideMap[ja.slug]?.image || '/images/hero/header.webp',
}));

export const jaGuideBySlug = Object.fromEntries(allJaGuides.map((g) => [g.slug, g]));
