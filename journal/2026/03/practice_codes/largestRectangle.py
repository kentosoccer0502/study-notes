from typing import List


def largestRectangle(h: List[int]) -> int:
    stack: List[int] = []  # 単調増加スタック（配列のIndexを持つ）
    max_area = 0
    h.append(0)

    for i in range(len(h)):
        # 高さの増加傾向が終ったらそれまでの高さを使って面積を求める
        while stack and h[stack[-1]] > h[i]:
            # stackの後ろを高さとして面積を求める
            height = h[stack.pop()]
            if stack:
                # stackにまだデータがある場合
                width = i - stack[-1] - 1
            else:
                width = i
            max_area = max(max_area, height * width)
        stack.append(i)

    return max_area
