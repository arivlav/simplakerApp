import React from 'react';
import './Button.css';

type ButtonProps = {
    title: string,
    className: string
}

function Button(props: ButtonProps) {
    return (
        <button title={props.title} className={props.className}></button>
    )
}

export default Button;