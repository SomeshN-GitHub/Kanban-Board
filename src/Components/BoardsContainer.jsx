import React from "react";
import Board from "./Board";
import { useCustomUseContext } from "../ContextProvider";
import AddIcon from "@mui/icons-material/Add";

const BoardsContainer = () => {
  let {
    boardActive: { columns },
  } = useCustomUseContext();

  // console.log(columns);
  return (
    <div className="boards_container">
      {columns.map((col, index) => {
        return <Board column={col} key={index} />;
      })}
      <div className="board">
        <div className="add_column" >
          <AddIcon /> Add New Column
        </div>
      </div>
    </div>
  );
};

export default BoardsContainer;
