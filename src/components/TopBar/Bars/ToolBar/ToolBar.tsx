import React from 'react';
import './ToolBar.css';


function ToolBar() {

  return (
    <div className="toolBarContainer">
      {/* <AddSlideContainer /> */}
      <div className="addSlideContainer">
        <div className="toolBarItem">
          <div title="Add slide" className="btn btn_add">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Export presentation" className="btn btn_export">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Start slideshow" className="btn btn_play">
          </div>
        </div>
      </div>

      <div className="copyPasteContainer">
        <div className="toolBarItem">
          <div title="Copy" className="btn btn_copy">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Paste" className="btn btn_paste">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Undo" className="btn btn_undo">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Redo" className="btn btn_redo">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Select content" className="btn btn_select">
          </div>
        </div>
      </div>


      <div className="primitiveContainer">
        <div className="toolBarItem">
          <div title="Text box" className="btn btn_text">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Add image" className="btn btn_image">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Add circle" className="btn btn_circle">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Add rectanle" className="btn btn_rectangle">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Add triangle" className="btn btn_triangle">
          </div>
        </div>
      </div>

      <div className="fontContainer">
        <div className="toolBarItem"> {/* поправить режим селекта*/}
          <select title="Font" className="btn btn_fontFamily">
            <option>Roboto</option>
            <option>Colibri</option>
            <option>Arial</option>
          </select>
        </div>
        <div className="toolBarItem">
          <select title="Font size" className="btn btn_fontSize">
            <option>8</option>
            <option>12</option>
            <option>14</option>
          </select>
        </div>
        <div className="toolBarItem">
          <div title="Bold" className="btn btn_bold">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Italic" className="btn btn_italic">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Underlined" className="btn btn_underlined">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Text color" className="btn btn_textColor">
          </div>
        </div>
      </div>

      <div className="colorContainer">
        <div className="toolBarItem">
          <div title="Add background image" className="btn btn_bckgImg">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Change color scheme" className="btn btn_palette">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Fill color" className="btn btn_fillColor">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Border color" className="btn btn_borderColor">
          </div>
        </div>
        <div className="toolBarItem">
          <div title="Border weight" className="btn btn_borderWeight">
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolBar;