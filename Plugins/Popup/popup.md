```js
// jQuery 插件开发
function addPlugins2$(jQuery) {
  // 直接给jQuery添加 $.popup()
  jQuery._popup = function(options) {
    console.log(options.title);
  };
  // 给jQery对象添加 $(ele).popup()调用
  jQuery.fn.popup_ = function(options) {
    console.log(options.title);
  };
  // 使用jQuery.extend方法
  jQuery.extend({
    popup___: function(options) {
      console.log(options.title);
    }
  });
  // 使用jQuery.fn.extend方法
  jQuery.fn.extend({
    popup___: function(options) {
      console.log(options.title);
    }
  });
  // 同时添加
  jQuery.popup__ = jQuery.fn.popup__ = function(options) {
    console.log(options.title);
  };
  // 对象级别插件开发
  ;(function($){
    // some code
  })(jQuery)
}
```


```js
let inlinecss = 'sddsff';
  let style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = inlinecss;
  document
    .getElementsByTagName('HEAD')
    .item(0)
    .appendChild(style);

// Popup组件
var V = ''; // 实例 戳id
//默认参数
var defaults = {
  id: '',
  container: document.body, // 默认body位置
  title: '提示', // 默认标题文字
  content: '', // 提示内容
  btns: [], // 按钮列表[{name:'xx',callback:function(){}}]
  other: ''
};
var queue = []; // 实例对象队列

/**
 *[,]
 * opts {title:'title',content:'content',btns:[{name:'xx',callback:function(){}}]}
 */
function Popup(opts) {
  var _this = this;
  try {
    // 特殊参数处理
    if (typeof opts === 'string' || typeof opts === 'number') {
      opts = {
        content: opts,
        btns: [
          {
            name: '好的',
            callback: function() {
              _this.hide;
            }
          }
        ]
      };
    }

    //opts合并到defaults上
    var options = $.extend({}, defaults, opts);

    this.options = options;
    //
    V = 'v' + Math.floor(Math.random() * 10000) + new Date().valueOf();
    this.options.id = 'wz-popup-' + V;
    queue.push(this);

    // 销毁之前的实例
    if (queue.length > 1) {
      for (var i = 0; i < queue.length; i++) {
        queue[i].hide();
      }
    }

    if (queue.length === 1) {
      this.init();
    } else {
      queue = [];
    }
  } catch (error) {
    console.log('配置项错误：' + error);
  }
}
Popup.prototype.init = function() {
  console.log('popup init');
  // appendStyle();
  this.show();
};
function btnHandle(_this) {
  // _this 当前实例
  var $footer = $('.wz-popup-footer');
  $footer.find('a.wz-popup-btn').each(function(i, element) {
    (function(index) {
      $(element).bind('click', function(e) {
        var handle = _this.options.btns[index]['callback'];
        handle.call(handle, _this);
        _this.hide();
        e.preventDefault();
      });
    })(i);
  });
}
Popup.prototype.show = function() {
  var str = '<div class="wz-popup" id="wz-popup-' + V + '">';

  str +=
    '<header class="wz-popup-header wz-popup-center">' +
    this.options.title +
    '</header>';
  str += '<div class="wz-popup-body">' + this.options.content + '</div>';

  str += '<footer class="wz-popup-footer">';
  var width = (100 / this.options.btns.length).toString() + '%';

  var style =
    this.options.btns.length == 1
      ? 'width:100%;color:#0b99ff'
      : 'width:' + width;
  for (var i = 0; i < this.options.btns.length; i++) {
    str +=
      '<a class="wz-popup-btn wz-popup-center" style="' +
      style +
      '">' +
      this.options.btns[i]['name'] +
      '</a>';
  }
  str += '</footer>';

  str += '</div>';
  $(this.options.container).append($(str));
  var $popup = $('#' + this.options.id);
  var marginTop = ($popup.height() / -2).toString() + 'px';

  $popup.css('margin-top', marginTop);
  Style.show();

  $popup.fadeIn(0);
  Mask.show(0.6);
  // btns 绑定事件
  btnHandle(this);
};
Popup.prototype.hide = function() {
  $('#' + this.options.id).fadeOut(120);

  Mask.hide();
  this.remove();
  Style.hide();
};
Popup.prototype.remove = function() {
  $('#' + this.options.id).remove();
  queue.splice(0, 1);
};

var Mask = {
  isShow: false,
  id: 'wz-popup-mask-' + V,
  show(opacity) {
    if (this.isShow) return;
    opacity = opacity ? ' style="opacity:' + opacity + ';"' : '';
    var maskStr =
      '<div id=' + this.id + ' class="wz-popup-mask" ' + opacity + '></div>';
    $('body').prepend(maskStr);
    // Mask 事件阻止
    $('#' + this.id)
      .bind('touchstart', function(e) {
        e.preventDefault();
      })
      .bind('touchmove', function(e) {
        e.preventDefault();
      });
    this.isShow = true;
  },
  hide() {
    this.isShow = false;
    $('#' + this.id)
      .unbind('touchstart')
      .unbind('touchmove')
      .remove();
  }
};
var Style = {
  isShow: false,
  id: 'wz-popup-style-' + V,
  show() {
    if (this.isShow) return;
    var styleStr = '.wz-popup{color:red}';
    var style_ = document.createElement('style');
    $(style_)
      .attr('id', this.id)
      .html(styleStr)
      .appendTo(document.body);
    this.isShow = true;
  },
  hide() {
    this.isShow = false;
    console.log($('#' + this.id), this, V);

    $('#' + this.id).remove();
  }
};
function appendStyle() {
  var style_ = document.createElement('style');
  $(style_)
    .attr('id', 'wz-popup-style-' + V)
    .html('.wz-popup{color:red}')
    .appendTo(document.body);
  console.log(style_);
}

```

```html
    <style>
  .wz-popup-mask {
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 999999;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.6;
  }

  .wz-popup {
    display: none;
    width: 78%;
    padding: 0 1rem;
    transition: all .2s ease-in-out;
    position: fixed;
    z-index: 1000000;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    margin-left: -39%;
    background: #fff;
    color: #555;
    font-size: 14px;
    font-family: -apple-system, Hiragino Sans GB, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .wz-popup .wz-popup-header {
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #e3e3e3;
  }

  .wz-popup .wz-popup-body {
    margin: 25px 15px;
  }

  .wz-popup .wz-popup-footer {
    border-top: 1px solid #e3e3e3;
  }

  .wz-popup .wz-popup-btn {
    outline: 0 none;
    text-decoration: none;
    float: left;
    height: 40px;
    line-height: 40px;
    color: #999;
  }

  .wz-popup-btn+.wz-popup-btn {
    position: relative;
    color: #0b99ff;
  }

  .wz-popup-btn+.wz-popup-btn:before {
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-left: 1px solid #e3e3e3;
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
  }

  .wz-popup .wz-popup-center {
    text-align: center;
  }
</style>s
```