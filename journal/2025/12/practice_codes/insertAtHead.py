class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def insertAtHead(head, data):
    new_node = SinglyLinkedListNode(data)
    new_node.next = head
    head = new_node
    return head
