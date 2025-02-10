import { useState } from 'react'
import { findLongestWord, countOccurrences, totalScore, addEntry } from './Ecmascript/ecmascript'
import Header from './Header'
import Footer from './Footer'
import CounterF from './CounterF'
import reactLogo from './assets/react.svg'
import Pokemon from './Pokemon'
import ListManager from './ListManager'
import ColorBox from './ColorBox'
import GradeManager from './GradeManager'
import TodoList from './TodoList'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  console.log("Test findLongestWord:", findLongestWord(["walid", "abdlekrim", "ala", "mohamed"]));
  console.log("Test countOccurrences:", countOccurrences([["walid", "ala"], ["walid", "amine", "ala"], ["ala", "amine"]]));
  console.log("Test totalScore:", totalScore([{ name: "walid", score: 45 }, { name: "ala", score: 55 }, { name: "amine", score: 30 }]));
  addEntry("amine", 25);
  addEntry("ala", 30);
  addEntry("walid", 22);

  const initialItems = ['React', 'Angular', 'Vue'];
  const initialColor = "#FF0000"; 
  const colorOptions = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"]; 
  const initialNotes = [1, 15, 11];
  const initialTasks = [
    { id: 1, name: 'manger', priority: 'Haute', completed: false },
    { id: 2, name: 'reviser', priority: 'Moyenne', completed: true },
    { id: 3, name: 'dormir', priority: 'Basse', completed: false },
  ];
  return (
   
     /*<div>
    
     <ListManager initialItems={initialItems} placeholder="Add a new item..." />
     </div> */
     /* <div className="App">
      <h1>Changement de couleur dynamique</h1>
      <ColorBox initialColor={initialColor} colorOptions={colorOptions} />
     </div>*/
     /*<div className="App">
     <h1>Gestionnaire de notes</h1>
     <GradeManager initialNotes={initialNotes} />
     </div>*/
     <div className="App">
     <h1>Todo List </h1>
     <TodoList initialTasks={initialTasks} />
     </div>
     
  
  
  
  );
  
} 

export default App
