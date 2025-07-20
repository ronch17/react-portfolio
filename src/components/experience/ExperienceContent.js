import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const ExperienceContent = ({ title, skills }) => {
  return (
    <div>
      <div className="experience__frontend">
        <h3>{title}</h3>
        <div className="experience__content">
          {skills.map((skill) => {
            return (
              <article key={skill} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;
