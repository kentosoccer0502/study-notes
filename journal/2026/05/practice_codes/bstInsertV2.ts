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

function bstInsert(root: BinaryTree<number> | null, key: number): BinaryTree<number> | null {
  if (!root) return new BinaryTree(key);

  if (root.data === key) return root;
  if (root.data < key) {
    root.right = bstInsert(root.right, key);
  } else {
    root.left = bstInsert(root.left, key);
  }
  return root;
}
