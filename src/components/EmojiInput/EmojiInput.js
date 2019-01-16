import React from 'react';
import './EmojiInput.css';
class EmojiInput extends React.Component {
  state = {
    searchTerm: ''
  };
  handleInputChange = ({ target: { value } }) => {
    this.setState((state, props) => {
      return {
        searchTerm: value
      };
    });
    this.props.handleSearchChange(value);
  };
  render() {
    return (
      <div className="emoji-search-input">
        <div>
          <input
            type="text"
            name="keyword"
            placeholder="Search for emoji by keyword!"
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}
export default EmojiInput;
