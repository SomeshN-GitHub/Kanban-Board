import { useCustomUseContext } from "../ContextProvider";

export default function DropdownMenu() {
  let {
    boardActive: { columns },
  } = useCustomUseContext();

  return (
    <select className="dropdown" name="status" id="status">
      {columns.map((col) => {
        return <option value={col.name}><p>{col.name}</p></option>;
      })}
    </select>
  );
}
