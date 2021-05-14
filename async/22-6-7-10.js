// $ node 22-6-7-10.js で実行
// 22.6.7 コールバック関数でPromiseインスタンスを返す
function main() {
    return Promise.reject(new Error("エラー"));
}

// mainはRejectedなPromiseを返す
main().catch(error => {
    // asyncFunctionで発生したエラーのログを出力する
    console.log(error);
    // Promiseチェーンはそのままエラーを継続させる
    return Promise.reject(error);
}).then(() => {
    // 前のcatchでRejectedなPromiseが返されたため、この行は実行されません
    console.log("この行は実行されません");
}).catch(error => {
    console.log("メインの処理が失敗した");
});