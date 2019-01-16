import React from 'react';
import './EmojiList.css';
import Clipboard from 'clipboard';
class EmojiList extends React.Component {
  componentDidMount = () => {
    this.clipboard = new Clipboard('.clipboard-copy');
  };
  componentWillUnmount = () => {
    this.clipboard.destroy();
  };

  render() {
    const {
      data: { title }
    } = this.props;
    const emojiCode = this.props.data.symbol.codePointAt(0).toString(16);
    const src = `http://cdn.jsdelivr.net/emojione/assets/png/${emojiCode}.png`;

    return (
      <div className="emoji-component-results clipboard-copy" data-clipboard-text={this.props.data.symbol}>
        <img src={src} alt="" />
        <span className="title">{title}</span>
        {/* <span className="copy">Click to copy emoji!</span> */}
        <div className="copy-message">
          <span>Click to copy emoji!</span>
        </div>
      </div>
    );
  }
}
export default EmojiList;
