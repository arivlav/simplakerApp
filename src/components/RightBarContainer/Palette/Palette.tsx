import React from 'react';
import './Palette.css';
// import './RightBarContainer.css'

// function watchColorPicker(event)
// {
//     document.getElementById("head").forEach(function(p)) {
//         p.style.color = event.target.value;
//     });

// }

function Palette() {
    // debugger;
    let curentColor: string = "#e66465";
    return (
        <div className="palette">
            <div>Choose your current color:</div>
            {/* <span>
                <input type="text" value="#FFF" />
            </span> */}
            <div>
                <input type="color" id="head" name="head" value={curentColor} />
                <label htmlFor="head"></label>
            </div>
            {curentColor};
        </div>
    );
}

export default Palette;