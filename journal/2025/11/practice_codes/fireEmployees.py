from typing import List, Dict, Set


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


def fireEmployeesv2(employees: List[str], unemployed: List[str]) -> List[str]:
    # { "名前": int}
    unemployed_set: Set[str] = set(unemployed)
    answer: List[str] = []

    for employee in employees:
        if not employee in unemployed_set:
            answer.append(employee)

    return answer
