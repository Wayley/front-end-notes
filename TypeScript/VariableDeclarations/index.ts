/*
 *
 * 变量声明
 *
 */

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
let [f, s, ...others] = ['first', 'second', 'third', 'fourth'];
console.log(f, s, others); // first second ["third", "fourth"]
// Object
let obj = {
  fname: 'wzheng',
  age: 19,
  school: 'HUAT',
  major: 'IT'
};
let { fname, age, ...others_ } = obj;
console.log(fname, age, others_); // wzheng 19 {school: "HUAT", major: "IT"}
console.log('------------------');
/************************************************************************************************************/

// Spread 展开

let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(second, bothPlus);

second = [9, 8];
console.log(second, bothPlus); // 展开操作创建了浅拷贝

bothPlus = [0, ...first, ...second, 5];
console.log(second, bothPlus);

let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
// 后面的属性会覆盖前面的同名属性
let search = { ...defaults, food: 'rich', name: 'wz' };
let search_ = { food: 'rich', name: 'wz', ...defaults };
console.log(defaults, search, search_);

// 展开操作仅包含`对象自身的可枚举属性` e.g
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    const sentence = `Hi, i am ${this.name}, nice to meet you`;
    console.log(sentence);
    return sentence;
  }
}
let xiaoming = new Person('xiaoming');
let xiaoming_ = { ...xiaoming };
console.log(xiaoming, xiaoming.sayHello());
// console.log(xiaoming_, xiaoming_.sayHello());// Error
