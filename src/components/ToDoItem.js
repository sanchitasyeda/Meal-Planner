import React from "react";
import '../App.css'

export default function toDoItem(props) {
    return (
        <li className="toDoList">
            <div className="toDo">
                <input id={props.id} type="checkbox" defaultChecked={props.completed} />
                <label className="todolabel" htmlFor="todo-0">
                    {props.name}
          </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit 
                </button>
                <button type="button" className="btn btn__danger">
                    Delete 
                </button>
            </div>
        </li>
    );
}