import React from 'react';
import IMG1 from '../../assets/js-masters.png';
import ComingSoon from '../../assets/coming-soon.png';

import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'JS Masters',
      img: IMG1,
      description:
        'Popular Javscript coding questions with answers',
      technologies: 'React | HTML5 | CSS3',
      link: 'https://anshuman1307.github.io/js-masters',
      github: 'https://github.com/anshuman1307/js-masters',
    },
    {
      id: 2,
      title: 'More coming soon',
      img: ComingSoon,
      description:
        'Working on multiple side projects',
      technologies: 'React | Redux | Express | HTML5 | CSS3',
      link: '',
      github: '',
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
            {pro.github &&
             <a
             href={pro.github}
             target="_blank"
             className="btn"
             rel="noreferrer"
           >
             GitHub
           </a>
          }
          {pro.link !== ''?
                          <a
                          href={pro.link}
                          className="btn btn-primary"
                          rel="noreferrer"
                        >
                          Visit Website
                        </a>
          :
            <a
            href='javascript:void(0)'
            target="_blank"
            className="btn btn-disable"
            rel="noreferrer"
          >
            Visit Website
          </a>
          }
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
