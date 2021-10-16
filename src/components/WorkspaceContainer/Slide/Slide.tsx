import React from 'react';
import s from './Slide.module.css';

/* type SlideProps = {
    className: string,
} */

function Slide(/* props: SlideProps */) {
    return ( 
      <div className={`${s.slide}`}>
          Slide
      </div>  
    );
}

export default Slide;