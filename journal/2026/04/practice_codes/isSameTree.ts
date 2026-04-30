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
 * 同じ構造で同じ値を持つ二分木かどうかを判定する関数
 * @param root1
 * @param root2
 * @returns
 */
function isSameTree(root1: BinaryTree<number> | null, root2: BinaryTree<number> | null): boolean {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.data !== root2.data) return false;

  return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
}
