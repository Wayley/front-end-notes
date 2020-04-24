// XMPP帮助类
// boshService: XMPP服务器BOSH地址
function XMPPHelper(boshService) {
  var _this = this;

  // XMPP服务器BOSH地址
  _this.boshService = boshService;

  // XMPP连接
  _this.connection = null;

  // 当前状态是否连接
  _this.connected = false;

  // 当前登录的JID
  _this.jid = '';

  // 收到消息后的业务回调方法
  _this.messageCallback = null;
  _this.setMessageCallback = function(messageCallback) {
    _this.messageCallback = messageCallback;
  };

  // 接收到<message>
  var onMessage = function(msg) {
    console.log('--- msg ---', msg);

    // 解析出<message>的from、type属性，以及body子元素
    var from = msg.getAttribute('from');
    var type = msg.getAttribute('type');
    var elems = msg.getElementsByTagName('body');
    var json = JSON.parse(HtmlUtil.htmlDecodeByRegExp(elems[0].innerHTML));
    console.log('--- json ---', json);
    json.fromjid = from;

    if (type === 'chat') {
      _this.messageCallback(json);
    }

    return true;
  };

  // 连接状态改变的事件
  var onConnect = function(status) {
    console.log('status: ' + status);
    if (status == Strophe.Status.CONNFAIL) {
      $('#info').html('连接失败！');
    } else if (status == Strophe.Status.AUTHFAIL) {
      $('#info').html('登录失败！');
    } else if (status == Strophe.Status.DISCONNECTED) {
      $('#info').html('连接断开！');
      _this.connected = false;
    } else if (status == Strophe.Status.CONNECTED) {
      $('#info').html('连接成功！');
      _this.connected = true;

      // 当接收到<message>节，调用onMessage回调函数
      _this.connection.addHandler(onMessage, null, 'message', null, null, null);

      // 首先要发送一个<presence>给服务器（initial presence）
      _this.connection.send($pres().tree());
    }
  };

  // 登录
  _this.login = function(jid, password) {
    _this.connection = new Strophe.Connection(_this.boshService);
    _this.connection.connect(jid, password, onConnect);
    _this.jid = jid;
  };

  _this.sendMessage = function(tojid, type, data) {
    if (_this.connected === false) {
      alert('请先登录！！！');
      return;
    }

    var msg = $msg({
      to: tojid,
      from: _this.jid,
      type: 'chat'
    }).c(
      'body',
      null,
      JSON.stringify({
        type: type,
        data: data
      })
    );
    _this.connection.send(msg.tree());
  };
}

