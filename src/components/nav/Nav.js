import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const Nav = ({ activeSection, setActiveSection }) => {
  const handleClick = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = (id) => {
    return id === activeSection ? "active" : "";
  };

  return (
    <nav>
      <Tooltip
        anchorSelect="#home"
        content="home"
        place="bottom"
        style={{ background: "#2C2C6CFF" }}
      />
      <a
        id="home"
        href="#home"
        onClick={() => handleClick("home")}
        className={linkClass("home")}
      >
        <AiOutlineHome />
      </a>
      <Tooltip
        anchorSelect=".about"
        content="about"
        place="bottom"
        style={{ background: "rgba(44,44,108,0.9)" }}
      />
      <a
        href="#about"
        onClick={() => handleClick("about")}
        className={`${linkClass("about")} about`}
      >
        <HiOutlineUser />
      </a>
      <Tooltip
        anchorSelect=".experience"
        content="skills"
        place="bottom"
        style={{ background: "rgba(44,44,108,0.9)" }}
      />
      <a
        href="#experience"
        onClick={() => handleClick("experience")}
        className={`${linkClass("experience")} experience`}
      >
        <HiOutlineBookOpen />
        <Tooltip
          anchorSelect=".services"
          content="experience"
          place="bottom"
          style={{ background: "rgba(44,44,108,0.9)" }}
        />
      </a>

      <a
        href="#services"
        onClick={() => handleClick("services")}
        className={`${linkClass("services")} services`}
      >
        <RiServiceLine />
        <Tooltip
          anchorSelect=".portfolio"
          content="portfolio"
          place="bottom"
          style={{ background: "rgba(44,44,108,0.9)" }}
        />
      </a>

      <a
        href="#portfolio"
        onClick={() => handleClick("portfolio")}
        className={`${linkClass("portfolio")} portfolio`}
      >
        <MdWorkOutline />
      </a>
      <Tooltip
        anchorSelect=".contact"
        content="contact"
        place="bottom"
        style={{ background: "rgba(44,44,108,0.9)" }}
      />
      <a
        href="#contact"
        onClick={() => handleClick("contact")}
        className={`${linkClass("contact")} contact`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
