# Changelog

::: warning
Except for major bugs, the 1.x version based on vue2.0 will no longer be iterated synchronously starting from version 1.7.6.
:::

### 2.3.13

`2021-12-28`

**Features**

- editor: Add [default-show-toc](./api.md#default-show-toc) prop.

### 2.3.10

`2021-09-09`

**Improvement**

- base-editor: Optimized the problem that the trigger area for dragging and uploading images is too small when there is no content.

### 2.3.9

`2021-08-30`

**Features**

- lang: Added [zh-TW](./Internationalization.md#config-files) language pack ([#78](https://github.com/code-farmer-i/vue-markdown-editor/pull/78)).
- lang: Added [ru-RU](./Internationalization.md#config-files) language pack ([#107](https://github.com/code-farmer-i/vue-markdown-editor/pull/107)).
- editor: Added [blur](./api.md#blur) event ([#109](https://github.com/code-farmer-i/vue-markdown-editor/pull/109)).

### 2.3.8

`2021-08-16`

**Features**

- editor: add [before-preview-change](./api.md#before-preview-change) prop.

### 1.7.7 & 2.3.7

`2021-07-22`

**Breaking Change**

- image-preview: Remove the picture preview.

**Features**

- editor: Added [image-click](./api.md#image-click) click event.

### 2.3.6

`2021-07-19`

**Improvement**

- image-preview: Optimize the picture preview experience, and compatible with mobile terminals.

### 1.7.6 & 2.3.5

`2021-06-10`

**Features**

- editor: Add [toc-nav-position-right](./api.md#toc-nav-position-right) prop.

**Bug Fixes**

- editor: Fix the problem that the upload-image event is triggered twice when pasting an image.

### 1.7.5

`2021-06-07`

**Bug Fixes**

- plugin: Fix the problem that the plug fails when vue is import from cdn.

### 1.7.4 & 2.3.4

`2021-06-04`

**Features**

- editor: Add [tab-size](./api.md#tab-size) attribute.

**Improvement**

- codemirror-editor: Add and import resources to the editor to optimize the editing experience.

### 1.7.3 & 2.3.3

`2021-06-03`

**Features**

- plugin: Add [align](./plugins/align.md) plugin.

**Bug Fixes**

- upload-image: Fix the issue that the insertImage callback in the upload image event is invalid to set the image width and height.

**Improvement**

- theme: vuepress theme style optimization.

### 1.7.2 & 2.3.2

`2021-06-01`

**Improvement**

- editor: Optimize the editor input experience.

### 1.7.1 & 2.3.1

`2021-05-28`

**Bug Fixes**

-style: Fix the problem of missing icons for preview and preview-html components.

### 1.7.0 & 2.3.0

`2021-05-28`

**Breaking Change**

- theme: The code highlighting library highlight.js for the github theme and Prismjs, the code highlighting library for the vuepress theme, are separated from the theme and need to be passed in when the user uses it. For specific changes, please check the documentation of the corresponding topic.

### 1.6.5 & 2.2.6

`2021-05-21`

**Bug Fixes**

- theme: Fix the problem that the vuepress theme lacks tip plug style.

**Improvement**

- theme: Optimize the vuepress and github theme style.

### 1.6.4 & 2.2.5

`2021-05-19`

**Features**

- component: add [preview-html](./examples/preview-html-demo.md) component.

**Improvement**

- theme: vuepress theme style optimization.

### 1.6.3 & 2.2.4

`2021-05-10`

**Improvement**

- theme: Vuepress theme and github theme style optimization.

### 1.6.2 & 2.2.3

`2021-04-30`

**Improvement**

- theme: Vuepress theme and github theme style optimization.

### 1.6.1 & 2.2.2

`2021-03-02`

**Bug Fixes**

- mermaid-plugin: Fix the problem that the plug-in is used in the preview component.

### 2.2.1

`2020-02-03`

**Bug Fixes**

- tip-plugin: Fix copywriting.

### 1.6.0 & 2.2.0

`2020-01-12`

**Features**

- ssr: Support ssr.

**Refactor**

- theme, plugins: The js of the theme and the plugin are separated from the style.

::: warning
Starting from this version, the styles of themes and plug-ins will be separated from js. When using themes and plug-ins, you need to import the corresponding style files at the same time. Refer to the corresponding theme or plug-in documentation for details.
:::

### 1.5.7 & 2.1.9

`2020-01-07`

**Features**

- plugin: Add new details type to [tip](./plugins/tip.md) plugin.
- lang: Add [Spanish](./Internationalization.md#config-files) translation.

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
