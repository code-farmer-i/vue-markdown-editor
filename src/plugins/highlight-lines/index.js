import parser from './parser';
import './highlight-lines.css';

export default function () {
  return {
    install(VMdEditor) {
      VMdEditor.vMdParser.use(parser);
    },
  };
}
