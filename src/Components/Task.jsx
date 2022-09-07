import React from 'react'
import { useCustomUseContext } from '../ContextProvider';

const Task = (props) => {
  let {title, subtasks} = props.task;
  const {setCurrentTask, setModalVisible, setModal} = useCustomUseContext();
  let completedSubtasks = subtasks?.filter(subTask => subTask.isCompleted).length;
  return (
    <div className="task" draggable onClick={()=>{
      setCurrentTask(props.task);
      setModal("TaskDetailedModal")
      setModalVisible(true);
      }}>
        <h3 className="task_title">{title}</h3>
        {subtasks.length ? <small>
          <span className="completed_task">{completedSubtasks}</span> of 
          <span className="total_task"> {subtasks?.length} </span>
          subtasks
        </small> : <small></small>}
        
      </div>
  )
}

export default Task