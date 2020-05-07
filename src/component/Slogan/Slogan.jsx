import React from 'react';
import css from './Slogan.module.css';

const Slogan = () => {
  return (
    <div className={css.slogan}>
      <div className={css.container}>
        <div className={css.title}>
          <div>My slogan</div>
        </div>
        <div className={css.btn}>
          <button>hire me</button>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
