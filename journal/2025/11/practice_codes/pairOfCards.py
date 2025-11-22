# WIP

from typing import List, Dict

VALUES: List[str] = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]
SUITS: List[str] = ["♣", "♦", "♥", "♠"]


def winnerPairOfCards(player1: List[str], player2: List[str]) -> str:
    # それぞれのplayerのカードの種類と枚数の連想配列
    player1_cards: Dict[str, int] = count_cards(player1, VALUES)
    player2_cards: Dict[str, int] = count_cards(player2, VALUES)
    print(player1_cards)
    print(player2_cards)
    for value in VALUES:
        if player1_cards[value] > player2_cards[value]:
            return "player1"
        elif player1_cards[value] < player2_cards[value]:
            return "player2"
        else:
            return "draw"


def count_cards(hand: List[str], values: List[str]) -> Dict[str, int]:
    card_count: Dict[str, int] = {value: 0 for value in values}
    for card in hand:
        card_value = card[1:] if card[1:].isdigit() else card[1]
        card_count[card_value] += 1
    return card_count
