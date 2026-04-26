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

function countNodes(root: BinaryTree<number> | null): number {
  if (!root) return 0;
  const leftCountNodes = countNodes(root.left);
  const rightCountNodes = countNodes(root.right);

  return 1 + leftCountNodes + rightCountNodes;
}
