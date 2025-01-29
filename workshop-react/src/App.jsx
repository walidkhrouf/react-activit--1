import { useState } from 'react'
import { findLongestWord, countOccurrences, totalScore, addEntry } from './Ecmascript/ecmascript'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("Test findLongestWord:", findLongestWord(["walid", "abdlekrim", "ala", "mohamed"]));
  console.log("Test countOccurrences:", countOccurrences([["walid", "ala"], ["walid", "amine", "ala"], ["ala", "amine"]]));
  console.log("Test totalScore:", totalScore([{ name: "walid", score: 45 }, { name: "ala", score: 55 }, { name: "amine", score: 30 }]));
  addEntry("amine", 25);
  addEntry("ala", 30);
  addEntry("walid", 22);

 
  
}

export default App
