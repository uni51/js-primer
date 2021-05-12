// ReferenceError
function fn() {
  try {
    // 存在しない変数を参照する
    console.log(x)
  } catch (error) {
    console.log(error instanceof ReferenceError); // => true
    console.log(error.name); // => "ReferenceError"
    console.log(error.message); // エラーメッセージ（x is not defined）が表示される
  }
}
fn();