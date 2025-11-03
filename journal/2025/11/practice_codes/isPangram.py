def isPangram(string: str) -> bool:
    # 'a' から 'z' までの文字をキーとし、値を0に設定した辞書を作成
    cache_alphabet = {chr(i): 0 for i in range(ord("a"), ord("z") + 1)}

    for i in string.lower():
        if not i.isalpha() or cache_alphabet[i] == 1:
            continue
        elif i.isalpha():
            cache_alphabet[i] = 1
        else:
            continue
    contains_zero = any(value == 0 for value in cache_alphabet.values())
    return not contains_zero
