import React from "react";
import LoginForm from "../../components/LoginForm";
import imgTablet1x from "../../img/tablet/login-tablet@1x.png";
import imgTablet2x from "../../img/tablet/login-tablet@2x.png";
import imgTablet3x from "../../img/tablet/login-tablet@3x.png";
import imgTablet4x from "../../img/tablet/login-tablet@4x.png";
import imgDesktop1x from "../../img/desktop/login-desktop@1x.png";
import imgDesktop2x from "../../img/desktop/login-desktop@2x.png";
import imgDesktop3x from "../../img/desktop/login-desktop@3x.png";
import imgDesktop4x from "../../img/desktop/login-desktop@4x.png";
import ellipseViolet1 from "../../img/Ellipse-1@1x.png";
import ellipseViolet2 from "../../img/Ellipse-1@2x.png";
import ellipseViolet3 from "../../img/Ellipse-1@3x.png";
import ellipseViolet4 from "../../img/Ellipse-1@4x.png"
import ellipseOrange1 from "../../img/Ellipse-2@1x.png";
import ellipseOrange2 from "../../img/Ellipse-2@2x.png";
import ellipseOrange3 from "../../img/Ellipse-2@3x.png";
import ellipseOrange4 from "../../img/Ellipse-2@4x.png";
import "../../css/main.min.css";

export default function LoginPage() {
  return (
    <div className="loginPageContainer">
      <div className="loginPageIMGContainer">
        <picture>
          <source srcset={`${imgDesktop1x} 1x, ${imgDesktop2x} 2x, ${imgDesktop3x} 3x, ${imgDesktop4x} 4x`}
            media="(min-width: 1280px)" />
          <source srcset={`${imgTablet1x} 1x, ${imgTablet2x} 2x, ${imgTablet3x} 3x, ${imgTablet4x} 4x`}
            media="(min-width: 768px)" />
          <img src={imgTablet1x} alt="" />
        </picture>
        
        <p className="loginPageText">Finance App</p>
      </div>
      <div className="loginPageFormContainer">
        <LoginForm />
      </div>
        <picture>
          <source srcset={`${ellipseViolet1} 1x, ${ellipseViolet2} 2x, ${ellipseViolet3} 3x, ${ellipseViolet4} 4x`}
            />
          <img className="loginPageEllipseViolet" src={ellipseViolet1} alt="" />
      </picture>
      <picture>
          <source srcset={`${ellipseOrange1} 1x, ${ellipseOrange2} 2x, ${ellipseOrange3} 3x, ${ellipseOrange4} 4x`}
            />
          <img className="loginPageEllipseOrange" src={ellipseOrange1} alt="" />
      </picture>
    </div>
  );
}
