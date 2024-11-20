import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('all'); 

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskInput, completed: false },
      ]);
      setTaskInput('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <h3 className='text-center font-medium text-lg pb-4'>Lista de Tarefas:</h3>

      <input className='bg-white text-center line border-2 m-4 p-3' type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder="Digite uma tarefa" />
      <button className='bg-gray-300 p-2 rounded-md m-4' onClick={addTask}>Adicionar</button>

      <div className='flex justify-center'>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={() => setFilter('all')}>Todas</button>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={() => setFilter('pending')}>Pendentes</button>
        <button className='bg-gray-300 p-2 rounded-md m-4' onClick={() => setFilter('completed')}>Concluídas</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
