import React from "react";

const AppInOne = () => {
  return (
    <div>
      <center>
        <h1> this is my first todo-app</h1>
      </center>
      <button type="button" className="btn btn-outline-primary">
        hit to like this project
      </button>


      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" placeholder="enter date " />
        </div>
        <div className="col-2">
          <button className="btn btn-outline-success">add todo</button>
        </div>

        <br />
        <div className="col-4">Buy laptop</div>
        <div className="col-4">2/09/2020</div>
        <div className="col-2">
          <button className="btn btn-outline-danger">add todo</button>
        </div>
      </div>
    </div>
  );
};

export default AppInOne;
