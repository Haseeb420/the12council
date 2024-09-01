import React from "react";

function Modal({ children, isOpen, toggleModal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg relative">
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
