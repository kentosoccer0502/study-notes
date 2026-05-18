function validateDecorator(fn: typeof sumOfArray): typeof sumOfArray {
  return (arr: number[]): string => {
    const errorCount = arr.filter((item) => item < 10).length;
    if (errorCount > 0) {
      return `${errorCount} error found`;
    }
    return fn(arr);
  };
}

function sumOfArray(arr: number[]): string {
  const sum = arr.reduce((currentSum, item) => currentSum + item, 0);
  return `Sum of array is ${sum}`;
}

const sum = validateDecorator(sumOfArray);
console.log(sum([10, 20, 30, 40])); // --> Sum of array is 100
console.log(sum([9, 10, 20, 30])); // --> 1 error found
console.log(sum([3, 5, 40, 50])); // --> 2 error found
