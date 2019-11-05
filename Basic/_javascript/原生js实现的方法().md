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

<!--测试extend方法-->
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