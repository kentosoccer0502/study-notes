from typing import List


def dailyStockPrice(stocks: List[int]) -> List[int]:
    n = len(stocks)
    result = [0] * n
    stack = []  # (index, price)

    for i, price in enumerate(stocks):
        print(f"Processing index {i}, price {price}")
        print(f"Stack before: {stack}")
        print(f"Result before: {result}")
        # スタックが空でなく、トップの価格が現在の価格より小さい場合にループ
        # これにより、現在の価格が「次に大きい要素」として機能し、スタック内の要素を処理
        while stack and stack[-1][1] < price:
            # スタックのトップ要素（インデックスと価格のタプル）をポップ
            # prev_i はインデックス、_ は価格（使用しないためアンダースコア）
            prev_i, _ = stack.pop()
            # 結果配列に、現在のインデックス i とポップしたインデックス prev_i の差を記録
            # これが「次に大きい要素までの距離」
            result[prev_i] = i - prev_i
            print(f"Popped index {prev_i}, updated result[{prev_i}] = {result[prev_i]}")
        # 現在の要素（インデックスと価格）をスタックに追加
        # これにより、次の要素との比較に備える
        stack.append((i, price))
        print(f"Stack after: {stack}")
        print(f"Result after: {result}")
        print("---")

    print(f"Final result: {result}")
    return result


# print(dailyStockPrice([58, 59, 71]))
print(dailyStockPrice([38, 37, 38, 35, 34, 37, 39, 40, 33, 33]))
