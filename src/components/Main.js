import React from "react";
import ToDoItem from "./ToDoItem"
import '../App.css'

export default function Main() {

    const DATA = [
        { id: "0", name: "Eat", completed: true },
        { id: "1", name: "Sleep", completed: false },
        { id: "2", name: "Repeat", completed: false }
    ];

    const taskList = DATA.map(task => <ToDoItem id={task.id} name={task.name} completed={task.completed} />);

    return (
        <div className="todoapp stack-large">
            <h1>To Do List</h1>
            <form>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
          </button>
            </form>
            <div className="filters btn-group stack-exception">
                <button type="button" className="btn toggle-btn" aria-pressed="true">
                    {/* <span className="visually-hidden">Show </span> */}
                    <span>All</span>
                    {/* <span className="visually-hidden"> tasks</span> */}
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    {/* <span className="visually-hidden">Show </span> */}
                    <span>Active</span>
                    {/* <span className="visually-hidden"> tasks</span> */}
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    {/* <span className="visually-hidden">Show </span> */}
                    <span>Completed</span>
                    {/* <span className="visually-hidden"> tasks</span> */}
                </button>
            </div>
            <h2 id="list-heading">
                3 tasks remaining
        </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {/* <ToDoItem name="Eat" completed={true} id="0"/>
        <ToDoItem name="buttcheek" completed={false} id="1"/>
        <ToDoItem name="freakaleek" completed={false} id="2"/> */}
                {taskList}
            </ul>
        </div>
    );
}

