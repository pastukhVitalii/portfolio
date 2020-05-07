import React from 'react';
import css from './Skill.module.css';

import logoReact from './../../../img/react-brands.svg';

const Skill = () => {
  return (
    <div className={css.skill}>
      <div className={css.logo}>
        <img src={logoReact} alt=""/>
      </div>
      <div className={css.description}>
        <div className={css.title}>React</div>
        <div className={css.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
      </div>
    </div>
  );
};

export default Skill;
