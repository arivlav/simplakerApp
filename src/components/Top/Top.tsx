import React from 'react';
import Bars from './Bars/Bars';
import Header from './Header/Header';
import s from './Top.module.css'

function Top() {
    return (
      <div className={`${s.top}`}>
          <Header />
          <Bars />
      </div>
    );
  }
  
  export default Top;