import React from 'react';
import s from './ToolBarItem.module.css'

type ToolBarItemProps = {
  link: string,
  name: string,
  /*   onClick: () => void, */
}

function ToolBarItem(props: ToolBarItemProps) {
  return (
    <div /* onClick={props.onClick}  */ className={`${s.item}`}>
      {props.name}
    </div>
  );
}

export default ToolBarItem;