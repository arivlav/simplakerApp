import React from 'react';
import FilmstripContainer from './components/FilmstripContainer/FilmstripContainer';
import WorkspaceContainer from './components/WorkspaceContainer/WorkspaceContainer';
import './Editor.css';
import Top from './components/Top/Top';
import { BrowserRouter, Route } from 'react-router-dom';
import RightBarContainer from './components/RightBarContainer/RightBarContainer';

function Editor() {
  return (
    <BrowserRouter>
      <div className="Editor">
        <Top />
        <FilmstripContainer />
        <WorkspaceContainer />
        <RightBarContainer />
      </div>
    </BrowserRouter>
  );
}

export default Editor;
