import { PluginObject } from 'vue';

type install = (VMdEditor: VMdEditor) => void;
type options = {
  [key: string]: any;
  install: install;
};

interface VMdEditor extends PluginObject<any> {
  version: string;
  use: (options: install | options) => VMdEditor;
}

declare const VMdEditor: VMdEditor;

export default VMdEditor;
