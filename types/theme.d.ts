export interface Theme {
  previewClass: string;

  configure: (callback: () => void) => void;

  markdownParser: {
    [key: string]: any;
    render: (mdStr: string) => string;
  };
}
