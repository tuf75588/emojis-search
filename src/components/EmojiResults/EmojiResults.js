import React, { Component } from 'react';
import EmojiList from '../EmojiList/EmojiList';
import './EmojiResults.css';
class EmojiResults extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="results-container">
        {data.map((data) => {
          return <EmojiList data={data} />;
        })}
      </div>
    );
  }
}
export default EmojiResults;
