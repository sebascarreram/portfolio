// import React, { useState, useEffect } from "react";
import React from "react";
// import { Redirect } from "react-router-dom";

import Aux from "./../../hoc/Aux";

import NavigationItem from "./NavigationItem/NavigationItem";
import style from "./Navigation.module.css";

const Navigation = () => {
  // const [isAuth, setIsAuth] = useState(true);

  // useEffect(() => {
  //   // console.log(isAuth);
  //   setIsAuth(false);
  //   console.log(isAuth);
  // }, [isAuth, setIsAuth]);

  const isAuthenticated = false;
  let admin;
  // let log;

  if (isAuthenticated) {
    admin = <NavigationItem Link="/admin">Admin</NavigationItem>;
    // log = <NavigationItem Link="/logout">Log out</NavigationItem>;
  }
  // else {
  //   admin = null;
  //   log = (
  //     <Aux>
  //       <NavigationItem Link="/login">Log in</NavigationItem>
  //       {/* <Redirect to="/" /> */}
  //     </Aux>
  //   );
  // }
  return (
    <Aux>
      <nav className={style.Nav}>
        <ul>
          <NavigationItem exact Link="/">
            Home
          </NavigationItem>
          <NavigationItem Link="/portfolio">Portfolio</NavigationItem>
          <NavigationItem Link="/about">About</NavigationItem>
          <NavigationItem Link="/contact">Contact</NavigationItem>
          {admin}
          {/* {log} */}
        </ul>
      </nav>
    </Aux>
  );
};

export default Navigation;
