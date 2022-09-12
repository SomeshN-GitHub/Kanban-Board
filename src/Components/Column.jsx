import React from "react";
import Task from "./Task";
import AddIcon from "@mui/icons-material/Add";
import { useCustomUseContext } from "../ContextProvider";
import { useState } from "react";
import DeleteButton from "./DeleteButton";

const Column = (props) => {
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  let { name, tasks } = props.column;
  let columnIndex = props.index;
  const {boards, setBoards, boardActive, setCurrentColumnIndex, setModalVisible, setModal } =
    useCustomUseContext();
  const boardColors = {
    Todo: "red",
    Doing: "orange",
    Done: "yellowgreen",
  };

  const addTaskToCurrentBoard = () => {
    // console.log("add task clicked");
    setCurrentColumnIndex(columnIndex);
    setModal("AddTaskModal");
    setModalVisible(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDraggedOver(true);
    setCurrentColumnIndex(columnIndex);
    // console.log("Dragging over " + name + "Column");
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDraggedOver(false);
  };

  const deleteColumn =()=>{
    console.log("Delete Column", name);
    let tempBoards = [...boards];
    let boardIndex = boards.findIndex((board) => board.id === boardActive.id);
    tempBoards[boardIndex].columns.splice(columnIndex,1);
    setBoards([...tempBoards]);
  }

  return (
    <div
      className={`board ${isDraggedOver && "draggedOver"}`}
      name={name}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <div className="board_title">
        <div className="color_title">
          <div
            className="color"
            style={{ backgroundColor: `${boardColors[name]}` }}
          ></div>
          <small>
            {name} <span>( {tasks.length} )</span>
          </small>
        </div>
        <DeleteButton element="Column" handleDelete={deleteColumn}/>
      </div>
      {tasks.map((task, index) => {
        return <Task colName={name} task={task} key={index} />;
      })}
      <div className="add_btn" onClick={addTaskToCurrentBoard}>
        <AddIcon /> Add New Task
      </div>
    </div>
  );
};

export default Column;
