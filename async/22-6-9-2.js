// $ node 22-6-9-2.js で実行
// 22.6.9 Promise.allで複数のPromiseをまとめる

// Resource AとBどちらを先に取得しても問題ない場合は、`Promise.all`メソッドを使って複数のPromiseを1つのPromiseとしてまとめられます。
// また、Resource AとBを同時に取得すればより早い時間で処理が完了します。

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
// Resource AとBを同時に取得開始
const fetchedPromise = Promise.all([
    dummyFetch("/resource/A"),
    dummyFetch("/resource/B")
]);

// fetchedPromiseの結果をDestructuringでresponseA, responseBに代入している
fetchedPromise.then(([responseA, responseB]) => {
    console.log(responseA.body); // => "Response body of /resource/A"
    console.log(responseB.body); // => "Response body of /resource/B"
});