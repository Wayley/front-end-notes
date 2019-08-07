/*
 *
 *基础类型
 *
 */
// Boolean
var isOk = true;
// Number
var decimal = 33; // 十进制
var hex = 0xf80d; // 十六进制
var binary = 14; // 二进制
var octal = 412; // 八进制
console.log(decimal, hex, binary, octal);
// String
var fName = 'wang';
var lName = 'zheng'; // "zheng"
var greeting = "my name is " + (fName + '·' + lName);
// Array
var arr = [1, 3, 5];
var arr_ = ['1', 3, false]; // 不确定元素类型时可用any
var arr__ = ['wang', 'zheng']; // generic array type 数组泛型
// Tuple 元组
var tup;
tup = [19, 'wang', true];
// console.log(1, tup, tup[0].substr(1), tup[1].substr(1)); // 类型“number”上不存在属性“substr”
// tup = ['19', 'wang', true]; // 不能将类型“string”分配给类型“number”
console.log(2, tup);
//FIXME: ??????访问越界元素,会使用联合类型
// tup[44] = '123木头人'; // 不能将类型“"123木头人"”分配给类型“undefined”
// Enum 枚举 枚举类型是一种可以为一组数值赋予更友好名字的方式
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var ins = {
    0: 'Red',
    1: 'Green',
    2: 'Blue',
    Blue: 2,
    Green: 1,
    Red: 0
};
console.log(Color); // 打印的Color形如 ins
console.log('----------------------------------------------------------------');
// 默认从0开始为元素编号 也可以手动指定成员数值
var Color_;
(function (Color_) {
    Color_[Color_["Red"] = 0] = "Red";
    Color_[Color_["Green"] = 5] = "Green";
    Color_[Color_["Blue"] = 6] = "Blue";
})(Color_ || (Color_ = {}));
var ins_ = {
    0: 'Red',
    5: 'Green',
    6: 'Blue',
    Blue: 6,
    Green: 5,
    Red: 0
};
console.log(Color_); // 打印的Color形如 ins_
var Color__;
(function (Color__) {
    Color__[Color__["Red"] = 7] = "Red";
    Color__[Color__["Green"] = 5] = "Green";
    Color__[Color__["Blue"] = 1] = "Blue";
})(Color__ || (Color__ = {}));
var ins__ = {
    1: 'Blue',
    5: 'Green',
    7: 'Red',
    Blue: 1,
    Green: 5,
    Red: 7
};
console.log(Color__); // 打印的Color形如 ins__
// Any 任意值
var notSure;
notSure = 'notSure';
console.log(1, notSure);
notSure = true;
console.log(2, notSure);
notSure = function () {
    return '不确定';
};
console.log(3, notSure);
// Void 空值
function test() {
    console.log('do not return a value');
}
// void变量只能赋值为 undefined or null
var unusable;
unusable = undefined;
console.log(unusable);
unusable = null;
console.log(unusable);
// Null and Undefined
// 默认情况下 null 和 undefined 是所有类型的子类型,因此你可以将他们赋值给任何类型的变量
var _name = undefined;
var _age = null;
// 使用--strictNullChecks标记后 只能 赋值给null、undefined、void类型的
// Never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error('Something failed');
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) { }
}
// Object
//
// Type assertions 类型断言
// 方式一: <>
var sentence = 'i am a cute boy';
var len = sentence.length;
// 方式二: as
var len_ = sentence.length;
