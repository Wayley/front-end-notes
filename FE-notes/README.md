<!--
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-09-23 08:59:48
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-23 17:51:13
 * @Description:
 -->

This is a notes collection for front-end during my studying and working.

Now i will accumulate more and more

# About Me

For more information just get into [Github of Wayley](https://github.com/Wayley/front-end-notes)

Copy the repo into your disk first

```bash
$ git clone git@github.com:Wayley/front-end-notes.git
```

# Table of Contents

1. [HTML/HTML5](#html)
2. [CSS/CSS3](#css)
3. [JavaScript](#js)
4. [NativeJavaScript](#nativeJS)
5. [Plugins](#plugin)
6. [FrameWork](#framework)
7. [ModuleBundler](#moduleBundler)
8. [ESlint/EditorConfig/Prettier](#lint)
9. [FileNameConvention](#fileNameConvention)

<a name="html">

## HTML or HTML5

- DOCTYPE

```html
<!DOCTYPE html>
```

- css 文件引入时一般放在<meta>标签后;js 文件一般放置<body>标签尾部;特殊情况另作处理;
- 标签、属性名以及属性值小写字母及下划线数字组成;属性值用双引号;
- 标签闭合;
- 尽量使用语义化标签(Semantic Tags);
- 自定义标签属性以'data-'为前缀进行添加;
- 尽量减少嵌套;
- html-css-js 结构表现行为分离,高内聚低耦合(Structure represents behavioral separation);尽量避免行内样式;

<a name="css">

## CSS or CSS3

- Compatibility(兼容低版本浏览器、移动端和其他设备)
- class 与 id 的使用
- 类名要语义化、简明化;
- css 属性建议书写顺序:
  1. 布局定位属性(display, position, float, visibility, overflow...)
  2. 自身属性(width, height, margin, padding,border, background...)
  3. 文本属性(font, color, text-align, text-decoration...)
- 重复的样式代码抽离出来写到公共类中
- 利用 html 自身属性以及样式的继承减少代码
- 图片格式以及使用精灵图(The CSS Sprite)

<a name="js">

## JavaScript

- 变量

  - 变量名以字母、数字、下划线和$符号组成,以字母、下划线和$符开头;
  - 小驼峰命名法
  - 前缀为形容词

  ```js
  let minLength = 1;
  let maxLength = 30;
  ```

- 常量

  - 全部使用大写字母
  - 使用\_下划线来分割

  ```js
  const MIN_UNM = 0;
  ```

- 函数

  - 小驼峰命名法
  - 前缀为动词
    |词缀|含义|
    |:---:|:---:|
    |is|判断是否是|
    |get|获取|
    |set|设置|
    |has|判断是否含有|
    |can|判断能够|
    |format|格式化|

- 构造函数
  - 大驼峰命名法
  ```js
  function Student(id, name, age, classId) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.classId = classId;
  }
  ```
- 类

  - 大驼峰命名法
  - 类成员
    1. 公共属性和方法
    2. 私有属性和方法,前缀为'\_'

  ```js
  class Student {
    _classId: string;
    constructor(name, age) {
      this.name = name;
      this.name = name;
    }

    getName(name) {
      return this.name;
    }
    setClassId(id) {
      this._classId = id;
    }
  }
  ```

<a name="nativeJS">

## NativeJavaScript

<a name="plugin">

## Plugins

<a name="framework">

## FrameWork

<a name="moduleBundler">

## ModuleBundler

<a name="lint">

## ESlint/EditorConfig/Prettier

- prettier
  - 单行注释
  - 多行注释

<a name="fileNameConvention">

## FileNameConvention

- 文件夹以文件以英文命名
- html
  - index.html(entry file)
  - Components/xx.html(component)
  - Basic
    - login.html
    - register.html
    - logout.html
    - error.html
    - 404.html
- css
  - init.css/base.css(初始化 css,消除浏览器默认样式)
  - common.css(通用 css)
  - index.css(首页 css)
- js
  - utils.js/tools.js(工具类 js)
  - common.js(通用类 js)
  - index.js
