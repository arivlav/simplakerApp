import React from 'react';
import Button from './Button/Button';
import Select from './Select/Select';
import './ToolBar.css';
import './Button/Button.css';



function ToolBar() {

  return (
    <div className="toolBarContainer">

      <div className="addSlideContainer">
        <Button title="Add slide" className="btn btn_add" />
        <Button title="Export presentation" className="btn btn_export" />
        <Button title="Start slideshow" className="btn btn_play" />
      </div>

      <div className="copyPasteContainer">
        <Button title="Copy" className="btn btn_copy" />
        <Button title="Paste" className="btn btn_paste" />
        <Button title="Undo" className="btn btn_undo" />
        <Button title="Redo" className="btn btn_redo" />
        <Button title="Select content" className="btn btn_select" />
      </div>

      <div className="primitiveContainer">
        <Button title="Text box" className="btn btn_text" />
        <Button title="Add image" className="btn btn_image" />
        <Button title="Add circle" className="btn btn_circle" />
        <Button title="Add rectanle" className="btn btn_rectangle" />
        <Button title="Add triangle" className="btn btn_triangle" />
      </div>

      <div className="fontContainer">
        <Select title="Select font" className="select_fontFamily"/>

        <div className="toolBarItem">
          <select title="Font size" className="btn btn_fontSize">
            <option>8</option>
            <option>12</option>
            <option>14</option>
          </select>
        </div>
        <Button title="Bold" className="btn btn_bold" />
        <Button title="Italic" className="btn btn_italic" />
        <Button title="Underlined" className="btn btn_underlined" />
        <Button title="Text color" className="btn btn_textColor" />
      </div>

      <div className="colorContainer">
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