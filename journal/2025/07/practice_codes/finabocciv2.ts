function fibonacci(n: number): number {
  let fn1 = 0;
  let fn2 = 1;
  for (let i = 0; i < n; i++) {
    let prevFn1 = fn1;
    fn1 = fn2;
    fn2 = prevFn1 + fn1;
    console.log(prevFn1, fn1, fn2);
  }
  return fn1;
}

// f(2) -> f(1) + f(0)
