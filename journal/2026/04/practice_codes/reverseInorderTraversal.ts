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

function reverseInorderTraversal(root: BinaryTree<number> | null): number[] {
  if (!root) return [];
  let answer: number[] = [];

  if (root.right) {
    answer.push(...reverseInorderTraversal(root.right));
  }
  answer.push(root.data);
  if (root.left) {
    answer.push(...reverseInorderTraversal(root.left));
  }

  return answer;
}
