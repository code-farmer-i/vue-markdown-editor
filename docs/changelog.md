# 更新日志

### 1.2.11

`2020-05-01`

**Improvement**

- license: 新增 MIT 开源协议
- types：新增 d.ts 文件

### 1.2.10

`2020-04-27`

**Bug Fixes**

- anchor：修复标题为中文时锚点失效的问题。

**Improvement**

- anchor：优化锚点生成规则，保证在标题内容相同时锚点的唯一性。

### 1.2.9

`2020-04-27`

**Improvement**

- editor：ul、ol 列表换行时自动插入前缀。

### 1.2.8

`2020-04-25`

**Features**

- hotkeys：新增部分常用功能快捷键。

### 1.2.7

`2020-04-24`

**Features**

- plugin：新增 [代码行号](/vue-markdown-editor/plugins/line-number) 插件。

### 1.2.6

`2020-04-23`

**Improvement**

- 内部代码优化。

### 1.2.5

`2020-04-22`

**Features**

- toc：支持 [\[toc]] 插入目录。
- toolbar：新增[目录导航](/vue-markdown-editor/senior/toc)功能。

**Improvement**

- tooltip：增加显示隐藏过渡效果。

### 1.2.4

`2020-04-21`

**Features**

- props：新增 mode 属性。可选值为 `editable`（编辑模式）、`preview`（预览模式）

**Improvement**

- 同步滚动：同步滚动添加平滑效果，增强用户体验

### 1.2.3

`2020-04-20`

**Bug Fixes**

- markdown-line-number-plugin：解决 markdown-it 插件渲染的问题

### 1.2.2

`2020-04-20`

**Features**

- sync-scroll：新增同步滚动

### 1.2.1

`2020-04-19`

**Improvement**

- textarea：undo redo 优化

### 1.2.0

`2020-04-18`

**Bug Fixes**

- insertText: 修复 document.execCommand('insertText') 在 Firefox 上不兼容的问题。

**Features**

- image: 新增 image 可自定义图片大小
- plugin：新增 [katex](/vue-markdown-editor/plugins/katex) 插件
- plugin：新增 [todo-list](/vue-markdown-editor/plugins/todo-list) 插件

### 1.1.0

`2020-04-18`

**Features**

- plugin: 新增 [emoji](/vue-markdown-editor/plugins/emoji) 插件
- props：新增 disabled-menus 属性
- toolbar：新增 [menus](/vue-markdown-editor/senior/toolbar) 属性

**Improvement**

- tooltip：新增 tooltip 优化交互体验

### 1.0.13

`2020-04-15`

**Bug Fixes**

- theme: 解决使用 cdn 引入时主题失效的问题

**Improvement**

- xss：过滤规则优化
