import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="image-div">
        <img src={props.img} alt="" className="img"/>
      </div>
      <div className="info">
        <span className="inline">
          <img src="location.jpg" alt="" className="location" />
          <h4>{props.country}</h4>
          <p>
            <a
              target="_blank"
              href={props.gmaps}
              className="location-link"
            >
              View on Google Maps
            </a>
          </p>
        </span>
        <h1>{props.city}</h1>
        <h4>{props.date}</h4>
        <p>
            {props.description}
        </p>
      </div>
    </div>
  );
}
