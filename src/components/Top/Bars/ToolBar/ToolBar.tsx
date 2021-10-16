import React from 'react';
import './ToolBar.css';
// import ToolBarItem from './ToolBarItem/ToolBarItem';



function ToolBar() {
  
    return (
      <div className="toolBarContainer">
        <div className="toolBarItem">
          <div title="Add slide" className="btn btn_add">
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
        <div className="toolBarItem">
          <div title="Add background image" className="btn btn_bckgImg">
          </div>          
        </div>
        <div className="toolBarItem">
          <div title="Take color" className="btn btn_palette">
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
        <div className="toolBarItem">
          <div title="Font" className="btn btn_fontFamily">
            Roboto
          </div>          
        </div>
        <div className="toolBarItem">
          <div title="Font size" className="btn btn_fontSize">
            14
          </div>          
        </div>
        <div className="toolBarItem">
          <div title="Border weight" className="btn btn_borderWeight">
          </div>          
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




        {/* <ToolBarItem  link='"https://www.pngwing.com/ru/free-png-krkue"' name="add"/>
       
        <ToolBarItem link='"Icons/outline_add_black_24dp.png"' name="undo"/>
        <ToolBarItem link='"../Icons/outline_add_black_24dp.png"' name="redo"/>
        <ToolBarItem link='"./Icons/outline_add_black_24dp.png"' name="select"/>
        <ToolBarItem link='"./Icons/outline_add_black_24dp.png"' name="image"/>
        <ToolBarItem link='"./Icons/outline_add_black_24dp.png"' name="triang"/>
        <ToolBarItem link='"./Icons/outline_add_black_24dp.png"' name="circle"/>
        <ToolBarItem link='"./Icons/outline_add_black_24dp.png"' name="rect"/>
        <ToolBarItem link='"./Icons/outline_add_black_24dp.png"' name="backImg"/>
        <ToolBarItem link='"./Icons/outline_add_black_24dp.png"' name="backColor"/> */}


      </div>
    );
  }
  
  export default ToolBar;