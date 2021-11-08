import './FilmstripContainer.css'
import SlideMiniature from './SlideMiniature/SlideMiniature';

function FilmstripContainer() {
    return (
      <div className="FilmstripContainer">      
        {/* <Slide /> */}
        <SlideMiniature text="Slide 1"/>
        <SlideMiniature text="Slide 2"/>
        <SlideMiniature text="Slide 3"/>
        <SlideMiniature text="Slide 4"/>
        <SlideMiniature text="Slide 4"/>
        <SlideMiniature text="Slide 4"/>
        <SlideMiniature text="Slide 4"/>
        <SlideMiniature text="Slide 4"/>
        <SlideMiniature text="Slide 4"/>
        <SlideMiniature text="Slide 4"/>
        <SlideMiniature text="Slide 4"/>
      </div>
    );
  }
  
  export default FilmstripContainer;

  // editor.slidelist.forEach(function (value) {
  //   <Slide width={props.blabla}/>
  // });