import React from 'react'
import './Player.css'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { togglePresentationMode } from 'src/store/actionCreators/editorAction'
import Slide from 'src/components/Slide/Slide'
import Button from 'src/components/TopBar/Bars/ToolBar/Button/Button'

function Player(props: Props) {
    let [index, setIndex] = React.useState(0);

    function nextSlide() {
        if (index < props.slideList.length - 1) {
            console.log(index+' '+props.slideList.length);
            setIndex(index + 1);
        }
    }

    function prevSlide() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    function closePlayer() {
        setIndex(0);
        props.togglePresentationMode();
    }

    return (
        <div className={props.editorMode === "view" ? "player active" : "player"} onClick={closePlayer}>
            <div className={props.editorMode === "view" ? "player__content active" : "player__content"} onClick={(e) => e.stopPropagation()}>
                <div className="player__content__header">
                    <button className="player__header__closeBtn" title="Close popup" onClick={closePlayer}>X</button>
                </div>
                <div className="clear"></div>
                <div>
                    <Slide key={`previewSlide-${props.slideList[index].id}`} className="slide" slide={props.slideList[index]} draggable={false} isWorkspace={false} />
                </div>
                <div className="clear"></div>
                <div className="player__footer__alignTwoButton">
                    <Button className="player__footer__btn footer__btn_ok" label="&#9668;" onclick={prevSlide} />
                    <Button className="player__footer__btn footer__btn_ok" label="&#9658;" onclick={nextSlide} />
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state: RootState) {
    return { 
        editorMode: state.editor.mode, 
        slideList: state.editor.presentation.slideList
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        togglePresentationMode: () => dispatch(togglePresentationMode()),
    }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(Player);
