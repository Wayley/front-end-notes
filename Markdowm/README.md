<!--
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: Fih-ACKN
 * @Date: 2019-09-04 15:11:42
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-09-04 16:46:01
 * @Description:
 -->

This is the notes collection for [Markdowm]()

# How to use it

Copy the repo into your disk first

```bash
$ git clone git@github.com:Wayley/front-end-notes.git
```

Then get into the [Markdowm folder](https://github.com/Wayley/front-end-notes/tree/master/Markdowm)

```bash
$ cd Markdowm/
```
# Table of Contents
1. [标题](#title)
2. [字体](#font)
3. [图片](#img)
4. [超链接](#hyperlink)
5. [列表](#list)
6. [分割线](#separator)
7. [引用](#reference)
8. [表格](#table)
9. [代码](#code)
10. [流程图](#flow)


## 标题
<a name="title">

```md
# 一级标题
## 二级标题
.
.
.
###### 六级标题
```

## 字体
<a name="font">

```md
*倾斜字体*
**加粗字体**
***斜体加粗***
~~删除线~~
```

## 图片
<a name="img">

```md
![图片alt](https://avatars0.githubusercontent.com/u/23481263?s=460&v=4 图片title)
```
![我的github头像](https://avatars0.githubusercontent.com/u/23481263?s=460&v=4 'wz的图片')

## 超链接
<a name="hyperlink">

```md
[超链接名](超链接地址)
```
> e.g
- [Github Site](https://github.com)
- [锚点](#anchor)

<a name="anchor">

## 列表
<a name="list">

- 有序列表

> 数字加点

```md
1. 列表1
2. 列表2
3. 列表3
```

- 无序列表

> '- + * '中任意一种

```md
- 列表名称
+ 列表名称
* 列表名称
```
- 列表嵌套

1. 列表1
   1. 列表1-1
      - fdd
      - fg3
         1. 壹
         2. 貳
         3. 叁
      - 4rw
   2. 列表1-2
   3. 列表1-3
2. 列表2
   1. 列表2-1
   2. 列表2-2
   3. 列表2-3
3. 列表3


## 分割线

<a name="separator">
> 三个或三个以上的 - 或 *

```md
---
----
***
****
```


## 引用

<a name="reference">

> 一个 >
>> 两个 >>
>>> 三个 >>>
>>>> 多个>>>>

```md
>
>>
.
.
.
```

## 表格

<a name="table">

|表头(默认左对齐)|表头(左对齐)|表头(水平居中)|表头(右对其)|
|---|:---|:---:|---:|
|张xx|123|你好|再见|
|李xx|456|Hello|Bye|

## 代码

<a name="code">

> 单行代码

`console.log(1243)`

> 代码块

```bash
# some code
```

## 流程图

<a name="flow">

```flow
st=>start: 开始
op=>operation:  Your Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```