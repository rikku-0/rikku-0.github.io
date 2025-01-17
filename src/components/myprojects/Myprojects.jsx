import React from "react";
import "./myprojects.css";
import Pryon from "../../assets/pryon.png";
import SquareOffs from "../../assets/SquareOffs.png";
import storEDGE from "../../assets/storEDGE.png";
import Portfolio from "../../assets/Portfolio.png";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h2>Work</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Pryon} alt="" />
          </div>
          <h3>Pryon</h3>
          <small className="text-light">ReactJs | Node | gRPC</small>
          <div className="portfolio__item-cta">
            <a
              href="https://pryon.zendesk.com/hc/en-us/articles/28078591613069-Pryon-Platform"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Analytics Platform
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SquareOffs} alt="" />
          </div>
          <h3>SquareOffs</h3>
          <small className="text-light">Ruby on Rails | PostgreSQL</small>
          <div className="portfolio__item-cta">
            <a
              href="https://squareoffs.com/rikku/what-is-the-meaning-of-life"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              The Opinion Network
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={storEDGE} alt="" />
          </div>
          <h3>storEDGE</h3>
          <small className="text-light">
            Ruby on Rails | PostgreSQL | React
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://help.storedge.com/hc/en-us/articles/208202646-Two-Way-Texting"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Two-Way Texting
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio} alt="" />
          </div>
          <h3>Portfolio (This website)</h3>
          <small className="text-light">ReactJs</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/rikku-0/rikku-0.github.io"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Myprojects;
