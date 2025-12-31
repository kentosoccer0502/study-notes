class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def insertNodeInSorted(head, data):
    current_node = head
    new_node = SinglyLinkedListNode(data)

    if head.data >= new_node.data:
        new_node.next = head
        return new_node

    while current_node.next is not None and current_node.next.data < new_node.data:
        current_node = current_node.next

    new_node.next = current_node.next
    current_node.next = new_node

    return head
