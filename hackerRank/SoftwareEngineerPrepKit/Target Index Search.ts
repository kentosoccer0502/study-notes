// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/lookup-with-binary-search/problem?isFullScreen=true
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n');
  inputString = '';

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'binarySearch' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY nums
 *  2. INTEGER target
 */

function binarySearch(nums: number[], target: number): number {
  // Write your code here
  // 時間計算量; O(n), 空間計算量; O(n)...sliceは毎回コピーを作成するので空間計算量的にあまり良くない
  if (nums.length === 0) return -1;

  const mid = Math.floor(nums.length / 2);

  if (nums[mid]! === target) {
    return mid;
  }

  if (nums[mid]! < target) {
    const result = binarySearch(nums.slice(mid + 1), target);
    if (result === -1) return -1;
    return result + mid + 1;
  }

  return binarySearch(nums.slice(0, mid), target);
}

// 別解
// 時間計算量: O(log n)
// 空間計算量: O(1)
function binarySearch_v2(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid]! === target) {
      return mid;
    } else if (nums[mid]! < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function main() {
  const numsCount: number = parseInt(readLine().trim(), 10);

  let nums: number[] = [];

  for (let i: number = 0; i < numsCount; i++) {
    const numsItem: number = parseInt(readLine().trim(), 10);

    nums.push(numsItem);
  }

  const target: number = parseInt(readLine().trim(), 10);

  const result: number = binarySearch(nums, target);

  process.stdout.write(result + '\n');
}
