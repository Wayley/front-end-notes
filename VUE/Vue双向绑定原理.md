## vue 双向绑定原理

> 主要是通过<font color='#0099ff' size=3 >Object.defineProperty</font>来重写<font color=#00ffff size=3>data</font> 的<font color=#F93838 size=3>get</font>和<font color=#F93838 size=3>set</font>来实现的

```js
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : (global._Vue = factory());
})(this, function() {
  'use strict';

  function _Vue(options) {
    this._init(options);
  }
  // 初始化
  _Vue.prototype._init = function(options) {
    this.$options = options;
    this.$el = document.querySelector(options.el); // 一般时'#app'的DOM元素
    this.$data = options.data;
    this.$methods = options.methods;
    // 保存model与view的映射关系,即Watcher实例。当model改变时,会触发相应指令类更新,同时保证view也更新。
    this._binding = {};
    //
    this._obverse(this.$data);
    //
    this._complie(this.$el);
  };
  // 处理data,重写data的set和get
  _Vue.prototype._obverse = function(data) {
    var value;
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        this._binding[key] = {
          _directives: []
        };
        value = data[key];
        // 深遍历
        if (typeof value === 'object') {
          this._obverse(value);
        }
        var binding = this._binding[key];
        Object.defineProperty(this.$data, key, {
          enumerable: true,
          configurable: true,
          get: function() {
            return value;
          },
          set: function(newVal) {
            if (value !== newVal) {
              value = newVal;
              binding._directives.forEach(function(item) {
                item._update();
              });
            }
          }
        });
      }
    }
  };
  // 解析指令、初始化视图
  _Vue.prototype._complie = function(root) {
    var _this = this;
    var nodes = root.children;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.children.length) {
        this._complie(node);
      }
      // v-click
      if (node.hasAttribute('v-click')) {
        node.onclick = (function(index) {
          var attrValue = nodes[index].getAttribute('v-click');
          return _this.$methods[attrValue].bind(_this.$data); // 保持作用域一样
        })(i);
      }
      // v-model
      if (
        node.hasAttribute('v-model') &&
        (node.tagName == 'INPUT' || node.tagName == 'TEXTAREA')
      ) {
        node.addEventListener(
          'input',
          (function(index) {
            var attrValue = nodes[index].getAttribute('v-model');
            _this._binding[attrValue]._directives.push(
              new Watcher('input', node, _this, attrValue, 'value')
            );
            return function() {
              _this.$data[attrValue] = nodes[key].value;
            };
          })(i)
        );
      }
      // v-bind
      if (node.hasAttribute('v-bind')) {
        var attrValue = node.getAttribute('v-bind');
        _this._binding[attrValue]._directives.push(
          new Watcher('text', node, _this, attrValue, 'innerText')
        );
      }
    }
  };
  // Watcher类 绑定更新函数,实现对DOM元素的更新
  function Watcher(name, el, vm, exp, attr) {
    this.name = name; //指令名称,如文本节点,该值设为"text"
    this.el = el; //指令对应的DOM元素
    this.vm = vm; //指令所属_Vue实例
    this.exp = exp; //指令对应的值,如"score"
    this.attr = attr; //绑定的属性值,如为"innerText"

    this._update();
  }

  Watcher.prototype._update = function() {
    this.el[this.attr] = this.vm.$data[this.exp]; // 如: p.innerText = this.data.score
  };
  return _Vue;
});
```
