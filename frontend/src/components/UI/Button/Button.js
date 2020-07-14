import React from "react";
import style from "./Button.module.css";

const Button = props => (
  <button
    type={props.type}
    onClick={props.clicked}
    disabled={props.disabled}
    className={[style.Button, style[props.btnType]].join(" ")}
  >
    {props.children}
  </button>
);

export default Button;
