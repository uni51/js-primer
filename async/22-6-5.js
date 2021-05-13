// 22.6.5 Promise.resolve
const fulFilledPromise = Promise.resolve();

//----------------------------------------

// const fulFilledPromise = Promise.resolve(); と同じ意味
const fulFilledPromise = new Promise((resolve) => {
    resolve();
});

//----------------------------------------

const fulFilledPromise = Promise.resolve(42);
fulFilledPromise.then(value => {
    console.log(value); // => 42
});

//----------------------------------------

const promise = Promise.resolve();
promise.then(() => {
    console.log("2. コールバック関数が実行されました");
});
console.log("1. 同期的な処理が実行されました");

//----------------------------------------

const promise = new Promise((resolve) => {
    console.log("1. resolveします");
    resolve();
});
promise.then(() => {
    console.log("3. コールバック関数が実行されました");
});
console.log("2. 同期的な処理が実行されました")
