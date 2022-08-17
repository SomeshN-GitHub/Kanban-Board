import { useRef, useEffect } from "react";
import TaskDetailedModal from "./TaskDetailedModal";

const Modal = () => {
  const modalRef = useRef();
  useEffect(() => {
    console.log(modalRef.current);
  
    return () => {
      console.log("modal unmounted")
    }
  }, [])
  
  return (
    <div ref={modalRef} className="modal" id="modal">
      <TaskDetailedModal />
    </div>
  );
};

export default Modal;
