---
title: npm使用
date: 2021-09-15 11:05:03
tags: [npm]
---

## npm 使用

<!-- more -->

### 使用淘宝 npm 镜像

```js
 npm install --registry=http://registry.npmmirror.com
```

### 更换淘宝源

```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
```

### 更换 npm 源

```js
npm config set registry=http://registry.npmjs.org
pnpm install
```


### 使用.npmrc来控制安装源

根目录下新建一个.npmrc文件，内容如下即可

```js
registry=https://registry.npmmirror.com
```
