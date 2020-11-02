import markdownItTodoList from '@/utils/markdown-it-todo-list';

export default function (vMdParser, options) {
  vMdParser.extendMarkdown((mdParser) => {
    const color = options?.color || '#3eaf7c';
    const defaultBorderColor = '#d9d9d9';
    const border = (type) => `border-color: ${type === 'todo' ? defaultBorderColor : color}`;
    const background = `background-color: ${color}`;

    mdParser.use(markdownItTodoList, {
      renderCheckbox(type) {
        const checkboxClass = 'v-md-editor__todo-list-checkbox';
        const style = type === 'todo' ? `${border(type)}` : `${border(type)};${background}`;

        return `<span class="${checkboxClass}${
          type === 'todo' ? '' : ` ${checkboxClass}--checked`
        }" style="${style}"></span>`;
      },
    });
  });
}
