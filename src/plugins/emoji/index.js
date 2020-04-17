import mdEmojiPlugin from 'markdown-it-emoji/light';
import emojiJson from 'markdown-it-emoji/lib/data/light.json';
import creator from './creator';

export default creator({ emojiJson, mdEmojiPlugin });
