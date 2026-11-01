// https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/maximum-non-overlapping-intervals/problem?isFullScreen=true
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
 * Complete the 'maximizeNonOverlappingMeetings' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY meetings as parameter.
 */

function maximizeNonOverlappingMeetings(meetings: number[][]): number {
  // Write your code here
  let count = 0;
  let lastEnd = -1;
  // 終了時刻の昇順に並び替え
  meetings.sort((a, b) => a[1]! - b[1]!);

  for (const meeting of meetings) {
    if (meeting[0]! >= lastEnd) {
      count += 1;
      lastEnd = meeting[1]!;
    }
  }
  return count;
}

function main() {
  const meetingsRows: number = parseInt(readLine().trim(), 10);

  const meetingsColumns: number = parseInt(readLine().trim(), 10);

  let meetings: number[][] = Array(meetingsRows);

  for (let i: number = 0; i < meetingsRows; i++) {
    meetings[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((meetingsTemp) => parseInt(meetingsTemp, 10));
  }

  const result: number = maximizeNonOverlappingMeetings(meetings);

  process.stdout.write(result + '\n');
}
