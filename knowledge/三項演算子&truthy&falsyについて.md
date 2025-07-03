## Truthy & Falsy

### Falsy: 真偽値に変換した際に「嘘」とみなされる値

- `false`
- `0` (数字) ※文字列 `"0"` は truthy
- `0n` (BigInt)
- `""` (空文字)
- `null`
- `undefined`
- `NaN` (Not a Number)

### Truthy: Falsy 以外の値

---

## 論理演算子

### 論理積 (`&&`)

- **左側が falsy の場合**: 左側の値を返す
- **左側が truthy の場合**: 右側の値を返す
- **React/Next.js での例:**

  ```typescript
  // 例1: ログインしている場合のみメッセージを表示
  {
    isLoggedIn && <p>ようこそ！</p>;
  }
  // isLoggedInがtrueなら<p>ようこそ！</p>が表示される

  // 例2: 配列が空でない場合のみリストを表示
  {
    items.length > 0 && (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
  ```

  -> 左側が Truthy の時に処理させたいことを右側に書くことが多い！！！

### 論理和 (`||`)

- **左側が truthy の場合**: 左側の値を返す
- **左側が falsy の場合**: 右側の値を返す
- **React での例:**

  ```tsx
  // 例1: 入力値がなければデフォルト値を表示
  <input value={inputValue || "デフォルト値"} />

  // 例2: ユーザー名がなければ「ゲスト」と表示
  <span>{userName || "ゲスト"}</span>
  ```

  -> デフォルト値を設定したい時に使うことが多い！！

---

## 三項演算子

- 書式: `条件式 ? 真の場合の値 : 偽の場合の値`
- 例:

  ```tsx
  // 例1: 合格・不合格の判定
  const result = score > 50 ? "合格" : "不合格";
  console.log(result); // 条件に応じて "合格" または "不合格" を返す

  // 例2: Reactで条件によって表示を切り替える
  {
    isAdmin ? <AdminPanel /> : <UserPanel />;
  }
  ```
