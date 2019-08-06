// 类型注解:一种轻量级的为函数或变量添加约束的方式
function greeter(name: string) {
  return 'my name is' + name;
}

// 接口
interface Person {
  fName: string;
  lName: string;
  age: number;
}
function greeter_(person: Person) {
  const { fName, lName, age } = person;
  return (
    'Hi,my name is ' + fName + ' ' + lName + ', and i am ' + age + ' years old'
  );
}
const user = {
  fName: 'wang',
  lName: 'zheng',
  age: 19
};
console.log('接口------', greeter_(user));

// 类
class Student {
  fullName: string;
  greetings: string;
  // 在构造函数的参数上使用 public 等同于创建了同名的成员变量
  constructor(
    public fName: string,
    public middleInitial: string,
    public lName: string,
    public age: number,
    private school: string
  ) {
    this.fullName = fName + '-' + middleInitial + '-' + lName;
    this.greetings = `my name is ${
      this.fullName
    }, graduated from ${school} and i will be ${age + 1} years old next month`;
  }
}
const user_ = new Student('王', '正', '正', 20, 'HUAT');
console.log('类------', user_, greeter_(user_));
