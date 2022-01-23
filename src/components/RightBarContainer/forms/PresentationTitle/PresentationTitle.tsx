import React from 'react';
import './PresentationTitle.css';
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { changeTitle } from 'src/store/actionCreators/editorAction'

function PresentationTitle(props: Props) {
    const timer = (evt: React.SyntheticEvent<HTMLInputElement, Event>) => {
        setTimeout(() => {
            const target = evt.target as HTMLButtonElement;
            props.changeTitle(target.value);
        }, 1500);
    }
    return (
        <div className="presentationTitle">
            <label className="RightBarContainer__label">Presentation's name</label>
            <input className="RightBarContainer__inputText" type="text" name="Title" defaultValue={props.title} onChange={(evt) => timer(evt)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PresentationTitle);