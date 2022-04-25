import React from 'react';
import './App.css';
import InputField from './components/InputField'

//  

//void returns undefined
//never doesnt return anything

// type Person = {
//   name:string;
//   age?: number  //question mark makes age optional
// }

// type X = {
//   a: string;
//   b: number;
// }

// interface Person extends X{ //properties of X inside Person
//   age?: number  //question mark makes age optional
// }

// let person: Person = {
//   name: "Vivian"
// }


// let lotsOfPeople: Person[];

const App: React.FC = () => { //React Functional Component
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
