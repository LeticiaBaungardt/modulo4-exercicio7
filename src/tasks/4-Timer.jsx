import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h3 className='text-center font-medium text-lg pb-4'>Temporizador:</h3>
      <div className='bg-white text-center line border-2 mx-32 mb-2 p-3'>
        {seconds} segundos
      </div>

      <div className='flex justify-center'>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={toggleTimer}>
          {isRunning ? 'Pausar' : 'Iniciar'}
        </button>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={resetTimer}>
          Reiniciar
        </button>
      </div>
      
    </div>
  );
}

export default Timer;
