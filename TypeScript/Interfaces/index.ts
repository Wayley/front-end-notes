/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: uooc
 * @Date: 2019-08-08 16:11:31
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2019-08-14 17:50:54
 * @Description:
 */
/*
 * Optional Properties 可选属性
 *
 * Readonly Properties 只读属性
 */
interface StuInfoConfig {
  readonly id: number;
  name?: string;
  age?: number;
  [otherProps: string]: any; // 字符串索引签名 绕开额外属性检查
}
interface FormattedStuInfoConfig {
  readonly id: number;
  name: string;
  age: number | string;
  school: string;
  className?: string;
}
function formatStudentInfo(stuInfo: StuInfoConfig): FormattedStuInfoConfig {
  let info = {
    id: stuInfo.id,
    name: stuInfo.name || '未知',
    age: stuInfo.age || '未知',
    school: 'HUAT'
  };
  return info;
}
let xiaoming = formatStudentInfo({ id: 985211, name: 'xiaoming' });
let xiaohua = formatStudentInfo({ id: 211985, name: 'xioahua', age: 19 });
let extraArgs = formatStudentInfo({ id: 123435, other: 'others' });
console.log(xiaoming, '----', xiaohua, '----', extraArgs);
// xiaoming.id = 999 readonly 属性不允许赋值后再修改

/************************************************************************************************/
/*
 * ReadonlyArray<T> 类型
 */
let nameArr: string[] = ['wang', 'zheng'];
let roArr: ReadonlyArray<string> = nameArr;
let roArr_: ReadonlyArray<string> = nameArr;
console.log(nameArr, roArr, roArr_);
console.log(nameArr[0], roArr[0], roArr_[0]);
console.log(nameArr == roArr, nameArr === roArr, nameArr === roArr_); // true true true

nameArr[0] = 'wang_';
nameArr[2] = '-------';
console.log(nameArr, roArr);
console.log(nameArr[0], roArr[0]);
console.log(nameArr == roArr, nameArr === roArr, nameArr === roArr_); // true true true
// nameArr = roArr;// readonly不能赋值给其他变量

/************************************************************************************************/
/*
 * Function Types
 * ():T
 */
// 使用接口描述函数类型
interface GetSumFunc {
  (n: number, m: number): number;
}
let getSumFunc: GetSumFunc = function(num1: number, num2: number) {
  return num1 + num2;
};
let sum = getSumFunc(22, 9);
console.log(sum);

/************************************************************************************************/
/*
 * Indexable Types
 * []:T
 */
// 使用具有索引签名的接口描述
// 支持2种索引签名:数字和字符串
interface StringArray {
  [index: number]: string;
}
let _arr: StringArray = ['w', 'z'];

interface Test {
  [index: string]: any;
}
let obj_: Test = {
  name: 'wz',
  age: 13,
  '15': '15___',
  say() {
    console.log('22222');
  }
};
console.log(obj_);

/************************************************************************************************/
/*
 * Class Types
 */
// 在接口中描述属性或方法  在类中实现接口
// 接口描述了类的公共部分 不会检查类是否具有私有成员
interface ClockInterface {
  curTime: Date;
  setTime(d: Date): any;
}
class Clock implements ClockInterface {
  curTime: Date;
  setTime(date: Date) {
    this.curTime = date;
  }
  constructor(hour: number, minute: number) {}
}

/************************************************************************************************/
/*
 * Extending Interfaces 接口继承
 */
interface Interf_1 {
  name: string;
}
interface Interf_2 {
  sayHello(sentence: string): void;
}
interface Interf extends Interf_1, Interf_2 {
  age: number;
}
