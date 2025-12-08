class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def insertAtTail(head, data):
    new_node = SinglyLinkedListNode(data)
    iterator = head
    while iterator.next is not None:
        iterator = iterator.next
    iterator.next = new_node
    return head
