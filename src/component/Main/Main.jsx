import React from 'react';
import css from './Main.module.css';

const Main = () => {
  return (
    <div className={css.main}>
      <div className={css.container}>
        <div className={css.welcome}>
          <span>Hi there</span>
          <span>I am Vitaliy</span>
          <span> a frontend developer</span>
        </div>
        <div className={css.myPhoto}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnwARD97s-j_B5O25nx4IZs6e0-JrkcjpJpCLd6NGEA99c4Co_&usqp=CAU" alt="my photo"/>
        </div>
      </div>
    </div>
  );
};

export default Main;
