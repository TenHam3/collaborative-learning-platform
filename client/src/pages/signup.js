import React from 'react'
import styles from '../auth.module.css';

export default function Signup() {
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
        <form>
          {/* Need username, email, and password */}
          <div className={styles["field-container"]}>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles["field-container"]}>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className={styles["field-container"]}>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
        </form>
      </div>
    </div>
  )
}
