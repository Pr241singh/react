import { useState, useRef, useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todoItemsStore";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  /* const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`noOfUpdates are :${noOfUpdates.current}`);
  };*/

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on: ${dueDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
    // setDueDate("");
    //setTodoName("");
  };
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            //value={todoName}
            //onChange={handleNameChange}
          ></input>
        </div>
        <div class="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // onChange={handleDateChange}
            //value={dueDate}
          ></input>
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
