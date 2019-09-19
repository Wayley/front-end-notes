<!--
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-09-18 14:16:47
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-19 17:40:24
 * @Description:
 -->

This is the notes collection for [JavaScriptModular]()

## How to use it

Copy the repo into your disk first

```bash
$ git clone git@github.com:Wayley/front-end-notes.git
```

Then get into the [JavaScriptModular folder](https://github.com/Wayley/front-end-notes/tree/master/JavaScriptModular)

```bash
$ cd JavaScriptModular/
```

## JavaScript 模块化特性

- 独立性 --- 能够独立命名和完成一个功能,不受外部环境影响
- 完整性 --- 完成一个特定功能
- 集合性 --- 一组语句的集合
- 依赖性 --- 可以依赖已经存在的模块
- 被依赖性 --- 可以被其他模块依赖

## 主流的规范

- [CMD](#cmd)
- [AMD](#amd)
- [CommonJS](#commonjs)
- [UMD](#umd)
- [ES6](#es6)

<a name="cmd">

### CMD(Common Module Definition) 通用模块定义

> CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。在 CMD 规范中，一个模块就是一个文件。

> 代码书写格式

```js
define(factory);
// define是全局函数,用来定义模块。
// factory可以是函数、对象或者字符串。
```

> 定义模块方式

<!-- factory为 对象(非函数) -->

```js
define({ name: 'wz' });
define(['foo', 'bar']);
```

<!-- factory为 字符串 -->

```js
define('hi i m {{ name }}, and i m {{ age }} years old');
```

<!-- factory为 函数 -->

```js
define(function(require, exports, module) {
  // require 用以加载该模块所需的依赖
  // exports 用以暴露模块
  // module 用以暴露模块
  // e.g
  /*
    var math = require('math');
    var add = require('math').add;

    exports.add = function(){// some code}

    module.exports = { add:add }

  */
});
```

> 实现方式

- 服务端实现: Node.js

```js
```

- 浏览器实现: Browserify

```shell
# 安装Browserify

$ npm install browserify -g
# or
$ npm install browserify --save-dev
```

```shell
# 打包文件并输出到指定目录文件
$ browserify js/src/app.js -o js/dist/bundle.js
```
