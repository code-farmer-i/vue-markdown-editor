import { h1, h2, h3, h4, h5, h6 } from '@/utils/constants/command';

export default {
  name: 'h',
  text: 'H',
  title: '标题（Ctrl+1~6）',
  menus: [
    {
      name: h1,
      text: '一级标题',
      action(editor) {
        editor.execCommand(h1);
      },
    },
    {
      name: h2,
      text: '二级标题',
      action(editor) {
        editor.execCommand(h2);
      },
    },
    {
      name: h3,
      text: '三级标题',
      action(editor) {
        editor.execCommand(h3);
      },
    },
    {
      name: h4,
      text: '四级标题',
      action(editor) {
        editor.execCommand(h4);
      },
    },
    {
      name: h5,
      text: '五级标题',
      action(editor) {
        editor.execCommand(h5);
      },
    },
    {
      name: h6,
      text: '六级标题',
      action(editor) {
        editor.execCommand(h6);
      },
    },
  ],
};
