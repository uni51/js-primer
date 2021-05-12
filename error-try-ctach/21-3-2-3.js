// TypeError
function fn() {
  try {
    // 関数ではないオブジェクトを関数として呼び出す
    const func = {};
    func();
  } catch (error) {
    console.log(error instanceof ReferenceError); // => true
    console.log(error.name); // => "SyntaxError"
    console.log(error.message); // エラーメッセージが表示される
  }
}
fn();