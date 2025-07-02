import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { todoItemsContext } from "../store/todo-item-store";

const TodoItems = () => {
  const { todoItems } = useContext(todoItemsContext);

  return (
    <div className={styles["items-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
