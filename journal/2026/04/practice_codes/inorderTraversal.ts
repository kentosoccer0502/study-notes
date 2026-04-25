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

function inorderTraversal(root: BinaryTree<number> | null): number[] {
  let answer: number[] = [];
  if (!root) return [];

  if (root.left) {
    answer.push(...inorderTraversal(root.left));
  }
  answer.push(root.data);
  if (root.right) {
    answer.push(...inorderTraversal(root.right));
  }
  return answer;
}
