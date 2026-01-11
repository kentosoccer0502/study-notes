from typing import List


class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def palindromeLinkedList_v2(head: SinglyLinkedListNode) -> bool:
    # 中間地点を探す
    fast = slow = head
    while fast.next:
        slow = slow.next
        fast = fast.next.next
    # 後半のリストをstackに格納
    stack: List[int] = []
    while slow is not None:
        stack.append(slow.data)
        slow = slow.next
    # 前半とstackのデータ比較
    iterator = head
    while stack:
        if stack.pop() != iterator.data:
            return False
        iterator = iterator.next

    return True
