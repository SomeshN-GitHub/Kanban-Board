import React from "react";

const AddTaskModal = () => {
  return (
    <div className="addTaskModal">
      <h2>Add New Task</h2>
      <small>Title</small>
      <input
        type="text"
        name=""
        id="task_title"
        placeholder="e.g. Take Coffee Break"
      />
      <small>Description</small>
      <textarea
        name=""
        id="task_description"
        rows="5"
        placeholder="e.g. One should take a break from work time to time as it helps work more efficiently"
      ></textarea>
      <small>Subtasks</small>
      <div className="subtask">
        <input type="text" placeholder="e.g. Make coffee" />
        <button>X</button>
      </div>
      <div className="subtask">
        <input type="text" placeholder="e.g. Make coffee" />
        <button>X</button>
      </div>
      <button className="add_btn">+ Add New Subtask</button>
      <button className="add_btn">Create Task</button>
    </div>
  );
};

export default AddTaskModal;
