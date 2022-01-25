import React from 'react';
import Slide from '../Slide/Slide';
import './WorkspaceContainer.css';
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'

function WorkspaceContainer(props:Props) {
  let slide: JSX.Element = (props.currentSlide !== undefined) 
    ? <Slide key={`workSlide-${props.currentSlide.id}`} className="slide" slide={props.currentSlide} draggable={false} isWorkspace={true} />
    : <p> Choose or add new slide</p>;
  return (
    <div className="WorkspaceContainer">
      <div className="WorkspaceContainer__inner">
        {slide} 
      </div>    
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    currentSlide: state.editor.presentation.slideList.find((slide) => slide.id === state.editor.presentation.activeSlide)
  }
}
  
const mapDispatchToProps = (dispatch: Function) => {
  return {
  }
}
  
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceContainer);