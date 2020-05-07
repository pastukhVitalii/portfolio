import React from 'react';
import css from './Skills.module.css';
import Skill from "./Skill/Skill";

const Skills = () => {
  return (
    <div className={css.skills}>
      <div className={css.title}>
        <div>My skills</div>
      </div>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.block}>
            <Skill />
            <Skill />
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
