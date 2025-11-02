def getMinSteps(n):
    cache = [0] * (n + 1)  # 計算結果を保存するリスト

    def innerMemory(x, depth=0):
        indent = "  " * depth  # 再帰の深さをインデントに反映
        print(f"{indent}▶ innerMemory({x}) 呼び出し")

        # --- 基本ケース ---
        if x == 1:
            print(f"{indent}  ✅ x=1なので 0 を返す")
            return 0

        # --- すでに計算済みなら再利用 ---
        if cache[x] != 0:
            print(f"{indent}  💾 cache[{x}]={cache[x]}（再利用）")
            return cache[x]

        # --- 候補計算 ---
        steps = [innerMemory(x - 1, depth + 1)]
        if x % 2 == 0:
            steps.append(innerMemory(x // 2, depth + 1))
        if x % 3 == 0:
            steps.append(innerMemory(x // 3, depth + 1))

        cache[x] = 1 + min(steps)

        # --- cache 更新後の出力 ---
        print(f"{indent}🧮 cache[{x}] = {cache[x]} に更新（候補={steps}）")
        print(f"{indent}   現在のcache: {cache}")

        return cache[x]

    result = innerMemory(n)
    print("\n📦 計算完了！最終的な cache =", cache)
    print(f"🎯 最小ステップ数 = {result}")
    return result


# 実行例
getMinSteps(10)
