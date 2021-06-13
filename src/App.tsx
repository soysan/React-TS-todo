import React from 'react';
import Todos from './components/Todos';
import Todo from "./models/todo";
import './App.css';

function App() {
  const todos = [new Todo('learn react'), new Todo('learn typescript')];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
