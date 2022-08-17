import Sidebar from "./Components/Sidebar";
import "./Styles/App.scss";
import data from "./data";
import Main from "./Components/Main";
import { useState } from "react";
import ContextProvider from "./ContextProvider";
import Modal  from "./Components/Modal";

function App() {
  let { boards } = data;
  const [boardActive, setBoardActive] = useState(boards[0]);
  const [currentTask, setCurrentTask] = useState(boards[0].columns[2].tasks[1]);
  const [modalVisible, setModalVisible] = useState(false);
  // values to be made available to context provider 
  let value = {
    data,
    boards,
    boardActive,
    setBoardActive,
    currentTask,
    setCurrentTask,
    modalVisible, setModalVisible,
  }
  
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
