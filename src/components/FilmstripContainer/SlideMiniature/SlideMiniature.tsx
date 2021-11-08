import React from 'react';
import './SlideMiniature.css';

type propsSlideMiniature  = {
  text: string;
}



function SlideMiniature(props: propsSlideMiniature) {
    return (
      <div className="slideMiniature">
        <div className="slideMiniature-inner slideMiniature-ratio">
          <div className="slideMiniature-content">
            {props.text}
          </div>  
        </div>
      </div>
    );
  }
  
  export default SlideMiniature;

  // editor.slidelist.forEach(function (value) {
  //   <Slide width={props.blabla}/>
  // });