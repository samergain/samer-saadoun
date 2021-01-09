import React from "react";
import './Card.css';


function Card(props) {
  return (
    <>
    <div className="col mb-4">
      <div className="card">
          <img src={ props.src } className="card-img-top" alt={ props.alt } />
          <div className="card-body">
            <h5 className="card-title">{ props.title }</h5>
            <a href={ props.repoLink } target="_blank" rel="noreferrer">Check it out on GitHub</a>
            <p className="card-text">{ props.description}</p>
          </div>
      </div>
    </div>
    </>
  );
}

export default Card;


                

