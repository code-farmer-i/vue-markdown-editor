<template>
  <div>
    <v-md-editor
      v-model="text"
      height="500px"
      autofocus
      toc-nav-position-right
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
      @fullscreen-change="handleFullscreenChange"
      @save="handleSave"
      @copy-code-success="handleCopyCodeSuccess"
      @image-click="handleImageClick"
      ref="editor"
      :toolbar="customToolbar"
      left-toolbar="undo redo | myButton my2ndButton"
    >
      <template #myButton>
        <select name="opts">
          <option value="opt1">
            option 1
          </option>
          <option value="opt2">
            option 2
          </option>
        </select>
      </template>
      <template #my2ndButton>
        <img
          src="https://www.svgrepo.com/show/131974/settings.svg"
          intrinsicsize="512 x 512"
          width="16"
          height="16"
          srcset="https://www.svgrepo.com/show/131974/settings.svg 4x"
          alt="Settings SVG Vector"
        />
      </template>
    </v-md-editor>

    <!-- <v-md-preview-html
      :html="html"
      preview-class="vuepress-markdown-body"
    /> -->
  </div>
</template>

<script>
import text from './text';
import html from './html';

export default {
  data() {
    return {
      text,
      html,
      customToolbar: {
        myButton: {
          title: 'Options',
          slot: true,
          preventNativeClick: false,
        },
        my2ndButton: {
          title: 'Settings',
          slot: true,
          action() {
            console.log('opening the settings..');
          },
        },
      },
    };
  },
  methods: {
    handleImageClick(images, currentIndex) {
      console.log(images, currentIndex);
    },
    handleFullscreenChange(v) {
      console.log(v);
    },
    handleUploadImage (e, insertImage, files) {
      console.log(files);

      insertImage({
        url: '111',
        desc: '111',
      });
    },
    handleSave(v, html) {
      console.log(v, html);
    },
    handleCopyCodeSuccess(code) {
      console.log(code);
    },
  },
};

</script>
