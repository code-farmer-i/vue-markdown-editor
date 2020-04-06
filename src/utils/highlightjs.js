import hljs from 'highlight.js/lib/highlight.js';
import jsLanguage from 'highlight.js/lib/languages/javascript';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import cssLanguage from 'highlight.js/lib/languages/css';

// js
hljs.registerLanguage('js', jsLanguage);
hljs.registerLanguage('javascript', jsLanguage);

// xml, html
hljs.registerLanguage('html', xmlLanguage);
hljs.registerLanguage('xml', xmlLanguage);

// css
hljs.registerLanguage('css', cssLanguage);

export default hljs;
