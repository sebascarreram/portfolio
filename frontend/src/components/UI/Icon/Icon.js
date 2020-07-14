import React from "react";
import style from "./Icon.module.css";

const Icon = props => (
  <img className={style.Icon} src={props.src} alt={props.alt} />
);

export default Icon;
