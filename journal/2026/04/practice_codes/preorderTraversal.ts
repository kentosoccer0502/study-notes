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

function preorderTraversal(root: BinaryTree<number> | null): number[] {
  let answer: number[] = [];
  if (!root) return [];
  answer.push(root.data);
  if (root.left) {
    answer.push(...preorderTraversal(root.left));
  }
  if (root.right) {
    answer.push(...preorderTraversal(root.right));
  }
  return answer;
}
