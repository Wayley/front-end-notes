> 获取浏览器信息

```js
function getBrowserVersions() {
  var u = navigator.userAgent;
  var app = navigator.appVersion;
  return {
    //移动终端浏览器版本信息
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端
    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, //是否iPad
    weChat: u.indexOf('MicroMessenger') > -1
  };
}
```

> swiper

```js
//动态操作DOM时候  swiper注意的地方
swiper1 = new Swiper('.swiper-container', {
  initialSlide: 0,
  observer: true, //修改swiper自己或子元素时，自动初始化swiper
  observeParents: true //修改swiper的父元素时，自动初始化swiper
});
```

> 监听用户是否离开当前文档

```js
document.addEventListener('visibilitychange', function() {
  if (document.hidden || document.visibilityState == 'hidden') {
    //离开时的操作 eg.
    // some code
    document.title = '欢迎下次再来';
  }
});
```

> Object.keys

```js
if (!Object.keys) {
  Object.keys = (function() {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !{
        toString: null
      }.propertyIsEnumerable('toString'),
      dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ],
      dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (
        (typeof obj !== 'object' && typeof obj !== 'function') ||
        obj === null
      )
        throw new TypeError('Object.keys called on non-object');

      var result = [];

      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop);
      }

      if (hasDontEnumBug) {
        for (var i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
        }
      }
      return result;
    };
  })();
}
```
