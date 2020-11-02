import Lang from '@/utils/lang';

export class VMdParser {
  constructor() {
    this.lang = new Lang();
  }

  defaultMarkdownLoader(text) {
    return text;
  }

  use(optionsOrInstall, opt) {
    if (typeof optionsOrInstall === 'function') {
      optionsOrInstall(this, opt);
    } else {
      optionsOrInstall.install(this, opt);
    }

    return this;
  }

  theme(themeConfig) {
    this.themeConfig = themeConfig;
  }

  extendMarkdown(extender) {
    if (!this.themeConfig) {
      return console.error('Please use theme before using plugins');
    }

    const { markdownParser } = this.themeConfig;

    extender(markdownParser);
  }

  parse(text) {
    const { markdownParser } = this.themeConfig;
    const markdownLoader =
      markdownParser?.render?.bind(markdownParser) || this.defaultMarkdownLoader;

    if (typeof markdownLoader !== 'function' || markdownLoader === this.defaultMarkdownLoader) {
      console.error('Please configure your markdown parser');
    }

    return markdownLoader(text);
  }
}
