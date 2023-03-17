# @21epub/configs

[![NPM version](https://img.shields.io/npm/v/@21epub/configs.svg?style=flat)](https://www.npmjs.com/package/@21epub/configs)
[![NPM downloads](http://img.shields.io/npm/dm/@21epub/configs.svg?style=flat)](https://www.npmjs.com/package/@21epub/configs)

# 简介

## Epub项目通用配置



## 安装

```sh
npm install --save-dev @21epub/configs
```


## 使用


### eslint

`.eslintrc.js`

```js
module.exports = {
    extends: require.resolve("@21epub/configs/eslint-config"),
  	// 由于使用了eslint-config-standard-with-typescript插件对ts的支持
  	// 部分规则需要tsconfig.json配置,需要在这里引入tsconfig.json文件
    parserOptions: {
      project: ['./tsconfig.json'],
    },
};
```

`tsconfig.json`

```json
// tsconfig.json 文件中，也需要在include中引入.eslintrc.js文件
{
  "include": [".eslintrc.js"]
}
```



### prettier

`.prettierrc`

```js
'@21epub/configs/prettier-config';
```

`.prettierrc.js`

```js
module.exports = {
  ...require("@21epub/configs/prettier-config"),
};
```



### tsconfig

`tsconfig.json`

```json
{
  "extends": "@21epub/configs/tsconfig",
}
```



### types

`types.d.ts`

```ts
/// <reference types="@21epub/configs/types" />
```