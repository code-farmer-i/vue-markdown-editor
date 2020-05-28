import UploadFile from '@/components/upload-file';
import imageToolbar from '@/toolbar/image';
import { filesFilter } from '@/utils/file';
import { image } from '@/utils/constants/command';

const defaultConfig = {
  accept: 'image/*',
  multiple: false,
};

export default {
  components: {
    [UploadFile.name]: UploadFile,
  },
  props: {
    uploadImageConfig: Object,
  },
  computed: {
    uploadImgConfig() {
      return { ...defaultConfig, ...this.uploadImageConfig };
    },
    hasUploadImage() {
      return !this.disabledMenus.includes(`${imageToolbar.name}/upload-image`);
    },
  },
  methods: {
    handleDrop(e) {
      e.preventDefault();

      const files = filesFilter(e.dataTransfer.files, this.uploadImgConfig);

      this.emitUploadImage(e, files);
    },
    emitUploadImage(e, files) {
      if (files.length) {
        this.$emit(
          'upload-image',
          e,
          ({ url, desc }) => {
            this.execCommand(image, { url, desc });
          },
          files
        );
      }
    },
  },
};
