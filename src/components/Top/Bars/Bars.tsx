import React from 'react';
import s from './Bars.module.css'
import MenuBar from './MenuBar/MenuBar';
import ToolBar from './ToolBar/ToolBar';

function Bars() {
    return (
      <div className={`${s.bars}`}>
        <MenuBar />
        <ToolBar />

      </div>
    );
  }
  
  export default Bars;