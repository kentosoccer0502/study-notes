from typing import List, Dict

CARD_NUMBERS: List[str] = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
]


def player_cards(cards: List[str]) -> Dict[str, int]:
    cards_dict: Dict[str, int] = {value: 0 for value in CARD_NUMBERS}
    for card in cards:
        cards_dict[card[1:]] += 1
    return cards_dict


def winnerPairOfCards(player1: List[str], player2: List[str]) -> str:
    pl1_dict: Dict[str, int] = player_cards(player1)
    pl2_dict: Dict[str, int] = player_cards(player2)

    winner: str = "draw"
    max_cards: int = 0

    for number in CARD_NUMBERS:
        if pl1_dict[number] > pl2_dict[number] and pl1_dict[number] > max_cards:
            max_cards = pl1_dict[number]
            winner = "player1"
        elif pl1_dict[number] < pl2_dict[number] and pl2_dict[number] > max_cards:
            max_cards = pl2_dict[number]
            winner = "player2"

    return winner
