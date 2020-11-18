import React from 'react'
import ToDoItem from './components/ToDoItem'
import './App.css'
import Navigation from "./components/Navbar"
import Main from "./components/Main"
// import GroceryItems from "./components/GroceryItems";

function App() {
  return (
    <div>
      <Navigation/>
      <div className="todoList">
        <Main/>
      </div>
    </div>
  );
}

export default App;
