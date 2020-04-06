<template>
  <editor-wrapper
    :height="height"
    :left-toolbar="leftToolbar"
    :right-toolbar="rightToolbar"
    :toolbars="toolbars"
    :fullscreen="fullscreen"
    @toolbar-click="handleToolbarClick"
    @editor-wrapper-click="handleEditorWrapperClick"
  >
    <template slot="editor">
      <slot name="editor">
        <editor-engine @input="handleInput" ref="editorEngine" />
      </slot>
    </template>
    <template slot="preview">
      <slot name="preview" :text="text">
        <markdown-preview
          :text="text"
          :preview-class="previewClass"
          ref="preview"
        />
      </slot>
    </template>
  </editor-wrapper>
</template>

<script>
import EditorEngine from '@/components/editor-engine';
import EditorWrapper from '@/components/wrapper';
import Preview from '@/components/preview';
import { importAll } from '@/utils/util';

const commands = {};
importAll(commands, require.context('@/command', false, /\.(js)$/));

const defaultToolbars = {};
importAll(defaultToolbars, require.context('@/toolbar', false, /\.(js)$/));

export default {
  name: 'vue-markdown-editor',
  components: {
    [EditorEngine.name]: EditorEngine,
    [EditorWrapper.name]: EditorWrapper,
    [Preview.name]: Preview,
  },
  props: {
    height: {
      require: true,
      type: String,
      default: '',
    },
    leftToolbar: {
      type: String,
      default:
        'undo redo clear | bold italic strikethrough quote | h1 h2 h3 h4 h5 h6 | ul ol table | link image code',
    },
    rightToolbar: {
      type: String,
      default: 'fullscreen',
    },
    toolbar: {
      type: Object,
      default: () => ({}),
    },
    previewClass: String,
  },
  data() {
    return {
      text: '',
      toolbars: {},
      fullscreen: false,
    };
  },
  created() {
    this.commands = {};
    const toolbars = {};

    Object.values(defaultToolbars).forEach((toolbar) => {
      const { default: config } = toolbar;
      const { name } = config;

      if (name) toolbars[name] = config;
    });

    Object.values(this.toolbar).forEach((toolbar) => {
      const { name } = toolbar;

      if (name) toolbars[name] = toolbar;
    });

    this.toolbars = toolbars;

    Object.values(commands).forEach((command) => {
      const { name, default: callback } = command;

      this.registerCommand(name, callback);
    });
  },
  methods: {
    toggleFullScreen(fullscreen = !this.fullscreen) {
      this.fullscreen = fullscreen;
      const { 0: html, 1: body } = document.querySelectorAll('html, body');
      const overflow = this.fullscreen ? 'hidden' : null;

      body.style.overflow = overflow;
      html.style.overflow = overflow;
    },
    handleToolbarClick(toolbar) {
      if (toolbar.action && typeof toolbar.action === 'function') {
        toolbar.action(this, toolbar.state);
      }
    },
    registerCommand(name, callback) {
      if (!this.commands[name]) {
        this.commands[name] = callback;
      } else {
        console.error(`The command is already in use: ${name}`);
      }
    },
    execCommand(name) {
      const commandCallBack = this.commands[name];

      if (commandCallBack) {
        if (typeof commandCallBack === 'function') {
          commandCallBack(this);
        } else {
          console.error(
            `The command must be registered as a function: ${name}`
          );
        }
      } else {
        console.error(`Command not registered: ${name}`);
      }
    },
    insertText(opt) {
      if (this.$slots.editor) {
        this.$emit('insert-text', opt);
      } else {
        this.$refs.editorEngine.insertText(opt);
      }
    },
    undo() {
      this.$refs.editorEngine.undo();
    },
    redo() {
      this.$refs.editorEngine.redo();
    },
    clear() {
      this.$refs.editorEngine.clear();
    },
    handleInput(val) {
      this.text = val;
    },
    handleEditorWrapperClick(e) {
      this.focus();
      this.$emit('editor-wrapper-click', e);
    },
    focus() {
      this.$refs.editorEngine.focus();
    },
  },
};
</script>
