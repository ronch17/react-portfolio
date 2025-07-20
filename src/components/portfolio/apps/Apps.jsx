import React from "react";
import "./Apps.css";

const Apps = ({ visible, data, loadMore }) => {
  return (
    <>
      {data.slice(0, visible).map((item) => {
        const id = item.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "");

        return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img height="250" src={item.image} alt={item.image} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={item.links[0]}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={item.links[1]}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default Apps;
