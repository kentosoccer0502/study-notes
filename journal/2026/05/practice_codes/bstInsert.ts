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
 * 二分探索木に要素を挿入する
 * @param root
 * @param key
 * @returns
 */
function bstInsert(root: BinaryTree<number> | null, key: number): BinaryTree<number> | null {
  if (!root) return new BinaryTree(key);
  let iterator = root;
  while (iterator) {
    if (iterator.data === key) return root;
    if (iterator.data < key) {
      if (iterator.right) {
        iterator = iterator.right;
      } else {
        iterator.right = new BinaryTree(key);
        return root;
      }
    } else {
      if (iterator.left) {
        iterator = iterator.left;
      } else {
        iterator.left = new BinaryTree(key);
        return root;
      }
    }
  }
  return root;
}
