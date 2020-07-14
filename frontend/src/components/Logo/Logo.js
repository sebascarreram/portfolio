import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

import style from "./Logo.module.css";
import Aux from "./../../hoc/Aux";

const Logo = props => {
  let location = useLocation();
  let name;
  let nameTitle;

  let FirstLetter = str => {
    // console.log(str);
    return str[1].charAt(0).toUpperCase() + str[1].slice(1);
  };

  if (
    !location.pathname === "/" ||
    location.pathname === "/projects" ||
    location.pathname === "/contact" ||
    location.pathname === "/admin" ||
    location.pathname === "/about" ||
    location.pathname === "/portfolio"
    // location.pathname === "/login"
  ) {
    name = (
      <span className={style.Location}>
        <strong>|</strong> {FirstLetter(location.pathname.split("/"))}
      </span>
    );
    nameTitle = `${FirstLetter(location.pathname.split("/"))} | Sebastian C.`;
  } else if (location.pathname === "/login") {
    name = (
      <span className={style.Location}>
        <strong>| </strong>Log in
      </span>
    );
    nameTitle = `Log in | Sebastian C.`;
  } else if (location.pathname === "/forgot") {
    name = (
      <span className={style.Location}>
        <strong>|</strong> Password reset
      </span>
    );
    nameTitle = `Password reset`;
  } else {
    name = null;
    nameTitle = "Home | Sebastian C.";
  }
  //
  return (
    <Aux>
      <Helmet>
        <title>{`${nameTitle}`}</title>
      </Helmet>
      <Link to="/" className={style.Name}>
        Sebastian C.
      </Link>
      <small>{name}</small>
    </Aux>
  );
};

export default Logo;
