<template>
  <scrollbar>
    <textarea-autosize
      class="v-md-editor-engine"
      :value="value"
      spellcheck="false"
      @click.stop
      @input="handleInput"
      ref="textarea"
    />
  </scrollbar>
</template>

<script>
import Textarea from '@/components/textarea';
import Scrollbar from '@/components/scrollbar/index';

export default {
  name: 'v-md-engine',
  components: {
    [Textarea.name]: Textarea,
    [Scrollbar.name]: Scrollbar,
  },
  props: {
    value: String,
  },
  computed: {
    textareaEl() {
      return this.$refs.textarea.$refs.textarea;
    },
  },
  mounted() {
    this.focus();
  },
  methods: {
    handleInput (val) {
      this.$emit('input', val);
    },
    getRange() {
      return {
        start: this.textareaEl.selectionStart,
        end: this.textareaEl.selectionEnd,
      };
    },
    setRange({ start, end }) {
      this.textareaEl.setSelectionRange(start, end);
    },
    focus() {
      const { textarea } = this.$refs;

      textarea.focus();
    },
  },
};
</script>

<style lang="scss">
.v-md-editor-engine {
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
}
</style>
