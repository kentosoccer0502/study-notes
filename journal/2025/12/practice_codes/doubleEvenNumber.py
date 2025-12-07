from typing import Optional


class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next: Optional["SinglyLinkedListNode"] = None


def doubleEvenNumber(head: SinglyLinkedListNode) -> SinglyLinkedListNode:
    iterator = head
    index = 0
    while iterator is not None:
        if index % 2 == 0:
            tmp_node = iterator.next
            new_node = SinglyLinkedListNode(iterator.data * 2)
            iterator.next = new_node
            new_node.next = tmp_node
            iterator = new_node.next
        else:
            iterator = iterator.next
        index += 1

    return head
