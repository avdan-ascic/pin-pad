import React from "react";
import Number from "./Number";

const Numbers = (props) => {
    return (
        <div>
            <div>
                <Number disabled={props.disabled} onClick={props.onClick}>
                    1
                </Number>
                <Number disabled={props.disabled} onClick={props.onClick}>
                    2
                </Number>
                <Number disabled={props.disabled} onClick={props.onClick}>
                    3
                </Number>
            </div>
            <div>
                <Number disabled={props.disabled} onClick={props.onClick}>
                    4
                </Number>
                <Number disabled={props.disabled} onClick={props.onClick}>
                    5
                </Number>
                <Number disabled={props.disabled} onClick={props.onClick}>
                    6
                </Number>
            </div>
            <div>
                <Number disabled={props.disabled} onClick={props.onClick}>
                    7
                </Number>
                <Number disabled={props.disabled} onClick={props.onClick}>
                    8
                </Number>
                <Number disabled={props.disabled} onClick={props.onClick}>
                    9
                </Number>
            </div>
            <div className="middle">
                <Number disabled={props.disabled} onClick={props.onClick}>
                    0
                </Number>
            </div>
        </div>
    );
};

export default Numbers;