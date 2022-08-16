import React, {createContext, useContext} from 'react'

const KanbanContext = createContext();
const ContextProvider = (props) => {
  return (
    <KanbanContext.Provider value={props.value}>
        {props.children}
    </KanbanContext.Provider>
  )
}

const useCustomUseContext =()=>{
    return useContext(KanbanContext);
}

export default ContextProvider;
export {KanbanContext, useCustomUseContext}