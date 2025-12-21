from typing import List


class Item:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None


class DoublyLinkedList:
    def __init__(self, arr: List[int]):

        if len(arr) <= 1:
            self.head = Item(None)
            self.tail = self.head
            return

        self.head = Item(arr[0])
        current_node = self.head

        for i in range(1, len(arr)):
            current_node.next = Item(arr[i])
            current_node.next.prev = current_node
            current_node = current_node.next

        self.tail = current_node


numList = DoublyLinkedList([1, 2, 3, 4, 5, 6, 7])
print(numList.head.data)
print(numList.head.next.data)
print(numList.head.next.prev.data)
print(numList.tail.data)
print(numList.tail.prev.data)
print(numList.tail.prev.prev.data)
