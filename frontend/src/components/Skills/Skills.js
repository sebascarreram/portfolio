import React from "react";
import style from "./Skills.module.css";
import Icon from "../UI/Icon/Icon";

import ItemSkills from "./ItemSkills/ItemSkills";
import ListSkills from "./Lists/Lists";

// Icons
import IconHtml from "./../../assets/Icons/SVG/html-five.svg";
import IconCss from "./../../assets/Icons/SVG/css3.svg";
import IconJS from "./../../assets/Icons/SVG/javascript.svg";
import IconScss from "./../../assets/Icons/SVG/sass.svg";
import IconStyled from "./../../assets/Icons/SVG/styled-components.svg";
import IconModules from "./../../assets/Icons/SVG/css-modules-logo.svg";
import IconReact from "./../../assets/Icons/SVG/react.svg";
// import IconRedux from "./../../assets/Icons/SVG/redux.svg";
import IconHooks from "./../../assets/Icons/SVG/react-hooks.svg";
import IconGatsby from "./../../assets/Icons/SVG/gatsby.svg";
import IconGit from "./../../assets/Icons/SVG/git.svg";
import IconGithub from "./../../assets/Icons/SVG/github.svg";
import IconBitbucket from "./../../assets/Icons/SVG/bitbucket.svg";
import IconBuild from "./../../assets/Icons/SVG/cogs.svg";
import IconMongoDB from "./../../assets/Icons/SVG/mongodb.svg";
import IconNode from "./../../assets/Icons/SVG/node-dot-js.svg";
import IconPug from "./../../assets/Icons/SVG/pug.svg";
import IconPostman from "./../../assets/Icons/SVG/postman.svg";
import IconVS from "./../../assets/Icons/SVG/visualstudiocode.svg";
import IconVim from "./../../assets/Icons/SVG/vim.svg";

const Skills = () => {
  return (
    <div className={style.Skills}>
      <ItemSkills>
        <ListSkills>
          HTML5 <Icon src={IconHtml} alt="Icon HTML" />
        </ListSkills>
        <ListSkills>
          CSS3 <Icon src={IconCss} alt="Icon CSS" />
        </ListSkills>
        <ListSkills>
          JavaScript <Icon src={IconJS} alt="Icon JS" />
        </ListSkills>
      </ItemSkills>

      <ItemSkills>
        <ListSkills>
          SCSS <Icon src={IconScss} alt="Icon SCSS" />
        </ListSkills>
        <ListSkills>
          styled components{" "}
          <Icon src={IconStyled} alt="Icon style-components" />
        </ListSkills>
        <ListSkills>
          CSS modules <Icon src={IconModules} alt="Icon CSS modules" />
        </ListSkills>
      </ItemSkills>

      <ItemSkills>
        <ListSkills>
          ReactJS <Icon src={IconReact} alt="Icon React" />
        </ListSkills>
        {/* <ListSkills>
          Redux <Icon src={IconRedux} alt="Icon Redux" />
        </ListSkills> */}
        <ListSkills>
          Hooks <Icon src={IconHooks} alt="Icon Hooks" />
        </ListSkills>
        <ListSkills>
          GatsbyJS <Icon src={IconGatsby} alt="Icon GatsbyJS" />
        </ListSkills>
      </ItemSkills>

      <ItemSkills>
        <ListSkills>
          Git <Icon src={IconGit} alt="Icon Git" />
        </ListSkills>
        <ListSkills>
          Github <Icon src={IconGithub} alt="Icon GitHub" />
        </ListSkills>
        <ListSkills>
          Bitbucket <Icon src={IconBitbucket} alt="Icon Bitbucket" />
        </ListSkills>
        <ListSkills>
          Problem solver <Icon src={IconBuild} alt="Icon Build" />
        </ListSkills>
      </ItemSkills>

      <ItemSkills>
        <ListSkills>
          Express.JS <Icon src={IconBuild} alt="Icon Build" />
        </ListSkills>
        <ListSkills>
          MongoDB <Icon src={IconMongoDB} alt="Icon MongoDB" />
        </ListSkills>
        <ListSkills>
          Node.JS <Icon src={IconNode} alt="Icon Node" />
        </ListSkills>
        <ListSkills>
          Pug.JS <Icon src={IconPug} alt="Icon Pug" />
        </ListSkills>
      </ItemSkills>

      <ItemSkills>
        <ListSkills>
          Postman <Icon src={IconPostman} alt="Icon Postman" />
        </ListSkills>
        <ListSkills>
          MongoDB compass <Icon src={IconMongoDB} alt="Icon MongoDB" />
        </ListSkills>
        <ListSkills>
          Visual Studio Code <Icon src={IconVS} alt="Icon VS" />
        </ListSkills>
        <ListSkills>
          Vim <Icon src={IconVim} alt="Icon vim" />
        </ListSkills>
      </ItemSkills>
    </div>
  );
};

export default Skills;
