import emojiJson from 'markdown-it-emoji/lib/data/light.json';
import creator from './creator';
import parser from './parser';

export default creator({ emojiJson, parser });
