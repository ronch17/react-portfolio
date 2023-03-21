import React from "react";
import { BsCheck } from "react-icons/bs";

const Service = ({ title, service }) => {
  return (
    <div>
      <article className="service">
        <div className="service__head">
          <h3>{title}</h3>
        </div>

        <ul className="service__list">
          {service.map((serv) => {
            return (
              <li>
                <BsCheck className="service__list-icon" />
                <small>{serv}</small>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default Service;
