from typing import Optional


class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def removeNthNode(head, n):
    dummy = SinglyLinkedListNode(0)
    dummy.next = head
    if n == 0:
        return head

    fast = slow = dummy

    for i in range(n + 1):
        if fast == None:
            return head
        fast = fast.next

    while fast:
        slow = slow.next
        fast = fast.next

    slow.next = slow.next.next

    return dummy.next
