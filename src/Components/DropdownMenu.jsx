import { useCustomUseContext } from "../ContextProvider";

export default function DropdownMenu() {
  let {
    boardActive: { columns },
  } = useCustomUseContext();

  return (
    <select className="dropdown" name="status" id="status">
      {columns.map((col, index) => {
        return <option key={index} value={col.name}>{col.name}</option>;
      })}
    </select>
  );
}
