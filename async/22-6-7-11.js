// $ node 22-6-7-11.js で実行
// 22.6.7 Promiseチェーンの最後に処理を書く

// `promise`にはResolvedまたはRejectedなPromiseインスタンスがランダムで入る
const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
promise.then(() => {
    console.log("Promise#then");
}).catch((error) => {
    console.log("Promise#catch");
}).finally(() => {
    // 成功、失敗どちらの場合でも呼び出される
    console.log("Promise#finally");
});