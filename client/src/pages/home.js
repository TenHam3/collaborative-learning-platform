import React from 'react'
import styles from '../App.module.css';
import Sidebar from '../components/sidebar';
import Card from '../components/card';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.greeting}>
          <div className={styles["pfp-container"]}>
            <img src="/images/cat.png" alt="Profile" className={styles["contained-img"]} />
          </div>
          <h1>Hello, username</h1>
        </div>
        <h1 className={styles.title}>Collaborative Learning Platform</h1>
      </div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles["cards-container"]}>
          <Card cardName="Documents" cardIcon="/images/file-document.svg" />
        </div>
      </div>
    </div>
  )
}