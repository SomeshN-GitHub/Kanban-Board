import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';

const BoardChip = (props) => {
  return (
    <div className={ `board_chip ${props.active && props.active}`} >
        <DashboardIcon />
        <p>{props.name}</p>
    </div>
  )
}

export default BoardChip