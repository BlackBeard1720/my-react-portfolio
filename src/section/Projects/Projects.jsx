import React from "react";
import styles from "./ProjectsStyles.module.css";
import shineSmile from "../../assets/shineSmile.png";
import rabbit from "../../assets/rabbit.png";
import youtube from "../../assets/youtube.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={shineSmile}
          link="https://github.com/BlackBeard1720/figma-to-html-03"
          h3="Shine smile"
          p="Responsive dental landing page"
        />
        <ProjectCard
          src={rabbit}
          link="https://github.com/BlackBeard1720/figma-to-html-04"
          h3="Rabbit WEB3"
          p="Web3 wallet landing page UI"
        />
        <ProjectCard
          src={youtube}
          link="https://github.com/BlackBeard1720/figma-to-html-03"
          h3="Simple youtube clone"
          p="React web app with API & auth"
        />
      </div>
    </section>
  );
}

export default Projects;
