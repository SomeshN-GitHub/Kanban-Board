import React from "react";
import Board from "./Board";
import { useCustomUseContext } from "../ContextProvider";

const BoardsContainer = () => {
  let {
    boardActive: { columns },
  } = useCustomUseContext();
  
  console.log(columns);
  return (
    <div className="boards_container">
      {columns.map((col, index) => {
        return <Board column={col} key={index} />;
      })}
    </div>
  );
};

export default BoardsContainer;
