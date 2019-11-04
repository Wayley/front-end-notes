```ejs
var code = '<h1>hey</h1>'
1. <% code %>： 运行 JavaScript 代码，不输出
2. <%= code %>：显示转义后的 HTML内容(即 字符串)
3. <%- code %>：显示原始 HTML 内容(即 识别dom元素)
4. <%# code %>：注释，不执行不输出
.
.
.
```
