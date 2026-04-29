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
 * 幅優先探索で全ノードの値が同じかどうか判定する
 * @param root
 * @returns
 */
function treeWithTheSameValue(root: BinaryTree<number> | null): boolean {
  if (!root) return false;
  let queue: (BinaryTree<number> | null)[] = [root];
  const target = root.data;
  while (queue.length > 0) {
    let node = queue.shift();
    if (!node) continue;
    if (node.data !== target) return false;
    queue.push(node.left);
    queue.push(node.right);
  }
  return true;
}
