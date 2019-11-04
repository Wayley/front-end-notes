This is the notes collection for [Basic HTML Notes]()

## How to use it

Copy the repo into your disk first

```bash
$ git clone git@github.com:Wayley/front-end-notes.git
```

Then get into the [Basic HTML Notes folder](https://github.com/Wayley/front-end-notes/tree/master/Basic/_html)

```bash
$ cd Basic/_html
```

## Table of Contents

1. [空白节点](#white_node)
2. [浏览器禁用属性]](#browser_disable_property)
3. [](#)
4. [](#)
5. [](#)
6. [](#)

## Contents

<a name="white_node">

### 空白节点

```html
<div id="test">
  <p>第1</p>
  <p>第2</p>
  <p>第3</p>
</div>
```

```js
function removeWhitespace(element) {
  var cur = element.firstChild;
  var tmp;
  var reg = /\S/;
  while (cur !== null) {
    tmp = cur.nextSibling;
    if (cur.nodeType === 3 && !reg.test(cur.nodeValue)) {
      element.removeChild(cur);
    } else if (cur.nodeType === 1) {
      removeWhitespace(cur);
    }
    cur = tmp;
  }
  return element;
}

var pNode = document.querySelector('#test');
var len = pNode.childNodes.length;
console.log('len: ', len); // 新浏览器及IE8以上为：7

var newNode = removeWhitespace(pNode);
var len_ = newNode.childNodes.length;
console.log('new lenght：', len_); // 为 3
```

<a name="browser_disable_property">

### 浏览器禁用属性

```html
<img
  src="https://avatars0.githubusercontent.com/u/23481263?s=460&v=4"
  width="150"
  height="150"
  oncontextmenu="return false;"
  ondragstart="return false;"
/>

<p onselectstart="return false;">文字禁止鼠标选中</p>
<p>普通文字可以选中</p>

<p onselect="document.selection.empty();">禁止复制文本</p>
<p>普通文字可以复制</p>
```
