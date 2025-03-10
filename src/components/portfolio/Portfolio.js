import { useCallback, useEffect, useState } from "react";
import "./portfolio.css";
import toDos from "../../assets/todos-app.png";
import diceRoll from "../../assets/dice-rolling.png";
import arcadeGame from "../../assets/arcade-game.png";
import wwWizard from "../../assets/wwWizard.png";

const dummyPortfolio = [
  {
    image: toDos,
    title: "To-Dos Management app",
    links: ["https://github.com/ronch17/Todos-app", "https://ron-todos-app.netlify.app/"],
  },
  {
    image: wwWizard,
    title: "My custom website",
    links: ["https://github.com/ronch17/wwwizard", "https://wwwizard.co.il/"],
  },
  {
    image: diceRoll,
    title: "Rolling dice 2 player game",
    links: ["https://github.com/ronch17/RollAndDice", "https://ron-dice-roll.netlify.app/"],
  },
  {
    image: arcadeGame,
    title: "Guess the number game",
    links: ["https://github.com/ronch17/Arcade-Game", "https://ron-arcade-game.netlify.app/"],
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
