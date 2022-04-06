import React from "react";
import "../../sass/main.css";
import "../../sass/main.scss";

function TextError(props) {
  return <div className="textErrorForm">{props.children}</div>;
}

export default TextError;
