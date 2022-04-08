import React from "react";
import PropTypes from "prop-types";

import "../../css/main.min.css";

function ButtonForm({ bottomTitle }) {
  return (
    <button type="submit" className="btnForm">
      {bottomTitle}
    </button>
  );
}

ButtonForm.propTypes = {
  bottomTitle: PropTypes.string,
};

export default ButtonForm;
