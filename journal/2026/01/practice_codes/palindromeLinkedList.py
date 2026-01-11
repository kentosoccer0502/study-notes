from typing import List


class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def palindromeLinkedList(head: SinglyLinkedListNode) -> bool:
    iterator = head
    stack: List[int] = []

    while iterator is not None:
        stack.append(iterator.data)
        iterator = iterator.next

    iterator = head
    while iterator is not None:
        data = stack.pop()
        if data != iterator.data:
            return False
        iterator = iterator.next

    return True
