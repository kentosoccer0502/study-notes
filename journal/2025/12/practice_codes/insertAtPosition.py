class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def insertAtPosition(
    head: SinglyLinkedListNode, position: int, data: int
) -> SinglyLinkedListNode:
    current_node = head
    new_node = SinglyLinkedListNode(data)
    index = 0

    while current_node is not None:
        if index == position:
            new_node.next = current_node.next
            current_node.next = new_node
        index += 1
        current_node = current_node.next

    return head
