import React, { MouseEventHandler } from 'react';
import "./button.css";

interface ButtonType {
    label: string
    onClick: MouseEventHandler
}

const Button = (props: ButtonType) => {
    return (
        <button onClick={props.onClick} className='btn'>{props.label}</button>
    )
}

export default Button