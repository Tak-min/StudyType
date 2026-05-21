# デプロイ手順

このアプリは外部APIやDBを使わない Vite + React の静的SPAです。Cloudflareに載せるなら、現在の構成では `Cloudflare Workers Static Assets` か `Cloudflare Pages` が合います。

## おすすめ方針

Cloudflare公式ドキュメントでは、新規の静的サイト・SPAは Workers Static Assets が推奨されています。今後、診断結果保存やOG画像生成などのAPIを足す可能性があるなら Workers に寄せるのが自然です。

ただし、GitHubにpushして管理画面から最短で公開したいだけなら Cloudflare Pages も十分に簡単です。このアプリはどちらでも動きます。

## 事前確認

```bash
npm install
npm run lint
npm run build
```

`dist/` が生成されればデプロイできます。

## GitHubに上げる

```bash
git init
git add .
git commit -m "Initial Akashi Kosen type diagnosis"
git branch -M main
git remote add origin https://github.com/<your-name>/<repo-name>.git
git push -u origin main
```

`node_modules/` と `dist/` は `.gitignore` で除外されています。

## Cloudflare Workers Static Assetsで公開する

このリポジトリには `wrangler.jsonc` を追加済みです。

```bash
npm run build
npx wrangler login
npx wrangler deploy
```

設定のポイント:

- `assets.directory`: `./dist`
- `assets.not_found_handling`: `single-page-application`
- Workerスクリプトは不要

公開名を変えたい場合は `wrangler.jsonc` の `name` を変更してください。

## Cloudflare Pagesで公開する

Cloudflareのダッシュボードで `Workers & Pages` から Pages プロジェクトを作成し、GitHubリポジトリを接続します。

設定値:

```text
Framework preset: React (Vite)
Build command: npm run build
Build output directory: dist
Root directory: 空欄またはリポジトリルート
```

pushするたびにCloudflare側で自動ビルドされます。

## 公開前チェックリスト

- `npm run lint` が通る
- `npm run build` が通る
- スマホ幅でトップ、質問、結果が見切れていない
- 結果文言に攻撃的・性別決めつけ表現がない
- SNS共有文の学校名・学科名が意図通り

## 参考

- Cloudflare Workers Static Assets: https://developers.cloudflare.com/workers/static-assets/
- Workers Best Practices: https://developers.cloudflare.com/workers/best-practices/workers-best-practices/
- Cloudflare Pages Build configuration: https://developers.cloudflare.com/pages/configuration/build-configuration/
