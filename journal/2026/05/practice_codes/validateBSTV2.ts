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

function validateBST(root: BinaryTree<number> | null): boolean {
  return helper(root, -Infinity, Infinity);
}

/**
 * BSTの条件を満たすかどうかを、DFSでノードの値が(min, max)の範囲内にあるかどうかで判断する。
 * @param root
 * @param min
 * @param max
 * @returns
 */
function helper(root: BinaryTree<number> | null, min: number, max: number): boolean {
  if (!root) return true;

  const data = root.data;
  if (data <= min || data >= max) return false;

  return helper(root.left, min, data) && helper(root.right, data, max);
}
