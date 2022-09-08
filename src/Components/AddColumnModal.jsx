import React, { useState, useEffect } from "react";
import { useCustomUseContext } from "../ContextProvider";

const AddColumnModal = () => {

    const {
        boards,
        boardActive,
        setBoards,
        setModalVisible,
      } = useCustomUseContext();
      const [column, setColumn] = useState({
        name: "",
        tasks: []
      });    
    
      const handleInputChange = ({ target: { name, value } }) => {
        setColumn(() => ({
          ...column,
          [name]: value,
        }));
      };
    
      // add column to main data
      const addColumn = (e) => {
        e.preventDefault();
        console.log("column added");
        let tempBoards = [...boards];
        let boardIndex = boards.findIndex(board => board.id == boardActive.id);

        tempBoards[boardIndex].columns.push(column);
        setBoards([...tempBoards]);
        setColumn({
            name: "",
            tasks: []
          });
        setModalVisible(false);
      };
    
    
//   class names has been kept same as addTaskModal to reuse the styling
  return (
    <form className="addTaskModal">
      <h3>Add New Column to {boardActive.name}</h3>
      <small>Column Name</small>
      <input
        type="text"
        name="name"
        placeholder="e.g. In Progress"
        autoFocus
        onChange={handleInputChange}
        value={column.name}
      />
      <button type="submit" className="add_btn" onClick={addColumn}>
        Add Column
      </button>
    </form>
  );

}

export default AddColumnModal