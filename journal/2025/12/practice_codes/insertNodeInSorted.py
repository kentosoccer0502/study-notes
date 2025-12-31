class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def insertNodeInSorted(head: SinglyLinkedListNode, data: int) -> SinglyLinkedListNode:
    current_node = head
    new_node = SinglyLinkedListNode(data)

    while current_node is not None:
        if current_node.data > new_node.data:
            temp = prev_node.next
            current_node.next = new_node
            new_node.next = temp
            return head
        prev_node = current_node
        current_node = current_node.next

    return head
