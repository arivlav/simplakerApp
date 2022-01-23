import React from 'react'
import './Content.css'
import {Content as ElementType, Identifier} from 'src/types'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { SLIDE_HEIGHT, SLIDE_WIDTH } from 'src/helpers/editorHelper' 
import { makeActiveSlide } from 'src/store/actionCreators/editorAction'
import { addContent } from 'src/store/actionCreators/editorAction'
import { turnRightBar } from 'src/store/actionCreators/viewAction'
import { ACTIVE_SLIDE_FORM, EMPTY_RIGHT_BAR } from 'src/components/RightBarContainer/RightBarContainer'
import { isColor } from 'src/helpers/editorHelper'
import Image from 'src/components/WorkspaceContainer/Slide/Content/Image/Image'
import { start } from 'repl'

type propsContent = {
  content: ElementType;
  draggable: boolean;
  slideSize: {
    slideWidth: number,
    slideHeight: number
  }
}

function Content(props: Props) {
  const slideRatio = props.slideSize.slideWidth/SLIDE_WIDTH;
  let element: JSX.Element;
  let contentStyle: React.CSSProperties = {};
  let elementStyle: React.CSSProperties = {};
  let startX: number = 0;
  let endX: number = 0;
  let startY: number = 0;
  let endY: number = 0;
  const [dX, setDX] = React.useState(0);
  const [dY, setDY] =React.useState(0);
  switch (props.content.name) {
    case "image":
      elementStyle.objectFit='contain';
      elementStyle.width =  '100%';
      elementStyle.maxHeight = '100%';
      contentStyle.maxWidth = slideRatio*props.content.width + 'px';
      contentStyle.left = slideRatio*props.content.coordinates.x;
      contentStyle.top = slideRatio*props.content.coordinates.y;
      element = <img src={props.content.type.imageUrl} style={elementStyle} />;
      break;
    default:
      element=<span></span>  
  }

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
    e.stopPropagation();
    if (props.draggable) {
      startX = e.clientX;
      startY = e.clientY;
      console.log('cnhfh '+ startX);
    }
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    e.stopPropagation();
    if (props.draggable) {
      endX = e.clientX;
      endY = e.clientY;
      console.log(e);
    }
  }

  return (
    <div className="content" style={contentStyle} draggable={props.draggable} onDragStart={dragStartHandler}  onDrag={dragEndHandler}>
      {element}
    </div>
  );
}

function mapStateToProps(state: RootState) {
  let currentSlide = state.editor.presentation.slideList.find((slide) => slide.id === state.editor.presentation.activeSlide);
  let currentContent = currentSlide?.contentList.find((content) => content.id === currentSlide?.activeContent);
  return {
    activeSlide: state.editor.presentation.activeSlide,
    selectedSlides: state.editor.presentation.selectedSlides,
    currentContent: currentContent as ElementType,
  }
}
  
const mapDispatchToProps = (dispatch: Function) => {
  return {
    // makeActiveSlide: (slide: Identifier) => dispatch(makeActiveSlide(slide)),
    // selectedSlidesDelete: (slide: Identifier) => dispatch(selectedSlidesDelete(slide)),
    // selectedSlidesAdd: (slide: Identifier) => dispatch(selectedSlidesAdd(slide)),
    // turnRightBar: (rightBarContent: Number) => dispatch(turnRightBar(rightBarContent)),
  }
}
  
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps & propsContent;

export default connect(mapStateToProps, mapDispatchToProps)(Content);