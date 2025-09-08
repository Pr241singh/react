import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const WelcomeMessage = () => {
  //const contextObj = useContext(TodoItemsContext);
  //const todoItems = contextObj.todoItems;
  const { todoItems } = useContext(TodoItemsContext);
  //  const todoItems = useContext(todoItemsContext);
  return todoItems.length === 0 && <p>Enjoy your Day</p>;
};

export default WelcomeMessage;
