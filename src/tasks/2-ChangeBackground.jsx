import React, { useState, useEffect } from 'react';

function ChangeBackground() {
  const [color, setColor] = useState('#ffffff');

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const resetColor = (() => {
    document.body.style.backgroundColor = '#ffffff';
  }, ['#ffffff']);

  return (
    <div>
      <h3 className='text-center font-medium text-lg pb-4'>Alterar a cor do fundo aleatoriamente:</h3>
      <p className='bg-white text-center line border-2 mx-32 mb-2 p-3'>Cor Atual: {color}</p>
      <div className='flex justify-center'>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={() => setColor(generateRandomColor())}> Alterar Cor de Fundo </button>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={() => setColor(resetColor)}>Resetar</button>
      </div>
      
    </div>
  );
}

export default ChangeBackground;
