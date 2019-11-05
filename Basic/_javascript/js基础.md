```js
//window.onload是 dom文档树加载完和所有文件(如图片等)加载完之后执行一个函数
window.onload = function(e) {
  console.log('window.onload1', e)
}
// 模拟jQuery的ready函数
document.ready = function(callback) {
  ///兼容FF,Google
  if (document.addEventListener) {
    document.addEventListener(
      'DOMContentLoaded',
      function() {
        document.removeEventListener(
          'DOMContentLoaded',
          arguments.callee,
          false
        )
        callback()
      },
      false
    )
  }
  //兼容IE
  else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState == 'complete') {
        document.detachEvent('onreadystatechange', arguments.callee)
        callback()
      }
    })
  } else if (document.lastChild == document.body) {
    callback()
  }
}
document.ready(function() {
  console.log('document.ready')
})
window.onload = function(e) {
  console.log('window.onload2', e)
}

/*
 * 原生window.onload=function(e){}和$(document).ready(function(){})的区别
 * 1.原生的会在DOM文档树和所有文件(如图片)加载完成之后再执行,jQury的在DOM文档树加载完就执行了
 * 2.原生的可以获取dom的属性值 而jQuery的不可以
 * 3.原生的入口后面的会覆盖前面的 而jQuery不会覆盖
 */

```

### Array方法

>不改变原数组的方法
```
concat()  ---连接两个或多个数组元素，并返回新数组 不去重
every()   ---检测数组的每个元素是否都符合条件 返回T or F
come()    ---检测数组中的元素是否有符合条件的 返回T or F
filter()  ---检测数组元素，并返回符合条件的元素集(数组)
indexOF(item,start) ---从start位置从前往后搜索数组中的元素(start位置之前的不用搜索)，并返回其位置(索引) 
lastIndexOf(item,start) ---从start位置从后往前搜索数组中的元素(start位置之后的不用搜索)，并返回其位置(索引)
join()     ---把数组元素用指定字符串连接，并返回连接后的字符串
toString() ---把数组转换为字符串，并返回结果
map()      ---通过指定函数处理每个元素，并返回处理后的元素集合(数组)
slice(s,e) ---选取数组的一部分，并返回新集合(数组)
valueOf()  ---返回数组对象的原始值
```

>改变原数组的方法
```
pop()      ---删除并返回数组的最后一个元素
shift()    ---删除并返回数组的第一个元素
push()     ---向数组末尾添加一个或多个元素，并返回新长度
unshift()  ---向数组开头添加一个或多个元素，并返回新长度
reverse()  ---数组反转，并返回数组
sort(Fn)   ---对数组元素进行排序(默认按字母升序)
splice(index,howMany,item1,item2...)   ---从数组中添加或删除元素
```