import React, { MouseEventHandler } from 'react';
import './Button.css';

type ButtonProps = {
    title?: string,
    className: string,
    onclick: Function,
    label?: string
}

function Button(props: ButtonProps) {
    const headingClickedHandler: MouseEventHandler = (
        event: React.MouseEvent<HTMLHeadingElement>
      ) => {
        props.onclick(event);
      };
    return (
        <button title={props.title} className={props.className} onClick={headingClickedHandler}>{props.label}</button>
    )
}

export default Button;