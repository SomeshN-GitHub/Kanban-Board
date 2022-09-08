import React, { useState, useEffect } from "react";
import { useCustomUseContext } from "../ContextProvider";

const AddBoardModal = () => {
  const {
    boards,
    setBoards,
    boardActive,
    currentColumnIndex,
    setModalVisible,
  } = useCustomUseContext();
  const [columns, setColumns] = useState([]);

  const [board, setBoard] = useState({
    id: Math.random(),
    name: "",
    columns: columns,
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setBoard(() => ({
      ...board,
      [name]: value,
    }));
  };

  // update columns in Board as column name changes
  useEffect(() => {
    setBoard((prevValue) => ({ ...prevValue, columns: columns }));
  }, [columns]);

  const handleColumnInputChange = ({ target: { id, value } }) => {
    let tempColumns = [...columns];
    tempColumns[id].name = value;
    setColumns([...tempColumns]);
  };

  const addColumn = (e) => {
    e.preventDefault();
    let tempColumns = [...columns];
    tempColumns.push({
      name: "",
      tasks: [],
    });
    setColumns([...tempColumns]);
  };

  const deleteColumn = (id) => {
    let tempColumns = [...columns];
    tempColumns.splice(id, 1);
    setColumns([...tempColumns]);
  };

  // add board to main data
  const addBoard = (e) => {
    e.preventDefault();
    console.log("board added");
    let tempBoards = [...boards];
    tempBoards.push(board);
    setBoards([...tempBoards]);
    setColumns([]);
    setBoard({
      id: Math.random(),
      name: "",
      columns: columns,
    });
    setModalVisible(false);
  };

  return (
    <form className="addTaskModal">
      <h2>Add New Board</h2>
      <small>Name</small>
      <input
        type="text"
        name="name"
        placeholder="e.g. iPhone Launch"
        autoFocus
        onChange={handleInputChange}
        value={board.name}
      />
      <small>Columns</small>
      {!columns.length ? (
        <div className="subtask">
          <small className="noSubtask">Click "Add Column" to add..</small>
        </div>
      ) : (
        columns.map((col, index) => (
          <div className="subtask">
            <input
              type="text"
              name="name"
              id={index}
              key={`column${index}`}
              value={col.name}
              onChange={handleColumnInputChange}
              placeholder="e.g. ToDo"
            />
            <button onClick={() => deleteColumn(index)}>X</button>
          </div>
        ))
      )}

      <button className="add_btn" onClick={addColumn}>
        + Add Column
      </button>
      <button type="submit" className="add_btn" onClick={addBoard}>
        Create Board
      </button>
    </form>
  );
};

export default AddBoardModal;
