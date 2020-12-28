import hljs from 'highlight.js/lib/core.js';
import jsLanguage from 'highlight.js/lib/languages/javascript';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import cssLanguage from 'highlight.js/lib/languages/css';

// language js
hljs.registerLanguage('js', jsLanguage);
hljs.registerLanguage('javascript', jsLanguage);

// language xml, html
hljs.registerLanguage('html', xmlLanguage);
hljs.registerLanguage('xml', xmlLanguage);

// language css
hljs.registerLanguage('css', cssLanguage);

export default hljs;
