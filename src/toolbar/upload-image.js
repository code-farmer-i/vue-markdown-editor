import { name } from '@/command/image';

export default {
  name: 'uploadImage',
  icon: 'v-md-icon-upload-img',
  title: '添加本地图片',
  async action(editor) {
    const event = await editor.$refs.uploadImage.upload();

    editor.$emit('upload-image', event, ({ url, desc }) => {
      editor.execCommand(name, { url, desc });
    });
  },
};
