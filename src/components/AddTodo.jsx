import React, { useState } from "react";
import { SiAddthis } from "react-icons/si";


const AddTodo = ({ newItemsHandler }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const todoHandler = (event) => {
    setTodoName(event.target.value);
  };

  const dateHandler = (event) => {
    setTodoDate(event.target.value);
  };

  const clickHandler = () => {
    newItemsHandler(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="enter todo here"
              value={todoName}
              onChange={todoHandler}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              placeholder="enter date "
              value={todoDate}
              onChange={dateHandler}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-outline-success" onClick={clickHandler}>
            <SiAddthis /> add todo  {/* using react-icon  */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
