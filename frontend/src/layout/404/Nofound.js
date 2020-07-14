import React from "react";

// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import style from "./Nofound.module.css";
import Aux from "./../../hoc/Aux";

const Nofound = () => {
  // let location = useLocation();

  // let x = window.location.hostname;

  return (
    <Aux>
      <section className={style.Nofound}>
        {/* <div className="container"> */}
        <h1>404</h1>
        <h3>This page doesn't exist.</h3>
        <h3>
          If you think this is an error &rarr;
          <Link className={style.Link} to="/contact">
            Contact me
          </Link>
        </h3>
        {/* <h3>
          {x} {location.pathname}
        </h3> */}
        {/* </div> */}
      </section>
    </Aux>
  );
};

export default Nofound;
