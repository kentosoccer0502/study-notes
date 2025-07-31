# オブジェクトの問題は、記述したテストケースが実行されることで出力が正しいかを判断します。
# 通常のコーディング問題のように入力が自動で与えられるわけではありません。
# まずは、問題で指定されているDogクラスを作成してみましょう。

# なお、右上の各ボタンは、下記の通りです。
# 実行：記述したコードを実行します。デバッグに使用します。
# テスト：提出時と同じ環境で実行されます。提出前の最終チェックに使用します。
# 提出：問題文中のテストケースが実行され、出力が正しいか確認されます。

# ① Dogクラスを作成してみましょう。
class Dog:
    # 問題文の指定した条件に従って、コンストラクタやメソッドを記述します。
    def __init__(self, name: str, size: int, age: int):
        self.name = name
        self.size = size
        self.age = age

    def bark(self) -> str:
        if self.size >= 50:
            return "Wooof! Woof!"
        elif self.size >= 20:
            return "Ruff! Ruff!"
        else:
            return "Yip! Yip!"

    def calcHumanAge(self) -> int:
        return 12 + (self.age - 1) * 7


# ② 問題文にある一つ目のテストケースを記述しましょう。
goldenRetriever = Dog("Golden Retriever", 60, 10)
# コンソール出力することでテストケースが正しい値であるかが判定されます。
print(goldenRetriever.bark())
print(goldenRetriever.calcHumanAge())

# ③ 上記を参考に他のテストケースを作成しましょう。
# 問題文中のテストケースを全て満たすことで合格します。
siberianHusky = Dog("Siberian Husky", 55, 6)
print(siberianHusky.bark())
print(siberianHusky.calcHumanAge())

poodle = Dog("poodle", 10, 1)
print(poodle.bark())
print(poodle.calcHumanAge())

shibaInu = Dog("shibaInu", 35, 4)
print(shibaInu.bark())
print(shibaInu.calcHumanAge())
# ④ テストボタンを押して正しく出力されているかを確認しましょう。
# メソッド名、文字列のスペースなどは注意深く確認しましょう。

# ⑤ テストが確認できたら、提出ボタンを押して完了です。
