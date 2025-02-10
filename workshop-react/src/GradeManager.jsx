import React, { useState } from 'react';

function GradeManager({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState('');

  
  const addNote = () => {
    const note = parseFloat(newNote);
    if (note >= 0 && note <= 20) {
      setNotes([...notes, note]); 
      setNewNote(''); 
    } else {
      alert('La note doit être comprise entre 0 et 20.');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index); 
    setNotes(updatedNotes);
  };

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return (sum / notes.length).toFixed(2); 
  };

  return (
    <div>
      <h2>Liste des notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => deleteNote(index)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <h2>ajouter une note</h2>
      <input
        type="number"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Entrez une note entre 0 et 20"
        min="0"
        max="20"
      />
      <button onClick={addNote}>Ajouter</button>

      <h2>Moyenne des notes</h2>
      <p>{calculateAverage()}</p>
    </div>
  );
}

export default GradeManager;