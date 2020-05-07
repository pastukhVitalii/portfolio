import React from 'react';
import css from './Nav.module.css';

const Nav = () => {
  return (
    <div className={css.nav}>
      <a href="" className={css.link}>Main</a>
      <a href="" className={css.link}>About Me</a>
      <a href="" className={css.link}>Slills</a>
      <a href="" className={css.link}>Project</a>
      <a href="" className={css.link}>Contact</a>
    </div>
  );
};

export default Nav;
