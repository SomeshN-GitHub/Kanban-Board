import React from "react";
import Column from "./Column";
import { useCustomUseContext } from "../ContextProvider";
import AddIcon from "@mui/icons-material/Add";

const BoardsContainer = () => {
  let {
    boardActive: { columns }, setModal, setModalVisible,
  } = useCustomUseContext();

const handleAddColumn =()=>{
  setModal("AddColumnModal");
  setModalVisible(true);
}

  // console.log(columns);
  return (
    <div className="boards_container">
      {columns.map((col, index) => {
        return <Column column={col} index={index} key={index} />;
      })}
      <div className="board">
        <div className="add_column" onClick={handleAddColumn}>
          <AddIcon /> Add New Column
        </div>
      </div>
    </div>
  );
};

export default BoardsContainer;
