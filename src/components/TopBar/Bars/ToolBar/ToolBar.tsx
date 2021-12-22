import React from 'react';
import { store } from 'src/store/store';
import Button from './Button/Button';
import Select from './Select/Select';
import './ToolBar.css';
import './Button/Button.css';
import { showModal } from 'src/store/actionCreators/viewAction'

let fontBase = [
  { id: '1', value: 'Roboto' },
  { id: '2', value: 'Arial' },
  { id: '3', value: 'Colibri' },
  { id: '4', value: 'Georgia' }
];

let fontSizeBase = [
  { value: '2'},
  { value: '4'},
  { value: '6'},
  { value: '8'},
  { value: '10'},
  { value: '12'},
  { value: '14'},
  { value: '16'},
];

function newPresentation() {
  store.dispatch(showModal({
    active: true,
    type: 1,
  }));
}

const buttonsList = [
  [
    {
      title: "New presentation",
      className: "btn btn_newFile",
      onclick: newPresentation  
    },
    {
      title: "Open project",
      className: "btn btn_openFile",
      onclick: newPresentation
    },
    {
      title: "Save presentation",
      className: "btn btn_saveFile",
      onclick: newPresentation
    },
    {
      title: "Export presentation",
      className: "btn btn_export",
      onclick: newPresentation
    },
    {
      title: "Start slideshow", 
      className: "btn btn_play",
      onclick: newPresentation
    }
  ],
  [
    {
      title: "Add slide",
      className: "btn btn_add",
      onclick: newPresentation
    },
    {
      title: "Open project",
      className: "btn btn_openFile",
      onclick: newPresentation
    },
    {
      title: "Save presentation",
      className: "btn btn_saveFile",
      onclick: newPresentation
    },
    {
      title: "Export presentation",
      className: "btn btn_export",
      onclick: newPresentation
    },
  ],
]


function ToolBar() {
  return (
    <div className="toolBarContainer">
      {buttonsList.map(
        (btnGroup, btnGroupNumber) => 
          <div className="itemGroupContainer" key={`btnGroup${btnGroupNumber}`} >{btnGroup.map((button, btnNumber) => <Button key={`btn${btnGroupNumber}${btnNumber}`} title={button.title} className={button.className} onclick={button.onclick} />)}</div>)}
      {/* 
      <div className="itemGroupContainer">
        <Button title="Copy" className="btn btn_copy" />
        <Button title="Paste" className="btn btn_paste" />
        <Button title="Undo" className="btn btn_undo" />
        <Button title="Redo" className="btn btn_redo" />
        <Button title="Select content" className="btn btn_select" />
      </div>

      <div className="itemGroupContainer">
        <Button title="Text box" className="btn btn_text" />
        <Button title="Add image" className="btn btn_image" />
        <Button title="Add circle" className="btn btn_circle" />
        <Button title="Add rectanle" className="btn btn_rectangle" />
        <Button title="Add triangle" className="btn btn_triangle" />
      </div>

      <div className="itemGroupContainer">
        <Select title="Select font" className="select select__fontFamily" elements={fontBase}/>
        <Select title="Select font" className="select select__fontSize" elements={fontSizeBase}/>
        <Button title="Bold" className="btn btn_bold" />
        <Button title="Italic" className="btn btn_italic" />
        <Button title="Underlined" className="btn btn_underlined" />
        <Button title="Text color" className="btn btn_textColor" />
      </div>

      <div className="itemGroupContainer">
        <Button title="Add background image" className="btn btn_bckgImg" />
        <Button title="Change color scheme" className="btn btn_palette" />
        <Button title="Fill color" className="btn btn_fillColor" />
        <Button title="Border color" className="btn btn_borderColor" />
        <Button title="Border weight" className="btn btn_borderWeight" />
      </div> */}

    </div>
  );
}

export default ToolBar;