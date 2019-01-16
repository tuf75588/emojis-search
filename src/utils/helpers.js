import emojiList from './emojiList.json';

export default function filterEmojis(searchTerm, maxSize) {
  const filtered = emojiList
    .filter((emoji) => {
      return emoji.title.toLowerCase().includes(searchTerm) || emoji.keywords.includes(searchTerm);
    })
    .slice(0, maxSize);

  return filtered;
}
