// 文件系统操作都具有 同步synchronous 和 异步asynchronous 的形式
const fs = require('fs');

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
fs.readFile('./README.md', 'utf8', (err, data) => {
  if (err) {
    // 错误处理
  } else {
    console.log('异步读取文件成功', data);
  }
});
