import React, { useState } from 'react';

function TodoList({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({ name: '', priority: 'Moyenne' });
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    if (newTask.name.trim() === '') {
      alert('le nom de la tache ne peut pas contenir vide');
      return;
    }
    const task = {
      id: Date.now(), 
      name: newTask.name,
      priority: newTask.priority,
      completed: false,
    };
    setTasks([...tasks, task]); 
    setNewTask({ name: '', priority: 'Moyenne' }); 
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <h2>Ajouter une nouvelle tache</h2>
      <input
        type="text"
        value={newTask.name}
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        placeholder="Nom de la tache"
      />
      <select
        value={newTask.priority}
        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
      >
        <option value="Haute">Haute</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>

      <h2>Rechercher une tache</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher une tache"
      />

      <h2>Liste des taches</h2>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.name} (Priorité : {task.priority})
            </span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'not done' : 'done'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <h2>Statistiques</h2>
      <p>Total des taches : {totalTasks}</p>
      <p>Taches terminées : {completedTasks}</p>
    </div>
  );
}

export default TodoList;