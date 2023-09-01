import React from "react";


const Modal=({children,isOpen,closeModal})=> {



  return (
    <div className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container">
        <button onClick={closeModal} className="focus:outline-none text-white bg-red-500 hover:bg-sky-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-colors duration-300 absolute right-10">cerrar</button>
        {children}
      </div>
     
    </div>
  );
}

export default Modal