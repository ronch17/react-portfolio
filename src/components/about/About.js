import React from "react";
import "./about.css";
import ME from "../../assets/Ron-about2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ happy clients</small>
            </article>
            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>up to 30 Completed</small>
            </article>
          </div>

          <p>
            Hi there! My name is Ron, and I'm a web developer with a passion for
            creating dynamic and user-friendly websites.
            <br /> having an experience of more than two years, I've been
            working for personal clients and fintech company as web developer, I
            developed a strong skillset in HTML, CSS, JavaScript, React,
            Wordpress, Php, along with designing in Figma, XD, illustrator,
            Photoshop and even created animations with After effects for
            websites.
            <br /> My approach to web development is to combine creativity and
            functionality to deliver high-quality and visually appealing
            websites. I strive to make sure that each website I build is
            responsive and optimized for performance, providing an excellent
            user experience across all devices. I am a detail-oriented person
            who enjoys working with clients to understand their unique needs and
            creating custom solutions that align with their business objectives.
            I'm constantly learning and keeping up-to-date with the latest web
            development trends and best practices to ensure that the websites I
            build are modern, secure, and maintainable.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
