import React from "react";
import ItemLanguage from "./../../components/ItemLanguage/ItemLanguage";
import style from "./Language.module.css";

const Language = () => (
  <section className={style.SectionLanguage}>
    <h1>Languages</h1>
    <ItemLanguage />
  </section>
);

export default Language;
