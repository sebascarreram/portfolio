import React, { Suspense } from "react";

// import { Link, useLocation } from "react-router-dom";

import LoadingSpinner from "./../components/UI/Spinner/Spinner";

import style from "./Layout.module.css";
import Aux from "./../hoc/Aux";
import Logo from "./../components/Logo/Logo";
import LogoReact from "./../assets/Icons/SVG/react-blue.svg";
import Navigation from "./../components/Navigation/Navigation.js";

const Layout = (props) => {
  return (
    <Aux>
      <header className="container">
        <div className={`${style.Flex} ${style.Navigation}`}>
          <div className={style.Logo}>
            <Logo />
          </div>
          <div>
            <Navigation />
          </div>
        </div>
      </header>
      <main className={style.Main}>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          {props.children}
        </Suspense>
      </main>

      <footer className={style.Footer}>
        <p>
          &copy; {new Date().getFullYear()} - Sebastian C. | Made with{" "}
          <span>♥</span> using{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://reactjs.org/"
          >
            ReactJS{" "}
            <span>
              <img alt="logo react" src={LogoReact} />
            </span>
          </a>{" "}
          | Hosted on{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.netlify.com"
          >
            Netlify
          </a>
        </p>
      </footer>
    </Aux>
  );
};

export default Layout;
