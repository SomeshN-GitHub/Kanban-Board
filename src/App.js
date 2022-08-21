import Sidebar from "./Components/Sidebar";
import "./Styles/App.scss";
import data from "./data";
import Main from "./Components/Main";
import { useEffect, useState } from "react";
import ContextProvider from "./ContextProvider";
import Modal  from "./Components/Modal";

function getLocalStorageData (){
  return JSON.parse(localStorage.getItem('boards')) ?? data.boards;
}

function App() {
  // const [state, setState] = useState({});

  const  [boards, setBoards]  = useState(getLocalStorageData());
  const [boardActive, setBoardActive] = useState(boards[0]);
  const [currentTask, setCurrentTask] = useState(boards[0].columns[2].tasks[1]);
  const [modalVisible, setModalVisible] = useState(false);

// useEffect(()=>{
//   let boards = localStorage.getItem('boards');
//   console.log("LocalSto" + typeof(JSON.parse(boards)));
//   // if(boards) setBoards(boards);
//   // else setBoards(data.boards);  
// },[])

useEffect(()=>{
  localStorage.setItem('boards', JSON.stringify(boards));
  setCurrentTask(currentTask);
  console.log("boards updated");
},[boards])

// handle subtask complete incomplete toggle 00
const handleSubtask =(columnName, subtaskIndex)=>{
  let boardIndex = boards.findIndex(board => board.name == boardActive.name);
  let tempBoards = [...boards];
  let columnIndex = boards[boardIndex].columns.findIndex(column => column.name == columnName);
  let taskIndex = boards[boardIndex].columns[columnIndex].tasks.findIndex(task => task.title == currentTask.title);
  let subtaskStatus = tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[subtaskIndex].isCompleted;
  tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[subtaskIndex].isCompleted = !subtaskStatus;
  console.log("subtask clicked" + tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[subtaskIndex].title)
  setBoards(tempBoards);
}

// useEffect(()=>{
//   setCurrentTask(prevTask => prevTask);
// }, [boards])
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
  console.log(JSON.parse(localStorage.getItem('boards')));
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
