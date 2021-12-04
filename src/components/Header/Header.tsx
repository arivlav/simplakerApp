import React from 'react'
import s from './Header.module.css'
import Logo from './Logo/Logo'
import Title from './Title/Title'
import {changeTitle} from 'src/store/actions/editorAction'
import {useDispatch} from 'react-redux'

function Header() {
  let newTitle: string = 'Презенташка';
  const dispatch = useDispatch();
  return (
    <div className={`${s.header}`}>
      <Logo />
      <Title onClick={dispatch(changeTitle(newTitle))} />
    </div>
  );
}
  
export default Header;