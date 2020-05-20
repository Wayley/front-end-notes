# CSS

> CSS is an art

## compatibility

> we will deal with different compatibilities when we need to accommodate various browsers

## special effects

> Some really cool special effects will be made by CSS

## skeleton

> Skeleton Screens

```html
<div class="app">
  <div class="activity-skeleton">
    <div class="skeleton-row" style="width:30%"></div>
    <div class="skeleton-row" style="width:50%"></div>
    <div class="skeleton-row" style="width:70%"></div>
    <div class="skeleton-row" style="width:80%"></div>
  </div>
</div>
```

```css
.app {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
.activity-skeleton {
  padding: 20px;
  background-color: #fff;
  border-radius: 0 0 0.2rem 0.2rem;
  overflow: hidden;
}
.skeleton-row {
  height: 14px;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #fff, #edeff1, #fff);
  background-size: 480px 480px;
  animation: skeleton-stripes 0.6s linear infinite;
}
/* @keyframes @-webkit-keyframes @-moz-keyframes @-o-keyframes */
@keyframes skeleton-stripes {
  0% {
    background-position: 0 0;
  }
  to {
    background-position: 480px 0;
  }
}
```
