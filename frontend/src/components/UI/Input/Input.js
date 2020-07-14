/* eslint-disable */

import React from "react";
import style from "./Input.module.css";

const Input = props => {
  let inputElement = null;

  const inputClasses = [style.InputElement];

  //   INVALID / TOUCHED
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(style.Invalid);
  }

  if (props.elementType === "textarea") {
    inputClasses.push(style.Textarea);
  }

  let validationError = null;

  //   INVALID / TOUCHED
  if (props.invalid && props.touched) {
    validationError = (
      <p className={style.ValidationError}>Please enter a valid value!</p>
    );
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onChange={props.onChangeInput}
          type="text"
          value={props.valueName}
          placeholder={props.placeholder}
          className={inputClasses.join(" ")}
        />
      );
      break;
    case "email":
      inputElement = (
        <input
          onChange={props.onChangeInput}
          type="email"
          value={props.valueName}
          placeholder={props.placeholder}
          className={inputClasses.join(" ")}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.onChangeInput}
          value={props.valueName}
          placeholder={props.placeholder}
          className={inputClasses.join(" ")}
        />
      );
      break;
    default:
      inputElement = (
        <input
          onChange={props.onChangeInput}
          placeholder={props.placeholder}
          onChange={props.onChangeInput}
          value={props.valueName}
          className={inputClasses.join(" ")}
        />
      );
  }

  return (
    <div className={style.Input}>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;
