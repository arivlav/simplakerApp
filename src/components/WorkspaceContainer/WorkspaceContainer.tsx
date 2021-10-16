import React from 'react';
import Slide from './Slide/Slide';
import './WorkspaceContainer.css';
import { BrowserRouter, Route } from 'react-router-dom';



function WorkspaceContainer() {
  return (
    <div className="WorkspaceContainer">
      <Slide />     
    </div>
  );
}

export default WorkspaceContainer;