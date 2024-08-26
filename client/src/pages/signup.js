import React, { useState } from 'react';
import styles from '../auth.module.css';
import '../globals.css';
import { Link } from 'react-router-dom';

export default function Signup() {

  const handleForm = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  } 

  return (
    <div className={styles.container}>
      <div className={styles["side-section"]}>
        <div className={styles["background-image"]} />
        <div className={styles.banner}>
            <img src="images/paperclip.svg" />
            <h1>Collaborative Learning Platform</h1>
        </div>
      </div>
      <div className={styles["form-section"]}>
        <form onSubmit={handleForm}>
          <div className={styles["form-container"]}>
            <div className={styles["field-container"]}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className={styles["field-container"]}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className={styles["field-container"]}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <button className={styles["submit-btn"]} type="submit">Submit</button>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}
