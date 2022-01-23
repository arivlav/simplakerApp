import './FilmstripContainer.css'
import 'src/components/Slide/Slide.css'
import Slide from 'src/components/Slide/Slide'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { changeTitle } from 'src/store/actionCreators/editorAction'

function FilmstripContainer(props: Props) {
    // console.log('active slide: '+props.activeSlide);
    // console.log(props.slideList);
    return (
      <div className="FilmstripContainer">
        {props.slideList.map(
          (slide, index) => <Slide 
            key={`slide-${slide.id}`} 
            className={(props.activeSlide === slide.id) ? "slide-miniature-inner slide-miniature_active" : "slide-miniature-inner"}
            draggable={true}
            isWorkspace={false} 
            slide={slide}/>
        )}
      </div>
    );
  } 

function mapStateToProps(state: RootState) {
  return {
    slideList: state.editor.presentation.slideList,
    activeSlide: state.editor.presentation.activeSlide
  }
}
  
const mapDispatchToProps = (dispatch: Function) => {
  return {
    changeTitle: (newTitle: string) => dispatch(changeTitle(newTitle)),
  }
}
  
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(FilmstripContainer);