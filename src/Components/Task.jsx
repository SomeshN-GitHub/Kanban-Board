import React from 'react'
import { useCustomUseContext } from '../ContextProvider';

const Task = (props) => {
  let {title, subtasks} = props.task;
  const {setCurrentTask, setModalVisible} = useCustomUseContext();
  let completedSubtasks = subtasks.filter(subTask => subTask.isCompleted).length;
  return (
    <div className="task" onClick={()=>{
      setCurrentTask(props.task);
      setModalVisible(true);
      }}>
        <h3 className="task_title">{title}</h3>
        <small>
          <span className="completed_task">{completedSubtasks}</span> of 
          <span className="total_task"> {subtasks.length} </span>
          subtasks
        </small>
      </div>
  )
}

export default Task