# reverse inputpath outputpath:
#   inputpath にあるファイルを受け取り、outputpath に inputpath の内容を逆にした新しいファイルを作成します。
# copy inputpath outputpath:
#   inputpath にあるファイルのコピーを作成し、outputpath として保存します。
# duplicate-contents inputpath n:
#   inputpath にあるファイルの内容を読み込み、その内容を複製し、複製された内容を inputpath に n 回複製します。
# replace-string inputpath needle newstring:
#   inputpath にあるファイルの内容から文字列 'needle' を検索し、'needle' の全てを 'newstring' に置き換えます。
#
# 例えば、python3 file_manipulator.py reverse python_practice/data/test.txt python_practice/dump/test-dumb.txt
# というコマンドに対して、 argv は以下のリストを持つことになります。
# ['file_manipulator.py','reverse','python_practice/data/test.txt','python_practice/dump/test-dumb.txt']
import sys
import os


def main():
    # 引数数の検証
    if len(sys.argv) < 3:
        print("Usage: python file_manipulator.py <command> <inputpath> [args...]")
        sys.exit(1)

    command = sys.argv[1]
    inputpath = sys.argv[2]

    # ファイル存在確認
    if not os.path.exists(inputpath):
        print(f"Error: {inputpath} が見つかりません")
        sys.exit(1)

    try:
        if command == "reverse":
            if len(sys.argv) < 4:
                print(
                    "Usage: python file_manipulator.py reverse <inputpath> <outputpath>"
                )
                sys.exit(1)
            outputpath = sys.argv[3]
            with open(inputpath, "r") as f:
                contents = f.read()
            with open(outputpath, "w") as f:
                f.write(contents[::-1])

        elif command == "copy":
            if len(sys.argv) < 4:
                print("Usage: python file_manipulator.py copy <inputpath> <outputpath>")
                sys.exit(1)
            outputpath = sys.argv[3]
            with open(inputpath, "r") as f:
                contents = f.read()
            with open(outputpath, "w") as f:
                f.write(contents)

        elif command == "duplicate-contents":
            if len(sys.argv) < 4:
                print(
                    "Usage: python file_manipulator.py duplicate-contents <inputpath> <n>"
                )
                sys.exit(1)
            times = int(sys.argv[3])
            with open(inputpath, "r") as f:
                contents = f.read()
            with open(inputpath, "w") as f:
                f.write(contents * times)

        elif command == "replace-string":
            if len(sys.argv) < 5:
                print(
                    "Usage: python file_manipulator.py replace-string <inputpath> <needle> <newstring>"
                )
                sys.exit(1)
            needle = sys.argv[3]
            new_string = sys.argv[4]
            with open(inputpath, "r") as f:
                contents = f.read()
            with open(inputpath, "w") as f:
                f.write(contents.replace(needle, new_string))

        else:
            print(f"Error: 未知のコマンド '{command}'")
            sys.exit(1)

    except IOError as e:
        print(f"Error: ファイル操作に失敗しました - {e}")
        sys.exit(1)
    except ValueError as e:
        print(f"Error: 引数が無効です - {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
