import React from 'react';
import { FaAward } from 'react-icons/fa';
import { ImOffice } from 'react-icons/im';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ years</small>
            </article>
            <article className="about__card">
              <ImOffice className="about__icon" />
              <h5>Currently</h5>
              <small>Working as Advanced App engineering specialist at Accenture UK</small>
            </article>
          </div>
          <p>Experienced Web Application Developer with a demonstrated history of working in the internet / web industry. 
Skilled in Javascript, React JS, Redux, jQuery, Node.js, PHP, ECMAScript, MySql, Linux, Git, Agile methodologies.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro