```js
//  IE6/7/8/9/10
    1.DTP document.body.scrollTop
    2.no DTP document.documentElement.scrollTop
//  Safari window.pageYOffset

// firefox等标准性浏览器 document.documentElement.scrollTop
function getScrollTop(ele){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    return scrollTop;
}
function setScrollTop(){
    
}
```