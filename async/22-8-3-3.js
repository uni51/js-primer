// $ node 22-8-3-3.js で実行
// 22.8.3 await式は Async Function の中でのみ利用可能

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
// リソースを順番に取得する
async function fetchResources(resources) {
  const results = [];
  // コールバック関数をAsync Functionに変更
  resources.forEach(async function(resource) {
      // await式を利用できるようになった
      const response = await dummyFetch(resource);
      results.push(response.body);
  });
  return results;
}
const resources = ["/resource/A", "/resource/B"];
// リソースを取得して出力する
fetchResources(resources).then((results) => {
  // しかし、resultsは空になってしまう
  console.log(results); // => []
});