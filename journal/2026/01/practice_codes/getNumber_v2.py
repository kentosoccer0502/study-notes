def getNumber(code: str) -> str:
    if len(code) > 8:
        return "0"

    result = ""
    stack = []

    for i in range(0, len(code) + 1):
        stack.append(i + 1)
        if i == len(code) or code[i] == "I":
            while stack:
                result += str(stack.pop())

    return result
