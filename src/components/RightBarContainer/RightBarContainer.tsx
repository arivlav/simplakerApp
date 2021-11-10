import React, { useState } from 'react';
import ColorPicker from './ColorPicker/ColorPicker';


import './RightBarContainer.css'

function RightBarContainer() {
  // const [state, updateState] = useState("#FFF");

  // const handleInput = (event: string) => {
  //   updateState(event.target.value);
  // }
  
    return (
      <div className="RightBarContainer">
             <ColorPicker />  
      </div>
    );
  }
  
  export default RightBarContainer;

  // export default function RightBarContainer() {
  //   const [state, updateState] = React.useState("#FFF");

  //   const handleInput = e => {
  //     updateState(e.target.value);      
  //   };

  //   return <Palette value={state} onChange={handleInput} />;
  // }