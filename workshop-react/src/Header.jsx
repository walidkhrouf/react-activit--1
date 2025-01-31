import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ color: 'white' }}>MonSite</h1>
      <nav>
        <ul style={{ display: 'flex' }}>
          <li style={{ marginLeft: '20px' }}>Accueil</li>
          <li style={{ marginLeft: '20px' }}>À propos</li>
          <li style={{ marginLeft: '20px' }}>Services</li>
          <li style={{ marginLeft: '20px' }}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;