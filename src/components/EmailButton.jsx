import React from "react";

function EmailButton({ toggleModal }) {
  return (
    <p
      onClick={toggleModal}
      className="px-4 py-2 text-center cursor-pointer text-blue-600 font-semibold"
    >
      contact@the12councils.com
    </p>
  );
}

export default EmailButton;
