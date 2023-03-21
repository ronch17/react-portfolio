import { useCallback, useEffect, useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Artboard 2.png";

const dummyPortfolio = [
  {
    image: IMG1,
    title: "This is a portfolio item title",
    links: ["https://github.com/ronch17", "https://facebook.com"],
  },
  {
    image: IMG1,
    title: "This is a portfolio item title",
    links: ["https://github.com/ronch17", "https://facebook.com"],
  },
  {
    image: IMG1,
    title: "This is a portfolio item title",
    links: ["https://github.com/ronch17", "https://facebook.com"],
  },
  {
    image: IMG1,
    title: "This is a portfolio item title",
    links: ["https://github.com/ronch17", "https://facebook.com"],
  },
  {
    image: IMG1,
    title: "This is a portfolio item title",
    links: ["https://github.com/ronch17", "https://facebook.com"],
  },
  {
    image: IMG1,
    title: "This is a portfolio item title",
    links: ["https://github.com/ronch17", "https://facebook.com"],
  },
  {
    image: IMG1,
    title: "This is a portfolio item title",
    links: ["https://github.com/ronch17", "https://facebook.com"],
  },
  {
    image: IMG1,
    title: "This is a portfolio item title",
    links: ["https://github.com/ronch17", "https://facebook.com"],
  },
  {
    image: IMG1,
    title: "This is a portfolio item title",
    links: ["https://github.com/ronch17", "https://facebook.com"],
  },
];

const Portfolio = () => {
  const [data, setData] = useState(dummyPortfolio);
  const [visible, setVisible] = useState(3);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.slice(0, visible).map((item) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.image} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.links[0]} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={item.links[1]}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="load-more">
        <button className="btn btn-primary " onClick={loadMore}>
          Load More
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
