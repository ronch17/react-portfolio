import { useState } from "react";
import "./portfolio.css";
import toDos from "../../assets/todos-app.png";
import diceRoll from "../../assets/dice-rolling.png";
import arcadeGame from "../../assets/arcade-game.png";
import wwWizard from "../../assets/wwWizard.png";
import interviewApp from "../../assets/ai-interview-app.png"
import bgApp from "../../assets/bg-app.png"
import parallax from "../../assets/parallax.png"
import parallax2 from "../../assets/parallax2.png"
import template1 from "../../assets/template1.png"
import template2 from "../../assets/template2.png"
import template3 from "../../assets/template3.png"
import template4 from "../../assets/template4.png"
import template5 from "../../assets/template5.png"
import template6 from "../../assets/template6.png"
import omFinance from "../../assets/om-finance.png"
import kingOfPuh from "../../assets/king-of-puh.png"
import LoadMoreBtn from "./LoadMoreBtn"
import Apps from "./apps/Apps";

const dummyPortfolio = [
  {
    image: interviewApp,
    title: "Ai Interview App",
    links: ["https://github.com/ronch17/Todos-app", "https://ai-mock-interviews-one-rust.vercel.app/"],
  },
  {
    image: bgApp,
    title: "Image Background Generator App",
    links: ["https://github.com/ronch17/Todos-app", "https://remove-bg-wine.vercel.app/"],
  },
  {
    image: toDos,
    title: "To-Dos Management App",
    links: ["https://github.com/ronch17/Todos-app", "https://ron-todos-app.netlify.app/"],
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

const websites = [
  {
    image: parallax,
    title: "Parallax",
    links: ["https://github.com/ronch17/Todos-app", "https://ron-dev.com/"],
  },
  {
    image: parallax2,
    title: "Parallax 2",
    links: ["https://github.com/ronch17/Todos-app", "https://template2.ron-dev.com/account-types-new"],
  },
  {
    image: template1,
    title: "Template 1",
    links: ["https://github.com/ronch17/Todos-app", "https://template1.ron-dev.com/account-types-new"],
  },
  {
    image: template2,
    title: "template 3",
    links: ["https://github.com/ronch17/wwwizard", "https://template3.ron-dev.com/account-types-new"],
  },
  {
    image: template3,
    title: "Template 4",
    links: ["https://github.com/ronch17/RollAndDice", "https://template4.ron-dev.com/account-types-new"],
  },
  {
    image: template4,
    title: "Template 5",
    links: ["https://github.com/ronch17/Arcade-Game", "https://template5.ron-dev.com/account-types-new"],
  },
  {
    image: template5,
    title: "Template 6",
    links: ["https://github.com/ronch17/Arcade-Game", "https://template6.ron-dev.com/account-types-new"],
  },
  {
    image: template6,
    title: "Template 7",
    links: ["https://github.com/ronch17/Arcade-Game", "https://demo3-theme.leveratetech.com/"],
  },
  {
    image: omFinance,
    title: "OM Finance",
    links: ["https://github.com/ronch17/Arcade-Game", "https://om-finance.com/"],
  },
  {
    image: kingOfPuh,
    title: "King Of Puh",
    links: ["https://github.com/ronch17/Arcade-Game", "https://kingofpuh.co.il/"],
  },
  {
    image: wwWizard,
    title: "My custom website",
    links: ["https://github.com/ronch17/wwwizard", "https://wwwizard.co.il/"],
  },
];


const Portfolio = () => {
  const [data, setData] = useState({dummyPortfolio, websites});
  const [visible, setVisible] = useState(3);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <Apps visible={visible} data={data.dummyPortfolio} />
      </div>
      <LoadMoreBtn loadMore={loadMore}/>
      <br/>
      <div className="container portfolio__container">
        <Apps visible={visible} data={data.websites} />
      </div>
      <LoadMoreBtn loadMore={loadMore}/>
    </section>
  );
};

export default Portfolio;
