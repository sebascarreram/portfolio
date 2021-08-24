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
                focus on the JavaScript library React or look at down there to
                my skills.{" "}  
                <a href="#emoji">
                  <Emoji symbol="⬇️" label="arrow" />
                </a>
              </p>
              <p>
                I'm passionate about coding and I'm always looking for a new
                challenge. I love discovering new skills and technologies to
                produce the best websites.{" "}
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
      <ListSkill clickGo="emoji"/>

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
