import React from 'react';
import './Header.css';
function Header({ name }) {
  return (
    <div className="emoji-header">
      <h1 className="logo">{name}</h1>
    </div>
  );
}

export default Header;
