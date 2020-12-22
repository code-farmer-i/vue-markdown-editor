# 国际化

::: warning 注意
1.4.0 版本开始支持国际化
:::

## 介绍

v-md-editor 默认采用中文作为语言，如果需要使用其他语言，可以参考下面的方案。

## 语言切换

通过 use 方法可以切换当前使用的语言，示例如下：

```js
import enUS from '@kangc/v-md-editor/lib/lang/en-US';

VueMarkdownEditor.lang.use('en-US', enUS);
```

## 修改默认文案

通过 add 方法可以实现文案的修改和扩展，示例如下：

```js
VueMarkdownEditor.lang.add({
  'zh-CN': {
    h1: {
      toolbar: '标题1',
    },
  },
});
```

## 配置文件

| 语言     | 文件名 |
| -------- | ------ |
| 简体中文 | zh-CN  |
| 英语     | en-US  |
| 德语     | de-DE  |
| 韩文     | ko-KR  |

在 [这里](https://github.com/code-farmer-i/vue-markdown-editor/tree/dev/src/lang) 查看所有的 i18n 配置文件
