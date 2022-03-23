import React from "react";
import starIcon from "../Images/star.png";


export default function Card(props){

  console.log()

  let badgeText 

  if(props.openSpots === 0){
    badgeText = 'SOLD OUT'
  } else if(props.element.location === 'Online') {
    badgeText = 'ONLINE'
  }

  return(
      <div className="card">
        {badgeText && <div className="card--sold-out">{badgeText}</div>}
        <img src={`./Images/${props.element.coverImg}`} alt="" />
        <div className="card--rating">
          <img src={starIcon} alt="" />
          <div className="card--rating-info">
            <span>{props.element.stats.rating}</span>
            <span className="grey-text">({props.element.stats.reviewCount})</span>
            <span className="grey-text">• {props.element.location}</span>
          </div>
        </div>
        <p>{props.element.title}</p>
        <p className="price"><b>From ${props.element.price}</b> / person</p>
      </div>
  );
}