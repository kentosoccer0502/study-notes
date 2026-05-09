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

function bstDelete(root: BinaryTree<number> | null, key: number): BinaryTree<number> | null {
  if (!root) return null;

  // 左部分木へ
  if (key < root.data) {
    root.left = bstDelete(root.left, key);
    return root;
  }

  // 右部分木へ
  if (key > root.data) {
    root.right = bstDelete(root.right, key);
    return root;
  }

  // ===== ここから削除対象 =====

  // 1. 葉ノード
  if (!root.left && !root.right) {
    return null;
  }

  // 2. 左の子だけ
  if (root.left && !root.right) {
    return root.left;
  }

  // 3. 右の子だけ
  if (root.right && !root.left) {
    return root.right;
  }

  // 4. 子2つ
  const minNode = findMinNode(root.right!);

  // 値コピー
  root.data = minNode.data;

  // コピー元を削除
  root.right = bstDelete(root.right, minNode.data);

  return root;
}

function findMinNode(root: BinaryTree<number>): BinaryTree<number> {
  let iterator = root;

  while (iterator.left) {
    iterator = iterator.left;
  }

  return iterator;
}
