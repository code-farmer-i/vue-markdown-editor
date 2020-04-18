import UploadImage from '@/components/upload-image';
import imageToolbar from '@/toolbar/image';

export default {
  components: {
    [UploadImage.name]: UploadImage,
  },
  computed: {
    hasUploadImage() {
      return !this.disabledMenus.includes(`${imageToolbar.name}/upload-image`);
    },
  },
};
