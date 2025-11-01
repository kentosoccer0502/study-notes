from typing import Dict

romanToIntegerMap: Dict[str, int] = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}


def romanToInteger(romanNumber: str) -> int:
    integer_box: int = 0
    for i in range(len(romanNumber)):
        if (
            i == len(romanNumber) - 1
            or romanToIntegerMap[romanNumber[i + 1]]
            <= romanToIntegerMap[romanNumber[i]]
        ):
            integer_box += romanToIntegerMap[romanNumber[i]]
        else:
            integer_box -= romanToIntegerMap[romanNumber[i]]
    return integer_box


# IV -> -1 + 5 = 4
# XXXVIII -> 10 + 10 + 10 + 5 + 1 + 1 + 1
