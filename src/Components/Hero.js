import React from "react";
import photoGrid from "../Images/photo-grid.png";

export default function Hero(){
  return(
    <section className="hero">
      <img className="hero--photo-grid" src={photoGrid} alt=""/>
      <div className="hero--text">
        <h1 className="hero--header">Online experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </section>
  );
}