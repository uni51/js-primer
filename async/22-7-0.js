// $ node 22-7-0.js で実行
// 22.7 Async Function

async function doAsync() {
    return "値";
}
// doAsync関数はPromiseを返す
doAsync().then(value => {
    console.log(value); // => "値"
});

//------------------

// 通常の関数でPromiseインスタンスを返している
// function doAsync() {
//     return Promise.resolve("値");
// }
// doAsync().then(value => {
//     console.log(value); // => "値"
// });