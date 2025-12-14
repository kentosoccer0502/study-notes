from typing import Optional


class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def removeNthFromEnd(
    head: Optional[SinglyLinkedListNode], n: int
) -> Optional[SinglyLinkedListNode]:
    """
    単方向連結リストから末尾からn番目のノードを削除します。
    nは1-based（1が末尾）。無効なn（0以下）や空リストの場合はNoneまたはheadを返します。

    Args:
        head: リストのヘッドノード
        n: 削除するノードの末尾からの位置（1-based）

    Returns:
        削除後のリストのヘッドノード
    """
    if head is None or n <= 0:
        return head

    dummy = SinglyLinkedListNode(0)
    dummy.next = head
    fast = slow = dummy

    # fastをn+1ステップ進める（削除対象の前のノードをslowで指すため）
    for _ in range(n + 1):
        if fast is None:
            return head  # nがリスト長を超える場合
        fast = fast.next

    # slowを同期させて削除対象の前のノードに移動
    while fast is not None:
        slow = slow.next
        fast = fast.next

    # ノードを削除
    slow.next = slow.next.next if slow.next else None

    return dummy.next
