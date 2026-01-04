from typing import List


def consecutiveWalk(arr: List):
    if len(arr) <= 1:
        return arr

    stack = Stack()
    stack.push(arr[0])
    result = []

    for i in range(1, len(arr)):
        if arr[i] < stack.peek():
            stack = Stack()
        stack.push(arr[i])

    while stack.peek() is not None:
        result.append(stack.pop())

    return result


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
