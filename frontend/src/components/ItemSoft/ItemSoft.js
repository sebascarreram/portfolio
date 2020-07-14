import React from "react";
import style from "./ItemSoft.module.css";

import ItemSkills from "./../Skills/ItemSkills/ItemSkills";
import ListSkills from "./../Skills/Lists/Lists";

const ItemSoft = () => (
  <div className={style.Skills}>
    <ItemSkills>
      <ListSkills>Visual communication</ListSkills>
      <ListSkills>Creativity</ListSkills>
      <ListSkills>Critical observations</ListSkills>
      <ListSkills>Desire to learn</ListSkills>
    </ItemSkills>

    <ItemSkills>
      <ListSkills>Design aptitude</ListSkills>
      <ListSkills>Problem solving</ListSkills>
      <ListSkills>Research</ListSkills>
      <ListSkills>Honestly</ListSkills>
    </ItemSkills>

    <ItemSkills>
      <ListSkills>Friendliness</ListSkills>
      <ListSkills>Confidence</ListSkills>
      <ListSkills>Dealing with difficult situations</ListSkills>
      <ListSkills>Disability awareness</ListSkills>
    </ItemSkills>

    <ItemSkills>
      <ListSkills>Dedication</ListSkills>
      <ListSkills>Confidence</ListSkills>
      <ListSkills>Motivation</ListSkills>
    </ItemSkills>
  </div>
);

export default ItemSoft;
