import React from 'react';
import TodoList from './containers/todoList';
import './App.css';

function App() {
  console.log('process.env', process.env)
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
