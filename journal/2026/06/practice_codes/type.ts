// 引数の値が string 型または number 型かを判定する型ガード関数
function isStringOrNumber(value: unknown): value is string | number {
  // typeof を使って、文字列または数値であるかを確認する
  return typeof value === 'string' || typeof value === 'number';
}

// unknown 型の値を定義する
// unknown 型は、そのままではメソッドを呼び出せない
const something: unknown = 123;

// 型ガード関数で string 型または number 型であることを確認する
if (isStringOrNumber(something)) {
  // このブロック内では something が string | number 型に絞り込まれるため、
  // 両方の型で利用可能な toString() を安全に呼び出せる
  console.log(something.toString());
}
