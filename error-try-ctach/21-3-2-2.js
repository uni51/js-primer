// SyntaxError
function fn() {
  try {
    // eval関数は渡した文字列をJavaScriptとして実行する関数
    // 正しくない構文をパースさせ、SyntaxErrorを実行時に発生させる
    eval("foo! bar!");
  } catch (error) {
    console.log(error instanceof ReferenceError); // => true
    console.log(error.name); // => "SyntaxError"
    console.log(error.message); // エラーメッセージ（Unexpected token!）が表示される
  }
}
fn();