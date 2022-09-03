import { useRef, useEffect } from "react";
import TaskDetailedModal from "./TaskDetailedModal";
import { useCustomUseContext } from "../ContextProvider";
import DropdownMenu from "./DropdownMenu";
import AddTaskModal from "./AddTaskModal";

const Modal = () => {
  const taskRef = useRef();
  const { currentTask, setModalVisible } = useCustomUseContext();
  function handleOutsideClick(e) {
    // console.log(taskRef.current?.contains(e.target));
    if (!taskRef.current?.contains(e.target)) setModalVisible(false);
  }

  useEffect(() => {
    document
      .querySelector(".modal_bg")
      .addEventListener("click", handleOutsideClick);
    return () => {
      console.log("modal unmounted");
      // document.querySelector(".modal_bg").removeEventListener("click", handleOutsideClick);
    };
  }, [currentTask]);

  return (
    <>
      <div className="modal_bg"></div>
      <div className="modal" id="modal" ref={taskRef}>
        {/* <TaskDetailedModal  /> */}
        <AddTaskModal />
      </div>
    </>
  );
};

export default Modal;
