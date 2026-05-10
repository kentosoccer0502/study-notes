function buildMaxHeap(intArr: number[]): number[] {
  const copyArr = [...intArr];
  const lastParent = Math.floor((copyArr.length - 2) / 2);
  for (let i = lastParent; i >= 0; i--) {
    maxHeapify(copyArr, copyArr.length, i);
  }
  return copyArr;
}

function maxHeapify(arr: number[], heapEnd: number, index: number): void {
  let l = 2 * index + 1;
  let r = 2 * index + 2;
  let biggest = index;

  if (l < heapEnd && arr[l] > arr[biggest]) biggest = l;
  if (r < heapEnd && arr[r] > arr[biggest]) biggest = r;

  if (biggest != index) {
    let temp = arr[index];
    arr[index] = arr[biggest];
    arr[biggest] = temp;

    maxHeapify(arr, heapEnd, biggest);
  }
}
