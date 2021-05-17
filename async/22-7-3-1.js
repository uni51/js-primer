// 22.7.3 await式

async function asyncMain() {
  // PromiseがFulfilledまたはRejectedとなるまで待つ
  await Promiseインスタンス;
  // Promiseインスタンスの状態が変わったら処理を再開する
}

