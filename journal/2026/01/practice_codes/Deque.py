class Item:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None


class Deque:
    def __init__(self):
        self.head = None
        self.tail = None

    def peekFront(self):
        if self.head is None:
            return None
        return self.head.data

    def peekBack(self):
        if self.head is None and self.tail is None:
            return None
        return self.tail.data

    def enqueueFront(self, data):
        item = Item(data)
        if self.head is None:
            self.head = self.tail = item
        else:
            item.next = self.head
            self.head.prev = item
            self.head = item

    def enqueueBack(self, data):
        item = Item(data)
        if self.tail is None:
            self.head = self.tail = item
        item.prev = self.tail
        self.tail.next = item
        self.tail = item

    def dequeueFront(self):
        if self.head is None and self.tail is None:
            return None
        prev_head = self.head
        self.head = prev_head.next
        return prev_head.data

    def dequeueBack(self):
        if self.head is None and self.tail is None:
            return None
        prev_tail = self.tail
        self.tail = prev_tail.prev
        return prev_tail.data


q = Deque()
q.enqueueBack(4)
q.enqueueBack(50)
print(q.peekFront())
print(q.peekBack())

q.enqueueFront(36)
q.enqueueFront(96)
print(q.peekFront())
print(q.peekBack())
print(q.dequeueBack())
print(q.dequeueBack())
print(q.peekFront())
print(q.peekBack())

q.enqueueFront(20)
print(q.dequeueBack())
