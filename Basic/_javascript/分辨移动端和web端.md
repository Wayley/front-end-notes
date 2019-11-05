```JavaScript
function goMobileSite(){
	  if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
        if(window.location.href.indexOf("?mobile")<0){
            try{
                if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
                	var href = window.location.href.replace("www","m");
                    window.location.href=href;
                }else if(/iPad/i.test(navigator.userAgent)){

                }else{
                }
            }catch(e){}
        }
    }
}
//

	var isAndroid = (/android/gi).test(navigator.appVersion);
	var isIDevice = (/iphone|ipad/gi).test(navigator.appVersion);
	var isTouchPad = (/hp-tablet/gi).test(navigator.appVersion);
//或者navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
```
