import React from 'react';
import css from './Projects.module.css';
import Project from "./Project/Project";

const Projects = () => {
  return (
    <div className={css.project}>
      <div className={css.title}>
        <div>My projects</div>
      </div>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.block}>
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
