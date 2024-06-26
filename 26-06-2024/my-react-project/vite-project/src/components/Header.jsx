// Header.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ navItems }) => {
  return (
    <header>
      <div>
        <img src="logo.png" alt="Logo" style={{ height: '40px' }} />
      </div>
      <nav>
        {navItems.map((item, index) => (
          <a key={index} href={item.url}>{item.text}</a>
        ))}
      </nav>
    </header>
  );
};

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
