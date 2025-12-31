class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def insertAtPosition(head, position, data):

    # deta を入れた新しいノードを作ります。
    node = SinglyLinkedListNode(data)

    # iterator に head を入れます。
    iterator = head
    # 与えられた位置の1つ前までリストを走査します。
    for i in range(position):
        # もしiterator.next が null だったら head を返します。
        if iterator.next == None:
            return head
        # iterator を next へ進めます。
        iterator = iterator.next

    # tempに現在のiterator.nextを入れます。
    temp = iterator.next
    # iterator.next を新しいノードにします。
    iterator.next = node
    # 新しいノードの next を temp にします。
    node.next = temp

    return head
