type LamdaFunction = (x: number, y: number) => number;

class LambdaMachine {
  handlers: Record<string, LamdaFunction> = {};

  insert(key: string, fn: LamdaFunction): void {
    this.handlers[key] = fn;
  }

  retrieve(key: string): LamdaFunction {
    return this.handlers[key];
  }
}

const pythagora: LamdaFunction = (x: number, y: number) => Math.floor((x ** 2 + y ** 2) ** (1 / 2));
const addition: LamdaFunction = (x: number, y: number) => x + y;
const multiplication: LamdaFunction = (x: number, y: number) => x * y;

const lambdaMachine = new LambdaMachine();

lambdaMachine.insert('pythagora', pythagora);
console.log(lambdaMachine.retrieve('pythagora')(3, 4));

lambdaMachine.insert('addition', addition);
console.log(lambdaMachine.retrieve('addition')(2, 5));

lambdaMachine.insert('multiplication', multiplication);
console.log(lambdaMachine.retrieve('multiplication')(4, 10));
