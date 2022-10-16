import React from 'react';

import CatFactComponent from '../components/CatFactComponent';
import './App.css';

function App() {
  const fact: string = "Your cat's heart beats at a rate almost double that of yours, from 110-140 beats per minute.";

  return (
    <div className="App">
      <header>Cat Facts</header>
      <div className="CatFacts">
        <CatFactComponent fact={fact} />
      </div>
    </div>
  );
}

export default App;
