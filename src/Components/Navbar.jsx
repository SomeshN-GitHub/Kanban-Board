import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useCustomUseContext } from "../ContextProvider";


const Navbar = () => {
  let { boardActive } = useCustomUseContext();

  // const addTaskToCurrentBoard = () => {
  //   console.log("add task clicked");
  // };

  return (
    <div className="navbar">
      <div className="nav_right">
        <h2 className="borad_name_at_nab">{boardActive.name}</h2>
        <div className="nav_inner_right">
          {/* <div className="add_btn" onClick={addTaskToCurrentBoard}>
            <AddIcon /> Add New Task
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
