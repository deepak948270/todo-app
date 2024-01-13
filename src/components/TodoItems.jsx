import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ items, onDelete }) => {
  return (
    <div>
      {/* <TodoItem items={itemsArr}/> */}
      {items.map((item) => (
        <TodoItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoItems;
