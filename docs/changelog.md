# Changelog

### 1.4.8

`2020-07-24`

**Bug Fixes**

- copy code plugin: Fix the problem that when the editor is nested under the form tag, clicking the copy code button will cause the page to refresh.

### 1.4.7

`2020-07-22`

**Features**

- plugin: Add [highlight lines](./plugins/highlight-lines.md) plugin.

**Improvement**

- image: Remove the default width and height attributes when inserting pictures.
- image size: Adjust the wildcard for setting the image width and height from { to {{{.

### 1.4.6

`2020-07-21`

**Bug Fixes**

- lang/zh-CN.js: Fix the problem of missing italic and unordered list configuration.

### 1.4.5

`2020-07-13`

**Bug Fixes**

- copy-code-plugin: Fix the problem of copying code failure in some scenarios.

### 1.4.4

`2020-07-09`

**Bug Fixes**

- upload-image: Fix the problem that the uploaded image can not get the file object.

### 1.4.3

`2020-07-01`

**Bug Fixes**

- xss: Fix the problem that the start attribute of the ol tag is filtered by xss.

**Features**

- plugin: Add [copy code](./plugins/copy-code.md) plugin。

### 1.4.2

`2020-06-28`

**Improvement**

- Compatible ie10 and ie11.

### 1.4.1

`2020-06-21`

**Bug Fixes**

- lang: Fix the problem of tip plugin language pack when preview component uses vuepress theme.

### 1.4.0

`2020-06-17`

**Bug Fixes**

- index: fix import xss from index is undefined.

**Features**

- internationalization: Support [internationalization](./Internationalization.md)。
