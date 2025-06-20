import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Thanks for stopping by
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
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

      <div className="footer__copyright">
        <small>&copy; Ron's Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
