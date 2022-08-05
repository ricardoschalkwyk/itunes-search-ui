import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

// This component is for a dianamic Button component.

function Button({ className, children, disabled, onClick, type = "button" }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "px-3 py-1 bg-slate-500 rounded hover:bg-neutral-900 text-white",
        className
      )}
      onClick={(e) => {
        onClick?.(e);
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
