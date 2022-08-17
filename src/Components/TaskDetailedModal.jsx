import React from "react";
import { useCustomUseContext } from "../ContextProvider";
import DropdownMenu from "./DropdownMenu";
import OptionsMenu from "./OptionsMenu";


const TaskDetailedModal = () => {
  let { currentTask, handleSubtask } = useCustomUseContext();
  let { title, subtasks } = currentTask;
  // console.log(subtasks);
  let completedSubtasks = subtasks.filter(
    (subTask) => subTask.isCompleted
  ).length;

  
  console.log(currentTask);
  return (
    <div className="task_details_modal">
      <div className="task_top">
        <strong> {currentTask.title}</strong>
        <OptionsMenu />
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
            <div className="subtask" key={index} onClick={(e)=>{
              console.log(e.currentTarget);
              handleSubtask(currentTask.status, index)}}>
              <input type="checkbox" name="" id=""  checked={subt.isCompleted} />
              <p className={subt.isCompleted && "completed"}>{subt.title}</p>
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
