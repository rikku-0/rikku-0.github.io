import React from "react";
import "./about.css";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="container about__container">
        <div className="about__content">
          <p>
            I'm a <b>Senior Full Stack Software Engineer</b> with expertise in
            React, Node, and Ruby on Rails, and a background in web application
            development, physics, advanced mathematics, computer interfacing,
            and cognitive science.
          </p>
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h3>Degree</h3>
              <p>
                Master’s Degree, Physics
                <br />
                <i>University of Missouri, Kansas City</i>
                <br />
                3.97 G.P.A.
              </p>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h3>Awards</h3>
              <p>
                Kansas City's Top VC-Backed Companies - 2021
                <br />
                12 Kansas City Startups to Watch in 2019
              </p>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h3>Domains</h3>
              <p>
                Web Application Development
                <br />
                Full-Stack API Development
                <br />
                User-Centric Solutions
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
