import React from 'react';

import s from './MenuBarItem.module.css'

type MenuBarItemProps = {
  text: string;
}

function MenuBarItem(props: MenuBarItemProps) {
    return (
      <div className={`${s.item}`}>
        {props.text}
      </div>
    );
  }
  
  export default MenuBarItem;