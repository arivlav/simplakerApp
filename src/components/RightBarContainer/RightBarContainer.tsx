import React from 'react';
import Palette from './Palette/Palette';

import './RightBarContainer.css'

function RightBarContainer() {
  
    return (
      <div className="RightBarContainer">
             <Palette />  
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