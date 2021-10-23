import React from 'react';
import './SlideMiniature.css';

type propsSlideMiniature  = {
  text: string;
}



function SlideMiniature(props: propsSlideMiniature) {
    return (
      <div className="slideMiniature">
        {props.text}
      </div>
    );
  }
  
  export default SlideMiniature;

  // editor.slidelist.forEach(function (value) {
  //   <Slide width={props.blabla}/>
  // });