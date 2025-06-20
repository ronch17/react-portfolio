import Service from "./Service";
import "./services.css";

const myServices = [
  {
    title: "Proftit",
    service: [
      "Web Development: design and develop custom websites from scratch, utilizing modern web technologies such as HTML, CSS, JavaScript, Wordpress, PHP and React",
      "Front-End Development: develop the front-end part of websites, including user interfaces, responsive designs, and interactive elements to enhance user experience.",

      "Wordpress Development: design and create Wordpress websites, Ecommerce, content and one pages, and give the customer the option to manage, change and maintain the content easily",
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
