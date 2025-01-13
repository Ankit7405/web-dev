import React from "react";
import style from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

const Projects = () => {
  return (
    <section className={style.container} id="projects">
      <h2 className={style.title}>Projects</h2>
      <div className={style.projects}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={style.project}>
              <img className={style.projectImage}
                src={getImageUrl(project.imageSrc)}
                alt={`Image of ${project.title}`}
              />
              <h3 className={style.projectTitle}>{project.title}</h3>
              <p className={style.projectDesc}>{project.description}</p>
              <ul className={style.projectSkills}>
                {project.skills.map((skill, id) => {
                  return <li key={id}>{skill}</li>;
                })}
              </ul>
              <div className={style.projectCodeBase}>
                <a className={style.projectDemo} href={project.demo}>Demo</a>
                <a className={style.projectCode} href={project.source}>Source</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
