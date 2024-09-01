import React from "react";
import { ValidationError } from "@formspree/react";

function InputField({ id, type, name, label, errors }) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-gray-700 font-semibold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        required
      />
      <ValidationError prefix={label} field={name} errors={errors} />
    </div>
  );
}

export default InputField;
