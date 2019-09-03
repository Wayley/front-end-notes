function Arithmetic() {
  this.version = '0.0.1';
}
// 记忆函数
Arithmetic.prototype.memoizeFunction = function (fn) {
  var cache = {};
  return function () {
    var key = arguments[0];
    if (cache[key]) {
      return cache[key];
    } else {
      var value = fn.apply(this, arguments);
      cache[key] = value;
      return value;
    }
  };
};
// 普通的斐波拉契
Arithmetic.prototype.fibonacci = function (n) {
  return n === 0 || n === 1 ? n : this.fibonacci(n - 1) + this.fibonacci(n - 2);
};
// 使用记忆函数优化后的斐波拉契
Arithmetic.prototype.fibonacciWithMemoize = function () {
  return this.memoizeFunction(function (n) {
    return n === 0 || n === 1 ?
      n :
      this.fibonacciWithMemoize(n - 1) + this.fibonacciWithMemoize(n - 2);
  });
}.call(new Arithmetic());