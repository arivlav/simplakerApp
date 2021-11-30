import React from 'react'
import s from './Header.module.css'
import Logo from './Logo/Logo'
import Title from './Title/Title'
import {useDispatch, useSelector} from 'react-redux'
import {changeTitle} from 'src/store/actions/editorAction'
import { RootState } from 'src/store/store'


function Header() {
  let newTitle: string = 'Презенташка';
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.editor.presentation.title);
  console.log(title);
    return (
      <div className={`${s.header}`}>
        <Logo />
        <Title onClick={() => dispatch(changeTitle(newTitle))} text={title} />
      </div>
    );
  }
  
  export default Header;