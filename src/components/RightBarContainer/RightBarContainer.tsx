import React, { useState } from 'react';
import ColorPicker from './ColorPicker/ColorPicker';
import PresentationTitle from 'src/components/RightBarContainer/forms/PresentationTitle/PresentationTitle';
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { turnRightBar } from 'src/store/actionCreators/viewAction'
import './RightBarContainer.css'

const EMPTY_RIGHT_BAR = 0;
const PRESENTATION_TITLE_FORM = 1;

export {EMPTY_RIGHT_BAR, PRESENTATION_TITLE_FORM}

function RightBarContainer(props: Props) {
  // const [state, updateState] = useState("#FFF");

  // const handleInput = (event: string) => {
  //   updateState(event.target.value);
  // }
  let rightBarContainerInner: JSX.Element;
  switch(props.rightBarContainer) {
    case PRESENTATION_TITLE_FORM:
      rightBarContainerInner = <PresentationTitle />;
      break;
    case 2:
      rightBarContainerInner = <ColorPicker />;
      break;
    default:
      rightBarContainerInner = <></>;    
  }
  return (
    <div className="RightBarContainer">
      <div className="RightBarContainer__inner">
        {rightBarContainerInner}
      </div>    
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return { rightBarContainer: state.view.rightBarContent }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    //turnRightBar: () => dispatch(turnRightBar()),
  }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(RightBarContainer);

  // export default function RightBarContainer() {
  //   const [state, updateState] = React.useState("#FFF");

  //   const handleInput = e => {
  //     updateState(e.target.value);      
  //   };

  //   return <Palette value={state} onChange={handleInput} />;
  // }