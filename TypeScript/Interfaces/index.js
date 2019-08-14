function formatStudentInfo(stuInfo) {
    var info = {
        id: stuInfo.id,
        name: stuInfo.name || '未知',
        age: stuInfo.age || '未知',
        school: 'HUAT'
    };
    return info;
}
var xiaoming = formatStudentInfo({ id: 985211, name: 'xiaoming' });
var xiaohua = formatStudentInfo({ id: 211985, name: 'xioahua', age: 19 });
var extraArgs = formatStudentInfo({ id: 123435, other: 'others' });
console.log(xiaoming, '----', xiaohua, '----', extraArgs);
// xiaoming.id = 999 readonly 属性不允许赋值后再修改
/************************************************************************************************/
/*
 * ReadonlyArray<T> 类型
 */
var nameArr = ['wang', 'zheng'];
var roArr = nameArr;
var roArr_ = nameArr;
console.log(nameArr, roArr, roArr_);
console.log(nameArr[0], roArr[0], roArr_[0]);
console.log(nameArr == roArr, nameArr === roArr, nameArr === roArr_); // true true true
nameArr[0] = 'wang_';
nameArr[2] = '-------';
console.log(nameArr, roArr);
console.log(nameArr[0], roArr[0]);
console.log(nameArr == roArr, nameArr === roArr, nameArr === roArr_); // true true true
var getSumFunc = function (num1, num2) {
    return num1 + num2;
};
var sum = getSumFunc(22, 9);
console.log(sum);
var _arr = ['w', 'z'];
var obj_ = {
    name: 'wz',
    age: 13,
    '15': '15___',
    say: function () {
        console.log('22222');
    }
};
console.log(obj_);
var Clock = /** @class */ (function () {
    function Clock(hour, minute) {
    }
    Clock.prototype.setTime = function (date) {
        this.curTime = date;
    };
    return Clock;
}());
