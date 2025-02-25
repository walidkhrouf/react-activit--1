import React from 'react';

function NotFound() {
  return (
    <div style={{ height: '100vh' }}>
      <img 
        src="src/assets/notfound.jfif" 
        alt="image error" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} 
      />
    </div>
  );
}

export default NotFound;