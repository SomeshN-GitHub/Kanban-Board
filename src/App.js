import Sidebar from "./Components/Sidebar";
import "./Styles/App.scss";
import data from "./data";
import Main from "./Components/Main";
import { useState } from "react";
import ContextProvider from "./ContextProvider";

function App() {
  let { boards } = data;
  const [boardActive, setBoardActive] = useState(boards[0]);
  let value = {
    data,
    boards,
    boardActive,
    setBoardActive,
  }
  
  return (
    <div className="App">
      <ContextProvider value={value}>
        <Sidebar data={data} />
        <Main boardActive={boardActive} />
      </ContextProvider>
    </div>
  );
}

export default App;
