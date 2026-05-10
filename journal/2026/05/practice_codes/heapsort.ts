function heapsort(intArr: number[]): number[] {
  // まず最小ヒープを構成
  buildMaxHeap(intArr);

  let heapEnd = intArr.length - 1;
  while (heapEnd > 0) {
    let temp = intArr[heapEnd];
    intArr[heapEnd] = intArr[0];
    intArr[0] = temp;

    heapEnd -= 1;
    heapify(intArr, heapEnd + 1, 0);
  }

  return intArr;
}

function buildMaxHeap(intArr: number[]): void {
  const lastParent = Math.floor((intArr.length - 1) / 2);
  for (let i = lastParent; i >= 0; i--) {
    heapify(intArr, intArr.length, i);
  }
}

function heapify(arr: number[], heapEnd: number, index: number): void {
  let l = 2 * index + 1;
  let r = 2 * index + 2;
  let biggest = index;

  if (l < heapEnd && arr[l] > arr[biggest]) biggest = l;
  if (r < heapEnd && arr[r] > arr[biggest]) biggest = r;

  if (biggest !== index) {
    let temp = arr[index];
    arr[index] = arr[biggest];
    arr[biggest] = temp;

    heapify(arr, heapEnd, biggest);
  }
}
