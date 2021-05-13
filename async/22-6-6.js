// 22.6.5 Promise.reject
const rejectedPromise = Promise.reject(new Error("エラー"));

//----------------------------------------

const rejectedPromise = new Promise((resolve, reject) => {
    reject(new Error("エラー"));
});

//----------------------------------------

Promise.reject(new Error("エラー")).catch(() => {
    console.log("2. コールバック関数が実行されました");
});
console.log("1. 同期的な処理が実行されました");
