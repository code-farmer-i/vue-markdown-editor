import { name as h1 } from '@/command/h1';
import { name as h2 } from '@/command/h2';
import { name as h3 } from '@/command/h3';
import { name as h4 } from '@/command/h4';
import { name as h5 } from '@/command/h5';
import { name as h6 } from '@/command/h6';

export default {
  name: 'h',
  text: 'H',
  title: '标题',
  menus: [
    {
      text: '一级标题',
      action(editor) {
        editor.execCommand(h1);
      },
    },
    {
      text: '二级标题',
      action(editor) {
        editor.execCommand(h2);
      },
    },
    {
      text: '三级标题',
      action(editor) {
        editor.execCommand(h3);
      },
    },
    {
      text: '四级标题',
      action(editor) {
        editor.execCommand(h4);
      },
    },
    {
      text: '五级标题',
      action(editor) {
        editor.execCommand(h5);
      },
    },
    {
      text: '六级标题',
      action(editor) {
        editor.execCommand(h6);
      },
    },
  ],
};
