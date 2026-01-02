class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def findMergeNode(headA: SinglyLinkedListNode, headB: SinglyLinkedListNode) -> int:
    len_a = get_len(headA)
    len_b = get_len(headB)
    len_diff = abs(len_a - len_b)
    iterator_a = headA
    iterator_b = headB

    if len_a >= len_b:
        iterator_a = get_head_at(iterator_a, len_diff)
    else:
        iterator_b = get_head_at(iterator_b, len_diff)

    candidate = -1
    while iterator_a is not None:
        if iterator_a.data == iterator_b.data:
            if candidate == -1:
                candidate = iterator_a.data
        else:
            candidate = -1

        iterator_a = iterator_a.next
        iterator_b = iterator_b.next

    return candidate


def get_len(head: SinglyLinkedListNode) -> int:
    iterator = head
    len = 0
    while iterator is not None:
        len += 1
        iterator = iterator.next

    return len


def get_head_at(head: SinglyLinkedListNode, len: int) -> SinglyLinkedListNode:
    iterator = head
    for i in range(len):
        iterator = iterator.next
    return iterator
