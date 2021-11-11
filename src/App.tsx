import FilmstripContainer from './components/FilmstripContainer/FilmstripContainer';
import WorkspaceContainer from './components/WorkspaceContainer/WorkspaceContainer';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import RightBarContainer from './components/RightBarContainer/RightBarContainer';


function App() {
  return (
      <div className="Editor">
        <Header />
        <TopBar />
        <FilmstripContainer />
        <WorkspaceContainer />
        <RightBarContainer />
      </div>
  );
}

export default App;