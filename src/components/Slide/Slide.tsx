import React from 'react'
import './Slide.css'
import {Identifier, Slide as SlideType} from 'src/types'
import { connect } from 'react-redux'
import { RootState, store } from 'src/store/store'
import { makeActiveSlide } from 'src/store/actionCreators/editorAction'
import { selectedSlidesAdd, selectedSlidesDelete } from 'src/store/actionCreators/editorAction'

type propsSlide  = {
  className: string;
  slide: SlideType;
}

function Slide(props: Props) {

  function toggleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const identifier: Identifier = e.target.value;
    if (e.target.checked) {
      props.selectedSlidesAdd(identifier);
    } else {
      props.selectedSlidesDelete(identifier);
    }
    console.log(props.selectedSlides);
  }

  function isCheckedCheckbox(identifier: Identifier): boolean
  {
    const result = props.selectedSlides.find((id: Identifier) => id === identifier);
    if (result !== undefined) {
      return true;
    }
    return false;
  }

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, slide: SlideType) {
    console.log('taskatelnyi slide', slide);
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

  let slideBack: React.CSSProperties = (props.slide.background.value === 'backgroundColor') ? { backgroundColor: props.slide.background.backgroundColor } : {backgroundImage: props.slide.background.backgroundImage, backgroundRepeat: 'no-repeat' };

  function bla() {
    props.makeActiveSlide(props.slide.id);
    console.log(props.activeSlide);
  }

  return (
    <div 
      className="slide-miniature"
      //onClick={bla(props.slide.id)} 
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, props.slide)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e, props.slide)}>
      <div className={(!props.visibleModeCheckbox) ? "slide-miniature__checkbox" : "slide-miniature__checkbox slide-miniature__checkbox_visible"}><input type="checkbox" defaultValue={props.slide.id} onChange={(e) => toggleCheckbox(e)} defaultChecked={isCheckedCheckbox(props.slide.id)}  /></div>
      <div className={props.className}>
        <div className="slide__inner slide__inner-ratio">
          <div className="slide__content" style={slideBack}>           
          </div>  
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    activeSlide: state.editor.presentation.activeSlide,
    selectedSlides: state.editor.presentation.selectedSlides.selectedSlides,
    visibleModeCheckbox: state.editor.presentation.selectedSlides.selectedMode,
  }
}
  
const mapDispatchToProps = (dispatch: Function) => {
  return {
    makeActiveSlide: (slide: Identifier) => dispatch(makeActiveSlide(slide)),
    selectedSlidesDelete: (slide: Identifier) => dispatch(selectedSlidesDelete(slide)),
    selectedSlidesAdd: (slide: Identifier) => dispatch(selectedSlidesAdd(slide)),
  }
}
  
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps & propsSlide;

export default connect(mapStateToProps, mapDispatchToProps)(Slide);