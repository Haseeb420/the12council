import React from "react";

function TextArea({ id, name, label, rows, errors }) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-gray-700 font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        rows={rows}
        required
      ></textarea>
    </div>
  );
}

export default TextArea;
