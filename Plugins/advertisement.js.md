```js
/**
 *
 * @authors wz (hb_wangzheng@163.com)
 * @date    2017-04-16 21:36:44
 * @version 0.0.1
 */
;
(function(global, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(factory);
    } else {
        global.Advertisement = factory();
    }
}(this, function() {
    'use strict';

    function Advertisement(obj) {
        var options = obj || {};
        var self = this;

        var jsSrc = self.getCurrentSrc().src;
        var param = self.toQueryParams(jsSrc).param;
        //默认
        var defaults = {
            url: 'http://www.5ityx.com:8000/jsGetAdinfo',
            data: {
                customerId: param.customerId || '10003',
                adType: param.adType || '33',
            },
            callback: 'callbackName', //和后台约定好的回调函数名称
            time: 3003,
            success: function(res) {
                if (res.bizCode == 0) {
                    self.createImg({
                        imgUrl: res.adInfoList[0].pictureUrl,
                        targetElement: 'body',
                        aHerf: res.adInfoList[0].skipLink
                    })
                }
            }
        };
        for (var key in defaults) {
            if (typeof options[key] === 'undefined') {
                options[key] = defaults[key];
            }
        };
        this.option = options;
    };
    //初始化
    Advertisement.prototype.init = function(option) {
        var obj = option || this.option;
        if (this.isMobile()) {
            this.getAdInfo(obj);
        }
    };
    //获取用户当前引用js的script对象的src并返回
    Advertisement.prototype.getCurrentSrc = function() {
        var scripts = document.getElementsByTagName('script'), //获所有script标签
            currentScript = scripts[scripts.length - 1]; //获取当前加载到的script标签
        return currentScript;
    };
    //将url的参数格式化成对象
    Advertisement.prototype.toQueryParams = function(url) {
        var obj = {
            herf: '',
            protocol: '',
            pathName: '',
            search: '',
            port: '',
            host: '',
            hostName: '',
            param: '',
            hash: ''
        };
        if (!url) {
            return obj;
        }
        obj.herf = url;

        if (url.split('://').length >= 2) {
            obj.protocol = url.split('://')[0]; //获取protocol
        }
        var a = url.split('://')[url.split('://').length - 1] //获取protocol后面的

        if (url.split('?').length >= 2) {
            obj.search = a.split('?')[1] //获取search
        }
        var b = url.replace(obj.protocol + '://', '').replace('?' + obj.search, ''); //获取 protocol之后 search之前 的
        obj.host = b.split('/')[0]; //获取host
        obj.pathName = b.replace(obj.host, ''); //获取pathName
        obj.hostName = obj.host.split(':')[0]; //获取hostName
        obj.port = obj.host.replace(obj.hostName + ':', ''); //获取port
        var c = obj.search.split('#')[0];
        var d = obj.search.replace(c + '#', '')
        obj.param = toObj(c); //获取param
        obj.hash = toObj(d); //获取hash
        //将a=1&b=2&c=3的字符串转换为对象
        function toObj(str) {
            var strArr = str.split('&');
            var obj = {};
            if (!str) {
                return {};
            }
            for (var i = 0, len = strArr.length; i < len; i++) {
                var pair = strArr[i];
                if ((pair = pair.split('='))[0]) {
                    var key = decodeURIComponent(pair.shift());
                    var value = pair.length > 1 ? pair.join('=') : pair[0];
                    if (value != undefined) {
                        value = decodeURIComponent(value);
                    }
                    if (key in obj) {
                        if (obj[key].constructor != Array) {
                            obj[key] = [obj[key]];
                        }
                        obj[key].push(value);
                    } else {
                        obj[key] = value;
                    }
                }
            };
            return obj;
        }
        return obj;
    };
    //参数格式化成url的形式
    Advertisement.prototype.formatParams = function(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        return arr.join('&');
    };
    //检测是否是移动设备
    Advertisement.prototype.isMobile = function() {
        if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
            return true;
        } else {
            return false;
        }
    };
    //跨域请求数据
    Advertisement.prototype.getAdInfo = function(ob) {
        var obj = ob || this.option;
        if (!obj.url || !obj.callback) {
            throw new Error("请输入正确的参数"); //url 和 回调函数名 必需
        }
        //创建 script 标签并加入到页面中
        var callbackName = ('xxxpx_psjffrhj_dfhfj_DSPdfh_hfsdwc_dvdvb_uipbn' + Math.random()).replace(".", "");
        var oHead = document.getElementsByTagName('head')[0];
        // obj.data = obj.data || {};
        obj.data[obj.callback] = callbackName;
        var params = this.formatParams(obj.data);
        var oS = document.createElement('script');
        oHead.appendChild(oS);

        //创建jsonp回调函数
        window[callbackName] = function(json) {
            oHead.removeChild(oS);
            clearTimeout(oS.timer);
            window[callbackName] = null;
            obj.success && obj.success(json);
        };

        //发送请求
        oS.src = obj.url + '?' + params;

        //超时处理
        if (obj.time) {
            oS.timer = setTimeout(function() {
                window[callbackName] = null;
                oHead.removeChild(oS);
                obj.error && obj.error({ message: "请求超时" });
            }, obj.time);
        }
    };
    //创建标签并原生绑定tap事件
    Advertisement.prototype.createImg = function(option) {
        var self = this;
        var targetElement = document.querySelector(option.targetElement);
        var imgA = document.createElement('a');
        var img = document.createElement('img');
        imgA.href = option.aHerf;
        imgA.appendChild(img);
        img.src = option.imgUrl;
        img.style.cssText = "width:100%"
        imgA.style.cssText = "display:block !important;z-index:2147483647;text-align:center;border:1px solid #ccc;position:fixed;bottom:5px;margin:10px;";
        targetElement.appendChild(imgA);
        //insertAfter(imgA, header1); // 因为js没有直接追加到指定元素后面的方法 所以要自己创建一个方法
        //在指定元素后插入节点
        // function insertAfter(newElement, targetElement) {
        //     var parent = targetElement.parentNode; // 找到指定元素的父节点
        //     if (parent.lastChild == targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法
        //         parent.appendChild(newElement, targetElement);
        //     } else {
        //         parent.insertBefore(newElement, targetElement.nextSibling);
        //     };
        // };
        //使用HTMLElement来拓展原型，添加原生tap事件
        if (!HTMLElement.prototype.addTapEvent) {
            HTMLElement.prototype.addTapEvent = function(callback) {
                var tapStartTime = 0,
                    tapEndTime = 0,
                    tapTime = 1000, //默认tap等待时间，在此事件下松开可触发方法  手指按下时间过长不视为点击
                    tapScollHeight = 20, //手指偏移量（水平或垂直）超过20px则判定为滚动，取消执行tap事件（根据chrome浏览器默认的判断取消点击的移动量)
                    tapStartClientX = 0,
                    tapStartClientY = 0,
                    tapEndClientX = 0,
                    tapEndClientY = 0,
                    cancleClick = false;
                this.addEventListener('touchstart', function() {
                    tapStartTime = event.timeStamp;
                    var touch = event.changedTouches[0];
                    tapStartClientX = touch.clientX;
                    tapStartClientY = touch.clientY;
                    cancleClick = false;
                })
                this.addEventListener('touchmove', function() {
                    var touch = event.changedTouches[0];
                    tapEndClientX = touch.clientX;
                    tapEndClientY = touch.clientY;
                    if ((Math.abs(tapEndClientX - tapStartClientX) > tapScollHeight) || (Math.abs(tapEndClientY - tapStartClientY) > tapScollHeight)) {
                        cancleClick = true;
                    }
                })
                this.addEventListener('touchend', function() {
                    tapEndTime = event.timeStamp;
                    if (!cancleClick && (tapEndTime - tapStartTime) <= tapTime) {
                        callback();
                    }
                })
            }
        }
        //绑定tap事件
        imgA.addTapEvent(function() {
            self.getAdInfo({
                url: 'http://www.5ityx.com:8000/jsNotifyOnClick',
                data: self.option.data,
                callback: 'callbackName', //和后台约定好的回调函数名称
                time: self.option.time,
                success: function(res) {
                    //
                }
            });
        });
    };
    return Advertisement;
}));
//创建实例
(function() {
    var ad = new Advertisement();
    ad.init();
}());
```