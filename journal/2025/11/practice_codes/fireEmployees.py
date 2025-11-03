from typing import List, Dict, Set


# fireEmployees
# 入力: employees の長さ n, unemployed の長さ m
# 時間計算量: O(n + m)
#   - set(employees + unemployed) : O(n + m)
#   - dict 作成・リスト結合・ループ処理全て合算して O(n + m)
# 空間計算量: O(n + m)
#   - employees_set, employees_dict, all_employees が最悪で合計 O(n + m)
# 補足コメント:
#   - 定数係数が大きい実装。employees_set, employees_dict, all_employees の
#     3つのデータ構造を作るためメモリ割当が増える。
#   - ハッシュ計算やループ（セット/辞書への挿入・検索）が複数回発生するため
#     実行時コストも増える（キャッシュ効果や GC への影響も考慮）。
#   - debug の print が I/O オーバーヘッドを生む可能性がある。
def fireEmployees(employees: List[str], unemployed: List[str]) -> List[str]:
    # 従業員および来月解雇される集合
    employees_set: Set[str] = set(employees + unemployed)
    print(employees_set)
    # 従業員をキーとした辞書
    employees_dict: Dict[str, int] = {employee: 0 for employee in employees_set}
    print(employees_dict)
    # 従業員および来月解雇されるリスト
    all_employees: List[str] = employees + unemployed
    print(all_employees)

    for i in all_employees:
        if i in employees_dict:
            employees_dict[i] += 1

    return [key for key, value in employees_dict.items() if value == 1]


from typing import List, Set


# fireEmployeesv2
# 入力: employees の長さ n, unemployed の長さ m
# 時間計算量: O(n + m)
#   - set(unemployed) : O(m)
#   - employees を一回走査してメンバーシップチェック O(n)
# 空間計算量: O(n + m)
#   - unemployed_set は O(m)
#   - answer は最悪で O(n)
# 補足コメント:
#   - 定数係数が小さい実装。unemployed_set と結果用リストだけを保持するため
#     メモリ割当が少ない（employees_set / employees_dict / all_employees を作らない）。
#   - ハッシュ／ループの回数も少なく、余分なデータ構造を経由しないため
#     実行速度が実用上速くなる傾向がある。
#   - 副作用（print 等）も無く単純なので可読性・保守性も高い。
def fireEmployeesv2(employees: List[str], unemployed: List[str]) -> List[str]:
    # { "名前": int}
    unemployed_set: Set[str] = set(unemployed)
    answer: List[str] = []

    for employee in employees:
        if not employee in unemployed_set:
            answer.append(employee)

    return answer
