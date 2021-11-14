import React from 'react';
import style from './Footer.module.css';

function getYear() {
  return new Date().getFullYear();
}

function Footer() {
  const date = new Date();
  return (
    <div className={`${style.footer}`}>
      <p>&copy;Simplaker, { getYear() }</p> 
    </div>
  );
  }
  
export default Footer;