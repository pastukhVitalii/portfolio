import React from 'react';
import css from './Project.module.css';

// import blog from './../../../img/blog.PNG';
/*let arr = [{url: 'https://cdn.psdrepo.com/images/2x/raw-one-page-psd-template-for-restaurants-and-bars-t9.jpg'},
  {url: 'https://cdn.psdrepo.com/images/2x/alonzo-landing-page-psd-template-free-download-k6.jpg'}];*/
// let imgUrl = 'https://cdn.psdrepo.com/images/2x/alonzo-landing-page-psd-template-free-download-k6.jpg';
// let imgUrl = 'https://cdn.dribbble.com/users/192239/screenshots/3529761/sales-dashboard-dark.png';
let imgUrl = 'https://cdn.psdrepo.com/images/2x/raw-one-page-psd-template-for-restaurants-and-bars-t9.jpg';
const divStyle = {
  backgroundImage: 'url(' + imgUrl + ')',
};

const Project = () => {
  return (
    <div className={css.project}>
      <div className={css.preview} style={divStyle}>fff
        <button className={css.btn}>more</button>
      </div>
      <div className={css.description}>
        <div className={css.title}>Blog</div>
        <div className={css.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, rerum?</div>
      </div>
    </div>
  );
};

export default Project;
