import { TodoItemsContext } from "../store/todoItemsStore";
import { useContext } from "react";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  //const contextObj = useContext(TodoItemsContext);
  //const todoItems = contextObj.todoItems;
  const { todoItems } = useContext(TodoItemsContext);
  //console.log(todoItemsContext);
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            //key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            //onDeleteClick={deleteItems}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
