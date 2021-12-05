import React from 'react';
import s from './Title.module.css'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { changeTitle } from 'src/store/actionCreators/editorAction'

function Title(props: Props) {
  return (
    <div onClick={ () => props.changeTitle('asdadsasd') } className={`${s.title}`}>      
       { props.title }
    </div>
  );
}
  
function mapStateToProps(state: RootState) {
  return {title: state.editor.presentation.title}
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeTitle: (newTitle: string) => dispatch(changeTitle(newTitle)),
    }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(Title);