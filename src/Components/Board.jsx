import React from "react";
import Task from "./Task";

const Board = (props) => {
  return (
    <div className="board">
      <div className="board_title">
        <div
          className="color"
          style={{ backgroundColor: `${props.color ? props.color : "green"}` }}
        ></div>
        <small>
          To Do <span>( 2 )</span>
        </small>
      </div>
      <Task />
      <Task />
      
    </div>
  );
};

export default Board;
