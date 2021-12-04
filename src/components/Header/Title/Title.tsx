import React from 'react';
import s from './Title.module.css'
import { useSelector} from 'react-redux'
import {RootState} from 'src/store/store'

type TitleProps = {
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
  // text: string;
}

function Title(props: TitleProps) {
  const title = useSelector((state: RootState) => state.editor.presentation.title);
  return (
    <div className={`${s.title}`}>      
      {title}
    </div>
  );
}
  
export default Title;