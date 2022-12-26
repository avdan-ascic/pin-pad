import React from "react";

const Number = (props) => {
  return (
    <button
      disabled={props.disabled}
      type={props.type || "button"}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Number;