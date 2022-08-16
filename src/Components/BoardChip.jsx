import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useCustomUseContext } from "../ContextProvider";

const BoardChip = (props) => {
  let { boardActive, setBoardActive } = useCustomUseContext();

  return (
    <div onClick={() => setBoardActive(props.board)} className={ `board_chip ${props.board.name == boardActive.name && "active"}`} >
        <DashboardIcon />
        <p>{props.board.name}</p>
    </div>
  )
}

export default BoardChip