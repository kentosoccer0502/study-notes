// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/find-smallest-missing-positive-integer/problem?isFullScreen=true
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
 * Complete the 'findSmallestMissingPositive' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY orderNumbers as parameter.
 */

function findSmallestMissingPositive(orderNumbers: number[]): number {
  orderNumbers.sort((a, b) => a - b);
  let missing = 1;
  for (const num of orderNumbers) {
    if (num < missing) continue;
    if (num === missing) missing++;
    if (num > missing) return missing;
  }
  return missing;
}

function main() {
  const orderNumbersCount: number = parseInt(readLine().trim(), 10);

  let orderNumbers: number[] = [];

  for (let i: number = 0; i < orderNumbersCount; i++) {
    const orderNumbersItem: number = parseInt(readLine().trim(), 10);

    orderNumbers.push(orderNumbersItem);
  }

  const result: number = findSmallestMissingPositive(orderNumbers);

  process.stdout.write(result + '\n');
}

// 別解
// function findSmallestMissingPositive(orderNumbers: number[]): number {
//     const n = orderNumbers.length
//     let i = 0

//     while (i < n) {
//         let value = orderNumbers[i]
//         let correctIndex = value - 1

//         if (value >= 1 && value <= n && orderNumbers[correctIndex] !== value) {
//             [orderNumbers[i], orderNumbers[correctIndex]] =
//                 [orderNumbers[correctIndex], orderNumbers[i]];
//         } else {
//             i++;
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         if (orderNumbers[i] !== i + 1) {
//             return i + 1;
//         }
//     }

//     return n + 1;
// }
