import React from 'react';
import css from './Header.module.css';
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <header>
      <div className={css.container}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
