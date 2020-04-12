import MarkdownIt from 'markdown-it';

export default function ({ hasLang = () => true, highlight = (str) => str, codeBlockClass }) {
  const markdownItInstance = new MarkdownIt();
  const getCodeBlockClass = (lang) => (codeBlockClass ? codeBlockClass(lang) : `language-${lang}`);

  markdownItInstance.set({
    html: true,
    breaks: true,
    linkify: false,
    typographer: true,
    highlight(str, lang) {
      let res = markdownItInstance.utils.escapeHtml(str);

      if (lang) {
        if (hasLang(lang)) {
          res = highlight(str, lang);
        } else {
          console.error(`markdown highlight code: missing the language pack：${lang}`);
        }
      }

      return `<pre class="${getCodeBlockClass(lang)}"><code>${res}</code></pre>`;
    },
  });

  return markdownItInstance;
}
