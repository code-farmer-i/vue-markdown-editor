import createToolbar from './toolbar';
import commandHandler from './command';
import parser from './parser';

export default function createTodoListPlugin({
  name = 'todo-list',
  icon = 'v-md-icon-checkbox',
  text,
  color,
} = {}) {
  const toolbar = createToolbar({
    commandName: name,
    title: (editor) => `${editor.langConfig.task.toolbar}（Ctrl+Shift+U）`,
    text,
    icon,
  });

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

      VMdEditor.vMdParser.use(parser, {
        color,
      });
    },
  };
}
