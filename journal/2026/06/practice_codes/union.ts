type Option<T> =
  | {
      tag: 'some';
      value: T;
    }
  | {
      tag: 'none';
    };

function showNumberIfExists(obj: Option<number>): void {
  if (obj.tag === 'some') {
    console.log(obj.value);
  }
}

// isSome 関数は、Option<T> 型のオブジェクトが 'some' タグを持ち、値を持っているかを判定する型ガード関数です。
function isSome<T>(obj: Option<T>): obj is { tag: 'some'; value: T } {
  return obj.tag === 'some';
}

// isSomeV2 関数は、Option<T> 型のオブジェクトが 'some' タグを持ち、値を持っているかを判定する型ガード関数です。
function isSomeV2<T>(obj: Option<T>): obj is Extract<Option<T>, { tag: 'some' }> {
  return obj.tag === 'some';
}

function showNumberIfExistsV2(obj: Option<number>): void {
  if (isSome(obj)) {
    console.log(obj.value);
  }
}

const four: Option<number> = {
  tag: 'some',
  value: 4,
};

const nothing: Option<number> = {
  tag: 'none',
};

showNumberIfExists(four); // 4 と表示される
showNumberIfExists(nothing); // 何も表示されない
