import { useCustomUseContext } from "../ContextProvider";

export default function DropdownMenu(props) {
  let {
    boardActive: { columns },
  } = useCustomUseContext();

  return (
    <select className="dropdown" onChange={props.handleColumnChange} name="status" id="status">
      {columns.map((col, index) => {
        return <option key={index} value={col.name}>{col.name}</option>;
      })}
    </select>
  );
}
