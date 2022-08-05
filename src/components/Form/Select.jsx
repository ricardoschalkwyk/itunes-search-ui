import React from "react";
import PropTypes from "prop-types";

function Select({ children, id, name, onChange, value }) {
  return (
    <select
      className="rounded-sm border-solid border-1 border-slate-900 py-2 px-3"
      name={name}
      id={id}
      value={value}
      onChange={(e) => {
        onChange?.(e);
      }}
    >
      {children}
    </select>
  );
}

Select.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Select;
