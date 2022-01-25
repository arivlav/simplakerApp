import React from 'react';
import PresentationTitle from 'src/components/RightBarContainer/forms/PresentationTitle/PresentationTitle';
import ActiveSlideSettings from 'src/components/RightBarContainer/forms/ActiveSlideSettings/ActiveSlideSettings';
import ActiveContentSettings from 'src/components/RightBarContainer/forms/ActiveContentSettings/ActiveContentSettings';
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import './RightBarContainer.css'

export const EMPTY_RIGHT_BAR = 0;
export const PRESENTATION_TITLE_FORM = 1;
export const ACTIVE_SLIDE_FORM = 2;
export const ACTIVE_CONTENT_FORM = 3;

function RightBarContainer(props: Props) {
  let rightBarContainerInner: JSX.Element;
  switch(props.rightBarContainer) {
    case PRESENTATION_TITLE_FORM:
      rightBarContainerInner = <PresentationTitle />;
      break;
    case ACTIVE_SLIDE_FORM:
      rightBarContainerInner = <ActiveSlideSettings />;
      break;  
    case ACTIVE_CONTENT_FORM:
      rightBarContainerInner = <ActiveContentSettings />;
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