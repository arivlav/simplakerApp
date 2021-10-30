import React from 'react';
import s from './Bars.module.css';
import ToolBar from './ToolBar/ToolBar';

function Bars() {
  return (
    <div className={`${s.bars}`}>
      <ToolBar />
    </div>
  );
}

export default Bars;