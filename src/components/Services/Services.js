import Service from "./Service";
import "./services.css";

const myServices = [
  {
    title: "Proftit",
    service: [
      "Developed web applications from scratch according to Figma designs, using JavaScript, Php, Scss, Gsap, WordPress and more.",
      "Developed authentication system for the websites using React and TypeSript as widgets, which allows users login and register to the website and get access to deposit area widgets",
      "Developed deposits area widgets with React and TypeSript giving the logged in users access to deposit, withdrawal, transfer and more. connected to the company database using REST API.",
      "Utilized websites with GSAP and intersection observer for creating custom unique animations which enhanced the user experience and increased the company revenue by 20%.",
      "Mananged the customers vps's using Linux and Bash scripts, maintained and deployed the websites with Docker."
    ],
  },
  {
    title: "Leverate",
    service: [
      "Designing the website and app user interfaces according to the website or app goals choosing the right colors, Hierarchy using the UI design princeples using Figma/XD",
      "Logos and Icons design that fit for the website/app using Illustartor, Canva",
      "Designing and creating specifiec mockups and pictures using Photoshop",
      "Creating lotties using Figma/After Effects",
    ],
  },
  {
    title: "Guerrilla Digital School",
    service: [
      "Designing the website and app user interfaces according to the website or app goals choosing the right colors, Hierarchy using the UI design princeples using Figma/XD",
      "Logos and Icons design that fit for the website/app using Illustartor, Canva",
      "Designing and creating specifiec mockups and pictures using Photoshop",
      "Creating lotties using Figma/After Effects",
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>Worked in the industry</h5>
      <h2>Experience</h2>
      <div className="container services__container">
        {myServices.map((service) => {
          return <Service title={service.title} service={service.service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
