import React from 'react';
import './Slide.css';

type propsSlide  = {
  className: string;
  text: string;
}



function Slide(props: propsSlide) {
    return (
      <div className={props.className}>
        <div className="slide__inner slide__inner_ratio">
          <div className="slide__content">
            {props.text}
          </div>  
        </div>
      </div>
    );
  }
  
  export default Slide;