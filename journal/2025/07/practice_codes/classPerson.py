# オブジェクトの問題は、記述したテストケースが実行されることで出力が正しいかを判断します。
# 通常のコーディング問題のように入力が自動で与えられるわけではありません。
# まずは、問題で指定されているPersonクラスを作成してみましょう。

# なお、右上の各ボタンは、下記の通りです。
# 実行：記述したコードを実行します。デバッグに使用します。
# テスト：提出時と同じ環境で実行されます。提出前の最終チェックに使用します。
# 提出：問題文中のテストケースが実行され、出力が正しいか確認されます。

# ① Personクラスを作成してみましょう。
class Person:
    # 問題文の指定した条件に従って、コンストラクタやメソッドを記述します。
    def __init__(self, firstName, lastName):
        self.fisrtName = firstName
        self.lastName = lastName

    def getFullName(self):
        return self.fisrtName + " " + self.lastName
    
    def getInitial(self):
        return self.fisrtName[0] + "." + self.lastName[0]
# ② 問題文にある一つ目のテストケースを記述しましょう。
mike = Person("Michael", "Johnson")
# コンソール出力することでテストケースが正しい値であるかが判定されます。
print(mike.getFullName())
print(mike.getInitial())

# ③ 上記を参考に他のテストケースを作成しましょう。
# 問題文中のテストケースを全て満たすことで合格します。
carly = Person("Carly", "Angelo")
print(carly.getFullName())
print(carly.getInitial())

jessie = Person("Jessie", "Raelynn")
print(jessie.getFullName())
print(jessie.getInitial())
# ④ テストボタンを押して正しく出力されているかを確認しましょう。
# メソッド名、文字列のスペースなどは注意深く確認しましょう。

# ⑤ テストが確認できたら、提出ボタンを押して完了です。