from typing import Optional


class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next: Optional["SinglyLinkedListNode"] = None


def getLinkedList(arr) -> str:
    head: SinglyLinkedListNode = SinglyLinkedListNode(arr[0])
    current_node = head
    for i in range(1, len(arr)):
        current_node.next = SinglyLinkedListNode(arr[i])
        current_node = current_node.next

    answer = ""
    current_node = head
    while current_node is not None:
        if current_node.next is None:
            answer += str(current_node.data) + "➡" + "End"
        else:
            answer += str(current_node.data) + "➡"
        current_node = current_node.next

    return answer


print(getLinkedList([10, 20, 30, 40, 50]))
