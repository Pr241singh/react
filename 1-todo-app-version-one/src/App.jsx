import { useState, useReducer } from "react";
//import reactlogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";

import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todoItemsStore";

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
    //setTodoItems(newTodoItems);
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};
function App() {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);

    // console.log(`New item added: ${itemName} Date:${itemDueDate}`);
    /*const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);*/
  };

  const deleteItem = (todoItemName) => {
    //const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    //setTodoItems(newTodoItems);
    //console.log(`item deleted: ${todoItemName} `);

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  //{todoItems.length === 0 && ()}
  //const defaultTodoItems = [{ name: "Buy Ghee", dueDate: "Today" }];

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />

        <WelcomeMessage></WelcomeMessage>

        <AddTodo /*onNewItem={handleNewItem}*/ />
        <TodoItems
        //todoItems={todoItems}
        //onDeleteClick={handleDeleteItems}
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
