// 「node 22-6-2-2.js」で実行
// Promiseインスタンスに対して、thenメソッドで成功時のコールバック関数だけを返す
function delay(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeoutMs);
    });
}
// `then`メソッドで成功時のコールバック関数だけを登録
delay(10).then(() => {
    console.log("10ミリ秒後に呼ばれる");
});
