class Node:
    def __init__(self, data: int):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def peekFront(self) -> int:
        if self.head is None:
            return None
        return self.head.data

    def peekBack(self) -> int:
        if self.tail is None:
            return self.peekFront()
        return self.tail.data

    def enqueue(self, data: int):
        if self.tail is None:
            self.head = self.tail = Node(data)
        self.tail.next = Node(data)
        self.tail = self.tail.next

    def dequeue(self) -> int:
        if self.head is None:
            return None
        temp = self.head
        self.head = self.head.next
        return temp.data


q = Queue()

(q.enqueue(4))
print(q.peekFront())
print(q.peekBack())
(q.enqueue(50))
print(q.peekFront())
print(q.peekBack())
(q.enqueue(64))
print(q.peekFront())
print(q.peekBack())
print(q.dequeue())
