import React, { MouseEventHandler } from 'react';
import './Button.css';

type ButtonProps = {
    title: string,
    className: string,
    onclick: Function
}



function Button(props: ButtonProps) {
    const headingClickedHandler: MouseEventHandler = (
        event: React.MouseEvent<HTMLHeadingElement>
      ) => {
        props.onclick();
      };
    return (
        <button title={props.title} className={props.className} onClick={headingClickedHandler}></button>
    )
}

export default Button;