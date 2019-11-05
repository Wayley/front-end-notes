```html
<body>
  <div id="test">这是原始数据</div>
  <button id="btn1">按钮1</button>
  <button id="btn2">按钮2</button>
</body>
<script>
  // 箭头函数使用场景注意事项
  // 1.对象方法中 this不指向对象本身 this值继承自外围作用域
  const person = {
    age: 18,
    list: [1, 3, 5],
    sayHello: () => {
      console.log(this === window); // true
      console.log(this.age);// undefined
      return 'hello , i am ' + this.age + ' years old';
    },
    sayHello_() {
      console.log(this === window); // false
      console.log(this.age);// 18
      return 'hello , i am ' + this.age + ' years old';
    },
    sayHello__: function () {
      console.log(this === window); // false
      console.log(this.age);// 18
      return 'hello , i am ' + this.age + ' years old';
    }
  }
  const res1 = person.sayHello();
  console.log(res1);

  const res2 = person.sayHello_();
  console.log(res2);

  const res3 = person.sayHello__();
  console.log(res3);
  // ----------------------//
  console.log('--------------------------------------------');

  // 2.在原型上使用
  function Person(age) {
    this.age = age;
  }
  Person.prototype.sayAge = () => {
    console.log(this === window);// true
    console.log(this.age);// undefined
    return this.age;
  }
  const person_ = new Person(19);
  console.log(person_, person_.sayAge());

  Person.prototype.sayAge_ = function () {
    console.log(this === window);// false
    console.log(this.age);// 20
    return this.age;
  }
  const person__ = new Person(20);
  console.log(person__, person__.sayAge_());
  // ----------------------//
  console.log('--------------------------------------------');

  // 3.动态上下文中的回调函数
  const testDiv = document.getElementById('test');
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  btn1.addEventListener('click', (e) => {
    // console.log(e);
    console.log(this === window);// true
    this.innerHTML = 'Clicked button';
  })
  btn2.addEventListener('click', function (e) {
    // console.log(e);
    console.log(this === window);// false
    console.log(this === btn2);// true
    this.innerHTML = 'Clicked button';
  })
  // ----------------------//
  console.log('--------------------------------------------');
  // 4 构造函数
  // const People = (age) => {
  //   this.age = age;
  // }
  // const people = new People(21);//TypeError: People is not a constructor
  // console.log(people);

  // ----------------------//
  console.log('--------------------------------------------');

  class Cow {
    constructor() {
      this.sound = "moo";
    }
    makeSoundLater() {
      // 箭头函数
      setTimeout(() => {
        // 这里的this指向当前实例
        console.log(this.sound, '=>');
      }, 1000);
      // funtion
      setTimeout(function () {
        console.log(this.sound, 'function');
      }, 2000);
    }
  }

  var myCow = new Cow();
  var yourCow = new Cow();

  yourCow.sound = "moooooo";

  myCow.makeSoundLater();// moo undefined
  yourCow.makeSoundLater();// moooooo undefined

</script>

```