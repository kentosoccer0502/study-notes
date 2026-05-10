class PriorityQueue {
  maxHeap: number[];
  constructor(arr: number[]) {
    const copyArr = [...arr];
    Heap.buildMaxHeap(copyArr);
    this.maxHeap = copyArr;
  }

  top(): number {
    return this.maxHeap[0];
  }
}

class Heap {
  static left(i) {
    return 2 * i + 1;
  }

  static right(i) {
    return 2 * i + 2;
  }

  static parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // ヒープのサイズを追跡するために maxHeapify を拡張します
  static maxHeapify(arr, heapEnd, i) {
    let l = Heap.left(i);
    let r = Heap.right(i);
    let biggest = i;

    // heapEnd より後ろはすでにソートされているので、l と　r のインデックスは heapEnd までを比較します。
    if (l <= heapEnd && arr[l] > arr[biggest]) biggest = l;
    if (r <= heapEnd && arr[r] > arr[biggest]) biggest = r;

    if (biggest != i) {
      let temp = arr[i];
      arr[i] = arr[biggest];
      arr[biggest] = temp;
      Heap.maxHeapify(arr, heapEnd, biggest);
    }
  }

  static buildMaxHeap(arr) {
    let middle = Heap.parent(arr.length);
    for (let i = middle; i >= 0; i--) {
      Heap.maxHeapify(arr, arr.length - 1, i);
    }
  }

  // ヒープソートを実装します。
  static heapSort(arr) {
    // まず、配列arrをヒープ構造に変換します。このためにbuildMaxHeapメソッドを使用します。
    // ヒープ構造とは、特定のプロパティを持つ完全二分木のことを指します。
    // 最大ヒープの場合、すべての親ノードはその子ノードより大きい値を持ちます。
    Heap.buildMaxHeap(arr);

    // ヒープサイズを追跡するためにheapEndという変数を作り、最初は配列の最後の要素を指すようにします。
    let heapEnd = arr.length - 1;
    while (heapEnd > 0) {
      // ここでは、ヒープの根（最大値）とヒープの最後の要素heapEndを交換します。
      // これにより、最大の要素が配列の正しい位置、つまり末尾に移動します。
      let temp = arr[heapEnd];
      arr[heapEnd] = arr[0];
      arr[0] = temp;

      // 交換が完了したので、ヒープの終端を一つ左（前）に移動します。
      // これは、現在の最大値（元々の根）が正しい場所に移動したため、それを無視できることを意味します。
      heapEnd -= 1;

      // ヒープの根を変更したため、ヒープの性質が破壊されている可能性があります。
      // したがって、maxHeapifyメソッドを使って再度ヒープ性質を満たすように調整します。
      Heap.maxHeapify(arr, heapEnd, 0);
    }
  }
}

const pq1 = new PriorityQueue([2, 3, 43, 2, 53, 6, 75, 10]);
console.log(pq1.top());

const pq2 = new PriorityQueue([3, 12, 0, 2, 9, 1, 65, 32]);
console.log(pq2.top());

const pq3 = new PriorityQueue([1, 2, 3, 4, 8, 2, 1, 9, 7, 3, 4]);
console.log(pq3.top());
