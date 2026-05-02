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
 * 幅優先探索で、最初に見つけた葉ノードの最短深さを返す
 * @param root
 * @returns
 */
function minDepth(root: BinaryTree<number> | null): number {
  if (!root) return 0;
  let queue: BinaryTree<number>[] = [root];
  let depth = 0;

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift()!;
      if (!node.right && !node.left) {
        return depth;
      }
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    depth++;
  }
  return depth;
}
