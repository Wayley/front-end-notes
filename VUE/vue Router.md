```vue
<!--router-->
  {
    path: '/a/b/b:id',
    name: 'a.b.c',
    meta: {
      title: 'xxxx'
    },
    component: resolve =>
      require(['./xx/xx.vue'], resolve)
  },
  
  
  
<!--打开本页面-->
this.$router.push({
    name:'a.b.a',
    params:{
        id:123
    }
})

<!--打开新页面-->
let routeData = this.$router.resolve({
    name: 'a.b.a',
    params: {
      id:123
    }
});
window.open(routeData.href, '_black');
```