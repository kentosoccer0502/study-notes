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

function symmetricTree(root: BinaryTree<number> | null): boolean {
  if (!root) return true;
  return isMirror(root.left, root.right);
}

/**
 * 左右の子ノードがミラー構造になっているかを確認する
 * @param rootLeft
 * @param rootRight
 * @returns
 */
function isMirror(
  rootLeft: BinaryTree<number> | null,
  rootRight: BinaryTree<number> | null
): boolean {
  if (!rootLeft && !rootRight) return true;
  if (!rootLeft || !rootRight) return false;
  if (rootLeft.data !== rootRight.data) return false;

  // クロスして左右の子ノードを比較する
  return isMirror(rootLeft.left, rootRight.right) && isMirror(rootLeft.right, rootRight.left);
}
