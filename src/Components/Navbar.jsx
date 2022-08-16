import React from "react";

import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_right">
          <h2 className="borad_name_at_nab">
              Borad 1jsdn
          </h2>
        <div className="add_btn">
            <AddIcon /> Add New Task
        </div>

      </div>
    </div>
  );
};

export default Navbar;
