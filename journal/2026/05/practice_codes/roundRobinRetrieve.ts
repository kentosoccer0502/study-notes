type LambdaFunction = (x: number, y: number) => number;

class LambdaMachine {
  handlers: Record<string, LambdaFunction> = {};
  lambdaStorage: LambdaFunction[] = [];
  currentIndex = 0;

  insert(key: string, fn: LambdaFunction): void {
    this.handlers[key] = fn;
    this.lambdaStorage.push(fn);
  }

  retrieve(key: string): LambdaFunction {
    return this.handlers[key];
  }

  // lambdaStorage配列内のラムダ関数を順番に返すメソッド
  roundRobinRetrieve(): LambdaFunction | undefined {
    if (this.lambdaStorage.length === 0) {
      console.error('No functions available in lambdaStorage.');
      return undefined;
    }
    const fn = this.lambdaStorage[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.lambdaStorage.length;
    return fn;
  }
}

const pythagora: LambdaFunction = (x: number, y: number) =>
  Math.floor((x ** 2 + y ** 2) ** (1 / 2));
const addition: LambdaFunction = (x: number, y: number) => x + y;
const multiplication: LambdaFunction = (x: number, y: number) => x * y;

const lambdaMachine = new LambdaMachine();
lambdaMachine.insert('pythagora', pythagora);
lambdaMachine.insert('addition', addition);
lambdaMachine.insert('multiplication', multiplication);

console.log(lambdaMachine.roundRobinRetrieve()?.(6, 8));
console.log(lambdaMachine.roundRobinRetrieve()?.(6, 8));
console.log(lambdaMachine.roundRobinRetrieve()?.(6, 8));
console.log(lambdaMachine.roundRobinRetrieve()?.(6, 8));
