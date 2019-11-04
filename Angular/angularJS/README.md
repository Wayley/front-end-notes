This is the notes collection for [AngularJS]()

## Table of Content

1. [module](#module)

## Contents

<a name="module">

### module

```js
angular.module('uooc.uoocCopyChapter', []).directive('uoocCopyChapter', [
  function(courseService) {
    return {
      /**restrict
       * E 作为元素名使用
       * A 作为属性使用
       * C 作为类名使用
       * M 作为注释使用
       */
      restrict: 'AE',
      /**scope
       * scope = false 默认
       * scope = true
       * scope = {}
       */
      scope: {
        data: '=',
        keepSelection: '@',
        onSelection: '&'
      },
      templateUrl: '/tpl/directive/chapter.copy.html', // 页面模板
      link: function(scope, element, attrs) {}
    };
  }
]);
```
