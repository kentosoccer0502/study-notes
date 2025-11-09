[レビューされたコードはこちら](/journal/2025/11/practice_codes/firstReaptingNumber.py)

以下はあなたのコードに対するレビューです。

## 良い点

- 型ヒントの使用: List[int] や Dict[str, int] の型ヒントを使用しており、コードの可読性と保守性が向上しています。

- シンプルなロジック: 重複要素を見つけるためのロジックがシンプルで理解しやすいです。

## 改善点

- 不要な型変換: hash_map のキーとして整数を文字列に変換していますが、整数のままで問題ありません。これにより、コードがより効率的になります。

- hash_map の使用方法: hash_map は重複のカウントに使われていますが、実際には重複を見つけるだけで十分です。カウントは不要です。

- repeated_list の使用方法: repeated_list を使って重複を追跡していますが、最初に重複した要素を見つけた時点で返すようにすれば、リストを使わずに済みます。

- デバッグ用の print 文: デバッグ用の print 文は最終的なコードには不要です。

## 改善されたコード例

```python
from typing import List

def firstRepeatingNumber(nums: List[int]) -> int:
    seen = set()
    for num in nums:
        if num in seen:
            return num
        seen.add(num)
    return -1
```

## 改善点の説明

- 型変換の削除: hash_map のキーを文字列に変換する必要がないため、整数のまま使用しています。

- hash_map の削除: 重複を見つけるために set を使用し、最初に重複を見つけた時点で返すようにしました。

- repeated_list の削除: 重複を追跡するためのリストを削除し、コードを簡潔にしました。

- print 文の削除: デバッグ用の print 文を削除しました。

この改善により、コードはより効率的で読みやすくなります。
