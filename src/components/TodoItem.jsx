import React from "react";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ item, onDelete }) => {
  return (
    <div>
      <div className="container text-center">
        <div className="row thapakrow">
          <div className="col-4 fw-bolder">{item.itemName}</div>
          <div className="col-4">{item.date}</div>
          <div className="col-2">
            <button
              className="btn btn-outline-danger"
              onClick={() => onDelete(item.itemName)}
            >
              <MdDelete /> remove  {/* using react icon  */}
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
