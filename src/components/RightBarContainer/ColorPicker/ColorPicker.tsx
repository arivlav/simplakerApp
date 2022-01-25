import React from 'react';
import './ColorPicker.css';
import { Background, Slide } from 'src/types';
import { changeContentFillColor, changeContentStrokeColor, changeSlideBackground } from 'src/store/actionCreators/editorAction'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import Circle from '../../WorkspaceContainer/Slide/Content/Primitive/PrimitiveCircle';
import { setDefaultSlideColor } from 'src/store/actionCreators/viewAction';
import { isColor } from 'src/helpers/editorHelper';

type SwitcherType = {
    type: string
}

function ColorPicker(props: Props) {
    let defaultValue = '';
    switch (props.type) {
        case "Slide":
            const currentColor = props.currentSlide?.background.value as string;
            defaultValue = (isColor(currentColor)) ? currentColor : props.defaultSlideColor;
            break;
        case "ContentFillColor":
            defaultValue = props.currentContent?.type.fillColor as string;
            break;
        case "ContentStrokeColor":
            defaultValue = props.currentContent?.type.strokeColor as string;
            break;
    }

    function changeColor(evt: React.ChangeEvent<HTMLInputElement>) {
        switch (props.type) {
            case "Slide":
                props.changeSlideBackground({
                    type: props.currentSlide?.background.type as string,
                    value: evt.target.value
                });
                props.setDefaultSlideColor(evt.target.value);
                break;
            case "ContentFillColor":
                props.changeContentFillColor(evt.target.value);
                break;
            case "ContentStrokeColor":
                props.changeContentStrokeColor(evt.target.value);
        }
    }
    return (
        <div>
            <input type="color" value={defaultValue} onChange={(e) => changeColor(e)} />
        </div>
    );
}

function mapStateToProps(state: RootState) {
    let currentSlide = state.editor.presentation.slideList.find((slide) => slide.id === state.editor.presentation.activeSlide);
    let currentContent = currentSlide?.contentList.find((content) => content.id === currentSlide?.activeContent);
    return {
        activeSlide: state.editor.presentation.activeSlide,
        currentSlide: currentSlide,
        defaultSlideColor: state.view.defaultSettings.slideColor,
        currentContent: currentContent,
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeSlideBackground: (newBackground: Background) => dispatch(changeSlideBackground(newBackground)),
        setDefaultSlideColor: (color: string) => dispatch(setDefaultSlideColor(color)),
        changeContentFillColor: (color: string) => dispatch(changeContentFillColor(color)),
        changeContentStrokeColor: (color: string) => dispatch(changeContentStrokeColor(color)),
    }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps & SwitcherType;

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);