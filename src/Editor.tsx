import React from 'react';
import FilmstripContainer from './components/FilmstripContainer/FilmstripContainer';
import WorkspaceContainer from './components/WorkspaceContainer/WorkspaceContainer';
import './Editor.css';
import TopBar from './components/TopBar/TopBar';
import RightBarContainer from './components/RightBarContainer/RightBarContainer';


function Editor() {
  return (
      <div className="Editor">
        <TopBar />
        <FilmstripContainer />
        <WorkspaceContainer />
        <RightBarContainer />
      </div>
  );
}

export default Editor;
