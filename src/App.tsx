import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: number[];
let role: [number, string]

let printName: (name:string) => void;

//void returns undefined
//never doesnt return anything

type Person = {
  name:string;
  age?: number  //question mark makes age optional
}

// let person: Person = {
//   name: "Vivian"
// }


// let lotsOfPeople: Person[];

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
