import React from 'react';
import './EmojiList.css';
class EmojiList extends React.Component {
  render() {
    const { data } = this.props;
    const { name, keywords, char } = data;
    const endpoint = `http://cdn.jsdelivr.net/emojione/assets/png/${data.codes}.png`;
    console.log(data);
    return (
      <div className="emoji-component-results">
        <img src={endpoint} alt="" />
        <span>{name}</span>
      </div>
    );
  }
}
export default EmojiList;
