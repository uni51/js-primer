// 渡された数値が0以上ではない場合に例外を投げる関数
function assertPositvieNumber(num) {
  if (num < 0) {
    throw new Error(`${num} is not positive.`);
  }
}

try {
  // 0未満の値を渡しているので、関数が例外を投げる
  assertPositvieNumber(-1);
} catch (error) {
  console.log(error instanceof Error); // => true
  console.log(error.message); // => "-1 is not positive."
}