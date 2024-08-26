import React from 'react'
import styles from '../auth.module.css';
import '../globals.css';
import { Link } from 'react-router-dom';

export default function Login() {

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
              <h3 className={styles["form-title"]}>Log in</h3>
                <div>
                  <label htmlFor="emailOrUsername">Email Or Username</label>
                  <input type="text" id="emailOrUsername" name="emailOrUsername" placeholder="Enter email or username"/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" placeholder="Enter password" required />
                </div>
                <button className={styles["submit-btn"]} type="submit">Submit</button>
                <div className={styles["auth-redirect"]}>
                  <p>Need an account? <Link to="/signup">Sign up</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
}