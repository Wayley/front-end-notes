<a name="special_effects">

### css 一些特效实现

- ♥ 心形样式

  ```css
  .heart {
    width: 10px;
    height: 10px;
    position: fixed;
    background: #f00;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
  }

  .heart:after,
  .heart:before {
    content: "";
    width: inherit;
    height: inherit;
    background: inherit;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    position: fixed;
  }

  .heart:after {
    top: -5px;
  }

  .heart:before {
    left: -5px;
  }
  ```

- 纯 css 控制页面滚动进度条

  ```css
  body {
    background-image: linear-gradient(to right top, #ffcc00 50%, #eee 50%);
    background-repeat: no-repeat;
    background-size: 100% calc(100% - 100vh + 3px); /* 3px为滚动条高度 */
  }
  body::after {
    content: "";
    position: fixed;
    top: 3px; /* 滚动条高度 */
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: -1;
  }
  ```

- 宽度百分比时 高和宽一样大小

  ```html
  <div class="container clearfix">
    <div class="left-part">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem odit
      accusantium omnis ullam, repellat similique nostrum necessitatibus
      voluptatem iure autem facilis doloremque laborum, magnam dignissimos
      veniam mollitia eligendi deserunt quam!
    </div>
    <div class="right-part"><div class="icon"></div></div>
  </div>
  ```

  ```css
  * {
    margin: 0;
    padding: 0;
  }
  .clearfix {
    overflow: hidden;
    _zoom: 1;
  }
  .container {
    font-size: 24px;
    color: #fff;
  }
  .left-part {
    float: left;
    width: 60%;
    background: #ccc;
  }
  .right-part {
    float: right;
    width: 40%;
  }
  .icon {
    width: 100%;
    background: #ccc;
    border-radius: 100%;
  }
  .icon::before {
    content: "";
    padding-top: 100%;
    display: block;
  }
  ```

- TODO:
