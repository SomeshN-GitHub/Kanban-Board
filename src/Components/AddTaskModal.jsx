import React, { useState, useEffect } from "react";
import { useCustomUseContext } from "../ContextProvider";

const AddTaskModal = (props) => {
  const {
    boards,
    setBoards,
    boardActive,
    currentColumnIndex,
    setModalVisible,
  } = useCustomUseContext();
  const [subtasks, setSubtasks] = useState([]);

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: boardActive.columns[currentColumnIndex].name,
    subtasks: subtasks,
  });

  const handleInputChange = ({ target: { name, value } }) => {
    // console.log(name + " :" + value);
    setTask(() => ({
      ...task,
      [name]: value,
    }));
  };

  // update subtasks in Task as subtask changes
  useEffect(() => {
    setTask((prevValue) => ({ ...prevValue, subtasks: subtasks }));
  }, [subtasks]);

  const handleSubtaskChange = ({ target: { id, value } }) => {
    let tempSubtask = [...subtasks];
    tempSubtask[id].title = value;
    setSubtasks([...tempSubtask]);
  };

  const addSubtask = (e) => {
    e.preventDefault();
    let tempSubtask = [...subtasks];
    tempSubtask.push({
      title: "",
      isCompleted: false,
    });
    setSubtasks([...tempSubtask]);
  };
  const deleteSubtask = (id) => {
    let tempSubtask = [...subtasks];
    tempSubtask.splice(id, 1);
    setSubtasks([...tempSubtask]);
  };

  // add task to main data
  const addTask = (e) => {
    e.preventDefault();
    console.log("task added");
    let tempBoards = [...boards];
    let boardIndex = boards.findIndex((board) => board.id == boardActive.id);
    tempBoards[boardIndex].columns[currentColumnIndex].tasks.push(task);
    setBoards([...tempBoards]);
    setSubtasks([]);
    setTask({
      title: "",
      description: "",
      status: boardActive.columns[currentColumnIndex].name,
      subtasks: subtasks,
    })
    setModalVisible(false);
  };

  return (
    <form className="addTaskModal">
      <h2>Add New Task</h2>
      <small>Title</small>
      <input
        type="text"
        name="title"
        placeholder="e.g. Take Coffee Break"
        autoFocus
        onChange={handleInputChange}
        value={task.title}
      />
      <small>Description</small>
      <textarea
        name="description"
        rows="5"
        onChange={handleInputChange}
        value={task.description}
        placeholder="e.g. One should take a break from work time to time as it helps work more efficiently"
      ></textarea>
      <small>Subtasks</small>
      {!subtasks.length ? (
        <div className="subtask">
          <small className="noSubtask">Click "Add Subtask" to add..</small>
        </div>
      ) : (
        subtasks.map((subT, index) => (
          <div className="subtask">
            <input
              type="text"
              name="title"
              id={index}
              key={`subtask${index}`}
              value={subT.title}
              onChange={handleSubtaskChange}
              placeholder="e.g. Make coffee"
            />
            <button onClick={() => deleteSubtask(index)}>X</button>
          </div>
        ))
      )}

      <button className="add_btn" onClick={addSubtask}>
        + Add Subtask
      </button>
      <button type="submit" className="add_btn" onClick={addTask}>
        Create Task
      </button>
    </form>
  );
};

export default AddTaskModal;
