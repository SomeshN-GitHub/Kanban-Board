import React from "react";
import Task from "./Task";
import AddIcon from "@mui/icons-material/Add";
import { useCustomUseContext } from "../ContextProvider";

const Column = (props) => {
  let { name, tasks } = props.column;
  let columnIndex = props.index;
  const {setCurrentColumnIndex, setModalVisible, setModal} = useCustomUseContext();
  const boardColors = {
    Todo: "red",
    Doing: "orange",
    Done: "yellowgreen",
  };

  const addTaskToCurrentBoard = () => {
    console.log("add task clicked");
    setCurrentColumnIndex(columnIndex);
    setModal("AddTaskModal");
    setModalVisible(true);
  };

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
      {tasks.map((task, index) => {
        return <Task task={task} key={index} />;
      })}
      <div className="add_btn" onClick={addTaskToCurrentBoard}>
        <AddIcon /> Add New Task
      </div>
    </div>
  );
};

export default Column;
