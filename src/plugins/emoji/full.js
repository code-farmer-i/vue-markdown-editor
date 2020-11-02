import emojiJson from 'markdown-it-emoji/lib/data/full.json';
import creator from './creator';
import parser from './parser-full';

export default creator({ emojiJson, parser });
