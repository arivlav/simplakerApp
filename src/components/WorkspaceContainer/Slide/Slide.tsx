import React from 'react';
import Logo from '../../Top/Header/Logo/Logo';
import Content from './Content/Content';
import s from "./Slide.module.css";

/* type SlideProps = {
    className: string,
} */

function Slide(/* props: SlideProps */) {
    return ( 
      <div className={`${s.slide}`}>
          <Content viewBox={"0 0 716 404"} widthContent="716px" heightContent="404px"/>
      </div>  
    );
}

export default Slide;