import React from 'react';
import './ActiveContentSettings.css';
import { connect } from 'react-redux'
import { RootState, store } from 'src/store/store'
import { Content as ElementType } from 'src/types'
import Select from 'src/components/TopBar/Bars/ToolBar/Select/Select'
import ColorPicker from 'src/components/RightBarContainer/ColorPicker/ColorPicker';
import { Background } from 'src/types';
import {
    changeContentFontFamily,
    changeContentFontSize,
    changeContentFontStyle,
    changeContentStrokeWidth,
    changeContentText,
    changeSlideBackground,
    contentDown,
    contentUp,
    narrowContent,
    extendContent,
    extendVerticalContent,
    narrowVerticalContent
} from 'src/store/actionCreators/editorAction';
import { showModal } from 'src/store/actionCreators/viewAction';
import { DELETE_CONTENT_CONFIRM } from 'src/components/Modal/Modal';

function ActiveContentSettings(props: Props) {

    let fontBase = [
        { id: '1', value: 'Roboto' },
        { id: '2', value: 'Arial' },
        { id: '3', value: 'Colibri' },
        { id: '4', value: 'Georgia' }
    ];

    let fontStyle = [
        { id: '1', value: 'normal' },
        { id: '2', value: 'italic' },
        { id: '3', value: 'oblique' }
    ];

    let fontSizeBase = [
        { id: '1', value: '2' },
        { id: '2', value: '4' },
        { id: '3', value: '6' },
        { id: '4', value: '8' },
        { id: '5', value: '10' },
        { id: '6', value: '12' },
        { id: '7', value: '14' },
        { id: '8', value: '16' },
        { id: '9', value: '18' },
        { id: '10', value: '20' },
        { id: '11', value: '22' },
        { id: '12', value: '24' },
        { id: '13', value: '26' },
        { id: '14', value: '28' },
        { id: '15', value: '30' },
        { id: '16', value: '32' },
    ];

    function removeContent() {
        store.dispatch(showModal(DELETE_CONTENT_CONFIRM));
    }

    function changeCurrentStrokeWidth(evt: React.SyntheticEvent<HTMLInputElement, Event>) {
        const target = evt.target as HTMLButtonElement;
        props.changeContentStrokeWidth(Number(target.value));
    }

    function changeCurrentFontFamily(e: React.ChangeEvent<HTMLSelectElement>) {
        props.changeContentFontFamily(e.target.value);
    }

    function changeCurrentFontStyle(e: React.ChangeEvent<HTMLSelectElement>) {
        props.changeContentFontStyle(e.target.value);
    }

    function changeCurrentFontSize(e: React.ChangeEvent<HTMLSelectElement>) {
        props.changeContentFontSize(Number(e.target.value));
    }

    function changeCurrentText(e: React.ChangeEvent<HTMLTextAreaElement>) {
        props.changeContentText(e.target.value);
        console.log(e.target.value);
    }

    const isSvg = (props.currentContent !== undefined && props.currentContent.name !== 'image' && props.currentContent.name !== 'text');
    const isText = (props.currentContent !== undefined && props.currentContent.name === 'text');
    const isCircle = (isSvg && props.currentContent.name !== 'circle');

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
            <div className={(isText) ? "RightBarContainer__form-group" : "RightBarContainer__form-group RightBarContainer__form-group_hide"}>
                <label className="RightBarContainer__label">Family</label>
                <Select title="Select famaly"
                    className="select select__fontFamily RightBarContainer__inputText"
                    selectedValue={props.currentContent.type.fontFamily} elements={fontBase}
                    onchange={changeCurrentFontFamily} />
            </div>
            <div className={(isText) ? "RightBarContainer__form-group" : "RightBarContainer__form-group RightBarContainer__form-group_hide"}>
                <label className="RightBarContainer__label">Style</label>
                <Select title="Select style"
                    className="select select__fontFamily RightBarContainer__inputText"
                    selectedValue={props.currentContent.type.fontStyle} elements={fontStyle}
                    onchange={changeCurrentFontStyle} />
            </div>
            <div className={(isText) ? "RightBarContainer__form-group" : "RightBarContainer__form-group RightBarContainer__form-group_hide"}>
                <label className="RightBarContainer__label">Font Size</label>
                <Select title="Select size"
                    className="select select__fontFamily RightBarContainer__inputText"
                    selectedValue={String(props.currentContent.type.fontSize)}
                    elements={fontSizeBase}
                    onchange={changeCurrentFontSize} />
            </div>
            <div className={(isText) ? "RightBarContainer__form-group" : "RightBarContainer__form-group RightBarContainer__form-group_hide"}>
                <label className="RightBarContainer__label">Text</label>
                <textarea 
                    className="RightBarContainer__textarea" 
                    onChange={(e) => changeCurrentText(e)}
                    defaultValue={(props.currentContent !== undefined) ? props.currentContent.type.text : ''} />
            </div>
            <div className="RightBarContainer__form-group">
                <label className="RightBarContainer__label">Size</label>
            </div>
            <div className="RightBarContainer__form-group RightBarContainer__form-group_flex">
                <button className="RightBarContainer__btn RightBarContainer__btn_size" onClick={() => props.extendContent()}>
                    &#x25C4;&#x25BA;
                </button>
                <button 
                    className="RightBarContainer__btn RightBarContainer__btn_size RightBarContainer__btn_second"
                    onClick={() => props.narrowContent()}>
                    &#x25BA;&#x25C4;
                </button>
                <button 
                    className={(isCircle) 
                        ? "RightBarContainer__btn RightBarContainer__btn_size RightBarContainer__btn_second"
                        : "RightBarContainer__btn RightBarContainer__btn_size RightBarContainer__btn_second RightBarContainer__btn_hidden"} 
                    onClick={() => props.extendVerticalContent()}>
                        &#x25B2; <br />&#x25BC;
                </button>
                <button 
                    className={(isCircle) 
                        ? "RightBarContainer__btn RightBarContainer__btn_size RightBarContainer__btn_second"
                        : "RightBarContainer__btn RightBarContainer__btn_size RightBarContainer__btn_second RightBarContainer__btn_hidden"}
                    onClick={() => props.narrowVerticalContent()}>
                        &#x25BC; <br />&#x25B2;
                </button>
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
        changeContentFontFamily: (font: string) => dispatch(changeContentFontFamily(font)),
        changeContentFontStyle: (style: string) => dispatch(changeContentFontStyle(style)),
        changeContentFontSize: (size: number) => dispatch(changeContentFontSize(size)),
        changeContentText: (text: string) => dispatch(changeContentText(text)),
        narrowContent: () => dispatch(narrowContent()),
        extendContent: () => dispatch(extendContent()),
        narrowVerticalContent: () => dispatch(narrowVerticalContent()),
        extendVerticalContent: () => dispatch(extendVerticalContent()),
    }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(ActiveContentSettings);