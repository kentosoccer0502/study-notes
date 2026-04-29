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
 * 深さ優先探索で、左右の子ノードを入れ替える
 * @param root
 * @returns
 */
function invertTree(root: BinaryTree<number> | null): BinaryTree<number> | null {
  if (!root) return null;
  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
}
