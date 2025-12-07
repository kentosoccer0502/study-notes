from typing import Optional


class Node:
    def __init__(self, data):
        self.data = data
        self.next: Optional["Node"] = None


class SinglyLinkedList:
    def __init__(self, arr):
        self.head = Node(arr[0]) if len(arr) > 0 else Node(None)

        currentNode = self.head
        for i in range(1, len(arr)):
            currentNode.next = Node(arr[i])
            currentNode = currentNode.next

    def at(self, index):
        iterator = self.head
        for i in range(0, index):
            iterator = iterator.next
            if iterator == None:
                return None
        return iterator

    def findNode(self, key):
        iterator = self.head
        index = 0
        while iterator is not None:
            if iterator.data == key:
                return index
            iterator = iterator.next
            index += 1
        return None


numList = SinglyLinkedList([35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555])

# データを出力してください。
node_at_2 = numList.at(2)
print(node_at_2.data if node_at_2 is not None else None)

node_at_5 = numList.at(5)
print(node_at_5.data if node_at_5 is not None else None)

print(numList.findNode(67))
print(numList.findNode(767))
