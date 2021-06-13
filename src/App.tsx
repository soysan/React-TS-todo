import React from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div>
      <Todos items={['react', 'typescript']} />
    </div>
  );
}

export default App;
