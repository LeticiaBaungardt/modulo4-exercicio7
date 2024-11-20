import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div >
      <h3 className='text-center font-medium text-xl pb-4'>Contador:</h3>
      <p className='text-center line border-2 mx-32 mb-5 p-3'>Valor atual: {count}</p>
      <div className='flex justify-center'>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={() => setCount(count + 1)}>Incrementar</button>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={() => setCount((prev) => Math.max(prev - 1, 0))} disabled={count === 0}>Decrementar</button>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={() => setCount(0)}>Resetar</button>
      </div>
      </div>
      
  );
}

export default Counter;
