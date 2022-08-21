import React from "react";
import { useCustomUseContext } from "../ContextProvider";
import DropdownMenu from "./DropdownMenu";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const TaskDetailedModal = () => {
  let { setModalVisible, currentTask, handleSubtask } = useCustomUseContext();
  let { subtasks } = currentTask;
  let completedSubtasks = subtasks.filter(
    (subTask) => subTask.isCompleted
  ).length;

  console.log("subtask re rendereed")
  return (
    <div className="task_details_modal">
      <div className="task_top">
        <strong> {currentTask.title}</strong>
        <DeleteForeverIcon className='delete'/>
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
              <input type="checkbox" checked={subt.isCompleted} id="" />
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
