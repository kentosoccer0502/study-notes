class Node:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None


class Deque:
    def __init__(self):
        self.head = None
        self.tail = None

    def peekFront(self):
        if self.head == None:
            return None
        return self.head.data

    def peekBack(self):
        if self.tail == None:
            return None
        return self.tail.data

    def enqueueFront(self, data):
        if self.head == None:
            self.head = Node(data)
            self.tail = self.head
        else:
            node = Node(data)
            self.head.prev = node
            node.next = self.head
            self.head = node

    def enqueueBack(self, data):
        if self.head == None:
            self.head = Node(data)
            self.tail = self.head
        else:
            node = Node(data)
            self.tail.next = node
            node.prev = self.tail
            self.tail = node

    def dequeueFront(self):
        if self.head == None:
            return None

        temp = self.head
        self.head = self.head.next
        if self.head is not None:
            self.head.prev = None
        else:
            self.tail = None
        return temp.data

    def dequeueBack(self):
        if self.tail == None:
            return None

        temp = self.tail
        self.tail = self.tail.prev

        if self.tail is not None:
            self.tail.next = None
        else:
            self.head = None
        return temp.data


from typing import List


def getMaxWindows(arr: List[int], k: int) -> List[int]:
    if len(arr) < k:
        return []
    deque = Deque()
    results = []

    # 両端キューの初期化
    for i, num in enumerate(arr[:k]):
        while deque.peekBack() is not None and arr[deque.peekBack()] <= num:
            deque.dequeueFront()
        deque.enqueueBack(i)

    # ウィンドウをスライドさせていく
    for i, num in enumerate(arr[k:], k):
        results.append(arr[deque.peekFront()])
        while deque.peekFront() is not None and deque.peekFront() <= i - k:
            deque.dequeueFront()
        while deque.peekBack() is not None and arr[deque.peekBack()] <= num:
            deque.dequeueBack()
        deque.enqueueBack(i)
    results.append(arr[deque.peekFront()])

    return results


print(
    getMaxWindows([34, 35, 64, 34, 10, 2, 14, 5, 353, 23, 35, 63, 23], 4)
)  # [64, 64, 64, 34, 14, 353, 353, 353, 353, 63]
