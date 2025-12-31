class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def findMergeNode(headA: SinglyLinkedListNode, headB: SinglyLinkedListNode) -> int:
    def length(head):
        cnt = 0
        while head:
            cnt += 1
            head = head.next
        return cnt

    lenA = length(headA)
    lenB = length(headB)

    a, b = headA, headB

    # 長さを揃える
    if lenA > lenB:
        for _ in range(lenA - lenB):
            a = a.next
    else:
        for _ in range(lenB - lenA):
            b = b.next

    candidate = -1

    while a and b:
        if a.data == b.data:
            if candidate == -1:
                candidate = a.data  # 一致開始点を記録
        else:
            candidate = -1  # 一致が切れたら破棄
        a = a.next
        b = b.next

    return candidate
