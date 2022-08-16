import Sidebar from "./Components/Sidebar";
import "./Styles/App.scss";
import data from './data'
import Main from "./Components/Main";
import { useState, useContext } from "react";

function App() {
  let {boards} = data;
const [boardActive, setBoradActive] = useState(boards[0])
  return (
    <div className="App">
      <Sidebar data={data}/>
      <Main boardActive={boardActive}/>
    </div>
  );
}

export default App;
