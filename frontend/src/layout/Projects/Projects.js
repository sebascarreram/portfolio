import React from "react";
import Aux from "./../../hoc/Aux";

import SoonProject from "./../SoonProject/SoonProject";
import style from "./Projects.module.css";

import { ReactComponent as GithubLogo } from "./../../assets/Icons/SVG/github.svg";
import { ReactComponent as EyeLogo } from "./../../assets/Icons/SVG/eye.svg";
// import LogoEye from "./../../assets/Icons/eye-outline.svg";

import data from "./../../assets/json/projects.json";

const Projects = () => {
  //
  const projectsList = data;

  // console.log(projectsList);

  let List;

  if (!projectsList.length) {
    List = (
      <div className={style.Soon}>
        <SoonProject />
      </div>
    );
  } else {
    List = (
      <div className="container">
        <ul>
          {projectsList.map(
            ({ _id, title, url_github, url_website, photo }, i) => {
              return (
                <li key={_id} className={style.BoxProject}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://github.com/sebascarreram/${url_github}`}
                  >
                    <img
                      src={require(`./../../assets/images/${photo}`)}
                      alt={title}
                    />
                    <p>
                      {i + 1}. {title}
                    </p>
                  </a>
                  <div className={style.ProjectLink}>
                    <a aria-label={title} href={`${url_website}`}>
                      <GithubLogo />
                    </a>
                    <a aria-label={title} href={`${url_website}`}>
                      <EyeLogo />
                    </a>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  }
  return (
    <Aux>
      <section className={style.ProjectSection}>
        {/* <div className="container">{List}</div> */}
        {List}
      </section>
    </Aux>
  );
};

export default Projects;
