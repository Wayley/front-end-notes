/*
 *
 * 变量声明
 *
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// scoping rules 作用域规则
/*
 * var
 *
 * 变量提升
 * 函数作用域
 * IIFE 立即执行函数
 *
 */
/************************************************************************************************************/
/*
 * let
 *
 * 词法作用域/块级作用域
 * 在声明之前不能被读写
 * 暂时性死区:在使用let声明变量之前的区域
 *
 */
/************************************************************************************************************/
/*
 * const
 *
 *
 */
/************************************************************************************************************/
// Destructuring 解构
// Array
var _a = ['first', 'second', 'third', 'fourth'], f = _a[0], s = _a[1], others = _a.slice(2);
console.log(f, s, others); // first second ["third", "fourth"]
// Object
var obj = {
    fname: 'wzheng',
    age: 19,
    school: 'HUAT',
    major: 'IT'
};
var fname = obj.fname, age = obj.age, others_ = __rest(obj, ["fname", "age"]);
console.log(fname, age, others_); // wzheng 19 {school: "HUAT", major: "IT"}
console.log('------------------');
/************************************************************************************************************/
// Spread 展开
var first = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(first, second, [5]);
console.log(second, bothPlus);
second = [9, 8];
console.log(second, bothPlus); // 展开操作创建了浅拷贝
bothPlus = [0].concat(first, second, [5]);
console.log(second, bothPlus);
var defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
// 后面的属性会覆盖前面的同名属性
var search = __assign({}, defaults, { food: 'rich', name: 'wz' });
var search_ = __assign({ food: 'rich', name: 'wz' }, defaults);
console.log(defaults, search, search_);
// 展开操作仅包含`对象自身的可枚举属性` e.g
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        var sentence = "Hi, i am " + this.name + ", nice to meet you";
        console.log(sentence);
        return sentence;
    };
    return Person;
}());
var xiaoming = new Person('xiaoming');
var xiaoming_ = __assign({}, xiaoming);
console.log(xiaoming, xiaoming.sayHello());
// console.log(xiaoming_, xiaoming_.sayHello());// Error
