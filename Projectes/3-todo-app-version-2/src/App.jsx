import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css"
import TodoItems from "./components/TodoItems";
function App() {
  let todoItems=[
    {
      name:"buy-milk",
      dueDate:"4/10/2023",
    },
    {
      name:"go-to-college" ,
      dueDate:"4/10/2023",
    },
    {
      name:"like this video " ,
      dueDate:"4/10/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <TodoItems todoItems={todoItems}></TodoItems>

    </center>
  );
}

export default App;
