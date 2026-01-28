START_PARENTHESES = ["{", "[", "("]
END_PARENTHESE = ["}", "]", ")"]
PAIR = {
    ")": "(",
    "]": "[",
    "}": "{",
}


def isParenthesesValid(parentheses: str) -> bool:
    stack = []
    for i in parentheses:
        if i in START_PARENTHESES:
            stack.append(i)
        elif i in END_PARENTHESE:
            if not stack:
                return False
            if stack[-1] != PAIR[i]:
                return False
            stack.pop()
    return not stack
