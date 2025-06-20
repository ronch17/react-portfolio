import React from "react";
import "./about.css";
import ME from "../../assets/Ron-about2.png";
import { FaAward } from "react-icons/fa";
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
              <small>4+ Years Working</small>
            </article>
            {/*<article className="about__card">*/}
            {/*  <FiUsers className="about__icon" />*/}
            {/*  <h5>Clients</h5>*/}
            {/*  <small>20+ happy clients</small>*/}
            {/*</article>*/}
            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>up to 60 Completed</small>
            </article>
          </div>

          <p>
            Frontend Developer with a passion for creating beautiful and
            functional web applications. I have a strong background in web development and have worked with a variety of technologies including HTML, SCSS, JavaScript, React, Node, Wordpress and Php.
            <br /> Having an experience of more than four years, I've been
            working for personal clients and fintech companies, I
            developed unique and creative web applications, authentication systems,
            maintained http requests, worked with Docker and maintained linux based vps's, added GSAP
            utilities which enhanced the companies business and user experience.
            <br />  <br />
            I am a detail-oriented and autodidact person who enjoys bringing new ideas to life,
            making sure for the best user experience and delivering the best results.
            <br />
            I'm constantly learning and keeping up to date with the latest web
            development trends and best practices to ensure that the applications I
            build are modern, secure, and maintainable.
          </p>

          <a href="#portfolio" className="btn btn-primary">
            My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
