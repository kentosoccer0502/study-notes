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


s1 = Stack()
s1.push(2)
print(s1.peek())  # 2

s1.push(4)
s1.push(3)
s1.push(1)
print(s1.pop())  # 1
print(s1.peek())  # 3

s2 = Stack()
s2.pop()
s2.push(9)
s2.push(8)
print(s2.peek())  # 8
