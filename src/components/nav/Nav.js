import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { useState } from "react";
import { Tooltip } from 'react-tooltip'



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
    <Tooltip anchorSelect="#home" content="home"  place="bottom" style={{ background:"#2c2c6cab"
}} />
      <a
      id="home"
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <Tooltip anchorSelect=".about" content="about"  place="bottom" style={{ background:"#2c2c6cab"
}} />
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : "about"}
      >
        <HiOutlineUser />
      </a>
      <Tooltip anchorSelect=".experience" content="experience"  place="bottom" style={{ background:"#2c2c6cab"
}} />
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : "experience"}
      >
        <HiOutlineBookOpen />
      </a>
      <Tooltip anchorSelect=".services" content="services"  place="bottom" style={{ background:"#2c2c6cab"
}} />
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : "services"}
      >
        <RiServiceLine />
      </a>
      <Tooltip anchorSelect=".portfolio" content="portfolio"  place="bottom" style={{ background:"#2c2c6cab"
}} />
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : "services"}
      >
        <MdWorkOutline />
      </a>
      <Tooltip anchorSelect=".contact" content="contact"  place="bottom" style={{ background:"#2c2c6cab"
}} />
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : "contact"}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
