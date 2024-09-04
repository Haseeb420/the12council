import React from "react";

function Modal({ children, isOpen, toggleModal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-60 flex items-center justify-center z-50 modal">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg relative">
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900  font-bold cross-btn"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
