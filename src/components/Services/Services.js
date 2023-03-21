import Service from "./Service";
import "./services.css";

const myServices = [
  {
    title: "Websites Development",
    service: [
      "Web Development: I can design and develop custom websites from scratch, utilizing modern web technologies such as HTML, CSS, JavaScript, Wordpress, PHP and React",
      "Front-End Development: I can develop the front-end part of websites, including user interfaces, responsive designs, and interactive elements to enhance user experience.",
      "E-commerce Website Development: I can design and develop e-commerce Wordpress websites with payment gateway integration, shopping carts, product management, and other e-commerce features.",
      "Wordpress Content Websites Development: can design and create Wordpress websites and give the customer the option to manage, change and maintain the content easily",
      "Page builder websites: can design and build E-commerce and content websites with Elementor, WP bakery, and more",
      "Website Optimization: I can optimize websites for speed, performance, and search engine optimization (SEO), including image optimization, code optimization, and content optimization.",
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {myServices.map((service) => {
          return <Service title={service.title} service={service.service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
