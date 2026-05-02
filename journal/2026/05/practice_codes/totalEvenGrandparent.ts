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
 * 偶数の祖父母を持つノードの値の合計を返す
 * @param root
 * @returns
 */
function totalEvenGrandparent(root: BinaryTree<number>): number {
  /**
   * ヘルパー関数。深さ優先探索で、親ノードと祖父母ノードを引数として渡す
   * @param node
   * @param parent
   * @param grandParent
   * @returns
   */
  function dfs(
    node: BinaryTree<number>,
    parent: BinaryTree<number> | null,
    grandParent: BinaryTree<number> | null
  ): number {
    if (!node) return 0;
    let sum = 0;

    if (grandParent && grandParent.data % 2 === 0) {
      sum += node.data;
    }

    if (node.left) sum += dfs(node.left, node, parent);
    if (node.right) sum += dfs(node.right, node, parent);

    return sum;
  }

  return dfs(root, null, null);
}
