[レビューされたコードはこちら](/journal/2025/10/practice_codes/videosToWatch.py)
以下はあなたのコードのレビューです。

## 良い点

- シンプルで読みやすい: コードは非常にシンプルで、問題の要件を満たしています。for ループを使って動画の時間を合計し、目標を達成した時点でインデックスを返すというロジックは明確です。

- 型アノテーション: sum_time に対する型アノテーションがあり、コードの可読性を向上させています。

## 改善点

- enumerate の使用: range(len(time))を使う代わりに、enumerate を使うとコードがより Pythonic になり、可読性が向上します。

## 以下に改善したコードを示します。

```python
from typing import List

def videosToWatch(time: List[int], dailyGoal: int) -> int:
    sum_time: int = 0
    for i, t in enumerate(time):
        sum_time += t
        if sum_time >= dailyGoal:
            return i + 1
    return -1
```

## コメント

enumerate を使用することで、インデックスと要素を同時に取得でき、コードがより直感的になります。

その他の部分は問題なく、既に良い状態です。

このコードは既にシンプルで読みやすく、問題を適切に解決しています。
