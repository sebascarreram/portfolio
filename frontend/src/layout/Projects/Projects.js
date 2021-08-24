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
            ({ id, name, github, url, image }, i) => {
              return (
                <li key={id} className={style.BoxProject}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={url}
                  >
                    
                    <img
                      src={require(`./../../assets/images/projects/${image}`)}
                      alt={name}
                    />
                    <p>
                      {i + 1}. {name}
                    </p>
                  </a>
                  <div className={style.ProjectLink}>
                    <a aria-label={name} href={`https://github.com/sebascarreram/${github}`} target="_blank">
                      <GithubLogo />
                    </a>
                    <a aria-label={name} href={`${url}`} target="_blank">
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
