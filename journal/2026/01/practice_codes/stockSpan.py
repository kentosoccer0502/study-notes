from typing import List, Tuple

# この問題の stack はこう考える
# - 単調減少スタック
# - 「まだ span が確定していない日」を積む
# - 価格が高くなるたびに、過去を pop する
# stack の中身は：
# 「この価格の日より前は、もう span に関係ない」
# という日だけ残す。


def stockSpan(stocks: List[int]) -> List[int]:
    stack: List[Tuple[int, int]] = []  # (index, price)
    answer: List[int] = []

    for index, price in enumerate(stocks):
        while stack and stack[-1][1] <= price:
            stack.pop()
        if stack:
            span = index - stack[-1][0]
        else:
            span = index + 1
        stack.append((index, price))
        answer.append(span)

    return answer
