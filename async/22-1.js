// 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout) {
  const startTime = Date.now();
  // `timeout`ミリ秒経過するまで無限ループをする
  while (true) {
      const diffTime = Date.now() - startTime;
      if (diffTime >= timeout) {
          return; // 指定時間経過したら関数の実行を終了
      }
  }
}

console.log("処理を開始");
blockTime(3000); // 他の処理を3000ミリ秒（3秒間）ブロックする
console.log("この行が呼ばれるまで処理が3秒間ブロックされる");
