/*
 *
 *基础类型
 *
 */

// Boolean
let isOk: boolean = true;

// Number
let decimal: number = 33; // 十进制
let hex: number = 0xf80d; // 十六进制
let binary: number = 0b1110; // 二进制
let octal: number = 0o634; // 八进制
console.log(decimal, hex, binary, octal);

// String
let fName: string = 'wang';
let lName: string = 'zheng'; // "zheng"
let greeting: string = `my name is ${fName + '·' + lName}`;

// Array
let arr: number[] = [1, 3, 5];
let arr_: any[] = ['1', 3, false]; // 不确定元素类型时可用any
let arr__: Array<string> = ['wang', 'zheng']; // generic array type 数组泛型

// Tuple 元组
let tup: [number, string, boolean];
tup = [19, 'wang', true];
// console.log(1, tup, tup[0].substr(1), tup[1].substr(1)); // 类型“number”上不存在属性“substr”
// tup = ['19', 'wang', true]; // 不能将类型“string”分配给类型“number”
console.log(2, tup);
//FIXME: ??????访问越界元素,会使用联合类型
// tup[44] = '123木头人'; // 不能将类型“"123木头人"”分配给类型“undefined”

// Enum 枚举 枚举类型是一种可以为一组数值赋予更友好名字的方式
enum Color {
  Red,
  Green,
  Blue
}
let ins = {
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
enum Color_ {
  Red,
  Green = 5,
  Blue
}
let ins_ = {
  0: 'Red',
  5: 'Green',
  6: 'Blue',
  Blue: 6,
  Green: 5,
  Red: 0
};
console.log(Color_); // 打印的Color形如 ins_
enum Color__ {
  Red = 7,
  Green = 5,
  Blue = 1
}
let ins__ = {
  1: 'Blue',
  5: 'Green',
  7: 'Red',
  Blue: 1,
  Green: 5,
  Red: 7
};
console.log(Color__); // 打印的Color形如 ins__

// Any 任意值
let notSure: any;
notSure = 'notSure';
console.log(1, notSure);
notSure = true;
console.log(2, notSure);
notSure = function() {
  return '不确定';
};
console.log(3, notSure);

// Void 空值
function test(): void {
  console.log('do not return a value');
}
// void变量只能赋值为 undefined or null
let unusable: void;
unusable = undefined;
console.log(unusable);
unusable = null;
console.log(unusable);

// Null and Undefined
// 默认情况下 null 和 undefined 是所有类型的子类型,因此你可以将他们赋值给任何类型的变量
let _name: string = undefined;
let _age: number = null;
// 使用--strictNullChecks标记后 只能 赋值给null、undefined、void类型的

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}
// Inferred return type is never
function fail() {
  return error('Something failed');
}
// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {}
}

// Object
//

// Type assertions 类型断言
// 方式一: <>
let sentence: any = 'i am a cute boy';
let len: number = (<string>sentence).length;
// 方式二: as
let len_: number = (sentence as string).length;
