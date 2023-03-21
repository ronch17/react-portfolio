import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/rondeveloper/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ronch17" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/wwWizardd/" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocial;
