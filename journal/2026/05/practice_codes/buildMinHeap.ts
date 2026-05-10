function buildMinHeap(intArr: number[]): number[] {
  const copyArr = [...intArr];
  const lastParent = Math.floor((copyArr.length - 1) / 2);
  for (let i = lastParent; i >= 0; i--) {
    heapify(copyArr, i);
  }
  return copyArr;
}

function heapify(arr: number[], index: number): void {
  let l = 2 * index + 1;
  let r = 2 * index + 2;
  let smallest = index;

  if (l < arr.length && arr[l] < arr[smallest]) smallest = l;
  if (r < arr.length && arr[r] < arr[smallest]) smallest = r;

  if (smallest !== index) {
    let temp = arr[index];
    arr[index] = arr[smallest];
    arr[smallest] = temp;

    heapify(arr, smallest);
  }
}
