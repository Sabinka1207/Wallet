import React from "react";
import { Link } from "react-router-dom";

import "../../sass/main.css";

function ButtonLink({ bottomTitle, link }) {
  return (
    <Link to={link} className="btnLinkForm">
      {bottomTitle}
    </Link>
  );
}

export default ButtonLink;
