import React from 'react'
import './Slide.css'
import {Slide as SlideType} from 'src/types'

type propsSlide  = {
  className: string;
  text: string;
  slide: SlideType;
}

function Slide(props: propsSlide) {
  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, slide: SlideType) {
    console.log('slide', slide);
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {

  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, slide: SlideType) {
    e.preventDefault();
    console.log('slide', slide);
  }
  return (
    <div 
      className="slide-miniature" 
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, props.slide)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e, props.slide)}>
      <div className="slide-miniature__checkbox"><input type="checkbox" defaultValue={props.slide.id} /></div>
      <div className={props.className}>
        <div className="slide__inner slide__inner-ratio">
          <div className="slide__content">
            {props.text}            
          </div>  
        </div>
      </div>
    </div>
  );
}
  
export default Slide;