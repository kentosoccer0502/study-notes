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

function allElementsSorted(
  root1: BinaryTree<number> | null,
  root2: BinaryTree<number> | null
): number[] {
  const root1SortedArray = root1 ? getSortedArray(root1) : [];
  const root2SortedArray = root2 ? getSortedArray(root2) : [];

  return merge(root1SortedArray, root2SortedArray);
}

function getSortedArray(root: BinaryTree<number>): number[] {
  let array: number[] = [];
  if (!root) return [];
  if (root.left) {
    array.push(...getSortedArray(root.left));
  }
  array.push(root.data);
  if (root.right) {
    array.push(...getSortedArray(root.right));
  }
  return array;
}

function merge(arr1: number[], arr2: number[]): number[] {
  let i = 0,
    j = 0;
  let mergedArr: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}
