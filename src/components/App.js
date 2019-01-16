import React, { Component } from 'react';
import Header from './Header/Header';

import filterEmojis from '../utils/helpers';
import EmojiInput from './EmojiInput/EmojiInput';
class App extends Component {
  state = {
    emojiData: null
  };
  componentDidMount() {
    this.emojis = filterEmojis('smile', 20);
  }
  handleNewData = (searchTerm) => {};
  render() {
    return (
      <>
        <Header name="😺 Emoji Search 😺" />
        <EmojiInput />
      </>
    );
  }
}

export default App;
