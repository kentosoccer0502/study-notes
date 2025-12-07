# タスクはマークダウンを HTML に変換するプログラムを作成し、
# シェルを通して python3 file-converter.py markdown inputfile outputfile というコマンドを実行させることです。
# ここで、markdown は実行するコマンド、inputfile は .md ファイルへのパス、
# 出力パスはプログラムを実行した後に作成される .html です。


import sys
import markdown
