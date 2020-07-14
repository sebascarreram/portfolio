import React from "react";

import style from "./SoonProject.module.css";
import Aux from "./../../hoc/Aux";
import HomeIcon from "./../../assets/images/home.svg";

const SoonProject = () => {
  return (
    <Aux>
      <img alt="Icon" className={style.Icon} src={HomeIcon} />
      <h2 className={style.Coming}>New portfolio coming soon !!</h2>
    </Aux>
  );
};

export default SoonProject;
