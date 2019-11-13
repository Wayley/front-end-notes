React 的简单使用

## Contents

- 引入

```js
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
// or in product env
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
```

- 创建 DOM

```html
<body>
  <div id="root"></div>
</body>
```

> 不使用 JSX

```js
ReactDOM.render(
  React.createElement(
    "button",
    {
      onClick: () => console.log("button按钮被点击了"),
      className: "btn"
    },
    "click me"
  ),
  document.getElementById("root")
);
```

> 使用 JSX

```html
<!-- 引入babel来处理JSX的语法 -->
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<!-- 设置script标签的type属性为 type="text/babel" -->
<script type="text/babel">
  function Square(props) {
    return (
      <button className="btn" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  ReactDOM.render(
    <Square
      className="btn"
      value="Click Me"
      onClick={() => {
        console.log("You Clicked Me ");
      }}
    />,
    document.getElementById("root")
  );
</script>
```
