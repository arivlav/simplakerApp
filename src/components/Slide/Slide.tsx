import React from 'react'
import './Slide.css'
import {Content as ElementType, Identifier, Slide as SlideType} from 'src/types'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { makeActiveSlide } from 'src/store/actionCreators/editorAction'
import { selectedSlidesAdd, selectedSlidesDelete } from 'src/store/actionCreators/editorAction'
import { turnRightBar } from 'src/store/actionCreators/viewAction'
import { ACTIVE_SLIDE_FORM, EMPTY_RIGHT_BAR } from 'src/components/RightBarContainer/RightBarContainer'
import { isColor, useResize } from 'src/helpers/editorHelper'
import Content from 'src/components/Slide/content/Content'

type propsSlide  = {
  className: string;
  slide: SlideType;
  draggable: boolean;
  isWorkspace: boolean;
}

function Slide(props: Props) {

  const slideRef = React.useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  
  const { width, height } = useResize(slideRef);

  function toggleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const identifier: Identifier = e.target.value;
    if (e.target.checked) {
      props.selectedSlidesAdd(identifier);
    } else {
      props.selectedSlidesDelete(identifier);
    }
  }

  function isCheckedCheckbox(identifier: Identifier): boolean
  {
    const result = props.selectedSlides.selectedSlides.find((id: Identifier) => id === identifier);
    return (result !== undefined);
  }

  const backgroundValue = props.slide.background.value;
  let slideBack: React.CSSProperties = (isColor(backgroundValue)) 
    ? { backgroundColor: backgroundValue } 
    : { backgroundImage: `url(${backgroundValue})`, backgroundRepeat: 'no-repeat' };

  function changeActiveSlide(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    props.makeActiveSlide(props.slide.id);
    props.turnRightBar(EMPTY_RIGHT_BAR);
    props.turnRightBar(ACTIVE_SLIDE_FORM);
  }

  return (
    <div 
      className="slide-miniature"
      onClick={(e) => changeActiveSlide(e)} >
      <div className={(!props.selectedSlides.selectedMode || props.isWorkspace) ? "slide-miniature__checkbox" : "slide-miniature__checkbox slide-miniature__checkbox_visible"}>
        <input type="checkbox" defaultValue={props.slide.id} checked={isCheckedCheckbox(props.slide.id)} onChange={(e) => toggleCheckbox(e)} onClick={(e) => {e.stopPropagation()}}  />
      </div>
      <div className={props.className}>
        <div className="slide__inner slide__inner-ratio">
          <div className="slide__content" ref={slideRef} style={slideBack}> 
            {props.slide.contentList.map((content, index) => <Content key={(props.isWorkspace) ? `workContent-${content.id}` : `content-${content.id}`} content={content} draggable={props.isWorkspace} slideSize={{slideWidth: width, slideHeight: height}} />)}         
          </div>  
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  let currentSlide = state.editor.presentation.slideList.find((slide) => slide.id === state.editor.presentation.activeSlide);
  return {
    activeSlide: state.editor.presentation.activeSlide,
    selectedSlides: state.editor.presentation.selectedSlides,
    currentSlide: currentSlide,
    // contentList: currentSlide?.contentList as Array<ElementType>,
  }
}
  
const mapDispatchToProps = (dispatch: Function) => {
  return {
    makeActiveSlide: (slide: Identifier) => dispatch(makeActiveSlide(slide)),
    selectedSlidesDelete: (slide: Identifier) => dispatch(selectedSlidesDelete(slide)),
    selectedSlidesAdd: (slide: Identifier) => dispatch(selectedSlidesAdd(slide)),
    turnRightBar: (rightBarContent: Number) => dispatch(turnRightBar(rightBarContent)),
  }
}
  
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps & propsSlide;

export default connect(mapStateToProps, mapDispatchToProps)(Slide);