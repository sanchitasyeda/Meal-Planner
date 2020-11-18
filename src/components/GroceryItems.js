import React from "react"
import ToDoItem from "./ToDoItem"

class GroceryItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groceryList: [],
            show: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            const updatedGroceryList = prevState.groceryList.map(item => <ToDoItem name={item.name} amount={item.amount} />)

            return {
                groceryList: updatedGroceryList
            }
        })
        console.log("clicked!");
    }

    showModal = () => {
        this.setState({ show: true })
    }

    closeModal = () => {
        this.setState({ show: false })
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={this.showModal}>Click me!</button>
                <Modal show={this.state.show} />
            </div>
        )
    }
}
export default GroceryItems