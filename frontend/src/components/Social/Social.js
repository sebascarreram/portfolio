// eslint-disable
import React from "react";
// import { Link } from "react-router-dom";

import style from "./Social.module.css";
import SocialItem from "./SocialItem/SocialItem";
import LogoGithub from "./../../assets/Icons/SVG/github-green.svg";
import LogoInstagram from "./../../assets/Icons/SVG/instagram.svg";
// import LogoMail from "./../../assets/Icons/mail-outline.svg";
import LogoMail from "./../../assets/Icons/SVG/mail-outline.svg";

const Social = () => {
  return (
    <div className={style.Social}>
      <ul>
        <SocialItem NoTo href="https://www.instagram.com/sebascarreram/">
          <img className={style.Logo} alt="logo icon" src={LogoInstagram} />
        </SocialItem>

        <SocialItem NoTo href="https://github.com/sebascarreram/">
          <img alt="logo icon" src={LogoGithub} />
        </SocialItem>

        <SocialItem toLink="/contact">
          <img alt="logo icon" src={LogoMail} />
        </SocialItem>
      </ul>
    </div>
  );
};

export default Social;

/* <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.instagram.com/sebascarreram/`}
          >
            <img className={style.Logo} alt="logo icon" src={LogoInstagram} />
          </a>
        </li> 
         <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://github.com/sebascarreram/`}
          >
            <img alt="logo icon" src={LogoGithub} />
          </a>
        </li> 
 <li>
          <Link to="/contact">
            <img alt="logo icon" src={LogoMail} />
          </Link>
        </li> */
