```js
/* setTimeout */
    const n = 10;
    // 1.引入IIFE
    for (var i = 0; i < n; i++) {
      (function(a) {
        setTimeout(() => {
          console.log('引入IIFE', a);
        }, i * 1000);
      })(i);
    }

    // 2.使用ES6的let
    for (let i = 0; i < n; i++) {
      setTimeout(() => {
        console.log('使用ES6的let', i);
      }, i * 1000);
    }

    // 3.使用ES5的bind
    for (var i = 0; i < n; i++) {
      setTimeout(
        function(a) {
          console.log('使用ES5的bind', a);
        }.bind(null, i),
        i * 1000
      );
    }
    // setTimeout第三个参数:setTimeout函数第三个参数及以后的参数都可以作为timer函数的参数
    for (var i = 0; i < n; i++) {
      setTimeout(
        function(a) {
          console.log('setTimeout第三个参数', a);
        },
        i * 1000,
        i
      );
    }
    ```