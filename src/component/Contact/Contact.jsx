import React from 'react';
import css from './Contact.module.css';

const Contact = () => {
  return (
    <div className={css.contact}>
      <div className={css.container}>
        <div className={css.title}>
          <div>Contact</div>
        </div>
        <div>
          <form className={css.form}>
            <label><input type="text" className={css.inputName} placeholder='your name'/></label>
            <label><input type="text" className={css.inputEmail} placeholder='your email'/></label>
            <label><textarea className={css.textArea} placeholder='your messages'></textarea> </label>
          </form>
        </div>
        <label><input type="submit" value="send" className={css.btn}/></label>
      </div>
    </div>
  );
};

export default Contact;
