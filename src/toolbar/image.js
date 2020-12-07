import { image } from '@/utils/constants/command';
import { filesFilter } from '@/utils/file';

export default {
  name: image,
  icon: 'v-md-icon-img',
  title: (editor) => editor.langConfig.image.toolbar,
  menus: [
    {
      name: 'image-link',
      text: (editor) => editor.langConfig.imageLink.toolbar,
      action(editor, config) {
        if (config?.insertWithSize) {
          editor.execCommand(image, { width: 'auto', height: 'auto' });
        } else {
          editor.execCommand(image);
        }
      },
    },
    {
      name: 'upload-image',
      text: (editor) => editor.langConfig.uploadImage.toolbar,
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
