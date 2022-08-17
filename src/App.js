import Sidebar from "./Components/Sidebar";
import "./Styles/App.scss";
import data from "./data";
import Main from "./Components/Main";
import { useEffect, useState } from "react";
import ContextProvider from "./ContextProvider";
import Modal  from "./Components/Modal";

function App() {
  // const [state, setState] = useState({});
  const  [boards, setBoards]  = useState(data.boards);
  const [boardActive, setBoardActive] = useState(boards[0]);
  const [currentTask, setCurrentTask] = useState(boards[0].columns[2].tasks[1]);
  const [modalVisible, setModalVisible] = useState(false);

// handle subtask complete incomplete toggle 
const handleSubtask =(columnName, subtaskIndex)=>{
  let boardIndex = boards.findIndex(board => board.name == boardActive.name);
  let tempBoards = boards;
  let columnIndex = boards[boardIndex].columns.findIndex(column => column.name == columnName);
  let taskIndex = boards[boardIndex].columns[columnIndex].tasks.findIndex(task => task.title == currentTask.title);
  let subtaskStatus = tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[subtaskIndex].isCompleted;
  tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[subtaskIndex].isCompleted = !subtaskStatus;
  setBoards(tempBoards);
}

useEffect(()=>{
  setCurrentTask(prevTask => prevTask);
}, [boards])
  // values to be made available to context provider 
  let value = {
    data,
    boards,
    boardActive,
    setBoardActive,
    currentTask,
    setCurrentTask,
    modalVisible, setModalVisible,
    handleSubtask
  }
  console.log(boards);
  return (
    <div className="App">
      <ContextProvider value={value}>
        <Sidebar data={data} />
        <Main boardActive={boardActive} />
        { modalVisible && <Modal />}
      </ContextProvider>
    </div>
  );
}

export default App;