// WebRTC帮助类
// xmppHelper：XMPP帮助实例
// localVideo：本地视频显示的DOM
// remoteVideo：远端视频显示的DOM
function WebRTCHelper(xmppHelper, localVideo, remoteVideo) {
  var _this = this;

  // 对方用户
  _this.tojid = null;

  // 创建PeerConnection实例 (参数为null则没有iceserver，即使没有stunserver和turnserver，仍可在局域网下通讯)
  _this.pc = new webkitRTCPeerConnection(null);

  _this.hasBindLocalVideo = false;

  // 发送ICE候选到其他客户端
  _this.pc.onicecandidate = function(event) {
    if (event.candidate !== null && _this.tojid !== null) {
      console.log('----------- onicecandidate ------------');
      console.log('candidate', event.candidate);

      xmppHelper.sendMessage(_this.tojid, 'candidate', event.candidate);
    }
  };

  // 如果检测到媒体流连接到本地，将其绑定到一个video标签上输出
  _this.pc.onaddstream = function(event) {
    console.log('----------- onaddstream ------------');
    remoteVideo.src = URL.createObjectURL(event.stream);
  };

  // 发送offer和answer的函数，发送本地session描述
  var sendOfferFn = function(desc) {
    console.log('----------- sendOfferFn ------------');
    console.log('desc', desc);
    _this.pc.setLocalDescription(desc);

    xmppHelper.sendMessage(_this.tojid, 'offer', desc);
  };
  var sendAnswerFn = function(desc) {
    console.log('----------- sendAnswerFn ------------');
    console.log('desc', desc);
    _this.pc.setLocalDescription(desc);

    xmppHelper.sendMessage(_this.tojid, 'answer', desc);
  };
  var mediaConfig = { video: true };
  // 绑定本地视频流
  var bindLocalVideo = function(callback) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(mediaConfig).then(function(stream) {
        //绑定本地媒体流到video标签用于输出
        localVideo.src = window.URL.createObjectURL(stream);
        //向PeerConnection中加入需要发送的流
        _this.pc.addStream(stream);
        callback();
      });
    }
  };

  // 开始视频通讯
  _this.start = function(tojid) {
    _this.tojid = tojid;

    if (_this.hasBindLocalVideo === false) {
      bindLocalVideo(function() {
        // 发送一个offer信令
        _this.pc.createOffer(sendOfferFn, function(error) {
          console.log('Failure callback: ' + error);
        });
      });
      _this.hasBindLocalVideo = true;
    } else {
      // 发送一个offer信令
      _this.pc.createOffer(sendOfferFn, function(error) {
        console.log('Failure callback: ' + error);
      });
    }
  };

  // 收到对方信息后的处理
  _this.onMessage = function(json) {
    console.log('onMessage: ', json);
    console.log('json.data: ', json.data);

    if (_this.tojid === null) {
      _this.tojid = json.fromjid;
    }

    if (json.type === 'candidate') {
      _this.pc.addIceCandidate(new RTCIceCandidate(json.data));
    } else {
      _this.pc.setRemoteDescription(new RTCSessionDescription(json.data));
      if (json.type === 'offer') {
        if (_this.hasBindLocalVideo === false) {
          bindLocalVideo(function() {
            _this.pc.createAnswer(sendAnswerFn, function(error) {
              console.log('Failure callback: ' + error);
            });
          });
          _this.hasBindLocalVideo = true;
        } else {
          _this.pc.createAnswer(sendAnswerFn, function(error) {
            console.log('Failure callback: ' + error);
          });
        }
      }
    }
  };
}

$(document).ready(function() {
  // 实例化XMPP和WebRTC帮助类
  var xmppHelper = new XMPPHelper('http://localhost:7070/http-bind/');
  var webRTCHelper = new WebRTCHelper(
    xmppHelper,
    document.getElementById('localVideo'),
    document.getElementById('remoteVideo')
  );

  // XMPP收到消息后转给WebRTC
  xmppHelper.setMessageCallback(webRTCHelper.onMessage);

  $('#btn-login').click(function() {
    console.log('jid: ' + $('#input-jid').val());
    console.log('pwd: ' + $('#input-pwd').val());
    xmppHelper.login($('#input-jid').val(), $('#input-pwd').val());
  });

  $('#btn-call').click(function() {
    if ($('#input-contacts').val() == '') {
      alert('请输入目标用户！');
      return;
    }
    tojid = $('#input-contacts').val();

    webRTCHelper.start(tojid);
  });
});

var HtmlUtil = {
  /*1.用浏览器内部转换器实现html转码*/
  htmlEncode: function(html) {
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement('div');
    //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
    temp.textContent != undefined
      ? (temp.textContent = html)
      : (temp.innerText = html);
    //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
    var output = temp.innerHTML;
    temp = null;
    return output;
  },
  /*2.用浏览器内部转换器实现html解码*/
  htmlDecode: function(text) {
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement('div');
    //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
    temp.innerHTML = text;
    //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
  },
  /*3.用正则表达式实现html转码*/
  htmlEncodeByRegExp: function(str) {
    var s = '';
    if (str.length == 0) return '';
    s = str.replace(/&/g, '&amp;');
    s = s.replace(/</g, '&lt;');
    s = s.replace(/>/g, '&gt;');
    s = s.replace(/ /g, '&nbsp;');
    s = s.replace(/\'/g, '&#39;');
    s = s.replace(/\"/g, '&quot;');
    return s;
  },
  /*4.用正则表达式实现html解码*/
  htmlDecodeByRegExp: function(str) {
    var s = '';
    if (str.length == 0) return '';
    s = str.replace(/&amp;/g, '&');
    s = s.replace(/&lt;/g, '<');
    s = s.replace(/&gt;/g, '>');
    s = s.replace(/&nbsp;/g, ' ');
    s = s.replace(/&#39;/g, "'");
    s = s.replace(/&quot;/g, '"');
    return s;
  }
};
