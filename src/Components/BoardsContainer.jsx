import React from 'react'
import Board from './Board'

const BoardsContainer = () => {

  return (
    <div className="boards_container">
          <Board color={"red"}/>
          <Board color={"yellow"}/>
          <Board color={"pink"}/>
          <Board color={"purple"}/>
        </div>
  )
}

export default BoardsContainer