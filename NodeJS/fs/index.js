// 文件系统操作都具有 同步synchronous 和 异步asynchronous 的形式
const fs = require('fs');
const path = require('path');
/*
 * 异常捕获
 */
// 同步
try {
  let data = fs.readFileSync('./README.md');
  console.log('同步读取文件成功', data);
} catch (err) {
  // 错误处理
}

// 异步
let result = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
console.log(result, '---');

fs.readFile(path.join(__dirname, './README.md'), 'utf8', (err, data) => {
  // console.log(222, err, data);

  if (err) {
    // 错误处理
  } else {
    console.log('异步读取文件成功', data);
  }
});

console.log(process.cwd());