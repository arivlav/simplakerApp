import React from 'react';
import './ActiveContentSettings.css';
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { Content as ElementType, Identifier, Point } from 'src/types'
import Select from 'src/components/TopBar/Bars/ToolBar/Select/Select'
import ColorPicker from 'src/components/RightBarContainer/ColorPicker/ColorPicker';
import { Background } from 'src/types';
import { changeSlideBackground } from 'src/store/actionCreators/editorAction';

function ActiveContentSettings(props: Props) {
    // enum BackgroundType { Color = "color", Image = "image" };
    // let backgroundType = props.currentSlide?.background.type as string;
    // let selectList = [
    //     { id: 'color', value: 'color', selected: backgroundType === 'color' },
    //     { id: 'image', value: 'image', selected: backgroundType === 'image' },
    // ];
    // let selectedValue: string;
    // let element: JSX.Element;
    // if (backgroundType === BackgroundType.Color) {
    //     selectedValue = BackgroundType.Color;
    //     element = <ColorPicker type={"Slide"} />;
    // } else {
    //     selectedValue = BackgroundType.Image;
    //     element = <input type="file" name="imageSlideDialog" accept="image/*" onChange={(e) => openAndSaveImage(e)} />;
    // }

    // function changeSlideBack(e: React.ChangeEvent<HTMLSelectElement>) {
    //     props.changeSlideBackground({
    //         type: e.target.value,
    //         value: props.currentSlide?.background.value as string,
    //     });
    // }

    // function openAndSaveImage(e: React.ChangeEvent<HTMLInputElement>) {
    //     const inputFile = e.target; 
    //     const fileDialog = inputFile.files as FileList;    
    //     if (fileDialog[0] !== null) {
    //         let reader = new FileReader();
    //         reader.readAsDataURL(fileDialog[0]);
    //         reader.onload = function (e) {
    //             const newVal = e.target as FileReader;
    //             props.changeSlideBackground({
    //                 type: props.currentSlide?.background.type as string,
    //                 value: newVal.result as string,
    //             });
    //         };
    //     }
    // }

    return (
        <div>
            <div className="RightBarContainer__form-group">
                <label className="RightBarContainer__label">Background</label>
                <p>{props.currentContent.id}</p>
                {/* <Select title="Select background type" className="select select__fontFamily RightBarContainer__inputText" selectedValue={selectedValue} elements={selectList} onchange={changeSlideBack} /> */}
            </div>
            {/* <div className="RightBarContainer__form-group">
                <label className="RightBarContainer__label">{(backgroundType === "color") ? 'Color' : 'Image'}</label>
                {element}
            </div> */}
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
    }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(ActiveContentSettings);