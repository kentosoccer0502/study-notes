class BinaryTree<E> {
  data: E;
  left: BinaryTree<E> | null;
  right: BinaryTree<E> | null;

  constructor(data: E, left: BinaryTree<E> | null = null, right: BinaryTree<E> | null = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

/**
 * 完全二分木かどうかを判定する関数
 * @param root
 * @returns
 */
function isCompleteBinaryTree(root: BinaryTree<number>): boolean {
  let queue: (BinaryTree<number> | null)[] = [root];
  let seenNull: boolean = false;
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (!node) {
        seenNull = true;
      } else {
        if (seenNull) return false;
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }
  return true;
}
