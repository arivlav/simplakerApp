import React from 'react';
import Slide from '../Slide/Slide';
import './WorkspaceContainer.css';

function WorkspaceContainer() {
  return (
    <div className="WorkspaceContainer">
      <div className="WorkspaceContainer__inner">
        <Slide className="slide" text="Hello" /> 
      </div>    
    </div>
  );
}

export default WorkspaceContainer;