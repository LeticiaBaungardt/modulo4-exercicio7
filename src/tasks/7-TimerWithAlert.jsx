import React, { useState, useEffect } from 'react';

function TimerWithAlert() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (time <= 0) {
      alert('Por favor, defina um tempo maior que zero.');
      return;
    }

    const id = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          alert('O tempo acabou!');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setIntervalId(id);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    setIsPaused(true); 
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setTime(0);
    setIsPaused(false);
  };

  const handleTimeChange = (e) => {
    setTime(Number(e.target.value));
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div>
      <h3 className='text-center font-medium text-lg pb-4'>Timer com Intervalo e Alerta:</h3>

      <div className='m-3'>
        <label  htmlFor="time">Defina o tempo (em segundos):</label>
        <input className='bg-white text-center line border-2 m-2 w-20' type="number" id="time" value={time} onChange={handleTimeChange} min="1" disabled={isPaused} />
      </div>

      <div className='m-3'>
        <h4>Tempo restante: {time}s</h4>
      </div>

      <div className='flex justify-center'>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={startTimer} disabled={isPaused || time <= 0}>
          Iniciar
        </button>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={pauseTimer} disabled={isPaused || time <= 0}>
          Pausar
        </button>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={resetTimer}>Reiniciar</button>
      </div>
    </div>
  );
}

export default TimerWithAlert;
