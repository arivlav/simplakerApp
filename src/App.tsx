import FilmstripContainer from 'src/components/FilmstripContainer/FilmstripContainer';
import WorkspaceContainer from 'src/components/WorkspaceContainer/WorkspaceContainer';
import './App.css';
import TopBar from 'src/components/TopBar/TopBar';
import Header from 'src/components/Header/Header';
import RightBarContainer from 'src/components/RightBarContainer/RightBarContainer';
import Footer from 'src/components/Footer/Footer';

function App () {
  return (
      <div className="Editor">
        <Header />
        <TopBar />
        <FilmstripContainer />
        <WorkspaceContainer />
        <RightBarContainer />
        <Footer />
      </div>
  );
}

export default App;
