# This is the notes collection for CSS

## Table of COntents

1. [KISSY CSS Reset](#css_reset)
2. [清除浮动](#clearfix)
3. [css 一(x)行显示(文本溢出添加...)](#text_overflow)
4. [css 一些特效实现](effects/README.md)
5. [css 的兼容写法](#compatibility)
6. [less 语法](#less_grammar)
7. [](#)
8. [](#)
9. [](#)
10. [](#)
11. [](#)

## Contents

<a name="css_reset">

### KISSY CSS Reset

```css
/*
  KISSY CSS Reset
  理念：1. reset 的目的不是清除浏览器的默认样式，这仅是部分工作。清除和重置是紧密不可分的。
        2. reset 的目的不是让默认样式在所有浏览器下一致，而是减少默认样式有可能带来的问题。
        3. reset 期望提供一套普适通用的基础样式。但没有银弹，推荐根据具体需求，裁剪和修改后再使用。
  特色：1. 适应中文；2. 基于最新主流浏览器。
  维护：玉伯<lifesinger@gmail.com>, 正淳<ragecarrier@gmail.com>
*/

/** 清除内外边距 **/
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
    dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
    pre, /* text formatting elements 文本格式元素 */
    form, fieldset, legend, button, input, textarea, /* form elements 表单元素 */
    th, td /* table elements 表格元素 */ {
  margin: 0;
  padding: 0;
}

/** 设置默认字体 **/
body,button, input, select, textarea /* for ie */ {
  font: 12px/1.5 tahoma, arial, \5b8b\4f53, sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
} /* 将斜体扶正 */
code,
kbd,
pre,
samp {
  font-family: courier new, courier, monospace;
} /* 统一等宽字体 */
small {
  font-size: 12px;
} /* 小于 12px 的中文很难阅读，让 small 正常化 */

/** 重置列表元素 **/
ul,
ol {
  list-style: none;
}

/** 重置文本格式元素 **/
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

sup {
  vertical-align: text-top;
} /* 重置，减少对行高的影响 */
sub {
  vertical-align: text-bottom;
}

/** 重置表单元素 **/
legend {
  color: #000;
} /* for ie6 */
fieldset,
img {
  border: 0;
} /* img 搭车：让链接里的 img 无边框 */
button,
input,
select,
textarea {
  font-size: 100%;
} /* 使得表单元素在 ie 下能继承字体大小 */
/* 注：optgroup 无法扶正 */

/** 重置表格元素 **/
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

<a name="clearfix">

### 清除浮动

```css
.clearfix:after {
  content: ”.”;
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
*html .clearfix {
  height: 1%;
}
* + html .clearfix {
  height: 1%;
}
.clearfix {
  display: inline-block;
}
.clearfix {
  display: block;
}
```

```css
.clear{clear:both;height:0px;overflow:hidden;}>
```

```css
.clear {
  clear: both;
  height: 0;
  overflow: hidden;
}
```

```css
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *+height: 1%;
}
```

```css
.demo:after,
.demo2:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.demo,
.demo2 {
  *+height: 1%;
}
```

```css
.clearfix {
  overflow: auto;
  _height: 1%;
}
```

```css
.clearfix {
  overflow: hidden;
  _zoom: 1;
}
```

```css
.clearfix:after {
  content: ".";
  /*内容为“.”就是一个英文的句号而已。也可以不写。*/
  display: block;
  /*加入的这个元素转换为块级元素。*/
  clear: both;
  /*清除左右两边浮动。*/
  visibility: hidden;
  /*可见度设为隐藏。注意它和display:none;是有区别的。visibility:hidden;仍然占据空间，只是看不到而已；*/
  line-height: 0;
  /*行高为0；*/
  height: 0;
  /*高度为0；*/
  font-size: 0;
  /*字体大小为0；*/
}
```

<a name="text_overflow">

### css 一(x)行显示(文本溢出添加...)

```less
// 文本溢出添加省略号
@mixin text-ellipsis($width: 100%) {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-text-overflow: ellipsis;
  width: $width;
}
// 文本溢出添加省略号(多行)
@mixin text-ellipsis-x($line: 1) {
  display: -webkit-box;
  -webkit-line-clamp: $line;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}
```

<a name="compatibility">

### css 的兼容写法

- opacity

```css
.app {
  /* IE */
  filter: alpha(opacity=50);
  /* 老版本的Mozilla */
  -moz-opacity: 0.5;
  /* 老版本的Safari */
  -khtml-opacity: 0.5;
  /* 其他支持opacity的浏览器 */
  opacity: 0.5;
}
```

> opacity 的 JS 兼容处理

```js
// opacity的JS兼容处理
object.filter = "alpha(opacity=" + opacity + ")"; /* IE */
object.MozOpacity = opacity / 100; /* 老版Mozilla */
object.KhtmlOpacity = opacity / 100; /* 老版Safari */
object.opacity = opacity / 100; /* 支持opacity的浏览器*/
```

<a name="less_grammar">

### less 语法

```less
@import "base.css"; //引入其他css
@import "base.less"; //引入less  会被编译
@import (reference) "public.less"; //引入less  则不会被编译
//  reference:不编译
//  inline：在输出中包含源文件但不加工它
//  less：将文件作为Less文件对象，无论是什么文件扩展名
//  css：将文件作为CSS文件对象，无论是什么文件扩展名
//  once：只包含文件一次（默认行为）
//  multiple：包含文件多次

@mainColor: #fff;
@hover-color: darken(@mainColor, 10%); //使用darken()方法
a {
  color: @mainColor;
  &:hover {
    //伪类的使用
    @mainColor: #00f00e; //变量有作用域的
    color: @hover-color;
    background: @mainColor; //会取较近的变量
  }
}
@ImgPath: "../images";
.logo {
  color: @mainColor;
  background: url("@{ImgPath}/backendMS.png") no-repeat center; //使用@{}
  img {
    width: 300px;
  }
}
@selector: mybox, .mybox2; //可以写类也可以写标签
@content: ".";
.@{selector} {
  width: 100px;
  height: 100px;
  background: url("@{ImgPath}/backendMS.png");
  &:hover {
    content: @content;
  }
}
//*--------------混合----------------*/
.base {
  //使用.base{}会被编译
  width: 100px;
  height: 100px;
  h4 {
    font-size: 12px;
  }
}
.baseWH() {
  //使用.baseWH(){}带括号就不会被编译，只会被混合
  font-size: 14px;
}
.header ul {
  .base;
  .baseWH;
  list-style: none;
}
//*--------------继承----------------*/
.base2 {
  //使用.base(){}带括号不会被继承
  color: #008ef0;
  font-size: 16px;
  h3 {
    font-size: 14px;
  }
}
.footer dl {
  &:extend(.base2); //继承
  list-style: none;
}
.footer ul:extend(.base2) {
  //继承
  list-style: none;
}
//*--------------!important----------------*/
.cont {
  .base2;
  .base !important; //混合集里面属性都会继承!important
}
//*--------------Parametric Mixins----------------*/
//*-------------------arguments----------------*/
.transition(@property:all;@druation:1s;@funtion:linear;@delay:0s) {
  -webkit-transition: @property @druation @funtion @delay;
  -ms-transition: @property @druation @funtion @delay;
  -moz-transition: @property @druation @funtion @delay;
  -o-transition: @property @druation @funtion @delay;
  //-o-transition:@property @druation @funtion @delay;
  transition: @arguments; //可以直接使用arguments代替
}
.box1 {
  .transition;
}
.box2 {
  .transition(@druation:5s); //参数个数无要求
}
.box3 {
  .transition(@druation:5s; @property:height); //参数顺序无要求
}
//*-------------------使用返回值----------------*/
.average(@x,@y) {
  @resultValue: ((@x+ @y)/2);
}
.box {
  .average(03px, 40px); //可以带单位
  margin: @resultValue;
}
//*-------------------Mixin Guards判断----------------*/
// *---iscolor、isnumber、isstring、iskeyword、isurl、ispixel、ispercentage-------*/
.myMixin(@x)when(lightness(@x) >=50%) {
  //多条件 可以使用 and 或者逗号 ,
  @result: #000;
}
.myMixin(@x)when(lightness(@x) < 50%) {
  @result: #fff;
}
.boxO {
  .myMixin(#333);
  color: @result;
}
.boxT {
  .myMixin(#ddd);
  color: @result;
}
//------&------//
@my-option: true;
& when(@my-option = true) {
  .box5 {
    color: red;
  }
}
//*-------------------loops循环----------------*/
.generate-colums(5);
.generate-colums(@x,@i:1)when(@i <= @x) {
  .colum-@{i} {
    width: (@i * 100% / @x);
  }
  .generate-colums(@x, (@i+1));
}
//*-------------------Merge---在编写的时候，+代表以逗号分隔，+_代表多个之前以空格分隔。----------------*/
.mix1() {
  box-shadow+: inset 0 0 10px #555;
}
.mix2() {
  transform+_: scale(2);
}
//测试
.box6 {
  .mix1;
  box-shadow+: 0 0 8px #999;
}
.box7 {
  .mix2;
  transform+_: rotate(45deg);
}
//*-------------------&起到连接的作用----------------*/

//  &:hover &. &+&. &,
//
.user {
  .header & {
    // 会反转成  ===> .header .user{}
    color: gray;
  }
}
```
