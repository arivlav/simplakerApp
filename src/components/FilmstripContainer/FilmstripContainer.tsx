import './FilmstripContainer.css';
import 'src/components/Slide/Slide.css';
import Slide from 'src/components/Slide/Slide';

function FilmstripContainer() {
    return (
      <div className="FilmstripContainer">      
        <Slide className="slide_miniature" text="Slide 1"/>
        <Slide className="slide_miniature" text="Slide 2"/>
        <Slide className="slide_miniature" text="Slide 3"/>
        <Slide className="slide_miniature" text="Slide 5"/>
        <Slide className="slide_miniature" text="Slide 6"/>
        <Slide className="slide_miniature" text="Slide 7"/>
      </div>
    );
  }
  
  export default FilmstripContainer;

  // editor.slidelist.forEach(function (value) {
  //   <Slide width={props.blabla}/>
  // });