import React from "react";
import { Link } from "react-router-dom";

import Aux from "./../../hoc/Aux";
import style from "./About.module.css";

import Language from "./../Language/Language";
import Soft from "./../Soft/Soft";

import ListSkill from "../ListSkills/ListSkills";
import Emoji from "./../../components/UI/Emoji/Emoji";
import ImageCode from "./../../assets/images/code.jpg";
import PdfResumen from "./../../assets/pdf/Sebastian Carrera Resume version 2.pdf";

const About = () => {
  return (
    <Aux>
      <section className={style.SectionAbout}>
        <div className="container">
          <div className={style.Flex}>
            <div className={style.Paragraph}>
              <h1>Who am I...</h1>
              <hr />
              <p>Hey, I'm Sebastian Carrera Medina.</p>
              <p>
                I'm a web developer and i've been making websites for about 1
                years.
              </p>
              <p>
                I'm specialized in frontend development and as well as backend.
              </p>
              <br />
              <p>
                The technologies I work with are JavaScript, HTML and CSS with a
                focus on the frameworks React.js, Gatsby.js, Node.js, Express.js
                and pug.js. or look down there to my skills.{" "}
                <Emoji symbol="⤵️" label="arrow" />
              </p>
              <p>
                I’m passionate about learning all kinds of new web technologies
                and I’m constantly working on bettering my coding skills but
                always with coffee. <Emoji symbol="☕️" label="coffe" />
              </p>
              <br />
              <p>
                I graduated from CECEP in technology in information systems in
                2019 after started i've had been practicing as a web developer
                with JavaScript.
              </p>
              <br />
              <p>
                When I'm not writing code i love to spend time watch
                films/series with my family &amp; my dogs{" "}
                <Emoji symbol="🐶" label="dog" /> and especially with my sister
                because she literally likes so much watch films/series like me
                or travelling to USA <Emoji symbol="🇺🇸" label="flag" /> to visit
                my family when i'm on vacation.
              </p>
              <br />
              <p>This site is my portfolio where i'll be launch my projects.</p>
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
          Recruiters, you can find my up-to-date CV as a PDF download by
          clicking the button below.
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
