#
# この課題では、ユーザーに 2 つの数字、最小数（n）と最大数（m）を入力してもらうことになります。
# 最小値が最大値以下であることを確認することが重要です。
# ユーザーは、この 2 つの数字を入力すると、プログラムが n から m の範囲内で乱数を生成します。
# その後、ユーザーは乱数を正しく推測するまで、ゲームループの中で繰り返し数字を入力することになります。
# 与えられた範囲内の乱数を生成するには、random モジュールと randint 関数を使用してください。
# ゲームをより難しくするために、ユーザーが数字を推測するための試行回数を制限することができます。
# この場合、for 文で最大 n 回の試行を行うか、while 文でユーザーが数字を正しく当てるまで繰り返し入力する方法があります。
#
import random, sys

sys.stdout.buffer.write(b"Enter the minimum number:\n")
sys.stdout.flush()
min_num = int(sys.stdin.buffer.readline())
sys.stdout.buffer.write(b"Enter the maximum number:\n")
sys.stdout.flush()
max_num = int(sys.stdin.buffer.readline())

if min_num > max_num:
    sys.stdout.buffer.write(
        b"Minimum number must be less than or equal to maximum number.\n"
    )
    sys.stdout.flush()
    sys.exit(1)

target_num = random.randint(min_num, max_num)
sys.stdout.buffer.write(b"Guess the number between %d and %d:\n" % (min_num, max_num))
sys.stdout.flush()
while True:
    guess = int(sys.stdin.buffer.readline())
    if guess < target_num:
        sys.stdout.buffer.write(b"Too low! Try again:\n")
    elif guess > target_num:
        sys.stdout.buffer.write(b"Too high! Try again:\n")
    else:
        sys.stdout.buffer.write(b"Congratulations! You've guessed the number!\n")
        break
    sys.stdout.flush()
