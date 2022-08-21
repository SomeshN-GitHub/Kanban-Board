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
  }
  console.log(JSON.parse(localStorage.getItem('boards')));
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
