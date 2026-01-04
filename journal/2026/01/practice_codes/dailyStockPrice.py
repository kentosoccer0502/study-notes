from typing import List


def dailyStockPrice(stocks: List[int]) -> List[int]:
    n = len(stocks)
    result = [0] * n
    stack = []  # (index, price)

    for i, price in enumerate(stocks):
        print(f"Processing index {i}, price {price}")
        print(f"Stack before: {stack}")
        print(f"Result before: {result}")
        while stack and stack[-1][1] < price:
            prev_i, _ = stack.pop()
            result[prev_i] = i - prev_i
            print(f"Popped index {prev_i}, updated result[{prev_i}] = {result[prev_i]}")
        stack.append((i, price))
        print(f"Stack after: {stack}")
        print(f"Result after: {result}")
        print("---")

    print(f"Final result: {result}")
    return result


# print(dailyStockPrice([58, 59, 71]))
print(dailyStockPrice([38, 37, 38, 35, 34, 37, 39, 40, 33, 33]))
