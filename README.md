# React Tutorial

## 技術スタック

* [Vite](https://vitejs.dev/)
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)

## 開発

### 1. 依存関係のインストール

プロジェクトの依存関係をインストールするには、次のコマンドを実行します。

```bash
npm install
```

### 2. 開発サーバーの起動

Vite 開発サーバーを起動します。
ファイルの変更を監視し、自動的にブラウザを更新します。

```bash
npm run dev
```

### 3. 本番用ビルド

本番用にアプリケーションをビルドするには、次のコマンドを実行します。
ビルドされたファイルは `dist` ディレクトリに出力されます。

```bash
npm run build
```

### 4. 本番用プレビュー

ビルドされたアプリケーションをローカルでプレビューします。
このコマンドを実行する前に、`npm run build`を実行する必要があります。

```bash
npm run preview
```

### 5. フォーマット

[Biome](https://biomejs.dev/)を使ってコードをフォーマットします。

```bash
npm run format
```
