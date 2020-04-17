import mdEmojiPlugin from 'markdown-it-emoji';
import emojiJson from 'markdown-it-emoji/lib/data/full.json';
import creator from './creator';

export default creator({ emojiJson, mdEmojiPlugin });
