import React from 'react'
import '../App.css';

export default function Card(props) {
  return (
    <div className="card">
        <img src={props.cardIcon} alt="" className="cardIcon" />
        <h1 className="cardName" >{props.cardName}</h1>
    </div>
  );
}