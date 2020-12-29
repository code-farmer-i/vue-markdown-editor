# Changelog

### 1.5.6 & 2.1.8

`2020-12-29`

**Features**

- plugin: Add [mermaid](./plugins/mermaid.md) plugin.
- lang: Add [German](./Internationalization.md#config-files) translations.

### 1.5.5 & 2.1.7

`2020-12-07`

**Features**

- props: Add [toolbar-config](./api.md#toolbar-config) prop.

### 1.5.4 & 2.1.6

`2020-12-04`

**Improvement**

- en-US.js: Optimize en-US language pack.

### 1.5.3 & 2.1.5

`2020-11-11`

**Improvement**

- upload-images: Optimized the error when pasting svg and some unsupported types of pictures.

### 1.5.2 & 2.1.4

`2020-11-05`

**Refactor**

- types: Remove types folder.

### 1.5.1 & 2.1.3

`2020-10-05`

**Features**

- theme: Add [codeHighlightExtensionMap](./senior/code-highlight-extension.md) configuration.

**Improvement**

- github-theme: Style optimization.

### 2.1.2

`2020-10-24`

**Bug Fixes**

- base-editor: Fix the problem of base-editor v-model failure.

### 2.1.1

`2020-10-21`

**Bug Fixes**

- toolbar menu: Fix the problem that toolbar menu does not work when clicking.

### 1.5.0 & 2.1.0

`2020-10-15`

**Features**

- props: Add [codemirror-style-reset](./api.md#codemirror-style-reset) prop.

**Improvement**

- codemirror-editor: codemirror is configured by users.

:::danger Important
In order to enable developers to configure the relevant resources of the codemirror editor more flexibly, starting from this version, the codemirror editor will be manually introduced by the user in the project [View Details](./examples/codemirror-editor.md#import)
:::

### 2.0.1

`2020-10-14`

2.x version supports vue3

### 1.4.11

`2020-10-12`

**Features**

- props: Add [default-fullscreen](./api.md#default-fullscreen) prop.
- lang: Add [Korean](./Internationalization.md#config-files) translations.

**Improvement**

- github.css: Optimize the table style of github theme.

### 1.4.10

`2020-08-01`

**Bug Fixes**

- copy code plugin: Fix the issue that copy-code-plugin is invalid when used in the preview component.

### 1.4.9

`2020-07-28`

**Features**

- xss: Support xss rule [extension](./senior/xss-extend.md).

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

- plugin: Add [copy code](./plugins/copy-code.md) plugin.

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

- internationalization: Support [internationalization](./Internationalization.md).
