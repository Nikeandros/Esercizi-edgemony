import React from 'react';

const Header = () => {
  return (
    <header>
      <div>
        <img src="logo.png" alt="Logo" style={{ height: '40px' }} />
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
};

export default Header;
