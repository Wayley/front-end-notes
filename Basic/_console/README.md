This is the notes collection for [The Usage of Console](#console)

## Table of Contents

1. [console 对象](#console)
2. [console.log 样式输出](#console_log)
3. [console.dir](#console_dir)
4. [console.table](#console_table)
5. [console.group && console.groupEnd](#console_group_end)
6. [console.count](#console_count)
7. [console.assert](#console_assert)
8. [console.time && console.timeEnd](#console_time_end)

## Contents

### console 对象

<a name="console" id="console">

```js
console.log(console); // assert ... warn等方法
```

### console.log 样式输出

<a name="console_log" id="console_log">

```js
// console.log('文字1%c文字2',style) %c后面的文字会拥有样式
console.log('%cHello World', 'color:#333;font-size:24px;'); // Hello World
console.log('Hello %cWorld', 'color:#333;font-size:24px;'); // Hello World
```

### console.dir

<a name="console_dir" id="console_dir">

```js
const schools = [
  { id: 108, name: 'school_1' },
  { id: 109, name: 'school_2' },
];
const obj = { name: 'wz', age: 17, schools };
console.log(obj);
console.dir(obj);
```

### console.table

<a name="console_table" id="console_table">

```js
const schools = [
  { id: 108, name: 'school_1' },
  { id: 109, name: 'school_2' },
];
console.table(schools);
```

### console.group && console.groupEnd

<a name="console_group_end" id="console_group_end">

```js
console.group();
console.log('A组');
console.groupEnd();

console.group();
console.log('B组');
console.log('B1');
console.log('B2');
console.groupEnd();
```

### console.count

<a name="console_count" id="console_count">

```js
console.count('label');
console.count('label');
console.count('label_1');
console.count('label');
```

### console.assert

<a name="console_assert" id="console_assert">

```js
// console.assert(condition,message) condition为true不处理,为false时执行错误信息.
for (let i = 1; i <= 5; i++) {
  console.assert(i % 2 === 0, `第${i}个是奇数`);
}
```

### console.time && console.timeEnd

<a name="console_time_end" id="console_time_end">

```js
console.time('JS的for循环100内整数求和时间');
let sum = 0;
for (let i = 0; i < 100; i++) {
  sum += i;
}
console.log(`总和为：${sum}`);
console.timeEnd('JS的for循环100内整数求和时间');
```
