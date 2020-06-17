import React from "react"

function ToDoItem(props) {
    return (
        <div>
            <input type="checkbox" id={props.key} name={props.name}/>
            <label for={props.name} className="todoItem">{props.name}</label>
            <hr className="divider"/>
        </div>
    )
}
export default ToDoItem