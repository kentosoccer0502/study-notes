// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/count-elements-greater-than-previous-average/problem?isFullScreen=true
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
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes: number[]): number {
  if (responseTimes.length <= 1) return 0;
  let count = 0;
  for (let i = 1; i < responseTimes.length; i++) {
    if (responseTimes[i] > calcPrevAverage(responseTimes.slice(0, i))) count++;
  }
  return count;
}

function calcPrevAverage(nums: number[]): number {
  const sum = nums.reduce((acc, val) => acc + val, 0);
  return sum / nums.length;
}

function main() {
  const responseTimesCount: number = parseInt(readLine().trim(), 10);

  let responseTimes: number[] = [];

  for (let i: number = 0; i < responseTimesCount; i++) {
    const responseTimesItem: number = parseInt(readLine().trim(), 10);

    responseTimes.push(responseTimesItem);
  }

  const result: number = countResponseTimeRegressions(responseTimes);

  process.stdout.write(result + '\n');
}

// 別解
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString: string = '';
// let inputLines: string[] = [];
// let currentLine: number = 0;

// process.stdin.on('data', function(inputStdin: string): void {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function(): void {
//     inputLines = inputString.split('\n');
//     inputString = '';

//     main();
// });

// function readLine(): string {
//     return inputLines[currentLine++];
// }

// /*
//  * Complete the 'countResponseTimeRegressions' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY responseTimes as parameter.
//  */

// function countResponseTimeRegressions(responseTimes: number[]): number {
//     if (responseTimes.length <= 1) return 0
//     let count = 0
//     let previousSum = responseTimes[0]

//     for (let i = 1; i < responseTimes.length; i++) {
//         const previousSumAverage = previousSum / i
//         if (responseTimes[i] > previousSumAverage) count++

//         previousSum += responseTimes[i]
//     }
//     return count
// }

// function main() {
//     const responseTimesCount: number = parseInt(readLine().trim(), 10);

//     let responseTimes: number[] = [];

//     for (let i: number = 0; i < responseTimesCount; i++) {
//         const responseTimesItem: number = parseInt(readLine().trim(), 10);

//         responseTimes.push(responseTimesItem);
//     }

//     const result: number = countResponseTimeRegressions(responseTimes);

//     process.stdout.write(result + '\n');
// }
