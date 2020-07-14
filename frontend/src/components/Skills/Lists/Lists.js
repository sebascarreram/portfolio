import React from "react";
import style from "./Lists.module.css";

const Lists = props => <li className={style.List}>{props.children}</li>;

export default Lists;
