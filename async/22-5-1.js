
// エラーファーストコールバック
// 「node 22-5-1.js」で実行
const fs = require('fs');

fs.readFile("./example.txt", (error, data) => {
  if (error) {
      // 読み込み中にエラーが発生しました
      console.log('error')
  } else {
      // データを読み込むことができました
      console.log('データを読み込むことができました')
  }
});
