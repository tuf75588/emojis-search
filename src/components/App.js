import React, { Component } from 'react';
import Header from './Header/Header';

import filterEmojis from '../utils/helpers';
import EmojiInput from './EmojiInput/EmojiInput';
import EmojiResults from './EmojiResults/EmojiResults';
class App extends Component {
  state = {
    emojiData: filterEmojis('', 20)
  };

  handleNewData = (searchTerm) => {
    this.setState((state, props) => {
      return {
        emojiData: filterEmojis(searchTerm, 20)
      };
    });
  };
  render() {
    return (
      <>
        <Header name="😺 Emoji Search 😺" />
        <EmojiInput handleSearchChange={this.handleNewData} />
        <EmojiResults data={this.state.emojiData} />
      </>
    );
  }
}

export default App;
