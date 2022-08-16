import React from 'react'

const Task = (props) => {
  let {title, subtasks} = props.task;
  let completedSubtasks = subtasks.filter(subTask => subTask.isCompleted).length;

  return (
    <div className="task">
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