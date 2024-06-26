// Footer.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ footerMenus }) => {
  return (
    <footer>
      <div>
        <img src="logo.png" alt="Logo" style={{ height: '20px' }} />
      </div>
      <nav>
        {footerMenus.map((menu, index) => (
          <div key={index}>
            <h4>{menu.title}</h4>
            {menu.items.map((item, idx) => (
              <a key={idx} href={item.url}>{item.text}</a>
            ))}
          </div>
        ))}
      </nav>
    </footer>
  );
};

Footer.propTypes = {
  footerMenus: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Footer;
