<template>
  <input
    type="file"
    style="display: none"
    :key="key"
    :accept="uploadImgConfig.accept"
    @input="handleUploadImage"
    ref="fileInput"
  />
</template>

<script>
const defaultConfig = {
  accept: 'image/*',
};

export default {
  name: 'v-md-upload-img',
  props: {
    uploadImageConfig: Object,
  },
  data () {
    return {
      handleUploadImage() {},
      key: 0,
    };
  },
  computed: {
    uploadImgConfig() {
      return { ...defaultConfig, ...this.uploadImageConfig };
    },
  },
  methods: {
    async upload() {
      const event = await this.chooseImage();

      return event;
    },
    chooseImage() {
      return new Promise(resolve => {
        this.handleUploadImage = (e) => {
          resolve(e);

          // 解决上传同一张图片不触发change事件的问题
          this.key++;
        };

        this.$refs.fileInput.click();
      });
    },
  },
};
</script>
