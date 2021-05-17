// $ node 22-7-3-5.js で実行
// 22.7.3 Promiseチェーンをawait式で表現する（await式の例）

function dummyFetch(path) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (path.startsWith("/resource")) {
              resolve({ body: `Response body of ${path}` });
          } else {
              reject(new Error("NOT FOUND"));
          }
      }, 1000 * Math.random());
  });
}
// リソースAとリソースBを順番に取得する
async function fetchAB() {
  const results = [];
  const responseA = await dummyFetch("/resource/A");
  results.push(responseA.body);
  const responseB = await dummyFetch("/resource/B");
  results.push(responseB.body);
  return results;
}
// リソースを取得して出力する
fetchAB().then((results) => {
  console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
});
