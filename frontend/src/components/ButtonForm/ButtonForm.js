import React from "react";

import "../../sass/main.css";

function ButtonForm({ bottomTitle, disabled }) {
  return (
    <button type="submit" disabled={disabled} className="btnForm">
      {bottomTitle}
    </button>
  );
}

export default ButtonForm;
