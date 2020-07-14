import React from "react";
import style from "./Skills.module.css";
import Skills from "../../components/Skills/Skills";

const ListSkills = () => (
  <section className={style.SectionSkills}>
    <div className="container">
      <div className={style.TextAlign}>
        <h1>Technological Skills</h1>
        <hr />
        <p>
          I always enjoy learning new things. Especially the technologies that
          make your company special.
        </p>
      </div>
      <Skills />
    </div>
  </section>
);

export default ListSkills;
