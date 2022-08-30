import React from "react";
import { useCustomUseContext } from "../ContextProvider";
import DropdownMenu from "./DropdownMenu";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TaskDetailedModal = (props) => {
  let { boards, setBoards, setModalVisible, currentTask, setCurrentTask, boardActive } =
    useCustomUseContext();
  let { subtasks } = currentTask;
  let completedSubtasks = subtasks?.filter(
    (subTask) => subTask.isCompleted
  ).length;

  // handle subtask complete incomplete toggle 00
  const handleSubtask = ( subtaskIndex) => {
    let boardIndex = boards.findIndex(
      (board) => board.id === boardActive.id
    );
    let tempBoards = [...boards];
    let columnIndex = boards[boardIndex].columns.findIndex(
      (column) => column.name == currentTask.status
    );
    let taskIndex = boards[boardIndex].columns[columnIndex].tasks.findIndex(
      (task) => task.title == currentTask.title
    );
    let subtaskStatus =
      tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[
        subtaskIndex
      ].isCompleted;
    tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[
      subtaskIndex
    ].isCompleted = !subtaskStatus;
    console.log(
      "subtask clicked" +
        tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[
          subtaskIndex
        ].title
    );
    setBoards(tempBoards);
  };


  // handle task movement e.g. from todo -> doing
  const handleColumnChange =(e) =>{
    console.group("Handle column Chnage");
    console.log(e.target.value);
    // source column  
    let boardIndex = boards.findIndex(
      (board) => board.id === boardActive.id
    );
    let tempBoards = [...boards];
    let columnIndex = boards[boardIndex].columns.findIndex(
      (column) => column.name == currentTask.status
    );
    let taskIndex = boards[boardIndex].columns[columnIndex].tasks.findIndex(
      (task) => task.title == currentTask.title
    );
    
    // tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex].status = e.target.value;
    tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex] = { ...tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex], status:e.target.value} ;
    let taskToMove = {...tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex]};
    setCurrentTask({...taskToMove});
    
    // target column      
    let targetColumnIndex = boards[boardIndex].columns.findIndex(
      (column) => column.name == e.target.value
    );
    // add task to new column 
    tempBoards[boardIndex].columns[targetColumnIndex].tasks.push(taskToMove);

    // delete task from previous column 
    tempBoards[boardIndex].columns[columnIndex].tasks.splice(taskIndex,1)

    setBoards((prevBoards)=>[...tempBoards]);
    
    console.groupEnd("END Handle column Chnage");
  }

  // console.log("subtask re rendereed");
  return (
    <div className="task_details_modal">
      <div className="task_top">
        <strong> {currentTask.title}</strong>
        <DeleteForeverIcon className="delete" />
      </div>
      <small>{currentTask.description}</small>
      <small>
        <strong>
          Subtasks ( {completedSubtasks} of {subtasks?.length} ){" "}
        </strong>
      </small>
      <div className="subtasks_container">
        {subtasks?.map((subt, index) => {
          return (
            <div
              className="subtask"
              key={index}
              onClick={(e) => {
                console.log(e.currentTarget);
                handleSubtask(index);
              }}
            >
              <input
                type="checkbox"
                checked={subt.isCompleted}
                readOnly
                id=""
              />
              <p className={subt.isCompleted ? "completed" : ""}>
                {subt.title}
              </p>
            </div>
          );
        })}
      </div>
      <small>Status</small>
      <DropdownMenu handleColumnChange={handleColumnChange}/>
    </div>
  );
};

export default TaskDetailedModal;
