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

### commitlint

`package.json`

```json
"scripts": {
  "commit": "git add . && git-cz",
},
"config": {
  "commitizen": {
    "path": "@commitlint/cz-commitlint"
  }
},
```

`commitlint.config.js`

```js
module.exports = {
  extends: ['@21epub/configs/commitlint-config'],
};
```

上述文件设置好后，提交代码时使用下列命令

```shell
npm run commit
```


若要默认使用`git cz`则需全局安装相关依赖

```shell
npm i -g commitizen  inquirer@8 @commitlint/cz-commitlint
```



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



### stylelint

`.stylelintrc`

```json
{
  "extends": "@21epub/configs/stylelint-config"
}
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