import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavigationItem.module.css";

const NavigationItem = props => (
  <li>
    <NavLink exact={props.exact} to={props.Link} activeClassName={style.active}>
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
