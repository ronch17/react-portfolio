import React from "react";
import "./experience.css";
import ExperienceContent from "./ExperienceContent";

const experience = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS/SASS",
      "Javascript",
      "TypeScript",
      "React",
      "Wordpress",
    ],
  },
  {
    title: "Backend Development",
    skills: ["Node", "Express", "MongoDB", "PHP", "Python"],
  },
  {
    title: "UI/UX",
    skills: ["Elementor", "Figma", "Adobe XD", "Illustrator", "Photoshop"],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {experience.map((item) => {
          return <ExperienceContent title={item.title} skills={item.skills} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
