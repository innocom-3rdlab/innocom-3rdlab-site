# イノコムスクエア & 本サイト README

---

## 目次
1. [イノコムスクエアとは](#イノコムスクエアとは)  
2. [本サイトの目的](#本サイトの目的)  
3. [サイトの主な機能](#サイトの主な機能)  
4. [技術スタック](#技術スタック)  
5. [ローカル開発環境](#ローカル開発環境)  
6. [デプロイ方法](#デプロイ方法)  
7. [ディレクトリ構成](#ディレクトリ構成)  
8. [カスタマイズについて](#カスタマイズについて)  
9. [貢献・フィードバック](#貢献・フィードバック)  
10. [ライセンス](#ライセンス)  

---

## イノコムスクエアとは  
**イノコムスクエア**（InnoCom Square）は、[積水ハウスグループ](https://www.sekisuihouse.co.jp/)が運営するオープンイノベーション施設です。  
- スタートアップ企業や研究者が集い、住生活DX・脱炭素・ウェルビーイングなどの未来社会課題に取り組む場  
- **公式サイト**: [https://square.innocom.co.jp/](https://square.innocom.co.jp/)

---

## 本サイトの目的  
本リポジトリは、イノコムスクエアと連携して実施する「3rd Lab ハッカソン」向けの **公式プロジェクトサイト** です。  

- **インデックスホイール**：12 の未来社会課題テーマを直感的にビジュアル表示  
- **実施フロー**：テーマ設定 → GitHub リポジトリ構築 → Azure & OpenAI環境準備 → LINE＋HubSpot登録 → ワークショップ → ハッカソン → Demo Day → コミュニティ継続  
- **詳細ドキュメント**：各テーマ・各ステップごとに専用ページを設置  

公開サイトURL:  
👉 [https://innocom-3rdlab.github.io/innocom-3rdlab-site/](https://innocom-3rdlab.github.io/innocom-3rdlab-site/)

---

## サイトの主な機能

- **ヒーローセクション**: インデックスホイール＋キャッチコピー
- **テーマカード一覧**: 未来課題をビジュアルカード形式で紹介
- **タイムライン**: 実施ステップを時系列で可視化
- **詳細ページリンク**: 各カード・各ステップから詳細解説へ誘導
- **レスポンシブデザイン**: PC／タブレット／スマホ対応

---

## 技術スタック

- [Jekyll](https://jekyllrb.com/) + [Agency Jekyll Theme Starter](https://github.com/raviriley/agency-jekyll-theme-starter)
- HTML5, SCSS, JavaScript ([D3.js](https://d3js.org/)) でインタラクティブホイール
- GitHub Pagesによるホスティング（remote_theme利用）
- データ管理：`_data/portfolio.yml`, `_data/timeline.yml`, `_data/navigation.yml`

---

## ローカル開発環境

```bash
# リポジトリをクローン
git clone https://github.com/innocom-3rdlab/innocom-3rdlab-site.git
cd innocom-3rdlab-site

# 必要なGemインストール
bundle install

# サイトを起動
bundle exec jekyll serve

# ブラウザで http://localhost:4000 を開く
