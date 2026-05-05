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

function levelOrderTraversal(root: BinaryTree<number> | null): (number | null)[] {
  if (!root) return [];
  let queue: (BinaryTree<number> | null)[] = [root];
  let answer: (number | null)[] = [];

  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift()!;
      if (node) {
        answer.push(node.data);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        answer.push(null);
      }
    }
  }
  while (answer.length > 0 && answer[answer.length - 1] === null) {
    answer.pop();
  }
  return answer;
}
