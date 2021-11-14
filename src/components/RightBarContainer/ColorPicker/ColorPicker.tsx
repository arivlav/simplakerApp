import React, { useState } from 'react';
import Circle from '../../WorkspaceContainer/Slide/Content/Primitive/PrimitiveCircle';
import './ColorPicker.css';

// type ColorPickerProps = {
//     value: string,
//     onChange(): string
// }

function ColorPicker() {
    let [currentColor, setCurrentColor] = useState("#f1f1f1");

    let chooseColor = React.createRef<any>();

    function showColor() {
        setCurrentColor(chooseColor.current.value);
        console.log(currentColor);
    }
    return (
        <div className="palette">
            <div>Choose your current color:</div>
            <div>
                <input onInput={showColor} ref={chooseColor} type="color" id="head" name="head" value={currentColor} />
                <label htmlFor="head"></label>
            </div>
            {currentColor};
            <div>
                <svg width="100%" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="45" cy="300" r="20" fill={currentColor} />
                    <text x="75" y="305" fill={currentColor} fontFamily="Roboto" fontStyle="bold" fontSize="16pt">
                        Test ColorPicker
                    </text>
                </svg>
            </div>
        </div>
    );
}

export default ColorPicker;