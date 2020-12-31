import React from "react";
import Card from "./Card";
import Projects from "../projects.json";
import Fade from 'react-reveal/Fade';
//import Jump from 'react-reveal/Jump';

function CardsContainer() {
  return (
    <>
       <div className="container mt-5 rounded bg-light">
        <div className="row">
        <div className="col">
            <h1 className="pt-3 pl-3">WHAT CAN I DO SO FAR?</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-2">
                {
                  Projects.map(project => (
                    <Fade left>
                    <Card 
                    src={project.src}
                    alt ={project.alt}
                    title= {project.title}
                    repoLink= {project.repoLink}
                    description= {project.description}
                    />
                    </Fade>
                  ))
                }
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default CardsContainer;