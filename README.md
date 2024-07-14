# Instagram clone app

このプロジェクトは、Instagram のクローンアプリケーションです。フロントエンドは React と Redux Toolkit を使用し、バックエンドは Django を使用しています。

## 使用技術

- フロントエンド: React, Redux Toolkit, TypeScript, Vite
- バックエンド: Django, Django REST Framework, SimpleJWT, Djoser
- データベース: SQLite (デフォルト設定)

## 主な機能

- ユーザー認証 (ログイン、サインアップ)
- プロフィール編集
- 投稿の作成、表示、いいね
- コメントの作成、表示

## ディレクトリ構成

frontend/
├── public/
├── src/
│ ├── app/
│ ├── assets/
│ ├── features/
│ ├── index.css
│ ├── main.tsx
│ └── vite.config.ts
├── .eslintrc.cjs
├── index.html
├── package.json
├── tsconfig.app.json
└── tsconfig.json
backend/
├── api/
├── api_insta/
├── media/
├── venv/
├── manage.py
├── requirements.txt
├── db.sqlite3
└── .env
