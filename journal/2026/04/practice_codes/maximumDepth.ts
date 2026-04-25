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

function maximumDepth(root: BinaryTree<number> | null): number {
  if (!root) return -1; // エッジ数で深さを数えるため、空の木の深さは -1 とする
  const depth_left = maximumDepth(root.left);
  const depth_right = maximumDepth(root.right);
  return Math.max(depth_left, depth_right) + 1;
}
