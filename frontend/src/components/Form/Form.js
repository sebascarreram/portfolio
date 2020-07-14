import React from "react";

import style from "./Form.module.css";
import InputUI from "./../UI/Input/Input";
import Button from "./../UI/Button/Button";
import Aux from "./../../hoc/Aux";

const Form = props => {
  let Input;

  if (props.isContact) {
    Input = (
      <Aux>
        <InputUI
          onChangeInput={props.onChangeName}
          elementType="input"
          placeholder="Name"
          valueName={props.valueNam}
        />
        <InputUI
          onChangeInput={props.onChangeEmail}
          elementType="email"
          placeholder="Email"
          valueName={props.valueEmail}
        />
        <InputUI
          onChangeInput={props.onChangeSubject}
          elementType="input"
          placeholder="Subject"
          valueName={props.valueSubject}
        />
        <InputUI
          onChangeInput={props.onChangeMessage}
          elementType="textarea"
          placeholder="Message"
          valueName={props.valueMessage}
        />
        <Button>Send</Button>
      </Aux>
    );
  }

  return (
    <div className={style.BoxForm}>
      <form id={props.id} onSubmit={props.onSubmit} method="POST">
        {Input}
      </form>
    </div>
  );
};

export default Form;
