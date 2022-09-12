import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const DeleteButton = (props) => {
  return (
    <div className="delete_btn" title={`Delete ${props.element}`}>
      <DeleteForeverIcon className="delete" onClick={props.handleDelete}/>
    </div>
  );
};

export default DeleteButton;
