import React from "react";
import { Link } from "react-router-dom";

import "../../css/main.min.css";

function ButtonLink({ bottomTitle, link }) {
  return (
    <Link to={link} className="btnLinkForm">
      {bottomTitle}
    </Link>
  );
}

export default ButtonLink;
