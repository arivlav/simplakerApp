import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MenuBar.module.css'
import MenuBarItem from './MenuBarItem/MenuBarItem';


function MenuBar() {
    return (
      <div className={`${s.menuBar}`}>
        <MenuBarItem text='File'/>
        <MenuBarItem text='Edit'/>
        <MenuBarItem text='View'/>
        <MenuBarItem text='Insert'/>
        <MenuBarItem text='Format'/>
        <MenuBarItem text='Slide'/>
        <MenuBarItem text='Object'/>
        <NavLink to="/slide" activeClassName={s.activeLink}>Slide</NavLink>
        <NavLink to="/slidetest" activeClassName={s.activeLink}>SlideTest</NavLink>
      </div>
    );
  }
  
  export default MenuBar;