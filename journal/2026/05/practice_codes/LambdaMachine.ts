class LambdaMachine {
  handlers: Record<string, (x: number, y: number) => number> = {};

  insert(key: string, fn: (x: number, y: number) => number): void {
    this.handlers[key] = fn;
  }

  retrieve(key: string): (x: number, y: number) => number {
    return this.handlers[key];
  }
}

const pythagora = (x: number, y: number): number => Math.floor((x ** 2 + y ** 2) ** (1 / 2));
const addition = (x: number, y: number): number => x + y;
const multiplication = (x: number, y: number): number => x * y;

const lambdaMachine = new LambdaMachine();

lambdaMachine.insert('pythagora', pythagora);
console.log(lambdaMachine.retrieve('pythagora')(3, 4));

lambdaMachine.insert('addition', addition);
console.log(lambdaMachine.retrieve('addition')(2, 5));

lambdaMachine.insert('multiplication', multiplication);
console.log(lambdaMachine.retrieve('multiplication')(4, 10));
