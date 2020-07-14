/* eslint-disable */
import React from "react";
import style from "./ItemSkills.module.css";

const ItemSkills = props => {
  return (
    <div>
      <ul className={style.Flex}>{props.children}</ul>
    </div>
  );
};

export default ItemSkills;

{
  /* 
  
<div>
    <ul className={style.Flex}>
        <li>
             HTML5 <Icon src={IconHtml} alt="Icon HTML" />
        </li>
        <li>
            CSS3 <Icon src={IconCss} alt="Icon CSS" />
        </li>
        <li>
            JavaScript <Icon src={IconJS} alt="Icon JS" />
        </li>
    </ul>
</div> */
}
