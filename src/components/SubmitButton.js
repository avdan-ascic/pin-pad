import React from "react";

const SubmitButton = (props) => {
    return (
        <button type={props.type || "button"} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default SubmitButton;