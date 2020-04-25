import { image } from '@/utils/constants/command';

export default {
  name: image,
  icon: 'v-md-icon-img',
  title: '插入图片',
  menus: [
    {
      name: 'image-link',
      text: '添加图片链接',
      action(editor) {
        editor.execCommand(image);
      },
    },
    {
      name: 'upload-image',
      text: '上传本地图片',
      async action(editor) {
        const event = await editor.$refs.uploadImage.upload();

        editor.$emit('upload-image', event, ({ url, desc }) => {
          editor.execCommand(image, { url, desc });
        });
      },
    },
  ],
};
