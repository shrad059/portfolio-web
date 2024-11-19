import React from "react";
import { motion } from "framer-motion";
// import { styles } from "../styles";
import { projects } from "../constants"; // Ensure this path is correct
// import { SectionWrapper } from "../hoc"; // Ensure this path is correct
import { textVariant } from "../utils/motion.js"; // Ensure this path is correct
import { Tilt } from "react-tilt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ name, description, tags, image, github_link, source_code_link }) => {
  return (
    <div className="portfolio-item">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="portfolio-item-inner"
      >
        <div>
          <img src={image} alt="project_image" className="project-image" />
          <div className="project-mask">
            <div className="iconLink">
              <div
                onClick={() => window.open(github_link, "_blank")}
                className="github-link"
              >
                <FontAwesomeIcon icon={faGithub} className="git-icon" />
              </div>
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="project-content">
          <p className="project-title text-white ">{name}</p>
          <p className="project-description text-white">{description}</p>
        </div>
      </Tilt>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <motion.div variants={textVariant()}>
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        </motion.div>
        <div className="portfolio-row">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
