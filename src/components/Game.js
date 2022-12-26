import React, { useState } from "react";
import Numbers from "./Numbers";
import ClearButton from "./ClearButton";
import SubmitButton from "./SubmitButton";

const Game = () => {
    const pin = 1234;
    let simbol = [];
    let inputNumber = "";

    const [message, setMessage] = useState("");
    const [enteredNumber, setEnteredNumber] = useState([]);
    const [disabledButton, setDisabledButton] = useState(false);
    const [attempts, setAttempts] = useState(3);

    const onClick = (e) => {
        inputNumber = e.target.innerText;
        setEnteredNumber([...enteredNumber, inputNumber]);

        for (let i = 0; i < enteredNumber.length + 1; i++) {
            simbol.push("*");
            setMessage(simbol.join(""));
        }
        if (enteredNumber.length + 1 === 4) {
            setDisabledButton(true);
        }
    };

    function checkPin() {
        if (Number(enteredNumber.join("")) === pin) {
            setMessage("OK");
            setAttempts(3);

            setDisabledButton(true);
            setTimeout(() => {
                setDisabledButton(false);
                setEnteredNumber([]);
                setMessage("");
            }, 2000);
        } else if (attempts === 1) {
            setDisabledButton(true);
            setMessage("LOCKED");
            setTimeout(() => {
                setAttempts(3);
                setEnteredNumber([]);
                setDisabledButton(false);
                setMessage("");
            }, 30000);
        } else {
            setMessage("ERROR");
            setAttempts(attempts - 1);
            setTimeout(() => {
                setEnteredNumber([]);
                setDisabledButton(false);
                setMessage("");
            }, 2000);
        }
    }

    const clear = () => {
        setEnteredNumber("");
        setMessage("");
        setDisabledButton(false);
    };

    function submitHandler(e) {
        e.preventDefault(e);
        if (enteredNumber.length === 4 && attempts > 0) {
            checkPin();
        }
    }

    return (
        <div className="container">
            <form className="display" onSubmit={submitHandler}>
                <input type="text" value={message} readOnly={true} onChange={onClick} />
            </form>
            <div className="buttons">
                <Numbers disabled={disabledButton} onClick={onClick} />
                <div className="left">
                    <ClearButton className="custombutton" onClick={clear}>
                        clear
                    </ClearButton>
                </div>
                <div className="right">
                    <SubmitButton className="custombutton" onClick={submitHandler}>
                        enter
                    </SubmitButton>
                </div>
            </div>
        </div>
    );
};

export default Game;