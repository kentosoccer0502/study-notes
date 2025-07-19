### ✅ `every` メソッドとは？

配列の **すべての要素が条件を満たしているか** をチェックするメソッドです。

---

### 📌 基本の形：

```ts
配列.every((要素) => 条件);
```

---

### 🧠 意味：

→ 「全員 OK なら true、1 人でも NG なら false」

---

### 🌟 例：

```ts
const arr = ["0", "0", "0"];

const allZero = arr.every((c) => c === "0");
console.log(allZero); // true（全部 "0" なのでOK）
```

```ts
const arr2 = ["0", "1", "0"];

const allZero2 = arr2.every((c) => c === "0");
console.log(allZero2); // false（"1" があるのでNG）
```

---

### 🔁 イメージ（裏でやってること）：

```ts
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== "0") {
    return false;
  }
}
return true;
```

---

`every` を使うと、上のようなループを書かずに **一行で簡潔に書ける** のがポイントです！
