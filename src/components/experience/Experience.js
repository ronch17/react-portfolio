import React from "react";
import "./experience.css";
import ExperienceContent from "./ExperienceContent";

const experience = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS/SASS",
      "Tailwind",
      "Vanilla Javascript",
      "TypeScript",
      "React",
      "Next.js",
      "Wordpress",
    ],
  },
  {
    title: "Backend Development",
    skills: ["Node", "FireBase","MySql", "MongoDB", "PHP", "Python"],
  },
  {
    title: "UI/UX",
    skills: ["Elementor", "GSAP", "Figma", "Adobe XD", "Illustrator", "Photoshop"],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>5 years of of learning</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        {experience.map((item) => {
          return <ExperienceContent title={item.title} skills={item.skills} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
