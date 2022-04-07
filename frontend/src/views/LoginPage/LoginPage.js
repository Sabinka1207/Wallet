import React from "react";

import LoginForm from "../../components/LoginForm";
import imgTablet1x from "../../img/tablet/login-tablet@1x.png";
import ellipseViolet from "../../img/Ellipse-1@1x.png";
import ellipseOrange from "../../img/Ellipse2.png";
import "../../css/main.min.css";

export default function LoginPage() {
  return (
    <div className="loginPageContainer">
      <div className="loginPageIMGContainer">
        <img alt="Finance App" src={imgTablet1x}></img>
        <p className="loginPageText">Finance App</p>
      </div>
      <div className="loginPageFormContainer">
        <LoginForm />
      </div>
      <img alt="" src={ellipseViolet} className="loginPageEllipseViolet"></img>
      <img alt="" src={ellipseOrange} className="loginPageEllipseOrange"></img>
    </div>
  );
}
