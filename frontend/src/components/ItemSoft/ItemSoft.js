import React from "react";
import style from "./ItemSoft.module.css";

import ItemSkills from "./../Skills/ItemSkills/ItemSkills";
import ListSkills from "./../Skills/Lists/Lists";

const ItemSoft = () => (
  <div className={style.Skills}>
    <ItemSkills>
      <ListSkills>Teamwork</ListSkills>
      <ListSkills>Perseverance</ListSkills>
      <ListSkills>Adaptability</ListSkills>
      <ListSkills>Time management</ListSkills>
    </ItemSkills>

    <ItemSkills>
      <ListSkills>Empathy</ListSkills>
      <ListSkills>Problem solving</ListSkills>
      <ListSkills>Work ethic</ListSkills>
      <ListSkills>Honestly</ListSkills>
    </ItemSkills>
  </div>
);

export default ItemSoft;
