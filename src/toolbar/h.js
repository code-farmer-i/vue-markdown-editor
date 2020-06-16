import { h1, h2, h3, h4, h5, h6 } from '@/utils/constants/command';

export default {
  name: 'h',
  text: 'H',
  title: (editor) => `${editor.langConfig.h.toolbar}（Ctrl+1~6）`,
  menus: [
    {
      name: h1,
      text: (editor) => editor.langConfig.h1.toolbar,
      action(editor) {
        editor.execCommand(h1);
      },
    },
    {
      name: h2,
      text: (editor) => editor.langConfig.h2.toolbar,
      action(editor) {
        editor.execCommand(h2);
      },
    },
    {
      name: h3,
      text: (editor) => editor.langConfig.h3.toolbar,
      action(editor) {
        editor.execCommand(h3);
      },
    },
    {
      name: h4,
      text: (editor) => editor.langConfig.h4.toolbar,
      action(editor) {
        editor.execCommand(h4);
      },
    },
    {
      name: h5,
      text: (editor) => editor.langConfig.h5.toolbar,
      action(editor) {
        editor.execCommand(h5);
      },
    },
    {
      name: h6,
      text: (editor) => editor.langConfig.h6.toolbar,
      action(editor) {
        editor.execCommand(h6);
      },
    },
  ],
};
