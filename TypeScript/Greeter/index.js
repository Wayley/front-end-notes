// 类型注解:一种轻量级的为函数或变量添加约束的方式
function greeter(name) {
    return 'my name is' + name;
}
function greeter_(person) {
    var fName = person.fName, lName = person.lName, age = person.age;
    return ('Hi,my name is ' + fName + ' ' + lName + ', and i am ' + age + ' years old');
}
var user = {
    fName: 'wang',
    lName: 'zheng',
    age: 19
};
console.log('接口------', greeter_(user));
// 类
var Student = /** @class */ (function () {
    // 在构造函数的参数上使用 public 等同于创建了同名的成员变量
    function Student(fName, middleInitial, lName, age, school) {
        this.fName = fName;
        this.middleInitial = middleInitial;
        this.lName = lName;
        this.age = age;
        this.school = school;
        this.fullName = fName + '-' + middleInitial + '-' + lName;
        this.greetings = "my name is " + this.fullName + ", graduated from " + school + " and i will be " + (age + 1) + " years old next month";
    }
    return Student;
}());
var user_ = new Student('王', '正', '正', 20, 'HUAT');
console.log('类------', user_, greeter_(user_));
