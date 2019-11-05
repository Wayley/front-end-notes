This is the notes collection for Basic Notes Of [Storage]() including cookie/session/sessionStorage/localStorage and so on.

## How to use it

Copy the repo into your disk first

```bash
$ git clone git@github.com:Wayley/front-end-notes.git
```

Then get into the [Basic Storage Notes folder](https://github.com/Wayley/front-end-notes/tree/master/Basic/_storage)

```bash
$ cd Basic/_storage
```

## Table of Contents

1. [Cookie](#cookie)
2. [Session]](#session)
3. [SessionStorage](#sessionStorage)
4. [LocalStorage](#localStorage)

## Contents

<a name="cookie">

### Cookie

- 创建 cookie

  ```js
  function setCookie(name, value, hours, path) {
    var name = escape(name);
    var value = escape(value);
    var expires = new Date();
    expires.setTime(expires.getTime() + hours * 60 * 60 * 1000);
    path = path == '' ? '' : ';path=' + path;
    _expires =
      typeof hours == 'string' ? '' : ';expires=' + expires.toUTCString(); //toUTCString or toGMTString
    document.cookie = name + '=' + value + _expires + path;
  }
  ```

- 获取 cookie

  ```js
  function getCookie(name) {
    var name = name + '=';
    var cookieArr = document.cookie.split(';');
    for (var i = 0; i < cookieArr.length; i++) {
      var cookie = cookieArr[i].trim();
      if (cookie.indexOf(name) == 0)
        return cookie.substring(name.length, cookie.length);
    }
    return '';
  }
  ```

<a name="session">

### Session

> 服务器收到请求需要创建 session 对象时，会先检查客户端请求中是否包含 sessionId;
> 如果有则服务器根据 id 返回对应 session 对象；
> 如果没有则创建新的 session 对象，并把 sessionId 在此次响应中返回给客户端。
> 客户端通常会使用 cookie 方式存储 sessionId，在交互中浏览器按照规则将 sessionId 发送给服务端。
> 如果用户禁用 cookie，则要使用 URL 重写，可以通过 response.encodeURL(url)实现。

### webStorage(sessionStorage / localStorage)

> webStorage 提供两种 API: sessionStorage 和 localStorage

```js
storage.setItem(keyName, keyValue); // 创建
storage.getItem(keyName); // 获取

storage.length; //
storage.removeItem(keyName); // 删除
var keyName = storage.key(key); // key 0 1 2...
storage.clear();
```

<a name="sessionStorage">

#### SessionStorage

> 会话存储：在会话周期(进入网址到关闭浏览器期间)将数据保存在 session 对象中；属于临时存储。

<a name="localStorage">

#### LocalStorage

> 本地存储：将数据保存在客户端的硬件设施上(一般指硬盘)；即使浏览器关闭了，数据仍然存在，下次打开浏览器访问网站时仍可继续使用；属于永久存储。
