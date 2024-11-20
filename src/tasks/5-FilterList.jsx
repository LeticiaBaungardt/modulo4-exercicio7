import React, { useState } from 'react';

function FilterList() {
  const [names] = useState([
    'Ana', 'Carlos', 'Bruna', 'João', 'Maria', 'Eduardo', 'Paula', 'Luciana'
  ]);

  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h3 className='text-center font-medium text-lg pb-4'>Filtro de Lista</h3>

      <input className='bg-white text-center line border-2 m-4 p-3' type="text" value={filter} onChange={handleFilterChange} placeholder="Filtrar nomes" />

      <ul className="list-disc pl-10 mt-4">
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterList;
