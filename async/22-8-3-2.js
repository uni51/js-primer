// $ node 22-8-3-2.js で実行
// 22.8.3 await式は Async Function の中でのみ利用可能
// Async Functionではないスコープで`await`式を利用しているためSyntax Errorとなる

async function fetchResources(resources) {
  const results = [];
  // Syntax Errorとなる例
  resources.forEach(function(resources) {
      const resource = resources[i];
      // Async Functionではないスコープで`await`式を利用しているためSyntax Errorとなる
      const response = await dummyFetch(resource);
      results.push(response.body);
  });
  return results;
}