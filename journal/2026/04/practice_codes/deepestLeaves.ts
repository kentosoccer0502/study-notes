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
 * 幅優先探索で各レベルの合計値を算出し、最後のレベルの合計値を返す
 * @param root
 * @returns
 */
function deepestLeaves(root: BinaryTree<number> | null): number {
  if (!root) return 0;
  let queue: BinaryTree<number>[] = [root];
  let sum = 0;
  while (queue.length > 0) {
    let size = queue.length;
    sum = 0;
    for (let i = 0; i < size; i++) {
      let iterator = queue.shift()!;
      sum += iterator.data;
      if (iterator.left) queue.push(iterator.left);
      if (iterator.right) queue.push(iterator.right);
    }
  }
  return sum;
}
