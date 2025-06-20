import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Ron.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="header__subtitle">Hey <span className="header__hand">👋</span> I'm</h5>
        <h1 style={{color: "#4AABF3"}}>Ron Dayan</h1>
        <h5 className="text-light" >Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img className="main-me" src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
