
## 监控模块变化的工具(supervisor和nodemon)
```sh
npm install supervisor -g
```
nodemon will be installed globally to your system path.
```sh
npm install -g nodemon
```
You can also install nodemon as a development dependency:
```sh
npm install --save-dev nodemon
```

## Express 用于处理请求体的中间
#### 常见的bodyparser、multer、formidable。还有multiparty、busboy。
- 常见Content-Type类型有四种
    - application/x-www-form-urlencoded 常见的form提交
    - multipart/form-data 文件提交
    - application/json 提交json格式的数据
    - text/xml 提交xml格式的数据
- Bodyparser中间件
这个中间件用于处理第1,3种content-type的body非常的方便，但不能用于处理multipart类型的body
    - bodyParser.json() 将body解析为json
    - bodyParser.text() 将body解析为文本
    - bodyParser.raw() 将body解析为二进制
    - .urlencoded() 将编码为URLEncoder的body解析出来
- Multer 中间件
    - 只处理类型是multipart/form-data的body。
- Formidable 中间件



