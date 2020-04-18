import createToolbar from './toolbar';
import commandHandler from './command';
import markdownItTodoList from '@/utils/markdown-it-todo-list';
import './todo-list';

export default function createEmojiPlugin({
  name = 'todo-list',
  icon = 'v-md-icon-emoji',
  text,
  title = '插入任务列表',
  color = '#3eaf7c',
} = {}) {
  const toolbar = createToolbar({ commandName: name, title, text, icon });

  const border = `border-color: ${color}`;
  const background = `background-color: ${color}`;
  const extendMarkdown = function (mdParser) {
    if (mdParser) {
      // extend markdown-it
      mdParser.use(markdownItTodoList, {
        renderCheckbox(type) {
          const checkboxClass = 'v-md-editor__todo-list-checkbox';
          const style = type === 'todo' ? `${border}` : `${border};${background}`;

          return `<span class="${checkboxClass}${
            type === 'todo' ? '' : ` ${checkboxClass}--checked`
          }" style="${style}"></span>`;
        },
      });
    }
  };

  return {
    extendMarkdown,
    install(VMdEditor) {
      if (VMdEditor.command) VMdEditor.command(name, commandHandler);
      if (VMdEditor.toolbar) VMdEditor.toolbar(name, toolbar);

      VMdEditor.extendMarkdown(extendMarkdown);
    },
  };
}
