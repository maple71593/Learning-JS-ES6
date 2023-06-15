// 引入fs模塊 傳統的回調方式
const fs = require('fs');
// fs.readFile('./123.txt',(err,data1)=>{
//     fs.readFile('./123.txt',(err,data2)=>{
//         fs.readFile('./123.txt',(err,data3)=>{
//             let result = data1 + data2 + data3;
//             console.log(result);
//         });
//     });
// });

// 使用Promise 實現
// 已成功使用Promise 引出 123.txt
const p = new Promise((resolve, reject) => {
    fs.readFile('./123.txt',(err,data)=>{
        resolve(data);
    });
});
//使用then方法 回傳Promise 引出第二個文件(此時的value為123.txt) 
p.then((value) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./456.txt',(err,data)=>{
            // 此時的data是456.txt
            // 將[value,data]變為數組
            resolve([value,data]);
        });
    });
    // 再次使用then方法 此時的value 為[value,data]的數組
}).then((value) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./789.txt',(err,data)=>{
            // 此時的data為789.txt
            // 使數組的push 將(789.txt)data 推入數組
            value.push(data);
            resolve(value);
        });
    });
    // 再次使用then方法 此時的value 為[value,data]的數組加上 剛剛推入的789.txt
    // 已成功引出 3個文件檔案將 使用toString將value轉回字符串
}).then((value)=>{
    console.log(value.toString());
});

// 小知識
// toString() 是 JavaScript 中的內建函數，用於將數據轉換為字符串（字串）表示。
// 當應用於數據類型（如數字、布林值等）時，toString() 方法將數據轉換為對應的字符串表示。