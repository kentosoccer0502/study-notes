import math
import random


# カードクラス
class Card:
    def __init__(self, suit, value, intValue):
        self.suit = suit
        self.value = value
        self.intValue = intValue

    # カードを表示するメソッド　例　♥K(13)
    def getCardString(self):
        return self.suit + self.value + "(" + str(self.intValue) + ")"


# デッキクラス
class Deck:
    def __init__(self, gameMode=None):
        self.deck = self.generateDeck()

    # デッキ（山札）を作成します
    @staticmethod
    def generateDeck():
        suit = ["♣", "♦", "♥", "♠"]
        value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        newDeck = []
        intValue = 1
        for i in suit:
            for j in value:
                newDeck.append(Card(i, j, intValue))
                intValue += 1
            intValue = 1
        return newDeck

    # カードを表示するメソッド
    def printDeck(self):
        for i in range(len(self.deck)):
            print(self.deck[i].getCardString())

    # カードをシャッフルするメソッド
    def shuffleDeck(self):
        deckSize = len(self.deck)
        for i in range(deckSize - 1, 0, -1):
            j = random.randint(i, deckSize - 1)
            temp = self.deck[i]
            self.deck[i] = self.deck[j]
            self.deck[j] = temp

    # カードを1枚引くメソッド
    def draw(self):
        return self.deck.pop()


# ディーラークラス
class Dealer:

    # ディーラーはカードをシャッフルしプレイヤーにカードを配ります。
    @staticmethod
    def startGame(amountOfPlayers, gameMode):
        table = {"players": [], "gameMode": gameMode, "deck": Deck(gameMode)}
        table["deck"].shuffleDeck()

        for person in range(0, amountOfPlayers):
            playerCard = []
            for i in range(0, Dealer.initialCards(gameMode)):
                playerCard.append(table["deck"].draw())
            table["players"].append(playerCard)

        return table

    # ゲームモードによって配るカードの枚数を返すメソッド
    @staticmethod
    def initialCards(gameMode):
        if gameMode == "porker":
            return 5
        if gameMode == "21":
            return 2
        if gameMode == "Pair of Cards":
            return 5

    # テーブルの状態を表示するメソッド
    @staticmethod
    def printTableInfo(table):
        print(
            "Amount of players: "
            + str(len(table["players"]))
            + "\nGamemode: "
            + table["gameMode"]
        )

        for i in range(len(table["players"])):
            print("\nPlayer " + str(i + 1))
            for j in range(len(table["players"][i])):
                print(table["players"][i][j].getCardString())

    # ゲームの勝敗を決める関数
    @staticmethod
    def winnerPairOfCards(table):
        # 同じ数字をたくさん持っているプレイヤーの勝ち
        # 枚数が同じなら数字が大きいプレイヤーの勝ち

        # カードの強さ : 2 < 3 < 4 < 5 < 6 … J < Q < K < A
        cardPower = [1, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

        # 数字だけの配列を作ります。
        numbers1 = Helperfunction.generateNumberArr(table["players"][0])
        numbers2 = Helperfunction.generateNumberArr(table["players"][1])

        # プレイヤーのカードをハッシュマップにします。
        hashmap1 = Helperfunction.createHashmap(cardPower, numbers1)
        hashmap2 = Helperfunction.createHashmap(cardPower, numbers2)

        # デフォルトで引き分けを返します。
        winner = "draw."
        # 　同じランクのカードの枚数を記録します。
        pairOfCards = 0

        for i in range(len(cardPower)):
            # それぞれのhashmapをcardPowerの強い順に比較していきます。0または同じ枚数の時は次のランクへ。
            # プレイヤー1が持つ同じランクのカードが多いとき
            if hashmap1[cardPower[i]] > hashmap2[cardPower[i]]:
                # 記録しているカードの枚数よりプレイヤー1が持つカードの枚数が多かったら、
                if pairOfCards < hashmap1[cardPower[i]]:
                    # pairOfCardsとwinnerをプレイヤー1に書き換えます。
                    pairOfCards = hashmap1[cardPower[i]]
                    winner = "player 1."

            elif hashmap1[cardPower[i]] < hashmap2[cardPower[i]]:
                if pairOfCards < hashmap2[cardPower[i]]:
                    pairOfCards = hashmap2[cardPower[i]]
                    winner = "player 2."
        print("The winner of self game is ")
        return winner


class Helperfunction:

    # 数字だけの配列を作ります。
    @staticmethod
    def generateNumberArr(playerhand):
        intArr = []
        for i in range(len(playerhand)):
            intArr.append(playerhand[i].intValue)
        return intArr

    # Hashmapを作成します。
    @staticmethod
    def createHashmap(cardPower, numberArr):

        hashmap = {}
        for i in range(len(cardPower)):
            hashmap[cardPower[i]] = 0

        for i in range(len(numberArr)):
            hashmap[numberArr[i]] += 1
        return hashmap


table = Dealer.startGame(2, "Pair of Cards")
Dealer.printTableInfo(table)
print(Dealer.winnerPairOfCards(table))
