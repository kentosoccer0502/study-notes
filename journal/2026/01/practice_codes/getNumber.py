def getNumber(code: str) -> str:
    if len(code) >= 9:
        return "0"

    nums = [str(i) for i in range(1, 10)]  # 1~9の数値配列
    stack = []  # 減少数値データを溜めておく
    result = ""

    for i in range(len(code)):
        if code[i] == "D":
            stack.append(nums.pop(0))
        elif code[i] == "I":
            result += nums.pop(0)
            while stack:
                result += stack.pop()
    if code[-1] == "D":
        stack.append(nums.pop(0))
        while stack:
            result += stack.pop()
    else:
        result += nums.pop(0)

    return result
