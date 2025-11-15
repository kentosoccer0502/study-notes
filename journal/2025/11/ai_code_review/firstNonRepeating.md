[レビューされたコードはこちら](/journal/2025/11/practice_codes/firstNonRepeating.py)

以下はあなたのコードに対するレビューです。

## 良い点

- 明確なロジック: 問題を解決するためのロジックが明確で、辞書を使って各文字の出現回数をカウントする方法は適切です。

- 型ヒントの使用: Dict や List の型ヒントを使用しており、コードの可読性と保守性が向上しています。

## 改善点

- 変数名の改善: word という変数名は、文字列の各文字を指しているため、char や letter の方が適切です。

- 効率性の向上: s.index(keys[0]) を使用すると、最初の一度しか出現しない文字を見つけるために再度文字列を走査することになります。これは効率的ではありません。最初のループでインデックスも一緒に記録することで、二度目の走査を避けることができます。

## 以下は改善されたコード例です：

```python
from typing import Dict, List

def firstNonRepeating(s: str) -> int:
    # キーを問題、値を出現回数とした辞書
    hash_map: Dict[str, int] = {}
    index_map: Dict[str, int] = {}

    for index, char in enumerate(s):
        if char not in hash_map:
            hash_map[char] = 1
            index_map[char] = index
        else:
            hash_map[char] += 1

    for char in s:
        if hash_map[char] == 1:
            return index_map[char]

    return -1
```

## 改善点の説明

- 変数名の変更: word を char に変更しました。

- 効率性の向上: index_map を追加し、各文字の最初のインデックスを記録することで、二度目の走査を避けました。これにより、コードの効率性が向上しました。

この改善により、コードはより効率的で読みやすくなりました。全体として、元のコードも非常に良く書かれており、少しの改善でさらに良くなりました。
