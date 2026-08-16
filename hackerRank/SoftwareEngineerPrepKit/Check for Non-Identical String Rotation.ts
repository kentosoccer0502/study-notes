// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-non-identical-string-rotation/problem?isFullScreen=true
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
 * Complete the 'isNonTrivialRotation' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function isNonTrivialRotation(s1: string, s2: string): boolean {
  const doubleS1 = s1 + s1;
  if (s1 !== s2 && doubleS1.includes(s2)) return true;
  return false;
}

function main() {
  const s1: string = readLine();

  const s2: string = readLine();

  const result: boolean = isNonTrivialRotation(s1, s2);

  process.stdout.write((result ? 1 : 0) + '\n');
}
