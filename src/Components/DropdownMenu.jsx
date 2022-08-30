import { Select } from "@mui/material";
import { useCustomUseContext } from "../ContextProvider";

export default function DropdownMenu(props) {
  let {
    boardActive: { columns },
  } = useCustomUseContext();

  return (
    <select className="dropdown" onInput={props.handleColumnChange} name="status" id="status">
      <option>Select ...</option>
      {columns.map((col, index) => {
        return <option key={index} value={col.name}>{col.name}</option>;
      })}
    </select>
  );
}
