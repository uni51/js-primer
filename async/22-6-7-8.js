// $ node 22-6-7-8.js で実行
// 22.6.7 Promiseチェーン
Promise.reject(new Error("失敗")).catch(error => {
    // 一度catchすれば、次に呼ばれるのは成功時のコールバック
    return 1;
}).then(value => {
    console.log(value); // => 1
    return value * 2;
}).then(value => {
    console.log(value); // => 2
});