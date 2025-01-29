// 1️
export const findLongestWord = (words) => {
    let [first, ...rest] = words;
    
    let wordsWithLength = words.map(word => ({ mot: word, longueur: word.length }));
    
    let longestWord = wordsWithLength.reduce((max, current) => 
        current.longueur > max.longueur ? current : max, { mot: first, longueur: first.length });

    return longestWord;
};



// 2️
export const countOccurrences = (nestedArray) => {
    return nestedArray.flat().reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
};


// 3️
export const students = [];

export const totalScore = (students) => {
    return students
        .map(student => ({ ...student, score: student.score < 50 ? student.score + 15 : student.score }))
        .filter(student => student.score > 50)
        .reduce((total, student) => total + student.score, 0);
};

// 4
let lastID = 0;
const Tab = [];
export const addEntry = (name, age) => {
    lastID++;
    Tab.push({ id: lastID, name, age });
};
addEntry("amine", 25);
addEntry("ala", 30);
addEntry("walid", 22);

console.log(Tab);

import { searchById } from "./fonction.js";
console.log(searchById(Tab, 2));  