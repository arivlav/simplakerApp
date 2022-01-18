import React from 'react';
import { store } from 'src/store/store';
import Button from './Button/Button';
import Select from './Select/Select';
import './ToolBar.css';
import './Button/Button.css';
import { showModal } from 'src/store/actionCreators/viewAction'
import { selectedSlidesOff, selectedSlidesOn, addSlide } from 'src/store/actionCreators/editorAction'
import { undo, redo } from 'src/store/actionCreators/historyAction'
import { 
  NOT_CHOICE_SLIDES, 
  CONFIRM_DELETE_SLIDES, 
  CONFIRM_DELETE_SLIDE, 
  CONFIRM_CREATE_NEW_PRESENTATION, 
  OPEN_PRESENTATION 
} from 'src/components/Modal/Modal'

let fontBase = [
  { id: '1', value: 'Roboto' },
  { id: '2', value: 'Arial' },
  { id: '3', value: 'Colibri' },
  { id: '4', value: 'Georgia' }
];

let fontSizeBase = [
  { value: '2' },
  { value: '4' },
  { value: '6' },
  { value: '8' },
  { value: '10' },
  { value: '12' },
  { value: '14' },
  { value: '16' },
];

function newPresentation() {
  store.dispatch(showModal(CONFIRM_CREATE_NEW_PRESENTATION));
}

function openPresentation() {
  store.dispatch(showModal(OPEN_PRESENTATION));
  let fileDialog = document.querySelector('[name="modalFileDialog"]') as HTMLFormElement;
  console.log(fileDialog);
  if (fileDialog !== null) {
    fileDialog.value = null;
  }
  
}

function savePresentation () {
  const editor = store.getState().editor;
  const fileName = `${editor.presentation.title}.json`;
  const jsonEditor = JSON.stringify(editor, null, 2);
  let linkFile = document.createElement("a");
  let file = new Blob([jsonEditor], {type: "text/plain"});
  linkFile.href = URL.createObjectURL(file);
  linkFile.download = fileName;
  document.body.appendChild(linkFile);
  linkFile.click();
  document.body.removeChild(linkFile);
}

function newSlide() {
  store.dispatch(addSlide());
}

function undoAction() {
  store.dispatch(undo());
}

function redoAction() {
  store.dispatch(redo());
}

function markerSeveralSlides(event: React.MouseEvent<HTMLHeadingElement>) {
  const target = event.target as HTMLButtonElement;
  let switcher: boolean = !store.getState().editor.presentation.selectedSlides.selectedMode;
  if (switcher) {
    target.className = "btn btn_checklist btn_active";
    document.getElementsByClassName("btn btn_add").item(0)?.setAttribute('disabled', 'true');
    store.dispatch(selectedSlidesOn());
  } else {
    target.className = "btn btn_checklist";
    document.getElementsByClassName("btn btn_add").item(0)?.removeAttribute('disabled');
    store.dispatch(selectedSlidesOff());
  }
}

function deleteSlides() {
  const slides = store.getState().editor.presentation.selectedSlides;
  if (slides.selectedMode && slides.selectedSlides.length > 0) {
    store.dispatch(showModal(CONFIRM_DELETE_SLIDES));
  } else if (!slides.selectedMode) {
    
    store.dispatch(showModal(CONFIRM_DELETE_SLIDE));
  } else {
    store.dispatch(showModal(NOT_CHOICE_SLIDES));
  }
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
      onclick: openPresentation
    },
    {
      title: "Save presentation",
      className: "btn btn_saveFile",
      onclick: savePresentation
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
      title: "Undo",
      className: "btn btn_undo",
      onclick: undoAction
    },
    {
      title: "Redo",
      className: "btn btn_redo",
      onclick: redoAction
    },
  ],
  [
    {
      title: "Add slide",
      className: "btn btn_add",
      onclick: newSlide
    },
    {
      title: "Mark several slides",
      className: "btn btn_checklist",
      onclick: markerSeveralSlides
    },
    {
      title: "Delete slides",
      className: "btn btn_deleteSlide",
      onclick: deleteSlides
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