// 22.6.7 Promiseチェーン
Promise.reject(new Error("エラー")).catch(error => {
    console.log(error); // Error: エラー
}).then(() => {
    console.log("thenのコールバック関数が呼び出される");
});
