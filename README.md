# RemixRepo

フロントエンドフレームワーク Remix を学習するためのリポジトリです。

## テンプレート付き初期プロジェクトを作成するためのコマンド

```bash
npx create-remix@latest --template remix-run/indie-stack blog-tutorial
```

## 動かし方

- モジュールのインポート

  ```bash
  yarn
  ```

- アプリの起動

  ```bash
  yarn dev
  ```

- 新しいスキーマを定義した時の追加方法

  ```bash
  npx prisma migrate dev --name "create post model"
  ```

- `prisma/seed.ts`ファイルを実行するコマンド

  ```bash
  npx prisma db seed
  ```

### 参考文献

1. [React 公式ドキュメント](https://ja.react.dev/learn/start-a-new-react-project)
2. [Remix の公式サイト](https://remix.run/)
3. [Remix ブログ作成チュートリアル](https://remix.run/docs/en/main/tutorials/blog)
4. [【GitHub】remix-run/indie-stack](https://github.com/remix-run/indie-stack)
