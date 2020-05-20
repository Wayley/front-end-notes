---
sidebarDepth: 1
sidebar: auto
---

# VuePress

## Environment

VuePress Environment needs `NodeJs`

### Installation

- Global Installation

```bash
$ yarn global add vuepress # or: $ npm install -g vuepress
```

- Inside an Existing Project

```bash
$ yarn add -D vuepress # or: $ npm install -D vuepress
```

### Start Writing

```bash
# 创建项目文件夹
$ mkdir demo && cd demo/
# 初始化
$ yarn init -y # 或者: $ npm init -y
# 创建docs 文件夹作为项目文档根目录
$ mkdir docs
# 新建笔记文件
$ echo '# 这是一级标题' > docs/README.md
# 写作文档(本地预览)
$ npx vuepress dev docs # 或者: $ vuepress dev docs
# 构建静态html文件
$ npx vuepress build docs # 或者: $ vuepress build docs
```

## Use Default Theme Config

### Create Directory

> create a .vuepress directory inside your docs directory. This is where all VuePress-specific files will be placed in.

>

```bash
$ cd docs/ && mkdir .vuepress
```

### Add Config File

> add the config file: `.vuepress/config.js`

```bash
$ cd .vuepress/ && touch config.js
```

`config.js` will export a JavaScript object:

```js
module.export = {
  //
};
```

## Usage in Markdown

### Front Matter

> `front matter` must be the first thing in the Markdown file and must take the form of valid YAML set between triple-dashed lines

```markdown
---
metaTitle: Configuration | Theme
---
```

### Container

> Container takes the form of valid set between three colons

```markdown
::: [type][title]
Content
:::
```

Examples:
::: tip
THIS IS THE CONTENT OF `TIP`
:::

::: warning
THIS IS THE CONTENT OF `WARNING`
:::

::: danger
THIS IS THE CONTENT OF `DANGER`
:::

customize the title of the block
::: tip CUSTOM-TITLE
THIS IS THE CONTENT OF `TIP` WITH `CUSTOM TITLE`
:::

### Badge

Examples:

**Node Version** <Badge text="> 6.9.1" vertical="top"/>

**Node Version** <Badge text="> 6.9.1" vertical="middle"/>

**Node Version** <Badge text="> 6.9.1" vertical="bottom"/>
