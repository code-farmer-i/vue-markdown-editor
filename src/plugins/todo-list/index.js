import createToolbar from './toolbar';
import commandHandler from './command';
import markdownItTodoList from '@/utils/markdown-it-todo-list';
import './todo-list.css';

export default function createTodoListPlugin({
  name = 'todo-list',
  icon = 'v-md-icon-checkbox',
  text,
  color = '#3eaf7c',
} = {}) {
  const toolbar = createToolbar({
    commandName: name,
    title: (editor) => `${editor.langConfig.task.toolbar}（Ctrl+Shift+U）`,
    text,
    icon,
  });

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
    install(VMdEditor) {
      if (VMdEditor.name === 'v-md-editor') {
        VMdEditor.command(name, commandHandler);
        VMdEditor.toolbar(name, toolbar);
        VMdEditor.hotkey({
          modifier: 'ctrlShift',
          key: 'u',
          action(editor) {
            editor.execCommand(name);
          },
        });
        VMdEditor.lang.add({
          'zh-CN': {
            task: {
              toolbar: '任务列表',
              placeholder: '任务列表',
            },
          },
          'en-US': {
            task: {
              toolbar: 'Task',
              placeholder: 'Task',
            },
          },
        });
      }

      VMdEditor.extendMarkdown(extendMarkdown);
    },
  };
}
