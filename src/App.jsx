import React from 'react';
import css from './App.module.css';
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Slogan from "./component/Slogan/Slogan";

const App = () => {
  return (
    <div className={css.App}>
    <Header />
    <Main />
    <Skills />
    <Projects />
    <Slogan />
    <Contact />
    <Footer />
    </div>
  );
};

export default App;
