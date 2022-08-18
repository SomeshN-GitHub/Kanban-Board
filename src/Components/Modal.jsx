import { useRef, useEffect } from "react";
import TaskDetailedModal from "./TaskDetailedModal";
import { useCustomUseContext } from '../ContextProvider';

const Modal = () => {
  const modalRef = useRef();
  const { setModalVisible} = useCustomUseContext();
  function handler (e){
      if(! modalRef.current?.contains(e.target)){
        setModalVisible(false);
        console.log(modalRef.current?.contains(e.target));
      }    
  }

  useEffect(() => {
    console.log('model ref current'+modalRef.current);
    document.addEventListener("click", handler);
  
    return () => {
      console.log("modal unmounted");
        document.removeEventListener("click", handler);
    }
  }, [])
  
  return (
    <div ref={modalRef} className="modal" id="modal">
      <TaskDetailedModal />
    </div>
  );
};

export default Modal;
