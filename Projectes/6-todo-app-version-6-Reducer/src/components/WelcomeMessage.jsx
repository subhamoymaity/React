import { useContext } from "react";
import { todoItemsContext } from "../store/todo-item-store";
import styles from "./WelcomeMessage.module.css";


const WelcomeMessage = () => {
  // const contextObj=useContext(todoItemsContext);
  // const todoItems=contextObj.todoItems;
  const {todoItems}=useContext(todoItemsContext);

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
  );
};
export default WelcomeMessage;
