import React from 'react';
import s from './Title.module.css'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { turnRightBar } from 'src/store/actionCreators/viewAction'
import { PRESENTATION_TITLE_FORM } from 'src/components/RightBarContainer/RightBarContainer'

function Title(props: Props) {
  return (
    <div onClick={ () => props.turnRightBar(PRESENTATION_TITLE_FORM) } className={`${s.title}`}>      
       { props.title }
    </div>
  );
}
  
function mapStateToProps(state: RootState) {
  return {title: state.editor.presentation.title}
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    turnRightBar: (rightBarContent: Number) => dispatch(turnRightBar(rightBarContent)),
  }
}
  
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(Title);