// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-palindrome-filter-non-letters/problem?isFullScreen=true
'use strict';

import { only } from 'node:test';

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
 * Complete the 'isAlphabeticPalindrome' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code as parameter.
 */

function isAlphabeticPalindrome(code: string): boolean {
  const onlyLetters = code.match(/[a-zA-Z]/g) || [];
  const lowerLetters = onlyLetters.map((char) => char.toLowerCase());

  const len = lowerLetters.length;

  for (let i = 0; i < len / 2; i++) {
    if (lowerLetters[i] !== lowerLetters[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

function main() {
  const code: string = readLine();

  const result: boolean = isAlphabeticPalindrome(code);

  process.stdout.write((result ? 1 : 0) + '\n');
}

// 別解 時間、空間ともにO(1)
// function isAlphabeticPalindrome(code: string): boolean {
//     let left = 0
//     let right = code.length - 1

//     while (left < right) {
//         while (left < right && !/[a-zA-Z]/g.test(code[left])) {
//             left++
//         }
//         while (left < right && !/[a-zA-Z]/g.test(code[right])) {
//             right--
//         }
//         if (code[left].toLowerCase() !== code[right].toLowerCase()) return false

//         left++
//         right--
//     }
//     return true

// }
