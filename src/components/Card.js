import React from "react";
import './Card.css';


      // "src": "https://github.com/samergain/local-up/blob/main/client/src/images/homepage.PNG?raw=true",
      // "alt":"screenshot of localup project",
      // "title": "LocalUP",
      // "repoLink": "https://github.com/samergain/local-up",
      // "deployedLink": "https://localup.herokuapp.com/",
      // "description": "Local-UP is designed to be a project management system with 3 portals (Clients/Admins/Devs). It will help fresh devs to work together on building websites and other e-services for local businesses.",
      // "techs": "MERN application built with MongoDB, JWT, react, React-Reveal, axios, and bootstrap. Supports multiple user types and resource/permission management",
      // "guestAccount": 

function Card(props) {
  return (
    <>
    <div className="col mb-4">
      <div className="card">
          <img src={ props.src } className="card-img-top" alt={ props.alt } />
          <div className="card-body">
            <h5 className="card-title">{ props.title }</h5>
            <p className="card-text"><strong>Concept: </strong>{ props.description}</p>
            <p className="card-text"><strong>Techs: </strong>{ props.techs}</p>
            <p className="card-text"><strong>Guest Login: </strong>{ props.guestAccount}</p>
            <button className="cardLinks"><a href={ props.repoLink } target="_blank" rel="noreferrer">Code</a></button>
            <button className="cardLinks"><a href={ props.deployedLink } target="_blank" rel="noreferrer">Deployed</a></button>
          </div>
      </div>
    </div>
    </>
  );
}

export default Card;


                


