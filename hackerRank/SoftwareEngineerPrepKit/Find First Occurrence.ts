// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/first-occurrence-in-event-code-log/problem?isFullScreen=true
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
 * Complete the 'findFirstOccurrence' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY nums
 *  2. INTEGER target
 */

function findFirstOccurrence(nums: number[], target: number): number {
  // Write your code here
  // 時間計算量は O(log n)、空間計算量は O(1)。
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid]! === target) {
      result = mid;
      right = mid - 1;
    } else if (target < nums[mid]!) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

function main() {
  const numsCount: number = parseInt(readLine().trim(), 10);

  let nums: number[] = [];

  for (let i: number = 0; i < numsCount; i++) {
    const numsItem: number = parseInt(readLine().trim(), 10);

    nums.push(numsItem);
  }

  const target: number = parseInt(readLine().trim(), 10);

  const result: number = findFirstOccurrence(nums, target);

  process.stdout.write(result + '\n');
}
