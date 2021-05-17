// $ node 22-7-3-4.js で実行
// 22.7.3 await式

async function asyncMain() {
  // await式のエラーはtry...catchできる
  try {
      // `await`式で評価した右辺のPromiseがRejectedとなったため、例外がthrowされる
      const value = await Promise.reject(new Error("エラーメッセージ"));
      // await式で例外が発生したため、この行は実行されません
  } catch (error) {
      console.log(error.message); // => "エラーメッセージ"
  }
}
// asyncMainはResolvedなPromiseを返す
asyncMain().catch(error => {
  // すでにtry...catchされているため、この行は実行されません
  console.log('hogehoge'); 
});
