import mdEmojiPlugin from 'markdown-it-emoji/light';
import parserCreator from './parser-creator';

export default parserCreator(mdEmojiPlugin);
