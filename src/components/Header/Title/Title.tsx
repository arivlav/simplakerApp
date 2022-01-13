import React from 'react';
import s from './Title.module.css'
import { connect } from 'react-redux'
import { RootState, store } from 'src/store/store'
import { turnRightBar } from 'src/store/actionCreators/viewAction'
import { PRESENTATION_TITLE_FORM } from 'src/components/RightBarContainer/RightBarContainer'

function Title(props: StateProps) {
  return (
    <div onClick={ () => store.dispatch(turnRightBar(PRESENTATION_TITLE_FORM)) } className={`${s.title}`}>      
       { props.title }
    </div>
  );
}
  
function mapStateToProps(state: RootState) {
  return {title: state.editor.presentation.title}
}


type StateProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(Title);