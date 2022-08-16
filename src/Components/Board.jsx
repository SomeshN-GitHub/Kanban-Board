import React from "react";
import Task from "./Task";


const Board = (props) => {
  let {name , tasks} = props.column;
  const boardColors = {
    "Todo" : "red",
    "Doing" : "orange",
    "Done" : "yellowgreen",
  }
  return (
    <div className="board">
      <div className="board_title">
        <div
          className="color"
          style={{ backgroundColor: `${boardColors[name]}` }}
        ></div>
        <small>
          {name} <span>( {tasks.length} )</span>
        </small>
      </div>
      {tasks.map((task, index)=>{
        return (
          <Task task ={task} key={index}/>
        )
      })}
      
    </div>
  );
};

export default Board;
