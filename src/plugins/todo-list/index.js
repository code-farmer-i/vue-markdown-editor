import createToolbar from './toolbar';
import commandHandler from './command';
import markdownItTodoList from '@/utils/markdown-it-todo-list';
import './todo-list.css';

export default function createTodoListPlugin({
  name = 'todo-list',
  icon = 'v-md-icon-checkbox',
  text,
  title = '任务列表（Ctrl+Shift+U）',
  color = '#3eaf7c',
} = {}) {
  const toolbar = createToolbar({ commandName: name, title, text, icon });

  const defaultBorderColor = '#d9d9d9';
  const border = (type) => `border-color: ${type === 'todo' ? defaultBorderColor : color}`;
  const background = `background-color: ${color}`;
  const extendMarkdown = function (mdParser) {
    if (mdParser) {
      // extend markdown-it
      mdParser.use(markdownItTodoList, {
        renderCheckbox(type) {
          const checkboxClass = 'v-md-editor__todo-list-checkbox';
          const style = type === 'todo' ? `${border(type)}` : `${border(type)};${background}`;

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
      if (VMdEditor.hotkey) {
        VMdEditor.hotkey({
          modifier: 'ctrlShift',
          key: 'u',
          action(editor) {
            editor.execCommand(name);
          },
        });
      }

      VMdEditor.extendMarkdown(extendMarkdown);
    },
  };
}
