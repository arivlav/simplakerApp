import React from 'react';
import './ColorPicker.css';
import { Background, Slide } from 'src/types';
import { changeSlideBackground } from 'src/store/actionCreators/editorAction'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import Circle from '../../WorkspaceContainer/Slide/Content/Primitive/PrimitiveCircle';
import { setDefaultSlideColor } from 'src/store/actionCreators/viewAction';
import { isColor } from 'src/helpers/editorHelper';

type SwitcherType ={
    type: string
}

function ColorPicker(props: Props) {
    const currentColor = props.currentSlide?.background.value  as string;
    let backgroundColor: string = (isColor(currentColor)) ? currentColor : props.defaultSlideColor;
    function changeColor(evt: React.ChangeEvent<HTMLInputElement>) {
        switch (props.type) {
            case "Slide": 
                props.changeSlideBackground({
                    type: props.currentSlide?.background.type as string,
                    value: evt.target.value
                });
                props.setDefaultSlideColor(evt.target.value);
            break;    
        }
    }
    return (
        <div>
                <input type="color" value={backgroundColor} onChange={(e) => changeColor(e)} />
            {/* {currentColor};
            <div>
                <svg width="100%" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="45" cy="300" r="20" fill={currentColor} />
                    <text x="75" y="305" fill={currentColor} fontFamily="Roboto" fontStyle="bold" fontSize="16pt">
                        Test ColorPicker
                    </text>
                </svg>
            </div> */}
        </div>
    );
}

function mapStateToProps(state: RootState) {
    return {
        activeSlide: state.editor.presentation.activeSlide,
        currentSlide: state.editor.presentation.slideList.find((slide) => slide.id === state.editor.presentation.activeSlide),
        defaultSlideColor: state.view.defaultSettings.slideColor,
    }
}
  
const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeSlideBackground: (newBackground: Background) => dispatch(changeSlideBackground(newBackground)),
        setDefaultSlideColor: (color: string) => dispatch(setDefaultSlideColor(color)),
    }
}
  
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps & SwitcherType;

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);