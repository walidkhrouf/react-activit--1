import React from 'react';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
     
      <div style={{ margin: '10px 0' }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Instagram</a>
      </div>

    </footer>
  );
};

export default Footer;