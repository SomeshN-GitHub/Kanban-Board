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
  const [currentColumnIndex, setCurrentColumnIndex] = useState(null);
  const [currentTask, setCurrentTask] = useState(boards[0].columns[2].tasks[1]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState("TaskDetailedModal");

// useEffect(()=>{
//   let boards = localStorage.getItem('boards');
//   console.log("LocalSto" + typeof(JSON.parse(boards)));
//   // if(boards) setBoards(boards);
//   // else setBoards(data.boards);  
// },[])

useEffect(()=>{
  localStorage.setItem('boards', JSON.stringify(boards));
  setCurrentTask(currentTask);
  // console.log("boards updated");
},[boards])

 // handle task movement e.g. from todo -> doing
 const handleColumnChange = (colName) => {
  // console.group("Handle column Chnage");
  
  console.log(colName + " Dropped");
  // old column
  let tempBoards = [...boards];
  let boardIndex = boards.findIndex((board) => board.id === boardActive.id);
  // find the old column index
  let columnIndex = boards[boardIndex].columns.findIndex(
    (column) => column.name == currentTask.status
  );

  if(boardActive.columns[columnIndex].name == colName) return;

  // find the task index
  let taskIndex = boards[boardIndex].columns[columnIndex].tasks.findIndex(
    (task) => task.title == currentTask.title
  );

  // Change the column name on the task
  tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex] = {
    ...tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex],
    status: colName,
  };

  let taskToMove = {
    ...tempBoards[boardIndex].columns[columnIndex].tasks[taskIndex],
  };
  setCurrentTask({ ...taskToMove });

  // target column (where task is to be moved)
  let targetColumnIndex = boards[boardIndex].columns.findIndex(
    (column) => column.name == colName
  );
  // add task to new column
  tempBoards[boardIndex].columns[targetColumnIndex].tasks.push(taskToMove);

  // delete task from previous column
  tempBoards[boardIndex].columns[columnIndex].tasks.splice(taskIndex, 1);

  setBoards((prevBoards) => [...tempBoards]);

  // console.groupEnd("END Handle column Chnage");
};

// useEffect(()=>{
//   setCurrentTask(prevTask => prevTask);
// }, [boards])
  // values to be made available to context provider 
  let value = {
    data,
    boards,
    setBoards,
    boardActive,
    setBoardActive,
    currentTask,
    setCurrentTask,
    modalVisible, setModalVisible,
    currentColumnIndex, setCurrentColumnIndex,
    modal, setModal,handleColumnChange
  }
  // console.log(JSON.parse(localStorage.getItem('boards')));
  return (
    <div className="App">
      <ContextProvider value={value}>
        <Sidebar data={data} />
        <Main />
        { modalVisible && <Modal />}
      </ContextProvider>
    </div>
  );
}

export default App;
