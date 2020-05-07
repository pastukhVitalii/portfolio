import React from 'react';
import css from './Footer.module.css';

import logoFb from './../../img/facebook-brands.svg';
import logoGoogle from './../../img/google-plus-brands.svg';
import logoTelegram from './../../img/telegram-brands.svg';

const Footer = () => {
  return (
    <footer>
      <div className={css.container}>
        <div className={css.title}>
          <div>Frontend developer</div>
        </div>
        <div>
          <div className={css.socialLink}>
            <img src={logoFb} alt="logoFb"/>
            <img src={logoGoogle} alt="logoGoogle"/>
            <img src={logoTelegram} alt="logoTelegram"/>
          </div>
        </div>
        <div className={css.copyright}>
          <div> All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
