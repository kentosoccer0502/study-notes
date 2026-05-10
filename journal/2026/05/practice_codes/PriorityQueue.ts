class HeapLibrary {
  static buildMaxHeap(arr: number[]): void {
    const mid = HeapLibrary.parent(arr.length - 1);

    for (let i = mid; i >= 0; i--) {
      HeapLibrary.maxHeapify(arr, arr.length - 1, i);
    }
  }

  static maxHeapify(arr: number[], heapEnd: number, i: number): void {
    const l = HeapLibrary.left(i);
    const r = HeapLibrary.right(i);

    let biggest = i;

    if (l <= heapEnd && arr[l] > arr[biggest]) {
      biggest = l;
    }

    if (r <= heapEnd && arr[r] > arr[biggest]) {
      biggest = r;
    }

    if (i !== biggest) {
      const temp = arr[i];
      arr[i] = arr[biggest];
      arr[biggest] = temp;

      HeapLibrary.maxHeapify(arr, heapEnd, biggest);
    }
  }

  static left(i: number): number {
    return i * 2 + 1;
  }

  static right(i: number): number {
    return i * 2 + 2;
  }

  static parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }
}

class PriorityQueue {
  maxHeap: number[];

  constructor(arr: number[]) {
    const copyArr = [...arr];

    HeapLibrary.buildMaxHeap(copyArr);

    this.maxHeap = copyArr;
  }

  top(): number {
    return this.maxHeap[0];
  }

  pop(): number {
    const popped = this.maxHeap[0];

    this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];

    this.maxHeap.pop();

    HeapLibrary.maxHeapify(this.maxHeap, this.maxHeap.length - 1, 0);

    return popped;
  }
}

const pq = new PriorityQueue([2, 3, 43, 2, 53, 6, 75, 10]);

console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.top());
