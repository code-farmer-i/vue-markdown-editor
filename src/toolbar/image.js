import { image } from '@/utils/constants/command';
import { filesFilter } from '@/utils/file';

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
      action(editor) {
        editor.uploadConfig = editor.uploadImgConfig;
        editor.$nextTick(async () => {
          const event = await editor.$refs.uploadFile.upload();
          const files = filesFilter(event.target.files, editor.uploadImgConfig);

          editor.emitUploadImage(event, files);
        });
      },
    },
  ],
};
