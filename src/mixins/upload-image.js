import UploadImage from '@/components/upload-image';
import uploadToolbar from '@/toolbar/upload-image';

export default {
  components: {
    [UploadImage.name]: UploadImage,
  },
  computed: {
    hasUploadImage() {
      const { leftToolbar, rightToolbar } = this;

      return leftToolbar.includes(uploadToolbar.name) || rightToolbar.includes(uploadToolbar.name);
    },
  },
};
