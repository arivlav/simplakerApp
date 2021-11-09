import React from 'react';
import './Button.css';

type ButtonProps = {
    title: string,
    className: string    
}


function Button(props: ButtonProps)
{
    return (
    //     <div className="toolBarItem">
    //     <div title="Add slide" className="btn btn_add">
    //     </div>
    //   </div>
        <button title={props.title} className={props.className}>
            
        </button>
    )

}

export default Button;