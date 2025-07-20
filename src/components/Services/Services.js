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
      "Mananged the customers vps's using Linux and Bash scripts, maintained and deployed the websites with Docker.",
    ],
  },
  {
    title: "Leverate",
    service: [
      "Developed and designed websites from scratch depends on the client specifications, using Figma for the design, developed with Php, Bootstrap, Css, Javascript",
      "Developed the WordPress Cms creating Advanced custom fields and custom post types for giving advanced, easy maintained editor options.",
      "Worked on the company client - Developed forms with validations for sending and retrieving dynamic user data with React, TypeScript, using Zod and React hook forms.",
    ],
  },
  {
    title: "Guerrilla Digital School",
    service: [
      "Developed and maintained the website according to the Figma design using WordPress, Css, Javascript",
      "Developed the WordPress cms using advanced custom field and custom post types",
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
          const id = service.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
          return (
            <Service key={id} title={service.title} service={service.service} />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
