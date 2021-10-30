import React from 'react';
import Bars from './Bars/Bars';
import Header from './Header/Header';
import s from './TopBar.module.css'

function TopBar() {
    return (
      <div className={`${s.top}`}>
          <Header />
          <Bars />
      </div>
    );
  }
  
  export default TopBar;