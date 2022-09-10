import React from "react";
import { useCustomUseContext } from "../ContextProvider";

const Task = (props) => {
  let { title, subtasks } = props.task;
  const {
    handleColumnChange,
    boardActive,
    currentColumnIndex,
    setCurrentTask,
    setModalVisible,
    setModal,
  } = useCustomUseContext();
  let completedSubtasks = subtasks?.filter(
    (subTask) => subTask.isCompleted
  ).length;

  const handleTaskClick = () => {
    setCurrentTask(props.task);
    setModal("TaskDetailedModal");
    setModalVisible(true);
  };
  const handleDrag = () => {
    // console.log(title + "Being dragged")
    setCurrentTask(props.task);
  };
  const handleDragEnd = () => {
    // console.log(title + "Dropped");
    // console.log(
    //   "dropped in column" + props.colName + "\n it should move the task"
    // );
    handleColumnChange(boardActive.columns[currentColumnIndex].name);
  };

  return (
    <div
      className="task"
      draggable
      onClick={handleTaskClick}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
      <h3 className="task_title">{title}</h3>
      {subtasks.length ? (
        <small>
          <span className="completed_task">{completedSubtasks}</span> of
          <span className="total_task"> {subtasks?.length} </span>
          subtasks
        </small>
      ) : (
        <small></small>
      )}
    </div>
  );
};

export default Task;
