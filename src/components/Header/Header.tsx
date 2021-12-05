import React from 'react'
import s from './Header.module.css'
import Logo from './Logo/Logo'
import Title from './Title/Title'

function Header() {
  return (
    <div className={`${s.header}`}>
      <Logo />
      <Title />
    </div>
  );
}

export default Header;