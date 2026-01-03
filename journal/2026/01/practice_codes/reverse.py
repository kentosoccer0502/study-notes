from typing import List


class Item:
    def __init__(self, data: int):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.head = None

    def push(self, data: int):
        temp = self.head
        self.head = Item(data)
        self.head.next = temp

    def pop(self):
        if self.head is None:
            return None
        temp = self.head
        self.head = self.head.next
        return temp.data

    def peek(self):
        if self.head is None:
            return None
        return self.head.data


def reverse(arr: List[int]) -> List[int]:
    if len(arr) <= 1:
        return arr
    answer = []
    stack = Stack()
    for i in range(len(arr)):
        stack.push(arr[i])
    for i in range(len(arr)):
        answer.append(stack.pop())

    return answer
