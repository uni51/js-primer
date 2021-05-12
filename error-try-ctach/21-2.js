function fn() {
  try {
    // 例外を投げる
    throw new Error("例外が投げられました");
  } catch (error) {
    // catch節のスコープでerrorにアクセスできる
    console.log(error.message); // "例外が投げられました"    
  }
}
fn();