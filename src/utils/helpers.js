import emojis from 'emoji.json';

export default function filterEmojis(searchTerm, maxSize) {
  const filtered = emojis
    .filter((emoji) => {
      return emoji.name.includes(searchTerm) || emoji.keywords.includes(searchTerm);
    })
    .slice(0, maxSize);
  console.log(filtered);
  return filtered;
}
