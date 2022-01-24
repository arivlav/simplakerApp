import FilmstripContainer from 'src/components/FilmstripContainer/FilmstripContainer';
import WorkspaceContainer from 'src/components/WorkspaceContainer/WorkspaceContainer';
import './App.css';
import TopBar from 'src/components/TopBar/TopBar';
import Header from 'src/components/Header/Header';
import RightBarContainer from 'src/components/RightBarContainer/RightBarContainer';
import Footer from 'src/components/Footer/Footer';
import Modal from 'src/components/Modal/Modal';
import Player from 'src/components/Player/Player';
import { store } from './store/store';
import { redo, undo } from './store/actionCreators/historyAction';

function App () {
  function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.ctrlKey) {
      switch (event.key) {
        case 'z':
          store.dispatch(undo());
          break;
        case 'y':
          store.dispatch(redo());

      } 
    }
  }
  return (
      <div className="Editor" onKeyDown={(event) => handleKeyPress(event)}>
        <Header />
        <TopBar />
        <FilmstripContainer />
        <WorkspaceContainer />
        <RightBarContainer />
        <Footer />
        <Modal />
        <Player />
      </div>
  );
}

export default App;
