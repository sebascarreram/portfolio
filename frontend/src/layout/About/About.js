import React from "react";
import { Link } from "react-router-dom";

import Aux from "./../../hoc/Aux";
import style from "./About.module.css";

import Language from "./../Language/Language";
import Soft from "./../Soft/Soft";

import ListSkill from "../ListSkills/ListSkills";
import Emoji from "./../../components/UI/Emoji/Emoji";
import ImageCode from "./../../assets/images/code.jpg";
import PdfResumen from "./../../assets/pdf/SCM.pdf";

const About = () => {
  return (
    <Aux>
      <section className={style.SectionAbout}>
        <div className="container">
          <div className={style.Flex}>
            <div className={style.Paragraph}>
              <h1>Who am I...</h1>
              <hr />
              <p>
                Hey, I'm Sebastian Carrera Medina, and I'm a junior web
                developer who specializes in frontend including HTML, SCSS,
                JavaScript, and React.
              </p>
              <br />
              <p>
                The technologies I work with HTML, SCSS, and JavaScript with a
                focus on the JavaScript library React or look down there to my skills.{" "}
                <Emoji symbol="⤵️" label="arrow" />
              </p>
              <p>
                I’m passionate about learning new technologies and I’m
                constantly working to be better at coding/skills but always with
                coffee. <Emoji symbol="☕️" label="coffe" />. But without coffee
                and it's ok i will continue to work{" "}
                <Emoji symbol="💪" label="strong" />.
              </p>
              <br />
              <p>
                When I'm not writing code I love to spend time watch
                films/series with my family &amp; my dogs{" "}
                <Emoji symbol="🐶" label="dog" /> and especially with my sister
                because she literally likes so much to watch films/series like
                me or traveling to the USA <Emoji symbol="🇺🇸" label="flag" /> to
                visit my family when I'm on vacation.
              </p>
              <br />
              <p>
                This site is my portfolio where I'll be launching my projects.
              </p>
              <br />
              <p>
                Thank you for reading my portfolio.{" "}
                <Emoji symbol="📖" label="read" />
              </p>
              <br />
              <div className={style.BoxPDF}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className={style.BtnPDF}
                  href={PdfResumen}
                >
                  Download CV
                </a>
                <Link to="/contact" className={style.BtnPDF}>
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <img
                className={style.ImageCode}
                src={ImageCode}
                alt="ImageCode"
              />
            </div>
          </div>
        </div>
      </section>
      <Language />
      <Soft />
      <ListSkill />

      <div className={style.Download}>
        <p>
          You can find my up-to-date CV as a PDF download by clicking the button
          below.
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className={style.BtnPDF}
          href={PdfResumen}
        >
          Download CV
        </a>
      </div>
    </Aux>
  );
};

export default About;
