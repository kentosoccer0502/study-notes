function topKElements(intArr: number[], k: number): number[] {
  if (k > intArr.length) {
    throw new Error('k cannot be greater than the length of the array');
  }

  let minHeap: number[] = [];
  for (let num of intArr) {
    if (minHeap.length < k) {
      minHeap.push(num);
      minHeap.sort((a, b) => a - b); // 小さい順にソート
    } else if (num > minHeap[0]) {
      minHeap[0] = num;
      minHeap.sort((a, b) => a - b); // 小さい順にソート
    }
  }
  return minHeap.sort((a, b) => b - a); // 大きい順にソートして返す
}
