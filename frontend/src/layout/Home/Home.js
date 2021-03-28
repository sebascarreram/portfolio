import React from "react";
import style from "./Home.module.css";

import Social from "./../../components/Social/Social";
import Aux from "./../../hoc/Aux";

const Home = () => {
  return (
    <Aux>
      <section className={style.HomeSection}>
        <div className={style.Title}>
          <h2>Hi there !</h2>
          <h3>I'm Sebastian,</h3>
          <h1>Web developer</h1>
          <h4>Frontend ReactJS</h4>
          <Social />
        </div>
      </section>
    </Aux>
  );
};

export default Home;
