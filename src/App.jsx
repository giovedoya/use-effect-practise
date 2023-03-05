import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {

  const [showCounter, setShowCounter] = useState(true)

  const handleShow = () => {
    setShowCounter(prev => !prev)
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      {showCounter && <Counter />}
      <button onClick={handleShow}>{showCounter ? 'Hide' : 'showCounter'}</button>
    </div>
  );
}

export default App;
