# 株式会社alley ホームページ

生命保険・損害保険の募集を行う保険代理店「株式会社alley」のコーポレートサイトです。
HTML / CSS / JavaScript のみで構成された静的サイトで、GitHub Pages で無料公開できます。

## フォルダ構成

```
alley-homepage/
├── index.html      … ページ本体
├── css/style.css    … デザイン
├── js/script.js     … メニュー開閉・フォームの簡易チェック
├── images/logo.jpg  … ロゴ画像
└── README.md
```

## 公開前に必ず対応すること

### 1. お問い合わせフォームの送信先を設定する

このサイトは静的サイト（サーバー側の処理を持たない）ため、`index.html` の
お問い合わせフォームは今のままでは実際にメールを送信できません。
無料で使える [Formspree](https://formspree.io/) などのフォーム送信サービスと連携してください。

手順の例（Formspreeの場合）:

1. Formspreeに登録し、フォームを1つ作成する（受信用メールアドレスはalley様の連絡先を設定）
2. 発行された `https://formspree.io/f/xxxxxxx` のようなエンドポイントを控える
3. `index.html` の `<form class="contact-form" id="contactForm" novalidate>` を以下のように変更する

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xlgqeqaz" method="POST">
```

4. `js/script.js` 内の「送信先が設定されていません」という確認用の分岐を削除する

### 2. 地図の住所を確認する

`index.html` 内の `iframe`（Googleマップ埋め込み）は住所から自動生成しています。
実際に公開する前に、ブラウザで正しい位置が表示されるか確認してください。
より正確なピン位置にしたい場合は、Googleマップで該当ビルを検索し、
「共有」→「地図を埋め込む」から発行されるコードに差し替えることをおすすめします。

### 3. 会社情報の最終確認

会社概要・電話番号・資本金・設立日など、現時点で仮入力している値がないか
`index.html` の「会社概要」セクションを確認してください。

## GitHub Pages で公開する手順

1. GitHubで新しいリポジトリを作成する（例: `alley-homepage`）
2. このフォルダの中身（`index.html` / `css` / `js` / `images`）をそのリポジトリのルートに配置してpushする
3. リポジトリの `Settings` → `Pages` を開く
4. `Source` を `Deploy from a branch` にし、ブランチを `main`、フォルダを `/ (root)` に設定して保存する
5. 数分後、`https://（ユーザー名）.github.io/alley-homepage/` で公開される
6. 独自ドメイン（例: alley-hoken.co.jp）を使いたい場合は、同じ `Pages` 設定内の `Custom domain` にドメインを入力し、
   ドメインの管理画面側でCNAMEレコードを設定する

## ローカルで確認する方法

Node.jsがインストールされていれば、次のコマンドでローカル確認ができます。

```
npx http-server alley-homepage -p 8080
```

その後、ブラウザで `http://localhost:8080` を開いてください。
