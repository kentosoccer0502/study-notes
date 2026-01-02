class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def reproduceByN(head: SinglyLinkedListNode, n: int) -> SinglyLinkedListNode:
    if n == 1:
        return head
    dummy_node = SinglyLinkedListNode(0)
    iterator = dummy_node

    for _ in range(n):
        current_node = head
        while current_node is not None:
            iterator.next = SinglyLinkedListNode(current_node.data)
            iterator = iterator.next
            current_node = current_node.next

    return dummy_node.next
