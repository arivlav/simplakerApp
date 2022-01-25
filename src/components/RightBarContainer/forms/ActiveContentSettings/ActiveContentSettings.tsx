import React from 'react';
import './ActiveContentSettings.css';
import { connect } from 'react-redux'
import { RootState, store } from 'src/store/store'
import { Content as ElementType, Identifier, Point } from 'src/types'
import Select from 'src/components/TopBar/Bars/ToolBar/Select/Select'
import ColorPicker from 'src/components/RightBarContainer/ColorPicker/ColorPicker';
import { Background } from 'src/types';
import { changeContentStrokeWidth, changeSlideBackground, contentDown, contentUp } from 'src/store/actionCreators/editorAction';
import { showModal } from 'src/store/actionCreators/viewAction';
import { DELETE_CONTENT_CONFIRM } from 'src/components/Modal/Modal';

function ActiveContentSettings(props: Props) {

    function removeContent() {
        store.dispatch(showModal(DELETE_CONTENT_CONFIRM));
    }

    function changeCurrentStrokeWidth(evt: React.SyntheticEvent<HTMLInputElement, Event>) {
        const target = evt.target as HTMLButtonElement;
        props.changeContentStrokeWidth(Number(target.value));
    }

    const isImage = (props.currentContent !== undefined && props.currentContent.name === 'image');
    const isSvg = (props.currentContent !== undefined && props.currentContent.name !== 'image'  && props.currentContent.name !== 'text');
    const isText = (props.currentContent !== undefined && props.currentContent.name === 'text');

    return (
        <div>
            <div className="RightBarContainer__form-group">
                <h3>Content Settings</h3>
            </div>
            <div className={(isSvg) ? "RightBarContainer__form-group" : "RightBarContainer__form-group RightBarContainer__form-group_hide"}>
                <label className="RightBarContainer__label">Fill color</label>
                <ColorPicker type={"ContentFillColor"} />
            </div>
            <div className={(isSvg) ? "RightBarContainer__form-group" : "RightBarContainer__form-group RightBarContainer__form-group_hide"}>
                <label className="RightBarContainer__label">Stroke color</label>
                <ColorPicker type={"ContentStrokeColor"} />
            </div>
            <div className={(isSvg) ? "RightBarContainer__form-group" : "RightBarContainer__form-group RightBarContainer__form-group_hide"}>
                <label className="RightBarContainer__label">Stroke width</label>
                <input className="RightBarContainer__inputText RightBarContainer__inputText_number" type="text" name="Title" defaultValue={(props.currentContent !== undefined) ? props.currentContent.type.strokeWeight : ''} onChange={(evt) => changeCurrentStrokeWidth(evt)} />
                
            </div>
            <div className="RightBarContainer__form-group">
                <label className="RightBarContainer__label">Place</label>
                <button className="RightBarContainer__btn" onClick={() => props.contentUp()}>Up</button>
                <button className="RightBarContainer__btn RightBarContainer__btn_second" onClick={() => props.contentDown()}>Down</button>
            </div>
            <div className="RightBarContainer__form-group">
                <button className="RightBarContainer__btn" onClick={removeContent}>Delete content</button>
            </div>
        </div>
    );
}

function mapStateToProps(state: RootState) {
    let currentSlide = state.editor.presentation.slideList.find((slide) => slide.id === state.editor.presentation.activeSlide);
    let currentContent = currentSlide?.contentList.find((content) => content.id === currentSlide?.activeContent);
    return {
        activeSlide: state.editor.presentation.activeSlide,
        selectedSlides: state.editor.presentation.selectedSlides,
        activeContent: currentSlide?.activeContent,
        currentContent: currentContent as ElementType,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeSlideBackground: (newBackground: Background) => dispatch(changeSlideBackground(newBackground)),
        contentUp: () => dispatch(contentUp()),
        contentDown: () => dispatch(contentDown()),
        changeContentStrokeWidth: (width: number) => dispatch(changeContentStrokeWidth(width)),
    }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(ActiveContentSettings);