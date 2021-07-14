import React from "react";
import CheckedIcon from "./checked.svg";
import UncheckedIcon from "./unchecked.svg";


export const Check = () => {
    return <img src={CheckedIcon} width={50} alt='Check' className="todo-state-icon" />;
}

export const Uncheck = () => {
    return <img src={UncheckedIcon} width={50} alt='Uncheck' className="todo-state-icon" />;
}