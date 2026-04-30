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
 * 2つのBSTをマージする関数
 * @param root1
 * @param root2
 * @returns
 */
function mergeBST(
  root1: BinaryTree<number> | null,
  root2: BinaryTree<number> | null
): BinaryTree<number> | null {
  if (!root1 && !root2) return null;
  if (!root1) return root2;
  if (!root2) return root1;
  const mergedRoot = new BinaryTree(root1.data + root2.data);

  mergedRoot.left = mergeBST(root1.left, root2.left);
  mergedRoot.right = mergeBST(root1.right, root2.right);

  return mergedRoot;
}
