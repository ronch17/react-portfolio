import React from "react";
import ReactGA from "react-ga4";

const CTA = () => {
  const projectsBtnHandler = () => {
    ReactGA.event({
      category: "Button",
      action: "Clicked Projects Button",
      label: "Projects Section",
    });
  };

  return (
    <div className="cta">
      <a href="#contact" className="btn">
        Contact Me
      </a>
      <a
        onClick={projectsBtnHandler}
        href="#portfolio"
        className="btn btn-primary"
      >
        Projects
      </a>
    </div>
  );
};

export default CTA;
