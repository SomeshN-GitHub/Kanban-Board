import React from "react";
import { useCustomUseContext } from "../ContextProvider";
import DropdownMenu from "./DropdownMenu";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TaskDetailedModal = (props) => {
  let { boards, setBoards, setModalVisible, currentTask, boardActive } =
    useCustomUseContext();
  let { subtasks } = currentTask;
  let completedSubtasks = subtasks.filter(
    (subTask) => subTask.isCompleted
  ).length;

  // handle subtask complete incomplete toggle 00
  const handleSubtask = (columnName, subtaskIndex) => {
    let boardIndex = boards.findIndex(
      (board) => board.name == boardActive.name
    );
    let tempBoards = [...boards];
    let columnIndex = boards[boardIndex].columns.findIndex(
      (column) => column.name == columnName
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
          Subtasks ( {completedSubtasks} of {subtasks.length} ){" "}
        </strong>
      </small>
      <div className="subtasks_container">
        {subtasks.map((subt, index) => {
          return (
            <div
              className="subtask"
              key={index}
              onClick={(e) => {
                console.log(e.currentTarget);
                handleSubtask(currentTask.status, index);
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
      <DropdownMenu />
    </div>
  );
};

export default TaskDetailedModal;
