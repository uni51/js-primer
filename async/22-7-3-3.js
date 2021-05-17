// $ node 22-7-3-3.js で実行
// 22.7.3 await式

async function asyncMain() {
  const value = await Promise.resolve(42);
  console.log(value); // => 42
}
asyncMain(); // Promiseインスタンスを返す

//------------------------------

/* 上記の記述は以下の記述と同じ意味 */

// function asyncMain() {
//   return Promise.resolve(42).then(value => {
//       console.log(value); // => 42
//   });
// }
// asyncMain(); // Promiseインスタンスを返す
