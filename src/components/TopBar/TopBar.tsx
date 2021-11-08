import React from 'react';
import Bars from './Bars/Bars';
import s from './TopBar.module.css'

function TopBar() {
    return (
      <div className={`${s.top}`}>
          <Bars />
      </div>
    );
  }
  
  export default TopBar;