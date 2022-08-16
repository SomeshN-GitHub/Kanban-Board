import React, {createContext} from 'react'

const KanbanContext = createContext();
const ContextProvider = (props) => {
  return (
    <KanbanContext.Provider>
        {props.children}
    </KanbanContext.Provider>
  )
}

export default ContextProvider;