import React from 'react'
import './Content.css'
import {Content, Identifier} from 'src/types'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { makeActiveSlide } from 'src/store/actionCreators/editorAction'
import { addContent } from 'src/store/actionCreators/editorAction'
import { turnRightBar } from 'src/store/actionCreators/viewAction'
import { ACTIVE_SLIDE_FORM, EMPTY_RIGHT_BAR } from 'src/components/RightBarContainer/RightBarContainer'
import { isColor } from 'src/helpers/editorHelper'

type ImageType = {
  content: Content,
}

export function Image(props: ImageType) {
  return (
    <img src={props.content.type.imageUrl} />
  );
}

// function mapStateToProps(state: RootState) {
//   let currentSlide = state.editor.presentation.slideList.find((slide) => slide.id === state.editor.presentation.activeSlide);
//   let currentContent = currentSlide?.contentList.find((content) => content.id === currentSlide?.activeContent);
//   return {
//     activeSlide: state.editor.presentation.activeSlide,
//     selectedSlides: state.editor.presentation.selectedSlides,
//     currentContent: currentContent as Content,
//   }
// }
  
// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//     makeActiveSlide: (slide: Identifier) => dispatch(makeActiveSlide(slide)),
//     selectedSlidesDelete: (slide: Identifier) => dispatch(selectedSlidesDelete(slide)),
//     selectedSlidesAdd: (slide: Identifier) => dispatch(selectedSlidesAdd(slide)),
//     turnRightBar: (rightBarContent: Number) => dispatch(turnRightBar(rightBarContent)),
//   }
// }
  
// type StateProps = ReturnType<typeof mapStateToProps>
// type DispatchProps = ReturnType<typeof mapDispatchToProps>

// type Props = StateProps & DispatchProps;

// export default connect(mapStateToProps, mapDispatchToProps)(Content);