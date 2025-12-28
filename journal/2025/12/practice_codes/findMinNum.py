class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def findMinNum(head: SinglyLinkedListNode) -> int:
    current_node = head
    index = 0
    min_index = 0
    min_data = head.data

    while current_node is not None:
        if min_data >= current_node.data:
            min_data = current_node.data
            min_index = index
        current_node = current_node.next
        index += 1

    return min_index
