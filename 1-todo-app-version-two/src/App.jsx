import { useState } from "react";
//import reactlogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";

import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todoItemsStore";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`item deleted: ${todoItemName} `);
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
