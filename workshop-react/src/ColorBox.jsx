import React, { useState } from 'react';

function ColorBox({ initialColor, colorOptions }) {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    const newColor = colorOptions[randomIndex];
    setColor(newColor);
  };

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          margin: '20px',
        }}
      ></div>
      <button onClick={changeColor}>changer de couleur</button>
    </div>
  );
}

export default ColorBox;