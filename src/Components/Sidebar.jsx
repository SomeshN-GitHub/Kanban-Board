import React, { useState } from "react";
import BoardChip from "./BoardChip";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import DarkModeSwitch from "./DarkModeSwitch";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Sidebar = (props) => {
  const [sidebarOn, setSidebarOn] = useState(true);
  let {boards} = props.data;
  console.log(boards);
  let BoardChipData = boards.map((item, index) => {
    return (
    index ? <BoardChip name={item.name} /> : <BoardChip name={item.name} active={"active"} />
    )
  });

  return (
    <div className="sidebar">
      <div className="logo">
        <ViewKanbanIcon />
        <h1>Kanban</h1>
      </div>
      <div className="sidebar_main">
        <small>
          All Boards <span>( {boards.length} )</span>
        </small>
        {BoardChipData}

        <div className="add_board">
          <AddIcon />
          Add New Board
        </div>
      </div>
      <div className="sidebar_actions">
        <DarkModeSwitch />
        {sidebarOn ? (
          <VisibilityIcon onClick={() => setSidebarOn(!sidebarOn)} />
        ) : (
          <VisibilityOffIcon onClick={() => setSidebarOn(!sidebarOn)} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
