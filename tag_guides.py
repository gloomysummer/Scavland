import re

with open('src/data/guides-ja.ts', 'r', encoding='utf-8') as f:
    content = f.read()

guides = content.split('  {\n    slug: ')
new_guides = [guides[0]]

keywords = [
    r'(Zalesye（ザレシエ）)', r'(Zalesye)', r'(Shift\+クリック)', r'(Shift\+左クリック)', r'(エクスプローラーモード)',
    r'(赤キーカード)', r'(Red Keycard)', r'(セクターB-4)', r'(Sector B-4)',
    r'(Mキー)', r'(5HP/秒)', r'(耐久度50%以上)', r'(耐久度50%)', r'(耐久度70%)', r'(40%未満)',
    r'(抽出地点)', r'(Extraction Point)', r'(クリーニングオイル)', r'(銃器用クリーニングオイル)',
    r'(弾詰まり（ジャム）)', r'(ジャム)', r'(日没（21:00）)', r'(21:00)', r'(夜明け（06:00）)', r'(06:00)',
    r'(半径200m)', r'(スパークプラグ)', r'(ライター)', r'(ワイヤー)', r'(金属スクラップ)',
    r'(拠点保管庫（Stash）)', r'(セーフハウス)', r'(出血)', r'(放射能)', r'(スタミナ)', r'(リロードキー\[R\])',
    r'(\[R\]キー)', r'(-dev)', r'(-console)', r'(\[~\])', r'(\[F1\])', r'(spawn \[アイテムID\] \[数量\])',
    r'(%USERPROFILE%/AppData/LocalLow/NoShadow/Scavland/Saves/)', r'(止血帯)', r'(予備ピストル)',
    r'(1280x800)', r'(UIテキストサイズ)', r'(App ID 3373500)', r'(GeForce GTX 960)', r'(サプレッサー)',
    r'(フラッシュライト)', r'(暗視スコープ)', r'(徹甲弾（AP弾）)', r'(ガスマスク)', r'(抗放射線薬（Rad-Away）)',
    r'(アノマリースキャナー)', r'(ガイガーカウンター)', r'(活性炭錠剤)', r'(\[3\]キー)', r'(15m)',
    r'(外交官ライサ)', r'(商人ヴォロディミル)', r'(-300)', r'(\[E\]キー)', r'(動脈出血)', r'(骨折)',
    r'(木製添え木)', r'(缶詰（トゥションカ）)', r'(戦闘糧食)', r'(エナジードリンク)', r'(ロープ)',
    r'(乾電池)', r'(白熱電球)', r'(配線)', r'(金属くず)', r'(銃器スプリング)', r'(清潔な布)', r'(消毒液)',
    r'(火薬)', r'(防弾繊維)', r'(アナトリー)', r'(ナージャ)', r'(メカニスト商人)', r'(3時間)', r'(24時間)',
    r'(15秒間)', r'(コンクリート排水トレンチ)', r'(防爆ハッチ)', r'(軍用チェスト)', r'(換気シャフト)',
    r'(10メートル)', r'(50%以上)', r'(\+15%)', r'(100%)', r'(Steam早期アクセス)', r'(WeMod)', r'(Cheat Engine)',
    r'(焚き火)', r'(作業台)', r'(バックパック)', r'(遺品マーカー)', r'(TDP上限)', r'(GPUクロック上限)',
    r'(定価1,980円)', r'(10%割引)', r'(ショットガン)', r'(サブマシンガン)', r'(マークスマンライフル)',
    r'(Rad-Away)', r'(アーティファクト)', r'(ZERO Sievert)', r'(Co-op協力プレイ)', r'(ラーダ)',
    r'(庶民連合)', r'(アコライト)', r'(メカニスト)', r'(パラディン)', r'(ガナーズ)', r'(中立チャペル)',
    r'(脱水症状)', r'(煮沸した水)', r'(ソーダ)', r'(滅菌包帯)', r'(軍用止血ガーゼ)', r'(ラッドアウェイ注射器)',
    r'(150mSv)', r'(交差点アネックス)'
]

def tag_text(text):
    count = 0
    
    def repl(m):
        nonlocal count
        if count >= 11:
            return m.group(0)
        count += 1
        return f"<strong>{m.group(1)}</strong>"

    for kw in keywords:
        if count >= 11:
            break
        pattern = r'(?<!<strong>)' + kw + r'(?!</strong>)'
        text = re.sub(pattern, repl, text, count=2)
    return text

for guide in guides[1:]:
    guide_text = "  {\n    slug: " + guide
    
    def replace_block(match):
        prefix = match.group(1)
        content = match.group(2)
        suffix = match.group(3)
        tagged = tag_text(content)
        return prefix + tagged + suffix

    guide_text = re.sub(r"(answer:\s*')((?:\\.|[^'])*)(')", replace_block, guide_text, count=1)
    
    def replace_array_items(match):
        prefix = match.group(1)
        items_str = match.group(2)
        suffix = match.group(3)
        
        def repl_str(m):
            return "'" + tag_text(m.group(1)) + "'"
            
        new_items = re.sub(r"'((?:\\.|[^'])*)'", repl_str, items_str)
        return prefix + new_items + suffix
        
    guide_text = re.sub(r"(steps:\s*\[)([^\]]*)(\])", replace_array_items, guide_text, count=1)
    guide_text = re.sub(r"(faq:\s*\[)([^\]]*)(\])", replace_array_items, guide_text, count=1)
    
    new_guides.append(guide_text)

final_content = "".join(new_guides)

with open('src/data/guides-ja.ts', 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Guides tagged successfully.")
