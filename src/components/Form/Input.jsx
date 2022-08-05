import React from "react";

import PropTypes from "prop-types";

function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      className="rounded border-solid border-1 border-slate-900 py-2 px-3"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        onChange?.(e);
        console.log(onChange);
      }}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
