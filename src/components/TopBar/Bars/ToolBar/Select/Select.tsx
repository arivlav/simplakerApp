import React from 'react';
import './Select.css';
import Option from './Option/Option';

type SelectProps = {
    title: string,
    className: string    
}


function Select(props: SelectProps)
{
let fontBase = [
  {id:'1', fontName: 'Roboto'},
  {id:'2', fontName: 'Arial'},
  {id:'3', fontName: 'Colibri'},
  {id:'4', fontName: 'Georgia'}
]

let FontElements = fontBase.map(el => (<Option value={el.fontName}/>))


  // let OptionElemets = [<Option value={fontBase[0].fontName} />,
  //  <Option value={fontBase[1].fontName}/>,
  //  <Option value={fontBase[2].fontName}/>];
  return (
        <div className="toolBarItem"> {/* поправить режим селекта*/}
        
        <select title={props.title} className={props.className}>
          {FontElements}
          {/* {[<Option value="Roboto"/>, <Option value="Arial"/>, <Option value="Colibri"/>]} */}
          {/* <Option value="Roboto"/>
          <Option value="Arial"/>
          <Option value="Colibri"/> */}
        </select>
      </div>
    );
}

export default Select;
 