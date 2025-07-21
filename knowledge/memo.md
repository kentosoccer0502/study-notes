---
## 🧩 **問題と原因まとめ**

### ❗ 主なエラー内容

1. **`MissingSecret`（認証エラー）**
→ `.env` に `AUTH_SECRET` が未定義または不正
✅ **解決済**：`.env` に追加済み

2. **`Unable to open the database file` / `main.Post does not exist`**
→ SQLite ファイルが存在しない or マイグレーション未実行
✅ **解決法**：

- `npx prisma migrate dev --name init`
- `npx prisma db seed`

3. **`the URL must start with the protocol postgresql://` エラー**
→ `provider = "sqlite"` にも関わらず、環境変数が PostgreSQL 用になっていた
✅ **原因**：`.env` の読み込み失敗またはコメント行の誤解釈
✅ **対応**：

- `.env` の `DATABASE_URL` を `file:./prisma/dev.db` に明示
- 必要なら明示的に環境変数を渡して実行

```bash
DATABASE_URL="file:./prisma/dev.db" npx prisma generate
```
---

## ✅ 正しい構成チェックリスト

| 項目            | 内容                                                   |
| --------------- | ------------------------------------------------------ |
| `schema.prisma` | `provider = "sqlite"` に設定                           |
| `.env`          | `DATABASE_URL=file:./prisma/dev.db` を設定             |
| Prisma CLI      | `npx prisma generate`, `migrate dev`, `db seed` を実行 |
| `.env` の場所   | プロジェクトルートに配置（`prisma/` の 1 階層上）      |
| Next.js 起動    | `npm run dev` で `.env` を再読み込み                   |

---

## 🛠️ 再セットアップ手順（ローカル開発用）

```bash
# 1. Prisma クライアント生成
npx prisma generate

# 2. DBマイグレーション（DBファイル作成）
npx prisma migrate dev --name init

# 3. シード投入（初期データ）
npx prisma db seed

# 4. Next.js 再起動
npm run dev
```

---
