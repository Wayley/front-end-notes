# Native JavaScript

## Table of Contents

1. [原生实现 extend 方法](#extend)
2. [原生 js 操作 DOM](#dom)
   1. [hasClass](#dom_hasClass)
   2. [addClass](#dom_addClass)
   3. [removeClass](#dom_removeClass)
   4. [toggleClass](#dom_toggleClass)
3. [其他](#other)

## Contents

<a name="extend">

### 原生实现 extend 方法

```js
var extend = (function() {
  for (var p in { toString: null }) {
    //检查当前浏览器是否支持forin循环去遍历出一个不可枚举的属性，比如toString属性，如果不能遍历不可枚举的属性(IE浏览器缺陷)，那么forin循环不会进来
    return function extend(o) {
      for (var i = 1, len = arguments.length; i < len; i++) {
        var source = arguments[i];
        for (var prop in source) {
          o[prop] = source[prop];
        }
      }
      return o;
    };
  }
  //这些属性需要特殊检查一下，因为有的IE浏览器不支持for in去遍历这些属性
  var protoprops = [
    'toString',
    'valueOf',
    'constructor',
    'hasOwnProperty',
    'isPropertyOf',
    'propertyIsEnumerable',
    'toLocalString'
  ];
  return function patched_extend(o) {
    for (var i = 1, len = arguments.length; i < len; i++) {
      var source = arguments[i];
      for (var prop in source) {
        //先遍历常规的属性
        o[prop] = source[prop];
      }
      //检查是否有特殊属性，防止漏掉
      for (var j = 0, len = protoprops.length; j < len; j++) {
        prop = protoprops[j];
        if (source.hasOwnProperty(prop)) {
          o[prop] = source[prop];
        }
      }
    }
    return o;
  };
})();

// 测试extend方法
function testExtend() {
  var obj1 = {
    name: 'wz1',
    age: 18,
    school: 'zhushan',
    say() {
      console.log(this.name);
    }
  };
  var obj2 = {
    name: 'wz2',
    age: 19
  };
  var obj = { name: 'wz' };
  var res = extend(obj, obj1, obj2, { nickName: 'Robben Wadlay' });
  console.log(res, obj, res === obj, obj1, '////////', obj2);
  obj1.say(); // wz1
  res.say(); // wz2
}
testExtend();
```

<a name="dom">

### 原生 js 操作 DOM

<a name="dom_hasClass">

#### hasClass

> 判断 DOM 元素是否存在某个类名

```js
function hasClass(ele, className) {
  return ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
```

#### addClass

> 为 DOM 元素添加类名

```js
function addClass(ele, className) {
  if (!hasClass(ele, className)) {
    ele.className += ' ' + className;
  }
}
```

#### removeClass

> 为 DOM 元素移除某类名

```js
function removeClass(ele, className) {
  if (hasClass(ele, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}
```

#### dom_toggleClass

> 切换 DOM 元素的某个类名

```js
function toggleClass(ele, className) {
  if (hasClass(ele, className)) {
    removeClass(ele, className);
  } else {
    addClass(ele, className);
  }
}
```
