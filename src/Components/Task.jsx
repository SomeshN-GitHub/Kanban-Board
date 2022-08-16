import React from 'react'

const Task = () => {
  return (
    <div className="task">
        <h3 className="task_title">Build Ui for xyz</h3>
        <small>
          <span className="completed_task">0</span> of 
          <span className="total_task"> 3 </span>
          subtasks
        </small>
      </div>
  )
}

export default Task