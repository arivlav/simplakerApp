import React from 'react'
import './Content.css'
import { Content as ElementType, Identifier, Point } from 'src/types'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { SLIDE_HEIGHT, SLIDE_WIDTH, useDragAndDrop } from 'src/helpers/editorHelper'
import { makeActiveSlide } from 'src/store/actionCreators/editorAction'
import { setCoordinates, setActiveContent } from 'src/store/actionCreators/editorAction'
import { turnRightBar } from 'src/store/actionCreators/viewAction'
import { ACTIVE_CONTENT_FORM, ACTIVE_SLIDE_FORM, EMPTY_RIGHT_BAR } from 'src/components/RightBarContainer/RightBarContainer'
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
  const slideRatio = props.slideSize.slideWidth / SLIDE_WIDTH;
  let element: JSX.Element;
  let contentStyle: React.CSSProperties = {};
  let elementStyle: React.CSSProperties = {};
  const contentRef = React.useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const emptyRef = React.useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  const coord = useDragAndDrop(contentRef, slideRatio, props.content, setContentCoordinates);

  function setContentCoordinates(position: Point) {
    // props.setCoordinates(position.x, position.y);
    // console.log(props.currentContent.coordinates);
    // changeActiveContent(e);
  }

  function changeActiveContent(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (props.modeEditor !== "view") {
      props.setActiveContent(props.content.id);
      props.turnRightBar(EMPTY_RIGHT_BAR);
      props.turnRightBar(ACTIVE_CONTENT_FORM);
    }
    if (props.draggable) e.stopPropagation();
  }

  contentStyle.zIndex = props.content.zIndex;
  switch (props.content.name) {
    case "image":
      elementStyle.objectFit = 'contain';
      elementStyle.width = '100%';
      elementStyle.maxHeight = '100%';
      contentStyle.width = slideRatio * props.content.width + 'px';
      contentStyle.left = slideRatio * coord.x;
      contentStyle.top = slideRatio * coord.y;
      element = <img src={props.content.type.imageUrl} style={elementStyle} />;
      break;
    case "circle":
      contentStyle.width = slideRatio * props.content.width;
      contentStyle.height = contentStyle.width;
      contentStyle.left = slideRatio * coord.x;
      contentStyle.top = slideRatio * coord.y;
      element = <svg>
          <circle r={contentStyle.width/2 - props.content.type.strokeWeight} 
                  cx={contentStyle.width/2} 
                  cy={contentStyle.width/2} 
                  fill={props.content.type.fillColor} 
                  stroke={props.content.type.strokeColor} 
                  strokeWidth={(props.content.type.strokeWeight >= 0 && props.content.type.strokeWeight <= 5) ? props.content.type.strokeWeight : 6}/>
        </svg>;
      break;
    default:
      element = <span></span>
  }
  return (
    <div className={(props.content.id !== props.activeContent || props.modeEditor === "view") ? "content" : "content content_active"}
      ref={(props.draggable) ? contentRef : emptyRef}
      style={contentStyle}
      onClick={(e) => changeActiveContent(e)}
      onMouseDown={(e) => changeActiveContent(e)}
      onMouseUp={() => setContentCoordinates(coord)}>

      {element}
    </div>
  );
}

function mapStateToProps(state: RootState) {
  let currentSlide = state.editor.presentation.slideList.find((slide) => slide.id === state.editor.presentation.activeSlide);
  let currentContent = currentSlide?.contentList.find((content) => content.id === currentSlide?.activeContent);
  return {
    modeEditor: state.editor.mode,
    selectedSlides: state.editor.presentation.selectedSlides,
    activeContent: currentSlide?.activeContent,
    currentContent: currentContent as ElementType,
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    // makeActiveSlide: (slide: Identifier) => dispatch(makeActiveSlide(slide)),
    // selectedSlidesDelete: (slide: Identifier) => dispatch(selectedSlidesDelete(slide)),
    // selectedSlidesAdd: (slide: Identifier) => dispatch(selectedSlidesAdd(slide)),
    turnRightBar: (rightBarContent: Number) => dispatch(turnRightBar(rightBarContent)),
    setCoordinates: (x: number, y: number) => dispatch(setCoordinates(x, y)),
    setActiveContent: (activeCont: string) => dispatch(setActiveContent(activeCont)),
  }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps & propsContent;

export default connect(mapStateToProps, mapDispatchToProps)(Content);