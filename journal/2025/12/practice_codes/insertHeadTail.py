class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def insertHeadTail(head, data):
    new_tail = SinglyLinkedListNode(data)
    new_head = SinglyLinkedListNode(data)
    iterator = head
    while iterator.next is not None:
        iterator = iterator.next
    iterator.next = new_tail
    new_head.next = head
    head = new_head
    return head
