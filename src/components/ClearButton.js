import React from "react";

const ClearButton = (props) => {
    return (
        <button type={props.type || "button"} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default ClearButton;