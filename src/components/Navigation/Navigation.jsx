import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navigation.module.scss';

const Navigation = () => {
  return (
  <nav >
    <ul className={style.header}>
      <li>
      <NavLink exact  to="/" className={style.link} activeClassName={style.activeLink} >
        Home
    </NavLink>
      </li>
      <li>
      <NavLink
      to="/movies" className={style.link}  activeClassName={style.activeLink} >
      Movies
    </NavLink>
      </li>
    </ul>
    
  </nav>
  ); 
};

export default Navigation;