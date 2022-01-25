import React from 'react';
import { store } from 'src/store/store';
import Button from './Button/Button';
import './ToolBar.css';
import './Button/Button.css';
import { showModal, turnRightBar } from 'src/store/actionCreators/viewAction'
import { selectedSlidesOff, selectedSlidesOn, addSlide, togglePresentationMode, addContent } from 'src/store/actionCreators/editorAction'
import { undo, redo } from 'src/store/actionCreators/historyAction'
import { 
  NOT_CHOICE_SLIDES, 
  CONFIRM_DELETE_SLIDES, 
  CONFIRM_DELETE_SLIDE, 
  CONFIRM_CREATE_NEW_PRESENTATION, 
  OPEN_PRESENTATION,
  ADD_IMAGE
} from 'src/components/Modal/Modal'
import { ACTIVE_SLIDE_FORM, EMPTY_RIGHT_BAR } from 'src/components/RightBarContainer/RightBarContainer';

function newPresentation() {
  store.dispatch(showModal(CONFIRM_CREATE_NEW_PRESENTATION));
}

function openPresentation() {
  store.dispatch(showModal(OPEN_PRESENTATION));
  let fileDialog = document.querySelector('[name="modalFileDialog"]') as HTMLFormElement;
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
  store.dispatch(turnRightBar(EMPTY_RIGHT_BAR));
  store.dispatch(turnRightBar(ACTIVE_SLIDE_FORM));
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

function addText() {
  store.dispatch(addContent("text"));
}

function addImage() {
  let activeSlide = store.getState().editor.presentation.activeSlide;
  if (activeSlide !== '') {
    store.dispatch(showModal(ADD_IMAGE));
    let fileDialog = document.querySelector('[name="modalImageDialog"]') as HTMLFormElement;
    if (fileDialog !== null) {
      fileDialog.value = null;
    }
  }  
}

function addCircle() {
  store.dispatch(addContent("circle"));
}

function addRectangle() {
  store.dispatch(addContent("rectangle"));
}

function addTriangle() {
  store.dispatch(addContent("triangle"));
}

// function exportPresentation() {
//   // ReactPDF.render(<FilmstripContainer />, `${store.getState().editor.presentation.title}.pdf`);
// }

function previewModeOn() {
  store.dispatch(togglePresentationMode());
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
    // {
    //   title: "Export presentation",
    //   className: "btn btn_export",
    //   onclick: exportPresentation
    // },
    {
      title: "Start slideshow",
      className: "btn btn_play",
      onclick: previewModeOn
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
  [
    {
      title: "Add text",
      className: "btn btn_text",
      onclick: addText
    },
    {
      title: "Add image",
      className: "btn btn_image",
      onclick: addImage,
    },
    {
      title: "Add circle",
      className: "btn btn_circle",
      onclick: addCircle
    },
    {
      title: "Add rectangle",
      className: "btn btn_rectangle",
      onclick: addRectangle
    },
    {
      title: "Add triangle",
      className: "btn btn_triangle",
      onclick: addTriangle
    },
  ],
]


function ToolBar() {
  return (
    <div className="toolBarContainer">
      {buttonsList.map(
        (btnGroup, btnGroupNumber) =>
          <div className="itemGroupContainer" key={`btnGroup${btnGroupNumber}`} >{btnGroup.map((button, btnNumber) => <Button key={`btn${btnGroupNumber}${btnNumber}`} title={button.title} className={button.className} onclick={button.onclick} />)}</div>)}
    </div>
  );
}

export default ToolBar;