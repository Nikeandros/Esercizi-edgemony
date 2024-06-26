import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="logo.png" alt="Logo" style={{ height: '20px' }} />
      </div>
      <nav>
        <div>
          <h4>Footer Menu 1</h4>
          <a href="#">Submenu 1</a>
          <a href="#">Submenu 2</a>
        </div>
        <div>
          <h4>Footer Menu 2</h4>
          <a href="#">Submenu 1</a>
          <a href="#">Submenu 2</a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
