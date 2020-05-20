# 优化首屏加载

## Table of Contents

1. [Gzip](#gzip)
2. [路由懒加载]](#lazy_router)
3. [CDN]](#cdn)

## Contents

### 使用 Gzip

<a name="gzip" id="gzip">

> with `[compression-webpack-plugin]`(https://webpack.js.org/plugins/compression-webpack-plugin/), we can do some things

#### 安装插件

> Install `compression-webpack-plugin`

```bash
$ npm install compression-webpack-plugin --save-dev
```

#### 添加配置

> Add `webpack` config

- Pure webpack.config

```js
// webpack.config.js
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [new CompressionPlugin(Options)],
};
```

- Integrated in `CLI`

> such as in vue-cli

```js
// vue.config.js

const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  // ...
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|json|txt|html|ico|svg|png|jpg|jpeg|woff|ttf)(\?.*)?$/i,
            threshold: 2048,
            minRatio: 0.8,
          }),
        ],
      };
    }
  },
};
```

### 路由懒加载

<a name="lazy_router" id="lazy_router">

> 配置 chunkFilename 属性

### CDN

<a name="cdn" id="cdn">

- 引入依赖的 CDN

```html
<!-- 以vue为例 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
```

- 修改配置文件

```js
// vue.config.js

module.exports = {
  outputDir: 'dist',
  // .
  // .
  // .
  configureWebpack: (config) => {
    return {
      // .
      // .
      // .
      externals: {
        vue: 'Vue', //
      },
    };
  },
};
```
