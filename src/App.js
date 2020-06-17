import React from 'react';
import ToDoItem from './components/ToDoItem'
import './App.css';
import Navigation from "./components/Navbar"

function App() {
  return (
    <div>
      <Navigation/>
      <div className="todoList">
        <ToDoItem name="Hawaii" id="1" />
      </div>
    </div>
  );
}

export default App;
