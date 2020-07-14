import React from "react";
import style from "./ItemLanguage.module.css";
import Icon from "./../UI/Icon/Icon";
import Emoji from "./../UI/Emoji/Emoji";
import IconSign from "./../../assets/Icons/SVG/sign-language.svg";

const ItemLanguage = () => (
  <ul className={style.UlList}>
    <li>
      <Emoji symbol="🇨🇴" label="flag" />
      -Spanish(Native)
    </li>
    <li>
      <Emoji symbol="🇺🇸" label="flag" />
      -English(Beginner)
    </li>
    <li>
      <Icon src={IconSign} /> - Colombian sign language
    </li>
  </ul>
);

export default ItemLanguage;
