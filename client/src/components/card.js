import React from 'react'
import styles from '../App.module.css';

export default function Card(props) {
  return (
    <div className={styles.card}>
        <img src={props.cardIcon} alt="" className={styles.cardIcon} />
        <h1 className={styles.cardName} >{props.cardName}</h1>
    </div>
  );
}