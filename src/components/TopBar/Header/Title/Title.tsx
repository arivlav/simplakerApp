import React from 'react';
import s from './Title.module.css'

type TitleProps = {
  text: string;
}

function Title(props: TitleProps) {
    return (
      <div className={`${s.title}`}>      
        {props.text}
      </div>
    );
  }
  
  export default Title;