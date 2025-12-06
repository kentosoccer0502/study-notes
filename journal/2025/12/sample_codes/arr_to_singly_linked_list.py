from typing import Optional


class Node:
    def __init__(self, data: int):
        self.data: int = data
        self.next: Optional["Node"] = None


class SinglyLinkedList:
    def __init__(self, node):
        self.head = node


arr = [35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555]
numList = SinglyLinkedList(Node(arr[0]))
currentNode = numList.head
for i in range(1, len(arr)):
    currentNode.next = Node(arr[i])
    currentNode = currentNode.next

currentNode = numList.head
while currentNode is not None:
    print(currentNode.data)
    currentNode = currentNode.next
