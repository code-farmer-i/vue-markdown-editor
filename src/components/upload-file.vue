<template>
  <input
    type="file"
    style="display: none"
    :key="key"
    :accept="uploadConfig.accept"
    :multiple="uploadConfig.multiple"
    @input="handleUpload"
    ref="fileInput"
  >
</template>

<script>
export default {
  name: 'v-md-upload-file',
  props: {
    uploadConfig: Object,
  },
  data() {
    return {
      handleUpload() {},
      key: 0,
    };
  },
  methods: {
    async upload() {
      const event = await this.chooseFile();

      return event;
    },
    chooseFile() {
      return new Promise((resolve) => {
        this.handleUpload = (e) => {
          resolve(e);

          // 解决上传同一文件不触发change事件的问题
          this.key++;
        };

        this.$refs.fileInput.click();
      });
    },
  },
};
</script>
