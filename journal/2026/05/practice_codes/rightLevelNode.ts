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
 * 各階層の右端のノードを返す
 * @param root
 * @returns
 */
function rightLevelNode(root: BinaryTree<number> | null): number[] {
  if (!root) return [];
  let queue: BinaryTree<number>[] = [root];
  let returnArray: number[] = [];

  while (queue.length > 0) {
    let size = queue.length;
    let candidate = 0;
    for (let i = 0; i < size; i++) {
      let node = queue.shift()!;
      candidate = node.data;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    returnArray.push(candidate);
  }
  return returnArray;
}
