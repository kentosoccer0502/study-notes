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
 * 有効な二分探索木かどうかを判定する
 * @param root
 * @returns
 */
function validateBST(root: BinaryTree<number> | null): boolean {
  if (!root) return true;
  let queue: [BinaryTree<number>, number, number][] = [[root, -Infinity, Infinity]];

  while (queue.length > 0) {
    let [node, min, max] = queue.shift()!;
    if (node.data <= min || node.data >= max) return false;
    if (node.left) {
      queue.push([node.left, min, node.data]);
    }
    if (node.right) {
      queue.push([node.right, node.data, max]);
    }
  }
  return true;
}
