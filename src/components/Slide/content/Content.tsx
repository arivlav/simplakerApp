import React from 'react'
import './Content.css'
import { Content as ElementType, Point } from 'src/types'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { SLIDE_HEIGHT, SLIDE_WIDTH, useDragAndDrop } from 'src/helpers/editorHelper'
import { setCoordinates, setActiveContent } from 'src/store/actionCreators/editorAction'
import { turnRightBar } from 'src/store/actionCreators/viewAction'
import { ACTIVE_CONTENT_FORM, EMPTY_RIGHT_BAR } from 'src/components/RightBarContainer/RightBarContainer'

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

  console.log('ads');
  console.log(props.content.coordinates);


  const [newCoord, setCoord] = React.useState({ x: props.content.coordinates.x, y: props.content.coordinates.y });

  function setContentCoordinates(position: Point) {
    props.setCoordinates(position.x, position.y);
  }

  useDragAndDrop(contentRef, slideRatio, props.content, setCoord, setContentCoordinates);

  function changeActiveContent(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (props.modeEditor !== "view") {
      props.setActiveContent(props.content.id);
      props.turnRightBar(EMPTY_RIGHT_BAR);
      props.turnRightBar(ACTIVE_CONTENT_FORM);
    }
    if (props.draggable) e.stopPropagation();
  }

  contentStyle.zIndex = (props.content.zIndex >= 0) ? props.content.zIndex : 0;
  contentStyle.width = slideRatio * props.content.width;
  contentStyle.height = slideRatio * props.content.height;
  if (props.draggable) {
    contentStyle.left = slideRatio * newCoord.x;
    contentStyle.top = slideRatio * newCoord.y;
  } else {
    contentStyle.left = slideRatio * props.content.coordinates.x;
    contentStyle.top = slideRatio * props.content.coordinates.y;
  }
  switch (props.content.name) {
    case "image":
      elementStyle.objectFit = 'contain';
      elementStyle.width = '100%';
      elementStyle.maxHeight = '100%';
      element = <img src={props.content.type.imageUrl} style={elementStyle} alt="image" />;
      break;
    case "circle":
      contentStyle.height = contentStyle.width;
      element = <svg width={contentStyle.width} height={contentStyle.height}>
        <circle r={contentStyle.width / 2 - 1}
          cx={contentStyle.width / 2}
          cy={contentStyle.width / 2}
          fill={props.content.type.fillColor}
          stroke={props.content.type.strokeColor}
          strokeWidth={(props.content.type.strokeWeight >= 0 && props.content.type.strokeWeight <= 5) ? props.content.type.strokeWeight : 6} />
      </svg>;
      break;
    case "rectangle":
      element = <svg width={contentStyle.width} height={contentStyle.height}>
        <rect width={contentStyle.width}
          height={contentStyle.height}
          fill={props.content.type.fillColor}
          stroke={props.content.type.strokeColor}
          strokeWidth={(props.content.type.strokeWeight >= 0 && props.content.type.strokeWeight <= 5) ? props.content.type.strokeWeight : 6} />
      </svg>;
      break;
    case "triangle":
      element = <svg width={contentStyle.width} height={contentStyle.height} viewBox={`0 0 ${contentStyle.width} ${contentStyle.height}`}>
        <polygon
          points={`${contentStyle.width / 2}, ${contentStyle.top}, ${contentStyle.width}, ${contentStyle.height}, ${contentStyle.left}, ${contentStyle.height}`}
          fill={props.content.type.fillColor}
          stroke={props.content.type.strokeColor}
          strokeWidth={(props.content.type.strokeWeight >= 0 && props.content.type.strokeWeight <= 5) ? slideRatio * props.content.type.strokeWeight : 6 * slideRatio } />
      </svg>;
      break;
    case "text":
      elementStyle.fontSize = slideRatio * props.content.type.fontSize;
      elementStyle.fontFamily = props.content.type.fontFamily;
      elementStyle.fontStyle = props.content.type.fontStyle;
      elementStyle.color = props.content.type.fontColor;
      element = <div className="content__text" style={elementStyle}>
        <p>{props.content.type.text}</p>
      </div>;
      break;
    default:
      element = <span></span>
  }
  console.log(contentStyle);
  return (
    <div className={(props.content.id !== props.activeContent || props.modeEditor === "view") ? "content" : "content content_active"}
      ref={(props.draggable) ? contentRef : emptyRef}
      style={contentStyle}
      draggable={props.draggable}
      onClick={(e) => changeActiveContent(e)}
      onMouseDown={(e) => changeActiveContent(e)}>

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