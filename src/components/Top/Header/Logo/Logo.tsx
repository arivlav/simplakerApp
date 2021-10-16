import React from 'react';
import s from './Logo.module.css'

function Logo() {
    return (
      <div className={`${s.logo}`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/SIMPLE-Logo.png/800px-SIMPLE-Logo.png" alt="simplaker"/>
      </div>
    );
  }
  
  export default Logo;