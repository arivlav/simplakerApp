import React from 'react';
import Button from './Button/Button';
import Select from './Select/Select';
import './ToolBar.css';
import './Button/Button.css';

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


function ToolBar() {

  return (
    <div className="toolBarContainer">

      <div className="itemGroupContainer">
        <Button title="Add slide" className="btn btn_add" />
        <Button title="Export presentation" className="btn btn_export" />
        <Button title="Start slideshow" className="btn btn_play" />
      </div>

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
      </div>

    </div>
  );
}

export default ToolBar;