import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { SiCypress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiSwagger } from 'react-icons/si';
import { TbBrandPhp } from 'react-icons/tb';
import { DiGitMerge } from 'react-icons/di';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I know</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <h4>HTML5</h4>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <h4>CSS3</h4>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React.js</h4>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <h4>Typescript</h4>
            </article>
            <article className="experience__details">
              <SiJest className="experience__details-icon" />
              <h4>Jest</h4>
            </article>
            <article className="experience__details">
              <SiCypress className="experience__details-icon" />
              <h4>Cypress</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Express</h4>
            </article>
            <article className="experience__details">
              <SiSwagger className="experience__details-icon" />
              <h4>Swagger</h4>
            </article>
            <article className="experience__details">
              <TbBrandPhp className="experience__details-icon" />
              <h4>PHP</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Rest APIs</h4>
            </article>
            <article className="experience__details">
              <DiGitMerge className="experience__details-icon" />
              <h4>Git/GitHub/Bitbucket</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience