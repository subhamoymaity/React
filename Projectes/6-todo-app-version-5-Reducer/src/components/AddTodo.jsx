import { useContext, useRef, useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { todoItemsContext } from "../store/todo-item-store";

function AddTodo() {
  const {addNewItem}=useContext(todoItemsContext);
  
  const todoNameElement=useRef();
  const dueDateElement=useRef();

  const handleAddButtonclicked = () => {
    const todoName=todoNameElement.current.value;
    const todoDate=dueDateElement.current.value;
    addNewItem(todoName, todoDate);
    todoNameElement.current.value="";
    dueDateElement.current.value="";

  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here(Unique)"
            ref={todoNameElement}
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={todoDate} //two way binding
            // onChange={handleDateChange}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonclicked} //anonomous func
          >
            <IoBagAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
