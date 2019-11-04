```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="./js/vue.js"></script>
    <script src="./js/axios.js"></script>
    <script src="./js/lodash.js"></script>
    <style>
      body {
        margin-bottom: 50px;
      }

      .name p span {
        color: red;
      }

      .answer {
        color: #ea1818;
      }
    </style>
    <style>
      .base {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        text-align: center;
        border-radius: 10px;
        background: #ccc;
        margin-bottom: 20px;
      }

      .active {
        color: #42b983;
      }

      .error {
        color: red;
      }
    </style>
  </head>

  <body>
    <div id="app">
      <!--声明式渲染  -->
      <div>
        {{msg}}
      </div>
      <!--指令  -->
      <span v-bind:title="title">
        注意鼠标悬停的时候
      </span>
      <!--条件  -->
      <p v-if="seen">
        恭喜你，你可以看到我了
      </p>

      <!-- 数组遍历 -->
      <ul>
        <!-- item of items 或者 item in items-->
        <li v-for="item of items">
          {{item.course}}
          <span style="color:red">{{item.grade}}</span>
        </li>
        <li v-for="(item,i) in items">
          <span>这是父作用域属性：--{{msg}}--</span>
          <span>我的索引是：{{i}}---</span>
          <span>{{item.course}}---</span>
          <span style="color:red">{{item.grade}}</span>
        </li>
      </ul>
      <!-- 对象迭代 -->
      <ul>
        <!-- 只有键值 -->
        <li v-for="value in obj">
          {{value}}
        </li>
        <!-- 键值和键名 -->
        <li v-for="(value,key) in obj">
          {{key}}:{{value}}
        </li>
        <!-- 键值、键名、索引 -->
        <li v-for="(value,key,index) in obj">
          {{index}}.{{key}}:{{value}}
        </li>
      </ul>
      <!-- 整数迭代 -->
      <div>
        <span v-for="n in 10">
          {{n}}
        </span>
      </div>
      <div>
        <p>
          {{message}}
        </p>
        <!--
            v-on监听DOM事件
            click为事件名
            .prevent是修饰符，它告诉v-on指令对于触发的事件调用event,preventDefault()
        -->
        <button v-on:click.prevent="reverseMessage">逆转信息</button>
        <input v-model="message" />
      </div>
      <div>
        <!--创建一个 game-list 组件实例  -->
        <ol>
          <!--为每个game-list提供todo对象 todo对象是变量，其内容是动态的  -->
          <game-list
            v-for="item in groceryList"
            v-bind:todo="item"
            v-bind:key="item.id"
            v-bind:id="'list-'+item.id"
          ></game-list>
        </ol>
      </div>
      <div>
        <p>{{num + 5}}</p>
        <p>{{ isAndroid ? 'android':'ios'}}</p>
        <p>{{items[0].course}}</p>
      </div>
      <div>
        <p>
          {{content}}
        </p>
        <p>
          {{content | capitalize}}
        </p>
        <p>
          {{content | filter2(0,3)}}
        </p>
        <p>
          {{content | capitalize | filter2(0,5)}}
        </p>
      </div>
      <!--v-bind 和 v-on 的特定简写  -->
      <div>
        <a v-bind:href="url">我是a链接啊</a>
        <a :href="url">我是a链接啊</a>

        <button v-on:click="submit">提交</button>
        <button @click="submit">提交</button>
      </div>
      <!--计算属性  -->
      <div>
        <p>这是content原始值：{{content}}</p>
        <p>这是计算属性-反转操作content后的值：{{reversedContent}}</p>
        <p>
          这是Methods中的方法操作content后的值：{{reverseContentByMethod()}}
        </p>
        <!--
                计算属性和method都可以实现相同的结果
                不同点：
                    计算属性是基于它们的依赖进行缓存的，只有它的相关依赖发生改变时才会重新求值。这意味着只要content还没有发生改变，多次访问reversedContent计算属性会立即返回之前的计算结果，而不必再次执行函数;
                    相比而言，只要发生重新渲染，method调用总会执行该函数
             -->
        <p>{{now}}</p>
      </div>
      <!--  watch属性 -->
      <div class="name">
        <p>
          我是自定义的fullName：
          <span>
            {{fullName}}
          </span>
        </p>
        <p>
          我是计算属性的fullName：
          <span>
            {{fullNamed}}
          </span>
        </p>
        <p>
          我是计算属性的默认getter获取的miniName：
          <span>
            {{miniName}}
          </span>
        </p>
        <p>
          我是和下面的input绑定一起的数值：
          <span>
            {{initialname}}
          </span>
        </p>
        <input v-model="initialname" />
        <button @click="changeMiniName">点我改变你的小名</button>
      </div>
      <!-- watch  -->
      <div>
        <p>
          ask a yes(no) question:
          <input v-model="question" />
        </p>
        <p class="answer">
          {{answer}}
        </p>
      </div>
    </div>
    <!-- class与style绑定 -->
    <div id="app2">
      <!-- 绑定HTML Class -->
      <div>
        <!-- 对象语法 -->
        <div>
          <div class="base" v-bind:class="{active:isActive,error:hasError}">
            1.你在干什么啊，我会变哦，不信你点我
          </div>
          <div class="" v-bind:class="classObj">
            2.你在干什么啊，我会变哦，不信你点我
          </div>
          <!-- 计算属性 -->
          <div class="" v-bind:class="classObject">
            3.你在干什么啊，我会变哦，不信你点我
          </div>
        </div>
        <!-- 数组语法 -->
        <div>
          <div v-bind:class="[activeClass,errorClass]">
            4.你在干什么啊，我会变哦，不信你点我
          </div>
          <!-- 三元表达式 -->
          <div v-bind:class="[isActive ?  activeClass:'',errorClass]">
            5.你在干什么啊，我会变哦，不信你点我
          </div>
          <!--  数组语法中使用对象语法 -->
          <div v-bind:class="[{active: isActive},errorClass]">
            6.你在干什么啊，我会变哦，不信你点我
          </div>
        </div>
      </div>
      <!-- 绑定内联样式 Style -->
      <div>
        <div
          class="base"
          v-bind:style="{color:activeColor,fontSize:fontSize + 'px'}"
        >
          1、你可能不知道的哦
        </div>
        <div class="base" v-bind:style="styleObj">
          2、你可能不知道的哦
        </div>
        <div class="base" v-bind:style="[baseStyleObj,styleObj]">
          3、你可能不知道的哦
        </div>
      </div>
    </div>
    <!-- 条件渲染 -->
    <div id="app3">
      <div>
        <!-- template元素是包装元素，不会被包含到DOM上 -->
        <template v-if="ok">
          <h1>Title</h1>
          <p>paragraph1</p>
          <p>paragraph2</p>
        </template>
        <!-- if-else -->
        <div>
          <div v-if="Math.random() > 0.5">
            You Can See Me Now
          </div>
          <div v-else>
            Now You Can't
          </div>
        </div>
        <!-- else-if -->
        <div>
          <p v-if="type==1011">
            新闻
          </p>
          <p v-else-if="type==1022">
            广告
          </p>
          <p v-else-if="type==1033">
            视频
          </p>
          <p v-else>
            其他
          </p>
        </div>
      </div>
      <!-- 没有设置key的情况下管理复用的元素 -->
      <div>
        <template v-if="loginType === 'username'">
          <label>Username</label>
          <input placeholder="Enter your username" />
        </template>
        <template v-else-if="loginType === 'email'">
          <label>Email</label>
          <input placeholder="Enter your Email address" />
        </template>
        <button @click="toggleLoginType">
          Toggle Login Type
        </button>
      </div>
      <!-- 给元素设置key之后，则可以独立元素 如下：两个input将会独立，但是label元素仍然会高效复用 -->
      <div>
        <template v-if="loginType === 'username'">
          <label>Username</label>
          <input placeholder="Enter your username" key="username-input" />
        </template>
        <template v-else-if="loginType === 'email'">
          <label>Email</label>
          <input placeholder="Enter your Email address" :key="email-input" />
        </template>
        <button @click="toggleLoginType">
          Toggle Login Type
        </button>
      </div>
    </div>
    <div id="todo-list-example">
      <input
        v-model="newTodoText"
        @keyup.enter="addNewTodo"
        placeholder="Add a new todo"
      />
      <ul>
        <li
          is="todo-item"
          v-for="(todo,index) in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="todos.splice(index,1)"
        ></li>
        <!-- v-for的优先级高于v-if -->
        <li v-bind:style="{margin:marginNum + 'px', color:color}">
          ----------分割线--------
        </li>
        <li
          is="todo-item"
          v-for="(todo,index) in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="todos.splice(index,1)"
          v-if="!todo.isComplete"
        ></li>
      </ul>
      <ul v-if="shouldRenderTodos">
        <li v-for="todo in todos">
          {{todo}}
        </li>
      </ul>
    </div>
  </body>
  <script>
    // 定义一个名为 game-list 的组件
    Vue.component('game-list', {
      props: ['todo'], //这个组件现在接受一个'prop'，类似于自定义属性，这个属性名为todo
      template: '<li>{{todo.text}}</li>'
    });
    //创建vue实例  传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子等
    var vm = new Vue({
      el: '#app',
      data: {
        url: 'https://vuejs.org/',
        msg: '你好',
        title: '我是span的title-------现在是：' + new Date().toLocaleString(),
        seen: false,
        items: [
          {
            course: '语文',
            grade: 90
          },
          {
            course: '数学',
            grade: 96
          },
          {
            course: '英语',
            grade: 97
          }
        ],
        obj: {
          name: 'wz',
          age: 18,
          gender: '男'
        },
        message: '看完看我，我要反转了哦',
        groceryList: [
          {
            id: 0,
            text: '蔬菜'
          },
          {
            id: 1,
            text: '水果'
          },
          {
            id: 2,
            text: '牛奶'
          }
        ],
        num: 10086,
        isAndroid: true,
        initialname: '',
        content: 'hello vue',
        firstName: 'Wang',
        lastName: 'Zheng',
        fullName: 'Wang zheng',
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      },
      // 计算属性
      computed: {
        // a computed getter
        // 声明了一个计算属性reveresdMessage。提供的函数将用作属性vm.reversedMessage的getter函数

        reversedContent: function() {
          return this.content
            .split('')
            .reverse()
            .join('');
          // 当修改vm.content的值的时候，vm.reversedMessage也会变化
        },
        /*
                计算属性和method都可以实现相同的结果
                  不同点：
                     计算属性是基于它们的依赖进行缓存的，只有它的相关依赖发生改变时才会重新求值。这意味着只要content还没有发生改变，多次访问reversedContent计算属性会立即返回之前的计算结果，而不必再次执行函数
            */
        // 下面的计算属性不再更新，因为Date.now()不是响应式依赖
        now: function() {
          return Date.now();
        },
        // 计算属性默认只有getter,必要的时候也可以提供一个setter
        miniName: {
          //getter
          get: function() {
            return this.firstName.charAt(0) + '--' + this.lastName.charAt(0);
          },
          //setter
          set: function(newValue) {
            var names = newValue.split('--');
            this.firstName = names[0];
            this.lastName = names[names.length - 1];
          }
          // 例如：当设置vm.miniName = 'w--zh',上面的setter会被调用，同时vm.firstName和vm.lastName也会变化
        },
        fullNamed: function() {
          return this.firstName + ' ' + this.lastName;
        }
      },
      methods: {
        reverseMessage: function() {
          this.message = this.message
            .split('')
            .reverse()
            .join('');
        },
        submit: function() {
          console.log('提交了');
        },
        reverseContentByMethod: function() {
          return this.content
            .split('')
            .reverse()
            .join('');
        },
        changeMiniName: function() {
          var newName = this.initialname.split('--');
          this.firstName = newName[0];
          this.lastName = newName[newName.length - 1];
        },
        /*
                _.debounce是一个通过lodash限制操作频率的函数
                在这个例子中，我们希望限制访问https://yesno.wtf/api的频率
                设置500ms可以设置在用户输入完毕之后在发送ajax
            */
        //这个示例中，watch允许我们执行异步操作(访问API)，限制我们执行该操作的频率，并在我们得到最终结果前，这只中间状态，而计算属性无法做到
        getAnswer: _.debounce(
          function() {
            if (this.question.indexOf('?') === -1) {
              this.answer =
                'Questions usually contain a question mark as ?. ;-)';
              return;
            }
            this.answer = 'I am thinking...';
            var _this = this;
            axios
              .get('https://yesno.wtf/api')
              .then(function(response) {
                console.log(998, response);
                _this.answer = _.capitalize(response.data.answer);
              })
              .catch(function(err) {
                _this.answer = 'Error! Could not reach the API.' + err;
              });
          },
          //为用户停止输入等待的毫秒数
          500
        )
      },
      // 生命周期钩子，如：mounted、updated、destroyed、created。详见https://cn.vuejs.org/v2/guide/instance.html#生命周期图示
      created: function() {
        //created这个钩子在实例被创建之后被调用
        console.log('msg is:' + this.msg);
      },
      //  过滤器  过滤器函数总接收表达式的值作为第一个参数 串联使用的时候将前一个结果作为参数传递到后一个过滤器中
      filters: {
        capitalize: function(value) {
          if (!value) return '';
          value = value.toString();
          return value.charAt(0).toUpperCase() + value.slice(1);
        },
        filter2: function(value, arg1, arg2) {
          if (!value) return '';
          value = value.toLowerCase().slice(arg1, arg2);
          return value;
        }
      },
      //观察Watchers 通过watch选项提供一个更通用的方法来响应数据的变化，特别是在数据变化响应时，执行异步操作或者开销较大的操作
      watch: {
        firstName: function(val) {
          this.fullName = val + '' + this.lastName;
        },
        lastName: function(val) {
          this.fullName = this.firstName + '' + val;
        },
        //如果question发生变化，这个函数就会运行
        question: function(newQuestion) {
          this.answer = 'Waiting for you to stop typing...';
          this.getAnswer();
        }
      }
    });
  </script>
  <script>
    var vm2 = new Vue({
      el: '#app2',
      data: {
        isActive: true,
        hasError: false,
        error: null,
        classObj: {
          base: true, // key值对应类名，可以加引号，也可以不加
          active: false,
          error: true
        },
        activeClass: 'active',
        errorClass: 'error',
        activeColor: '#17F1DA',
        fontSize: 22,
        baseStyleObj: {
          transform: 'rotate(3deg)',
          backgroundColor: '#97D2CA'
        },
        styleObj: {
          color: '#A773F1',
          fontSize: '22px'
        }
      },
      computed: {
        classObject: function() {
          console.log('--------', this);
          return {
            active: this.isActive && !this.error,
            error: this.error && this.error.type === 'fatal'
          };
        }
      }
    });
  </script>
  <script>
    var vm3 = new Vue({
      el: '#app3',
      data: {
        ok: true,
        type: 1022,
        loginType: 'username'
      },
      methods: {
        toggleLoginType: function() {
          return (
            (this.loginType =
              this.loginType === 'username' ? 'email' : 'username'),
            console.log(12222, this.loginType)
          );
        }
      }
    });
  </script>
  <script>
    Vue.component('todo-item', {
      template:
        '<li>{{title}}<button @click="$emit(\'remove\')">X</button></li>',
      props: ['title']
    });
    var ex = new Vue({
      el: '#todo-list-example',
      data: {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'do the dishes',
            isComplete: true
          },
          {
            id: 2,
            title: 'Take out the trash',
            isComplete: false
          },
          {
            id: 3,
            title: 'Mow the lawn',
            isComplete: true
          },
          {
            id: 4,
            title: 'Walk the dog',
            isComplete: false
          }
        ],
        nextTodoId: 5,
        marginNum: 20,
        color: 'red',
        shouldRenderTodos: true
      },
      methods: {
        addNewTodo: function() {
          this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
          });
          this.newTodoText = '';
        }
      }
    });
  </script>
</html>
```
