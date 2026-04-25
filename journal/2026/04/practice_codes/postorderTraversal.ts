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

function postorderTraversal(root: BinaryTree<number> | null): number[] {
  if (!root) return [];
  let answer: number[] = [];

  if (root.left) {
    answer.push(...postorderTraversal(root.left));
  }
  if (root.right) {
    answer.push(...postorderTraversal(root.right));
  }
  answer.push(root.data);

  return answer;
}
