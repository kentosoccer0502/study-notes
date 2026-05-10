function topKElements(intArr: number[], k: number): number[] {
  let answer: number[] = [];
  heapSort(intArr);
  for (let i = 0; i < k; i++) {
    answer.push(intArr[intArr.length - 1 - i]);
  }
  return answer;
}

function minKElements(intArr: number[], k: number): number[] {
  heapsort(intArr);
  let answer: number[] = [];
  for (let i = 0; i < k; i++) {
    answer.push(intArr[i]);
  }
  return answer;
}

function heapSort(arr: number[]): void {
  buildMaxHeap(arr);

  let heapEnd = arr.length - 1;
  while (heapEnd > 0) {
    let temp = arr[heapEnd];
    arr[heapEnd] = arr[0];
    arr[0] = temp;

    heapEnd -= 1;
    maxHeapify(arr, heapEnd, 0);
  }
}

function buildMaxHeap(arr: number[]): void {
  const lastParent = Math.floor((arr.length - 1) / 2);
  for (let i = lastParent; i >= 0; i--) {
    maxHeapify(arr, arr.length, i);
  }
}

function maxHeapify(arr: number[], heapEnd: number, index: number): void {
  let l = 2 * index + 1;
  let r = 2 * index + 2;
  let biggest = index;

  if (l <= heapEnd && arr[l] > arr[biggest]) biggest = l;
  if (r <= heapEnd && arr[r] > arr[biggest]) biggest = r;

  if (biggest !== index) {
    let temp = arr[index];
    arr[index] = arr[biggest];
    arr[biggest] = temp;

    maxHeapify(arr, heapEnd, biggest);
  }
}
