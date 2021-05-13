// TypeError
function fn() {
  try {
    // 関数ではないオブジェクトを関数として呼び出す
    const func = {};
    func();
  } catch (error) {
    console.log(error instanceof TypeError); // => true
    console.log(error.name); // => "TypeError"
    console.log(error.message); // エラーメッセージが表示される
  }
}
fn();
