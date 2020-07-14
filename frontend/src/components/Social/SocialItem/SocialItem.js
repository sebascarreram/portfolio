import React from "react";
import { Link } from "react-router-dom";
import Aux from "./../../../hoc/Aux";

const SocialItem = props => {
  let Item;

  if (props.NoTo) {
    Item = (
      <li>
        <a rel="noopener noreferrer" target="_blank" href={props.href}>
          {props.children}
        </a>
      </li>
    );
  } else {
    Item = (
      <li>
        <Link to={props.toLink}>{props.children}</Link>
      </li>
    );
  }
  return <Aux>{Item}</Aux>;
};

export default SocialItem;
